export interface Attraction {
  name: string;
  description: string;
  image: string;
  location: string;
}

export interface Transportation {
  type: string;
  description: string;
  price: string;
  route: string;
  link?: string;
}

export interface Hotel {
  name: string;
  description: string;
  image: string;
  rating: number;
  price: string;
  location: string;
}

export interface Restaurant {
  name: string;
  cuisine: string;
  image: string;
  rating: number;
  priceRange: string;
  location: string;
}

export interface Country {
  name: string;
  description: string;
  image: string;
  region: string;
  population: string;
  wildlife: Wildlife[];
  culturalInsights: CulturalInsight[];
  activities: string[];
  travelStyle: string[];
  budgetRange: 'budget' | 'mid-range' | 'luxury';
  bestMonths: string[];
  attractions: Attraction[];
  transportation: Transportation[];
  hotels: Hotel[];
  restaurants: Restaurant[];
}

export interface Wildlife {
  name: string;
  description: string;
  image: string;
  bestSpottingTime: string;
  habitat: string;
  conservationStatus: string;
}

export interface CulturalInsight {
  title: string;
  description: string;
  image: string;
  category: 'tradition' | 'music' | 'art' | 'festival' | 'cuisine';
}