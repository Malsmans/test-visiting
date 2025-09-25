import React from 'react';
import { Phone, Shield, Heart, MapPin, Crown, ExternalLink } from 'lucide-react';

interface EmergencyContactsProps {
  country: string;
}

const EmergencyContacts: React.FC<EmergencyContactsProps> = ({ country }) => {
  // Mock emergency contact data
  const emergencyData: { [key: string]: any } = {
    'South Africa': {
      police: '10111',
      medical: '10177',
      fire: '10177',
      tourist: '+27 83 123 4567',
      embassy: {
        us: '+27 12 431 4000',
        uk: '+27 12 421 7500',
        general: '+27 12 421 7500'
      }
    },
    'Kenya': {
      police: '999',
      medical: '999',
      fire: '999',
      tourist: '+254 20 271 1262',
      embassy: {
        us: '+254 20 363 6000',
        uk: '+254 20 284 4000',
        general: '+254 20 284 4000'
      }
    },
    'Nigeria': {
      police: '199',
      medical: '199',
      fire: '199',
      tourist: '+234 9 523 0799',
      embassy: {
        us: '+234 9 461 4000',
        uk: '+234 1 277 0780',
        general: '+234 1 277 0780'
      }
    },
    'Morocco': {
      police: '19',
      medical: '15',
      fire: '15',
      tourist: '+212 537 27 40 13',
      embassy: {
        us: '+212 537 63 72 00',
        uk: '+212 537 63 33 33',
        general: '+212 537 63 33 33'
      }
    },
    'Egypt': {
      police: '122',
      medical: '123',
      fire: '180',
      tourist: '+20 2 2391 3454',
      embassy: {
        us: '+20 2 2797 3300',
        uk: '+20 2 2791 6000',
        general: '+20 2 2791 6000'
      }
    }
  };

  const getEmergencyInfo = () => {
    return emergencyData[country] || {
      police: '911',
      medical: '911',
      fire: '911',
      tourist: 'Contact local authorities',
      embassy: {
        us: 'Contact nearest embassy',
        uk: 'Contact nearest embassy',
        general: 'Contact nearest embassy'
      }
    };
  };

  const emergencyInfo = getEmergencyInfo();

  const emergencyServices = [
    {
      title: 'Police',
      number: emergencyInfo.police,
      icon: Shield,
      color: 'from-red-500 to-pink-600',
      description: 'For crimes, theft, or security issues'
    },
    {
      title: 'Medical Emergency',
      number: emergencyInfo.medical,
      icon: Heart,
      color: 'from-green-500 to-emerald-600',
      description: 'For medical emergencies and ambulance'
    },
    {
      title: 'Fire Department',
      number: emergencyInfo.fire,
      icon: Phone,
      color: 'from-orange-500 to-red-600',
      description: 'For fire emergencies and rescue'
    },
    {
      title: 'Tourist Police',
      number: emergencyInfo.tourist,
      icon: MapPin,
      color: 'from-blue-500 to-cyan-600',
      description: 'Specialized help for tourists'
    }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-900/95 via-gray-900/95 to-slate-900/95 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-amber-500/20">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="bg-gradient-to-r from-red-500 to-pink-600 p-2 rounded-xl">
            <Phone className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">Emergency Contacts</h3>
            <p className="text-red-300 text-sm">Important numbers for {country}</p>
          </div>
        </div>
        <div className="flex items-center space-x-1 text-red-400">
          <Crown className="h-4 w-4" />
          <span className="text-xs font-medium tracking-wider uppercase">Emergency</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {emergencyServices.map((service, index) => {
          const Icon = service.icon;
          return (
            <div
              key={index}
              className={`bg-gradient-to-br ${service.color}/20 rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300`}
            >
              <div className="flex items-center space-x-4 mb-3">
                <div className={`bg-gradient-to-r ${service.color} p-3 rounded-xl`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">{service.title}</h4>
                  <p className="text-gray-400 text-sm">{service.description}</p>
                </div>
              </div>
              <div className="bg-black/30 rounded-lg p-4">
                <a
                  href={`tel:${service.number}`}
                  className="text-2xl font-bold text-white hover:text-amber-400 transition-colors"
                >
                  {service.number}
                </a>
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-xl p-6 border border-purple-500/30">
        <h4 className="text-lg font-bold text-white mb-4 flex items-center">
          <ExternalLink className="h-5 w-5 mr-2 text-purple-400" />
          Embassy Contacts
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-black/30 rounded-lg p-4">
            <p className="text-purple-300 text-sm font-medium mb-1">US Embassy</p>
            <a
              href={`tel:${emergencyInfo.embassy.us}`}
              className="text-white hover:text-purple-400 transition-colors font-mono text-sm"
            >
              {emergencyInfo.embassy.us}
            </a>
          </div>
          <div className="bg-black/30 rounded-lg p-4">
            <p className="text-purple-300 text-sm font-medium mb-1">UK Embassy</p>
            <a
              href={`tel:${emergencyInfo.embassy.uk}`}
              className="text-white hover:text-purple-400 transition-colors font-mono text-sm"
            >
              {emergencyInfo.embassy.uk}
            </a>
          </div>
          <div className="bg-black/30 rounded-lg p-4">
            <p className="text-purple-300 text-sm font-medium mb-1">General</p>
            <a
              href={`tel:${emergencyInfo.embassy.general}`}
              className="text-white hover:text-purple-400 transition-colors font-mono text-sm"
            >
              {emergencyInfo.embassy.general}
            </a>
          </div>
        </div>
      </div>

      <div className="mt-6 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 rounded-xl p-4 border border-amber-500/30">
        <div className="flex items-center space-x-2 text-amber-300 text-sm">
          <Shield className="h-4 w-4" />
          <span className="font-medium">Important:</span>
        </div>
        <p className="text-amber-200 text-sm mt-2">
          Save these numbers in your phone before traveling. In case of emergency, stay calm and provide your location clearly.
        </p>
      </div>
    </div>
  );
};

export default EmergencyContacts;