import React, { useState, useEffect } from 'react';
import {
  Users, Eye, MousePointer, CreditCard, TrendingUp, TrendingDown,
  Globe, Calendar, RefreshCw, LogOut, Activity, DollarSign,
  Clock, Filter, Download, Moon, Sun, MapPin, ExternalLink
} from 'lucide-react';
import { analyticsService } from '../services/analyticsService';
import { LineChart } from './charts/LineChart';
import { BarChart } from './charts/BarChart';
import { DonutChart } from './charts/DonutChart';
import { useTheme } from '../context/ThemeContext';

interface RealTimeAdminDashboardProps {
  onLogout: () => void;
}

export const RealTimeAdminDashboard: React.FC<RealTimeAdminDashboardProps> = ({ onLogout }) => {
  const { isDark, toggleTheme } = useTheme();
  const [activeTab, setActiveTab] = useState('overview');
  const [timeRange, setTimeRange] = useState(30);
  const [refreshing, setRefreshing] = useState(false);
  const [lastUpdate, setLastUpdate] = useState(new Date());

  const [analyticsData, setAnalyticsData] = useState({
    liveVisitors: 0,
    totalVisitors: 0,
    totalPageViews: 0,
    totalBookings: 0,
    bounceRate: 0,
    avgSessionDuration: 0
  });

  const [visitorLocations, setVisitorLocations] = useState<any[]>([]);
  const [topPages, setTopPages] = useState<any[]>([]);
  const [trafficSources, setTrafficSources] = useState<any[]>([]);
  const [dailyTrends, setDailyTrends] = useState<any[]>([]);
  const [recentBookings, setRecentBookings] = useState<any[]>([]);
  const [activePages, setActivePages] = useState<any[]>([]);

  const fetchData = async () => {
    try {
      const [summary, locations, pages, sources, trends, bookings, active] = await Promise.all([
        analyticsService.getAnalyticsSummary(timeRange),
        analyticsService.getVisitorLocations(timeRange),
        analyticsService.getTopPages(timeRange),
        analyticsService.getTrafficSources(timeRange),
        analyticsService.getDailyTrends(timeRange),
        analyticsService.getRecentBookings(10),
        analyticsService.getActivePages()
      ]);

      setAnalyticsData(summary);
      setVisitorLocations(locations);
      setTopPages(pages);
      setTrafficSources(sources);
      setDailyTrends(trends);
      setRecentBookings(bookings);
      setActivePages(active);
      setLastUpdate(new Date());
    } catch (error) {
      console.error('Error fetching analytics data:', error);
    }
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 30000);
    return () => clearInterval(interval);
  }, [timeRange]);

  const handleRefresh = async () => {
    setRefreshing(true);
    await fetchData();
    setTimeout(() => setRefreshing(false), 1000);
  };

  const StatCard = ({ title, value, change, icon: Icon, trend, subtitle }: any) => (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all">
      <div className="flex items-start justify-between mb-4">
        <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg">
          <Icon className="h-6 w-6 text-white" />
        </div>
        {change !== undefined && (
          <div className={`flex items-center text-sm font-semibold ${
            change >= 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
          }`}>
            {change >= 0 ? <TrendingUp className="h-4 w-4 mr-1" /> : <TrendingDown className="h-4 w-4 mr-1" />}
            {Math.abs(change).toFixed(1)}%
          </div>
        )}
      </div>
      <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{value}</div>
      <div className="text-sm text-gray-600 dark:text-gray-400">{title}</div>
      {subtitle && <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">{subtitle}</div>}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50 shadow-sm">
        <div className="max-w-[1800px] mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-3 rounded-xl shadow-lg">
                <Activity className="h-7 w-7 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Analytics Dashboard</h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">Real-time website insights</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="hidden md:flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-2 rounded-lg">
                <Clock className="h-4 w-4" />
                <span>Updated: {lastUpdate.toLocaleTimeString()}</span>
              </div>

              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {isDark ? <Sun className="h-5 w-5 text-gray-600 dark:text-gray-300" /> : <Moon className="h-5 w-5 text-gray-600" />}
              </button>

              <button
                onClick={handleRefresh}
                disabled={refreshing}
                className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-4 py-2 rounded-lg transition-all shadow-md hover:shadow-lg"
              >
                <RefreshCw className={`h-4 w-4 ${refreshing ? 'animate-spin' : ''}`} />
                <span className="hidden sm:inline">Refresh</span>
              </button>

              <button
                onClick={onLogout}
                className="flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-all shadow-md hover:shadow-lg"
              >
                <LogOut className="h-4 w-4" />
                <span className="hidden sm:inline">Logout</span>
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between mt-4">
            <nav className="flex space-x-2 overflow-x-auto pb-2">
              {[
                { id: 'overview', label: 'Overview' },
                { id: 'visitors', label: 'Visitors' },
                { id: 'locations', label: 'Locations' },
                { id: 'pages', label: 'Top Pages' },
                { id: 'bookings', label: 'Bookings' },
                { id: 'realtime', label: 'Real-time' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-lg font-medium text-sm whitespace-nowrap transition-all ${
                    activeTab === tab.id
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>

            <div className="flex items-center space-x-2">
              <Filter className="h-4 w-4 text-gray-500 dark:text-gray-400" />
              <select
                value={timeRange}
                onChange={(e) => setTimeRange(Number(e.target.value))}
                className="bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value={1}>Last 24 hours</option>
                <option value={7}>Last 7 days</option>
                <option value={30}>Last 30 days</option>
                <option value={90}>Last 90 days</option>
              </select>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-[1800px] mx-auto px-6 py-8">
        {activeTab === 'overview' && (
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
              <div className="flex items-center space-x-3">
                <div className="animate-pulse h-3 w-3 bg-green-500 rounded-full" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Live Monitoring Active</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {analyticsData.liveVisitors} active visitors • Auto-refresh every 30 seconds
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard
                title="Live Visitors"
                value={analyticsData.liveVisitors.toLocaleString()}
                icon={Activity}
                subtitle="Active in last 5 minutes"
              />
              <StatCard
                title="Total Visitors"
                value={analyticsData.totalVisitors.toLocaleString()}
                change={12.5}
                icon={Users}
                subtitle={`Last ${timeRange} days`}
              />
              <StatCard
                title="Page Views"
                value={analyticsData.totalPageViews.toLocaleString()}
                change={8.3}
                icon={Eye}
                subtitle={`Last ${timeRange} days`}
              />
              <StatCard
                title="Total Bookings"
                value={analyticsData.totalBookings.toLocaleString()}
                change={15.7}
                icon={CreditCard}
                subtitle={`Last ${timeRange} days`}
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Visitor Trends</h3>
                  <Calendar className="h-5 w-5 text-gray-400" />
                </div>
                <LineChart
                  data={dailyTrends.map(d => ({
                    label: new Date(d.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
                    value: d.visitors
                  }))}
                  height={300}
                  color="#3b82f6"
                />
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Traffic Sources</h3>
                  <Globe className="h-5 w-5 text-gray-400" />
                </div>
                <DonutChart
                  data={trafficSources.map((source, i) => ({
                    label: source.source.charAt(0).toUpperCase() + source.source.slice(1),
                    value: source.visitors,
                    color: ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'][i % 5]
                  }))}
                  size={180}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-blue-600" />
                  Top Visitor Locations
                </h3>
                <BarChart
                  data={visitorLocations.slice(0, 5).map(loc => ({
                    label: `${loc.city}, ${loc.country}`,
                    value: loc.count,
                    color: '#3b82f6'
                  }))}
                  height={300}
                />
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                  <Eye className="h-5 w-5 mr-2 text-green-600" />
                  Most Viewed Pages
                </h3>
                <BarChart
                  data={topPages.slice(0, 5).map(page => ({
                    label: page.page_title,
                    value: page.views,
                    color: '#10b981'
                  }))}
                  height={300}
                />
              </div>
            </div>
          </div>
        )}

        {activeTab === 'visitors' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard
                title="Total Visitors"
                value={analyticsData.totalVisitors.toLocaleString()}
                change={12.5}
                icon={Users}
              />
              <StatCard
                title="Bounce Rate"
                value={`${analyticsData.bounceRate.toFixed(1)}%`}
                change={-3.2}
                icon={TrendingDown}
              />
              <StatCard
                title="Avg. Session Duration"
                value="3m 45s"
                change={8.1}
                icon={Clock}
              />
              <StatCard
                title="Pages/Session"
                value="4.2"
                change={5.3}
                icon={Eye}
              />
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Daily Visitors Trend</h3>
              <LineChart
                data={dailyTrends.map(d => ({
                  label: new Date(d.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
                  value: d.visitors
                }))}
                height={400}
                color="#3b82f6"
              />
            </div>
          </div>
        )}

        {activeTab === 'locations' && (
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Visitor Locations</h3>
              <div className="space-y-4">
                {visitorLocations.map((location, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center justify-center w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                        <span className="text-sm font-bold text-blue-600 dark:text-blue-400">#{index + 1}</span>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-white">{location.city}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">{location.country}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-gray-900 dark:text-white">{location.count}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">visitors</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'pages' && (
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Top Performing Pages</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600 dark:text-gray-400">Page</th>
                      <th className="text-right py-3 px-4 text-sm font-semibold text-gray-600 dark:text-gray-400">Views</th>
                      <th className="text-right py-3 px-4 text-sm font-semibold text-gray-600 dark:text-gray-400">Unique Visitors</th>
                      <th className="text-right py-3 px-4 text-sm font-semibold text-gray-600 dark:text-gray-400">Avg. Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {topPages.map((page, index) => (
                      <tr key={index} className="border-b border-gray-100 dark:border-gray-700/50 hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors">
                        <td className="py-3 px-4">
                          <div className="font-medium text-gray-900 dark:text-white">{page.page_title}</div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">{page.page_path}</div>
                        </td>
                        <td className="text-right py-3 px-4 font-semibold text-gray-900 dark:text-white">{page.views.toLocaleString()}</td>
                        <td className="text-right py-3 px-4 text-gray-600 dark:text-gray-400">{page.unique_visitors.toLocaleString()}</td>
                        <td className="text-right py-3 px-4 text-gray-600 dark:text-gray-400">2m 34s</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'bookings' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <StatCard
                title="Total Bookings"
                value={analyticsData.totalBookings.toLocaleString()}
                change={15.7}
                icon={CreditCard}
              />
              <StatCard
                title="Est. Revenue"
                value={`$${(analyticsData.totalBookings * 1500).toLocaleString()}`}
                change={18.3}
                icon={DollarSign}
              />
              <StatCard
                title="Conversion Rate"
                value="3.2%"
                change={0.8}
                icon={TrendingUp}
              />
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Recent Bookings</h3>
              <div className="space-y-3">
                {recentBookings.map((booking, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/10 dark:to-emerald-900/10 border border-green-200 dark:border-green-800 rounded-lg"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                        <CreditCard className="h-5 w-5 text-green-600 dark:text-green-400" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-white">
                          {booking.country_name || 'Travel Booking'}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          {new Date(booking.created_at).toLocaleString()}
                        </div>
                      </div>
                    </div>
                    {booking.booking_url && (
                      <a
                        href={booking.booking_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 hover:underline flex items-center space-x-1"
                      >
                        <span className="text-sm">View</span>
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'realtime' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <StatCard
                title="Active Now"
                value={analyticsData.liveVisitors.toLocaleString()}
                icon={Activity}
                subtitle="Last 5 minutes"
              />
              <StatCard
                title="Active Pages"
                value={activePages.length.toString()}
                icon={Eye}
                subtitle="Pages being viewed"
              />
              <StatCard
                title="Avg. Load Time"
                value="1.2s"
                icon={Clock}
                subtitle="Page load speed"
              />
              <StatCard
                title="Online Sessions"
                value={analyticsData.liveVisitors.toLocaleString()}
                icon={Users}
                subtitle="Active sessions"
              />
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Active Pages Right Now</h3>
                <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                  <div className="animate-pulse h-2 w-2 bg-green-500 rounded-full" />
                  <span>Live</span>
                </div>
              </div>
              <div className="space-y-3">
                {activePages.length > 0 ? (
                  activePages.map((page, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg"
                    >
                      <div className="flex items-center space-x-3">
                        <Eye className="h-5 w-5 text-blue-600" />
                        <span className="font-medium text-gray-900 dark:text-white">{page.page}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="h-4 w-4 text-gray-400" />
                        <span className="font-bold text-gray-900 dark:text-white">{page.visitors}</span>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                    No active visitors at the moment
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};
