import React, { useState } from 'react';
import { AlertTriangle, Shield, Info, CheckCircle, Crown, ExternalLink } from 'lucide-react';

interface SafetyAlertsProps {
  country: string;
}

// Official government travel advisory websites
const travelAdvisoryWebsites: { [key: string]: { [key: string]: string } } = {
  'South Africa': {
    us: 'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/south-africa-travel-advisory.html',
    uk: 'https://www.gov.uk/foreign-travel-advice/south-africa',
    canada: 'https://travel.gc.ca/destinations/south-africa',
    australia: 'https://www.smartraveller.gov.au/destinations/africa/south-africa'
  },
  'Kenya': {
    us: 'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/kenya-travel-advisory.html',
    uk: 'https://www.gov.uk/foreign-travel-advice/kenya',
    canada: 'https://travel.gc.ca/destinations/kenya',
    australia: 'https://www.smartraveller.gov.au/destinations/africa/kenya'
  },
  'Nigeria': {
    us: 'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/nigeria-travel-advisory.html',
    uk: 'https://www.gov.uk/foreign-travel-advice/nigeria',
    canada: 'https://travel.gc.ca/destinations/nigeria',
    australia: 'https://www.smartraveller.gov.au/destinations/africa/nigeria'
  },
  'Morocco': {
    us: 'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/morocco-travel-advisory.html',
    uk: 'https://www.gov.uk/foreign-travel-advice/morocco',
    canada: 'https://travel.gc.ca/destinations/morocco',
    australia: 'https://www.smartraveller.gov.au/destinations/africa/morocco'
  },
  'Egypt': {
    us: 'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/egypt-travel-advisory.html',
    uk: 'https://www.gov.uk/foreign-travel-advice/egypt',
    canada: 'https://travel.gc.ca/destinations/egypt',
    australia: 'https://www.smartraveller.gov.au/destinations/africa/egypt'
  },
  'Ghana': {
    us: 'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/ghana-travel-advisory.html',
    uk: 'https://www.gov.uk/foreign-travel-advice/ghana',
    canada: 'https://travel.gc.ca/destinations/ghana',
    australia: 'https://www.smartraveller.gov.au/destinations/africa/ghana'
  },
  'Tanzania': {
    us: 'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/tanzania-travel-advisory.html',
    uk: 'https://www.gov.uk/foreign-travel-advice/tanzania',
    canada: 'https://travel.gc.ca/destinations/tanzania',
    australia: 'https://www.smartraveller.gov.au/destinations/africa/tanzania'
  },
  'Uganda': {
    us: 'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/uganda-travel-advisory.html',
    uk: 'https://www.gov.uk/foreign-travel-advice/uganda',
    canada: 'https://travel.gc.ca/destinations/uganda',
    australia: 'https://www.smartraveller.gov.au/destinations/africa/uganda'
  },
  'Rwanda': {
    us: 'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/rwanda-travel-advisory.html',
    uk: 'https://www.gov.uk/foreign-travel-advice/rwanda',
    canada: 'https://travel.gc.ca/destinations/rwanda',
    australia: 'https://www.smartraveller.gov.au/destinations/africa/rwanda'
  },
  'Ethiopia': {
    us: 'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/ethiopia-travel-advisory.html',
    uk: 'https://www.gov.uk/foreign-travel-advice/ethiopia',
    canada: 'https://travel.gc.ca/destinations/ethiopia',
    australia: 'https://www.smartraveller.gov.au/destinations/africa/ethiopia'
  },
  'Botswana': {
    us: 'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/botswana-travel-advisory.html',
    uk: 'https://www.gov.uk/foreign-travel-advice/botswana',
    canada: 'https://travel.gc.ca/destinations/botswana',
    australia: 'https://www.smartraveller.gov.au/destinations/africa/botswana'
  },
  'Namibia': {
    us: 'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/namibia-travel-advisory.html',
    uk: 'https://www.gov.uk/foreign-travel-advice/namibia',
    canada: 'https://travel.gc.ca/destinations/namibia',
    australia: 'https://www.smartraveller.gov.au/destinations/africa/namibia'
  },
  'Zimbabwe': {
    us: 'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/zimbabwe-travel-advisory.html',
    uk: 'https://www.gov.uk/foreign-travel-advice/zimbabwe',
    canada: 'https://travel.gc.ca/destinations/zimbabwe',
    australia: 'https://www.smartraveller.gov.au/destinations/africa/zimbabwe'
  },
  'Zambia': {
    us: 'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/zambia-travel-advisory.html',
    uk: 'https://www.gov.uk/foreign-travel-advice/zambia',
    canada: 'https://travel.gc.ca/destinations/zambia',
    australia: 'https://www.smartraveller.gov.au/destinations/africa/zambia'
  },
  'Malawi': {
    us: 'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/malawi-travel-advisory.html',
    uk: 'https://www.gov.uk/foreign-travel-advice/malawi',
    canada: 'https://travel.gc.ca/destinations/malawi',
    australia: 'https://www.smartraveller.gov.au/destinations/africa/malawi'
  },
  'Mozambique': {
    us: 'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/mozambique-travel-advisory.html',
    uk: 'https://www.gov.uk/foreign-travel-advice/mozambique',
    canada: 'https://travel.gc.ca/destinations/mozambique',
    australia: 'https://www.smartraveller.gov.au/destinations/africa/mozambique'
  },
  'Madagascar': {
    us: 'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/madagascar-travel-advisory.html',
    uk: 'https://www.gov.uk/foreign-travel-advice/madagascar',
    canada: 'https://travel.gc.ca/destinations/madagascar',
    australia: 'https://www.smartraveller.gov.au/destinations/africa/madagascar'
  },
  'Mauritius': {
    us: 'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/mauritius-travel-advisory.html',
    uk: 'https://www.gov.uk/foreign-travel-advice/mauritius',
    canada: 'https://travel.gc.ca/destinations/mauritius',
    australia: 'https://www.smartraveller.gov.au/destinations/africa/mauritius'
  },
  'Seychelles': {
    us: 'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/seychelles-travel-advisory.html',
    uk: 'https://www.gov.uk/foreign-travel-advice/seychelles',
    canada: 'https://travel.gc.ca/destinations/seychelles',
    australia: 'https://www.smartraveller.gov.au/destinations/africa/seychelles'
  },
  'Eswatini': {
    us: 'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/eswatini-travel-advisory.html',
    uk: 'https://www.gov.uk/foreign-travel-advice/eswatini',
    canada: 'https://travel.gc.ca/destinations/eswatini',
    australia: 'https://www.smartraveller.gov.au/destinations/africa/eswatini'
  },
  'Tunisia': {
    us: 'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/tunisia-travel-advisory.html',
    uk: 'https://www.gov.uk/foreign-travel-advice/tunisia',
    canada: 'https://travel.gc.ca/destinations/tunisia',
    australia: 'https://www.smartraveller.gov.au/destinations/africa/tunisia'
  },
  'Senegal': {
    us: 'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/senegal-travel-advisory.html',
    uk: 'https://www.gov.uk/foreign-travel-advice/senegal',
    canada: 'https://travel.gc.ca/destinations/senegal',
    australia: 'https://www.smartraveller.gov.au/destinations/africa/senegal'
  },
  'Sierra Leone': {
    us: 'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/sierra-leone-travel-advisory.html',
    uk: 'https://www.gov.uk/foreign-travel-advice/sierra-leone',
    canada: 'https://travel.gc.ca/destinations/sierra-leone',
    australia: 'https://www.smartraveller.gov.au/destinations/africa/sierra-leone'
  }
};

const getTravelAdvisoryLinks = (country: string) => {
  return travelAdvisoryWebsites[country] || {
    us: 'https://travel.state.gov/content/travel/en/traveladvisories.html',
    uk: 'https://www.gov.uk/foreign-travel-advice',
    canada: 'https://travel.gc.ca/travelling/advisories',
    australia: 'https://www.smartraveller.gov.au/'
  };
};

const SafetyAlerts: React.FC<SafetyAlertsProps> = ({ country }) => {
  const [activeAlert, setActiveAlert] = useState<number | null>(null);

  // Mock safety data - in a real app, this would come from government travel advisories
  const safetyData: { [key: string]: any } = {
    'South Africa': {
      level: 'moderate',
      alerts: [
        {
          type: 'warning',
          title: 'Crime in Urban Areas',
          description: 'Exercise increased caution in major cities, especially at night.',
          details: 'Avoid displaying valuables, use reputable transportation, stay in well-lit areas.'
        },
        {
          type: 'info',
          title: 'Wildlife Safety',
          description: 'Follow guide instructions during safari activities.',
          details: 'Maintain safe distances from wildlife, never exit vehicles without permission.'
        }
      ]
    },
    'Kenya': {
      level: 'moderate',
      alerts: [
        {
          type: 'warning',
          title: 'Border Areas',
          description: 'Avoid areas near Somalia and South Sudan borders.',
          details: 'Increased security risks in border regions. Stick to main tourist areas.'
        },
        {
          type: 'info',
          title: 'Health Precautions',
          description: 'Malaria prevention recommended in certain areas.',
          details: 'Consult healthcare provider about antimalarial medication before travel.'
        }
      ]
    },
    'Nigeria': {
      level: 'high',
      alerts: [
        {
          type: 'danger',
          title: 'Security Situation',
          description: 'Exercise extreme caution due to security concerns.',
          details: 'Avoid northern regions, use secure transportation, stay in secure accommodations.'
        },
        {
          type: 'warning',
          title: 'Health Risks',
          description: 'Yellow fever vaccination required.',
          details: 'Ensure all vaccinations are up to date before travel.'
        }
      ]
    }
  };

  const getSafetyInfo = () => {
    return safetyData[country] || {
      level: 'low',
      alerts: [
        {
          type: 'info',
          title: 'General Safety',
          description: 'Follow standard travel safety precautions.',
          details: 'Stay aware of surroundings, keep documents secure, follow local laws.'
        }
      ]
    };
  };

  const safetyInfo = getSafetyInfo();
  const advisoryLinks = getTravelAdvisoryLinks(country);

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'low': return 'from-green-500 to-emerald-600';
      case 'moderate': return 'from-yellow-500 to-orange-600';
      case 'high': return 'from-red-500 to-pink-600';
      default: return 'from-gray-500 to-slate-600';
    }
  };

  const getAlertIcon = (type: string) => {
    switch (type) {
      case 'danger': return <AlertTriangle className="h-5 w-5 text-red-400" />;
      case 'warning': return <AlertTriangle className="h-5 w-5 text-yellow-400" />;
      case 'info': return <Info className="h-5 w-5 text-blue-400" />;
      default: return <CheckCircle className="h-5 w-5 text-green-400" />;
    }
  };

  const getAlertColor = (type: string) => {
    switch (type) {
      case 'danger': return 'border-red-500/30 bg-red-500/20';
      case 'warning': return 'border-yellow-500/30 bg-yellow-500/20';
      case 'info': return 'border-blue-500/30 bg-blue-500/20';
      default: return 'border-green-500/30 bg-green-500/20';
    }
  };

  return (
    <div className="bg-gradient-to-br from-slate-900/95 via-gray-900/95 to-slate-900/95 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-amber-500/20">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="bg-gradient-to-r from-red-500 to-pink-600 p-2 rounded-xl">
            <Shield className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">Safety Alerts</h3>
            <p className="text-red-300 text-sm">Current advisories for {country}</p>
          </div>
        </div>
        <div className="flex items-center space-x-1 text-red-400">
          <Crown className="h-4 w-4" />
          <span className="text-xs font-medium tracking-wider uppercase">Live Updates</span>
        </div>
      </div>

      {/* Safety Level */}
      <div className={`bg-gradient-to-r ${getLevelColor(safetyInfo.level)}/20 rounded-xl p-6 border ${getLevelColor(safetyInfo.level).replace('from-', 'border-').replace(' to-emerald-600', '').replace(' to-orange-600', '').replace(' to-pink-600', '').replace(' to-slate-600', '')}/30 mb-6`}>
        <div className="flex items-center space-x-3">
          <Shield className="h-6 w-6 text-white" />
          <div>
            <h4 className="text-lg font-bold text-white capitalize">
              {safetyInfo.level} Risk Level
            </h4>
            <p className="text-gray-300 text-sm">
              Current travel advisory level for {country}
            </p>
          </div>
        </div>
      </div>

      {/* Safety Alerts */}
      <div className="space-y-4 mb-6">
        {safetyInfo.alerts.map((alert: any, index: number) => (
          <div
            key={index}
            className={`rounded-xl p-4 border ${getAlertColor(alert.type)} cursor-pointer transition-all duration-300 hover:bg-opacity-30`}
            onClick={() => setActiveAlert(activeAlert === index ? null : index)}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                {getAlertIcon(alert.type)}
                <div>
                  <h4 className="font-semibold text-white">{alert.title}</h4>
                  <p className="text-gray-300 text-sm">{alert.description}</p>
                </div>
              </div>
              <div className="text-gray-400">
                {activeAlert === index ? '−' : '+'}
              </div>
            </div>
            
            {activeAlert === index && (
              <div className="mt-4 pt-4 border-t border-white/10">
                <p className="text-gray-300 text-sm leading-relaxed">
                  {alert.details}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Government Resources */}
      <div className="bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-xl p-4 border border-blue-500/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <ExternalLink className="h-5 w-5 text-blue-400" />
            <div>
              <h4 className="font-semibold text-blue-300">Official Travel Advisories</h4>
              <p className="text-blue-200 text-sm">Check latest government updates</p>
            </div>
          </div>
          <a
            href={advisoryLinks.us}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 flex items-center space-x-2"
          >
            <span>View Updates</span>
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
        
        {/* Government Advisory Links */}
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          <a
            href={advisoryLinks.us}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-500/20 hover:bg-red-500/30 border border-red-500/30 rounded-lg p-3 transition-all duration-300 flex items-center justify-between group"
          >
            <div>
              <div className="text-red-300 font-medium text-sm">US State Dept</div>
              <div className="text-red-200 text-xs">Official US advisory</div>
            </div>
            <ExternalLink className="h-4 w-4 text-red-400 group-hover:text-red-300" />
          </a>
          
          <a
            href={advisoryLinks.uk}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/30 rounded-lg p-3 transition-all duration-300 flex items-center justify-between group"
          >
            <div>
              <div className="text-blue-300 font-medium text-sm">UK Gov</div>
              <div className="text-blue-200 text-xs">Official UK advisory</div>
            </div>
            <ExternalLink className="h-4 w-4 text-blue-400 group-hover:text-blue-300" />
          </a>
          
          <a
            href={advisoryLinks.canada}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500/20 hover:bg-green-500/30 border border-green-500/30 rounded-lg p-3 transition-all duration-300 flex items-center justify-between group"
          >
            <div>
              <div className="text-green-300 font-medium text-sm">Canada Gov</div>
              <div className="text-green-200 text-xs">Official CA advisory</div>
            </div>
            <ExternalLink className="h-4 w-4 text-green-400 group-hover:text-green-300" />
          </a>
          
          <a
            href={advisoryLinks.australia}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-500/20 hover:bg-purple-500/30 border border-purple-500/30 rounded-lg p-3 transition-all duration-300 flex items-center justify-between group"
          >
            <div>
              <div className="text-purple-300 font-medium text-sm">Australia Gov</div>
              <div className="text-purple-200 text-xs">Official AU advisory</div>
            </div>
            <ExternalLink className="h-4 w-4 text-purple-400 group-hover:text-purple-300" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SafetyAlerts;