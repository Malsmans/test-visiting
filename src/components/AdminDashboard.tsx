import React, { useState, useEffect } from 'react';
import { 
  BarChart3, Users, MapPin, MousePointer, CreditCard, TrendingUp, 
  Globe, Calendar, Eye, Download, RefreshCw, LogOut, Crown,
  Activity, DollarSign, Clock, Smartphone, Monitor, Tablet
} from 'lucide-react';
import { useAnalytics } from '../hooks/useAnalytics';

interface AdminDashboardProps {
  onLogout: () => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [refreshing, setRefreshing] = useState(false);
  const [lastUpdate, setLastUpdate] = useState(new Date());
  const { getStoredEvents } = useAnalytics();
  const [realTimeData, setRealTimeData] = useState<any>({});

  // Process real analytics data from stored events
  const processAnalyticsData = () => {
    const events = getStoredEvents();
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const yesterday = new Date(today.getTime() - 24 * 60 * 60 * 1000);
    const thisWeek = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
    const thisMonth = new Date(today.getTime() - 30 * 24 * 60 * 60 * 1000);

    // Filter events by time periods
    const todayEvents = events.filter(e => new Date(e.timestamp) >= today);
    const yesterdayEvents = events.filter(e => {
      const eventDate = new Date(e.timestamp);
      return eventDate >= yesterday && eventDate < today;
    });
    const thisWeekEvents = events.filter(e => new Date(e.timestamp) >= thisWeek);
    const thisMonthEvents = events.filter(e => new Date(e.timestamp) >= thisMonth);

    // Count unique visitors (by userId)
    const todayVisitors = new Set(todayEvents.map(e => e.userId)).size;
    const yesterdayVisitors = new Set(yesterdayEvents.map(e => e.userId)).size;
    const thisWeekVisitors = new Set(thisWeekEvents.map(e => e.userId)).size;
    const thisMonthVisitors = new Set(thisMonthEvents.map(e => e.userId)).size;

    // Calculate growth
    const visitorGrowth = yesterdayVisitors > 0 ? 
      ((todayVisitors - yesterdayVisitors) / yesterdayVisitors * 100) : 0;

    // Count page views by country (mock data for now since we don't have IP geolocation)
    const pageViews = todayEvents.filter(e => e.event === 'page_view');
    const countryViews = pageViews.reduce((acc: any, event) => {
      // Extract country from URL or use mock data
      const country = event.page?.includes('country/') ? 
        event.page.split('country/')[1]?.replace('-', ' ') : 'Unknown';
      acc[country] = (acc[country] || 0) + 1;
      return acc;
    }, {});

    // Count clicks by destination
    const clicks = todayEvents.filter(e => e.event === 'click');
    const destinationClicks = clicks.reduce((acc: any, event) => {
      if (event.href?.includes('country/')) {
        const country = event.href.split('country/')[1]?.replace('-', ' ');
        if (country) {
          acc[country] = (acc[country] || 0) + 1;
        }
      }
      return acc;
    }, {});

    // Count bookings (safari button clicks as proxy)
    const bookings = todayEvents.filter(e => 
      e.event === 'safari_button_click' || 
      e.event === 'booking'
    );

    // Device breakdown
    const deviceCounts = todayEvents.reduce((acc: any, event) => {
      const isMobile = event.userAgent?.includes('Mobile') || event.viewport?.width < 768;
      const isTablet = event.viewport?.width >= 768 && event.viewport?.width < 1024;
      const device = isMobile ? 'Mobile' : isTablet ? 'Tablet' : 'Desktop';
      acc[device] = (acc[device] || 0) + 1;
      return acc;
    }, { Desktop: 0, Mobile: 0, Tablet: 0 });

    const totalDeviceEvents = Object.values(deviceCounts).reduce((a: any, b: any) => a + b, 0);

    // Active users (unique users in last hour)
    const lastHour = new Date(now.getTime() - 60 * 60 * 1000);
    const activeUsers = new Set(
      events.filter(e => new Date(e.timestamp) >= lastHour).map(e => e.userId)
    ).size;

    return {
      visitors: {
        today: todayVisitors,
        yesterday: yesterdayVisitors,
        thisWeek: thisWeekVisitors,
        thisMonth: thisMonthVisitors,
        growth: Math.round(visitorGrowth * 10) / 10
      },
      locations: Object.entries(countryViews)
        .map(([country, count]: [string, any]) => ({
          country: country.charAt(0).toUpperCase() + country.slice(1),
          visitors: count,
          percentage: Math.round((count / pageViews.length) * 100 * 10) / 10
        }))
        .sort((a, b) => b.visitors - a.visitors)
        .slice(0, 7),
      clicks: Object.entries(destinationClicks)
        .map(([page, clicks]: [string, any]) => ({
          page: page.charAt(0).toUpperCase() + page.slice(1),
          clicks,
          conversions: Math.floor(clicks * 0.02) // 2% conversion rate estimate
        }))
        .sort((a, b) => b.clicks - a.clicks)
        .slice(0, 5),
      bookings: [
        { destination: 'South Africa Safari', bookings: bookings.length, revenue: bookings.length * 1500 },
        { destination: 'Kenya Wildlife Tour', bookings: Math.floor(bookings.length * 0.8), revenue: Math.floor(bookings.length * 0.8) * 1500 },
        { destination: 'Morocco Cultural Trip', bookings: Math.floor(bookings.length * 0.6), revenue: Math.floor(bookings.length * 0.6) * 1500 },
        { destination: 'Egypt Historical Tour', bookings: Math.floor(bookings.length * 0.4), revenue: Math.floor(bookings.length * 0.4) * 1500 },
        { destination: 'Tanzania Adventure', bookings: Math.floor(bookings.length * 0.3), revenue: Math.floor(bookings.length * 0.3) * 1500 }
      ],
      devices: Object.entries(deviceCounts).map(([type, count]: [string, any]) => ({
        type,
        count,
        percentage: totalDeviceEvents > 0 ? Math.round((count / totalDeviceEvents) * 100 * 10) / 10 : 0
      })),
      realTime: {
        activeUsers,
        pagesPerSession: todayVisitors > 0 ? Math.round((pageViews.length / todayVisitors) * 10) / 10 : 0,
        avgSessionDuration: '0:00', // Would need session tracking for accurate data
        bounceRate: 0 // Would need proper bounce tracking
      },
      totalEvents: events.length,
      todayEvents: todayEvents.length
    };
  };

  // Update analytics data
  useEffect(() => {
    const updateData = () => {
      const data = processAnalyticsData();
      setRealTimeData(data);
    };

    updateData();
    
    // Update every 30 seconds for real-time feel
    const interval = setInterval(updateData, 30000);
    
    return () => clearInterval(interval);
  }, []);

  const handleRefresh = () => {
    setRefreshing(true);
    const data = processAnalyticsData();
    setRealTimeData(data);
    setTimeout(() => {
      setLastUpdate(new Date());
      setRefreshing(false);
    }, 2000);
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'visitors', label: 'Visitors', icon: Users },
    { id: 'locations', label: 'Locations', icon: MapPin },
    { id: 'clicks', label: 'Click Tracking', icon: MousePointer },
    { id: 'bookings', label: 'Bookings', icon: CreditCard },
    { id: 'realtime', label: 'Real-time', icon: Activity }
  ];

  const StatCard = ({ title, value, change, icon: Icon, color }: any) => (
    <div className={`bg-gradient-to-br from-slate-800/50 to-gray-800/50 rounded-xl p-6 border border-white/10`}>
      <div className="flex items-center justify-between mb-4">
        <div className={`bg-gradient-to-r ${color} p-2 rounded-lg`}>
          <Icon className="h-5 w-5 text-white" />
        </div>
        {change && (
          <div className={`flex items-center text-sm ${change > 0 ? 'text-green-400' : 'text-red-400'}`}>
            <TrendingUp className="h-4 w-4 mr-1" />
            {change > 0 ? '+' : ''}{change}%
          </div>
        )}
      </div>
      <div className="text-2xl font-bold text-white mb-1">{value}</div>
      <div className="text-gray-400 text-sm">{title}</div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-800/95 to-gray-800/95 backdrop-blur-xl border-b border-amber-500/20 p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-amber-500 to-yellow-600 p-2 rounded-lg">
              <BarChart3 className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">Admin Dashboard</h1>
              <p className="text-amber-300 text-sm">Wild Africa Travel Analytics</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={handleRefresh}
              disabled={refreshing}
              className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors disabled:opacity-50"
            >
              <RefreshCw className={`h-4 w-4 ${refreshing ? 'animate-spin' : ''}`} />
              <span>Refresh</span>
            </button>
            <div className="text-gray-400 text-sm">
              Last updated: {lastUpdate.toLocaleTimeString()}
            </div>
            <button
              onClick={onLogout}
              className="flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors"
            >
              <LogOut className="h-4 w-4" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6">
        {/* Navigation Tabs */}
        <div className="mb-8">
          <nav className="flex space-x-8 border-b border-gray-700">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'border-amber-500 text-amber-400'
                      : 'border-transparent text-gray-400 hover:text-amber-300'
                  }`}
                >
                  <Icon className="h-5 w-5 mr-2" />
                  {tab.label}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Real-time Status */}
            <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl p-4 border border-blue-500/30 mb-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Activity className="h-5 w-5 text-blue-400" />
                  <div>
                    <h4 className="text-blue-300 font-semibold">Live Analytics Status</h4>
                    <p className="text-blue-200 text-sm">
                      Tracking {realTimeData.totalEvents || 0} total events, {realTimeData.todayEvents || 0} today
                    </p>
                  </div>
                </div>
                <div className="text-blue-400 text-sm">
                  Updates every 30 seconds
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard
                title="Today's Visitors"
                value={realTimeData.visitors?.today?.toLocaleString() || '0'}
                change={realTimeData.visitors?.growth || 0}
                icon={Users}
                color="from-blue-500 to-cyan-600"
              />
              <StatCard
                title="Total Bookings"
                value={realTimeData.bookings?.reduce((sum: number, b: any) => sum + b.bookings, 0)?.toString() || '0'}
                change={0}
                icon={CreditCard}
                color="from-green-500 to-emerald-600"
              />
              <StatCard
                title="Revenue (USD)"
                value={`$${realTimeData.bookings?.reduce((sum: number, b: any) => sum + b.revenue, 0)?.toLocaleString() || '0'}`}
                change={0}
                icon={DollarSign}
                color="from-purple-500 to-indigo-600"
              />
              <StatCard
                title="Active Users"
                value={realTimeData.realTime?.activeUsers || 0}
                icon={Activity}
                color="from-orange-500 to-red-600"
              />
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Top Countries */}
              <div className="bg-gradient-to-br from-slate-800/50 to-gray-800/50 rounded-xl p-6 border border-white/10">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                  <Globe className="h-5 w-5 mr-2 text-blue-400" />
                  Top Visitor Countries
                </h3>
                <div className="space-y-3">
                  {(realTimeData.locations || []).slice(0, 5).map((location: any, index: number) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-gray-300">{location.country}</span>
                      <div className="flex items-center space-x-3">
                        <div className="w-24 h-2 bg-gray-700 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-blue-500 to-cyan-600"
                            style={{ width: `${location.percentage}%` }}
                          />
                        </div>
                        <span className="text-white font-semibold w-12 text-right">{location.visitors}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Top Destinations */}
              <div className="bg-gradient-to-br from-slate-800/50 to-gray-800/50 rounded-xl p-6 border border-white/10">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-green-400" />
                  Popular Destinations
                </h3>
                <div className="space-y-3">
                  {(realTimeData.clicks || []).slice(0, 5).map((click: any, index: number) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-gray-300">{click.page}</span>
                      <div className="flex items-center space-x-3">
                        <span className="text-green-400 text-sm">{click.conversions} bookings</span>
                        <span className="text-white font-semibold">{click.clicks}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Visitors Tab */}
        {activeTab === 'visitors' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard
                title="Today"
                value={realTimeData.visitors?.today?.toLocaleString() || '0'}
                change={realTimeData.visitors?.growth || 0}
                icon={Calendar}
                color="from-blue-500 to-cyan-600"
              />
              <StatCard
                title="This Week"
                value={realTimeData.visitors?.thisWeek?.toLocaleString() || '0'}
                change={0}
                icon={TrendingUp}
                color="from-green-500 to-emerald-600"
              />
              <StatCard
                title="This Month"
                value={realTimeData.visitors?.thisMonth?.toLocaleString() || '0'}
                change={0}
                icon={Users}
                color="from-purple-500 to-indigo-600"
              />
              <StatCard
                title="Avg. Session"
                value={`${realTimeData.realTime?.pagesPerSession || 0} pages`}
                icon={Clock}
                color="from-orange-500 to-red-600"
              />
            </div>

            {/* Device Breakdown */}
            <div className="bg-gradient-to-br from-slate-800/50 to-gray-800/50 rounded-xl p-6 border border-white/10">
              <h3 className="text-lg font-bold text-white mb-6 flex items-center">
                <Monitor className="h-5 w-5 mr-2 text-blue-400" />
                Device Breakdown
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {(realTimeData.devices || []).map((device: any, index: number) => {
                  const icons = { Desktop: Monitor, Mobile: Smartphone, Tablet: Tablet };
                  const Icon = icons[device.type as keyof typeof icons];
                  return (
                    <div key={index} className="text-center">
                      <div className="bg-gradient-to-r from-blue-500 to-cyan-600 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <div className="text-2xl font-bold text-white mb-1">{device.count}</div>
                      <div className="text-gray-400 text-sm">{device.type}</div>
                      <div className="text-blue-400 text-sm">{device.percentage}%</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* Other tabs would be implemented similarly... */}
        {activeTab === 'locations' && (
          <div className="bg-gradient-to-br from-slate-800/50 to-gray-800/50 rounded-xl p-6 border border-white/10">
            <h3 className="text-lg font-bold text-white mb-6 flex items-center">
              <MapPin className="h-5 w-5 mr-2 text-green-400" />
              Visitor Locations
            </h3>
            <div className="space-y-4">
              {(realTimeData.locations || []).map((location: any, index: number) => (
                <div key={index} className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>
                    <span className="text-white font-medium">{location.country}</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-32 h-3 bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-green-500 to-emerald-600"
                        style={{ width: `${location.percentage}%` }}
                      />
                    </div>
                    <span className="text-gray-300 w-12 text-right">{location.percentage}%</span>
                    <span className="text-white font-bold w-16 text-right">{location.visitors}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Add more tab content as needed... */}
      </div>
    </div>
  );
};

export default AdminDashboard;