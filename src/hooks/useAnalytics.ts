import { useEffect } from 'react';
import { analyticsService } from '../services/analyticsService';

export const useAnalytics = () => {
  useEffect(() => {
    analyticsService.trackPageView();
  }, []);

  return {
    trackPageView: (path?: string, title?: string) => analyticsService.trackPageView(path, title),
    trackBooking: (countryName: string, countryCode: string, bookingUrl: string) =>
      analyticsService.trackBooking(countryName, countryCode, bookingUrl),
  };
};

export default analyticsService;
