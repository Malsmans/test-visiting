import { useEffect } from 'react';
import { trackPageView, trackCountryView, updateCountryDuration, trackBooking } from '../services/analyticsService';

export const useAnalytics = () => {
  useEffect(() => {
    // Track page view on mount
    trackPageView(window.location.pathname, document.title);
  }, []);

  return {
    trackPageView: (path: string, title: string) => trackPageView(path, title),
    trackCountryView: (country: string) => trackCountryView(country),
    updateCountryDuration: (country: string) => updateCountryDuration(country),
    trackBooking: (country: string, transportType: string, url: string) =>
      trackBooking(country, transportType, url),
    trackEvent: (eventName: string, data?: any) => {
      console.log('Event:', eventName, data);
    }
  };
};

export default useAnalytics;
