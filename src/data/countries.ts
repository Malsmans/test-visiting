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
}

export interface Hotel {
  name: string;
  description: string;
  image: string;
  rating: number;
  price: string;
  location: string;
  bookingLink?: string;
}

export interface Restaurant {
  name: string;
  cuisine: string;
  image: string;
  rating: number;
  priceRange: string;
  location: string;
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

export const allCountries: Country[] = [
  {
    name: 'South Africa',
    description: 'Experience the Rainbow Nation with its diverse cultures, stunning landscapes, and world-class wine regions.',
    image: 'https://images.pexels.com/photos/259447/pexels-photo-259447.jpeg',
    region: 'Southern Africa',
    population: '60.4 million',
    attractions: [
      {
        name: 'Table Mountain',
        description: 'Iconic flat-topped mountain overlooking Cape Town with breathtaking panoramic views.',
        image: 'https://images.pexels.com/photos/259447/pexels-photo-259447.jpeg',
        location: 'Cape Town',
        link: 'https://www.tablemountain.net/'
      },
      {
        name: 'Kruger National Park',
        description: 'One of Africa\'s largest game reserves, home to the Big Five and incredible wildlife diversity.',
        image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg',
        location: 'Mpumalanga & Limpopo',
        link: 'https://www.sanparks.org/parks/kruger/'
      },
      {
        name: 'Cape Winelands',
        description: 'World-renowned wine region with stunning vineyards and historic wine estates.',
        image: 'https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg',
        location: 'Western Cape',
        link: 'https://www.wineland.co.za/'
      }
    ],
    transportation: [
      {
        type: 'Rental Car',
        description: 'Best way to explore the country at your own pace with excellent road infrastructure.',
        price: '$25-50/day',
        route: 'Major cities and tourist destinations'
      },
      {
        type: 'Domestic Flights',
        description: 'Quick connections between major cities with several airlines operating.',
        price: '$100-300',
        route: 'Cape Town - Johannesburg - Durban'
      }
    ],
    hotels: [
      {
        name: 'The Silo Hotel',
        description: 'Luxury hotel in a converted grain silo with stunning harbor views.',
        image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg',
        rating: 5,
        price: '$400-800',
        location: 'Cape Town Waterfront',
        bookingLink: 'https://www.booking.com'
      },
      {
        name: 'Singita Kruger National Park',
        description: 'Ultra-luxury safari lodge offering exclusive wildlife experiences.',
        image: 'https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg',
        rating: 5,
        price: '$1500-3000',
        location: 'Kruger National Park',
        bookingLink: 'https://www.singita.com'
      }
    ],
    restaurants: [
      {
        name: 'La Colombe',
        description: 'Award-winning restaurant offering contemporary South African cuisine.',
        image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg',
        rating: 5,
        priceRange: '$50-100',
        location: 'Constantia, Cape Town',
        link: 'https://www.lacolombe.co.za'
      },
      {
        name: 'The Test Kitchen',
        description: 'Internationally acclaimed restaurant with innovative African-inspired dishes.',
        image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
        rating: 5,
        priceRange: '$80-150',
        location: 'Woodstock, Cape Town',
        link: 'https://www.thetestkitchen.co.za'
      }
    ]
  },
  {
    name: 'Kenya',
    description: 'Witness the Great Migration and explore diverse ecosystems from savannas to coastal beaches.',
    image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg',
    region: 'East Africa',
    population: '54.0 million',
    attractions: [
      {
        name: 'Maasai Mara National Reserve',
        description: 'World-famous for the annual Great Migration and exceptional wildlife viewing.',
        image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg',
        location: 'Narok County',
        link: 'https://www.maasaimara.com/'
      },
      {
        name: 'Mount Kenya',
        description: 'Africa\'s second-highest peak offering challenging climbs and stunning alpine scenery.',
        image: 'https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg',
        location: 'Central Kenya',
        link: 'https://www.kws.go.ke/content/mount-kenya-national-park'
      },
      {
        name: 'Diani Beach',
        description: 'Pristine white sand beach with crystal-clear waters and coral reefs.',
        image: 'https://images.pexels.com/photos/1076758/pexels-photo-1076758.jpeg',
        location: 'South Coast',
        link: 'https://www.magicalkenya.com/places-to-visit/coast/diani-beach/'
      }
    ],
    transportation: [
      {
        type: 'Safari Vehicle',
        description: 'Essential for game drives and accessing remote wildlife areas.',
        price: '$150-300/day',
        route: 'National parks and reserves'
      },
      {
        type: 'Matatu',
        description: 'Local shared taxis for authentic Kenyan travel experience.',
        price: '$1-5',
        route: 'Cities and towns nationwide'
      }
    ],
    hotels: [
      {
        name: 'Giraffe Manor',
        description: 'Unique boutique hotel where giraffes visit for breakfast.',
        image: 'https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg',
        rating: 5,
        price: '$800-1500',
        location: 'Nairobi',
        bookingLink: 'https://www.thesafaricollection.com/properties/giraffe-manor/'
      },
      {
        name: 'Angama Mara',
        description: 'Luxury tented camp overlooking the Maasai Mara with spectacular views.',
        image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg',
        rating: 5,
        price: '$1200-2500',
        location: 'Maasai Mara',
        bookingLink: 'https://www.angama.com'
      }
    ],
    restaurants: [
      {
        name: 'Talisman Restaurant',
        description: 'Elegant dining with international cuisine in a beautiful garden setting.',
        image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg',
        rating: 4,
        priceRange: '$25-50',
        location: 'Nairobi',
        link: 'https://www.talismannairobi.com'
      },
      {
        name: 'Ali Barbour\'s Cave Restaurant',
        description: 'Unique dining experience in a natural coral cave by the ocean.',
        image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
        rating: 5,
        priceRange: '$40-80',
        location: 'Diani Beach',
        link: 'https://www.alibarbourscave.com'
      }
    ]
  },
  {
    name: 'Morocco',
    description: 'Discover ancient medinas, stunning architecture, and the gateway between Africa and Europe.',
    image: 'https://images.pexels.com/photos/2901215/pexels-photo-2901215.jpeg',
    region: 'North Africa',
    population: '37.3 million',
    attractions: [
      {
        name: 'Marrakech Medina',
        description: 'UNESCO World Heritage site with bustling souks and historic palaces.',
        image: 'https://images.pexels.com/photos/2901215/pexels-photo-2901215.jpeg',
        location: 'Marrakech',
        link: 'https://whc.unesco.org/en/list/331/'
      },
      {
        name: 'Sahara Desert',
        description: 'Experience camel trekking and overnight camping under the stars.',
        image: 'https://images.pexels.com/photos/1263986/pexels-photo-1263986.jpeg',
        location: 'Merzouga',
        link: 'https://www.visitmorocco.com/en/travel/merzouga'
      },
      {
        name: 'Hassan II Mosque',
        description: 'Magnificent mosque with the world\'s tallest minaret overlooking the Atlantic.',
        image: 'https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg',
        location: 'Casablanca',
        link: 'https://www.fondationhassanii.ma/'
      }
    ],
    transportation: [
      {
        type: 'Train',
        description: 'Modern rail network connecting major cities with comfort and efficiency.',
        price: '$15-40',
        route: 'Casablanca - Rabat - Fez - Marrakech'
      },
      {
        type: 'Grand Taxi',
        description: 'Shared taxis for intercity travel and reaching remote destinations.',
        price: '$5-20',
        route: 'Between cities and rural areas'
      }
    ],
    hotels: [
      {
        name: 'La Mamounia',
        description: 'Legendary palace hotel with opulent gardens and world-class spa.',
        image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg',
        rating: 5,
        price: '$400-1000',
        location: 'Marrakech',
        bookingLink: 'https://www.mamounia.com'
      },
      {
        name: 'Kasbah Tamadot',
        description: 'Richard Branson\'s luxury retreat in the Atlas Mountains.',
        image: 'https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg',
        rating: 5,
        price: '$600-1500',
        location: 'Atlas Mountains',
        bookingLink: 'https://www.virginlimitededition.com/en/kasbah-tamadot'
      }
    ],
    restaurants: [
      {
        name: 'Dar Yacout',
        description: 'Authentic Moroccan cuisine in a stunning traditional riad setting.',
        image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg',
        rating: 5,
        priceRange: '$40-80',
        location: 'Marrakech',
        link: 'https://www.daryacout.ma'
      },
      {
        name: 'Le Foundouk',
        description: 'French-Moroccan fusion cuisine in a beautifully restored caravanserai.',
        image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
        rating: 4,
        priceRange: '$30-60',
        location: 'Marrakech',
        link: 'https://www.lefoundouk.com'
      }
    ]
  },
  {
    name: 'Egypt',
    description: 'Explore ancient pyramids, cruise the Nile, and discover the treasures of pharaohs.',
    image: 'https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg',
    region: 'North Africa',
    population: '104.3 million',
    attractions: [
      {
        name: 'Pyramids of Giza',
        description: 'The last surviving wonder of the ancient world and the iconic Sphinx.',
        image: 'https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg',
        location: 'Giza',
        link: 'https://whc.unesco.org/en/list/86/'
      },
      {
        name: 'Valley of the Kings',
        description: 'Ancient burial ground of pharaohs with elaborately decorated tombs.',
        image: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg',
        location: 'Luxor',
        link: 'https://whc.unesco.org/en/list/87/'
      },
      {
        name: 'Abu Simbel',
        description: 'Magnificent temples carved into rock cliffs by Ramesses II.',
        image: 'https://images.pexels.com/photos/2901215/pexels-photo-2901215.jpeg',
        location: 'Aswan',
        link: 'https://whc.unesco.org/en/list/88/'
      }
    ],
    transportation: [
      {
        type: 'Nile Cruise',
        description: 'Luxury river cruise between Luxor and Aswan with temple visits.',
        price: '$200-500/day',
        route: 'Luxor - Edfu - Kom Ombo - Aswan'
      },
      {
        type: 'Domestic Flights',
        description: 'Quick connections between Cairo, Luxor, and Aswan.',
        price: '$80-200',
        route: 'Cairo - Luxor - Aswan'
      }
    ],
    hotels: [
      {
        name: 'Four Seasons Hotel Cairo',
        description: 'Luxury hotel on the Nile with pyramid views and world-class amenities.',
        image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg',
        rating: 5,
        price: '$300-600',
        location: 'Cairo',
        bookingLink: 'https://www.fourseasons.com/cairo/'
      },
      {
        name: 'Old Winter Palace',
        description: 'Historic luxury hotel where Agatha Christie wrote Death on the Nile.',
        image: 'https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg',
        rating: 5,
        price: '$200-400',
        location: 'Luxor',
        bookingLink: 'https://www.sofitel-winter-palace.com'
      }
    ],
    restaurants: [
      {
        name: 'Sequoia',
        description: 'Upscale Mediterranean restaurant with stunning Nile views.',
        image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg',
        rating: 4,
        priceRange: '$25-50',
        location: 'Cairo',
        link: 'https://www.sequoiaegypt.com'
      },
      {
        name: '1886 Restaurant',
        description: 'Fine dining at the Old Winter Palace with colonial elegance.',
        image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
        rating: 5,
        priceRange: '$40-80',
        location: 'Luxor',
        link: 'https://www.sofitel-winter-palace.com'
      }
    ]
  },
  {
    name: 'Ghana',
    description: 'Experience vibrant culture, historic slave castles, and warm West African hospitality.',
    image: 'https://images.pexels.com/photos/1076758/pexels-photo-1076758.jpeg',
    region: 'West Africa',
    population: '32.8 million',
    attractions: [
      {
        name: 'Cape Coast Castle',
        description: 'Historic fortress and UNESCO site documenting the Atlantic slave trade.',
        image: 'https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg',
        location: 'Cape Coast',
        link: 'https://whc.unesco.org/en/list/34/'
      },
      {
        name: 'Kakum National Park',
        description: 'Tropical rainforest with an exciting canopy walkway experience.',
        image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg',
        location: 'Central Region',
        link: 'https://www.ghana.travel/places-to-go/kakum-national-park/'
      },
      {
        name: 'Kumasi Central Market',
        description: 'One of West Africa\'s largest markets showcasing local crafts and culture.',
        image: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg',
        location: 'Kumasi',
        link: 'https://www.ghana.travel/places-to-go/kumasi/'
      }
    ],
    transportation: [
      {
        type: 'Tro-tro',
        description: 'Local minibus transport for authentic Ghanaian travel experience.',
        price: '$1-3',
        route: 'Cities and towns nationwide'
      },
      {
        type: 'STC Bus',
        description: 'Comfortable intercity bus service connecting major destinations.',
        price: '$5-15',
        route: 'Accra - Kumasi - Tamale'
      }
    ],
    hotels: [
      {
        name: 'Kempinski Hotel Gold Coast City',
        description: 'Luxury beachfront hotel with world-class amenities and spa.',
        image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg',
        rating: 5,
        price: '$200-400',
        location: 'Accra',
        bookingLink: 'https://www.kempinski.com/en/accra/'
      },
      {
        name: 'Villa Monticello',
        description: 'Boutique hotel with panoramic views of the Atlantic Ocean.',
        image: 'https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg',
        rating: 4,
        price: '$150-300',
        location: 'Cape Coast',
        bookingLink: 'https://www.villamonticello.com'
      }
    ],
    restaurants: [
      {
        name: 'Santoku Restaurant',
        description: 'Japanese cuisine with a Ghanaian twist in elegant surroundings.',
        image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg',
        rating: 4,
        priceRange: '$20-40',
        location: 'Accra',
        link: 'https://www.santokurestaurant.com'
      },
      {
        name: 'Buka Restaurant',
        description: 'Authentic Ghanaian cuisine in a traditional setting.',
        image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
        rating: 4,
        priceRange: '$10-25',
        location: 'Accra',
        link: 'https://www.bukarestaurant.com'
      }
    ]
  },
  {
    name: 'Tanzania',
    description: 'Home to Serengeti, Kilimanjaro, and Zanzibar - the ultimate African adventure.',
    image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg',
    region: 'East Africa',
    population: '61.7 million',
    attractions: [
      {
        name: 'Serengeti National Park',
        description: 'Witness the Great Migration and endless plains teeming with wildlife.',
        image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg',
        location: 'Northern Tanzania',
        link: 'https://www.tanzaniaparks.go.tz/national_parks/serengeti'
      },
      {
        name: 'Mount Kilimanjaro',
        description: 'Africa\'s highest peak and the world\'s tallest free-standing mountain.',
        image: 'https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg',
        location: 'Kilimanjaro Region',
        link: 'https://whc.unesco.org/en/list/403/'
      },
      {
        name: 'Stone Town, Zanzibar',
        description: 'Historic Swahili trading town with narrow alleys and spice markets.',
        image: 'https://images.pexels.com/photos/1076758/pexels-photo-1076758.jpeg',
        location: 'Zanzibar',
        link: 'https://whc.unesco.org/en/list/173/'
      }
    ],
    transportation: [
      {
        type: 'Safari Vehicle',
        description: 'Essential 4WD vehicles for game drives in national parks.',
        price: '$200-400/day',
        route: 'Northern Circuit parks'
      },
      {
        type: 'Ferry to Zanzibar',
        description: 'Fast ferry service connecting mainland to Zanzibar Island.',
        price: '$35-50',
        route: 'Dar es Salaam - Stone Town'
      }
    ],
    hotels: [
      {
        name: 'Four Seasons Safari Lodge',
        description: 'Luxury safari lodge overlooking Serengeti watering holes.',
        image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg',
        rating: 5,
        price: '$1500-3000',
        location: 'Serengeti',
        bookingLink: 'https://www.fourseasons.com/serengeti/'
      },
      {
        name: 'Park Hyatt Zanzibar',
        description: 'Beachfront luxury hotel in the heart of Stone Town.',
        image: 'https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg',
        rating: 5,
        price: '$400-800',
        location: 'Stone Town, Zanzibar',
        bookingLink: 'https://www.hyatt.com/en-US/hotel/tanzania/park-hyatt-zanzibar'
      }
    ],
    restaurants: [
      {
        name: 'The Rock Restaurant',
        description: 'Unique seafood restaurant on a rock in the Indian Ocean.',
        image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg',
        rating: 5,
        priceRange: '$30-60',
        location: 'Zanzibar',
        link: 'https://therockrestaurantzanzibar.com'
      },
      {
        name: 'Emerson Spice Tea House',
        description: 'Rooftop restaurant with panoramic views of Stone Town.',
        image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
        rating: 4,
        priceRange: '$25-50',
        location: 'Stone Town, Zanzibar',
        link: 'https://www.emersonzanzibar.com'
      }
    ]
  }
];

export const featuredCountries = allCountries.slice(0, 6);