import React, { useState } from 'react';
import { Shield, Eye, EyeOff, Crown, Lock } from 'lucide-react';

interface AdminLoginProps {
  onLogin: (username: string, password: string) => void;
  error?: string;
}

const AdminLogin: React.FC<AdminLoginProps> = ({ onLogin, error }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate login delay
    setTimeout(() => {
      onLogin(username, password);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 flex items-center justify-center p-4">
      <div className="bg-gradient-to-br from-slate-800/95 via-gray-800/95 to-slate-800/95 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-amber-500/20 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="bg-gradient-to-r from-amber-500 to-yellow-600 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <Shield className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">Admin Dashboard</h1>
          <p className="text-amber-300 text-sm">Wild Africa Travel Analytics</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-amber-300 text-sm font-medium mb-2">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl focus:ring-2 focus:ring-amber-500/50 focus:border-amber-400 text-white placeholder-white/60"
              placeholder="Enter admin username"
              required
            />
          </div>

          <div>
            <label className="block text-amber-300 text-sm font-medium mb-2">Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl focus:ring-2 focus:ring-amber-500/50 focus:border-amber-400 text-white placeholder-white/60 pr-12"
                placeholder="Enter admin password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-amber-400"
              >
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {error && (
            <div className="bg-red-500/20 border border-red-500/30 rounded-xl p-3">
              <p className="text-red-300 text-sm">{error}</p>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-500 hover:to-yellow-500 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
          >
            {loading ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                <span>Authenticating...</span>
              </>
            ) : (
              <>
                <Lock className="h-5 w-5" />
                <span>Access Dashboard</span>
              </>
            )}
          </button>
        </form>

        <div className="mt-6 text-center">
          <div className="flex items-center space-x-1 text-amber-400 justify-center">
            <Crown className="h-4 w-4" />
            <span className="text-xs font-medium tracking-wider uppercase">Secure Access</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;