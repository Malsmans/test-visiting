import { useEffect } from 'react';
import { analyticsService } from '../services/analyticsService';

export const useAnalytics = () => {
  useEffect(() => {
    analyticsService.trackPageView();
  }, []);

  return {
    trackPageView: (path?: string, title?: string) => analyticsService.trackPageView(path, title),
    trackCountryView: (countryName: string) => analyticsService.trackPageView(`/country/${countryName}`, `${countryName} - Discover Africa`),
    trackEvent: (eventName: string, eventData?: any) => console.log('Event tracked:', eventName, eventData),
    trackBooking: (countryName: string, countryCode: string, bookingUrl: string) =>
      analyticsService.trackBooking(countryName, countryCode, bookingUrl),
  };
};

export default analyticsService;
