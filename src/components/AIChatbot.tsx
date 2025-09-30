import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, X, Bot, User, Sparkles, Crown, Globe, History, TrendingUp } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const AIChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm your AI guide to Africa. I can answer questions about African history, current events, culture, wildlife, travel, and future predictions. What would you like to know about the beautiful continent of Africa?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Simulate AI responses about Africa
  const generateAIResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
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
    
    // Geography questions
    if (lowerMessage.includes('geography') || lowerMessage.includes('countries') || lowerMessage.includes('continent')) {
      return "Africa is the world's second-largest continent with 54 countries! It spans all four hemispheres and includes the Sahara Desert, Congo Rainforest, Nile River, and Rift Valley. From Morocco's Atlas Mountains to South Africa's Cape of Good Hope, the geography is incredibly diverse. Which African region or country would you like to explore?";
    }
    
    // Future predictions
    if (lowerMessage.includes('future') || lowerMessage.includes('prediction') || lowerMessage.includes('2030') || lowerMessage.includes('2050')) {
      return "Africa's future looks incredibly promising! By 2050, Africa will have the world's largest workforce with over 1 billion people under 35. The continent is leading in mobile banking innovation, renewable energy adoption, and has the fastest-growing economies globally. Tech hubs in Lagos, Nairobi, and Cape Town are driving innovation. What aspect of Africa's future interests you most?";
    }
    
    // Travel questions
    if (lowerMessage.includes('travel') || lowerMessage.includes('visit') || lowerMessage.includes('tourism')) {
      return "Africa offers incredible travel experiences! From luxury safaris in Kenya and Tanzania to cultural tours in Morocco and Egypt, beach relaxation in Seychelles and Mauritius, to adventure trekking in Rwanda and Ethiopia. The best time to visit varies by region - East Africa is great year-round, while Southern Africa is best April-October. Where in Africa are you thinking of visiting?";
    }
    
    // Economy questions
    if (lowerMessage.includes('economy') || lowerMessage.includes('business') || lowerMessage.includes('trade')) {
      return "Africa's economy is rapidly growing! The African Continental Free Trade Area (AfCFTA) is boosting intra-African trade. Key sectors include agriculture, mining, technology, and renewable energy. Countries like Nigeria, South Africa, and Egypt lead economically, while Rwanda and Ghana show impressive growth rates. The continent is rich in natural resources and has a young, dynamic population driving innovation.";
    }
    
    // Default responses for general questions
    const defaultResponses = [
      "That's a fascinating question about Africa! The continent is incredibly diverse with 54 countries, each with unique characteristics. Could you be more specific about which aspect of Africa you'd like to explore?",
      "Africa is a continent of endless wonders! From the pyramids of Egypt to the wildlife of the Serengeti, from the music of West Africa to the innovations of South Africa. What particular topic about Africa interests you most?",
      "Great question! Africa has so much to offer - rich history, diverse cultures, incredible wildlife, stunning landscapes, and a bright future ahead. Which area would you like me to focus on in my response?",
      "Africa is truly the cradle of humanity and continues to shape our world today! Whether you're interested in history, culture, wildlife, travel, or future developments, I'm here to help. What specific aspect can I tell you about?"
    ];
    
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  };

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateAIResponse(inputText),
        isUser: false,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500 + Math.random() * 1000); // Random delay between 1.5-2.5 seconds
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const quickQuestions = [
    "Tell me about African wildlife",
    "What's Africa's history?",
    "Best places to visit in Africa",
    "African culture and traditions",
    "Africa's future predictions"
  ];

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 group"
        title="Ask AI about Africa"
      >
        <MessageCircle className="h-6 w-6 group-hover:animate-bounce" />
        <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center animate-pulse">
          <Bot className="h-3 w-3" />
        </div>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end justify-end p-4">
          <div className="bg-gradient-to-br from-slate-900/95 via-gray-900/95 to-slate-900/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-amber-500/20 w-full max-w-md h-[600px] flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-amber-500/20 bg-gradient-to-r from-slate-900/50 to-gray-900/50 rounded-t-2xl">
              <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-r from-amber-500 to-yellow-600 p-2 rounded-xl">
                  <Bot className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Africa AI Guide</h3>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-400 text-sm">Online</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-1 text-amber-400">
                  <Crown className="h-4 w-4" />
                  <span className="text-xs font-medium tracking-wider uppercase">AI Powered</span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex items-start space-x-2 max-w-[80%] ${message.isUser ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    <div className={`p-2 rounded-full ${message.isUser ? 'bg-gradient-to-r from-blue-500 to-cyan-600' : 'bg-gradient-to-r from-amber-500 to-yellow-600'}`}>
                      {message.isUser ? <User className="h-4 w-4 text-white" /> : <Bot className="h-4 w-4 text-white" />}
                    </div>
                    <div className={`p-3 rounded-2xl ${
                      message.isUser 
                        ? 'bg-gradient-to-r from-blue-500 to-cyan-600 text-white' 
                        : 'bg-gradient-to-br from-slate-800/50 to-gray-800/50 text-white border border-amber-500/20'
                    }`}>
                      <p className="text-sm leading-relaxed">{message.text}</p>
                      <p className="text-xs opacity-70 mt-1">
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex items-start space-x-2">
                    <div className="bg-gradient-to-r from-amber-500 to-yellow-600 p-2 rounded-full">
                      <Bot className="h-4 w-4 text-white" />
                    </div>
                    <div className="bg-gradient-to-br from-slate-800/50 to-gray-800/50 p-3 rounded-2xl border border-amber-500/20">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-amber-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-amber-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-amber-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Questions */}
            {messages.length === 1 && (
              <div className="px-4 pb-2">
                <p className="text-amber-300 text-sm mb-2 font-medium">Quick questions:</p>
                <div className="flex flex-wrap gap-2">
                  {quickQuestions.map((question, index) => (
                    <button
                      key={index}
                      onClick={() => setInputText(question)}
                      className="text-xs bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 px-3 py-1 rounded-full border border-amber-500/30 transition-colors"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t border-amber-500/20 bg-gradient-to-r from-slate-900/50 to-gray-900/50 rounded-b-2xl">
              <div className="flex items-center space-x-2">
                <div className="flex-1 relative">
                  <textarea
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask me anything about Africa..."
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl focus:ring-2 focus:ring-amber-500/50 focus:border-amber-400 text-white placeholder-white/60 resize-none"
                    rows={1}
                    style={{ minHeight: '44px', maxHeight: '100px' }}
                  />
                  <div className="absolute right-2 top-2 flex items-center space-x-1">
                    <Globe className="h-4 w-4 text-amber-400" />
                    <Sparkles className="h-4 w-4 text-amber-400" />
                  </div>
                </div>
                <button
                  onClick={handleSendMessage}
                  disabled={!inputText.trim() || isTyping}
                  className="bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 disabled:opacity-50 disabled:cursor-not-allowed text-white p-3 rounded-xl transition-all duration-300 transform hover:scale-105"
                >
                  <Send className="h-5 w-5" />
                </button>
              </div>
              <div className="flex items-center justify-between mt-2 text-xs text-gray-400">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <History className="h-3 w-3" />
                    <span>Past</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Globe className="h-3 w-3" />
                    <span>Present</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <TrendingUp className="h-3 w-3" />
                    <span>Future</span>
                  </div>
                </div>
                <span>Powered by AI</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AIChatbot;