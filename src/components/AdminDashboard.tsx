import React, { useState, useEffect } from 'react';
import {
  Users,
  Eye,
  MousePointerClick,
  Globe,
  TrendingUp,
  Calendar,
  MapPin,
  Car,
  Activity,
  Clock,
  BarChart3,
  PieChart,
  RefreshCw,
  LogOut,
  Crown
} from 'lucide-react';
import { getAnalyticsData, subscribeToAnalytics } from '../services/analyticsService';

interface AdminDashboardProps {
  onLogout: () => void;
}

interface AnalyticsData {
  pageViews: any[];
  countryViews: any[];
  bookings: any[];
  sessions: any[];
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ onLogout }) => {
  const [data, setData] = useState<AnalyticsData>({
    pageViews: [],
    countryViews: [],
    bookings: [],
    sessions: [],
  });
  const [loading, setLoading] = useState(true);
  const [timeRange, setTimeRange] = useState(7);
  const [lastUpdate, setLastUpdate] = useState<Date>(new Date());

  // Fetch analytics data
  const fetchData = async () => {
    setLoading(true);
    const analyticsData = await getAnalyticsData(timeRange);
    setData(analyticsData);
    setLastUpdate(new Date());
    setLoading(false);
  };

  useEffect(() => {
    fetchData();

    // Subscribe to real-time updates
    const unsubscribe = subscribeToAnalytics((payload) => {
      console.log('Real-time update:', payload);
      fetchData(); // Refresh data on new events
    });

    return () => {
      unsubscribe();
    };
  }, [timeRange]);

  // Calculate statistics
  const stats = {
    totalVisitors: data.sessions.length,
    totalPageViews: data.pageViews.length,
    totalBookings: data.bookings.length,
    uniqueCountries: new Set(data.countryViews.map((v) => v.country_name)).size,
    avgTimeOnSite: data.countryViews.length > 0
      ? Math.round(
          data.countryViews.reduce((acc, v) => acc + (v.duration || 0), 0) / data.countryViews.length
        )
      : 0,
  };

  // Top countries by views
  const topCountries = Object.entries(
    data.countryViews.reduce((acc: any, view) => {
      acc[view.country_name] = (acc[view.country_name] || 0) + 1;
      return acc;
    }, {})
  )
    .sort(([, a]: any, [, b]: any) => b - a)
    .slice(0, 5);

  // Top pages
  const topPages = Object.entries(
    data.pageViews.reduce((acc: any, view) => {
      acc[view.page_path] = (acc[view.page_path] || 0) + 1;
      return acc;
    }, {})
  )
    .sort(([, a]: any, [, b]: any) => b - a)
    .slice(0, 5);

  // Device breakdown
  const deviceStats = Object.entries(
    data.sessions.reduce((acc: any, session) => {
      const device = session.device_type || 'Unknown';
      acc[device] = (acc[device] || 0) + 1;
      return acc;
    }, {})
  );

  // Recent bookings
  const recentBookings = data.bookings
    .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
    .slice(0, 10);

  // Traffic by hour (last 24 hours)
  const getLast24Hours = () => {
    const hours = [];
    for (let i = 23; i >= 0; i--) {
      const hour = new Date();
      hour.setHours(hour.getHours() - i);
      hours.push(hour.getHours());
    }
    return hours;
  };

  const trafficByHour = getLast24Hours().map((hour) => {
    const count = data.pageViews.filter((view) => {
      const viewHour = new Date(view.created_at).getHours();
      return viewHour === hour;
    }).length;
    return { hour, count };
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-2">
              <Crown className="h-10 w-10 text-amber-400" />
              <h1 className="text-4xl font-bold text-white">Analytics Dashboard</h1>
            </div>
            <p className="text-gray-400">Real-time website analytics and insights</p>
          </div>
          <div className="flex items-center space-x-4">
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(Number(e.target.value))}
              className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500"
            >
              <option value={1}>Last 24 Hours</option>
              <option value={7}>Last 7 Days</option>
              <option value={30}>Last 30 Days</option>
            </select>
            <button
              onClick={fetchData}
              className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            >
              <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
              <span>Refresh</span>
            </button>
            <button
              onClick={onLogout}
              className="flex items-center space-x-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
            >
              <LogOut className="h-4 w-4" />
              <span>Logout</span>
            </button>
          </div>
        </div>

        {/* Last Update */}
        <div className="flex items-center space-x-2 text-sm text-gray-400 mb-6">
          <Activity className="h-4 w-4 animate-pulse text-green-400" />
          <span>Live - Last updated: {lastUpdate.toLocaleString()}</span>
        </div>

        {/* Key Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 border border-blue-500/30 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <Users className="h-8 w-8 text-blue-400" />
              <Activity className="h-5 w-5 text-blue-400 animate-pulse" />
            </div>
            <div className="text-3xl font-bold text-white mb-1">{stats.totalVisitors}</div>
            <div className="text-blue-300 text-sm">Total Visitors</div>
          </div>

          <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 border border-green-500/30 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <Eye className="h-8 w-8 text-green-400" />
              <TrendingUp className="h-5 w-5 text-green-400" />
            </div>
            <div className="text-3xl font-bold text-white mb-1">{stats.totalPageViews}</div>
            <div className="text-green-300 text-sm">Page Views</div>
          </div>

          <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 border border-purple-500/30 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <MousePointerClick className="h-8 w-8 text-purple-400" />
              <Activity className="h-5 w-5 text-purple-400 animate-pulse" />
            </div>
            <div className="text-3xl font-bold text-white mb-1">{stats.totalBookings}</div>
            <div className="text-purple-300 text-sm">Bookings Clicked</div>
          </div>

          <div className="bg-gradient-to-br from-amber-500/20 to-amber-600/20 border border-amber-500/30 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <Clock className="h-8 w-8 text-amber-400" />
              <TrendingUp className="h-5 w-5 text-amber-400" />
            </div>
            <div className="text-3xl font-bold text-white mb-1">{stats.avgTimeOnSite}s</div>
            <div className="text-amber-300 text-sm">Avg Time on Site</div>
          </div>
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Top Countries */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
            <div className="flex items-center space-x-3 mb-6">
              <Globe className="h-6 w-6 text-blue-400" />
              <h2 className="text-xl font-bold text-white">Top Countries Viewed</h2>
            </div>
            <div className="space-y-4">
              {topCountries.map(([country, count]: any, index) => (
                <div key={country} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center justify-center w-8 h-8 bg-blue-500/20 rounded-full text-blue-400 font-bold text-sm">
                      {index + 1}
                    </div>
                    <div>
                      <div className="text-white font-medium">{country}</div>
                      <div className="text-gray-400 text-sm">{count} views</div>
                    </div>
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
                        style={{ width: `${(count / topCountries[0][1]) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
              {topCountries.length === 0 && (
                <div className="text-center text-gray-400 py-8">No data available</div>
              )}
            </div>
          </div>

          {/* Top Pages */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
            <div className="flex items-center space-x-3 mb-6">
              <BarChart3 className="h-6 w-6 text-green-400" />
              <h2 className="text-xl font-bold text-white">Most Visited Pages</h2>
            </div>
            <div className="space-y-4">
              {topPages.map(([page, count]: any, index) => (
                <div key={page} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3 flex-1 min-w-0">
                    <div className="flex items-center justify-center w-8 h-8 bg-green-500/20 rounded-full text-green-400 font-bold text-sm flex-shrink-0">
                      {index + 1}
                    </div>
                    <div className="min-w-0">
                      <div className="text-white font-medium truncate">{page}</div>
                      <div className="text-gray-400 text-sm">{count} views</div>
                    </div>
                  </div>
                </div>
              ))}
              {topPages.length === 0 && (
                <div className="text-center text-gray-400 py-8">No data available</div>
              )}
            </div>
          </div>
        </div>

        {/* Traffic Chart */}
        <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 mb-8">
          <div className="flex items-center space-x-3 mb-6">
            <Activity className="h-6 w-6 text-purple-400" />
            <h2 className="text-xl font-bold text-white">Traffic by Hour (Last 24h)</h2>
          </div>
          <div className="flex items-end justify-between h-48 space-x-2">
            {trafficByHour.map(({ hour, count }, index) => {
              const maxCount = Math.max(...trafficByHour.map((t) => t.count), 1);
              const height = (count / maxCount) * 100;
              return (
                <div key={index} className="flex-1 flex flex-col items-center">
                  <div
                    className="w-full bg-gradient-to-t from-purple-500 to-purple-400 rounded-t hover:from-purple-400 hover:to-purple-300 transition-all cursor-pointer relative group"
                    style={{ height: `${height}%`, minHeight: count > 0 ? '4px' : '0' }}
                  >
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-slate-900 px-2 py-1 rounded text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      {count} views
                    </div>
                  </div>
                  <div className="text-xs text-gray-400 mt-2">{hour}h</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Device Stats & Recent Bookings */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Device Breakdown */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
            <div className="flex items-center space-x-3 mb-6">
              <PieChart className="h-6 w-6 text-amber-400" />
              <h2 className="text-xl font-bold text-white">Device Breakdown</h2>
            </div>
            <div className="space-y-4">
              {deviceStats.map(([device, count]: any) => {
                const total = data.sessions.length;
                const percentage = total > 0 ? ((count / total) * 100).toFixed(1) : '0';
                return (
                  <div key={device}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white font-medium">{device}</span>
                      <span className="text-gray-400">{count} ({percentage}%)</span>
                    </div>
                    <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full"
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
              {deviceStats.length === 0 && (
                <div className="text-center text-gray-400 py-8">No data available</div>
              )}
            </div>
          </div>

          {/* Recent Bookings */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
            <div className="flex items-center space-x-3 mb-6">
              <Car className="h-6 w-6 text-emerald-400" />
              <h2 className="text-xl font-bold text-white">Recent Bookings</h2>
            </div>
            <div className="space-y-3 max-h-64 overflow-y-auto">
              {recentBookings.map((booking) => (
                <div
                  key={booking.id}
                  className="flex items-start space-x-3 p-3 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-colors"
                >
                  <MapPin className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div className="flex-1 min-w-0">
                    <div className="text-white font-medium">{booking.country_name}</div>
                    <div className="text-gray-400 text-sm truncate">{booking.transport_type}</div>
                    <div className="text-gray-500 text-xs">
                      {new Date(booking.created_at).toLocaleString()}
                    </div>
                  </div>
                </div>
              ))}
              {recentBookings.length === 0 && (
                <div className="text-center text-gray-400 py-8">No bookings yet</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
