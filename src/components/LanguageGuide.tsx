import React, { useState } from 'react';
import { MessageCircle, Volume2, Book, Crown, ChevronDown, ChevronUp } from 'lucide-react';

interface LanguageGuideProps {
  country: string;
}

const LanguageGuide: React.FC<LanguageGuideProps> = ({ country }) => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  // Mock language data for African countries
  const languageData: { [key: string]: any } = {
    'South Africa': {
      official: ['English', 'Afrikaans', 'Zulu', 'Xhosa'],
      common: 'English',
      phrases: [
        { english: 'Hello', local: 'Sawubona (Zulu)', pronunciation: 'sah-woo-BOH-nah' },
        { english: 'Thank you', local: 'Ngiyabonga (Zulu)', pronunciation: 'ng-ee-yah-BOHN-gah' },
        { english: 'Please', local: 'Ngicela (Zulu)', pronunciation: 'ng-ee-CHEH-lah' },
        { english: 'Excuse me', local: 'Uxolo (Zulu)', pronunciation: 'oo-KOH-loh' },
        { english: 'How much?', local: 'Malini? (Zulu)', pronunciation: 'mah-LEE-nee' }
      ]
    },
    'Kenya': {
      official: ['English', 'Swahili'],
      common: 'Swahili',
      phrases: [
        { english: 'Hello', local: 'Jambo', pronunciation: 'JAHM-boh' },
        { english: 'Thank you', local: 'Asante', pronunciation: 'ah-SAHN-teh' },
        { english: 'Please', local: 'Tafadhali', pronunciation: 'tah-fah-DAH-lee' },
        { english: 'Excuse me', local: 'Samahani', pronunciation: 'sah-mah-HAH-nee' },
        { english: 'How much?', local: 'Bei gani?', pronunciation: 'bay GAH-nee' }
      ]
    },
    'Nigeria': {
      official: ['English'],
      common: 'English',
      phrases: [
        { english: 'Hello', local: 'Sannu (Hausa)', pronunciation: 'SAHN-noo' },
        { english: 'Thank you', local: 'Na gode (Hausa)', pronunciation: 'nah GOH-deh' },
        { english: 'Please', local: 'Don Allah (Hausa)', pronunciation: 'dohn AHL-lah' },
        { english: 'Good morning', local: 'Ina kwana (Hausa)', pronunciation: 'ee-nah KWAH-nah' },
        { english: 'How are you?', local: 'Kana lafiya? (Hausa)', pronunciation: 'KAH-nah lah-FEE-yah' }
      ]
    },
    'Morocco': {
      official: ['Arabic', 'Berber'],
      common: 'Arabic',
      phrases: [
        { english: 'Hello', local: 'As-salāmu ʿalaykum', pronunciation: 'ah-sah-LAH-moo ah-LAY-koom' },
        { english: 'Thank you', local: 'Shukran', pronunciation: 'SHOOK-rahn' },
        { english: 'Please', local: 'Min fadlik', pronunciation: 'meen FAHD-leek' },
        { english: 'Excuse me', local: 'Afwan', pronunciation: 'AHF-wahn' },
        { english: 'How much?', local: 'Bikam?', pronunciation: 'bee-KAHM' }
      ]
    },
    'Egypt': {
      official: ['Arabic'],
      common: 'Arabic',
      phrases: [
        { english: 'Hello', local: 'Ahlan wa sahlan', pronunciation: 'AH-lahn wah SAH-lahn' },
        { english: 'Thank you', local: 'Shukran', pronunciation: 'SHOOK-rahn' },
        { english: 'Please', local: 'Min fadlik', pronunciation: 'meen FAHD-leek' },
        { english: 'Excuse me', local: 'Afwan', pronunciation: 'AHF-wahn' },
        { english: 'How much?', local: 'Bikam?', pronunciation: 'bee-KAHM' }
      ]
    }
  };

  const getLanguageInfo = () => {
    return languageData[country] || {
      official: ['English'],
      common: 'English',
      phrases: [
        { english: 'Hello', local: 'Hello', pronunciation: 'HEH-loh' },
        { english: 'Thank you', local: 'Thank you', pronunciation: 'THANK yoo' },
        { english: 'Please', local: 'Please', pronunciation: 'PLEEZ' },
        { english: 'Excuse me', local: 'Excuse me', pronunciation: 'ek-SKYOOZ mee' },
        { english: 'How much?', local: 'How much?', pronunciation: 'HOW muhch' }
      ]
    };
  };

  const langInfo = getLanguageInfo();

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const sections = [
    {
      id: 'basics',
      title: 'Basic Phrases',
      icon: MessageCircle,
      color: 'from-blue-500 to-cyan-600'
    },
    {
      id: 'pronunciation',
      title: 'Pronunciation Guide',
      icon: Volume2,
      color: 'from-green-500 to-emerald-600'
    },
    {
      id: 'culture',
      title: 'Cultural Context',
      icon: Book,
      color: 'from-purple-500 to-indigo-600'
    }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-900/95 via-gray-900/95 to-slate-900/95 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-amber-500/20">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-2 rounded-xl">
            <MessageCircle className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">Language Guide</h3>
            <p className="text-indigo-300 text-sm">Essential phrases for {country}</p>
          </div>
        </div>
        <div className="flex items-center space-x-1 text-indigo-400">
          <Crown className="h-4 w-4" />
          <span className="text-xs font-medium tracking-wider uppercase">Local Language</span>
        </div>
      </div>

      <div className="mb-6 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-xl p-4 border border-indigo-500/30">
        <h4 className="font-semibold text-indigo-300 mb-2">Official Languages</h4>
        <div className="flex flex-wrap gap-2">
          {langInfo.official.map((lang: string, index: number) => (
            <span key={index} className="bg-indigo-500/30 text-indigo-200 px-3 py-1 rounded-full text-sm">
              {lang}
            </span>
          ))}
        </div>
        <p className="text-indigo-200 text-sm mt-2">
          Most commonly spoken: <strong>{langInfo.common}</strong>
        </p>
      </div>

      <div className="space-y-4">
        {sections.map((section) => {
          const Icon = section.icon;
          const isExpanded = expandedSection === section.id;
          
          return (
            <div
              key={section.id}
              className="bg-gradient-to-br from-slate-800/50 to-gray-800/50 rounded-xl overflow-hidden border border-white/10 hover:border-indigo-500/30 transition-all duration-300"
            >
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <div className={`bg-gradient-to-r ${section.color} p-3 rounded-xl`}>
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-white">{section.title}</h4>
                </div>
                {isExpanded ? (
                  <ChevronUp className="h-5 w-5 text-indigo-400" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-400" />
                )}
              </button>
              
              {isExpanded && (
                <div className="px-6 pb-6">
                  <div className="ml-16">
                    {section.id === 'basics' && (
                      <div className="space-y-4">
                        {langInfo.phrases.map((phrase: any, index: number) => (
                          <div key={index} className="bg-white/5 rounded-lg p-4">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                              <div>
                                <p className="text-gray-400 text-xs uppercase tracking-wide">English</p>
                                <p className="text-white font-medium">{phrase.english}</p>
                              </div>
                              <div>
                                <p className="text-gray-400 text-xs uppercase tracking-wide">Local</p>
                                <p className="text-indigo-300 font-medium">{phrase.local}</p>
                              </div>
                              <div>
                                <p className="text-gray-400 text-xs uppercase tracking-wide">Pronunciation</p>
                                <p className="text-gray-300 text-sm italic">{phrase.pronunciation}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    {section.id === 'pronunciation' && (
                      <div className="space-y-3">
                        <p className="text-gray-300">Key pronunciation tips:</p>
                        <ul className="space-y-2 text-gray-300">
                          <li className="flex items-start space-x-2">
                            <span className="text-indigo-400">•</span>
                            <span>Listen carefully to local speakers</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <span className="text-indigo-400">•</span>
                            <span>Practice common greetings before your trip</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <span className="text-indigo-400">•</span>
                            <span>Don't worry about perfect pronunciation - effort is appreciated</span>
                          </li>
                        </ul>
                      </div>
                    )}
                    
                    {section.id === 'culture' && (
                      <div className="space-y-3">
                        <p className="text-gray-300">Cultural language tips:</p>
                        <ul className="space-y-2 text-gray-300">
                          <li className="flex items-start space-x-2">
                            <span className="text-indigo-400">•</span>
                            <span>Greetings are very important in African cultures</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <span className="text-indigo-400">•</span>
                            <span>Take time to exchange pleasantries before business</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <span className="text-indigo-400">•</span>
                            <span>Showing respect through language opens many doors</span>
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LanguageGuide;