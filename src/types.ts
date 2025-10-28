export interface Attraction {
  name: string;
  description: string;
  image: string;
  location: string;
  link?: string;
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
  location: string;
  price: string;
  rating: number;
  bookingLink?: string;
}

export interface Restaurant {
  name: string;
  cuisine: string;
  image: string;
  location: string;
  priceRange: string;
  rating: number;
  link?: string;
}

export interface Country {
  name: string;
  description: string;
  image: string;
  region: string;
  population: string;
  attractions: Attraction[];
  transportation: Transportation[];
  hotels: Hotel[];
  restaurants: Restaurant[];
}
