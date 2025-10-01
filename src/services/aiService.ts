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
    
    const envValue = import.meta.env[envKey];
    const storageValue = localStorage.getItem(storageKey);
    return envValue || storageValue;
  }

  private async callOpenAI(message: string): Promise<AIResponse> {
    const apiKey = this.getApiKey('OpenAI');
    if (!apiKey) {
      return { success: false, message: '', error: 'OpenAI API key not found', provider: 'OpenAI' };
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
              content: `You are an expert AI guide specializing in Africa with deep knowledge about all aspects of the continent. You provide detailed, accurate, and engaging responses about:
              - African history from ancient times to present
              - All 54 African countries and their cultures
              - Wildlife, geography, and ecosystems
              - Current events and developments
              - Future predictions and trends
              - Travel and tourism information
              - Economic and political developments
              - Languages, traditions, and customs
              - Climate and environmental issues
              - Art, music, and literature
              
              Always provide comprehensive, informative responses that showcase Africa's rich heritage, diversity, and bright future. Be enthusiastic and knowledgeable in your responses.`
            },
            {
              role: 'user',
              content: message
            }
          ],
          max_tokens: 800,
          temperature: 0.7
        })
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(`OpenAI API error: ${response.status} - ${errorData.error?.message || 'Unknown error'}`);
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
      return { success: false, message: '', error: 'DeepSeek API key not found', provider: 'DeepSeek' };
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
              content: `You are an expert AI guide specializing in Africa with deep knowledge about all aspects of the continent. You provide detailed, accurate, and engaging responses about:
              - African history from ancient times to present
              - All 54 African countries and their cultures
              - Wildlife, geography, and ecosystems
              - Current events and developments
              - Future predictions and trends
              - Travel and tourism information
              - Economic and political developments
              - Languages, traditions, and customs
              - Climate and environmental issues
              - Art, music, and literature
              
              Always provide comprehensive, informative responses that showcase Africa's rich heritage, diversity, and bright future. Be enthusiastic and knowledgeable in your responses.`
            },
            {
              role: 'user',
              content: message
            }
          ],
          max_tokens: 800,
          temperature: 0.7
        })
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(`DeepSeek API error: ${response.status} - ${errorData.error?.message || 'Unknown error'}`);
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
    
    // Travel and tourism questions
    if (lowerMessage.includes('travel') || lowerMessage.includes('visit') || lowerMessage.includes('tourism') || lowerMessage.includes('trip')) {
      return "Africa offers incredible travel experiences! From the pyramids of Egypt to the wildlife of Kenya and Tanzania, the beaches of Zanzibar to the wine regions of South Africa. Each country has unique attractions - Morocco's souks, Rwanda's mountain gorillas, Botswana's Okavango Delta, and Ethiopia's rock churches. What specific destination or type of experience interests you most?";
    }
    
    // Economic questions
    if (lowerMessage.includes('economy') || lowerMessage.includes('business') || lowerMessage.includes('trade') || lowerMessage.includes('investment')) {
      return "Africa's economy is rapidly growing and diversifying! The continent has some of the world's fastest-growing economies, with countries like Rwanda, Ghana, and Ethiopia leading in various sectors. Key industries include mining, agriculture, technology, renewable energy, and manufacturing. The African Continental Free Trade Area (AfCFTA) is boosting intra-African trade. What aspect of Africa's economy would you like to explore?";
    }
    
    // Historical questions
    if (lowerMessage.includes('history') || lowerMessage.includes('past') || lowerMessage.includes('ancient')) {
      return "Africa has an incredibly rich and diverse history spanning millions of years! As the cradle of humanity, Africa is where our species first evolved. The continent has been home to advanced civilizations like the Kingdom of Kush, the Mali Empire, Great Zimbabwe, and the Ethiopian Empire. Ancient Egypt built the pyramids, while Timbuktu was a renowned center of learning and trade. African kingdoms like Axum, Songhai, and the Swahili city-states were major powers in their time. Would you like to explore a specific historical period, civilization, or region?";
    }
    
    // Wildlife questions
    if (lowerMessage.includes('wildlife') || lowerMessage.includes('animals') || lowerMessage.includes('safari')) {
      return "Africa is home to the world's most incredible wildlife! The famous 'Big Five' - lions, elephants, buffalo, leopards, and rhinos - roam the savannas alongside giraffes, hippos, cheetahs, and countless other species. The Great Migration in Kenya and Tanzania sees over 2 million wildebeest and zebras in their annual journey. Africa has over 1,100 bird species, from flamingos in the Rift Valley to penguins in South Africa. Mountain gorillas live in Rwanda and Uganda, while lemurs are unique to Madagascar. Which animals or ecosystems would you like to explore?";
    }
    
    // Culture questions
    if (lowerMessage.includes('culture') || lowerMessage.includes('tradition') || lowerMessage.includes('music')) {
      return "African culture is incredibly diverse with over 3,000 ethnic groups and 2,000+ languages! From the vibrant Maasai traditions in East Africa to the rich musical heritage that gave birth to jazz, blues, and reggae, Africa's cultural influence is global. Traditional art includes intricate masks, sculptures, and textiles. Dance and music vary beautifully across regions - from West African drumming to South African jazz. Festivals like Morocco's Gnawa Festival and Nigeria's Calabar Carnival showcase this diversity. What aspect of African culture interests you most?";
    }
    
    // Language questions
    if (lowerMessage.includes('language') || lowerMessage.includes('speak') || lowerMessage.includes('communication')) {
      return "Africa is linguistically incredibly diverse with over 2,000 languages! Major language families include Niger-Congo (including Swahili, Yoruba, Igbo), Afro-Asiatic (Arabic, Amharic, Hausa), Nilo-Saharan, and Khoisan (with unique click sounds). Colonial languages like English, French, Portuguese, and Arabic serve as official languages in many countries. Swahili is widely spoken in East Africa, while Hausa is common in West Africa. Which African languages or regions interest you?";
    }
    
    // Future predictions
    if (lowerMessage.includes('future') || lowerMessage.includes('prediction') || lowerMessage.includes('2030') || lowerMessage.includes('2050')) {
      return "Africa's future looks incredibly promising! By 2050, Africa will have the world's largest workforce with over 1.3 billion people under 35. The continent is leading in mobile banking innovation (like M-Pesa), renewable energy adoption, and has some of the fastest-growing economies globally. Tech hubs in Lagos, Nairobi, Cape Town, and Accra are driving innovation in fintech, healthtech, and agritech. The African Continental Free Trade Area will boost economic integration. Climate change adaptation and sustainable development are key focuses. What aspect of Africa's future interests you most?";
    }
    
    // Geography and climate questions
    if (lowerMessage.includes('geography') || lowerMessage.includes('climate') || lowerMessage.includes('weather') || lowerMessage.includes('environment')) {
      return "Africa's geography is incredibly diverse! The continent spans all four hemispheres and includes the Sahara Desert (world's largest hot desert), the Congo Basin rainforest (second-largest tropical rainforest), the Nile River (world's longest), and the Great Rift Valley. Climates range from Mediterranean in the north and south to tropical rainforest in central regions, with savannas, highlands, and coastal areas. Mount Kilimanjaro, Victoria Falls, and Lake Victoria are iconic landmarks. Which geographical features or regions interest you?";
    }
    
    // Default response
    return "That's a fascinating question about Africa! The continent is incredibly diverse with 54 countries, each with unique characteristics. From ancient civilizations like Egypt and Ethiopia to modern innovations in countries like Kenya and South Africa, from wildlife conservation to rapid economic growth, Africa continues to shape our world in countless ways. The continent offers everything from bustling cities to pristine wilderness, rich cultural traditions to cutting-edge technology. Could you be more specific about which aspect of Africa you'd like to explore? I'm here to help with any questions about African history, culture, wildlife, travel, economics, or future developments!";
  }

  async generateResponse(message: string): Promise<AIResponse> {
    // Enhanced message preprocessing
    const trimmedMessage = message.trim();
    if (!trimmedMessage) {
      return {
        success: true,
        message: "I'm here to help you learn about Africa! Please ask me anything about African countries, culture, history, wildlife, travel, or any other aspect of this amazing continent.",
        provider: 'System'
      };
    }

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
      error: `API services unavailable. OpenAI: ${openAIResponse.error || 'No key'}, DeepSeek: ${deepSeekResponse.error || 'No key'}`
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