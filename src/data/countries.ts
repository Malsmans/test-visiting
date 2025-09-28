import { Country } from '../types';

export const featuredCountries: Country[] = [
  {
    name: 'South Africa',
    description: 'Experience the Rainbow Nation with its diverse landscapes, from Cape Town\'s stunning coastline to Kruger National Park\'s Big Five safari adventures.',
    image: 'https://images.pexels.com/photos/259447/pexels-photo-259447.jpeg?auto=compress&cs=tinysrgb&w=800',
    region: 'Southern Africa',
    population: '60.4 million',
    attractions: [
      {
        name: 'Table Mountain',
        description: 'Iconic flat-topped mountain overlooking Cape Town with cable car access and hiking trails.',
        image: 'https://images.pexels.com/photos/259447/pexels-photo-259447.jpeg?auto=compress&cs=tinysrgb&w=600',
        location: 'Cape Town'
      },
      {
        name: 'Kruger National Park',
        description: 'One of Africa\'s largest game reserves, home to the Big Five and incredible wildlife diversity.',
        image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=600',
        location: 'Mpumalanga'
      },
      {
        name: 'Victoria & Alfred Waterfront',
        description: 'Historic harbor area with shopping, dining, and entertainment in Cape Town.',
        image: 'https://images.pexels.com/photos/1076758/pexels-photo-1076758.jpeg?auto=compress&cs=tinysrgb&w=600',
        location: 'Cape Town'
      }
    ],
    transportation: [
      {
        type: 'Domestic Flight',
        description: 'Quick connections between major cities like Cape Town, Johannesburg, and Durban.',
        price: '$100-300',
        route: 'Major cities'
      },
      {
        type: 'Car Rental',
        description: 'Self-drive options with excellent road infrastructure for exploring at your own pace.',
        price: '$30-80/day',
        route: 'Nationwide'
      }
    ],
    hotels: [
      {
        name: 'The Silo Hotel',
        description: 'Luxury hotel in a converted grain silo with stunning harbor views.',
        image: 'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=600',
        rating: 5,
        price: '$400-800',
        location: 'Cape Town Waterfront'
      },
      {
        name: 'Singita Kruger National Park',
        description: 'Ultra-luxury safari lodge offering exclusive game viewing experiences.',
        image: 'https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg?auto=compress&cs=tinysrgb&w=600',
        rating: 5,
        price: '$1200-2500',
        location: 'Kruger National Park'
      }
    ],
    restaurants: [
      {
        name: 'La Colombe',
        cuisine: 'Contemporary South African cuisine with international influences',
        image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=600',
        rating: 5,
        priceRange: '$$$',
        location: 'Constantia, Cape Town'
      },
      {
        name: 'The Test Kitchen',
        cuisine: 'Modern cuisine with African and Asian influences',
        image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=600',
        rating: 5,
        priceRange: '$$$$',
        location: 'Woodstock, Cape Town'
      }
    ]
  },
  {
    name: 'Kenya',
    description: 'Witness the Great Migration in the Maasai Mara, explore diverse ecosystems from savannas to coastal beaches, and experience rich Maasai culture.',
    image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=800',
    region: 'East Africa',
    population: '54.0 million',
    attractions: [
      {
        name: 'Maasai Mara National Reserve',
        description: 'World-famous for the Great Migration and exceptional wildlife viewing opportunities.',
        image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=600',
        location: 'Narok County'
      },
      {
        name: 'Amboseli National Park',
        description: 'Best place to view elephants with Mount Kilimanjaro as a stunning backdrop.',
        image: 'https://images.pexels.com/photos/1076758/pexels-photo-1076758.jpeg?auto=compress&cs=tinysrgb&w=600',
        location: 'Kajiado County'
      },
      {
        name: 'Diani Beach',
        description: 'Pristine white sand beach with coral reefs perfect for diving and snorkeling.',
        image: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=600',
        location: 'Kwale County'
      }
    ],
    transportation: [
      {
        type: 'Safari Vehicle',
        description: 'Purpose-built 4WD vehicles for game drives with pop-up roofs for photography.',
        price: '$150-300/day',
        route: 'National parks and reserves'
      },
      {
        type: 'Domestic Flight',
        description: 'Small aircraft connecting Nairobi to safari destinations and coastal areas.',
        price: '$200-500',
        route: 'Nairobi to Mara/Amboseli/Coast'
      }
    ],
    hotels: [
      {
        name: 'Angama Mara',
        description: 'Luxury tented camp perched on the rim of the Great Rift Valley.',
        image: 'https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg?auto=compress&cs=tinysrgb&w=600',
        rating: 5,
        price: '$800-1500',
        location: 'Maasai Mara'
      },
      {
        name: 'Giraffe Manor',
        description: 'Boutique hotel famous for giraffes that visit during breakfast.',
        image: 'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=600',
        rating: 5,
        price: '$600-1200',
        location: 'Nairobi'
      }
    ],
    restaurants: [
      {
        name: 'Talisman Restaurant',
        cuisine: 'International cuisine with local Kenyan influences',
        image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=600',
        rating: 4,
        priceRange: '$$$',
        location: 'Karen, Nairobi'
      },
      {
        name: 'Carnivore Restaurant',
        cuisine: 'Famous for exotic meat dishes and traditional Kenyan cuisine',
        image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=600',
        rating: 4,
        priceRange: '$$',
        location: 'Langata, Nairobi'
      }
    ]
  },
  {
    name: 'Tanzania',
    description: 'Home to the Serengeti\'s Great Migration, Mount Kilimanjaro, and the pristine beaches of Zanzibar offering unparalleled wildlife and cultural experiences.',
    image: 'https://images.pexels.com/photos/1076758/pexels-photo-1076758.jpeg?auto=compress&cs=tinysrgb&w=800',
    region: 'East Africa',
    population: '61.7 million',
    attractions: [
      {
        name: 'Serengeti National Park',
        description: 'Endless plains hosting the world\'s most spectacular wildlife migration.',
        image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=600',
        location: 'Northern Tanzania'
      },
      {
        name: 'Mount Kilimanjaro',
        description: 'Africa\'s highest peak and the world\'s tallest free-standing mountain.',
        image: 'https://images.pexels.com/photos/1076758/pexels-photo-1076758.jpeg?auto=compress&cs=tinysrgb&w=600',
        location: 'Kilimanjaro Region'
      },
      {
        name: 'Stone Town, Zanzibar',
        description: 'Historic UNESCO World Heritage site with rich Swahili culture and architecture.',
        image: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=600',
        location: 'Zanzibar'
      }
    ],
    transportation: [
      {
        type: 'Safari Vehicle',
        description: 'Specialized 4WD vehicles for game drives in national parks.',
        price: '$200-400/day',
        route: 'Northern Circuit parks'
      },
      {
        type: 'Ferry to Zanzibar',
        description: 'Fast ferry service connecting Dar es Salaam to Zanzibar.',
        price: '$35-70',
        route: 'Dar es Salaam - Zanzibar'
      }
    ],
    hotels: [
      {
        name: 'Four Seasons Safari Lodge',
        description: 'Luxury lodge overlooking a watering hole in the Serengeti.',
        image: 'https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg?auto=compress&cs=tinysrgb&w=600',
        rating: 5,
        price: '$1000-2000',
        location: 'Serengeti'
      },
      {
        name: 'The Residence Zanzibar',
        description: 'Beachfront resort with pristine white sand beaches and luxury amenities.',
        image: 'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=600',
        rating: 5,
        price: '$400-800',
        location: 'Zanzibar'
      }
    ],
    restaurants: [
      {
        name: 'The Rock Restaurant',
        cuisine: 'Seafood restaurant on a rock formation in the Indian Ocean',
        image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=600',
        rating: 5,
        priceRange: '$$$',
        location: 'Zanzibar'
      },
      {
        name: 'Emerson Spice',
        cuisine: 'Rooftop restaurant serving Zanzibari and international cuisine',
        image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=600',
        rating: 4,
        priceRange: '$$',
        location: 'Stone Town, Zanzibar'
      }
    ]
  },
  {
    name: 'Morocco',
    description: 'Journey through imperial cities, explore the Sahara Desert, and experience the vibrant souks and rich Berber culture of North Africa.',
    image: 'https://images.pexels.com/photos/2901215/pexels-photo-2901215.jpeg?auto=compress&cs=tinysrgb&w=800',
    region: 'North Africa',
    population: '37.3 million',
    attractions: [
      {
        name: 'Marrakech Medina',
        description: 'Historic walled city with bustling souks, palaces, and the famous Jemaa el-Fnaa square.',
        image: 'https://images.pexels.com/photos/2901215/pexels-photo-2901215.jpeg?auto=compress&cs=tinysrgb&w=600',
        location: 'Marrakech'
      },
      {
        name: 'Sahara Desert',
        description: 'Experience camel trekking and overnight camping under the stars in the world\'s largest hot desert.',
        image: 'https://images.pexels.com/photos/1263986/pexels-photo-1263986.jpeg?auto=compress&cs=tinysrgb&w=600',
        location: 'Merzouga'
      },
      {
        name: 'Hassan II Mosque',
        description: 'Magnificent mosque with the world\'s tallest minaret, partially built over the Atlantic Ocean.',
        image: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=600',
        location: 'Casablanca'
      }
    ],
    transportation: [
      {
        type: 'Train',
        description: 'Modern rail network connecting major cities with comfortable service.',
        price: '$15-50',
        route: 'Casablanca-Rabat-Fez-Marrakech'
      },
      {
        type: 'Grand Taxi',
        description: 'Shared taxis for intercity travel and reaching remote destinations.',
        price: '$20-100',
        route: 'Various routes'
      }
    ],
    hotels: [
      {
        name: 'La Mamounia',
        description: 'Legendary palace hotel in Marrakech with opulent gardens and world-class service.',
        image: 'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=600',
        rating: 5,
        price: '$300-800',
        location: 'Marrakech'
      },
      {
        name: 'Kasbah Tamadot',
        description: 'Richard Branson\'s luxury retreat in the Atlas Mountains with stunning views.',
        image: 'https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg?auto=compress&cs=tinysrgb&w=600',
        rating: 5,
        price: '$500-1200',
        location: 'Atlas Mountains'
      }
    ],
    restaurants: [
      {
        name: 'Dar Yacout',
        cuisine: 'Traditional Moroccan cuisine in an elegant riad setting',
        image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=600',
        rating: 5,
        priceRange: '$$$',
        location: 'Marrakech'
      },
      {
        name: 'Al Fassia',
        cuisine: 'Authentic Moroccan dishes prepared by women chefs',
        image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=600',
        rating: 4,
        priceRange: '$$',
        location: 'Marrakech'
      }
    ]
  },
  {
    name: 'Egypt',
    description: 'Discover ancient wonders including the Pyramids of Giza, cruise the Nile River, and explore the treasures of pharaohs in this cradle of civilization.',
    image: 'https://images.pexels.com/photos/1263986/pexels-photo-1263986.jpeg?auto=compress&cs=tinysrgb&w=800',
    region: 'North Africa',
    population: '104.3 million',
    attractions: [
      {
        name: 'Pyramids of Giza',
        description: 'The last surviving wonder of the ancient world, including the Great Pyramid and Sphinx.',
        image: 'https://images.pexels.com/photos/1263986/pexels-photo-1263986.jpeg?auto=compress&cs=tinysrgb&w=600',
        location: 'Giza'
      },
      {
        name: 'Valley of the Kings',
        description: 'Ancient burial ground of pharaohs with elaborately decorated tombs.',
        image: 'https://images.pexels.com/photos/2901215/pexels-photo-2901215.jpeg?auto=compress&cs=tinysrgb&w=600',
        location: 'Luxor'
      },
      {
        name: 'Abu Simbel',
        description: 'Magnificent temples carved into rock cliffs, relocated to save them from flooding.',
        image: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=600',
        location: 'Aswan'
      }
    ],
    transportation: [
      {
        type: 'Nile Cruise',
        description: 'Luxury river cruises between Luxor and Aswan with temple visits.',
        price: '$200-800/day',
        route: 'Luxor - Aswan'
      },
      {
        type: 'Domestic Flight',
        description: 'Quick flights between Cairo, Luxor, and Aswan.',
        price: '$80-200',
        route: 'Major cities'
      }
    ],
    hotels: [
      {
        name: 'Four Seasons Hotel Cairo',
        description: 'Luxury hotel on the Nile with views of the pyramids.',
        image: 'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=600',
        rating: 5,
        price: '$200-500',
        location: 'Cairo'
      },
      {
        name: 'Old Winter Palace',
        description: 'Historic luxury hotel on the Nile in Luxor.',
        image: 'https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg?auto=compress&cs=tinysrgb&w=600',
        rating: 5,
        price: '$150-400',
        location: 'Luxor'
      }
    ],
    restaurants: [
      {
        name: 'Sequoia',
        cuisine: 'Mediterranean cuisine with Nile views',
        image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=600',
        rating: 4,
        priceRange: '$$$',
        location: 'Cairo'
      },
      {
        name: 'Abou El Sid',
        cuisine: 'Traditional Egyptian cuisine in an authentic setting',
        image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=600',
        rating: 4,
        priceRange: '$$',
        location: 'Cairo'
      }
    ]
  },
  {
    name: 'Ghana',
    description: 'Explore the Gold Coast\'s rich history, vibrant culture, and beautiful beaches while learning about the legacy of the trans-Atlantic slave trade.',
    image: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=800',
    region: 'West Africa',
    population: '32.8 million',
    attractions: [
      {
        name: 'Cape Coast Castle',
        description: 'Historic fortress and UNESCO World Heritage site with important slave trade history.',
        image: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=600',
        location: 'Cape Coast'
      },
      {
        name: 'Kakum National Park',
        description: 'Tropical rainforest with canopy walkway offering unique wildlife viewing.',
        image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=600',
        location: 'Central Region'
      },
      {
        name: 'Elmina Castle',
        description: 'First European building constructed in sub-Saharan Africa, now a museum.',
        image: 'https://images.pexels.com/photos/2901215/pexels-photo-2901215.jpeg?auto=compress&cs=tinysrgb&w=600',
        location: 'Elmina'
      }
    ],
    transportation: [
      {
        type: 'Tro-tro',
        description: 'Local minibus transport connecting cities and towns.',
        price: '$2-10',
        route: 'Nationwide'
      },
      {
        type: 'Car Rental',
        description: 'Self-drive options for exploring at your own pace.',
        price: '$40-80/day',
        route: 'Major routes'
      }
    ],
    hotels: [
      {
        name: 'Kempinski Hotel Gold Coast City',
        description: 'Luxury beachfront hotel in Accra with modern amenities.',
        image: 'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=600',
        rating: 5,
        price: '$200-400',
        location: 'Accra'
      },
      {
        name: 'Coconut Grove Beach Resort',
        description: 'Beachfront resort with traditional Ghanaian hospitality.',
        image: 'https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg?auto=compress&cs=tinysrgb&w=600',
        rating: 4,
        price: '$100-250',
        location: 'Cape Coast'
      }
    ],
    restaurants: [
      {
        name: 'Buka Restaurant',
        cuisine: 'Authentic Ghanaian cuisine with modern presentation',
        image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=600',
        rating: 4,
        priceRange: '$$',
        location: 'Accra'
      },
      {
        name: 'Santoku Restaurant',
        cuisine: 'Japanese cuisine with local influences',
        image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=600',
        rating: 4,
        priceRange: '$$$',
        location: 'Accra'
      }
    ]
  },
  {
    name: 'Uganda',
    description: 'The Pearl of Africa offers mountain gorilla encounters, the source of the Nile, diverse wildlife, and warm hospitality in the heart of East Africa.',
    image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=800',
    region: 'East Africa',
    population: '47.1 million',
    attractions: [
      {
        name: 'Bwindi Impenetrable Forest',
        description: 'Home to half of the world\'s mountain gorillas, offering unforgettable gorilla trekking.',
        image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=600',
        location: 'Southwestern Uganda'
      },
      {
        name: 'Murchison Falls',
        description: 'Spectacular waterfall where the Nile forces through a narrow gorge.',
        image: 'https://images.pexels.com/photos/1076758/pexels-photo-1076758.jpeg?auto=compress&cs=tinysrgb&w=600',
        location: 'Northern Uganda'
      },
      {
        name: 'Queen Elizabeth National Park',
        description: 'Diverse ecosystems with tree-climbing lions and boat safaris on Kazinga Channel.',
        image: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=600',
        location: 'Western Uganda'
      }
    ],
    transportation: [
      {
        type: 'Safari Vehicle',
        description: '4WD vehicles for game drives and gorilla trekking expeditions.',
        price: '$100-200/day',
        route: 'National parks'
      },
      {
        type: 'Domestic Flight',
        description: 'Charter flights to remote parks and airstrips.',
        price: '$300-600',
        route: 'Entebbe to parks'
      }
    ],
    hotels: [
      {
        name: 'Sanctuary Gorilla Forest Camp',
        description: 'Luxury tented camp near Bwindi for gorilla trekking.',
        image: 'https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg?auto=compress&cs=tinysrgb&w=600',
        rating: 5,
        price: '$800-1500',
        location: 'Bwindi'
      },
      {
        name: 'Chobe Safari Lodge',
        description: 'Luxury lodge overlooking the Nile in Murchison Falls.',
        image: 'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=600',
        rating: 4,
        price: '$300-600',
        location: 'Murchison Falls'
      }
    ],
    restaurants: [
      {
        name: 'Khana Khazana',
        cuisine: 'Indian cuisine with Ugandan influences',
        image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=600',
        rating: 4,
        priceRange: '$$',
        location: 'Kampala'
      },
      {
        name: 'The Lawns Restaurant',
        cuisine: 'International cuisine with garden setting',
        image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=600',
        rating: 4,
        priceRange: '$$$',
        location: 'Kampala'
      }
    ]
  },
  {
    name: 'Rwanda',
    description: 'The Land of a Thousand Hills offers mountain gorilla encounters, stunning landscapes, and a remarkable story of recovery and progress.',
    image: 'https://images.pexels.com/photos/1076758/pexels-photo-1076758.jpeg?auto=compress&cs=tinysrgb&w=800',
    region: 'East Africa',
    population: '13.3 million',
    attractions: [
      {
        name: 'Volcanoes National Park',
        description: 'Home to mountain gorillas and golden monkeys in the Virunga Mountains.',
        image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=600',
        location: 'Northern Rwanda'
      },
      {
        name: 'Lake Kivu',
        description: 'One of Africa\'s Great Lakes with beautiful beaches and water activities.',
        image: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=600',
        location: 'Western Rwanda'
      },
      {
        name: 'Nyungwe Forest',
        description: 'Ancient rainforest with chimpanzees and canopy walkway.',
        image: 'https://images.pexels.com/photos/1076758/pexels-photo-1076758.jpeg?auto=compress&cs=tinysrgb&w=600',
        location: 'Southern Rwanda'
      }
    ],
    transportation: [
      {
        type: 'Car Rental',
        description: 'Well-maintained roads make self-driving a viable option.',
        price: '$50-100/day',
        route: 'Nationwide'
      },
      {
        type: 'Motorcycle Taxi',
        description: 'Quick and affordable transport within cities.',
        price: '$2-5',
        route: 'Urban areas'
      }
    ],
    hotels: [
      {
        name: 'Bisate Lodge',
        description: 'Luxury eco-lodge with views of the Virunga volcanoes.',
        image: 'https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg?auto=compress&cs=tinysrgb&w=600',
        rating: 5,
        price: '$1200-2000',
        location: 'Volcanoes National Park'
      },
      {
        name: 'Lake Kivu Serena Hotel',
        description: 'Lakefront hotel with stunning views and water activities.',
        image: 'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=600',
        rating: 4,
        price: '$200-400',
        location: 'Gisenyi'
      }
    ],
    restaurants: [
      {
        name: 'Heaven Restaurant',
        cuisine: 'International cuisine with panoramic city views',
        image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=600',
        rating: 4,
        priceRange: '$$$',
        location: 'Kigali'
      },
      {
        name: 'Repub Lounge',
        cuisine: 'Modern Rwandan cuisine with international influences',
        image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=600',
        rating: 4,
        priceRange: '$$',
        location: 'Kigali'
      }
    ]
  },
  {
    name: 'Ethiopia',
    description: 'Discover the birthplace of coffee, ancient rock churches of Lalibela, unique wildlife, and diverse cultures in the Horn of Africa.',
    image: 'https://images.pexels.com/photos/2901215/pexels-photo-2901215.jpeg?auto=compress&cs=tinysrgb&w=800',
    region: 'East Africa',
    population: '117.9 million',
    attractions: [
      {
        name: 'Lalibela Rock Churches',
        description: 'Magnificent 12th-century churches carved directly into rock, UNESCO World Heritage site.',
        image: 'https://images.pexels.com/photos/2901215/pexels-photo-2901215.jpeg?auto=compress&cs=tinysrgb&w=600',
        location: 'Lalibela'
      },
      {
        name: 'Simien Mountains',
        description: 'Dramatic mountain landscapes with endemic wildlife including gelada monkeys.',
        image: 'https://images.pexels.com/photos/1076758/pexels-photo-1076758.jpeg?auto=compress&cs=tinysrgb&w=600',
        location: 'Northern Ethiopia'
      },
      {
        name: 'Danakil Depression',
        description: 'One of the hottest and lowest places on Earth with colorful salt formations.',
        image: 'https://images.pexels.com/photos/1263986/pexels-photo-1263986.jpeg?auto=compress&cs=tinysrgb&w=600',
        location: 'Northeastern Ethiopia'
      }
    ],
    transportation: [
      {
        type: 'Domestic Flight',
        description: 'Ethiopian Airlines connects major destinations within the country.',
        price: '$100-300',
        route: 'Major cities'
      },
      {
        type: '4WD Vehicle',
        description: 'Essential for reaching remote areas and national parks.',
        price: '$80-150/day',
        route: 'Remote destinations'
      }
    ],
    hotels: [
      {
        name: 'Sheraton Addis',
        description: 'Luxury hotel in the capital with excellent facilities.',
        image: 'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=600',
        rating: 5,
        price: '$150-300',
        location: 'Addis Ababa'
      },
      {
        name: 'Mountain View Hotel',
        description: 'Historic hotel with views of the Simien Mountains.',
        image: 'https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg?auto=compress&cs=tinysrgb&w=600',
        rating: 3,
        price: '$50-100',
        location: 'Lalibela'
      }
    ],
    restaurants: [
      {
        name: 'Yod Abyssinia',
        cuisine: 'Traditional Ethiopian cuisine with cultural performances',
        image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=600',
        rating: 4,
        priceRange: '$$',
        location: 'Addis Ababa'
      },
      {
        name: 'Castelli Restaurant',
        cuisine: 'Italian cuisine with Ethiopian influences',
        image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=600',
        rating: 4,
        priceRange: '$$$',
        location: 'Addis Ababa'
      }
    ]
  },
  {
    name: 'Botswana',
    description: 'Experience pristine wilderness in the Okavango Delta, encounter diverse wildlife in Chobe, and discover the vast Kalahari Desert.',
    image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=800',
    region: 'Southern Africa',
    population: '2.4 million',
    attractions: [
      {
        name: 'Okavango Delta',
        description: 'World\'s largest inland delta with exceptional wildlife and mokoro (dugout canoe) safaris.',
        image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=600',
        location: 'Northern Botswana'
      },
      {
        name: 'Chobe National Park',
        description: 'Famous for large elephant herds and diverse wildlife along the Chobe River.',
        image: 'https://images.pexels.com/photos/1076758/pexels-photo-1076758.jpeg?auto=compress&cs=tinysrgb&w=600',
        location: 'Northern Botswana'
      },
      {
        name: 'Central Kalahari Game Reserve',
        description: 'Vast desert reserve with unique desert-adapted wildlife and San Bushmen culture.',
        image: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=600',
        location: 'Central Botswana'
      }
    ],
    transportation: [
      {
        type: 'Light Aircraft',
        description: 'Small planes connecting remote safari camps and lodges.',
        price: '$300-800',
        route: 'Safari destinations'
      },
      {
        type: 'Safari Vehicle',
        description: 'Specialized 4WD vehicles for game drives and mokoro transfers.',
        price: '$200-400/day',
        route: 'National parks'
      }
    ],
    hotels: [
      {
        name: 'Belmond Eagle Island Lodge',
        description: 'Luxury tented camp in the heart of the Okavango Delta.',
        image: 'https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg?auto=compress&cs=tinysrgb&w=600',
        rating: 5,
        price: '$1000-2000',
        location: 'Okavango Delta'
      },
      {
        name: 'Chobe Game Lodge',
        description: 'Luxury lodge on the banks of the Chobe River.',
        image: 'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=600',
        rating: 5,
        price: '$800-1500',
        location: 'Chobe National Park'
      }
    ],
    restaurants: [
      {
        name: 'The Thorn Tree Cafe',
        cuisine: 'International cuisine with African influences',
        image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=600',
        rating: 4,
        priceRange: '$$',
        location: 'Gaborone'
      },
      {
        name: 'Bull & Bush Pub',
        cuisine: 'Pub food with local game meat specialties',
        image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=600',
        rating: 4,
        priceRange: '$$',
        location: 'Gaborone'
      }
    ]
  },
  {
    name: 'Namibia',
    description: 'Explore the world\'s oldest desert, dramatic landscapes of Sossusvlei, diverse wildlife, and the haunting beauty of the Skeleton Coast.',
    image: 'https://images.pexels.com/photos/1263986/pexels-photo-1263986.jpeg?auto=compress&cs=tinysrgb&w=800',
    region: 'Southern Africa',
    population: '2.5 million',
    attractions: [
      {
        name: 'Sossusvlei',
        description: 'Iconic red sand dunes and white clay pan in the Namib Desert.',
        image: 'https://images.pexels.com/photos/1263986/pexels-photo-1263986.jpeg?auto=compress&cs=tinysrgb&w=600',
        location: 'Namib-Naukluft National Park'
      },
      {
        name: 'Etosha National Park',
        description: 'Premier wildlife destination with excellent game viewing around waterholes.',
        image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=600',
        location: 'Northern Namibia'
      },
      {
        name: 'Skeleton Coast',
        description: 'Dramatic coastline with shipwrecks, seal colonies, and desert-adapted wildlife.',
        image: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=600',
        location: 'Northwestern Namibia'
      }
    ],
    transportation: [
      {
        type: 'Self-Drive',
        description: 'Popular option with well-maintained roads and clear signage.',
        price: '$40-80/day',
        route: 'Nationwide'
      },
      {
        type: 'Light Aircraft',
        description: 'Scenic flights and transfers to remote lodges.',
        price: '$400-1000',
        route: 'Remote destinations'
      }
    ],
    hotels: [
      {
        name: 'Sossusvlei Desert Lodge',
        description: 'Luxury desert lodge with stunning views of the Namib Desert.',
        image: 'https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg?auto=compress&cs=tinysrgb&w=600',
        rating: 5,
        price: '$600-1200',
        location: 'Sossusvlei'
      },
      {
        name: 'Ongava Lodge',
        description: 'Luxury lodge overlooking Etosha National Park.',
        image: 'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=600',
        rating: 5,
        price: '$800-1500',
        location: 'Etosha'
      }
    ],
    restaurants: [
      {
        name: 'Joe\'s Beerhouse',
        cuisine: 'Namibian cuisine with game meat specialties',
        image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=600',
        rating: 4,
        priceRange: '$$',
        location: 'Windhoek'
      },
      {
        name: 'The Stellenbosch Wine Bar',
        cuisine: 'South African wines with light meals',
        image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=600',
        rating: 4,
        priceRange: '$$$',
        location: 'Windhoek'
      }
    ]
  },
  {
    name: 'Zimbabwe',
    description: 'Witness the mighty Victoria Falls, explore ancient ruins of Great Zimbabwe, and experience exceptional wildlife in Hwange National Park.',
    image: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=800',
    region: 'Southern Africa',
    population: '15.1 million',
    attractions: [
      {
        name: 'Victoria Falls',
        description: 'One of the world\'s largest waterfalls, known locally as "The Smoke that Thunders".',
        image: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=600',
        location: 'Victoria Falls'
      },
      {
        name: 'Hwange National Park',
        description: 'Zimbabwe\'s largest national park with diverse wildlife and large elephant herds.',
        image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=600',
        location: 'Western Zimbabwe'
      },
      {
        name: 'Great Zimbabwe',
        description: 'Ancient stone city ruins, UNESCO World Heritage site and symbol of African civilization.',
        image: 'https://images.pexels.com/photos/2901215/pexels-photo-2901215.jpeg?auto=compress&cs=tinysrgb&w=600',
        location: 'Masvingo'
      }
    ],
    transportation: [
      {
        type: 'Safari Vehicle',
        description: 'Essential for game drives and accessing remote areas.',
        price: '$100-250/day',
        route: 'National parks'
      },
      {
        type: 'Domestic Flight',
        description: 'Connections between major tourist destinations.',
        price: '$200-500',
        route: 'Harare-Victoria Falls-Hwange'
      }
    ],
    hotels: [
      {
        name: 'Victoria Falls Hotel',
        description: 'Historic luxury hotel with views of the Victoria Falls Bridge.',
        image: 'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=600',
        rating: 5,
        price: '$300-600',
        location: 'Victoria Falls'
      },
      {
        name: 'Hwange Safari Lodge',
        description: 'Safari lodge overlooking waterholes in Hwange National Park.',
        image: 'https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg?auto=compress&cs=tinysrgb&w=600',
        rating: 4,
        price: '$400-800',
        location: 'Hwange'
      }
    ],
    restaurants: [
      {
        name: 'The Boma',
        cuisine: 'Traditional African cuisine with cultural entertainment',
        image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=600',
        rating: 4,
        priceRange: '$$$',
        location: 'Victoria Falls'
      },
      {
        name: 'Lookout Cafe',
        cuisine: 'International cuisine with views of the Zambezi River',
        image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=600',
        rating: 4,
        priceRange: '$$',
        location: 'Victoria Falls'
      }
    ]
  },
  {
    name: 'Zambia',
    description: 'Experience the thundering Victoria Falls from the Zambian side, enjoy world-class walking safaris, and explore the pristine South Luangwa.',
    image: 'https://images.pexels.com/photos/1076758/pexels-photo-1076758.jpeg?auto=compress&cs=tinysrgb&w=800',
    region: 'Southern Africa',
    population: '18.4 million',
    attractions: [
      {
        name: 'South Luangwa National Park',
        description: 'Premier walking safari destination with exceptional wildlife and night drives.',
        image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=600',
        location: 'Eastern Zambia'
      },
      {
        name: 'Victoria Falls (Zambian Side)',
        description: 'Experience the falls from the Zambian perspective with fewer crowds.',
        image: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=600',
        location: 'Livingstone'
      },
      {
        name: 'Lower Zambezi National Park',
        description: 'Pristine wilderness with excellent canoeing and fishing opportunities.',
        image: 'https://images.pexels.com/photos/1076758/pexels-photo-1076758.jpeg?auto=compress&cs=tinysrgb&w=600',
        location: 'Southern Zambia'
      }
    ],
    transportation: [
      {
        type: 'Light Aircraft',
        description: 'Essential for reaching remote safari camps and lodges.',
        price: '$300-700',
        route: 'Safari destinations'
      },
      {
        type: 'Safari Vehicle',
        description: 'Game drives and transfers within national parks.',
        price: '$150-300/day',
        route: 'National parks'
      }
    ],
    hotels: [
      {
        name: 'Royal Livingstone Hotel',
        description: 'Luxury hotel on the banks of the Zambezi River near Victoria Falls.',
        image: 'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=600',
        rating: 5,
        price: '$400-800',
        location: 'Livingstone'
      },
      {
        name: 'Mfuwe Lodge',
        description: 'Famous lodge where elephants walk through the lobby during mango season.',
        image: 'https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg?auto=compress&cs=tinysrgb&w=600',
        rating: 4,
        price: '$600-1200',
        location: 'South Luangwa'
      }
    ],
    restaurants: [
      {
        name: 'The River Club',
        cuisine: 'International cuisine with river views',
        image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=600',
        rating: 4,
        priceRange: '$$$',
        location: 'Livingstone'
      },
      {
        name: 'Olga\'s Italian Corner',
        cuisine: 'Authentic Italian cuisine in the heart of Africa',
        image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=600',
        rating: 4,
        priceRange: '$$',
        location: 'Livingstone'
      }
    ]
  },
  {
    name: 'Malawi',
    description: 'Discover the warm heart of Africa with pristine Lake Malawi, friendly people, diverse wildlife, and excellent freshwater diving.',
    image: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=800',
    region: 'Southern Africa',
    population: '19.6 million',
    attractions: [
      {
        name: 'Lake Malawi',
        description: 'Crystal clear freshwater lake with colorful cichlid fish and pristine beaches.',
        image: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=600',
        location: 'Eastern Malawi'
      },
      {
        name: 'Liwonde National Park',
        description: 'Excellent wildlife viewing along the Shire River with elephants and hippos.',
        image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=600',
        location: 'Southern Malawi'
      },
      {
        name: 'Mount Mulanje',
        description: 'Dramatic granite peaks offering excellent hiking and rock climbing.',
        image: 'https://images.pexels.com/photos/1076758/pexels-photo-1076758.jpeg?auto=compress&cs=tinysrgb&w=600',
        location: 'Southern Malawi'
      }
    ],
    transportation: [
      {
        type: 'Minibus',
        description: 'Local transport connecting towns and cities.',
        price: '$5-20',
        route: 'Major routes'
      },
      {
        type: 'Lake Ferry',
        description: 'Ferry service along Lake Malawi connecting lakeside towns.',
        price: '$10-30',
        route: 'Lake Malawi'
      }
    ],
    hotels: [
      {
        name: 'Pumulani Lodge',
        description: 'Luxury lodge on the shores of Lake Malawi with water activities.',
        image: 'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=600',
        rating: 5,
        price: '$400-800',
        location: 'Lake Malawi'
      },
      {
        name: 'Mvuu Lodge',
        description: 'Safari lodge in Liwonde National Park with river activities.',
        image: 'https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg?auto=compress&cs=tinysrgb&w=600',
        rating: 4,
        price: '$300-600',
        location: 'Liwonde'
      }
    ],
    restaurants: [
      {
        name: 'Mamma Mia Italian Restaurant',
        cuisine: 'Italian cuisine with lake fish specialties',
        image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=600',
        rating: 4,
        priceRange: '$$',
        location: 'Lilongwe'
      },
      {
        name: 'The Chameleon',
        cuisine: 'International cuisine with local influences',
        image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=600',
        rating: 4,
        priceRange: '$$',
        location: 'Lilongwe'
      }
    ]
  },
  {
    name: 'Mozambique',
    description: 'Explore pristine Indian Ocean coastline, vibrant coral reefs, Portuguese colonial architecture, and rich cultural heritage.',
    image: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=800',
    region: 'Southern Africa',
    population: '32.2 million',
    attractions: [
      {
        name: 'Bazaruto Archipelago',
        description: 'Pristine islands with white sand beaches, coral reefs, and marine life.',
        image: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=600',
        location: 'Inhambane Province'
      },
      {
        name: 'Maputo',
        description: 'Vibrant capital city with Portuguese colonial architecture and lively markets.',
        image: 'https://images.pexels.com/photos/2901215/pexels-photo-2901215.jpeg?auto=compress&cs=tinysrgb&w=600',
        location: 'Southern Mozambique'
      },
      {
        name: 'Gorongosa National Park',
        description: 'Restored national park with diverse wildlife and conservation success story.',
        image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=600',
        location: 'Central Mozambique'
      }
    ],
    transportation: [
      {
        type: 'Domestic Flight',
        description: 'Connections between major cities and tourist destinations.',
        price: '$100-400',
        route: 'Major cities'
      },
      {
        type: 'Dhow',
        description: 'Traditional sailing boats for island hopping and coastal exploration.',
        price: '$50-200',
        route: 'Coastal areas'
      }
    ],
    hotels: [
      {
        name: 'Anantara Bazaruto Island Resort',
        description: 'Luxury resort on pristine Bazaruto Island with water activities.',
        image: 'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=600',
        rating: 5,
        price: '$600-1200',
        location: 'Bazaruto Island'
      },
      {
        name: 'Polana Serena Hotel',
        description: 'Historic luxury hotel in Maputo with colonial charm.',
        image: 'https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg?auto=compress&cs=tinysrgb&w=600',
        rating: 5,
        price: '$200-400',
        location: 'Maputo'
      }
    ],
    restaurants: [
      {
        name: 'Zambi Restaurant',
        cuisine: 'Portuguese and Mozambican seafood specialties',
        image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=600',
        rating: 4,
        priceRange: '$$$',
        location: 'Maputo'
      },
      {
        name: 'Costa do Sol',
        cuisine: 'Beachfront restaurant with fresh seafood',
        image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=600',
        rating: 4,
        priceRange: '$$',
        location: 'Maputo'
      }
    ]
  },
  {
    name: 'Madagascar',
    description: 'Discover unique wildlife found nowhere else on Earth, diverse landscapes from rainforests to deserts, and rich Malagasy culture.',
    image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=800',
    region: 'Southern Africa',
    population: '28.4 million',
    attractions: [
      {
        name: 'Avenue of the Baobabs',
        description: 'Iconic avenue lined with ancient baobab trees, especially stunning at sunset.',
        image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=600',
        location: 'Western Madagascar'
      },
      {
        name: 'Andasibe-Mantadia National Park',
        description: 'Primary rainforest home to the largest lemur species, the Indri.',
        image: 'https://images.pexels.com/photos/1076758/pexels-photo-1076758.jpeg?auto=compress&cs=tinysrgb&w=600',
        location: 'Eastern Madagascar'
      },
      {
        name: 'Tsingy de Bemaraha',
        description: 'Dramatic limestone formations creating a stone forest landscape.',
        image: 'https://images.pexels.com/photos/1263986/pexels-photo-1263986.jpeg?auto=compress&cs=tinysrgb&w=600',
        location: 'Western Madagascar'
      }
    ],
    transportation: [
      {
        type: 'Domestic Flight',
        description: 'Essential for covering long distances across the island.',
        price: '$150-500',
        route: 'Major cities'
      },
      {
        type: '4WD Vehicle',
        description: 'Necessary for reaching remote parks and attractions.',
        price: '$80-150/day',
        route: 'Remote areas'
      }
    ],
    hotels: [
      {
        name: 'Anjajavy Le Lodge',
        description: 'Luxury eco-lodge on the northwest coast with unique wildlife.',
        image: 'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=600',
        rating: 5,
        price: '$800-1500',
        location: 'Northwest Coast'
      },
      {
        name: 'Vakona Forest Lodge',
        description: 'Eco-lodge near Andasibe with lemur encounters.',
        image: 'https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg?auto=compress&cs=tinysrgb&w=600',
        rating: 4,
        price: '$200-400',
        location: 'Andasibe'
      }
    ],
    restaurants: [
      {
        name: 'La Varangue',
        cuisine: 'French-Malagasy fusion cuisine',
        image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=600',
        rating: 4,
        priceRange: '$$$',
        location: 'Antananarivo'
      },
      {
        name: 'Sakamanga Hotel Restaurant',
        cuisine: 'Traditional Malagasy cuisine with international options',
        image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=600',
        rating: 4,
        priceRange: '$$',
        location: 'Antananarivo'
      }
    ]
  },
  {
    name: 'Mauritius',
    description: 'Paradise island with pristine beaches, luxury resorts, diverse culture, and excellent water sports in the Indian Ocean.',
    image: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=800',
    region: 'Southern Africa',
    population: '1.3 million',
    attractions: [
      {
        name: 'Le Morne Brabant',
        description: 'UNESCO World Heritage mountain with hiking trails and historical significance.',
        image: 'https://images.pexels.com/photos/1076758/pexels-photo-1076758.jpeg?auto=compress&cs=tinysrgb&w=600',
        location: 'Southwest Mauritius'
      },
      {
        name: 'Black River Gorges National Park',
        description: 'Native forest with endemic species and hiking trails.',
        image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=600',
        location: 'Central Mauritius'
      },
      {
        name: 'Ile aux Cerfs',
        description: 'Beautiful island with pristine beaches and water sports.',
        image: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=600',
        location: 'East Coast'
      }
    ],
    transportation: [
      {
        type: 'Car Rental',
        description: 'Easy way to explore the island at your own pace.',
        price: '$30-60/day',
        route: 'Island-wide'
      },
      {
        type: 'Catamaran',
        description: 'Boat trips to nearby islands and snorkeling spots.',
        price: '$50-150',
        route: 'Coastal waters'
      }
    ],
    hotels: [
      {
        name: 'One&Only Le Saint Géran',
        description: 'Ultra-luxury resort on a private peninsula.',
        image: 'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=600',
        rating: 5,
        price: '$800-2000',
        location: 'Belle Mare'
      },
      {
        name: 'The Oberoi Mauritius',
        description: 'Luxury beachfront resort with pavilions and villas.',
        image: 'https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg?auto=compress&cs=tinysrgb&w=600',
        rating: 5,
        price: '$600-1500',
        location: 'Turtle Bay'
      }
    ],
    restaurants: [
      {
        name: 'La Table du Château',
        cuisine: 'Fine dining with French and Mauritian influences',
        image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=600',
        rating: 5,
        priceRange: '$$$$',
        location: 'Bel Ombre'
      },
      {
        name: 'Chez Tante Athalie',
        cuisine: 'Authentic Mauritian Creole cuisine',
        image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=600',
        rating: 4,
        priceRange: '$$',
        location: 'Chamarel'
      }
    ]
  },
  {
    name: 'Seychelles',
    description: 'Pristine tropical paradise with granite boulders, pristine beaches, unique wildlife, and luxury resorts in the Indian Ocean.',
    image: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=800',
    region: 'Southern Africa',
    population: '98,000',
    attractions: [
      {
        name: 'Anse Source d\'Argent',
        description: 'World-famous beach with granite boulders and crystal-clear water.',
        image: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=600',
        location: 'La Digue'
      },
      {
        name: 'Vallée de Mai',
        description: 'UNESCO World Heritage forest with the famous Coco de Mer palm.',
        image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=600',
        location: 'Praslin'
      },
      {
        name: 'Aldabra Atoll',
        description: 'Remote coral atoll with giant tortoises and pristine marine life.',
        image: 'https://images.pexels.com/photos/1076758/pexels-photo-1076758.jpeg?auto=compress&cs=tinysrgb&w=600',
        location: 'Outer Islands'
      }
    ],
    transportation: [
      {
        type: 'Inter-island Ferry',
        description: 'Regular ferry service between main islands.',
        price: '$50-100',
        route: 'Mahé-Praslin-La Digue'
      },
      {
        type: 'Helicopter',
        description: 'Scenic transfers and tours between islands.',
        price: '$300-800',
        route: 'Inter-island'
      }
    ],
    hotels: [
      {
        name: 'North Island Lodge',
        description: 'Ultra-exclusive private island resort.',
        image: 'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=600',
        rating: 5,
        price: '$2000-5000',
        location: 'North Island'
      },
      {
        name: 'Four Seasons Resort Seychelles',
        description: 'Luxury resort with treetop villas and pristine beaches.',
        image: 'https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg?auto=compress&cs=tinysrgb&w=600',
        rating: 5,
        price: '$1000-3000',
        location: 'Mahé'
      }
    ],
    restaurants: [
      {
        name: 'La Plage Restaurant',
        cuisine: 'Creole and international cuisine with ocean views',
        image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=600',
        rating: 5,
        priceRange: '$$$$',
        location: 'Mahé'
      },
      {
        name: 'Chez Plume Restaurant',
        cuisine: 'Traditional Seychellois cuisine',
        image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=600',
        rating: 4,
        priceRange: '$$',
        location: 'Mahé'
      }
    ]
  },
  {
    name: 'Eswatini',
    description: 'Small kingdom with rich Swazi culture, wildlife reserves, traditional ceremonies, and stunning mountain landscapes.',
    image: 'https://images.pexels.com/photos/1076758/pexels-photo-1076758.jpeg?auto=compress&cs=tinysrgb&w=800',
    region: 'Southern Africa',
    population: '1.2 million',
    attractions: [
      {
        name: 'Hlane Royal National Park',
        description: 'Home to lions, elephants, and rhinos in the kingdom\'s largest park.',
        image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=600',
        location: 'Eastern Eswatini'
      },
      {
        name: 'Malolotja Nature Reserve',
        description: 'Mountainous reserve with hiking trails and ancient rock art.',
        image: 'https://images.pexels.com/photos/1076758/pexels-photo-1076758.jpeg?auto=compress&cs=tinysrgb&w=600',
        location: 'Northwestern Eswatini'
      },
      {
        name: 'Mantenga Cultural Village',
        description: 'Traditional Swazi village showcasing local culture and customs.',
        image: 'https://images.pexels.com/photos/2901215/pexels-photo-2901215.jpeg?auto=compress&cs=tinysrgb&w=600',
        location: 'Ezulwini Valley'
      }
    ],
    transportation: [
      {
        type: 'Car Rental',
        description: 'Best way to explore the small kingdom.',
        price: '$25-50/day',
        route: 'Nationwide'
      },
      {
        type: 'Minibus Taxi',
        description: 'Local transport between towns and cities.',
        price: '$2-10',
        route: 'Major routes'
      }
    ],
    hotels: [
      {
        name: 'Royal Swazi Spa',
        description: 'Luxury resort and spa in the Ezulwini Valley.',
        image: 'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=600',
        rating: 4,
        price: '$150-300',
        location: 'Ezulwini Valley'
      },
      {
        name: 'Foresters Arms Hotel',
        description: 'Historic hotel in the mountains with colonial charm.',
        image: 'https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg?auto=compress&cs=tinysrgb&w=600',
        rating: 3,
        price: '$80-150',
        location: 'Mbabane'
      }
    ],
    restaurants: [
      {
        name: 'Ramblas Restaurant',
        cuisine: 'International cuisine with local influences',
        image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=600',
        rating: 4,
        priceRange: '$$',
        location: 'Mbabane'
      },
      {
        name: 'Guava Gallery Restaurant',
        cuisine: 'Contemporary cuisine with art gallery',
        image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=600',
        rating: 4,
        priceRange: '$$$',
        location: 'Ezulwini Valley'
      }
    ]
  },
  {
    name: 'Tunisia',
    description: 'Explore ancient Carthage, the Sahara Desert, Mediterranean beaches, and well-preserved Roman ruins in North Africa.',
    image: 'https://images.pexels.com/photos/2901215/pexels-photo-2901215.jpeg?auto=compress&cs=tinysrgb&w=800',
    region: 'North Africa',
    population: '11.8 million',
    attractions: [
      {
        name: 'Carthage',
        description: 'Ancient ruins of the once-powerful Carthaginian empire.',
        image: 'https://images.pexels.com/photos/2901215/pexels-photo-2901215.jpeg?auto=compress&cs=tinysrgb&w=600',
        location: 'Near Tunis'
      },
      {
        name: 'Sahara Desert',
        description: 'Experience camel trekking and desert camping in the great Sahara.',
        image: 'https://images.pexels.com/photos/1263986/pexels-photo-1263986.jpeg?auto=compress&cs=tinysrgb&w=600',
        location: 'Southern Tunisia'
      },
      {
        name: 'Sidi Bou Said',
        description: 'Picturesque blue and white village overlooking the Mediterranean.',
        image: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=600',
        location: 'Near Tunis'
      }
    ],
    transportation: [
      {
        type: 'Train',
        description: 'Comfortable rail connections between major cities.',
        price: '$5-20',
        route: 'Tunis-Sousse-Sfax'
      },
      {
        type: 'Louage',
        description: 'Shared taxis for intercity travel.',
        price: '$10-30',
        route: 'Various routes'
      }
    ],
    hotels: [
      {
        name: 'Four Seasons Hotel Tunis',
        description: 'Luxury hotel in the heart of the capital.',
        image: 'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=600',
        rating: 5,
        price: '$200-400',
        location: 'Tunis'
      },
      {
        name: 'Dar Said',
        description: 'Boutique hotel in the charming village of Sidi Bou Said.',
        image: 'https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg?auto=compress&cs=tinysrgb&w=600',
        rating: 4,
        price: '$150-300',
        location: 'Sidi Bou Said'
      }
    ],
    restaurants: [
      {
        name: 'Dar El Jeld',
        cuisine: 'Traditional Tunisian cuisine in a historic palace',
        image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=600',
        rating: 5,
        priceRange: '$$$',
        location: 'Tunis'
      },
      {
        name: 'Café des Nattes',
        cuisine: 'Traditional café with mint tea and local pastries',
        image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=600',
        rating: 4,
        priceRange: '$',
        location: 'Sidi Bou Said'
      }
    ]
  },
  {
    name: 'Senegal',
    description: 'Discover vibrant culture, historic Gorée Island, diverse wildlife, and the rhythms of West African music and dance.',
    image: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=800',
    region: 'West Africa',
    population: '17.2 million',
    attractions: [
      {
        name: 'Gorée Island',
        description: 'UNESCO World Heritage site with important slave trade history.',
        image: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=600',
        location: 'Off Dakar'
      },
      {
        name: 'Djoudj National Bird Sanctuary',
        description: 'Important bird sanctuary with over 400 species.',
        image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=600',
        location: 'Northern Senegal'
      },
      {
        name: 'Pink Lake (Lac Rose)',
        description: 'Unique pink-colored lake with high salt content.',
        image: 'https://images.pexels.com/photos/2901215/pexels-photo-2901215.jpeg?auto=compress&cs=tinysrgb&w=600',
        location: 'Near Dakar'
      }
    ],
    transportation: [
      {
        type: 'Car Rapide',
        description: 'Colorful local buses for city transport.',
        price: '$0.50-2',
        route: 'Urban areas'
      },
      {
        type: 'Sept-place',
        description: 'Shared taxis for intercity travel.',
        price: '$10-30',
        route: 'Major routes'
      }
    ],
    hotels: [
      {
        name: 'Terrou-Bi Resort',
        description: 'Luxury beachfront resort in Dakar.',
        image: 'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=600',
        rating: 5,
        price: '$200-400',
        location: 'Dakar'
      },
      {
        name: 'La Maison Abaka',
        description: 'Boutique hotel with traditional Senegalese design.',
        image: 'https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg?auto=compress&cs=tinysrgb&w=600',
        rating: 4,
        price: '$100-200',
        location: 'Dakar'
      }
    ],
    restaurants: [
      {
        name: 'La Fourchette',
        cuisine: 'French cuisine with Senegalese influences',
        image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=600',
        rating: 4,
        priceRange: '$$$',
        location: 'Dakar'
      },
      {
        name: 'Chez Loutcha',
        cuisine: 'Traditional Senegalese cuisine',
        image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=600',
        rating: 4,
        priceRange: '$$',
        location: 'Dakar'
      }
    ]
  },
  {
    name: 'Sierra Leone',
    description: 'Discover pristine beaches, lush rainforests, rich cultural heritage, and the warm hospitality of West Africa.',
    image: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=800',
    region: 'West Africa',
    population: '8.1 million',
    attractions: [
      {
        name: 'Freetown Peninsula',
        description: 'Beautiful beaches and historic sites around the capital.',
        image: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=600',
        location: 'Western Area'
      },
      {
        name: 'Outamba-Kilimi National Park',
        description: 'Savanna and forest park with diverse wildlife.',
        image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=600',
        location: 'Northern Sierra Leone'
      },
      {
        name: 'Bunce Island',
        description: 'Historic slave trading fort with important cultural significance.',
        image: 'https://images.pexels.com/photos/2901215/pexels-photo-2901215.jpeg?auto=compress&cs=tinysrgb&w=600',
        location: 'Sierra Leone River'
      }
    ],
    transportation: [
      {
        type: 'Poda Poda',
        description: 'Local minibus transport.',
        price: '$1-5',
        route: 'Urban and rural'
      },
      {
        type: 'Okada',
        description: 'Motorcycle taxis for short distances.',
        price: '$1-3',
        route: 'Local transport'
      }
    ],
    hotels: [
      {
        name: 'Radisson Blu Mammy Yoko Hotel',
        description: 'Beachfront hotel with modern amenities.',
        image: 'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=600',
        rating: 4,
        price: '$150-300',
        location: 'Freetown'
      },
      {
        name: 'Country Lodge',
        description: 'Comfortable lodge with local hospitality.',
        image: 'https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg?auto=compress&cs=tinysrgb&w=600',
        rating: 3,
        price: '$80-150',
        location: 'Freetown'
      }
    ],
    restaurants: [
      {
        name: 'The Hub Restaurant',
        cuisine: 'International cuisine with local specialties',
        image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=600',
        rating: 4,
        priceRange: '$$',
        location: 'Freetown'
      },
      {
        name: 'Mama\'s Kitchen',
        cuisine: 'Traditional Sierra Leonean cuisine',
        image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=600',
        rating: 4,
        priceRange: '$',
        location: 'Freetown'
      }
    ]
  }
];

export const allCountries = featuredCountries;