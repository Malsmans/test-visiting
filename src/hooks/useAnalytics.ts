import { useEffect } from 'react';
import { trackPageView, trackCountryView, updateCountryDuration, trackBooking } from '../services/analyticsService';

export const useAnalytics = () => {
  useEffect(() => {
    // Track page view on mount - non-blocking - TEMPORARILY DISABLED
    // setTimeout(() => {
    //   trackPageView(window.location.pathname, document.title).catch(err => {
    //     console.error('Analytics error:', err);
    //   });
    // }, 0);
  }, []);

  return {
    trackPageView: (path: string, title: string) => {
      setTimeout(() => {
        trackPageView(path, title).catch(err => console.error('Analytics error:', err));
      }, 0);
    },
    trackCountryView: (country: string) => {
      setTimeout(() => {
        trackCountryView(country).catch(err => console.error('Analytics error:', err));
      }, 0);
    },
    updateCountryDuration: (country: string) => {
      setTimeout(() => {
        updateCountryDuration(country).catch(err => console.error('Analytics error:', err));
      }, 0);
    },
    trackBooking: (country: string, transportType: string, url: string) => {
      setTimeout(() => {
        trackBooking(country, transportType, url).catch(err => console.error('Analytics error:', err));
      }, 0);
    },
    trackEvent: (eventName: string, data?: any) => {
      console.log('Event:', eventName, data);
    }
  };
};

export default useAnalytics;
