export interface AIResponse {
  text: string;
  provider: string;
  error?: boolean;
}

class AIService {
  private openaiKey: string = '';
  private deepseekKey: string = '';

  setApiKey(provider: 'OpenAI' | 'DeepSeek', key: string): void {
    if (provider === 'OpenAI') {
      this.openaiKey = key;
      localStorage.setItem('openai_key', key);
    } else if (provider === 'DeepSeek') {
      this.deepseekKey = key;
      localStorage.setItem('deepseek_key', key);
    }
  }

  hasApiKeys(): { openai: boolean; deepseek: boolean } {
    const savedOpenAI = localStorage.getItem('openai_key');
    const savedDeepSeek = localStorage.getItem('deepseek_key');

    if (savedOpenAI) this.openaiKey = savedOpenAI;
    if (savedDeepSeek) this.deepseekKey = savedDeepSeek;

    return {
      openai: !!this.openaiKey,
      deepseek: !!this.deepseekKey
    };
  }

  async generateResponse(message: string): Promise<AIResponse> {
    if (!this.openaiKey && !this.deepseekKey) {
      return {
        text: "Please configure your API keys in the settings to use the AI chatbot. You can get OpenAI API keys from https://platform.openai.com/api-keys or DeepSeek API keys from https://platform.deepseek.com/api-keys",
        provider: 'System',
        error: true
      };
    }

    try {
      if (this.openaiKey) {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.openaiKey}`
          },
          body: JSON.stringify({
            model: 'gpt-3.5-turbo',
            messages: [
              {
                role: 'system',
                content: 'You are a knowledgeable AI assistant specializing in African history, culture, geography, wildlife, travel, and current events. Provide accurate, engaging, and respectful information about Africa.'
              },
              {
                role: 'user',
                content: message
              }
            ],
            max_tokens: 500
          })
        });

        if (!response.ok) {
          throw new Error(`OpenAI API error: ${response.statusText}`);
        }

        const data = await response.json();
        return {
          text: data.choices[0].message.content,
          provider: 'ChatGPT'
        };
      }

      if (this.deepseekKey) {
        const response = await fetch('https://api.deepseek.com/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.deepseekKey}`
          },
          body: JSON.stringify({
            model: 'deepseek-chat',
            messages: [
              {
                role: 'system',
                content: 'You are a knowledgeable AI assistant specializing in African history, culture, geography, wildlife, travel, and current events. Provide accurate, engaging, and respectful information about Africa.'
              },
              {
                role: 'user',
                content: message
              }
            ],
            max_tokens: 500
          })
        });

        if (!response.ok) {
          throw new Error(`DeepSeek API error: ${response.statusText}`);
        }

        const data = await response.json();
        return {
          text: data.choices[0].message.content,
          provider: 'DeepSeek'
        };
      }

      return {
        text: "No API key available",
        provider: 'System',
        error: true
      };
    } catch (error) {
      return {
        text: `Error: ${error instanceof Error ? error.message : 'Unknown error occurred'}`,
        provider: 'System',
        error: true
      };
    }
  }
}

export const aiService = new AIService();
