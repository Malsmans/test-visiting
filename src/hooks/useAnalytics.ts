import { useEffect } from 'react';

interface AnalyticsEvent {
  event: string;
  page?: string;
  country?: string;
  destination?: string;
  value?: number;
  timestamp: Date;
  userAgent: string;
  userId: string;
  sessionId: string;
  viewport?: { width: number; height: number };
  href?: string;
  ip?: string;
}

class AnalyticsTracker {
  private events: AnalyticsEvent[] = [];
  private sessionId: string;
  private userId: string;

  constructor() {
    this.sessionId = this.generateId();
    this.userId = this.getUserId();
    this.trackPageView();
    this.setupEventListeners();
  }

  private generateId(): string {
    return Math.random().toString(36).substr(2, 9) + Date.now().toString(36);
  }

  private getUserId(): string {
    let userId = localStorage.getItem('wild_africa_user_id');
    if (!userId) {
      userId = this.generateId();
      localStorage.setItem('wild_africa_user_id', userId);
    }
    return userId;
  }

  private setupEventListeners() {
    // Track clicks
    document.addEventListener('click', (event) => {
      const target = event.target as HTMLElement;
      const link = target.closest('a');
      if (link) {
        this.trackEvent('click', {
          element: link.tagName,
          href: link.href,
          text: link.textContent?.slice(0, 100) || '',
          x: event.clientX,
          y: event.clientY
        });
      }
    });

    // Track scroll depth
    let maxScroll = 0;
    window.addEventListener('scroll', () => {
      const scrollPercent = Math.round(
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
      );
      if (scrollPercent > maxScroll) {
        maxScroll = scrollPercent;
        if (maxScroll % 25 === 0) { // Track at 25%, 50%, 75%, 100%
          this.trackEvent('scroll', { depth: maxScroll });
        }
      }
    });

    // Track time on page
    let startTime = Date.now();
    window.addEventListener('beforeunload', () => {
      const timeSpent = Math.round((Date.now() - startTime) / 1000);
      this.trackEvent('time_on_page', { seconds: timeSpent });
    });
  }

  trackPageView(page?: string) {
    this.trackEvent('page_view', {
      page: page || window.location.pathname,
      referrer: document.referrer,
      title: document.title
    });
  }

  trackEvent(eventName: string, data: any = {}) {
    const event: AnalyticsEvent = {
      event: eventName,
      ...data,
      timestamp: new Date(),
      userAgent: navigator.userAgent,
      sessionId: this.sessionId,
      userId: this.userId,
      href: window.location.href,
      url: window.location.href,
      viewport: {
        width: window.innerWidth,
        height: window.innerHeight
      }
    };

    this.events.push(event);
    
    // Send to analytics endpoint (in production)
    this.sendToAnalytics(event);
  }

  trackBooking(destination: string, value: number) {
    this.trackEvent('booking', {
      destination,
      value,
      currency: 'USD'
    });
  }

  trackSearch(query: string, results: number) {
    this.trackEvent('search', {
      query,
      results
    });
  }

  trackCountryView(country: string) {
    this.trackEvent('country_view', {
      country
    });
  }

  private async sendToAnalytics(event: AnalyticsEvent) {
    try {
      // In production, send to your analytics API
      console.log('Analytics Event:', event);
      
      // Store in localStorage for demo purposes
      const stored = JSON.parse(localStorage.getItem('wild_africa_analytics') || '[]');
      stored.push(event);
      
      // Keep only last 1000 events
      if (stored.length > 1000) {
        stored.splice(0, stored.length - 1000);
      }
      
      localStorage.setItem('wild_africa_analytics', JSON.stringify(stored));
    } catch (error) {
      console.error('Analytics tracking error:', error);
    }
  }

  getStoredEvents(): AnalyticsEvent[] {
    try {
      return JSON.parse(localStorage.getItem('wild_africa_analytics') || '[]');
    } catch {
      return [];
    }
  }
}

// Global analytics instance
const analytics = new AnalyticsTracker();

export const useAnalytics = () => {
  useEffect(() => {
    // Track page view on component mount
    analytics.trackPageView();
  }, []);

  return {
    trackEvent: analytics.trackEvent.bind(analytics),
    trackBooking: analytics.trackBooking.bind(analytics),
    trackSearch: analytics.trackSearch.bind(analytics),
    trackCountryView: analytics.trackCountryView.bind(analytics),
    getStoredEvents: analytics.getStoredEvents.bind(analytics)
  };
};

export default analytics;