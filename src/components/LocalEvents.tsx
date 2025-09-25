import React, { useState } from 'react';
import { Calendar, Music, Star, MapPin, Crown, Clock, Users } from 'lucide-react';

interface LocalEventsProps {
  country: string;
}

const LocalEvents: React.FC<LocalEventsProps> = ({ country }) => {
  const [selectedMonth, setSelectedMonth] = useState<string>('all');

  // Mock events data
  const eventsData: { [key: string]: any[] } = {
    'South Africa': [
      {
        name: 'Cape Town Jazz Festival',
        date: 'March 2024',
        type: 'Music',
        location: 'Cape Town',
        description: 'Africa\'s grandest gathering of jazz musicians',
        image: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg',
        month: 'march'
      },
      {
        name: 'Hermanus Whale Festival',
        date: 'September 2024',
        type: 'Nature',
        location: 'Hermanus',
        description: 'Celebrate the return of southern right whales',
        image: 'https://images.pexels.com/photos/1076758/pexels-photo-1076758.jpeg',
        month: 'september'
      }
    ],
    'Kenya': [
      {
        name: 'Great Migration',
        date: 'July-October',
        type: 'Wildlife',
        location: 'Maasai Mara',
        description: 'Witness millions of wildebeest crossing the Mara River',
        image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg',
        month: 'july'
      },
      {
        name: 'Lamu Cultural Festival',
        date: 'November 2024',
        type: 'Culture',
        location: 'Lamu Island',
        description: 'Celebrate Swahili culture and heritage',
        image: 'https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg',
        month: 'november'
      }
    ],
    'Morocco': [
      {
        name: 'Marrakech Film Festival',
        date: 'December 2024',
        type: 'Film',
        location: 'Marrakech',
        description: 'International film festival in the Red City',
        image: 'https://images.pexels.com/photos/2901215/pexels-photo-2901215.jpeg',
        month: 'december'
      },
      {
        name: 'Rose Festival',
        date: 'May 2024',
        type: 'Culture',
        location: 'Kelaat M\'Gouna',
        description: 'Celebrate the rose harvest in the Valley of Roses',
        image: 'https://images.pexels.com/photos/1263986/pexels-photo-1263986.jpeg',
        month: 'may'
      }
    ]
  };

  const getEvents = () => {
    const events = eventsData[country] || [];
    if (selectedMonth === 'all') return events;
    return events.filter(event => event.month === selectedMonth);
  };

  const events = getEvents();
  const months = ['all', 'january', 'february', 'march', 'april', 'may', 'june', 
                 'july', 'august', 'september', 'october', 'november', 'december'];

  const getEventTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case 'music': return 'from-purple-500 to-indigo-600';
      case 'culture': return 'from-orange-500 to-red-600';
      case 'wildlife': return 'from-green-500 to-emerald-600';
      case 'nature': return 'from-blue-500 to-cyan-600';
      case 'film': return 'from-pink-500 to-rose-600';
      default: return 'from-gray-500 to-slate-600';
    }
  };

  const getEventTypeIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case 'music': return <Music className="h-5 w-5" />;
      case 'culture': return <Star className="h-5 w-5" />;
      case 'wildlife': return <Users className="h-5 w-5" />;
      case 'nature': return <MapPin className="h-5 w-5" />;
      case 'film': return <Calendar className="h-5 w-5" />;
      default: return <Calendar className="h-5 w-5" />;
    }
  };

  return (
    <div className="bg-gradient-to-br from-slate-900/95 via-gray-900/95 to-slate-900/95 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-amber-500/20">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="bg-gradient-to-r from-purple-500 to-indigo-600 p-2 rounded-xl">
            <Calendar className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">Local Events</h3>
            <p className="text-purple-300 text-sm">Festivals & events in {country}</p>
          </div>
        </div>
        <div className="flex items-center space-x-1 text-purple-400">
          <Crown className="h-4 w-4" />
          <span className="text-xs font-medium tracking-wider uppercase">Cultural</span>
        </div>
      </div>

      {/* Month Filter */}
      <div className="mb-6">
        <select
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(e.target.value)}
          className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl focus:ring-2 focus:ring-purple-500/50 focus:border-purple-400 text-white"
        >
          {months.map(month => (
            <option key={month} value={month} className="bg-gray-900 text-white">
              {month === 'all' ? 'All Months' : month.charAt(0).toUpperCase() + month.slice(1)}
            </option>
          ))}
        </select>
      </div>

      {/* Events List */}
      {events.length > 0 ? (
        <div className="space-y-6">
          {events.map((event, index) => (
            <div key={index} className="group bg-gradient-to-br from-slate-800/50 to-gray-800/50 rounded-xl overflow-hidden shadow-xl border border-white/10 hover:border-purple-500/30 transition-all duration-500">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Event Image */}
                <div className="relative h-48 lg:h-auto">
                  <img
                    src={event.image}
                    alt={event.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className={`absolute top-4 left-4 bg-gradient-to-r ${getEventTypeColor(event.type)}/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center space-x-1`}>
                    {getEventTypeIcon(event.type)}
                    <span className="text-white text-xs font-semibold tracking-wider uppercase">{event.type}</span>
                  </div>
                </div>
                
                {/* Event Info */}
                <div className="lg:col-span-2 p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h4 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">
                      {event.name}
                    </h4>
                    <div className="text-right">
                      <div className="flex items-center text-purple-400 mb-1">
                        <Clock className="h-4 w-4 mr-1" />
                        <span className="font-semibold">{event.date}</span>
                      </div>
                      <div className="flex items-center text-gray-400">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span className="text-sm">{event.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed mb-4">
                    {event.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className={`bg-gradient-to-r ${getEventTypeColor(event.type)}/20 rounded-full px-4 py-2 border border-white/20`}>
                      <span className="text-white text-sm font-medium">{event.type} Event</span>
                    </div>
                    <button className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-gradient-to-br from-slate-800/50 to-gray-800/50 rounded-xl">
          <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h4 className="text-lg font-semibold text-white mb-2">No Events Found</h4>
          <p className="text-gray-400">
            No events scheduled for the selected month. Try selecting a different month.
          </p>
        </div>
      )}
    </div>
  );
};

export default LocalEvents;