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
  attractions: Attraction[];
  transportation: Transportation[];
  hotels: Hotel[];
  restaurants: Restaurant[];
}