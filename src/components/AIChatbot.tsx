import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, X, Bot, User, Sparkles, Crown, Globe, History, TrendingUp, Settings, Key, AlertCircle, CheckCircle } from 'lucide-react';
import { aiService, AIResponse } from '../services/aiService';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
  provider?: string;
  error?: boolean;
}

const AIChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [deepseekKey, setDeepseekKey] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm your AI guide to Africa, powered by DeepSeek AI. I can answer questions about African history, current events, culture, wildlife, travel, and future predictions. What would you like to know about the beautiful continent of Africa?",
      isUser: false,
      timestamp: new Date(),
      provider: 'System'
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Check API key status on component mount
  useEffect(() => {
    const hasKey = aiService.hasApiKey();
    // Only show warning if user tries to use the chatbot without keys
    // We'll handle this in the first user message instead
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const saveApiKeys = () => {
    if (deepseekKey.trim()) {
      aiService.setApiKey(deepseekKey.trim());
    }
    setShowSettings(false);
    setDeepseekKey('');
    
    // Add confirmation message
    setMessages(prev => [...prev, {
      id: Date.now().toString(),
      text: "✅ DeepSeek API key saved successfully! I can now provide enhanced responses using DeepSeek AI.",
      isUser: false,
      timestamp: new Date(),
      provider: 'System'
    }]);
  };

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    // Check API keys on first use
    const hasKey = aiService.hasApiKey();
    if (!hasKey && messages.length === 1) {
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        text: "💡 For the best AI experience, please add your DeepSeek API key in the settings (⚙️ icon). I can still answer questions using my built-in knowledge about Africa!",
        isUser: false,
        timestamp: new Date(),
        provider: 'System'
      }]);
    }

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    try {
      // Get AI response
      const aiResponse: AIResponse = await aiService.generateResponse(inputText);
      
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: aiResponse.message,
        isUser: false,
        timestamp: new Date(),
        provider: aiResponse.provider,
        error: !aiResponse.success
      };

      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
      
      // Log any errors to console for debugging
      if (aiResponse.error) {
        console.log('AI Service Info:', aiResponse.error);
      }
    } catch (error) {
      console.error('Chat error:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "I apologize, but I'm having trouble processing your request right now. Please try again in a moment. If the issue persists, you can add API keys in settings for enhanced responses.",
        isUser: false,
        timestamp: new Date(),
        provider: 'Error Handler',
        error: true
      };
      setMessages(prev => [...prev, errorMessage]);
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const quickQuestions = [
    "Tell me about African wildlife and safaris",
    "What's the history of ancient African civilizations?",
    "Best places to visit in Africa for tourism",
    "African culture, music, and traditions",
    "What does Africa's future look like by 2050?"
  ];

  const apiKeyStatus = aiService.hasApiKeys();

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
                  <span className="text-xs font-medium tracking-wider uppercase">
                    {apiKeyStatus.deepseek ? 'DeepSeek AI' : 'Offline AI'}
                  </span>
                </div>
                <button
                  onClick={() => setShowSettings(true)}
                  className="text-gray-400 hover:text-amber-400 p-1 rounded-full hover:bg-white/10 transition-colors"
                  title="AI Settings"
                >
                  <Settings className="h-4 w-4" />
                </button>
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
                        : message.error
                        ? 'bg-gradient-to-br from-red-800/50 to-red-900/50 text-white border border-red-500/20'
                        : 'bg-gradient-to-br from-slate-800/50 to-gray-800/50 text-white border border-amber-500/20'
                    }`}>
                      <p className="text-sm leading-relaxed">{message.text}</p>
                      <div className="flex items-center justify-between mt-1">
                        <p className="text-xs opacity-70">
                          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </p>
                        {message.provider && !message.isUser && (
                          <p className="text-xs opacity-60 flex items-center">
                            {message.error ? <AlertCircle className="h-3 w-3 mr-1" /> : <CheckCircle className="h-3 w-3 mr-1" />}
                            {message.provider}
                          </p>
                        )}
                      </div>
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
                <span className="flex items-center space-x-1">
                  {apiKeyStatus.deepseek && <span className="w-2 h-2 bg-blue-400 rounded-full"></span>}
                  <span>AI Powered</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Settings Modal */}
      {showSettings && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-gradient-to-br from-slate-900/95 via-gray-900/95 to-slate-900/95 backdrop-blur-xl rounded-2xl p-8 max-w-md w-full border border-amber-500/20">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-r from-amber-500 to-yellow-600 p-2 rounded-xl">
                  <Key className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white">AI Settings</h3>
              </div>
              <button
                onClick={() => setShowSettings(false)}
                className="text-gray-400 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-blue-300 text-sm font-medium mb-2">
                  DeepSeek API Key
                </label>
                <input
                  type="password"
                  value={deepseekKey}
                  onChange={(e) => setDeepseekKey(e.target.value)}
                  placeholder="sk-..."
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl focus:ring-2 focus:ring-blue-500/50 focus:border-blue-400 text-white placeholder-white/60"
                />
                <div className="flex items-center mt-1">
                  {apiKeyStatus.deepseek ? (
                    <div className="flex items-center text-green-400 text-xs">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      <span>Connected</span>
                    </div>
                  ) : (
                    <div className="flex items-center text-gray-400 text-xs">
                      <AlertCircle className="h-3 w-3 mr-1" />
                      <span>Not connected</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="mt-6 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-xl p-4 border border-blue-500/30">
             <p className="text-blue-200 text-sm">
                <strong>Note:</strong> Your API key is stored locally in your browser and never sent to our servers. 
                Get your DeepSeek API key from <a href="https://platform.deepseek.com/api-keys" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">DeepSeek Platform</a>.
              </p>
            </div>

            <div className="flex space-x-3 mt-6">
              <button
                onClick={saveApiKeys}
                className="flex-1 bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-white px-4 py-3 rounded-xl font-semibold transition-all duration-300"
              >
                Save Keys
              </button>
              <button
                onClick={() => setShowSettings(false)}
                className="px-4 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl font-semibold transition-all duration-300"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AIChatbot;