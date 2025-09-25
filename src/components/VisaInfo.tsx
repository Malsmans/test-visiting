import React, { useState } from 'react';
import { FileText, Clock, CheckCircle, AlertCircle, Crown, ExternalLink } from 'lucide-react';

interface VisaInfoProps {
  country: string;
}

// Official embassy websites for visa information
const embassyWebsites: { [key: string]: { [key: string]: string } } = {
  'South Africa': {
    us: 'https://www.saembassy.org/',
    uk: 'https://www.sahc.org.uk/',
    general: 'https://www.dfa.gov.za/'
  },
  'Kenya': {
    us: 'https://www.kenyaembassydc.org/',
    uk: 'https://kenyahighcommission.net/',
    general: 'https://www.mfa.go.ke/'
  },
  'Nigeria': {
    us: 'https://nigeriaembassyusa.org/',
    uk: 'https://www.nigeriahc.org.uk/',
    general: 'https://www.nigeriaembassy.org/'
  },
  'Morocco': {
    us: 'https://www.moroccanconsulate.com/',
    uk: 'https://www.moroccanconsulate.org.uk/',
    general: 'https://www.consulat.ma/'
  },
  'Egypt': {
    us: 'https://www.egyptembassy.net/',
    uk: 'https://www.egyptianconsulate.co.uk/',
    general: 'https://www.mfa.gov.eg/'
  },
  'Ghana': {
    us: 'https://www.ghanaembassy.org/',
    uk: 'https://www.ghanahighcommissionuk.com/',
    general: 'https://www.mfa.gov.gh/'
  },
  'Tanzania': {
    us: 'https://www.tanzaniaembassy-us.org/',
    uk: 'https://www.tanzaniahighcommission.co.uk/',
    general: 'https://www.mfa.go.tz/'
  },
  'Uganda': {
    us: 'https://www.ugandaembassy.com/',
    uk: 'https://www.ugandahighcommission.co.uk/',
    general: 'https://www.mofa.go.ug/'
  },
  'Rwanda': {
    us: 'https://www.rwandaembassy.org/',
    uk: 'https://uk.embassy.gov.rw/',
    general: 'https://www.minaffet.gov.rw/'
  },
  'Ethiopia': {
    us: 'https://www.ethiopianembassy.org/',
    uk: 'https://www.ethioembassy.org.uk/',
    general: 'https://www.mfa.gov.et/'
  },
  'Botswana': {
    us: 'https://www.botswanaembassy.org/',
    uk: 'https://www.botswanahighcommission.co.uk/',
    general: 'https://www.mfa.gov.bw/'
  },
  'Namibia': {
    us: 'https://www.namibianembassyusa.org/',
    uk: 'https://www.namibiahc.org.uk/',
    general: 'https://www.mfa.gov.na/'
  },
  'Zimbabwe': {
    us: 'https://www.zimembassy.org/',
    uk: 'https://www.zimhighcomm.co.uk/',
    general: 'https://www.zimfa.gov.zw/'
  },
  'Zambia': {
    us: 'https://www.zambiaembassy.org/',
    uk: 'https://www.zambiahighcommission.co.uk/',
    general: 'https://www.mofa.gov.zm/'
  },
  'Malawi': {
    us: 'https://www.malawiembassy-dc.org/',
    uk: 'https://www.malawihighcommission.co.uk/',
    general: 'https://www.foreignaffairs.gov.mw/'
  },
  'Mozambique': {
    us: 'https://www.embamoc-usa.org/',
    uk: 'https://www.mozambiquehighcommission.org.uk/',
    general: 'https://www.minec.gov.mz/'
  },
  'Madagascar': {
    us: 'https://www.embassy.org/madagascar/',
    uk: 'https://www.madagascar-embassy.org.uk/',
    general: 'https://www.mae.gov.mg/'
  },
  'Mauritius': {
    us: 'https://www.mauritius-embassy.org/',
    uk: 'https://www.mauritiushighcommission.co.uk/',
    general: 'https://foreign.govmu.org/'
  },
  'Seychelles': {
    us: 'https://www.seychellesembassy.org/',
    uk: 'https://www.seychelleshighcommission.org.uk/',
    general: 'https://www.mfa.gov.sc/'
  },
  'Eswatini': {
    us: 'https://www.eswatiniembassy.org/',
    uk: 'https://www.eswatinihighcommission.co.uk/',
    general: 'https://www.gov.sz/'
  },
  'Tunisia': {
    us: 'https://www.tunisianembassy.org/',
    uk: 'https://www.tunisianembassy.co.uk/',
    general: 'https://www.diplomatie.gov.tn/'
  },
  'Senegal': {
    us: 'https://www.ambasenegal-us.org/',
    uk: 'https://www.ambasenegal.co.uk/',
    general: 'https://www.diplomatie.gouv.sn/'
  },
  'Sierra Leone': {
    us: 'https://www.slembassy-usa.org/',
    uk: 'https://www.slhc-uk.org.uk/',
    general: 'https://www.foreign.gov.sl/'
  }
};

const getEmbassyWebsites = (country: string) => {
  return embassyWebsites[country] || {
    us: 'https://www.state.gov/countries-areas/',
    uk: 'https://www.gov.uk/foreign-travel-advice',
    general: 'https://www.un.org/en/member-states/'
  };
};

const VisaInfo: React.FC<VisaInfoProps> = ({ country }) => {
  const [selectedNationality, setSelectedNationality] = useState<string>('US');

  // Mock visa requirements data
  const visaRequirements: { [key: string]: { [key: string]: any } } = {
    'South Africa': {
      US: { required: false, duration: '90 days', type: 'Visa-free' },
      UK: { required: false, duration: '90 days', type: 'Visa-free' },
      EU: { required: false, duration: '90 days', type: 'Visa-free' },
      Other: { required: true, duration: '30 days', type: 'Tourist visa' }
    },
    'Kenya': {
      US: { required: true, duration: '90 days', type: 'eVisa', fee: '$51' },
      UK: { required: true, duration: '90 days', type: 'eVisa', fee: '$51' },
      EU: { required: true, duration: '90 days', type: 'eVisa', fee: '$51' },
      Other: { required: true, duration: '90 days', type: 'eVisa', fee: '$51' }
    },
    'Nigeria': {
      US: { required: true, duration: '90 days', type: 'Tourist visa', fee: '$160' },
      UK: { required: true, duration: '90 days', type: 'Tourist visa', fee: '£95' },
      EU: { required: true, duration: '90 days', type: 'Tourist visa', fee: '€120' },
      Other: { required: true, duration: '90 days', type: 'Tourist visa', fee: '$100' }
    },
    'Morocco': {
      US: { required: false, duration: '90 days', type: 'Visa-free' },
      UK: { required: false, duration: '90 days', type: 'Visa-free' },
      EU: { required: false, duration: '90 days', type: 'Visa-free' },
      Other: { required: true, duration: '90 days', type: 'Tourist visa' }
    },
    'Egypt': {
      US: { required: true, duration: '30 days', type: 'eVisa', fee: '$25' },
      UK: { required: true, duration: '30 days', type: 'eVisa', fee: '$25' },
      EU: { required: true, duration: '30 days', type: 'eVisa', fee: '$25' },
      Other: { required: true, duration: '30 days', type: 'eVisa', fee: '$25' }
    }
  };

  const getVisaInfo = () => {
    const countryReqs = visaRequirements[country];
    if (!countryReqs) {
      return { required: true, duration: '30 days', type: 'Tourist visa', fee: 'Varies' };
    }
    return countryReqs[selectedNationality] || countryReqs['Other'];
  };

  const visaInfo = getVisaInfo();
  const nationalities = ['US', 'UK', 'EU', 'Other'];
  const embassyLinks = getEmbassyWebsites(country);

  return (
    <div className="bg-gradient-to-br from-slate-900/95 via-gray-900/95 to-slate-900/95 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-amber-500/20">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-2 rounded-xl">
            <FileText className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">Visa Information</h3>
            <p className="text-blue-300 text-sm">Entry requirements for {country}</p>
          </div>
        </div>
        <div className="flex items-center space-x-1 text-blue-400">
          <Crown className="h-4 w-4" />
          <span className="text-xs font-medium tracking-wider uppercase">Official Info</span>
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-blue-300 text-sm font-medium mb-3">Select your nationality:</label>
        <select
          value={selectedNationality}
          onChange={(e) => setSelectedNationality(e.target.value)}
          className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl focus:ring-2 focus:ring-blue-500/50 focus:border-blue-400 text-white"
        >
          {nationalities.map(nationality => (
            <option key={nationality} value={nationality} className="bg-gray-900 text-white">
              {nationality === 'US' ? 'United States' : 
               nationality === 'UK' ? 'United Kingdom' :
               nationality === 'EU' ? 'European Union' : 'Other Countries'}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className={`rounded-xl p-6 border ${
          visaInfo.required 
            ? 'bg-orange-500/20 border-orange-500/30' 
            : 'bg-green-500/20 border-green-500/30'
        }`}>
          <div className="flex items-center space-x-3 mb-3">
            {visaInfo.required ? (
              <AlertCircle className="h-6 w-6 text-orange-400" />
            ) : (
              <CheckCircle className="h-6 w-6 text-green-400" />
            )}
            <h4 className={`font-bold text-lg ${
              visaInfo.required ? 'text-orange-300' : 'text-green-300'
            }`}>
              {visaInfo.required ? 'Visa Required' : 'No Visa Required'}
            </h4>
          </div>
          <p className={`text-sm ${
            visaInfo.required ? 'text-orange-200' : 'text-green-200'
          }`}>
            {visaInfo.type}
          </p>
        </div>

        <div className="bg-blue-500/20 rounded-xl p-6 border border-blue-500/30">
          <div className="flex items-center space-x-3 mb-3">
            <Clock className="h-6 w-6 text-blue-400" />
            <h4 className="font-bold text-lg text-blue-300">Duration</h4>
          </div>
          <p className="text-blue-200 text-sm">
            Stay up to {visaInfo.duration}
          </p>
        </div>
      </div>

      {visaInfo.fee && (
        <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl p-6 border border-purple-500/30 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-bold text-lg text-purple-300 mb-2">Visa Fee</h4>
              <p className="text-purple-200 text-sm">Processing fee required</p>
            </div>
            <div className="text-2xl font-bold text-purple-300">
              {visaInfo.fee}
            </div>
          </div>
        </div>
      )}

      <div className="bg-gradient-to-r from-amber-500/20 to-yellow-500/20 rounded-xl p-6 border border-amber-500/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <ExternalLink className="h-5 w-5 text-amber-400" />
            <div>
              <h4 className="font-semibold text-amber-300">Official Embassy Website</h4>
              <p className="text-amber-200 text-sm">Get the latest visa requirements</p>
            </div>
          </div>
          <a
            href={embassyLinks.general}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 flex items-center space-x-2"
          >
            <span>Visit Embassy</span>
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
        
        {/* Embassy Links by Country */}
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3">
          <a
            href={embassyLinks.us}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/30 rounded-lg p-3 transition-all duration-300 flex items-center justify-between group"
          >
            <div>
              <div className="text-blue-300 font-medium text-sm">US Embassy</div>
              <div className="text-blue-200 text-xs">Official US visa info</div>
            </div>
            <ExternalLink className="h-4 w-4 text-blue-400 group-hover:text-blue-300" />
          </a>
          
          <a
            href={embassyLinks.uk}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-500/20 hover:bg-purple-500/30 border border-purple-500/30 rounded-lg p-3 transition-all duration-300 flex items-center justify-between group"
          >
            <div>
              <div className="text-purple-300 font-medium text-sm">UK Embassy</div>
              <div className="text-purple-200 text-xs">Official UK visa info</div>
            </div>
            <ExternalLink className="h-4 w-4 text-purple-400 group-hover:text-purple-300" />
          </a>
          
          <a
            href={embassyLinks.general}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500/20 hover:bg-green-500/30 border border-green-500/30 rounded-lg p-3 transition-all duration-300 flex items-center justify-between group"
          >
            <div>
              <div className="text-green-300 font-medium text-sm">General Embassy</div>
              <div className="text-green-200 text-xs">Official government info</div>
            </div>
            <ExternalLink className="h-4 w-4 text-green-400 group-hover:text-green-300" />
          </a>
        </div>
      </div>

      <div className="mt-6 text-center">
        <p className="text-gray-400 text-xs">
          ⚠️ Visa requirements may change. Always verify with official sources before travel.
        </p>
      </div>
    </div>
  );
};

export default VisaInfo;