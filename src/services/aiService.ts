interface AIProvider {
  name: string;
  endpoint: string;
  model: string;
}

interface AIResponse {
  success: boolean;
  message: string;
  error?: string;
  provider?: string;
}

class AIService {
  private providers: AIProvider[] = [
    {
      name: 'OpenAI',
      endpoint: 'https://api.openai.com/v1/chat/completions',
      model: 'gpt-3.5-turbo'
    },
    {
      name: 'DeepSeek',
      endpoint: 'https://api.deepseek.com/v1/chat/completions',
      model: 'deepseek-chat'
    }
  ];

  private getApiKey(provider: string): string | null {
    // Try to get API keys from environment variables or localStorage
    const envKey = provider === 'OpenAI' ? 'VITE_OPENAI_API_KEY' : 'VITE_DEEPSEEK_API_KEY';
    const storageKey = provider === 'OpenAI' ? 'openai_api_key' : 'deepseek_api_key';
    
    return import.meta.env[envKey] || localStorage.getItem(storageKey);
  }

  private async callOpenAI(message: string): Promise<AIResponse> {
    const apiKey = this.getApiKey('OpenAI');
    if (!apiKey) {
      return { success: false, message: '', error: 'OpenAI API key not found' };
    }

    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'system',
              content: `You are an expert AI guide specializing in Africa. You have comprehensive knowledge about:
              - African history from ancient times to present
              - All 54 African countries and their cultures
              - Wildlife, geography, and ecosystems
              - Current events and developments
              - Future predictions and trends
              - Travel and tourism information
              - Economic and political developments
              
              Provide detailed, accurate, and engaging responses about Africa. Always be enthusiastic about the continent's rich heritage and bright future.`
            },
            {
              role: 'user',
              content: message
            }
          ],
          max_tokens: 500,
          temperature: 0.7
        })
      });

      if (!response.ok) {
        throw new Error(`OpenAI API error: ${response.status}`);
      }

      const data = await response.json();
      return {
        success: true,
        message: data.choices[0]?.message?.content || 'No response generated',
        provider: 'OpenAI GPT-3.5'
      };
    } catch (error) {
      return {
        success: false,
        message: '',
        error: `OpenAI error: ${error instanceof Error ? error.message : 'Unknown error'}`,
        provider: 'OpenAI'
      };
    }
  }

  private async callDeepSeek(message: string): Promise<AIResponse> {
    const apiKey = this.getApiKey('DeepSeek');
    if (!apiKey) {
      return { success: false, message: '', error: 'DeepSeek API key not found' };
    }

    try {
      const response = await fetch('https://api.deepseek.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: 'deepseek-chat',
          messages: [
            {
              role: 'system',
              content: `You are an expert AI guide specializing in Africa. You have comprehensive knowledge about:
              - African history from ancient times to present
              - All 54 African countries and their cultures
              - Wildlife, geography, and ecosystems
              - Current events and developments
              - Future predictions and trends
              - Travel and tourism information
              - Economic and political developments
              
              Provide detailed, accurate, and engaging responses about Africa. Always be enthusiastic about the continent's rich heritage and bright future.`
            },
            {
              role: 'user',
              content: message
            }
          ],
          max_tokens: 500,
          temperature: 0.7
        })
      });

      if (!response.ok) {
        throw new Error(`DeepSeek API error: ${response.status}`);
      }

      const data = await response.json();
      return {
        success: true,
        message: data.choices[0]?.message?.content || 'No response generated',
        provider: 'DeepSeek'
      };
    } catch (error) {
      return {
        success: false,
        message: '',
        error: `DeepSeek error: ${error instanceof Error ? error.message : 'Unknown error'}`,
        provider: 'DeepSeek'
      };
    }
  }

  private getFallbackResponse(message: string): string {
    const lowerMessage = message.toLowerCase();
    
    // Historical questions
    if (lowerMessage.includes('history') || lowerMessage.includes('past') || lowerMessage.includes('ancient')) {
      return "Africa has a rich and diverse history spanning millions of years. From the cradle of humanity in East Africa to the great kingdoms of Mali, Ghana, and Zimbabwe, Africa has been home to advanced civilizations. The ancient Kingdom of Kush ruled over Egypt, while Timbuktu was a center of learning and trade. Would you like to know about a specific historical period or civilization?";
    }
    
    // Wildlife questions
    if (lowerMessage.includes('wildlife') || lowerMessage.includes('animals') || lowerMessage.includes('safari')) {
      return "Africa is home to incredible wildlife! The 'Big Five' - lions, elephants, buffalo, leopards, and rhinos - roam the savannas. The Great Migration in Kenya and Tanzania sees over 2 million wildebeest and zebras move annually. Africa has over 1,100 bird species and unique animals like giraffes, hippos, and cheetahs. Which African animals would you like to learn more about?";
    }
    
    // Culture questions
    if (lowerMessage.includes('culture') || lowerMessage.includes('tradition') || lowerMessage.includes('music')) {
      return "African culture is incredibly diverse with over 3,000 ethnic groups and 2,000+ languages! From the vibrant Maasai traditions in East Africa to the rich musical heritage that gave birth to jazz and blues, Africa's cultural influence is global. Traditional art, dance, storytelling, and festivals vary beautifully across regions. What aspect of African culture interests you most?";
    }
    
    // Future predictions
    if (lowerMessage.includes('future') || lowerMessage.includes('prediction') || lowerMessage.includes('2030') || lowerMessage.includes('2050')) {
      return "Africa's future looks incredibly promising! By 2050, Africa will have the world's largest workforce with over 1 billion people under 35. The continent is leading in mobile banking innovation, renewable energy adoption, and has the fastest-growing economies globally. Tech hubs in Lagos, Nairobi, and Cape Town are driving innovation. What aspect of Africa's future interests you most?";
    }
    
    // Default response
    return "That's a fascinating question about Africa! The continent is incredibly diverse with 54 countries, each with unique characteristics. From ancient civilizations to modern innovations, from wildlife conservation to economic growth, Africa continues to shape our world. Could you be more specific about which aspect of Africa you'd like to explore?";
  }

  async generateResponse(message: string): Promise<AIResponse> {
    // Try OpenAI first
    const openAIResponse = await this.callOpenAI(message);
    if (openAIResponse.success) {
      return openAIResponse;
    }

    // Try DeepSeek as fallback
    const deepSeekResponse = await this.callDeepSeek(message);
    if (deepSeekResponse.success) {
      return deepSeekResponse;
    }

    // Use fallback response if both APIs fail
    return {
      success: true,
      message: this.getFallbackResponse(message),
      provider: 'Fallback System',
      error: `API services unavailable. Errors: ${openAIResponse.error}, ${deepSeekResponse.error}`
    };
  }

  // Method to set API keys
  setApiKey(provider: 'OpenAI' | 'DeepSeek', apiKey: string): void {
    const storageKey = provider === 'OpenAI' ? 'openai_api_key' : 'deepseek_api_key';
    localStorage.setItem(storageKey, apiKey);
  }

  // Method to check if API keys are available
  hasApiKeys(): { openai: boolean; deepseek: boolean } {
    return {
      openai: !!this.getApiKey('OpenAI'),
      deepseek: !!this.getApiKey('DeepSeek')
    };
  }
}

export const aiService = new AIService();
export type { AIResponse };