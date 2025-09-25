import React, { useState, useEffect } from 'react';
import { DollarSign, TrendingUp, RefreshCw, Crown, Sparkles, AlertCircle } from 'lucide-react';

interface CurrencyConverterProps {
  country: string;
}

interface ExchangeRates {
  [key: string]: number;
}

const getCurrencyCode = (country: string): string => {
  const currencyCodes: { [key: string]: string } = {
    'South Africa': 'ZAR',
    'Kenya': 'KES',
    'Nigeria': 'NGN',
    'Morocco': 'MAD',
    'Egypt': 'EGP',
    'Ghana': 'GHS',
    'Tanzania': 'TZS',
    'Uganda': 'UGX',
    'Rwanda': 'RWF',
    'Ethiopia': 'ETB',
    'Botswana': 'BWP',
    'Namibia': 'NAD',
    'Zimbabwe': 'ZWL',
    'Zambia': 'ZMW',
    'Malawi': 'MWK',
    'Mozambique': 'MZN',
    'Madagascar': 'MGA',
    'Mauritius': 'MUR',
    'Seychelles': 'SCR',
    'Eswatini': 'SZL',
    'Tunisia': 'TND',
    'Senegal': 'XOF',
    'Sierra Leone': 'SLL'
  };
  return currencyCodes[country] || 'USD';
};

const CurrencyConverter: React.FC<CurrencyConverterProps> = ({ country }) => {
  const [amount, setAmount] = useState<string>('100');
  const [fromCurrency, setFromCurrency] = useState<string>('USD');
  const [toCurrency, setToCurrency] = useState<string>(getCurrencyCode(country));
  const [convertedAmount, setConvertedAmount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [exchangeRates, setExchangeRates] = useState<ExchangeRates>({});
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  // Always include the local currency and major currencies
  const currencies = ['USD', 'EUR', 'GBP', toCurrency].filter((curr, index, arr) => arr.indexOf(curr) === index);
  
  // Ensure local currency is always available
  const availableCurrencies = [...new Set([...currencies, getCurrencyCode(country)])];

  // Fetch live exchange rates
  const fetchExchangeRates = async () => {
    setLoading(true);
    setError('');
    
    try {
      // Using exchangerate-api.com (free tier: 1500 requests/month)
      const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
      
      if (!response.ok) {
        throw new Error('Failed to fetch exchange rates');
      }
      
      const data = await response.json();
      setExchangeRates(data.rates);
      setLastUpdated(new Date());
      
      // Store in localStorage for offline fallback
      localStorage.setItem('exchange_rates', JSON.stringify({
        rates: data.rates,
        timestamp: Date.now()
      }));
      
    } catch (err) {
      console.error('Exchange rate fetch error:', err);
      setError('Unable to fetch live rates. Using cached data.');
      
      // Try to use cached rates
      const cached = localStorage.getItem('exchange_rates');
      if (cached) {
        const { rates, timestamp } = JSON.parse(cached);
        const cacheAge = Date.now() - timestamp;
        
        // Use cached data if less than 24 hours old
        if (cacheAge < 24 * 60 * 60 * 1000) {
          setExchangeRates(rates);
          setLastUpdated(new Date(timestamp));
        } else {
          setError('Exchange rates unavailable. Please check your connection.');
        }
      } else {
        setError('Exchange rates unavailable. Please check your connection.');
      }
    } finally {
      setLoading(false);
    }
  };

  // Convert currency
  const convertCurrency = () => {
    if (!amount || !exchangeRates || Object.keys(exchangeRates).length === 0) {
      setConvertedAmount(0);
      return;
    }

    const numAmount = parseFloat(amount);
    if (isNaN(numAmount)) {
      setConvertedAmount(0);
      return;
    }

    if (fromCurrency === toCurrency) {
      setConvertedAmount(numAmount);
      return;
    }

    try {
      let result = numAmount;
      
      // Convert from source currency to USD first
      if (fromCurrency !== 'USD') {
        const fromRate = exchangeRates[fromCurrency];
        if (!fromRate) {
          setError(`Exchange rate for ${fromCurrency} not available`);
          return;
        }
        result = numAmount / fromRate;
      }
      
      // Convert from USD to target currency
      if (toCurrency !== 'USD') {
        const toRate = exchangeRates[toCurrency];
        if (!toRate) {
          setError(`Exchange rate for ${toCurrency} not available`);
          return;
        }
        result = result * toRate;
      }
      
      setConvertedAmount(result);
      setError('');
    } catch (err) {
      console.error('Conversion error:', err);
      setError('Conversion failed. Please try again.');
    }
  };

  // Fetch rates on component mount and when country changes
  useEffect(() => {
    fetchExchangeRates();
  }, [country]);

  // Convert when inputs change
  useEffect(() => {
    convertCurrency();
  }, [amount, fromCurrency, toCurrency, exchangeRates]);

  // Auto-refresh rates every 30 minutes
  useEffect(() => {
    const interval = setInterval(() => {
      fetchExchangeRates();
    }, 30 * 60 * 1000); // 30 minutes

    return () => clearInterval(interval);
  }, []);

  const handleRefresh = () => {
    fetchExchangeRates();
  };

  return (
    <div className="bg-gradient-to-br from-slate-900/95 via-gray-900/95 to-slate-900/95 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-amber-500/20">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-2 rounded-xl">
            <DollarSign className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">Currency Converter</h3>
            <p className="text-emerald-300 text-sm">{country} Exchange Rates</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-1 text-emerald-400">
            <Crown className="h-4 w-4" />
            <span className="text-xs font-medium tracking-wider uppercase">Live Rates</span>
          </div>
          <button
            onClick={handleRefresh}
            disabled={loading}
            className="p-2 bg-emerald-500/20 hover:bg-emerald-500/30 rounded-lg transition-colors disabled:opacity-50"
            title="Refresh rates"
          >
            <RefreshCw className={`h-4 w-4 text-emerald-400 ${loading ? 'animate-spin' : ''}`} />
          </button>
        </div>
      </div>

      {error && (
        <div className="mb-6 bg-orange-500/20 border border-orange-500/30 rounded-xl p-4 flex items-center space-x-3">
          <AlertCircle className="h-5 w-5 text-orange-400 flex-shrink-0" />
          <p className="text-orange-300 text-sm">{error}</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="space-y-4">
          <label className="block text-emerald-300 text-sm font-medium">From</label>
          <div className="flex space-x-3">
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-400 text-white placeholder-white/60"
              placeholder="Amount"
              min="0"
              step="0.01"
            />
            <select
              value={fromCurrency}
              onChange={(e) => setFromCurrency(e.target.value)}
              className="px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-400 text-white"
            >
              {availableCurrencies.map(currency => (
                <option key={currency} value={currency} className="bg-gray-900 text-white">
                  {currency}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="space-y-4">
          <label className="block text-emerald-300 text-sm font-medium">To</label>
          <div className="flex space-x-3">
            <div className="flex-1 px-4 py-3 bg-emerald-500/20 border border-emerald-500/30 rounded-xl flex items-center min-h-[52px]">
              {loading ? (
                <RefreshCw className="h-5 w-5 text-emerald-400 animate-spin mr-2" />
              ) : (
                <TrendingUp className="h-5 w-5 text-emerald-400 mr-2" />
              )}
              <span className="text-white font-bold text-lg break-all">
                {loading ? 'Converting...' : convertedAmount.toLocaleString(undefined, { 
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2 
                })}
              </span>
            </div>
            <select
              value={toCurrency}
              onChange={(e) => setToCurrency(e.target.value)}
              className="px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-400 text-white"
            >
              {availableCurrencies.map(currency => (
                <option key={currency} value={currency} className="bg-gray-900 text-white">
                  {currency}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-xl p-4 border border-emerald-500/30">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="flex items-center space-x-2 text-emerald-300 text-sm">
            <Sparkles className="h-4 w-4" />
            <span>Live exchange rates updated every 30 minutes</span>
          </div>
          {lastUpdated && (
            <div className="text-emerald-400 text-xs whitespace-nowrap">
              Updated: {lastUpdated.toLocaleTimeString()}
            </div>
          )}
        </div>
        
        {/* Exchange Rate Display */}
        {exchangeRates && fromCurrency && toCurrency && fromCurrency !== toCurrency && (
          <div className="mt-3 pt-3 border-t border-emerald-500/20">
            <div className="text-emerald-300 text-sm">
              <span className="font-medium">Exchange Rate:</span>
              <span className="ml-2 text-white font-bold">
                1 {fromCurrency} = {
                  fromCurrency === 'USD' 
                    ? (exchangeRates[toCurrency] || 0).toLocaleString(undefined, { minimumFractionDigits: 4, maximumFractionDigits: 4 })
                    : toCurrency === 'USD'
                    ? (1 / (exchangeRates[fromCurrency] || 1)).toLocaleString(undefined, { minimumFractionDigits: 4, maximumFractionDigits: 4 })
                    : ((exchangeRates[toCurrency] || 0) / (exchangeRates[fromCurrency] || 1)).toLocaleString(undefined, { minimumFractionDigits: 4, maximumFractionDigits: 4 })
                } {toCurrency}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CurrencyConverter;