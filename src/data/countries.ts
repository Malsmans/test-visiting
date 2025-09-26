import { Country } from '../types';

// All countries data
export const allCountries: Country[] = [
  {
    name: 'Egypt',
    description: 'Discover the timeless wonders of ancient Egypt, where pharaohs once ruled and pyramids touch the sky. From the majestic Nile River to the vibrant coral reefs of the Red Sea, Egypt offers an unparalleled journey through history and luxury.',
    image: 'https://images.pexels.com/photos/71241/pexels-photo-71241.jpeg',
    region: 'North Africa',
    population: '116.5 million',
    attractions: [
      {
        name: 'Pyramids of Giza',
        description: 'The last surviving wonder of the ancient world, these magnificent pyramids have stood for over 4,500 years as testament to ancient Egyptian engineering prowess.',
        image: 'https://cdn-imgix.headout.com/mircobrands-content/image/0232524d20a8623f06be8c46ff07cd74-Pyramids%20Sphinx%20Entrance.jpg?auto=format&w=1069.6000000000001&h=687.6&q=90&fit=crop&ar=14%3A9&crop=faces',
        location: 'Giza, Egypt',
        link: 'https://www.egypt.travel/en/attractions/giza-pyramid-complex'
      },
      {
        name: 'Valley of the Kings',
        description: 'The royal burial ground of pharaohs, containing over 60 tombs including that of Tutankhamun, adorned with intricate hieroglyphs and ancient treasures.',
        image: 'https://d3rr2gvhjw0wwy.cloudfront.net/uploads/mandators/75428/cms/579135/940x500-1-50-908600808d8bb99f0302b662a3ddcda0.jpg',
        location: 'Luxor, Egypt',
        link: 'https://www.egypt.travel/en/attractions/valley-of-the-kings'
      },
      {
        name: 'Abu Simbel Temples',
        description: 'Colossal rock temples built by Ramesses II, relocated stone by stone to save them from flooding, representing the pinnacle of ancient Egyptian architecture.',
        image: 'https://deih43ym53wif.cloudfront.net/temple-pharaoh-rameses-abu-simbel-egypt-aswan-shutterstock_1681467283.jpg_5722520688.jpg',
        location: 'Aswan, Egypt',
        link: 'https://www.egypt.travel/en/attractions/abu-simbel-temples'
      },
      {
        name: 'Karnak Temple Complex',
        description: 'The largest religious building ever constructed, a vast complex of temples, chapels, and pylons dedicated to the Theban gods and pharaohs.',
        image: 'https://d3rr2gvhjw0wwy.cloudfront.net/uploads/mandators/49581/file-manager/karnak-temple.jpg',
        location: 'Luxor, Egypt',
        link: 'https://www.egypt.travel/en/attractions/karnak-temple'
      },
      {
        name: 'Red Sea Coral Reefs',
        description: 'World-renowned diving destination featuring pristine coral reefs, exotic marine life, and crystal-clear waters perfect for luxury underwater adventures.',
        image: 'https://cdn.oceanographicmagazine.com/wp-content/uploads/2020/03/07104409/Red-sea-corals.jpg',
        location: 'Red Sea Coast, Egypt',
        link: 'https://www.egypt.travel/en/attractions/red-sea'
      },
      {
        name: 'Nile River Cruise',
        description: 'Sail the legendary Nile River aboard luxury vessels, witnessing ancient temples and monuments while enjoying world-class amenities and service.',
        image: 'https://specials-images.forbesimg.com/imageserve/64eed8a7b0e47ddfc4d8ae1f/0x0.jpg',
        location: 'Nile River, Egypt',
        link: 'https://www.egypt.travel/en/things-to-do/nile-cruises'
      },
      {
        name: 'Egyptian Museum',
        description: 'Home to the world\'s most extensive collection of ancient Egyptian artifacts, including treasures from Tutankhamun\'s tomb and royal mummies.',
        image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/0b/ae/20/img-20170420-220949-228.jpg?w=900&h=500&s=1',
        location: 'Cairo, Egypt',
        link: 'https://www.egypt.travel/en/attractions/egyptian-museum'
      },
      {
        name: 'White Desert National Park',
        description: 'Surreal landscape of chalk rock formations sculpted by wind and sand, creating an otherworldly desert experience under starlit skies.',
        image: 'https://lp-cms-production.imgix.net/2023-06/shutterstockRF89650903.jpg?w=1920&h=640&fit=crop&crop=faces%2Cedges&auto=format&q=75',
        location: 'Western Desert, Egypt',
        link: 'https://www.egypt.travel/en/attractions/white-desert'
      },
      {
        name: 'Philae Temple',
        description: 'Beautiful temple complex dedicated to the goddess Isis, relocated to Agilkia Island and illuminated by spectacular sound and light shows.',
        image: 'https://literarytoursegypt.com/wp-content/uploads/2022/08/Temple-of-Philae-Sunset-1024x683.jpg',
        location: 'Aswan, Egypt',
        link: 'https://www.egypt.travel/en/attractions/philae-temple'
      },
      {
        name: 'Alexandria Library',
        description: 'Modern revival of the ancient Library of Alexandria, featuring cutting-edge architecture and serving as a center for learning and cultural exchange.',
        image: 'https://www.egypttoursportal.com/images/2017/11/Alexandria-Library-Egypt-Tours-Portal.jpg',
        location: 'Alexandria, Egypt',
        link: 'https://www.bibalex.org/en/default'
      },
      {
        name: 'Siwa Oasis',
        description: 'Remote desert oasis with natural springs, ancient ruins, and traditional Berber culture, offering an authentic escape from modern life.',
        image: 'https://www.quitandgotravel.com/wp-content/uploads/sites/8/2022/04/Siwa-Oasis-Shali-Fortress-Banner.jpg',
        location: 'Western Desert, Egypt',
        link: 'https://www.egypt.travel/en/attractions/siwa-oasis'
      },
      {
        name: 'Dendera Temple',
        description: 'Exceptionally well-preserved temple complex dedicated to Hathor, featuring stunning astronomical ceiling paintings and intricate hieroglyphs.',
        image: 'https://d3rr2gvhjw0wwy.cloudfront.net/uploads/activity_headers/324692/2000x2000-0-70-2d0387950eb608e6d5669b3aaae13134.jpg',
        location: 'Qena, Egypt',
        link: 'https://www.egypt.travel/en/attractions/dendera-temple'
      },
      {
        name: 'Edfu Temple',
        description: 'Best-preserved temple in Egypt, dedicated to the falcon god Horus, showcasing magnificent Ptolemaic architecture and detailed reliefs.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/7/7f/Temple_Edfou_Egypte.jpg',
        location: 'Edfu, Egypt',
        link: 'https://www.egypt.travel/en/attractions/edfu-temple'
      },
      {
        name: 'Saint Catherine\'s Monastery',
        description: 'Ancient Christian monastery at the foot of Mount Sinai, housing priceless manuscripts and icons in one of the world\'s oldest working monasteries.',
        image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/24/09/e2/62/caption.jpg?w=1200&h=-1&s=1',
        location: 'South Sinai, Egypt',
        link: 'https://www.egypt.travel/en/attractions/saint-catherines-monastery'
      },
      {
        name: 'Ras Mohammed National Park',
        description: 'Premier marine reserve offering world-class diving and snorkeling among pristine coral reefs and diverse marine ecosystems.',
        image: 'https://www.youregypttours.com/storage/786/1655716905.jpg',
        location: 'South Sinai, Egypt',
        link: 'https://www.egypt.travel/en/attractions/ras-mohammed-national-park'
      },
      {
        name: 'Temple of Kom Ombo',
        description: 'Unique double temple dedicated to both Sobek the crocodile god and Horus the falcon god, featuring ancient medical instruments reliefs.',
        image: 'https://h1.nu/17Wus',
        location: 'Kom Ombo, Egypt',
        link: 'https://h1.nu/1cpMS'
      },
      {
        name: 'Dahshur Pyramids',
        description: 'Home to the Bent Pyramid and Red Pyramid, showcasing the evolution of pyramid construction techniques in a less crowded setting.',
        image: 'https://h1.nu/17Wvg',
        location: 'Dahshur, Egypt',
        link: 'https://h1.nu/17Wv9'
      },
      {
        name: 'Luxor Temple',
        description: 'Magnificent temple complex in the heart of Luxor, beautifully illuminated at night and connected to Karnak Temple by the Avenue of Sphinxes.',
        image: 'https://h1.nu/17Wv-',
        location: 'Luxor, Egypt',
        link: 'https://h1.nu/1cpOr'
      },
      {
        name: 'Bahariya Oasis',
        description: 'Desert oasis featuring hot springs, ancient tombs, and the famous Golden Mummies, perfect for luxury desert camping experiences.',
        image: 'https://h1.nu/17Wxl',
        location: 'Western Desert, Egypt',
        link: 'https://www.memphistours.com/egypt/egypt-wikis/oases-and-the-western-desert/wiki/baharia-oasis'
      },
      {
        name: 'Coptic Cairo',
        description: 'Historic Christian quarter featuring ancient churches, the Coptic Museum, and the Hanging Church, showcasing Egypt\'s Christian heritage.',
        image: 'https://ucarecdn.com/6fd78d6e-80f0-43a8-a3ec-e459843b528d/-/crop/678x381/0,31/-/preview/',
        location: 'Cairo, Egypt',
        link: 'https://www.memphistours.com/egypt/egypt-wikis/cairo-attractions/wiki/old-cairo'
      }
    ],
    transportation: [
      {
        type: 'Luxury Airport Transfer',
        description: 'Private chauffeur service with premium vehicles for seamless airport transfers and city transportation.',
        price: '$50-150',
        route: 'Cairo International Airport to City Center',
        link: 'https://www.egy.limo/',
      },
      {
        type: 'Nile River Cruise',
        description: 'Luxury river cruise ships offering multi-day journeys between Luxor and Aswan with world-class amenities',
        price: '$200-800/day',
        route: 'Luxor to Aswan',
        link: 'https://nilecruisers.com',
        
      },
      {
        type: 'Desert Safari',
        description: '4WD desert expeditions to remote oases and archaeological sites with professional guides and camping equipment.',
        price: '$100-300/day',
        route: 'Cairo to Western Desert',
        link: 'https://h1.nu/18JoE',
      },
      {
        type: 'Red Sea Ferry',
        description: 'High-speed ferry service connecting mainland Egypt with Red Sea resort destinations.',
        price: '$30-80',
        route: 'Hurghada to Sharm El Sheikh',
        link: 'https://www.bookaway.com/suppliers/kcfmt', 
      }
    ],
    hotels: [
      {
        name: 'Four Seasons Hotel Cairo at Nile Plaza',
        description: 'Luxury hotel overlooking the Nile River, featuring world-class spa facilities, fine dining restaurants, and opulent accommodations in the heart of Cairo.',
        image: 'https://images.trvl-media.com/lodging/2000000/1090000/1083300/1083214/f60c8a21.jpg?impolicy=resizecrop&rw=1200&ra=fit',
        rating: 5,
        price: '$300-600',
        location: 'Cairo',
        bookingLink: 'https://expedia.com/affiliate/3XBo9N0'
      },
      {
        name: 'Sofitel Winter Palace Luxor',
        description: 'Historic luxury hotel where Agatha Christie wrote "Death on the Nile," offering Victorian elegance with modern amenities overlooking the Nile.',
        image: 'https://images.trvl-media.com/lodging/1000000/10000/4300/4228/c4ebcce3.jpg?impolicy=resizecrop&rw=1200&ra=fit',
        rating: 5,
        price: '$200-450',
        location: 'Luxor',
        bookingLink: 'https://expedia.com/affiliate/dauSYPd'
      },
      {
        name: 'Marriott Mena House Cairo',
        description: 'Palatial hotel with direct views of the Pyramids of Giza, combining royal heritage with contemporary luxury in magnificent gardens.',
        image: 'https://images.trvl-media.com/lodging/18000000/17170000/17162700/17162680/dda4c5eb.jpg?impolicy=resizecrop&rw=1200&ra=fit',
        rating: 5,
        price: '$250-500',
        location: 'Giza',
        bookingLink: 'https://expedia.com/affiliate/2oNYxdK'
      },
      {
        name: 'Sofitel Legend Old Cataract Aswan',
        description: 'Legendary hotel on the banks of the Nile, where Winston Churchill and Agatha Christie stayed, offering unparalleled luxury and Nubian hospitality.',
        image: 'https://images.trvl-media.com/lodging/1000000/910000/903900/903876/7535c92d.jpg?impolicy=resizecrop&rw=1200&ra=fit',
        rating: 5,
        price: '$400-800',
        location: 'Aswan',
        bookingLink: 'https://expedia.com/affiliate/IEI7ZuI'
      },
      {
        name: 'Four Seasons Resort Sharm El Sheikh',
        description: 'Beachfront resort with luxury accommodations with private beaches, world-class diving, and spa treatments overlooking the Red Sea.',
        image: 'https://images.trvl-media.com/lodging/1000000/890000/885100/885065/7e4ed958.jpg?impolicy=resizecrop&rw=1200&ra=fit',
        rating: 5,
        price: '$350-700',
        location: 'Sharm El Sheikh',
        bookingLink: 'https://expedia.com/affiliate/krSWJcI'
      },
      {
        name: 'Steigenberger Hotel El Tahrir Cairo',
        description: 'Contemporary luxury hotel in downtown Cairo, featuring modern amenities, rooftop dining, and convenient access to major attractions.',
        image: 'https://images.trvl-media.com/lodging/16000000/15380000/15378400/15378385/be52ae18.jpg?impolicy=resizecrop&rw=1200&ra=fit',
        rating: 4,
        price: '$150-300',
        location: 'Cairo',
        bookingLink: 'https://expedia.com/affiliate/tuyWisc'
      },
      {
        name: 'Hilton Hurghada Resort',
        description: 'All-inclusive beachfront resort with multiple pools, water sports facilities, and direct access to pristine Red Sea coral reefs.',
        image: 'https://images.trvl-media.com/lodging/1000000/530000/520500/520401/3915e33f.jpg?impolicy=resizecrop&rw=1200&ra=fit',
        rating: 4,
        price: '$200-400',
        location: 'Hurghada',
        bookingLink: 'https://expedia.com/affiliate/S5SPUaO'
      },
      {
        name: 'Hilton Alexandria Corniche',
        description: 'Waterfront hotel overlooking the Mediterranean Sea, offering elegant accommodations and easy access to Alexandria\'s historical attractions.',
        image: 'https://images.trvl-media.com/lodging/1000000/10000/7900/7841/ba9e118e.jpg?impolicy=resizecrop&rw=1200&ra=fit',
        rating: 4,
        price: '$120-250',
        location: 'Alexandria',
        bookingLink: 'https://expedia.com/affiliate/aE1ZMYa'
      },
      {
        name: 'Adrere Amellal Desert Ecolodge',
        description: 'Unique eco-luxury lodge in Siwa Oasis built entirely from natural materials, offering an authentic desert experience with sustainable luxury.',
        image: 'https://www.adrereamellal.com/adrere/wp-content/uploads/2019/09/Khaled-Nagy-16-Modifica.jpg',
        rating: 5,
        price: '$400-600',
        location: 'Siwa Oasis',
        bookingLink: 'https://www.adrereamellal.com/adrere/'
      },
      {
        name: 'Sonesta St. George Hotel Luxor',
        description: 'Elegant Nile-side hotel offering comfortable accommodations with traditional Egyptian hospitality and convenient access to Luxor\'s temples.',
        image: 'https://images.trvl-media.com/lodging/1000000/70000/69500/69458/318c422e.jpg?impolicy=resizecrop&rw=1200&ra=fit',
        rating: 4,
        price: '$100-200',
        location: 'Luxor',
        bookingLink: 'https://expedia.com/affiliate/qLyAWHe'
      },
      {
        name: 'Kempinski Nile Hotel Cairo',
        description: 'Luxury hotel on the Nile Corniche featuring elegant rooms, multiple dining venues, and panoramic river views in the heart of Cairo.',
        image: 'https://www.kempinski.com/var/site/storage/images/1/0/2/5/65201-1-eng-GB/e42f4a6cc2c5-73654693_4K.jpg',
        rating: 5,
        price: '$280-550',
        location: 'Cairo',
        bookingLink: 'https://expedia.com/affiliate/Rvn8kkt'
      },
      {
        name: 'Oberoi Philae Nile Cruiser',
        description: 'Ultra-luxury Nile cruise ship offering spacious suites, gourmet dining, and personalized service while sailing between Luxor and Aswan.',
        image: 'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/0e/c8/2e/51.jpg',
        rating: 5,
        price: '$800-1500/night',
        location: 'Nile River',
        bookingLink: 'https://h1.nu/18MD7'
      },
      {
        name: 'Sanctuary Sun Boat IV',
        description: 'Boutique luxury Nile cruise featuring only 36 cabins, ensuring intimate service and exclusive experiences along the historic river.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/1/1d/Sanctuary_Sun_Boat_IV_R02.jpg',
        rating: 5,
        price: '$600-1200/night',
        location: 'Nile River',
        bookingLink: 'https://www.sanctuaryretreats.com/egypt'
      },
      {
        name: 'Movenpick Resort Hurghada',
        description: 'Beachfront resort with traditional Nubian architecture, multiple pools, and direct access to pristine Red Sea beaches and coral reefs.',
        image: 'https://www.prettigreizen.nl/Pictures/H5465618.jpg',
        rating: 4,
        price: '$180-350',
        location: 'Hurghada',
        bookingLink: 'https://expedia.com/affiliate/6OJxQ8Q'
      },
      {
        name: 'Jaz Aquamarine Resort',
        description: 'Adults-only luxury resort in Hurghada featuring modern amenities, multiple restaurants, and exclusive beach access with water sports.',
        image: 'https://pix10.agoda.net/hotelImages/166/166130/166130_16103014580048265033.jpg?ca=6&ce=1&s=414x232',
        rating: 4,
        price: '$220-420',
        location: 'Hurghada',
        bookingLink: 'https://expedia.com/affiliate/d2vmxZA'
      },
      {
        name: 'Rixos Sharm El Sheikh',
        description: 'All-inclusive luxury resort with private beach, multiple pools, spa facilities, and premium dining options overlooking the Red Sea.',
        image: 'https://h1.nu/1diJ4',
        rating: 5,
        price: '$300-600',
        location: 'Sharm El Sheikh',
        bookingLink: 'https://expedia.com/affiliate/tU1iatU'
      },
      {
        name: 'Concorde El Salam Hotel Cairo',
        description: 'Luxury hotel near Cairo International Airport featuring elegant accommodations, multiple dining venues, and comprehensive business facilities.',
        image: 'https://h1.nu/1diJt',
        rating: 4,
        price: '$140-280',
        location: 'Cairo',
        bookingLink: 'https://expedia.com/affiliate/yZsQlYW'
      },
      {
        name: 'Tolip El Galaa Hotel Cairo',
        description: 'Contemporary hotel in downtown Cairo offering modern amenities, rooftop dining, and convenient access to major attractions and shopping.',
        image: 'https://images.trvl-media.com/lodging/12000000/11290000/11289200/11289175/ddb931f3.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill',
        rating: 4,
        price: '$120-240',
        location: 'Cairo',
        bookingLink: 'https://expedia.com/affiliate/xXp4wSi'
      },
      {
        name: 'Pyramisa Isis Island Aswan',
        description: 'Unique hotel located on its own island in the Nile, offering tranquil accommodations with traditional Nubian architecture and river views.',
        image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/510651280.jpg?k=2976c55ae098e64e638115a11673280d8da65aa60fd4c422481420afaad7948f&o=&hp=1',
        rating: 4,
        price: '$160-320',
        location: 'Aswan',
        bookingLink: 'https://expedia.com/affiliate/2yNboRN'
      },
      {
        name: 'Cleopatra Luxury Resort Makadi Bay',
        description: 'All-inclusive beachfront resort featuring multiple pools, water slides, spa facilities, and direct access to pristine Red Sea beaches.',
        image: 'https://www.1atravel.rs/wp-content/uploads/2021/08/CLEOPATRA-LUXURY-RESORT-MAKADI-BAY_100.picture.10082021.1259.6112543779f1b9.00936046.jpg',
        rating: 4,
        price: '$200-400',
        location: 'Makadi Bay',
        bookingLink: 'https://expedia.com/affiliate/jPviwJb'
      }
    ],
    restaurants: [
      {
        name: 'Abou El Sid Cairo',
        cuisine: 'Traditional Egyptian cuisine in an authentic setting with live entertainment and classic dishes passed down through generations.',
        image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/22/0e/c0/abou-el-sid-dining-area.jpg?w=900&h=500&s=1',
        rating: 4,
        priceRange: '$15-35',
        location: 'Zamalek, Cairo',
        link: 'https://www.abouelsid.com/'
      },
      {
        name: 'Sequoia',
        cuisine: 'Contemporary Mediterranean cuisine with stunning Nile views, featuring fresh seafood and international dishes in an elegant riverside setting.',
        image: 'https://www.crimsoncairo.com/images/gallery/03.jpg',
        rating: 5,
        priceRange: '$25-60',
        location: 'Zamalek, Cairo',
        link: 'https://www.crimsoncairo.com/'
      },
      {
        name: '1886 Restaurant',
        cuisine: 'Fine French dining in the historic Winter Palace, offering gourmet cuisine with impeccable service in an elegant colonial setting.',
        image: 'https://phgcdn.com/images/uploads/LXRSW/diningimages/1600x813-Winter-Palace-1886_Restaurant_Dining3.jpg',
        rating: 5,
        priceRange: '$40-80',
        location: 'Luxor',
        link: 'https://sofitel.accor.com/en/hotels/1661/R001.restaurant.html'
      },
      {
        name: 'Fish Market',
        cuisine: 'Fresh seafood restaurant specializing in Mediterranean catches, grilled fish, and traditional Egyptian seafood preparations.',
        image: 'https://www.elmenus.com/public/img/default-cover.png',
        rating: 4,
        priceRange: '$20-45',
        location: 'Alexandria',
        link: 'https://www.elmenus.com/ar/%D8%A7%D9%84%D8%A7%D8%B3%D9%83%D9%86%D8%AF%D8%B1%D9%8A%D8%A9/%D9%81%D9%8A%D8%B4-%D9%85%D8%A7%D8%B1%D9%83%D8%AA-93qm'
      },
      {
        name: 'Naguib Mahfouz Cafe',
        cuisine: 'Traditional Egyptian coffee house and restaurant in Khan El Khalili bazaar, serving authentic local dishes and aromatic shisha.',
        image: 'https://lh3.googleusercontent.com/p/AF1QipNZk8rg32FvorMRSSWjM9PY7S3S2X9n8H5wQ2Mv=s680-w680-h510-rw',
        rating: 4,
        priceRange: '$10-25',
        location: 'Khan El Khalili, Cairo',
        link: 'https://g.co/kgs/QxAPhsE'
      },
      {
        name: 'Zitouni',
        cuisine: 'Upscale Lebanese and Middle Eastern cuisine at Four Seasons, featuring mezze platters, grilled meats, and refined regional specialties.',
        image: 'https://www.fourseasons.com/alt/img-opt/~65.1701.0,0000-448,3623-1377,9994-775,1246/publish/content/dam/fourseasons/images/web/CAI/CAI_464_original.jpg',
        rating: 5,
        priceRange: '$30-70',
        location: 'Cairo',
        link: 'https://www.fourseasons.com/caironp/dining/restaurants/zitouni/?utm_source=google&utm_medium=organicsearch&utm_campaign=tor-cai-fab-mid-seo-na&utm_content=na-na&utm_term=na'
      },
      {
        name: 'Nubian Restaurant',
        cuisine: 'Authentic Nubian cuisine featuring traditional dishes from southern Egypt and Sudan, with colorful decor and cultural entertainment.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4noSy6T5vg66Zk8ERU7OcaNV4qbdv6kKoC_9II2heBrEjE_Pj0aR1XbKhcqW15CkD-daLegKUSiuRdTjw85a6S9dn2ANBTQUGqwApX95AUaSGjrscXfkWXDToFz-kL9MrUkAiRQ=s680-w680-h510-rw',
        rating: 4,
        priceRange: '$12-30',
        location: 'Aswan',
        link: 'https://g.co/kgs/eW5grHY'
      },
      {
        name: 'Sofra Restaurant',
        cuisine: 'Traditional Egyptian home-style cooking in a cozy atmosphere, serving authentic dishes made from family recipes and local ingredients.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4np6lquRDgj-pNn-N2yBst-dZppIXU8CLpKRa4JKtUg0omo34KaBNyOo1Gv4qaRXqkHt59V57HexLAmqOzaDADI62yt3YCCF2aOc50vj9Jz0ZkjNsFkVAk_u-dsEESvM9C0eLdk=s680-w680-h510-rw',
        rating: 4,
        priceRange: '$8-20',
        location: 'Luxor',
        link: 'https://g.co/kgs/drMxAvf'
      },
      {
        name: 'Felfela',
        cuisine: 'Popular Egyptian restaurant chain serving traditional dishes like koshari, falafel, and grilled meats in a casual, family-friendly environment.',
        image: 'https://lh3.googleusercontent.com/p/AF1QipMgD2WkETfpapo5KYUOgGmTgnSugxuQD8jOduzv=s680-w680-h510-rw',
        rating: 4,
        priceRange: '$5-15',
        location: 'Multiple locations',
        link: 'https://g.co/kgs/Aukpevv'
      },
      {
        name: 'Kandahar',
        cuisine: 'Upscale Lebanese restaurant offering refined Middle Eastern cuisine, premium mezze, and an extensive wine selection in elegant surroundings.',
        image: 'https://img.restaurantguru.com/rd56-interior-Raoucha-and-Kandahar-Restaurants-2022-10-5.jpg',
        rating: 5,
        priceRange: '$25-55',
        location: 'Zamalek, Cairo',
        link: 'https://www.raouchakandahar.com/'
      },
      {
        name: 'Bua Khao',
        cuisine: 'Authentic Thai restaurant offering traditional Thai dishes, fresh ingredients, and exotic flavors in a beautifully decorated Asian setting.',
        image: 'https://lh3.googleusercontent.com/p/AF1QipNDbT5LrPhDR9LyPhqK3M_rxfsm6gf5nHgRvkbd=s680-w680-h510-rw',
        rating: 4,
        priceRange: '$20-40',
        location: 'New Cairo',
        link: 'https://www.lepacha.com/'
      },
      {
        name: 'Maison Thomas',
        cuisine: 'Historic pizzeria and Italian restaurant established in 1922, famous for its wood-fired pizzas and traditional Italian dishes.',
        image: 'https://english.ahram.org.eg/Media/News/2019/1/6/2019-636823717380585988-58.jpg',
        rating: 4,
        priceRange: '$15-35',
        location: 'Zamalek, Cairo',
        link: 'https://www.maisonthomas.net/'
      },
      {
        name: 'Taboula Lebanese Restaurant',
        cuisine: 'Authentic Lebanese cuisine featuring fresh mezze, grilled meats, and traditional dishes in a warm, welcoming atmosphere.',
        image: 'https://h1.nu/17Zk9',
        rating: 4,
        priceRange: '$18-40',
        location: 'Maadi, Cairo',
        link: 'https://h1.nu/1csHE'
      },
      {
        name: 'Osmanly Restaurant',
        cuisine: 'Ottoman Turkish cuisine in an elegant setting, featuring traditional dishes, Turkish coffee, and authentic Middle Eastern flavors.',
        image: 'https://ucarecdn.com/6793c5ef-6527-40f7-8416-4e7854f030b7/-/scale_crop/870x500/',
        rating: 5,
        priceRange: '$25-50',
        location: 'Zamalek, Cairo',
        link: 'https://www.kempinski.com/en/nile-hotel/restaurants-bars/osmanly-restaurant?utm_medium=organic&utm_source=google&utm_campaign=KICAI1&utm_content=gmb&source=S308962248'
      },
      {
        name: 'Pier 88',
        cuisine: 'Upscale seafood restaurant with Nile views, specializing in fresh fish, international cuisine, and creative cocktails.',
        image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/9b/5b/17/venue.jpg?w=900&h=500&s=1',
        rating: 4,
        priceRange: '$22-45',
        location: 'Zamalek, Cairo',
        link: 'https://pier88group.com/'
      },
      {
        name: 'Sabaya Lebanese Restaurant',
        cuisine: 'Fine Lebanese dining featuring traditional recipes, live entertainment, and an extensive selection of Middle Eastern specialties.',
        image: 'https://digital.ihg.com/is/image/ihg/intercontinental-cairo-4533898720-2x1?wid=1100',
        rating: 4,
        priceRange: '$20-42',
        location: 'Heliopolis, Cairo',
        link: 'https://www.ihg.com/intercontinental/hotels/gb/en/cairo/croha/hoteldetail/dining?cm_mmc=GoogleMaps-_-IC-_-EG-_-CROHA'
      },
      {
        name: 'Cortigiano Restaurant',
        cuisine: 'Italian fine dining restaurant offering authentic pasta, risotto, and Mediterranean dishes in an elegant European atmosphere.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4np8znQKiEHjb5J0FQpkdV1AE3cFmNe0N-62TyBPi9lUPuEdM9sJKAYsu2KqqWvN_jQ3UgqWZiCs4JWxkIZ7_yV0R-eY18m4bkmBRSRd9aE-6Hk97UHqSN8IsZebDxcthJILxfvd=s680-w680-h510-rw',
        rating: 5,
        priceRange: '$28-55',
        location: 'New Cairo',
        link: 'https://share.google/6LQLCUiUpGpu7mh5R'
      },
      {
        name: 'Makani Rooftop Lounge',
        cuisine: 'Contemporary international cuisine with panoramic Cairo views, featuring creative cocktails and modern dishes in a stylish rooftop setting.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4noi-ZnnGO52zitGOC3QhGCea3AXgLPSCovq_-deHHKp8dMAZKbND6CgbSWhOFawL9SAXpOC9dHlZhq-KdZZ6u7iW2Nz4AXRVuvgBEgzDFWb-B9gy0WRdkJjoMzrOL_tSnioasDpsg=s680-w680-h510-rw',
        rating: 4,
        priceRange: '$25-50',
        location: 'Downtown Cairo',
        link: 'https://share.google/u1Q9YXkF4LFxTWwGI'
      },
      {
        name: 'Fasahat Somaya Restaurant',
        cuisine: 'Traditional Egyptian restaurant serving authentic local dishes, grilled meats, and traditional desserts in a family-friendly atmosphere.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4no6UloV_f4ncuNAAZTyWKk7cJk4y_zPg_3hbElSf9g1uoYYSCnsa_xjeH1EMCUrPbfDBycBmrCzncv2SFT_gcRJTdrOBeMh04T2dFHrNXZFM_Wde_Sm6uOulFub4EFGKdPZTH8e=s680-w680-h510-rw',
        rating: 4,
        priceRange: '$12-28',
        location: 'Giza',
        link: 'https://share.google/rfRx2p2Iy0cIv5wdq'
      },
      {
        name: 'Indigo Restaurant',
        cuisine: 'Modern fusion cuisine combining international flavors with local ingredients, featuring creative dishes and artistic presentation.',
        image: ' https://h1.nu/17-l8',
        rating: 4,
        priceRange: '$24-48',
        location: 'Maadi, Cairo',
        link: 'https://share.google/CbxuXKDlvkMuQrWEd'
      }
    ]
  },
  {
    name: 'South Africa',
    description: 'Experience the rainbow nation where diverse cultures, stunning landscapes, and world-class wine regions create an unforgettable luxury adventure.',
    image: 'https://images.pexels.com/photos/259447/pexels-photo-259447.jpeg', // Table Mountain, Cape Town
    region: 'Southern Africa',
    population: '60 million',
    attractions: [
      {
        name: 'Table Mountain',
        description: 'Iconic flat-topped mountain offering breathtaking views of Cape Town and the Atlantic Ocean.',
        image: 'https://cdn.britannica.com/41/75841-050-FAAE44F0/Table-Mountain-Cape-Town-Western-Bay-South.jpg',
        location: 'Cape Town',
        link: 'https://www.tablemountain.net/'
      },
      {
        name: 'Kruger National Park',
        description: 'Premier safari destination home to the Big Five and incredible wildlife diversity.',
        image: 'https://i.ytimg.com/vi/EUQ3QhLzTyk/maxresdefault.jpg',
        location: 'Mpumalanga',
        link: 'https://www.sanparks.org/parks/kruger/'
      },
      {
        name: 'Cape Winelands',
        description: 'World-renowned wine region with stunning vineyards and award-winning estates.',
        image: 'https://www.cape-winelands-info.co.za/info/region_sites/4/images/main_3.jpg',
        location: 'Western Cape',
        link: 'https://www.wineland.co.za/'
      },
      {
        name: 'Victoria & Alfred Waterfront',
        description: 'Historic harbor area featuring luxury shopping, fine dining, and entertainment with stunning mountain and ocean views.',
        image: 'https://a.travel-assets.com/findyours-php/viewfinder/images/res70/198000/198577-Victoria-And-Alfred-Waterfront.jpg?impolicy=fcrop&w=450&h=280&q=medium',
        location: 'Cape Town',
        link: 'https://www.waterfront.co.za/'
      },
      {
        name: 'Robben Island',
        description: 'UNESCO World Heritage site and former prison where Nelson Mandela was held, offering powerful historical insights.',
        image: 'https://whc.unesco.org/uploads/thumbs/site_0916_0001-1200-630-20151105152904.jpg',
        location: 'Cape Town',
        link: 'https://www.robben-island.org.za/'
      },
      {
        name: 'Garden Route',
        description: 'Scenic coastal drive featuring pristine beaches, ancient forests, and charming towns along the Indian Ocean.',
        image: 'https://www.turtlesa.com/images/stormsriver/str1.jpg',
        location: 'Western & Eastern Cape',
        link: 'https://www.gardenroute.co.za/'
      },
      {
        name: 'Drakensberg Mountains',
        description: 'Majestic mountain range offering hiking, rock art sites, and luxury mountain lodges with spectacular views.',
        image: 'https://drakensberghikes.com/media/com_mtree/images/listings/m/2010.jpg',
        location: 'KwaZulu-Natal',
        link: 'https://www.nature-reserve.co.za/south-africa-info-drakensberg.html'
      },
      {
        name: 'Hermanus Whale Watching',
        description: 'World-class whale watching destination where Southern Right Whales can be observed from the shore.',
        image: 'https://hermanus-tourism.co.za/wp-content/uploads/2019/06/Dream-Catcher.png',
        location: 'Western Cape',
        link: 'https://www.hermanus.co.za/'
      },
      {
        name: 'Blyde River Canyon',
        description: 'One of the world\'s largest canyons featuring dramatic viewpoints, waterfalls, and unique rock formations.',
        image: 'https://journeybeyondhorizon.com/wp-content/uploads/2023/03/2.jpg',
        location: 'Mpumalanga',
        link: 'https://www.blyderivercanyon.co.za/'
      },
      {
        name: 'Kirstenbosch Botanical Gardens',
        description: 'World-renowned botanical garden showcasing South Africa\'s unique fynbos vegetation against the backdrop of Table Mountain.',
        image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/30/89/1a/68/caption.jpg?w=800&h=400&s=1',
        location: 'Cape Town',
        link: 'https://www.sanbi.org/gardens/kirstenbosch/'
      },
      {
        name: 'Addo Elephant National Park',
        description: 'Home to over 600 elephants and the Big Seven, offering excellent game viewing in a malaria-free environment.',
        image: 'https://africanlanders.com/wp-content/uploads/2022/03/1644059509076.jpg',
        location: 'Eastern Cape',
        link: 'https://www.sanparks.org/parks/addo/'
      },
      {
        name: 'Tsitsikamma National Park',
        description: 'Coastal park featuring ancient forests, dramatic coastline, and adventure activities like bungee jumping and canopy tours.',
        image: 'https://www.turtlesa.com/images/stormsriver/str1.jpg',
        location: 'Eastern Cape',
        link: 'https://www.tsitsikamma.info/'
      },
      {
        name: 'Apartheid Museum',
        description: 'Powerful museum documenting South Africa\'s apartheid history through multimedia exhibits and personal stories.',
        image: 'https://cityspotters.imgix.net/6wKshJkGCzHRh1o69K3jzSjB?ixlib=rails-3.1.0&auto=enhance%2Ccompress%2Cformat&q=50&fit=crop&crop=entropy&w=800&h=450&dpr=2&s=895870757c098c88b1f8855b9d9393fb',
        location: 'Johannesburg',
        link: 'https://www.apartheidmuseum.org/'
      },
      {
        name: 'Cradle of Humankind',
        description: 'UNESCO World Heritage site containing some of the world\'s most important hominid fossil discoveries.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqRtJ7_fkTVrACDkWZToglgU6PDVdQrXgagq_9X5qF6STsjyU6au1va1WasvV0XiFvaeEarTitZ7fwqv2mLJowMvwTTGb-K2Xa0vWehSoNSMSiDFbzL33UdsXaV2JUHoq6bV3KD=s680-w680-h510-rw',
        location: 'Gauteng',
        link: 'https://www.maropeng.co.za/'
      },
      {
        name: 'Hluhluwe-iMfolozi Park',
        description: 'Africa\'s oldest proclaimed nature reserve, famous for its successful white rhino conservation program.',
        image: 'https://hluhluwegamereserve.com/wp-content/uploads/2018/10/Hluhluwe-Imfolozi-Park-Gates.jpg',
        location: 'KwaZulu-Natal',
        link: 'https://www.hluhluwegamereserve.com/hluhluwe-imfolozi-park-gates/'
      },
      {
        name: 'Boulders Beach Penguins',
        description: 'Home to a colony of African penguins, offering close encounters with these endangered seabirds.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4npQIV2v5ixm5MNVgo3FSdt9nTAiDGhHObkddoaz_JDXBSgprWAfjCKlAUpyEXPG32xl8RiGXqU5yMZw_fI6pPkkxf8E5XoVzA1hyBxY498pirTkAHVYliK_Ooq-Pw5_xS5bcBYKdw=s680-w680-h510-rw',
        location: 'Cape Town',
        link: 'https://www.sanparks.org/parks/table-mountain/what-to-do/attractions/boulders-penguin-colony'
      },
      {
        name: 'Pilanesberg National Park',
        description: 'Malaria-free Big Five reserve located in an ancient volcanic crater, perfect for family safaris.',
        image: 'https://www.masaimaramigration.com/wp-content/uploads/2021/11/bakukubung-gate-1.jpg',
        location: 'North West Province',
        link: 'https://www.pilanesbergnationalpark.org/'
      },
      {
        name: 'Augrabies Falls',
        description: 'Spectacular waterfall where the Orange River plunges into a granite gorge, creating a dramatic natural spectacle.',
        image: 'https://www.safarisopmaat.nl/uploads/2/0/8/1/20817686/1000pix-tailor-made-safaris-augrabies-falls-7_1_orig.jpg',
        location: 'Northern Cape',
        link: 'https://www.sanparks.org/parks/augrabies/'
      },
      {
        name: 'Kgalagadi Transfrontier Park',
        description: 'Vast semi-desert park shared with Botswana, famous for its red sand dunes and predator sightings.',
        image: 'https://www.sanparks.org/wp-content/uploads/2022/02/2594.jpg',
        location: 'Northern Cape',
        link: 'https://www.sanparks.org/parks/kgalagadi/'
      },
      {
        name: 'Soweto Township',
        description: 'Historic township offering cultural tours, traditional cuisine, and insights into South African urban life.',
        image: 'https://thumbs.dreamstime.com/b/soweto-sign-sign-entrance-soweto-south-johannesburg-south-africa-143554807.jpg',
        location: 'Johannesburg',
        link: 'https://www.soweto.co.za/'
      }
    ],
    transportation: [
      {
        type: 'Luxury Safari Vehicle',
        description: 'Premium 4WD vehicles with professional guides for game drives.',
        price: '$200-400/day',
        route: 'Kruger National Park'
      },
      {
        type: 'Wine Tour Transport',
        description: 'Private chauffeur service for wine estate visits.',
        price: '$150-300/day',
        route: 'Cape Winelands'
      },
      {
        type: 'Blue Train',
        description: 'Luxury train journey between Cape Town and Pretoria.',
        price: '$1500-3000',
        route: 'Cape Town to Pretoria'
      },
      {
        type: 'Helicopter Tours',
        description: 'Scenic helicopter flights over Cape Town and surroundings.',
        price: '$300-800/hour',
        route: 'Cape Town Peninsula'
      }
    ],
    hotels: [
      {
        name: 'One&Only Cape Town',
        description: 'Ultra-luxury resort on a private island with marina views.',
        image: 'https://images.trvl-media.com/lodging/3000000/2450000/2442800/2442736/ae55f5da.jpg?impolicy=resizecrop&rw=1200&ra=fit',
        rating: 5,
        price: '$800-1500',
        location: 'Cape Town',
        bookingLink: 'https://expedia.com/affiliate/aze9GF1'
      },
      {
        name: 'Sabi Sabi Private Game Reserve',
        description: 'Exclusive safari lodge offering luxury accommodations in the wild.',
        image: 'https://sabi.krugerpark.co.za/images/luxury-safari-honeymoon-sabi-sand-fp-500x290.jpg',
        rating: 5,
        price: '$1200-2500',
        location: 'Sabi Sands',
        bookingLink: 'https://www.sabisabi.com/'
      },
      {
        name: 'The Silo Hotel',
        description: 'Luxury boutique hotel in a converted grain silo with panoramic city and harbor views.',
        image: 'https://images.trvl-media.com/lodging/35000000/34760000/34757500/34757476/13ea5b36.jpg?impolicy=resizecrop&rw=1200&ra=fit',
        rating: 5,
        price: '$600-1200',
        location: 'Cape Town',
        bookingLink: 'https://expedia.com/affiliate/cdNeVfL'
      },
      {
        name: 'Singita Kruger National Park',
        description: 'Ultra-luxury safari lodge offering exclusive game viewing and world-class service.',
        image: 'https://images.ctfassets.net/wds1hqrprqxb/41XhrK5QbxfItsqccBxB97/5fc8be1ddd304e438d136b6508ca436f/thumb__1_.jpg?w=1900&h=1069&fl=progressive&q=95&fm=jpg',
        rating: 5,
        price: '$2000-4000',
        location: 'Kruger National Park',
        bookingLink: 'https://singita.com/'
      },
      {
        name: 'Belmond Mount Nelson Hotel',
        description: 'Historic luxury hotel known as the "Pink Lady" with beautiful gardens and Table Mountain views.',
        image: 'https://images.trvl-media.com/lodging/1000000/20000/19500/19437/cef19a46.jpg?impolicy=resizecrop&rw=1200&ra=fit',
        rating: 5,
        price: '$400-800',
        location: 'Cape Town',
        bookingLink: 'https://expedia.com/affiliate/BSYXcjq'
      },
      {
        name: 'Ellerman House',
        description: 'Exclusive boutique hotel with ocean views, private art collection, and personalized service.',
        image: 'https://images.trvl-media.com/lodging/1000000/530000/528600/528567/30b51722.jpg?impolicy=resizecrop&rw=1200&ra=fit',
        rating: 5,
        price: '$700-1400',
        location: 'Cape Town',
        bookingLink: 'https://expedia.com/affiliate/6qVu37U'
      },
      {
        name: 'Londolozi Private Game Reserve',
        description: 'Pioneer of photographic safaris offering luxury tree camp accommodations and exceptional wildlife viewing.',
        image: 'https://lh3.googleusercontent.com/p/AF1QipO1NcRb7wuHq0AKfVLByGrvrrkGdtf_qYdmQoTb=s680-w680-h510-rw',
        rating: 5,
        price: '$1500-3000',
        location: 'Sabi Sands',
        bookingLink: 'https://www.londolozi.com/'
      },
      {
        name: 'La Residence',
        description: 'Luxury boutique hotel in the Franschhoek Valley with vineyard views and world-class spa.',
        image: 'https://images.trvl-media.com/lodging/35000000/34760000/34758400/34758396/60e42a01.jpg?impolicy=resizecrop&rw=1200&ra=fit',
        rating: 5,
        price: '$500-1000',
        location: 'Franschhoek',
        bookingLink: 'https://expedia.com/affiliate/WiIb0sZ'
      },
      {
        name: 'Shamwari Private Game Reserve',
        description: 'Malaria-free Big Five reserve offering luxury safari experiences in the Eastern Cape.',
        image: 'https://lh3.googleusercontent.com/proxy/RiC2pWCmswd0poqY9w_UMBCctjtunGsfHrv84jiIz0TV5YHVugbVUw8t9gwZtU7DfST1H3d19BChVJ8Yrqi3Q1ip0vaKbEcNosBOI-X138CoAbXgPq1jcZ6zG6pQDbYcuN2t8VBfSs5Z2yDeBxNTeQTEGpj5Eg=s680-w680-h510-rw',
        rating: 5,
        price: '$800-1600',
        location: 'Eastern Cape',
        bookingLink: 'https://www.shamwari.com/'
      },
      {
        name: 'The Oyster Box',
        description: 'Iconic beachfront hotel with colonial charm, lighthouse views, and award-winning spa.',
        image: 'https://images.trvl-media.com/lodging/3000000/2940000/2940000/2939964/df8a3926.jpg?impolicy=resizecrop&rw=1200&ra=fit',
        rating: 5,
        price: '$300-600',
        location: 'Durban',
        bookingLink: 'https://expedia.com/affiliate/Ef9rQX8'
      },
      {
        name: 'Tintswalo Atlantic',
        description: 'Luxury tented camp on the beach with dramatic ocean views and Chapman\'s Peak backdrop.',
        image: 'https://images.trvl-media.com/lodging/3000000/2500000/2499400/2499372/6e2bb395.jpg?impolicy=resizecrop&rw=1200&ra=fit',
        rating: 5,
        price: '$600-1200',
        location: 'Cape Town',
        bookingLink: 'https://expedia.com/affiliate/AboYvLt'
      },
      {
        name: 'Ulusaba Private Game Reserve',
        description: 'Richard Branson\'s luxury safari lodge offering exclusive game viewing and rock lodge accommodations.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqqW57MIYfXaL-exFWIevHfI5oDrInQt7dN-xbpdkW5OyAkGTmlN7u_XYHcgQ5ZU5pSkgaYWj85fJBEJJ9b0Q8wylRqXLGTQztw_Ujyecb8W6n18QWfn0VR3tKXqoa-LegeWJKiyg=s680-w680-h510-rw',
        rating: 5,
        price: '$1800-3500',
        location: 'Sabi Sands',
        bookingLink: 'https://www.virginlimitededition.com/en/ulusaba'
      },
      {
        name: 'Steenberg Hotel',
        description: 'Historic wine estate hotel with championship golf course and luxury spa in the Constantia Valley.',
        image: 'https://images.trvl-media.com/lodging/1000000/700000/696000/695944/e3830d01.jpg?impolicy=resizecrop&rw=1200&ra=fit',
        rating: 5,
        price: '$400-800',
        location: 'Cape Town',
        bookingLink: 'https://expedia.com/affiliate/UbM5yZy'
      },
      {
        name: 'Grootbos Private Nature Reserve',
        description: 'Eco-luxury lodge overlooking Walker Bay with whale watching and fynbos conservation focus.',
        image: 'https://lh3.googleusercontent.com/p/AF1QipMffg5tFZrfxghAy3TNqb82earFkvsvc90Teg-m=s680-w680-h510-rw',
        rating: 5,
        price: '$500-1000',
        location: 'Hermanus',
        bookingLink: 'https://www.grootbos.com/'
      },
      {
        name: 'Bushmans Kloof Wilderness Reserve',
        description: 'Luxury wilderness retreat with ancient rock art, spa treatments, and exceptional cuisine.',
        image: 'https://images.trvl-media.com/lodging/1000000/490000/487300/487237/2be9c18a.jpg?impolicy=resizecrop&rw=1200&ra=fit',
        rating: 5,
        price: '$800-1600',
        location: 'Cederberg',
        bookingLink: 'https://expedia.com/affiliate/LHrCL3p'
      },
      {
        name: 'Delaire Graff Estate',
        description: 'Luxury wine estate with panoramic mountain views, world-class spa, and fine dining restaurant.',
        image: 'https://images.trvl-media.com/lodging/5000000/4890000/4886800/4886712/044ebed5.jpg?impolicy=resizecrop&rw=1200&ra=fit',
        rating: 5,
        price: '$600-1200',
        location: 'Stellenbosch',
        bookingLink: 'https://expedia.com/affiliate/VdytXhC'
      },
      {
        name: 'Kurland Hotel',
        description: 'Luxury country estate hotel with polo fields, spa, and elegant accommodations in the Garden Route.',
        image: 'https://images.trvl-media.com/lodging/7000000/6500000/6493400/6493303/13338cb7.jpg?impolicy=resizecrop&rw=1200&ra=fit',
        rating: 5,
        price: '$400-800',
        location: 'Plettenberg Bay',
        bookingLink: 'https://expedia.com/affiliate/fWNgoXU'
      },
      {
        name: 'Thanda Safari',
        description: 'Exclusive safari lodge in KwaZulu-Natal offering Big Five game viewing and luxury accommodations.',
        image: 'https://images.trvl-media.com/lodging/8000000/7330000/7322400/7322311/00b8b7c6.jpg?impolicy=resizecrop&rw=1200&ra=fit',
        rating: 5,
        price: '$1000-2000',
        location: 'KwaZulu-Natal',
        bookingLink: 'https://expedia.com/affiliate/X5rxTDh'
      },
      {
        name: 'Fancourt Hotel',
        description: 'Luxury resort with championship golf courses, spa, and elegant accommodations in the Garden Route.',
        image: 'https://images.trvl-media.com/lodging/1000000/120000/119500/119414/3928ded8.jpg?impolicy=resizecrop&rw=1200&ra=fit',
        rating: 5,
        price: '$300-600',
        location: 'George',
        bookingLink: 'https://expedia.com/affiliate/OQuxscw'
      },
      {
        name: 'Twelve Apostles Hotel',
        description: 'Luxury boutique hotel with dramatic ocean views, world-class spa, and proximity to Table Mountain.',
        image: 'https://images.trvl-media.com/lodging/1000000/550000/548900/548889/c96704b9.jpg?impolicy=resizecrop&rw=1200&ra=fit',
        rating: 5,
        price: '$500-1000',
        location: 'Cape Town',
        bookingLink: 'https://expedia.com/affiliate/fYZx3Gq'
      }
    ],
    restaurants: [
      {
        name: 'La Colombe',
        cuisine: 'Contemporary South African cuisine with international influences.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4noe7vHeJqFPDEKJvpt8DFmfeG_yLoBhB43o6AmbxoJ30rZQyw5MlW8w-YF5w3YraxEAo_Quw8_VMQG3evdJNtlDTpyBoqeDh2CLC0qGU2EW6l8PpjxgLoTPwYxM0199nLOJRyYs=s680-w680-h510-rw',
        rating: 5,
        priceRange: '$50-100',
        location: 'Constantia',
        link: 'https://www.lacolombe.co.za/'
      },
      {
        name: 'The Test Kitchen',
        cuisine: 'Award-winning restaurant featuring modern South African dishes.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4npu9mJoV776wrafGhX8Q-5cMFc_4m85VFEG_P64Gz_7mk4A2dQinMvpWIYbDGaXeuEhMXYJw0UhMuaAMokKoWqFW2bo6uE72CUpyAHjFYkHuK31OD93eDSq64SECWGtcskUNciv=s680-w680-h510-rw',
        rating: 5,
        priceRange: '$80-150',
        location: 'Cape Town',
        link: 'https://ttkfledgelings.co.za/'
      },
      {
        name: 'Greenhouse at Cellars-Hohenort',
        cuisine: 'Fine dining restaurant with innovative cuisine and beautiful garden setting.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4np3Ktg8LDu1qib_KpP9qcbKU9LWY9B6CNAs7fsqdoVg5SuAH53mwEGo5GMgp4bW5fDzSTUCCj2Lqjd0xgfKnFgI_-QZaS0fAXpJY9eFQPGPa_uxxFi2l0hBAr7LYqwddA6GVjnD5A=s680-w680-h510-rw',
        rating: 5,
        priceRange: '$60-120',
        location: 'Constantia',
        link: 'https://www.thecellars-hohenorthotel.com/restaurants-bars/conservatory-bar/'
      },
      {
        name: 'Pot Luck Club',
        cuisine: 'Contemporary tapas-style dining with panoramic city views from the top floor.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nq7f5MUrZ31HCu4wuCq9qJGf9-ARs4OFTWPH2oUkCtOGhMLshlSDAULtZri6VlFnvN4TUITwxKt9QEdwTgdfibFQcWgEw-Z0MwZY4TNMF1_FyPrnBX5o9MUh36B03Y2WXAszqs=s680-w680-h510-rw',
        rating: 5,
        priceRange: '$45-90',
        location: 'Cape Town',
        link: 'https://thepotluckclub.co.za/'
      },
      {
        name: 'Chefs Warehouse & Canteen',
        cuisine: 'Innovative small plates and charcuterie in a relaxed, contemporary setting.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrE0o7ZTqa2hC1A5aBjQAj72I1kGpvyGV0BmfgtVyuK_yvXMsuCyEXgkICxNJVTbKF8PWYLp7RtEppY5JmsZq76qQ5Fafw1F59ZEnsiVkKWM0NvNzmMEgHqNRaNjrrxdxJlXp33pzs3RVKK=s680-w680-h510-rw',
        rating: 4,
        priceRange: '$35-70',
        location: 'Cape Town',
        link: 'https://www.chefswarehouse.co.za/'
      },
      {
        name: 'Nobu Cape Town',
        cuisine: 'World-renowned Japanese cuisine with South African influences and ocean views.',
        image: 'https://www.top25restaurants.com/media/img/2025/02/bangkok-best-restaurants-nobu-bangkok-peruvian-japanese-at-top-25-restaurants.jpg',
        rating: 5,
        priceRange: '$70-140',
        location: 'Cape Town',
        link: 'https://noburestaurants.com/capetown/home'
      },
      {
        name: 'Kloof Street House',
        cuisine: 'Eclectic international menu in a beautifully restored Victorian house with garden dining.',
        image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/29/61/ff/entrance.jpg?w=900&h=500&s=1',
        rating: 4,
        priceRange: '$30-60',
        location: 'Cape Town',
        link: 'https://www.kloofstreethouse.co.za/'
      },
      {
        name: 'Babel at Babylonstoren',
        cuisine: 'Farm-to-table dining featuring ingredients from the estate\'s historic garden.',
        image: 'https://velvetescape.com/wp-content/uploads/2013/04/Babel.Babylonstoren_LezaanRoosv1.jpg',
        rating: 5,
        priceRange: '$40-80',
        location: 'Paarl',
        link: 'https://www.babylonstoren.com/babel'
      },
      {
        name: 'Wolfgat',
        cuisine: 'Indigenous cuisine showcasing local ingredients from the West Coast in a unique cave setting.',
        image: 'https://www.ktchnrebel.com/wp-content/uploads/2020/01/Header-Wolfgat_%C2%A9Ilona-Marx.jpg',
        rating: 5,
        priceRange: '$50-100',
        location: 'Paternoster',
        link: 'https://www.wolfgat.co.za/'
      },
      {
        name: 'Fyn Restaurant',
        cuisine: 'Modern South African cuisine celebrating local ingredients and traditional cooking methods.',
        image: 'https://crushmag-online.com/wp-content/uploads/2018/12/FYN-Restaurant-6.jpg',
        rating: 5,
        priceRange: '$55-110',
        location: 'Cape Town',
        link: 'https://www.fynrestaurant.com/'
      },
      {
        name: 'Aubergine Restaurant',
        cuisine: 'Contemporary European cuisine with South African influences in an elegant setting.',
        image: 'https://lh3.googleusercontent.com/p/AF1QipOe48ZfoEgkADlIF3Akksb9O6eDJNk20m5zGlF5=s680-w680-h510-rw',
        rating: 4,
        priceRange: '$40-80',
        location: 'Cape Town',
        link: 'https://www.aubergine.co.za/'
      },
      {
        name: 'Boschendal Farm Restaurant',
        cuisine: 'Traditional South African cuisine in a historic wine estate setting with mountain views.',
        image: 'https://boschendal.com/wp-content/uploads/2025/07/Boschendal_Aug312022_0376-Edit.jpg',
        rating: 4,
        priceRange: '$35-70',
        location: 'Franschhoek',
        link: 'https://boschendal.com/?utm_source=google_maps&utm_medium=website_button&utm_campaign=SP&utm_content=SP'
      },
      {
        name: 'Rust en Vrede Restaurant',
        cuisine: 'Award-winning fine dining restaurant on a historic wine estate with innovative cuisine.',
        image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/b6/0c/ab/restaurant-in-original.jpg?w=900&h=500&s=1',
        rating: 5,
        priceRange: '$60-120',
        location: 'Stellenbosch',
        link: 'https://www.rustenvrede.com/'
      },
      {
        name: 'Salsify at The Roundhouse',
        cuisine: 'Contemporary cuisine with stunning mountain and ocean views in a historic setting.',
        image: 'https://www.theworlds50best.com/discovery/filestore/jpg/Salsify_Interior.jpg',
        rating: 4,
        priceRange: '$45-90',
        location: 'Cape Town',
        link: 'https://salsify.co.za/'
      },
      {
        name: 'Marble Restaurant',
        cuisine: 'Fine dining restaurant showcasing contemporary South African cuisine with wine pairings.',
        image: 'http://t2.gstatic.com/images?q=tbn:ANd9GcT56-uPLvGkHihkXQS3WKtKo66qtAqI7mywlb320kSRNwwq5qXJ8SRZ5GYnd27KyA',
        rating: 5,
        priceRange: '$50-100',
        location: 'Stellenbosch',
        link: 'https://marble.restaurant/capetown/menu/seafood/'
      },
      {
        name: 'Gold Restaurant',
        cuisine: 'French-inspired bistro cuisine with a South African twist in a charming neighborhood setting.',
        image: 'https://lh3.googleusercontent.com/p/AF1QipNkL-d908woja4F3nx3ogn_6w_OIx6kBdRkecZv=s680-w680-h510-rw',
        rating: 4,
        priceRange: '$30-60',
        location: 'Cape Town',
        link: 'https://goldrestaurant.co.za/'
      },
      {
        name: 'Harbour House',
        cuisine: 'Seafood restaurant with panoramic ocean views and fresh catches from local waters.',
        image: 'https://www.harbourhouse.co.za/wp-content/uploads/2023/10/Waterfront-3.webp',
        rating: 4,
        priceRange: '$40-80',
        location: 'Cape Town',
        link: 'https://www.harbourhouse.co.za/'
      },
      {
        name: 'Catharina\'s Restaurant',
        cuisine: 'Fine dining restaurant at Steenberg Estate featuring contemporary cuisine and wine pairings.',
        image: 'https://www.rjontour.com/wp-content/uploads/2021/06/Bars-Constanta-Romania.jpg.webp',
        rating: 5,
        priceRange: '$55-110',
        location: 'Constantia',
        link: 'https://steenbergfarm.com/tryn-cape-town-contemporary-restaurant/'
      },
      {
        name: 'Spice Route Destination',
        cuisine: 'Multiple restaurants showcasing diverse cuisines in a unique spice-themed setting.',
        image: 'https://crushmag-online.com/wp-content/uploads/2023/12/Spice-Route-Destination_entrance_1x65.jpg',
        rating: 4,
        priceRange: '$25-50',
        location: 'Paarl',
        link: 'https://www.spiceroute.co.za/'
      },
      {
        name: 'Belly of the beast',
        cuisine: 'Contemporary cuisine with panoramic views from the top of Signal Hill overlooking Cape Town.',
        image: 'https://lh3.googleusercontent.com/p/AF1QipMIWJTpe5kBQnEwimgbqbniADz4obmzMIj92ptG=s680-w680-h510-rw',
        rating: 4,
        priceRange: '$35-70',
        location: 'Cape Town',
        link: 'https://bellyofthebeast.co.za/'
      }
    ]
  },
  {
    name: 'Kenya',
    description: 'Witness the Great Migration and explore diverse ecosystems from the Maasai Mara to pristine Indian Ocean beaches.',
    image: 'https://ole-sereni.com/wp-content/uploads/2023/05/history-of-Kenya-at-Uhuru-Gardens-in-Nairobi-1024x640.jpg',
    population: '56.43 million',
    attractions: [
      {
        name: 'Maasai Mara National Reserve',
        description: 'World-famous safari destination and home to the Great Migration.',
        image: 'https://tanzaniaemotionsafaris.com/wp-content/uploads/2021/09/Serengeti_gallery_0.jpg',
        location: 'Narok County',
        link: 'https://www.maasaimara.com/'
      },
      {
        name: 'Mount Kenya',
        description: 'Africa\'s second-highest peak offering challenging climbs and stunning scenery.',
        image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/b9/18/38/caption.jpg?w=1200&h=-1&s=1',
        location: 'Central Kenya',
        link: 'https://whc.unesco.org/en/list/800/'
      },
      {
        name: 'Amboseli National Park',
        description: 'Famous for its large elephant herds and spectacular views of Mount Kilimanjaro.',
        image: 'https://www.amboseliparkkenya.com/wp-content/uploads/2020/06/Amboseli-park-gates.jpg',
        location: 'Kajiado County',
        link: 'https://www.kws.go.ke/amboseli-national-park'
      },
      {
        name: 'Tsavo National Parks',
        description: 'Kenya\'s largest national park, famous for red elephants and diverse wildlife.',
        image: 'https://www.tsavonationalparkkenya.com/wp-content/uploads/2022/02/Twsa.jpg',
        location: 'Coast Province',
        link: 'https://www.kws.go.ke/tsavo-east-national-park'
      },
      {
        name: 'Lake Nakuru National Park',
        description: 'Famous for its flamingo populations and rhino sanctuary.',
        image: 'https://www.lakenakurukenya.com/wp-content/uploads/2020/08/Gates-in-Lake-Nakuru-National-Park-scaled.jpg',
        location: 'Nakuru County',
        link: 'https://www.kws.go.ke/lake-nakuru-national-park'
      },
      {
        name: 'Samburu National Reserve',
        description: 'Semi-arid reserve known for unique wildlife species and Samburu culture.',
        image: 'https://zungukasafaris.com/wp-content/uploads/2025/08/Samburu-National-Reserve.jpg',
        location: 'Samburu County',
        link: 'https://www.samburureserve.com/park-entry-fees.php'
      },
      {
        name: 'Diani Beach',
        description: 'Pristine white sand beach with coral reefs and luxury resorts.',
        image: 'https://tripsasa.com/wp-content/uploads/2024/07/Diani-Kenya-1536x1046.png',
        location: 'Kwale County',
        link: 'https://www.dianibeachmombasa.com/'
      },
      {
        name: 'Lamu Old Town',
        description: 'UNESCO World Heritage site showcasing Swahili architecture and culture.',
        image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/ba/95/40/the-old-town-of-lamu.jpg?w=900&h=500&s=1',
        location: 'Lamu County',
        link: 'https://magicalkenya.com/unesco/lamu-old-town/'
      },
      {
        name: 'Hell\'s Gate National Park',
        description: 'Unique park where visitors can walk and cycle among wildlife.',
        image: 'https://naturepathtravels.com/wp-content/uploads/2022/08/Hells-Gate-National-Park-Entry-Fees-636x400.jpeg',
        location: 'Nakuru County',
        link: 'https://www.kws.go.ke/hells-gate-national-park'
      },
      {
        name: 'Aberdare National Park',
        description: 'Mountain park with waterfalls, bamboo forests, and tree hotels.',
        image: 'https://www.amboseliparkkenya.com/wp-content/uploads/2022/04/30746444623_852b8dcccd_k.jpg',
        location: 'Central Kenya',
        link: 'https://www.aberdarenationalparks.com/'
      },
      {
        name: 'Mombasa Old Town',
        description: 'Historic coastal town with Portuguese and Arab influences.',
        image: 'https://sunsetexperiencetours.com/wp-content/uploads/2022/03/Old-town.jpg',
        location: 'Mombasa County',
        link: 'https://www.magicalkenya.com/places-to-visit/coast/mombasa/'
      },
      {
        name: 'Lake Naivasha',
        description: 'Freshwater lake perfect for boat rides and hippo watching.',
        image: 'https://afrikasafari.nl/wp-content/uploads/sites/5/2024/03/Lake-Naivasha_Hero-Banner_IIpng.png',
        location: 'Nakuru County',
        link: 'https://www.magicalkenya.com/places-to-visit/rift-valley/lake-naivasha/'
      },
      {
        name: 'Ol Pejeta Conservancy',
        description: 'Private conservancy home to the last northern white rhinos.',
        image: 'https://ajmtoursandsafariskenya.com//images/national-parks/fe075c1d-0647-43b1-adef-c48c845b61e7/fe075c1d-0647-43b1-adef-c48c845b61e7.webp',
        location: 'Laikipia County',
        link: 'https://www.olpejetaconservancy.org/'
      },
      {
        name: 'Watamu Marine National Park',
        description: 'Marine park with coral reefs, sea turtles, and pristine beaches.',
        image: 'https://www.ahotsunsafaris.com/wp-content/uploads/2019/03/malindi-marine-park.jpg',
        location: 'Kilifi County',
        link: 'https://www.kws.go.ke/'
      },
      {
        name: 'Meru National Park',
        description: 'Remote park famous for Elsa the lioness and diverse landscapes.',
        image: 'https://media-cdn.tripadvisor.com/media/photo-s/05/15/46/69/ikweta-safari-camp.jpg',
        location: 'Meru County',
        link: 'https://www.kws.go.ke/meru-national-park'
      },
      {
        name: 'Kakamega Forest',
        description: 'Last remnant of tropical rainforest in Kenya with unique bird species.',
        image: 'https://africanspicesafaris.com/wp-content/uploads/2020/06/kakamega-rain-forest-tour.jpg',
        location: 'Kakamega County',
        link: 'https://www.kws.go.ke/kakamega-forest-national-reserve'
      },
      {
        name: 'Malindi Marine National Park',
        description: 'Coastal park with coral gardens and historical Portuguese ruins.',
        image: 'https://www.ahotsunsafaris.com/wp-content/uploads/2019/03/malindi-marine-park.jpg',
        location: 'Kilifi County',
        link: 'https://www.kws.go.ke/malindi-marine-national-park-reserve'
      },
      {
        name: 'Shimba Hills National Reserve',
        description: 'Coastal forest reserve home to rare sable antelopes.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/1/10/Gate_Shimba_Hills.JPG',
        location: 'Kwale County',
        link: 'https://www.kws.go.ke/shimba-hills-national-reserve'
      },
      {
        name: 'Chyulu Hills National Park',
        description: 'Volcanic hills with stunning views of Mount Kilimanjaro.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy57aATIaHf1U-4D1rrDAsdfjt_E3Hr0S5vg&s',
        location: 'Makueni County',
        link: 'https://www.kws.go.ke/chyulu-national-park'
      },
      {
        name: 'Kisite-Mpunguti Marine National Park',
        description: 'Marine park near Wasini Island with dolphin watching and snorkeling.',
        image: 'https://www.focuseastafricatours.com/wp-content/uploads/Kisite-Mpunguti-Marine-National-Park-Reserve-Entry-Fees.jpeg',
        location: 'Kwale County',
        link: 'https://www.kws.go.ke/kisite-mpunguti-marine-park-reserve'
      }
    ],
    transportation: [
      {
        type: 'Safari Game Drive',
        description: 'Professional guided game drives in luxury safari vehicles.',
        price: '$300-600/day',
        route: 'Maasai Mara'
      },
      {
        type: 'Domestic Flights',
        description: 'Charter flights between safari destinations and coastal areas.',
        price: '$200-500',
        route: 'Nairobi to Maasai Mara'
      },
      {
        type: 'Coastal Transfers',
        description: 'Luxury transfers between Mombasa airport and beach resorts.',
        price: '$50-150',
        route: 'Mombasa to Diani Beach'
      },
      {
        type: 'Hot Air Balloon',
        description: 'Scenic balloon flights over the Maasai Mara.',
        price: '$400-600',
        route: 'Maasai Mara'
      }
    ],
    hotels: [
      {
        name: 'Angama Mara',
        description: 'Luxury tented camp overlooking the Maasai Mara.',
        image: 'https://b-cdn.springnest.com/media/img/xc/angama-mara-lodge-firepit-logo_16324395.jpg?crop=2000%2C1235%2C0%2C32&width=1240',
        rating: 5,
        price: '$1500-3000',
        location: 'Maasai Mara',
        bookingLink: 'https://www.angama.com/'
      },
      {
        name: 'Giraffe Manor',
        description: 'Unique boutique hotel where giraffes visit for breakfast.',
        image: 'https://www.thesafaricollection.com/wp-content/uploads/2018/12/The-Safari-Collection-ariel-shot-of-giraffe-manor.jpg',
        rating: 5,
        price: '$800-1600',
        location: 'Nairobi',
        bookingLink: 'https://www.thesafaricollection.com/properties/giraffe-manor/'
      },
      {
        name: 'Fairmont Mara Safari Club',
        description: 'Luxury tented camp on the banks of the Mara River.',
        image: 'https://images.goway.com/production/hero_image/Fairmont%20Mount%20Kanya%20Safari%20Club_Supplier.jpg?VersionId=3hYMcfk.rlQQwQXWVsjxdRPwBbj05PdT',
        rating: 5,
        price: '$600-1200',
        location: 'Maasai Mara',
        bookingLink: 'https://expedia.com/affiliate/4ig6xtV'
      },
      {
        name: 'Alfajiri Villas',
        description: 'Exclusive beachfront villas with private beaches and butler service.',
        image: 'https://www.africanmeccasafaris.com/wp-content/uploads/alfajirivillas2.jpg',
        rating: 5,
        price: '$1200-2500',
        location: 'Diani Beach',
        bookingLink: 'https://www.fairmont.com/en.html'
      },
      {
        name: 'Sarova Mara Game Camp',
        description: 'Luxury tented camp in the heart of the Maasai Mara.',
        image: 'https://c8.alamy.com/zooms/9/31a6615631a5410aaa546a765133006d/py0n28.jpg',
        rating: 4,
        price: '$400-800',
        location: 'Maasai Mara',
        bookingLink: 'https://expedia.com/affiliate/v4kpjxA'
      },
      {
        name: 'Hemingways Nairobi',
        description: 'Boutique hotel in Karen with colonial charm and modern luxury.',
        image: 'https://images.trvl-media.com/lodging/6000000/5290000/5281800/5281715/2fb9d9b9.jpg?impolicy=resizecrop&rw=1200&ra=fit',
        rating: 5,
        price: '$300-600',
        location: 'Nairobi',
        bookingLink: 'https://expedia.com/affiliate/865TEav'
      },
      {
        name: 'Kirawira Serena Camp',
        description: 'Luxury tented camp with Edwardian safari elegance.',
        image: 'https://lh3.googleusercontent.com/p/AF1QipP2JOmBk6lr76tSTYSCF617AMwkt-rEG_HUCamS=s680-w680-h510-rw',
        rating: 5,
        price: '$800-1600',
        location: 'Maasai Mara',
        bookingLink: 'https://www.serenahotels.com/'
      },
      {
        name: 'The Sands at Nomad',
        description: 'Beachfront resort with Swahili architecture and pristine beaches.',
        image: 'https://images.trvl-media.com/lodging/10000000/9830000/9827200/9827131/ad6e2675.jpg?impolicy=resizecrop&rw=1200&ra=fit',
        rating: 4,
        price: '$400-800',
        location: 'Diani Beach',
        bookingLink: 'https://expedia.com/affiliate/gP76uiv'
      },
      {
        name: 'Ol Donyo Lodge',
        description: 'Luxury eco-lodge with stunning views of Mount Kilimanjaro.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrFAo5MxsrU3iQAUJh_irRUgFrUdz36COgfFjs0W1k7Jl-ZSERueBY3XYRa6-u6d8yp8QXV0SaDyREfkeGsYx9xvzHatzvZSNLBrpSsoyPL9ZitZ3VI8Ybv--YVEXqPLkSu0Rc=s680-w680-h510-rw',
        rating: 5,
        price: '$1000-2000',
        location: 'Chyulu Hills',
        bookingLink: 'https://www.greatplainsconservation.com/ol-donyo-lodge'
      },
      {
        name: 'Finch Hattons Luxury Tented Camp',
        description: 'Luxury safari camp in Tsavo West with spa and fine dining.',
        image: 'https://lh3.googleusercontent.com/p/AF1QipMwS0mAD_Bwwrokw0by4rRqFcXLxBuEb5AN-wA6=s680-w680-h510-rw',
        rating: 5,
        price: '$600-1200',
        location: 'Tsavo West',
        bookingLink: 'https://www.finchhattons.com/'
      },
      {
        name: 'Peponi Hotel',
        description: 'Charming beachfront hotel on Lamu Island with Swahili hospitality.',
        image: 'https://images.trvl-media.com/lodging/47000000/46530000/46522700/46522668/dcba550d.jpg?impolicy=resizecrop&rw=1200&ra=fit',
        rating: 4,
        price: '$200-400',
        location: 'Lamu',
        bookingLink: 'https://expedia.com/affiliate/rQ1eyrX'
      },
      {
        name: 'Elsa\'s Kopje',
        description: 'Luxury lodge built into a rocky kopje in Meru National Park.',
        image: 'https://images.trvl-media.com/lodging/18000000/17530000/17527700/17527648/c3a077f4.jpg?impolicy=resizecrop&rw=1200&ra=fit',
        rating: 5,
        price: '$800-1600',
        location: 'Meru National Park',
        bookingLink: 'https://expedia.com/affiliate/6sAoF9i'
      },
      {
        name: 'Tortilis Camp',
        description: 'Luxury tented camp with views of Mount Kilimanjaro in Amboseli.',
        image: 'https://images.trvl-media.com/lodging/18000000/17520000/17518300/17518275/d270cac0.jpg?impolicy=resizecrop&rw=1200&ra=fit',
        rating: 5,
        price: '$700-1400',
        location: 'Amboseli',
        bookingLink: 'https://expedia.com/affiliate/XN08eCJ'
      },
      {
        name: 'Samburu Intrepids',
        description: 'Luxury tented camp on the banks of the Ewaso Nyiro River.',
        image: 'https://images.trvl-media.com/lodging/5000000/4290000/4280200/4280161/7c929ff8.jpg?impolicy=resizecrop&rw=1200&ra=fit',
        rating: 4,
        price: '$500-1000',
        location: 'Samburu',
        bookingLink: 'https://expedia.com/affiliate/oPJ0Ztj'
      },
      {
        name: 'Msambweni Beach House',
        description: 'Exclusive beachfront villa with private beach and personalized service.',
        image: 'https://images.trvl-media.com/lodging/37000000/36660000/36655600/36655574/b4f07aed.jpg?impolicy=resizecrop&rw=1200&ra=fit',
        rating: 5,
        price: '$1000-2000',
        location: 'South Coast',
        bookingLink: 'https://expedia.com/affiliate/pxNfkEa'
      },
      {
        name: 'Lake Naivasha Sopa Resort',
        description: 'Lakeside resort with beautiful gardens and hippo watching.',
        image: 'https://images.trvl-media.com/lodging/90000000/89270000/89269700/89269624/b0f148d2.jpg?impolicy=resizecrop&rw=1200&ra=fit',
        rating: 4,
        price: '$200-400',
        location: 'Lake Naivasha',
        bookingLink: 'https://expedia.com/affiliate/K2VxZWV'
      },
      {
        name: 'Baobab Beach Resort',
        description: 'All-inclusive beachfront resort with multiple pools and restaurants.',
        image: 'https://images.trvl-media.com/lodging/14000000/13210000/13207800/13207728/w1370h762x0y0-c12e51c1.jpg?impolicy=resizecrop&rw=1200&ra=fit',
        rating: 4,
        price: '$300-600',
        location: 'Diani Beach',
        bookingLink: 'https://expedia.com/affiliate/AoEh8ds'
      },
      {
        name: 'Sweetwaters Serena Camp',
        description: 'Luxury safari camp overlooking Mount Kenya and Ol Pejeta Conservancy.',
        image: 'https://images.trvl-media.com/lodging/4000000/3290000/3284500/3284478/e9e08d96.jpg?impolicy=resizecrop&rw=1200&ra=fit',
        rating: 4,
        price: '$400-800',
        location: 'Ol Pejeta',
        bookingLink: 'https://expedia.com/affiliate/Keu1Nuw'
      },
      {
        name: 'Ocean Beach Resort',
        description: 'Beachfront resort with Swahili architecture and water sports.',
        image: 'https://images.trvl-media.com/lodging/5000000/4630000/4621100/4621010/4a577048.jpg?impolicy=resizecrop&rw=1200&ra=fit',
        rating: 4,
        price: '$250-500',
        location: 'Malindi',
        bookingLink: 'https://expedia.com/affiliate/j7J0Wmb'
      },
      {
        name: 'Mara Serena Safari Lodge',
        description: 'Hilltop lodge with panoramic views of the Maasai Mara plains.',
        image: 'https://images.trvl-media.com/lodging/1000000/530000/527000/526955/e0c021aa.jpg?impolicy=resizecrop&rw=1200&ra=fit',
        rating: 4,
        price: '$300-600',
        location: 'Maasai Mara',
        bookingLink: 'https://expedia.com/affiliate/YRhkvP1'
      }
    ],
    restaurants: [
      {
        name: 'Talisman Restaurant',
        cuisine: 'International cuisine with African influences.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4noH2gBYHOXjNFjj5nxMbDA6PbrWLM3VVMH4W_32UxDU3S8qmSeBwZ0I4MeJKph_bj07XF2HnhxcOtqjQ8VMetP_nq3IKIwk69fwh6-bzVfwR6DcLUw6E7cntMQjIlrrzXte6-A=s680-w680-h510-rw',
        rating: 4,
        priceRange: '$25-50',
        location: 'Nairobi',
        link: 'https://www.talismanrestaurant.com/'
      },
      {
        name: 'Carnivore Restaurant',
        cuisine: 'Famous for its all-you-can-eat meat experience and exotic game meats.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqnCHA4LjDKfs_XaelqcF8npFNb4as-jo0qUS2L0YE3XtizyduilR5-_H0EmWZXu31_lqk807K_2uTWN0CxXCn8fuYbeyhxUdmNbx5qmZQtAGCikESlO6ODXj7BjShXnjBHYMo-z2Vgy-KD=s680-w680-h510-rw',
        rating: 4,
        priceRange: '$30-60',
        location: 'Nairobi',
        link: 'https://www.tamarind.co.ke/carnivore/'
      },
      {
        name: 'Tamarind Restaurant',
        cuisine: 'Upscale seafood restaurant with dhow dinner cruises.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4noFOCmPBdN_zht4gwzqTgyLOIy4LEmhdaTiaPpwV-VBH9N2oyLjX1slw3dCFC1s75rjz3HwF4b_iU2JOFnDrUim8MZGPKqqgJ4-T9D3HJ41PQTOJaYe1ksjli-T4Qoclat2QcSQoA=s680-w680-h510-rw',
        rating: 5,
        priceRange: '$35-70',
        location: 'Mombasa',
        link: 'https://www.tamarind.co.ke/'
      },
      {
        name: 'Lord Erroll Gourmet Restaurant',
        cuisine: 'Fine dining with international cuisine in an elegant colonial setting.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4npQTWvtX4r3cV7-dn2QnHPEhMURwH242N4gNtogmr904zAiTCDI2pWnaxfp0oBFpVR0Q80v-yktI2WV6dxup1LCTh-7obrPZtbLzi4VfYu3OlsLqKmwOTq0kWHdIUuhOzY7uC7O=s680-w680-h510-rw',
        rating: 5,
        priceRange: '$40-80',
        location: 'Nairobi',
        link: 'https://www.lorderr oll.com/'
      },
      {
        name: 'Zen Garden Restaurant',
        cuisine: 'Asian fusion cuisine with beautiful garden setting.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4noPy_qQ3ggaufGTo18ht1qufUiRpeqmfSKeEmJqdE1icIOEc6v7jV2uHwJLrqnf1DeGMzGCpFb5G7BtElbwVcXDCkCv6vBxZRFCFpxuE-FxSwRUzVqxc-YlX6R9rigmCb-1fcqpfg=s680-w680-h510-rw',
        rating: 4,
        priceRange: '$20-40',
        location: 'Nairobi',
        link: 'https://www.zengarden.co.ke/'
      },
      {
        name: 'Hashmi BBQ',
        cuisine: 'Authentic Pakistani and Indian cuisine with tandoor specialties.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrR3adQOlk5_IT7t4mo4eG1qQsxZCfMxrqzgMl7B6YIpeHDdy_zIY4NZ7U_Ss2CiUAGXVCzgDracfFnqLRU9ujRzFIJx6NJAW-ezFYeV28x3GGmGJ9mxWr_1KwXB4NcKQrGm_ljVQ=s680-w680-h510-rw',
        rating: 4,
        priceRange: '$15-30',
        location: 'Nairobi',
        link: 'https://share.google/KR5OxYP2aORaqFCNB'
      },
      {
        name: 'Mama Oliech Restaurant',
        cuisine: 'Traditional Kenyan cuisine specializing in fish dishes.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqCgfvzJb2skpxTvTUkjMI_FFSI8PNXzvy7T-wjYW3T0d0u4la31v4k-_Xcl6x7UF8VMHJRXI17ljT6wmkqCzsPRPShTaouI57JyxgwtYAeJuhiVtlfviBYeWXdQ67Sfzwcn2w=s680-w680-h510-rw',
        rating: 4,
        priceRange: '$10-25',
        location: 'Nairobi',
        link: 'https://share.google/d8Wapzrl3TLOnsoZb'
      },
      {
        name: 'Artcaffe',
        cuisine: 'Contemporary cafe chain with international dishes and excellent coffee.',
        image: 'https://safaricentres.com/wp-content/uploads/2024/08/Artcaffe-out.jpg',
        rating: 4,
        priceRange: '$12-25',
        location: 'Multiple locations',
        link: 'https://www.artcaffe.co.ke/'
      },
      {
        name: 'Mediterraneo Restaurant',
        cuisine: 'Italian and Mediterranean cuisine with fresh ingredients.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4npdQG8NnyyWRUkQBpF2dcZs_c0YbYB5FXPGuRDpVNJdYGgaFcf_J6gMOiz2r8q4pJiTmTt5B0AIirSTv4InlqXccjgxNR9KvPgem49P2qPAUzdooJnTZPZnTrnKU3u0pJs0E8A=s680-w680-h510-rw',
        rating: 4,
        priceRange: '$18-35',
        location: 'Nairobi',
        link: 'https://www.mediterraneorestaurant.co.ke/'
      },
      {
        name: 'Fogo Gaucho',
        cuisine: 'Brazilian steakhouse with rodizio-style meat service.',
        image: 'https://cdn.tripinafrica.com/600x400/places/fogo-gaucho-7gBbrhWPpL.jpg',
        rating: 4,
        priceRange: '$25-50',
        location: 'Nairobi',
        link: 'https://www.fogogaucho.co.ke/'
      },
      {
        name: 'Mawimbi Seafood',
        cuisine: 'Modern African cuisine with contemporary presentation.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nodABwCo11x4X3GN6gLuIq1VQChv1_uXLvnFadQR_TakbwgJlIx9jGBsLE2AsNGX6ptWW72FANkbEr5F3V_8Jt64mgnXBVwgYqSJ0eNjrJU4BG2SyWUa2AaYMWiOx-gjxGbZNpH=s680-w680-h510-rw',
        rating: 4,
        priceRange: '$15-30',
        location: 'Nairobi',
        link: 'https://www.mawimbirestaurant.com/'
      },
      {
        name: 'Tin Roof Cafe',
        cuisine: 'Casual dining with international menu, pastries, and coffee in a relaxed setting.',
        image: 'https://images.squarespace-cdn.com/content/v1/5a127d79017db2e2b0be7947/1512474742570-SGYXH2Y1Q8Z3460O4KNV/Tin+Roof+Cafe+Langata.jpg',
        rating: 4,
        priceRange: '$12-25',
        location: 'Nairobi',
        link: 'https://www.tinroof.cafe/'
      },
      {
        name: 'Siam Thai Restaurant',
        cuisine: 'Authentic Thai cuisine with traditional flavors and spices.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4noKcermTKyoEOmYFttE-X1RMm5nCikH_8Op4i6zb7dOTQnk6in-wsJY3ABJ5nL6GvTXEYLeOFOzd7MxYtlFNh0ErWemV2_tMeh25dhRqaiXl2VZy4U0fr62naQ1yF5e6Pkvtk4TMA=s680-w680-h510-rw',
        rating: 4,
        priceRange: '$18-35',
        location: 'Nairobi',
        link: 'https://share.google/33dAC9Awv1iB0rUDw'
      },
      {
        name: 'Jiko Restaurant',
        cuisine: 'Contemporary African cuisine with fusion influences.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrrD-IilZxrSZop4o9oKbgxONRMZQ0bj3TfvtxXvKwgirdsP_y2NwDAprC4Mdw4JNbYCycp-OIMTGTDIJgC-OWfVaKbeFRgpSKseRgp1yNa0FBWt6vG82B2K94h8_wzfnpbdz95=s680-w680-h510-rw',
        rating: 4,
        priceRange: '$20-40',
        location: 'Nairobi',
        link: 'https://www.jikoafrica.com/'
        
      },
      {
        name: 'Haandi Restaurant',
        cuisine: 'North Indian cuisine with traditional tandoor cooking.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4npvNwhYYBVXokhDYzedoL_iBNSWojJIrEL-WGhIyxZfCIvSv7LlGS1CqdL4GwLvyPJaTyM7htlb5xkKS_kLdKqJZK2TVqjUlsQvX6PTa6e1WP5WU10X2mAlE2oZaw5grOQZthhfyDMrA-MU=s680-w680-h510-rw',
        rating: 4,
        priceRange: '$15-30',
        location: 'Nairobi',
        link: 'https://h1.nu/1c8YP'  
      },
      {  
        name:  'Barbours Cave',
        cuisine: 'Sports bar and grill with international comfort food',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrGtBrEFjzBp5ZB0vVhcA25xz0FZoaAa4a4OHXr3SrtFZWhLw2vsHK09JBZyA86jDwAbAsWO-YleM2loR01VDpM0EToYXnRSi5HmiFR7JJa8b5-QlHfbsH6OqGTIcmXXA-SV-c=s680-w680-h510-rw',
        rating: 4,
        priceRange: '$15-30',
        location: 'Nairobi',
        link: 'https://alibarbours.com/'
      },
      {
        name: 'Pampa Grill',
        cuisine: 'Argentinian steakhouse with premium cuts and wine selection.',
        image: 'https://africanspicesafaris.com/wp-content/uploads/2023/08/pampa-restaurant-nairobi-1200x675.gif',
        rating: 4,
        priceRange: '$25-50',
        location: 'Nairobi',
        link: 'https://h1.nu/17GgP'
      },
      {
        name: 'Osteria Del Chianti',
        cuisine: 'Authentic Italian restaurant with imported ingredients.',
        image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/04/1b/6a/1b/osteria-del-chianti.jpg?w=1000&h=-1&s=1',
        rating: 4,
        priceRange: '$20-40',
        location: 'Nairobi',
        link: 'https://h1.nu/17Giv'
      },
      {
        name: 'Brew Bistro',
        cuisine: 'Craft beer brewery with gastropub menu.',
        image: 'https://www.nairobirestaurants.co.ke/storage/public/restaurants/472-brew-bistro/profile/gallery/90673192_1089692338030340_469215071029952512_o.jpg',
        rating: 4,
        priceRange: '$15-30',
        location: 'Nairobi',
        link: 'https://h1.nu/17GkR'
      },
      {
        name: 'Phoenician Restaurant',
        cuisine: 'Lebanese and Middle Eastern cuisine with authentic flavors.',
        image: 'https://h1.nu/1c982',
        rating: 4,
        priceRange: '$18-35',
        location: 'Nairobi',
        link: 'https://phoeniciannairobi.co.ke/'
      }
    ]
  },
  {
    name: 'Morocco',
    description: 'Immerse yourself in the exotic blend of Arab, Berber, and European cultures while exploring imperial cities, Atlas Mountains, and Sahara Desert.',
    image: 'https://desertluxurycamp.com/wp-content/uploads/2023/08/the-hassan-ii-mosque-4703807_1920-1024x682.jpg',
    region: 'North Africa',
    population: '38.08 million',
    attractions: [
      {
        name: 'Marrakech Medina',
        description: 'UNESCO World Heritage site with bustling souks, palaces, and the famous Jemaa el-Fnaa square.',
        image: 'https://media.cntraveler.com/photos/57f2b437196e3f9630632011/16:9/w_2560,c_limit/MarrakechMedina-GettyImages-475057992.jpg',
        location: 'Marrakech',
        link: 'https://fas.st/t/SFx21QV8'
      },
      {
        name: 'Sahara Desert',
        description: 'Experience luxury desert camps and camel trekking in the world\'s largest hot desert.',
        image: 'https://i.natgeofe.com/n/7b37548d-3c81-4023-be70-87d8b01e6493/Sahara.jpg',
        location: 'Merzouga',
        link: 'https://saharadeserttour.com/',
      },
      {
        name: 'Hassan II Mosque',
        description: 'Magnificent mosque with the world\'s tallest minaret, overlooking the Atlantic Ocean.',
        image: 'https://api.files.attenvo.com/uploads/images/5qtxceo1q062bamlqs0e4ydx24fme2ukldpvivpf-1669136418-compressed.jpg',
        location: 'Casablanca',
        link: 'https://www.fmh2.ma/'
      },
      {
        name: 'Fes Medina',
        description: 'Medieval walled city and UNESCO World Heritage site with ancient madrasas and tanneries.',
        image: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/07/c1/c6/d0.jpg',
        location: 'Fes',
        link: 'https://fas.st/t/VR2FfhWC'
      },
      {
        name: 'Atlas Mountains',
        description: 'Majestic mountain range offering hiking, Berber villages, and stunning landscapes.',
        image: 'https://images.squarespace-cdn.com/content/v1/5964a7828419c27cc3329509/1591191770820-H7JQQOEIU8M088ZRBT7H/shutterstock_763175683+%281%29.jpg?format=2500w',
        location: 'High Atlas',
        link: 'https://fas.st/t/Z65eETxw'
      },
      {
        name: 'Chefchaouen Blue City',
        description: 'Picturesque mountain town famous for its blue-painted buildings and relaxed atmosphere.',
        image: 'https://d2rdhxfof4qmbb.cloudfront.net/wp-content/uploads/20190408131131/Chefchaouen-Morocco.jpg',
        location: 'Chefchaouen',
        link: 'https://www.hotels.com/affiliate/4BuwPdU'
      },
      {
        name: 'Essaouira',
        description: 'Coastal city with Portuguese fortifications, art galleries, and fresh seafood.',
        image: 'https://focus.independent.ie/thumbor/MH8RR-DIwFbsDbINHcVod9C0zWs=/960x640/smart/prod-mh-ireland/f8bcd118-c1eb-11ed-b106-0210609a3fe2.jpg',
        location: 'Essaouira',
        link: 'https://www.hellotickets.com/morocco/essaouira/c-775?qs=Essaouira'
      },
      {
        name: 'Ait Benhaddou',
        description: 'UNESCO World Heritage fortified village and famous filming location.',
        image: 'https://media.istockphoto.com/id/2149359355/photo/ait-ben-haddou-ksar-or-fortified-village-in-morocco.jpg?s=612x612&w=0&k=20&c=iHPdYSbj2h8WZ3YHJdOwlASiv5giA1dUeHIg8lK-vfM=',
        location: 'Ouarzazate',
        link: 'https://expedia.com/affiliate/vnCZsnr'
      },
      {
        name: 'Rabat',
        description: 'Morocco\'s capital city with royal palaces, gardens, and historical monuments.',
        image: 'https://a.travel-assets.com/findyours-php/viewfinder/images/res70/469000/469956-Kasbah-Of-The-Udayas.jpg',
        location: 'Rabat',
        link: 'https://expedia.com/affiliate/drfTbgK'
      },
      {
        name: 'Meknes',
        description: 'Imperial city with grand gates, royal stables, and beautiful architecture.',
        image: 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQjHgngzm4AVyT9in9gZtZh9fbjy6wRwRQQJamGvuG50WXaf0gM-_elNRNKgKSid0ml0WytU9mlUpo3BdhhygMxjMzNZgq5OW42vsRSNA',
        location: 'Meknes',
        link: 'https://h1.nu/1c19m'
      },
      {
        name: 'Todra Gorge',
        description: 'Spectacular canyon with towering limestone cliffs popular with rock climbers.',
        image: 'https://dynamic-media.tacdn.com/media/attractions-splice-spp-674x446/0b/39/85/6e.jpg',
        location: 'Tinghir',
        link: 'https://www.visitmorocco.com/en/travel/todra-gorge'
      },
      {
        name: 'Dades Valley',
        description: 'Valley of roses and kasbahs with dramatic rock formations and traditional villages.',
        image: 'https://travel-exploration.com/images/Dades-Valley-Tour-Travel-Exploration-Morocco.jpg',
        location: 'Dades Valley',
        link: 'https://www.visitmorocco.com/en/travel/dades-valley'
      },
      {
        name: 'Volubilis',
        description: 'Ancient Roman ruins with well-preserved mosaics and archaeological significance.',
        image: 'https://sitedevolubilis.org/wp-content/uploads/2021/09/fig-1-Cover-image-Volubilis-Christian-Rosenbaum-2-1536x616-1.jpg',
        location: 'Meknes',
        link: 'https://sitedevolubilis.org/'
      },
      {
        name: 'Agadir',
        description: 'Modern beach resort city with golden beaches and luxury hotels.',
        image: 'https://www.traveloffpath.com/wp-content/uploads/2023/12/Why-This-Lesser-Known-Beach-Destination-Is-Becoming-A-Tourism-Hotspot.jpg.webp',
        location: 'Agadir',
        link: 'https://www.visitmorocco.com/en/travel/agadir-taghazout'
      },
      {
        name: 'Ouarzazate',
        description: 'Gateway to the Sahara and Hollywood of Morocco with film studios.',
        image: 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQEEnWA_E71nqv9MNQBF3_8dg2I-PK-HxQ2qsjzbFui60LvJfGsXwDw_QXACjDGD8atZAM6CFozu8T4k0XXZU6cvCJuay_aSTLoKN97nw',
        location: 'Ouarzazate',
        link: 'https://ouarzazate.city/'
      },
      {
        name: 'Tangier',
        description: 'Historic port city where Africa meets Europe with vibrant culture and history.',
        image: 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQkTSQeAJPF1btQWO0-8QNhqjI_OlUqLrtPQwo-7IhXZmDFanrlWeHE8FolHpOna6Kd0wBU1IjU25T1PIaJYL2JVI_nYPQzaFDccgn5FA',
        location: 'Tangier',
        link: 'https://h1.nu/1c1eo'
      },
      {
        name: 'Ifrane',
        description: 'Alpine-style town known as "Little Switzerland" with cedar forests.',
        image: 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRDJC3_9rjYVMiLe_fz6ZWHQmJ4936c0l_5d6Eb2doxeAhiaXnkY20TV3_G2unUvpBNyhGEz6Un4qDOAwcn1NOEqr6fD3icLQnkvRP5rA',
        location: 'Ifrane',
        link: 'https://www.visitmorocco.com/en/travel/ifrane'
      },
      {
        name: 'Casablanca',
        description: 'Economic capital with Art Deco architecture and modern attractions.',
        image: 'https://www.visitmorocco.com/sites/default/files/styles/thumbnail_events_slider/public/thumbnails/image/city-panorama.-casablanca-morocco.-africa-marianna-ianovska.jpg?itok=h4FjZSIp',
        location: 'Casablanca',
        link: 'https://www.visitmorocco.com/en/travel/casablanca'
      },
      {
        name: 'Asilah',
        description: 'Charming coastal town with whitewashed buildings and art festivals.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrH8iLgs5qCpp2dt-PcMIyWMJTztvfwhIyGF05P9156Yzwtka8OoprCDboAtUG1QwNPAetRp-cclSUvBLPpxz8__HHJcADXKON6GpPTNQFrgtENWC8TZJz1Hsj99PQ7cIAmney-Og=w540-h312-n-k-no',
        location: 'Asilah',
        link: 'https://h1.nu/1c1g7'
      },
      {
        name: 'Tetouan',
        description: 'UNESCO World Heritage medina with Andalusian architecture and crafts.',
        image: 'https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcQi65e2AUHMU1Vli_LSyDAGi1TfrwNxRQkjnIslz32dC9TRiYvEpUvYBquVfXuFxiieqMIlEqsAy77H2IZBJymnaRYaF3pyfKA0pZlI6g',
        location: 'Tetouan',
        link: 'https://h1.nu/1c1gF'
      }
    ],
    transportation: [
      {
        type: 'Desert 4WD Tour',
        description: 'Luxury desert expeditions with professional guides and premium camping.',
        price: '$200-500/day',
        route: 'Marrakech to Sahara'
      },
      {
        type: 'Atlas Mountains Trek',
        description: 'Guided mountain treks with mule support and luxury mountain lodges.',
        price: '$150-300/day',
        route: 'High Atlas Mountains'
      },
      {
        type: 'Royal Train',
        description: 'Luxury train service connecting major cities.',
        price: '$50-150',
        route: 'Casablanca to Marrakech'
      },
      {
        type: 'Private Driver',
        description: 'Chauffeur service with luxury vehicles for city and intercity travel.',
        price: '$100-250/day',
        route: 'Imperial Cities Circuit'
      }
    ],
    hotels: [
      {
        name: 'La Mamounia',
        description: 'Legendary palace hotel in Marrakech with opulent gardens and world-class spa.',
        image: 'https://images.trvl-media.com/lodging/1000000/440000/438500/438418/cd4b1795.jpg?impolicy=resizecrop&rw=1200&ra=fit',
        rating: 5,
        price: '$600-1200',
        location: 'Marrakech',
        bookingLink: 'https://expedia.com/affiliate/SxcyKbb'
      },
      {
        name: 'Kasbah Tamadot',
        description: 'Richard Branson\'s luxury retreat in the Atlas Mountains with stunning views.',
        image: 'https://images.trvl-media.com/lodging/17000000/16490000/16489800/16489704/0fd66132.jpg?impolicy=resizecrop&rw=1200&ra=fit',
        rating: 5,
        price: '$800-1500',
        location: 'Atlas Mountains',
        bookingLink: 'https://expedia.com/affiliate/bnIZI0h'
      },
      {
        name: 'Royal Mansour',
        description: 'Ultra-luxury palace hotel with private riads and exceptional service.',
        image: 'https://images.trvl-media.com/lodging/4000000/3420000/3411200/3411146/c525b405.jpg?impolicy=resizecrop&rw=1200&ra=fit',
        rating: 5,
        price: '$1500-3000',
        location: 'Marrakech',
        bookingLink: 'https://expedia.com/affiliate/bN32JUD'
      },
      {
        name: 'Amanjena',
        description: 'Luxury resort with pavilions and maisons inspired by Moroccan architecture.',
        image: 'https://www.aman.com/sites/default/files/styles/media_text_side_by_side_x_wide/public/2025-06/amanjena_morocoo_-_resort_central_bassin.png?itok=1XTbxEdL',
        rating: 5,
        price: '$1000-2000',
        location: 'Marrakech',
        bookingLink: 'https://www.aman.com/resorts/amanjena'
      },
      {
        name: 'Riad Fes',
        description: 'Luxury riad in the heart of Fes medina with traditional architecture.',
        image: 'https://images.trvl-media.com/lodging/19000000/18320000/18319600/18319514/1d8e957d.jpg?impolicy=resizecrop&rw=1200&ra=fit',
        rating: 5,
        price: '$400-800',
        location: 'Fes',
        bookingLink: 'https://expedia.com/affiliate/hGkvCuV'
      },
      {
        name: 'Sahrai Hotel',
        description: 'Contemporary luxury hotel with panoramic views of Fes medina.',
        image: 'https://images.trvl-media.com/lodging/7000000/6680000/6675300/6675225/d184b610.jpg?impolicy=resizecrop&rw=1200&ra=fit',
        rating: 5,
        price: '$287-4000',
        location: 'Fes',
        bookingLink: 'https://expedia.com/affiliate/m230xBz'
      },
      {
        name: 'Luxury Desert Camp Merzouga',
        description: 'Ultra-luxury desert camp with private tents and gourmet dining.',
        image: 'https://images.trvl-media.com/lodging/97000000/96140000/96133700/96133686/1e0e66f3.jpg?impolicy=resizecrop&rw=1200&ra=fit',
        rating: 5,
        price: '$68-300',
        location: 'Merzouga',
        bookingLink: 'https://expedia.com/affiliate/igFWfnv'
      },
      {
        name: 'Sofitel Rabat Jardin des Roses',
        description: 'Luxury hotel in Morocco\'s capital with French elegance and Moroccan charm.',
        image: 'https://images.trvl-media.com/lodging/5000000/4860000/4854700/4854642/a2038d0a.jpg?impolicy=resizecrop&rw=1200&ra=fit',
        rating: 5,
        price: '$250-500',
        location: 'Rabat',
        bookingLink: 'https://expedia.com/affiliate/aMkR8LW'
      },
      {
        name: 'Fairmont Royal Palm Marrakech',
        description: 'Luxury resort with golf course, spa, and palatial accommodations.',
        image: 'https://images.trvl-media.com/lodging/8000000/7560000/7553800/7553718/6d295b45.jpg?impolicy=resizecrop&rw=1200&ra=fit',
        rating: 5,
        price: '$400-800',
        location: 'Marrakech',
        bookingLink: 'https://expedia.com/affiliate/l5ruhWH'
      },
      {
        name: 'Banyan Tree Tamouda Bay',
        description: 'Beachfront resort with villas and spa overlooking the Mediterranean.',
        image: 'https://images.trvl-media.com/lodging/14000000/13570000/13563900/13563849/422873fe.jpg?impolicy=resizecrop&rw=1200&ra=fit',
        rating: 5,
        price: '$600-1200',
        location: 'Tetouan',
        bookingLink: 'https://expedia.com/affiliate/B525Lry'
      },
      {
        name: 'Mazagan Beach & Golf Resort',
        description: 'Luxury beachfront resort with golf course and multiple restaurants.',
        image: 'https://images.trvl-media.com/lodging/4000000/3020000/3010700/3010665/75cda226.jpg?impolicy=resizecrop&rw=1200&ra=fit',
        rating: 5,
        price: '$200-500',
        location: 'El Jadida',
        bookingLink: 'https://expedia.com/affiliate/ooPmP70'
      },
      {
        name: 'Riad Kniza',
        description: 'Boutique riad with antique furnishings and rooftop terrace views.',
        image: 'https://images.trvl-media.com/lodging/2000000/1150000/1140100/1140078/42fc9756.jpg?impolicy=resizecrop&rw=1200&ra=fit',
        rating: 4,
        price: '$200-400',
        location: 'Marrakech',
        bookingLink: 'https://expedia.com/affiliate/E0ulk4I'
      },
      {
        name: 'Hotel & Ryad Art Place Marrakech',
        description: 'Contemporary hotel with modern art and traditional Moroccan design.',
        image: 'https://images.trvl-media.com/lodging/11000000/10380000/10372900/10372824/b7392018.jpg?impolicy=resizecrop&rw=1200&ra=fit',
        rating: 4,
        price: '$150-300',
        location: 'Marrakech',
        bookingLink: 'https://expedia.com/affiliate/19TGOvN'
      },
      {
        name: 'Palais Faraj Suites & Spa',
        description: 'Luxury hotel in a restored 19th-century palace overlooking Fes.',
        image: 'https://images.trvl-media.com/lodging/5000000/4920000/4919700/4919653/3e59fdb1.jpg?impolicy=resizecrop&rw=1200&ra=fit',
        rating: 5,
        price: '$258-400',
        location: 'Fes',
        bookingLink: 'https://expedia.com/affiliate/mijYWTr'
      },
      {
        name: 'Kasbah du Toubkal',
        description: 'Mountain retreat with stunning Atlas Mountain views and Berber hospitality.',
        image: 'https://www.kasbahdutoubkal.com/assets/img/landing/kasbah-du-toubkal.jpg',
        rating: 4,
        price: '$200-400',
        location: 'Imlil',
        bookingLink: 'https://www.kasbahdutoubkal.com/'
      },
      {
        name: 'Villa Jenna',
        description: 'Luxury villa hotel with panoramic views of Marrakech and Atlas Mountains.',
        image: 'https://images.trvl-media.com/lodging/43000000/42700000/42697200/42697164/54c6aa9b.jpg?impolicy=resizecrop&rw=1200&ra=fit',
        rating: 4,
        price: '$250-500',
        location: 'Marrakech',
        bookingLink: 'https://expedia.com/affiliate/QmE7S8T'
      },
      {
        name: 'Auberge du Sud',
        description: 'Desert lodge with traditional architecture and modern amenities.',
        image: 'https://images.trvl-media.com/lodging/5000000/4410000/4409700/4409682/597a1f12.jpg?impolicy=resizecrop&rw=1200&ra=fit',
        rating: 4,
        price: '$180-350',
        location: 'Zagora',
        bookingLink: 'https://expedia.com/affiliate/C6K2mGX'
      },
      {
        name: 'Riad Maison Bleue',
        description: 'Historic riad with traditional Moroccan architecture and modern comfort.',
        image: 'https://images.trvl-media.com/lodging/2000000/1360000/1354000/1353985/1dccc518.jpg?impolicy=resizecrop&rw=1200&ra=fit',
        rating: 4,
        price: '$173-300',
        location: 'Fes',
        bookingLink: 'https://expedia.com/affiliate/0mN8ddq'
      },
      {
        name: 'Ksar Ighnda',
        description: 'Luxury kasbah hotel in the Dades Valley with traditional architecture.',
        image: 'https://images.trvl-media.com/lodging/11000000/10070000/10069300/10069202/0ca4dbc4.jpg?impolicy=resizecrop&rw=1200&ra=fit',
        rating: 4,
        price: '$150-300',
        location: 'Dades Valley',
        bookingLink: 'https://expedia.com/affiliate/kx5Bxw9'
      },
      {
        name: 'Riad Yasmine',
        description: 'Boutique riad with rooftop terrace and traditional Moroccan hospitality.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqXzXrZgwWGDyrNCDcLaSgyL65k7QMa-Adln4IE19C1_V1WOc6ZBhp7ta6U7s9OK2ntrRzX3xFkbHDSyu_iRLBPqbnqfO66hLcY-6A_tA7oXjp0gX-FUcssFUOiCq7ue4eST3P9=s680-w680-h510-rw',
        rating: 4,
        price: '$120-250',
        location: 'Marrakech',
        bookingLink: 'https://expedia.com/affiliate/cn6fOmJ'
      }
    ],
    restaurants: [
      {
        name: 'Al Fassia',
        cuisine: 'Authentic Moroccan cuisine prepared by women chefs using traditional recipes.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrogsUAbUKfFhrm-Jqo-p9V8EqBHu266aO3TMNOn2ATebeghPh2OIuwOHAf-3B7XNTJpmGPfNmvm7Pxf7bhazyvVWl9VxGk0HkntL3UlSHyI3XJiESgWrvhL4KpMxVElWXP_dPP=s680-w680-h510-rw',
        rating: 5,
        priceRange: '$30-60',
        location: 'Marrakech',
        link: 'https://www.alfassia.com/'
      },
      {
        name: 'Le Jardin',
        cuisine: 'Contemporary Moroccan and international dishes in a beautiful garden setting.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqIy_vCxZT7-jdUHRDRWk_roq4MI232Jbt2i33pwTtoGqmK-NKLf1Kc9I0iEbO-YSCdStvApOSlZOJpizHL_hY58xZLOdd1bzcR7qrGCmEFp6G3TEnnsUwxFJAfBgvoUBMM0OJi=s680-w680-h510-rw',
        rating: 4,
        priceRange: '$25-50',
        location: 'Marrakech',
        link: 'https://lejardinmarrakech.com/'
      },
      {
        name: 'La Grande Table Marocaine',
        cuisine: 'Fine dining Moroccan cuisine at Royal Mansour with exceptional presentation.',
        image: 'https://www.royalmansour.com/wp-content/uploads/2024/03/lgb.jpg.webp',
        rating: 5,
        priceRange: '$80-150',
        location: 'Marrakech',
        link: 'https://www.royalmansour.com/en/restaurants/la-grande-table-marocaine/'
      },
      {
        name: 'Dar Yacout',
        cuisine: 'Traditional Moroccan palace dining with live entertainment and authentic atmosphere.',
        image: 'https://daryacout.com/wp-content/uploads/2022/09/7Z6A9358.jpg',
        rating: 5,
        priceRange: '$50-100',
        location: 'Marrakech',
        link: 'https://www.daryacout.com/'
      },
      {
        name: 'Nomad',
        cuisine: 'Modern Moroccan cuisine with rooftop terrace overlooking Jemaa el-Fnaa.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqDFMVvHg3ZDL2N1CEosEeJewP7dmmQAeLMJ8hiPiMBK7Utz3KEs0MZzBKukyrNt77Q7e72mTkDsUlw2HcxJSasDp_HaYK8iNVi6NF-acQn4b9y3gqVg4ofvtwX_0lzqkzp3BRn=s680-w680-h510-rw',
        rating: 4,
        priceRange: '$25-50',
        location: 'Marrakech',
        link: 'https://www.nomadmarrakech.com/'
      },
      {
        name: 'Nur Restaurant',
        cuisine: 'Contemporary Moroccan cuisine with innovative presentation and local ingredients.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4no7F2JuYKfHLM5PKzVIWHEkWAEr6kNAqf3W9-drhDM15-QA5PlDiAhNm75y2XcgEhO4GHrU0dm28x53dtpZorVTxWuwo-B9mQB8g844uDVA1ryDUTE2D8v_LiMHJlM1Uhz_92io=s680-w680-h510-rw',
        rating: 5,
        priceRange: '$40-80',
        location: 'Fes',
        link: 'https://www.nurfez.com/'
      },
      {
        name: 'Cafe Clock',
        cuisine: 'Cultural cafe serving traditional and fusion dishes with live music.',
        image: 'https://cellarfive.com/wp-content/uploads/2017/03/20170222_094155.jpg',
        rating: 4,
        priceRange: '$15-30',
        location: 'Fes',
        link: 'https://www.cafeclock.com/'
      },
      {
        name: 'Rick\'s Cafe',
        cuisine: 'Inspired by Casablanca movie, serving international and Moroccan cuisine.',
        image: 'https://lh3.googleusercontent.com/p/AF1QipOUUeYehzUGMvQiOmyYJrQadSltytfcANuhGKC2=s680-w680-h510-rw',
        rating: 4,
        priceRange: '$30-60',
        location: 'Casablanca',
        link: 'https://www.rickscafe.ma/'
      },
      {
        name: 'La Sqala',
        cuisine: 'Traditional Moroccan restaurant in a historic fortress setting.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4npZ1jVkvPTEF_TKnC7U9B8HduDhpwnzpUhC7bv1V2v5nDzztuCwrTcBg0ut0S0Maw61xuC1GBJSaovUqEghr2IObQiAxhiTMZYm80c1vdD6A2AEffyaUZdzx0SCTM5M1GFdcZe7l7TM18Il=s680-w680-h510-rw',
        rating: 4,
        priceRange: '$20-40',
        location: 'Casablanca',
        link: 'https://www.lasqala.ma/'
      },
      {
        name: 'Pepe Nero',
        cuisine: 'Italian restaurant with fresh pasta and Mediterranean flavors.',
        image: 'https://pepenero-marrakech.com/wp-content/uploads/photo-gallery/DSC1088.jpg?bwg=1669718988',
        rating: 4,
        priceRange: '$25-50',
        location: 'Marrakech',
        link: 'https://pepenero-marrakech.com/'
      },
      {
        name: 'Comptoir Darna',
        cuisine: 'Moroccan and international cuisine with belly dancing entertainment.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4npnArtAP33WmYf3w_-Tzbcgr-vd-Vpe1jEDAYpjRU6YayXp3TeY1uO8FpRcdIFhGs_z7tCBMEcEYGTWPe8HlPyHkarUU5gdOHewXJ8kNoE5t5ZC5tg2kh1Utb7VIdJXnBAPrM7KSA=s680-w680-h510-rw',
        rating: 4,
        priceRange: '$35-70',
        location: 'Marrakech',
        link: 'https://www.comptoirmarrakech.com/'
      },
      {
        name: 'Maison Arabe Restaurant',
        cuisine: 'Traditional Moroccan cuisine in one of Marrakech\'s first riads.',
        image: 'https://www.congres-seminaires-marrakech.com/img/bg-img/restaurant-lamaison-arabe1.png',
        rating: 5,
        priceRange: '$40-80',
        location: 'Marrakech',
        link: 'https://www.lamaisonarabe.com/'
      },
      {
        name: 'Palais Gharnata',
        cuisine: 'Andalusian and Moroccan cuisine in a beautiful palace setting.',
        image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/27/5d/85/0a/palais-gharnata.jpg?w=1000&h=-1&s=1',
        rating: 4,
        priceRange: '$30-60',
        location: 'Fes',
        link: 'https://www.tripadvisor.fr/Restaurant_Review-g293734-d1119600-Reviews-Palais_Gharnata-Marrakech_Marrakech_Safi.html'
      },
      {
        name: 'Riad Rcif Restaurant',
        cuisine: 'Traditional Moroccan dishes served in an authentic riad atmosphere.',
        image: 'https://lh3.googleusercontent.com/p/AF1QipPnXIxbap_vRRXE1bM8Ipd-2NzXoDQPRdg_MOl7=s680-w680-h510-rw',
        rating: 4,
        priceRange: '$25-50',
        location: 'Fes',
        link: 'https://www.riadrcif.com/'
      },
      {
        name: 'Foundouk',
        cuisine: 'French-Moroccan fusion cuisine in a restored caravanserai.',
        image: 'https://lh3.googleusercontent.com/p/AF1QipNcoxRqGkglahUjzCTWPaNHNcN7JsNnsqDjgbqL=s680-w680-h510-rw',
        rating: 4,
        priceRange: '$30-60',
        location: 'Marrakech',
        link: 'https://www.foundouk.com/'
      },
      {
        name: 'Ksar Essaoussan',
        cuisine: 'Traditional Moroccan cuisine with panoramic views of the Atlas Mountains.',
        image: 'https://www.essaoussane.com/images/galerie/gastronomie/ksar-es-saoussan_2.jpg',
        rating: 4,
        priceRange: '$20-40',
        location: 'Ouarzazate',
        link: 'https://www.essaoussane.com/'
      },
      {
        name: 'Taros Cafe',
        cuisine: 'International and Moroccan cuisine with ocean views and live music.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4noJz3A_5-J5H8XghOwCFnMEDfADYMjDjwsxCKAG6WQBg8rSlpqDfCkhoG0QFciacHcxo1fQff95owqrSe1FQkFkmXkyeSRs4cx8rFR7h-yKUi4xBtJ6e9iUf86A38-9D840g74=s680-w680-h510-rw',
        rating: 4,
        priceRange: '$18-35',
        location: 'Essaouira',
        link: 'https://taroslounge.com/'
      },
      {
        name: 'Bleu Mogador',
        cuisine: 'Seafood restaurant specializing in fresh catches from the Atlantic.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nr-nIRUoPcatfXyxrq6lYF8f9n-pnHtyb076qlNQ6ynTDK9UlnAObXggZJ9kxGpM6rVlaD_Z5iLOIaFxCItFv6Rlbpz8ScNujdDbFBYCF37H5OmzLJCctJGW-IlJFbxKJ1YKl3Kgw=s680-w680-h510-rw',
        rating: 4,
        priceRange: '$25-50',
        location: 'Essaouira',
        link: 'https://obleu-mogador.com/'
      },
      {
        name: 'Riad Maryam Restaurant',
        cuisine: 'Home-style Moroccan cooking in an intimate riad setting.',
        image: 'https://eatgosee.com/wp-content/uploads/2024/12/Sufret-Maryam-Restaurant-Main-Dining-Table.webp',
        rating: 4,
        priceRange: '$20-40',
        location: 'Chefchaouen',
        link: 'https://riadmaryam.com/restauration/'
      },
      {
        name: 'Ziryab',
        cuisine: 'Gourmet Moroccan cuisine with modern presentation and wine pairings.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4noo31T_Eq1PMiwnH-5Oc94LbBSO5dX0kc3wK7LQGUfEnec1zicwqFCOJ8PebvOdsXgQu5mjaF1nDYOcrwrlSatIImn1TYKdEtux-MaT1qVDTip1PxPRGSaYd6mX6Y_pLP1GAaM=s680-w680-h510-rw',
        rating: 5,
        priceRange: '$45-90',
        location: 'Rabat',
        link: 'https://share.google/exhtdAm6sH64JxJfd'
      }
    ]
  },
  {
    name: 'Tanzania',
    description: 'Home to the Serengeti, Ngorongoro Crater, and Mount Kilimanjaro, offering unparalleled wildlife experiences and adventure.',
    image: 'https://i.ytimg.com/vi/SOkE6K9q1OM/maxresdefault.jpg',
    region: 'East Africa',
    population: '68.56 million',
    attractions: [
      {
        name: 'Serengeti National Park',
        description: 'Witness the Great Migration and endless plains teeming with wildlife.',
        image: 'https://tanzaniaemotionsafaris.com/wp-content/uploads/2021/09/Serengeti_gallery_0.jpg',
        location: 'Northern Tanzania',
        link: 'https://tanzania-specialist.com/national-parks/serengeti/'
      },
      {
        name: 'Ngorongoro Crater',
        description: 'UNESCO World Heritage site known as Africa\'s Eden with incredible wildlife density.',
        image: 'https://shawnvoyage.com/wp-content/uploads/2018/11/Ngorongoro-Crater-Entrance-at-the-gate-of-Ngorongoro-Crater.jpg',
        location: 'Northern Tanzania',
        link: 'https://www.ngorongorocratertanzania.org/ngorongoro-conservation-area-gates/'
      },
      {
        name: 'Mount Kilimanjaro',
        description: 'Africa\'s highest peak and the world\'s tallest free-standing mountain.',
        image: 'https://www.mountkilimanjaroguide.com/images/mount-kilimanjaro-pictures1.jpg',
        location: 'Northern Tanzania',
        link: 'https://tanzania-specialist.com/climbing-kilimanjaro/'
      },
      {
        name: 'Zanzibar Stone Town',
        description: 'UNESCO World Heritage site with Swahili architecture and spice markets.',
        image: 'https://wecab.co.tz/images/tour/Old%20Fort%20of%20Zanzibar.jpg',
        location: 'Zanzibar',
        link: 'https://zanzibarworld.com/half-day-tours-zanzibar/stone-town-tour/'
      },
      {
        name: 'Tarangire National Park',
        description: 'Famous for its large elephant herds and ancient baobab trees.',
        image: 'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/12/51/a5/e5.jpg',
        location: 'Northern Tanzania',
        link: 'https://www.tanzaniaparks.go.tz/national_parks/tarangire-national-park'
      },
      {
        name: 'Lake Manyara National Park',
        description: 'Compact park famous for tree-climbing lions and flamingo populations.',
        image: 'https://www.kileotours.com/images/Safari_itinerary/ManyaraNP_daytrip/manyara_gate.jpg',
        location: 'Northern Tanzania',
        link: 'https://tanzania-specialist.com/national-parks/lake-manyara/'
      },
      {
        name: 'Selous Game Reserve',
        description: 'One of Africa\'s largest game reserves with diverse wildlife and boat safaris.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Entrance_to_Selous_Game_Reserve_%2828422628794%29.jpg/2560px-Entrance_to_Selous_Game_Reserve_%2828422628794%29.jpg',
        location: 'Southern Tanzania',
        link: 'https://tanzania-specialist.com/accommodation/selous-river-camp/'
      },
      {
        name: 'Ruaha National Park',
        description: 'Tanzania\'s largest national park with diverse landscapes and wildlife.',
        image: 'https://www.kabiraugandasafaris.com/wp-content/uploads/2021/08/Ruaha-Park-1024x768.jpg',
        location: 'Central Tanzania',
        link: 'https://tanzania-specialist.com/national-parks/ruaha-national-park/'
      },
      {
        name: 'Pemba Island',
        description: 'Pristine island with coral reefs, spice plantations, and secluded beaches.',
        image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/89/1c/e2/pemba-island.jpg?w=1200&h=1200&s=1',
        location: 'Zanzibar Archipelago',
        link: 'https://tanzania-specialist.com/islands/pemba/'
      },
      {
        name: 'Mahale Mountains National Park',
        description: 'Remote park famous for chimpanzee tracking on Lake Tanganyika shores.',
        image: 'https://www.mikuminationalpark.net/wp-content/uploads/2020/02/mahale-mountains-national-park.jpg',
        location: 'Western Tanzania',
        link: 'https://tanzania-specialist.com/activity/mahale-mountains-national-park/'
      },
      {
        name: 'Gombe Stream National Park',
        description: 'Jane Goodall\'s research site for chimpanzee studies and conservation.',
        image: 'https://www.tarangirenationalparks.com/wp-content/uploads/2022/09/africa_tanzania_entrance_to_gombe_national_park_helen_cox_blog.jpg',
        location: 'Western Tanzania',
        link: 'https://tanzania-specialist.com/activity/gombe-stream-national-park/'
      },
      {
        name: 'Katavi National Park',
        description: 'Remote wilderness park with large buffalo herds and hippo pools.',
        image: 'https://www.tanzaniatourism.com/images/uploads/Katavi_National_Park_Entrance_17.jpg',
        location: 'Western Tanzania',
        link: 'https://www.tanzaniaparks.go.tz/'
      },
      {
        name: 'Arusha National Park',
        description: 'Compact park with Mount Meru, crater lakes, and diverse ecosystems.',
        image: 'https://www.kilimanjaroparktanzania.com/wp-content/uploads/2022/05/arusha-welcome-1.jpg',
        location: 'Northern Tanzania',
        link: 'https://www.tanzaniaparks.go.tz/national_parks/arusha-national-park-1'
      },
      {
        name: 'Mikumi National Park',
        description: 'Accessible park with open grasslands and diverse wildlife viewing.',
        image: 'https://www.easytravel.co.tz/wp-content/uploads/2023/07/Mikumi-National-Park-Gate-Tanzania.jpg',
        location: 'Southern Tanzania',
        link: 'https://www.tanzaniaparks.go.tz/national_parks/mikumi-national-park'
      },
      {
        name: 'Udzungwa Mountains National Park',
        description: 'Biodiversity hotspot with endemic species and hiking trails.',
        image: 'https://www.pinyourfootsteps.com/wp-content/uploads/2025/04/udzungwa-4-1024x683.jpg',
        location: 'Southern Tanzania',
        link: 'https://www.tanzaniaparks.go.tz/national_parks/udzungwa-mountains-national-park'
      },
      {
        name: 'Saadani National Park',
        description: 'Unique park where the bush meets the beach on the Indian Ocean.',
        image: 'https://www.natureresponsiblesafari.de/wp-content/uploads/2021/06/Kijongo-Bay-und-Saadani-Nationalpark-007.jpg',
        location: 'Coastal Tanzania',
        link: 'https://tanzania-specialist.com/national-parks/saadani-national-park/'
      },
      {
        name: 'Olduvai Gorge',
        description: 'Paleoanthropological site known as the "Cradle of Mankind".',
        image: 'https://www.ncaa.go.tz/wp-content/uploads/2022/08/Olduvai-museum7-1024x681.jpg',
        location: 'Northern Tanzania',
        link: 'https://www.ncaa.go.tz/'
      },
      {
        name: 'Mnemba Atoll',
        description: 'Private island with pristine coral reefs and luxury diving.',
        image: 'https://www.andbeyond.com/wp-content/uploads/sites/5/Zanzibar-Mnemba-Island-guest-area-bar-1_Website.jpg',
        location: 'Zanzibar',
        link: 'https://www.andbeyond.com/our-lodges/africa/tanzania/zanzibar/andbeyond-mnemba-island/'
      },
      {
        name: 'Jozani Forest',
        description: 'Home to the endemic red colobus monkeys and mangrove boardwalks.',
        image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/10/ca/61/caption.jpg?w=1200&h=-1&s=1',
        location: 'Zanzibar',
        link: 'https://jozaniforest.com/'
      },
      {
        name: 'Mafia Island',
        description: 'Marine park with whale shark diving and pristine coral reefs.',
        image: 'https://www.serengetiparktanzania.com/wp-content/uploads/2022/01/mafia-2-750x450.jpg',
        location: 'Coastal Tanzania',
        link: 'https://mafiaisland.com/'
      }
    ],
    transportation: [
      {
        type: 'Safari Circuit',
        description: 'Luxury safari vehicles for the Northern Circuit game drives.',
        price: '$400-800/day',
        route: 'Serengeti-Ngorongoro Circuit'
      },
      {
        type: 'Kilimanjaro Climbing',
        description: 'Guided mountain climbing with porters and luxury camping.',
        price: '$2000-5000',
        route: 'Machame or Lemosho Route'
      },
      {
        type: 'Island Hopping',
        description: 'Luxury boat transfers between Zanzibar islands.',
        price: '$200-500',
        route: 'Zanzibar to Pemba'
      },
      {
        type: 'Flying Safari',
        description: 'Charter flights between safari destinations.',
        price: '$300-800',
        route: 'Arusha to Serengeti'
      }
    ],
    hotels: [
      {
        name: 'Four Seasons Safari Lodge Serengeti',
        description: 'Luxury safari lodge with panoramic views of the Serengeti plains.',
        image: 'https://thepointsguy.global.ssl.fastly.net/us/originals/2021/09/Four-Seasons-Safari-Lodge-Serengeti-Tanzania-18.jpg',
        rating: 5,
        price: '$2000-4000',
        location: 'Serengeti',
        bookingLink: 'https://expedia.com/affiliate/pF8xU9k'
      },
      {
        name: 'Ngorongoro Crater Lodge',
        description: 'Ultra-luxury lodge on the rim of Ngorongoro Crater.',
        image: 'https://static.cloudsafaris.com/public/6948cd8f-6b79-4bb5-ac39-261b0d29c8af_loduare%20Gate.jpg?action=get&host=true',
        rating: 5,
        price: '$1500-3000',
        location: 'Ngorongoro',
        bookingLink: 'https://www.andbeyond.com/our-lodges/africa/tanzania/ngorongoro-crater/andbeyond-ngorongoro-crater-lodge/'
      },
      {
        name: 'Singita Grumeti',
        description: 'Exclusive safari lodge in a private concession in the western Serengeti.',
        image: 'https://rhin-blog-production.s3.eu-west-1.amazonaws.com/wp-content/uploads/2021/07/singita-serengeti-house-exteriors-deck-01.jpeg',
        rating: 5,
        price: '$2500-5000',
        location: 'Serengeti',
        bookingLink: 'https://singita.com/'
      },
      {
        name: 'The Residence Zanzibar',
        description: 'Luxury beachfront resort with villas and pristine beaches.',
        image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/582594573.jpg?k=286a391cc2b08780309dcf1393b8d4f47c644ab68055d32ecfa60fbd4723e66e&o=&hp=1',
        rating: 5,
        price: '$800-1600',
        location: 'Zanzibar',
        bookingLink: 'https://www.cenizaro.com/theresidence/zanzibar'
      },
      {
        name: 'Elewana The Manor at Ngorongoro',
        description: 'Colonial-style luxury lodge with coffee plantation setting.',
        image: 'https://images.trvl-media.com/lodging/12000000/11620000/11615200/11615166/7028fe9d.jpg?impolicy=resizecrop&rw=1200&ra=fit',
        rating: 5,
        price: '$600-1200',
        location: 'Ngorongoro',
        bookingLink: 'https://expedia.com/affiliate/pIYojzY'
      },
      {
        name: 'Kilindi Zanzibar',
        description: 'Exclusive resort with pavilions overlooking the Indian Ocean.',
        image: 'https://images.trvl-media.com/lodging/12000000/11620000/11615200/11615170/0bd2c7a0.jpg?impolicy=resizecrop&rw=1200&ra=fit',
        rating: 5,
        price: '$1000-2000',
        location: 'Zanzibar',
        bookingLink: 'https://expedia.com/affiliate/AbEKPNq'
      },
      {
        name: 'Lemala Ewanjan Tented Camp',
        description: 'Luxury mobile camp following the Great Migration.',
        image: 'https://africapathways.com/wp-content/uploads/2020/07/Lemala-Ewanjan-Camp-2.jpg',
        rating: 5,
        price: '$800-1600',
        location: 'Serengeti',
        bookingLink: 'https://www.google.com/local/place/fid/0x1832dcce88a417f5:0xc535076910b5105c/photosphere?iu=https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrF_-_2C6crCF8TH5k2IaVPnv0EREAS9VsMJqdUG7TXAgzVNBim6XiOrSdtZdejaZjwkKwLfYs5oj3YX1LOS-3jyL0llDcJrg1BTCGq2sWOYRFdAfyYSyN9mNuCxXJCFwKaDoLCVQ%3Dw160-h106-k-no-pi-10-ya142-ro0-fo100&ik=CAoSF0NJSE0wb2dLRUlDQWdJQ0VzOXFINXdF'
      },
      {
        name: 'Matemwe Lodge',
        description: 'Boutique beach lodge on Zanzibar with bungalows, beach access, and ocean views.',
        image: 'https://images.trvl-media.com/lodging/6000000/5940000/5938900/5938832/b17a2b34.jpg?impolicy=resizecrop&rw=1200&ra=fit',
        rating: 4,
        price: '$400-800',
        location: 'Zanzibar',
        bookingLink: 'https://expedia.com/affiliate/gcObfBN'
      },
      {
        name: 'Tarangire Treetops',
        description: 'Unique treehouse lodge overlooking Tarangire National Park.',
        image: 'https://nextgensafaris.com/wp-content/uploads/2025/05/tarangire-location.webp',
        rating: 4,
        price: '$500-1000',
        location: 'Tarangire',
        bookingLink: 'https://expedia.com/affiliate/Yqt0ELi'
      },
      {
        name: 'Greystoke Mahale',
        description: 'Remote luxury camp for chimpanzee tracking on Lake Tanganyika.',
        image: 'https://yellowzebrasafaris.com/media/31224/kungwelodgeview.jpg?width=2048&height=1024&format=jpg&v=1da5e15ceaa1c70',
        rating: 5,
        price: '$1200-2400',
        location: 'Mahale Mountains',
        bookingLink: 'https://www.nomad-tanzania.com/camps/western-tanzania/mahale-mountains-national-park/greystoke'
      },
      {
        name: 'Mnemba Island Lodge',
        description: 'Exclusive private island lodge with pristine beaches.',
        image: 'https://www.andbeyond.com/wp-content/uploads/sites/5/Zanzibar-Mnemba-Island-beach-view-5-1536x864.jpg',
        rating: 5,
        price: '$1500-3000',
        location: 'Zanzibar',
        bookingLink: 'https://www.andbeyond.com/our-lodges/africa/tanzania/zanzibar/andbeyond-mnemba-island/'
      },
      {
        name: 'Ruaha River Lodge',
        description: 'Luxury safari lodge on the banks of the Great Ruaha River.',
        image: 'https://www.ndoto-safari.com/pics/hotels/Ruaha_River_Lodge/Bild_26.jpg',
        rating: 4,
        price: '$600-1200',
        location: 'Ruaha',
        bookingLink: 'https://www.ruahariverlodge.com/'
      },
      {
        name: 'Serengeti Migration Camp',
        description: 'Luxury tented camp positioned for optimal migration viewing.',
        image: 'https://images.trvl-media.com/lodging/18000000/17530000/17521100/17521022/175c3891.jpg?impolicy=resizecrop&rw=1200&ra=fit',
        rating: 5,
        price: '$1000-2000',
        location: 'Serengeti',
        bookingLink: 'https://expedia.com/affiliate/Y8sgiy9'
      },
      {
        name: 'Chole Mjini Lodge',
        description: 'Eco-luxury treehouse lodge on Mafia Island.',
        image: 'https://www.swissafrican.com/img/camps/zanzibar/zn_chole_mjini/zn_chole_mjini_01a.jpg',
        rating: 4,
        price: '$300-600',
        location: 'Mafia Island',
        bookingLink: 'https://www.cholemjini.com/'
      },
      {
        name: 'Lake Manyara Tree Lodge',
        description: 'Unique treehouse accommodation in Lake Manyara National Park.',
        image: 'https://www.achieveglobalsafaris.com/wp-content/uploads/2020/01/Lake-Manyara-Serena-Safari-Lodge.jpg',
        rating: 5,
        price: '$800-1600',
        location: 'Lake Manyara',
        bookingLink: 'https://www.andbeyond.com/our-lodges/africa/tanzania/lake-manyara/andbeyond-lake-manyara-tree-lodge/'
      },
      {
        name: 'Katavi Wildlife Camp',
        description: 'Remote luxury camp in pristine Katavi National Park.',
        image: 'https://tanzaniaemotionsafaris.com/wp-content/uploads/2021/10/Katavi-National-Park-21.jpg',
        rating: 4,
        price: '$700-1400',
        location: 'Katavi',
        bookingLink: 'https://www.kataviwildlifecamp.com/'
      },
      {
        name: 'Zuri Zanzibar',
        description: 'Luxury beachfront resort with contemporary design and spa.',
        image: 'https://images.trvl-media.com/lodging/21000000/20220000/20217100/20217090/e610bc63.jpg?impolicy=resizecrop&rw=1200&ra=fit',
        rating: 5,
        price: '$600-1200',
        location: 'Zanzibar',
        bookingLink: 'https://expedia.com/affiliate/cXwRogv'
      },
      {
        name: 'Hatari Lodge',
        description: 'Boutique lodge at the foot of Mount Meru with panoramic views.',
        image: 'https://www.tranquilkilimanjaro.com/wp-content/uploads/5299580108_6714b851c4_k.jpg',
        rating: 4,
        price: '$400-800',
        location: 'Arusha',
        bookingLink: 'https://hatari.travel/'
      },
      {
        name: 'Selous Serena Camp',
        description: 'Luxury tented camp on the banks of the Rufiji River.',
        image: 'https://images.trvl-media.com/lodging/4000000/3290000/3280800/3280797/64dfb6dd.jpg?impolicy=resizecrop&rw=1200&ra=fit',
        rating: 4,
        price: '$500-1000',
        location: 'Selous',
        bookingLink: 'https://expedia.com/affiliate/IIZmxtV'
      },
      {
        name: 'Pemba Lodge',
        description: 'Eco-luxury lodge on pristine Pemba Island with diving.',
        image: 'https://www.tropicalement-votre.com/produits/2801/fiche1.jpg',
        rating: 4,
        price: '$400-800',
        location: 'Pemba Island',
        bookingLink: 'https://expedia.com/affiliate/R992gr2'
      }
    ],
    restaurants: [
      {
        name: 'The Waterfront Sunset Restaurant',
        cuisine: 'Fresh seafood and international cuisine with ocean views and sunset dining.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4noPvUhwoCcrOvbz0n3GC5MQbdSkCpgu3eDFnC7ZKBGDmX2yAHGpBUALpFu1hdEmmGWPH_n1I-9uTGI3i6IVVYNHHidPZpJvC_j7-MjNuiOYf0_ht6jAD_Zl2Ins37fzB8KFPQH1OQ=s680-w680-h510-rw',
        rating: 4,
        priceRange: '$20-40',
        location: 'Stone Town, Zanzibar',
        link: 'https://www.hotelslipway.com/waterfront/'
      },
      {
        name: 'Emerson Spice Tea House',
        cuisine: 'Street food market with fresh seafood and local specialties.',
        image:  'https://emersonzanzibar.com/wp-content/uploads/2021/10/ZA-ES-116-LR5-Robby-Bolleyn-Medium.jpg',
        rating: 5,
        priceRange: '$25-50',
        location: 'Stone Town, Zanzibar',
        link: 'https://emersonzanzibar.com/restaurants-in-stone-town/restaurant-reservation/'
      },
      {
        name: 'Forodhani Gardens',
        cuisine: 'Street food market with fresh seafood and local specialties.',
        image: 'https://i0.wp.com/www.safari254.com/wp-content/uploads/2017/04/Forodhani-Gardens_Seafood-display.jpg?resize=1000%2C560&',
        rating: 4,
        priceRange: '$5-15',
        location: 'Stone Town, Zanzibar',
        link: 'https://g.co/kgs/pukNUaC'
      },
      {
        name: 'The Rock Restaurant',
        cuisine: 'Unique restaurant on a rock in the Indian Ocean serving seafood.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nroTzN9YPbunKpvBDcsJM5-WsrD_byfoxRVL9GnBqNQzf7yEtlkpnzmFlKlDXkTmd1LOjUbv4tYdVG2Zu1e_V4Y6VpKUfE5hYhrRugyqC3z7BLNek756wibeeTL0i9hy3vlQBQSxzWjvcQ-=s680-w680-h510-rw',
        rating: 5,
        priceRange: '$30-60',
        location: 'Pingwe, Zanzibar',
        link: 'https://www.therockrestaurantzanzibar.com/'
      },
      {
        name: 'Lukmaan Restaurant',
        cuisine: 'Traditional Zanzibari cuisine with authentic local flavors.',
        image: 'https://media-cdn.tripadvisor.com/media/photo-s/19/57/79/fe/lukmaan-restaurant-from.jpg',
        rating: 4,
        priceRange: '$10-25',
        location: 'Stone Town, Zanzibar',
        link: 'https://lukmaan-restaurant.goto-where.com/'
      },
      {
        name: 'Archipelago Restaurant',
        cuisine: 'Fine dining with fusion cuisine and elegant atmosphere.',
        image: 'https://lh3.googleusercontent.com/places/ANXAkqFCLq7hBBq9FbZlWA4DIcatr8AakZBgncnVQ8kAPsUXBTf_p7QghyW8_ZtRWEbjj75G6WtFpHYqzW1UbwfC_IS64aSU3GxxJXQ=s4800-h640',
        rating: 5,
        priceRange: '$35-70',
        location: 'Stone Town, Zanzibar',
        link: 'https://g.co/kgs/rYtmDyg'
      },
      {
        name: 'Fisherman Local Food',
        cuisine: 'Authentic local restaurant serving traditional Tanzanian dishes.',
        image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/62/5a/bd/vista-generale.jpg?w=900&h=500&s=1',
        rating: 4,
        priceRange: '$8-20',
        location: 'Stone Town, Zanzibar',
        link: 'https://g.co/kgs/w1afgo5'
      },
      {
        name: 'Upendo Beach Restaurant',
        cuisine: 'Beachfront dining with fresh seafood and tropical cocktails.',
        image: 'https://wetu.com/ImageHandler/c1211x700/49530/11.jpg',
        rating: 4,
        priceRange: '$15-35',
        location: 'Nungwi, Zanzibar',
        link: 'https://www.upendobeach.com/'
      },
      {
        name: 'Spice Island Hotel Restaurant',
        cuisine: 'International and Zanzibari cuisine with garden setting.',
        image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/204732499.jpg?k=4401b89ace4457f705975a2b7c4a94d2a306ec991dbbf024bc705f7fe40c6ec8&o=&hp=1',
        rating: 4,
        priceRange: '$20-40',
        location: 'Stone Town, Zanzibar',
        link: 'https://www.spice-island-hotel-resort.com/gastronomy-dining-1'
      },
      {
        name: 'Livingstone Beach Restaurant',
        cuisine: 'Beachfront restaurant with grilled seafood and sunset views.',
        image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/48/d6/75/bar.jpg?w=900&h=-1&s=1',
        rating: 4,
        priceRange: '$18-38',
        location: 'Kizimkazi, Zanzibar',
        link: 'https://www.livingstoneszanzibar.com/'
      },
      {
        name: 'Samaki Samaki',
        cuisine: 'Asian fusion cuisine with fresh ingredients and creative presentation.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4npx2Y1cVbIbDZG0eABaSOu6pjUVEbudMhHZz_x1of7JlrXErFz938kM95gdhmHKoEEbx8tNbiT-_7o3G350KEVvs0uoF8KlXraGXWZH3T9rC3DCoGfFHMNPds18soU23I24C2pK=s680-w680-h510-rw',
        rating: 4,
        priceRange: '$22-45',
        location: 'Stone Town, Zanzibar',
        link: 'https://g.co/kgs/B2k6LvR'
      },
      {
        name: 'Shaba Lounge',
        cuisine: 'Rooftop lounge with cocktails and light meals overlooking the harbor.',
        image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/54/25/3c/we-will-cater-for-any.jpg?w=900&h=-1&s=1',
        rating: 4,
        priceRange: '$15-30',
        location: 'Stone Town, Zanzibar',
        link: 'https://www.karambezicafe.com/'
      },
      {
        name: 'Zanzibar Coffee House',
        cuisine: 'Historic coffee house serving traditional coffee and light meals.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nprUECfNWjx6GyyucE5VeVt6nCsh3frY2UMFqdXsi7Jbxt-UBNnyICibnfz1dQzvs_ZSyjjO2_9_S3JIKFfZ8FIuHv_YcWRHdb5LYoadf0lHFXJ_VuHNwWqS0dN0QhbkUsLoI2z4Q=s680-w680-h510-rw',
        rating: 4,
        priceRange: '$8-20',
        location: 'Stone Town, Zanzibar',
        link: 'https://www.utengule.com/zanzibar-coffee-house'
      },
      {
        name: 'Taperia Restaurant',
        cuisine: 'Spanish tapas and Mediterranean cuisine with wine selection.',
        image: 'https://images.squarespace-cdn.com/content/v1/56ec44b41d07c0db86a517e5/1518036663057-L5C6MUEEAX2ZY7KYYXY4/taperia-the-post-where-to-drink-in-stone-town',
        rating: 4,
        priceRange: '$20-40',
        location: 'Stone Town, Zanzibar',
        link: 'https://allrestaurants.eu/en/restaurants/clubs-and-bar/en-tanzania/en-zanzibar/taperia'
      },
      {
        name: 'Arusha Coffee Lodge Restaurant',
        cuisine: 'Farm-to-table dining with coffee plantation setting.',
        image: 'https://lh3.googleusercontent.com/p/AF1QipNq2bYCLy7z_a3bZG_wcpQGK4qgMOvx3mIrStDW=s680-w680-h510-rw',
        rating: 4,
        priceRange: '$25-50',
        location: 'Arusha',
        link: 'https://www.elewanacollection.com/arusha-coffee-lodge/at-a-glance'
      },
      {
        name: 'Mediterraneo Restaurant',
        cuisine: 'Italian and Mediterranean cuisine with fresh ingredients.',
        image: 'https://static.wixstatic.com/media/d18687_567ab0db80154e3eae200048e8828b94~mv2.jpg/v1/fill/w_1058,h_746,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/d18687_567ab0db80154e3eae200048e8828b94~mv2.jpg',
        rating: 4,
        priceRange: '$18-35',
        location: 'Arusha',
        link: 'https://www.mediterraneotanzania.com/restaurant'
      },
      {
        name: 'Chinese Whispers',
        cuisine: 'Asian cuisine with Chinese and Thai specialties.',
        image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/e7/e0/4d/interior.jpg?w=1200&h=-1&s=1',
        rating: 4,
        priceRange: '$15-30',
        location: 'Arusha',
        link: 'https://g.co/kgs/eeGvBeU'
      },
      {
        name: 'Blue Heron Restaurant',
        cuisine: 'International cuisine with garden setting and live music.',
        image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/5e/5c/bf/the-blue-heron.jpg?w=900&h=500&s=1',
        rating: 4,
        priceRange: '$20-40',
        location: 'Arusha',
        link: 'https://g.co/kgs/NJWi1G1'
      },
      {
        name: 'Khan\'s BBQ',
        cuisine: 'Grilled meats and Indian cuisine with authentic flavors.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nptxx4HhoH3SJTQLd8GQ3o2rtiYcESlkDuaQI-DhzDQNvK04XSyIIP2h5_jV03D3-owb7bgxWMQFta5-3achJ0RMFVBST3LfGThx8smXeivSRDBxQgWdstx0EkaCgp6hdVcvrwx=s680-w680-h510-rw',
        rating: 4,
        priceRange: '$12-25',
        location: 'Arusha',
        link: 'https://khansbbq.info/'
      },
      {
        name: 'Chowpatty Restaurant',
        cuisine: 'International menu with steaks, seafood, and vegetarian options.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nplngjqVSMwY3R5TJ1RT4U0JsXJiU4uAal3hKzY_ehv5qXPcImx6usvUFCwI6INvTg9qsCgNnKTKAgINM11xlWiQCFe6cwAiBGfhi4flyHcqwnKsHGLW9YNkqXG6XEzxT8V8kw=s680-w680-h510-rw',
        rating: 4,
        priceRange: '$18-35',
        location: 'Arusha',
        link: 'https://g.co/kgs/tReBv7A'
      }
    ]
  },
  {
    name: 'Mauritius',
    description: 'Tropical paradise in the Indian Ocean offering pristine beaches, luxury resorts, diverse cultures, and adventure activities from mountain hiking to deep-sea fishing.',
    image: 'https://images.pexels.com/photos/12935080/pexels-photo-12935080.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    region: 'East Africa',
    population: '1.3 million',
    attractions: [],
    transportation: [],
    hotels: [],
    restaurants: []
  },
  {
    name: 'Sierra Leone',
    description: 'Discover pristine beaches, lush rainforests, and rich cultural heritage in this West African gem known for its warm hospitality and natural beauty.',
    image: 'https://www.relocationafrica.com/wp-content/uploads/2024/05/freetown-sierra-leone-733014223-1030x676.jpg',
    region: 'West Africa',
    population: '8.642 million',
    attractions: [
      {
        name: 'Banana Islands',
        description: 'Pristine tropical islands with white sand beaches and crystal-clear waters perfect for luxury beach retreats.',
        image: 'https://worldlist.vision/files/1079/sight_pic_big2_2421.jpg',
        location: 'Western Area',
        link: 'https://tourismsierraleone.com/attractions/banana-islands/'
      },
      {
        name: 'Tacugama Chimpanzee Sanctuary',
        description: 'World-renowned sanctuary protecting endangered chimpanzees in their natural rainforest habitat.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrfVK0heMRPuunLhMwNElPUqvr_-MxnVRExiH3o76JLiHAFz5dy4aQY9Tz2jDd2I6e-ffYYSsnjJu4v8INC7-40d2HLk8AQRV7bgTXAJMjPUUIRbA1VnpVflMDtTjiizikfdyU=s680-w680-h510-rw',
        location: 'Western Area Peninsula',
        link: 'https://www.tacugama.com/'
      },
      {
        name: 'Freetown Peninsula Beaches',
        description: 'Stunning coastline with secluded beaches, perfect for luxury beach resorts and water sports.',
        image: 'https://ucarecdn.com/9a4dddfc-5425-4fef-bac5-a32615cfe2e9/',
        location: 'Western Area Peninsula',
        link: 'https://www.visitsierraleone.org/freetown-peninsula'
      },
      {
        name: 'Bunce Island',
        description: 'Historic slave trading post with preserved ruins and significant cultural heritage.',
        image: 'https://www.visitsierraleone.org/wp-content/uploads/2017/11/DJI_0280.jpg',
        location: 'Sierra Leone River',
        link: 'https://whc.unesco.org/en/tentativelists/5745/'
      },
      {
        name: 'Outamba-Kilimi National Park',
        description: 'Pristine wilderness with elephants, hippos, and diverse wildlife in savanna and forest habitats.',
        image: 'https://www.stunningtravel.nl/wp-content/uploads/2018/11/Outamba-Kilimi-Sierra-Leone-02.jpg',
        location: 'Northern Province',
        link: 'https://panverus.org/visit-outamba-kilimi-national-park/'
      },
      {
        name: 'Turtle Islands',
        description: 'Protected marine sanctuary where sea turtles nest on pristine beaches.',
        image: 'https://zakynthoscruises.com/wp-content/uploads/2021/02/Marathonisi-Turtle-Island-Zakynthos-Cruises-4.jpg',
        location: 'Western Area',
        link: 'https://tourismsierraleone.com/attractions/turtle-islands/'
      },
      {
        name: 'Gola Rainforest National Park',
        description: 'UNESCO Biosphere Reserve with pristine rainforest and endemic species.',
        image: 'https://live.staticflickr.com/7568/15449580504_18e1941d90_z.jpg',
        location: 'Eastern Province',
        link: 'https://tourismsierraleone.com/where-to-go/gola-rainforest-national-park/'
      },
      {
        name: 'Loma Mountains',
        description: 'Highest peaks in Sierra Leone with hiking trails and mountain villages.',
        image: 'https://photos.travellerspoint.com/396327/large_IMG_5482.jpg',
        location: 'Northern Province',
        link: 'https://www.visitsierraleone.org/loma-mountains'
      },
      {
        name: 'River Number Two Beach',
        description: 'One of Africa\'s most beautiful beaches with golden sand and palm trees.',
        image: 'https://i.pinimg.com/736x/5f/67/db/5f67dbca71dcd01ccd3e24a9aec86cb5.jpg',
        location: 'Western Area Peninsula',
        link: 'https://www.visitsierraleone.org/river-number-2/'
      },
      {
        name: 'Tokeh Beach',
        description: 'Pristine beach with luxury resorts and water sports activities.',
        image: 'https://i.ytimg.com/vi/fpeqi3FtJN0/maxresdefault.jpg',
        location: 'Western Area Peninsula',
        link: 'https://tourismsierraleone.com/attractions/tokeh-beach/'
      },
      {
        name: 'Cotton Tree',
        description: 'Historic landmark and symbol of Freetown with cultural significance.',
        image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjyUGQ2rMj8-T3r-j8mn85-TmHIxg5UF9dXYCGTsEHf6vdcViL-LRN57nQoXLdnz5sNzMDQuHXPIWACXjvWVa3-AWAgzas8rcwrIhOm-32uM5xSGXtQxQmoV64qPZaOJbgvYnZp5hQwNSwV/?imgmax=800',
        location: 'Freetown',
        link: 'https://www.visitsierraleone.org/the-cotton-tree/'
      },
      {
        name: 'Tiwai Island Wildlife Sanctuary',
        description: 'Pristine island sanctuary with diverse primate species and birdlife.',
        image: 'https://www.tiwaiisland.org/wp-content/uploads/2022/07/9.-About_Tiwai-Island-carousel-e1657546365956.jpg',
        location: 'Southern Province',
        link: 'https://www.tiwaiisland.org/'
      },
      {
        name: 'Lakka Beach',
        description: 'Secluded beach with fishing villages and traditional culture.',
        image: 'https://sandee.com/_next/image?url=https%3A%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipOqOOiGxK5J-liR1_PdRiv6r3YjzXaftofYRADJ%3Ds1600-k-no&w=3840&q=75',
        location: 'Western Area Peninsula',
        link: 'https://www.visitsierraleone.org/laka-beach-resort-hard-rock-2/'
      },
      {
        name: 'Kambui Hills Forest Reserve',
        description: 'Protected forest with hiking trails and diverse wildlife.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/4/40/Pugu_hills_panorama_Pugu_Hills%2C_Kisarawe%2C_Kisarawe_DC%2C_Pwani.jpg',
        location: 'Eastern Province',
        link: 'https://www.visitsierraleone.org/kambui-hills'
      },
      {
        name: 'Sherbro Island',
        description: 'Large island with pristine beaches and traditional fishing communities.',
        image: 'https://sherbroislandcity.com/wp-content/uploads/2023/03/DSC06718-1024x683-1.jpg',
        location: 'Southern Province',
        link: 'https://www.visitsierraleone.org/sherbro-island/'
      },
      {
        name: 'Mamunta-Mayosso Wildlife Sanctuary',
        description: 'Wetland sanctuary with diverse bird species and wildlife.',
        image: 'https://i.ytimg.com/vi/UNkZGAstvBk/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBZCJz-fvUq6z7WMUQZV3xexWCQyQ',
        location: 'Northern Province',
        link: 'https://www.visitsierraleone.org/mamunta-mayosso/'
      },
      {
        name: 'Bureh Beach',
        description: 'Popular surfing destination with consistent waves and beach culture.',
        image: 'https://pbs.twimg.com/media/Fgj4Mh2aEAAEO3w?format=jpg&name=4096x4096',
        location: 'Western Area Peninsula',
        link: 'https://www.visitsierraleone.org/bureh-beach-surf-club-a-laidback-paradise-in-sierra-leone/'
      },
      {
        name: 'Kangari Hills Forest Reserve',
        description: 'Mountain forest reserve with hiking trails and scenic views.',
        image: 'https://reddogretreat.com/wp-content/uploads/2014/03/RD-Landscape-IMG_1885.jpg',
        location: 'Northern Province',
        link: 'https://www.visitsierraleone.org/kangari-hills'
      },
      {
        name: 'Freetown Central Mosque',
        description: 'Beautiful mosque with Islamic architecture and cultural significance.',
        image: 'https://www.islamicarchitecturalheritage.com/wp-content/uploads/2020/09/freetown-central-mosque-gaddafi-mosque-sierra-leone.jpg',
        location: 'Freetown',
        link: 'https://www.islamicarchitecturalheritage.com/listings/freetown-central-mosque-gaddafi-mosque-sierra-leone'
      },
      {
        name: 'Lumley Beach',
        description: 'Popular urban beach with restaurants and nightlife.',
        image: 'https://www.musicinafrica.net/sites/default/files/styles/profile_images_large/public/images/music_professional_profile/201704/lumley-beach-panoramio.jpg?itok=LWp75DjL',
        location: 'Freetown',
        link: 'https://tourismsierraleone.com/attractions/lumley-beach/'
      },
      {
        name: 'Bintumani Peak',
        description: 'Highest mountain in West Africa with challenging hiking trails and spectacular views.',
        image: 'https://i0.wp.com/muzungutravel.com/wp-content/uploads/2023/03/DSCF3546-1.jpg?fit=6240%2C3512&ssl=1',
        location: 'Northern Province',
        link: 'https://tourismsierraleone.com/where-to-go/loma-mountains-and-mount-bintumani/'
      }
    ],
    transportation: [
      {
        type: 'Coastal Boat Transfer',
        description: 'Luxury boat transfers to pristine islands and coastal destinations.',
        price: '$100-200/day',
        route: 'Freetown to Banana Islands'
      },
      {
        type: 'Rainforest 4WD',
        description: 'Premium 4WD vehicles for rainforest exploration and wildlife viewing.',
        price: '$150-300/day',
        route: 'Interior Rainforest Regions'
      },
      {
        type: 'Helicopter Tours',
        description: 'Scenic helicopter flights over beaches and rainforest.',
        price: '$300-600/hour',
        route: 'Freetown Peninsula'
      },
      {
        type: 'Luxury Beach Transfer',
        description: 'Private transfers to exclusive beach destinations.',
        price: '$80-150',
        route: 'Freetown to Peninsula Beaches'
      }
    ],
    hotels: [
      {
        name: 'The Place Resort',
        description: 'Luxury beachfront resort offering world-class amenities and pristine beach access.',
        image: 'https://images.trvl-media.com/lodging/8000000/7870000/7863300/7863256/79e836f9.jpg?impolicy=resizecrop&rw=1200&ra=fit',
        rating: 4,
        price: '$200-400',
        location: 'Tokeh Beach',
        bookingLink: 'https://expedia.com/affiliate/faFfTfZ'
      },
      {
        name: 'Radisson Blu Mammy Yoko Hotel',
        description: 'Premium hotel with panoramic views of Aberdeen Beach and luxury facilities.',
        image: 'https://images.trvl-media.com/lodging/8000000/7900000/7897600/7897506/dae18feb.jpg?impolicy=resizecrop&rw=1200&ra=fit',
        rating: 4,
        price: '$150-300',
        location: 'Aberdeen, Freetown',
        bookingLink: 'https://expedia.com/affiliate/TwCqoQr'
      },
      {
        name: 'Banana Island Resort',
        description: 'Exclusive island resort with pristine beaches and luxury accommodations.',
        image: 'https://ucarecdn.com/8d6edb00-970f-43a0-986a-e3dcb8d2503a/',
        rating: 5,
        price: '$400-800',
        location: 'Banana Islands',
        bookingLink: 'https://bananaislandsierraleone.com/'
      },
      {
        name: 'Bintumani Hotel',
        description: 'Historic hotel in downtown Freetown with modern amenities and city views.',
        image: 'https://images.trvl-media.com/lodging/119000000/118320000/118319900/118319854/a71f6da4.jpg?impolicy=resizecrop&rw=1200&ra=fit',
        rating: 3,
        price: '$80-160',
        location: 'Freetown',
        bookingLink: 'https://expedia.com/affiliate/tzDSHGQ'
      },
      {
        name: 'Tacugama Eco Lodge',
        description: 'Eco-friendly lodge in the rainforest near the chimpanzee sanctuary.',
        image: 'https://www.tacugama.com/wp-content/uploads/2022/06/WhatsApp-Image-2022-06-30-at-12.42.03-PM.jpeg',
        rating: 4,
        price: '$120-250',
        location: 'Western Area Peninsula',
        bookingLink: 'https://www.tacugama.com/ecolodges/booknow/'
      },
      {
        name: 'River Lodge',
        description: 'Boutique lodge on the river with traditional architecture and modern comfort.',
        image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/ea/4a/75/20180413-152720-largejpg.jpg?w=1200&h=1200&s=1',
        rating: 4,
        price: '$100-200',
        location: 'River Number Two',
        bookingLink: 'https://tariqresort.com/'
      },
      {
        name: 'Lakka Lodge',
        description: 'Beachfront lodge with traditional fishing village atmosphere.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4npFz_P9h2s66ZAJEkwNQYSf2_tWAjTK8svl2rYpox_CkWSBzrmymsNTvy8AxPMHTIaqpfmfXC6FlEKMR6-TuZlg1s6SbM4ZlYesuaIBabar-U8eavKjneBn24Acfvo_t1Hk4BTx=s680-w680-h510-rw',
        rating: 3,
        price: '$60-120',
        location: 'Lakka Beach',
        bookingLink: 'https://www.lakkabeach.com/'
      },
      {
        name: 'Franco\'s Place',
        description: 'Boutique guesthouse with personalized service and local charm.',
        image: 'https://i.ytimg.com/vi/b31j1SXbmWI/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA0XMVmwj9V4XB5lHZhgPYeoF1zuQ',
        rating: 4,
        price: '$90-180',
        location: 'Freetown',
        bookingLink: 'https://www.francosplace.com/'
      },
      {
        name: 'Bureh Beach Resort',
        description: 'Surfing resort with beachfront accommodations and water sports.',
        image: 'https://www.visitsierraleone.org/wp-content/uploads/2017/11/DJI_0258-800x600.jpg',
        rating: 3,
        price: '$70-140',
        location: 'Bureh Beach',
        bookingLink: 'https://www.google.com/search?sca_esv=cb1e697b99ad7555&sxsrf=AE3TifPUmkeb6pb_1e6Vq6haWLrj5f7iag:1757623042807&q=Bureh+Beach+Resort+sierra+leone&source=lnms&fbs=AIIjpHxU7SXXniUZfeShr2fp4giZ1Y6MJ25_tmWITc7uy4KIei8e83z1Irt2kQIdrQRStzvCIfgW9ZNWPRAh5Aif9_QxEguvEFEOkzU7Yl0ttcKTZe8uvwVb8TMShfrzYhKUx-SBAACA2js0tCWVrp6qk4ebUVTcbC6rBqwt9wcBAnFh9dh8DHsmX4vdLQ5KYjohE9LHPMvvXe3hCli3UDfkowHSGWQvOw&sa=X&ved=2ahUKEwjOivaIyNGPAxXS_7sIHc3OMp0Q0pQJegQIBhAB&biw=1821&bih=798&dpr=0.75#vhid=/g/11twv0sng6&vssid=hepl'
      },
      {
        name: 'Gola Rainforest Lodge',
        description: 'Eco-lodge in the heart of the rainforest with wildlife viewing.',
        image: 'https://live.staticflickr.com/7568/15449580504_18e1941d90_z.jpg',
        rating: 4,
        price: '$150-300',
        location: 'Gola Rainforest',
        bookingLink: 'https://golarainforest.org/'
      },
      {
        name: 'Sherbro Island Resort',
        description: 'Island resort with pristine beaches and traditional culture.',
        image: 'https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/6CD7/production/_132936872_7caa1f2a-5860-4837-b88e-5edfe98c5d83.jpg',
        rating: 4,
        price: '$180-350',
        location: 'Sherbro Island',
        bookingLink: 'https://www.visitsierraleone.org/sherbro-island-an-unspoilt-tropical-beauty/'
      },
      {
        name: 'Sierra Lighthouse Hotel',
        description: 'The Sierra Lighthouse Hotel, located on the coast, offers a peaceful escape with modern comforts.',
        image: 'https://images.trvl-media.com/lodging/20000000/19670000/19668900/19668834/b7561d15.jpg?impolicy=resizecrop&rw=1200&ra=fit',
        rating: 3,
        price: '$80-160',
        location: 'Loma Mountains',
        bookingLink: 'https://www.expedia.com/Freetown-Hotels-SIERRA-LIGHTHOUSE-HOTEL.h19668834.Hotel-Information'
      },
      {
        name: 'Tiwai Island Eco Lodge',
        description: 'Wildlife sanctuary lodge with primate viewing and research facilities.',
        image: 'https://www.tiwaiisland.org/wp-content/uploads/2022/06/8.-About_Landing-page.jpg',
        rating: 4,
        price: '$120-240',
        location: 'Tiwai Island',
        bookingLink: 'https://www.tiwaiisland.org/visit/accommodation-and-food/'
      },
      {
        name: 'Aberdeen Beach Hotel',
        description: 'Beachfront hotel with modern amenities and ocean views.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq1p8-oa2EHePdB6mXC38J43YyPLHq6rSqTg&s',
        rating: 3,
        price: '$100-200',
        location: 'Aberdeen Beach',
        bookingLink: 'https://www.google.com/search?q=aberdeen+beach+hotel+freetown&sca_esv=cb1e697b99ad7555&sxsrf=AE3TifMqn7oVJXM_fyfXlpgYv7E68kJY8w%3A1757624456340&ei=iDjDaNjNFLe2i-gP9_bdsA4&oq=Aberdeen+Beach+Hotel&gs_lp=Egxnd3Mtd2l6LXNlcnAiFEFiZXJkZWVuIEJlYWNoIEhvdGVsKgIIADIHECMYsAMYJzIHECMYsAMYJzIIEAAYgAQYsAMyCRAAGLADGAgYHjIJEAAYsAMYCBgeMgkQABiwAxgIGB4yCRAAGLADGAgYHjIJEAAYsAMYCBgeMgkQABiwAxgIGB4yCRAAGLADGAgYHki8FVAAWABwAXgAkAEAmAEAoAEAqgEAuAEByAEAmAIBoAIQmAMAiAYBkAYKkgcBMaAHALIHALgHAMIHAzMtMcgHDA&sclient=gws-wiz-serp'
      },
      {
        name: 'Outamba Safari Lodge',
        description: 'Safari lodge near Outamba-Kilimi National Park with wildlife viewing.',
        image: 'https://theothersierraleone.com/wp-content/uploads/2017/07/vildlivet-i-afrika.png',
        rating: 4,
        price: '$140-280',
        location: 'Outamba-Kilimi',
        bookingLink: 'https://www.visitsierraleone.org/wonders-outamba-kilimi-national-park/'
      },
      {
        name: 'Peninsula Beach Resort',
        description: 'Luxury beach resort with multiple beaches and water activities.',
        image: 'https://www.visitsierraleone.org/wp-content/uploads/2020/10/DJI_0025-scaled-1.jpg',
        rating: 4,
        price: '$200-400',
        location: 'Western Area Peninsula',
        bookingLink: 'https://www.tripadvisor.com/Hotel_Review-g673822-d12106194-Reviews-Peninsula_Lodge-Lakka_Western_Area.html'
      },
      {
        name: 'Turtle Islands Lodge',
        description: 'Exclusive lodge on protected turtle nesting islands.',
        image: 'https://ipctravel.com/wp-content/uploads/2022/07/turtle.jpg',
        rating: 5,
        price: '$300-600',
        location: 'Turtle Islands',
        bookingLink: 'https://oldturtlebay.com/'
      },
      {
        name: 'Freetown Hill Station',
        description: 'Historic hill station with colonial architecture and mountain views.',
        image: 'https://images.trvl-media.com/lodging/9000000/8140000/8130300/8130241/01293d2b.jpg?impolicy=resizecrop&rw=1200&ra=fit',
        rating: 3,
        price: '$70-140',
        location: 'Freetown Hills',
        bookingLink: 'https://expedia.com/affiliate/8izcUIq'
      },
      {
        name: 'Kangari Hills Lodge',
        description: 'Mountain lodge with forest trails and traditional village visits.',
        image: 'https://q-xx.bstatic.com/xdata/images/hotel/max600/706397259.jpg?k=46cb57f5d463fadf58199e5c71ee7a15ab8f7927d5c2414db5271118d1bc978b&o=',
        rating: 3,
        price: '$90-180',
        location: 'Kangari Hills',
        bookingLink: 'https://www.visitsierraleone.org/kangari-hills-forest-reserve/'
      },
      {
        name: 'Lumley Beach Hotel',
        description: 'Urban beach hotel with restaurants and nightlife access.',
        image: 'https://images.trvl-media.com/lodging/20000000/19480000/19478500/19478485/4899e13e.jpg?impolicy=resizecrop&rw=1200&ra=fit',
        rating: 3,
        price: '$80-160',
        location: 'Lumley Beach',
        bookingLink: 'https://expedia.com/affiliate/HYxoCNL'
      }
    ],
    restaurants: [
      {
        name: 'The Hub Restaurant',
        cuisine: 'Fresh seafood and international cuisine with spectacular ocean views.',
        image: 'https://images.trvl-media.com/lodging/14000000/13420000/13416200/13416191/ffc69af8.jpg?impolicy=resizecrop&rw=1200&ra=fit',
        rating: 4,
        priceRange: '$15-35',
        location: 'Aberdeen Beach',
        link: 'https://expedia.com/affiliate/YCN4ILz'
      },
      {
        name: 'Mama\'s Kitchen',
        cuisine: 'Traditional Sierra Leonean cuisine featuring local ingredients and authentic flavors.',
        image: 'https://www.switsalone.com/wp-content/uploads/2022/01/81221438_108716664010964_3059258614508366454_n.jpeg',
        rating: 4,
        priceRange: '$10-25',
        location: 'Freetown',
        link: 'https://share.google/3FD9HN8PKPWoBouwK'
      },
      {
        name: 'Tropical Restaurant',
        cuisine: 'Local Sierra Leonean cuisine with African and seafood specialties.',
        image: 'https://lh3.googleusercontent.com/p/AF1QipOSvmRhVFj-zieL99QOMBwJx4CYYIqH3UJagtrS=s680-w680-h510-rw',
        rating: 4,
        priceRange: '$18-40',
        location: 'Freetown',
        link: 'https://g.co/kgs/QtPS8wb'
      },
      {
        name: 'Country Lodge Restaurant',
        cuisine: 'Continental and local cuisine in a garden setting with live music.',
        image: 'https://countrylodgesl.com/wp-content/uploads/2025/07/2-3.jpg',
        rating: 4,
        priceRange: '$12-30',
        location: 'Freetown',
        link: 'https://countrylodgesl.com/dining/'
      },
      {
        name: 'Basha Bakery & Restaurant',
        cuisine: 'Authentic restaurant with traditional Sierra Leonean dishes and spices.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrRCo7ZsLYWn7gen1CsVDZEISrf1fzedkfzE-m4F_FOZlvbefHT9ah_OqYFud3F3p9AFE1fh0qc55O-_Yys8vaE8nzvkG8BvH1RN6OCGwHdbSaN-jvRh2IjBVpDw3IU94D-9sMs4w=s680-w680-h510-rw',
        rating: 4,
        priceRange: '$20-45',
        location: 'Freetown',
        link: 'https://share.google/ev6iuUG61EmIxIrsT'
      },
      {
        name: 'Swan restaurant & Grill',
        cuisine: 'Come and experience our Italian Cuisine and our tasty Continental Selection.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4npze-uqJGt4a0MszhtQqN8i9VlQ6X451_Hz3GsMcnXFyj73_r40SgjuKuHCJWZ3RwajqpYUSxX3hw7xvToGChToOEF2Ey4OZSs8BsfVhKz4AJKQcRr3cQ2k4sSaSEHyiljnBC_-=s680-w680-h510-rw',
        rating: 4,
        priceRange: '$15-35',
        location: 'Freetown',
        link: 'https://homesuiteshotelsl.com/menu/'
      },
      {
        name: 'The Place Restaurant',
        cuisine: 'Beachfront dining with fresh seafood and tropical cocktails.',
        image: 'https://images.squarespace-cdn.com/content/v1/642aed635b12e36cd599b5f7/7ba1d529-78f7-4db7-9f67-d28bc9254104/E37B9700-Enhanced-NR-2.jpg?format=1500w',
        rating: 4,
        priceRange: '$18-40',
        location: 'Tokeh Beach',
        link: 'https://www.stayattheplace.com/dine'
      },
      {
        name: 'Roof Garden Bar & Restaurant',
        cuisine: 'Casual Sierra Leonean restuarant with grilled seafood, local and international dishes.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4npjKxAMJqflEhC1MyuG-fEJ6lEQoCBXr_ypX2zaaTANw7HMqxDdtw8zgFWVE51xnUwZtOh6F1jR63xSqveUYYeuVDTYAGFyNulNN7mPn-supqIr1hyHadDScqPiiLcSay07Dn1zPUc4CVOO=s680-w680-h510-rw',
        rating: 3,
        priceRange: '$10-25',
        location: 'Bureh Beach',
        link: 'https://share.google/zzKbfMJ81HWHQr4Zm'
      },
      {
        name: 'Goat Kingdom Kenema',
        cuisine: 'Eco-friendly Sierra Leone Dishes with local organic ingredients and street views.',
        image: 'https://sallukamuskay.com/wp-content/uploads/2025/06/Three-Things-You-Should-Try-When-You-Visit-Kenema-800x450.jpeg',
        rating: 4,
        priceRange: '$1-15',
        location: 'Kenema',
        link: 'https://share.google/4yPAoPZ1yZcZq5ehZ'
      },
      {
        name: 'BAMA FAST FOOD RESTAURANT',
        cuisine: 'Local SIerra Leonean restaurant with grilled fish and traditional Sierra Leonean dishes.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4noLXgRZtCtg9ATCA3tsOKIuMoNjhTkDhYou4dZvZzDBCg5zMjnsKwpA4PqbWYYvVZ3rXhbLEWaoOBGh5Lx_JZjeViTukrmJPdX3Vzw-Z3RMbT123UEJotatJl-F6Mne73VvNoNlvQeREgMB=s680-w680-h510-rw',
        rating: 3,
        priceRange: '$8-20',
        location: 'Makeni',
        link: 'https://g.co/kgs/a3wZduK'
      },
      {
        name: 'Chez Samai/s pizzeria restaurant',
        cuisine: 'Exclusive local Sierra Leonean pizzeria restaurant .',
        image: 'https://iorigin.mindtrip.ai/restaurants/b2cb/6f9e/b99f/947c/c0fa/1777/0198/a7ad',
        rating: 5,
        priceRange: '$25-50',
        location: 'Banana Islands',
        link: 'https://bustamantesamai.wixsite.com/chezsamaispizzeriare'
      },
      {
        name: 'Lumley Beach Cafe',
        cuisine: 'Popular beachfront restaurant with live music and local atmosphere.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqwcDWDTNKNxnSYODrnVJg22AHahceSwkgAQo0eFAnkYSg6qkQkYa0SqK-1jQjjPKAMdKDEXuxv9KydgVsk3XsPCmSZPWLbVVFLdetyfLFQA4yiV0arg-TlCFGdpSMo0p_icrprsw=s680-w680-h510-rw',
        rating: 3,
        priceRange: '$10-25',
        location: 'Lumley Beach',
        link: 'https://g.co/kgs/WNNkgNX'
      },
      {
        name: 'Ruri/s Restaurant',
        cuisine: 'Local dining with African ingredients and traditional cooking methods.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4npn6qiNKc4JwAPjFjEa46USfXgRqPO93WgXzdE07Z7PxdOtHu4ylTyMRK-8kGMbtcP44z8Y2_IxFN2RoYTpusCeeso27iLGzl9NT6WYJq-39BX7GFy2OZVOjtme7Vr5JYokwVf5=s680-w680-h510-rw',
        rating: 4,
        priceRange: '$5-20',
        location: 'Bo Town',
        link: 'https://share.google/NgmmVoL4wi4WS5KKV'
      },
      {
        name: 'Tokeh Beach Restaurant',
        cuisine: 'Beachfront restaurant with fresh seafood and international menu.',
        image: 'http://tokehbeach.com/wp-content/uploads/2015/10/sunbeds.jpg',
        rating: 4,
        priceRange: '$15-35',
        location: 'Tokeh Beach',
        link: 'https://tokehbeach.com/index.php/food_drink/'
      },
      {
        name: 'Doha/s Hotel And Restaurant',
        cuisine: 'Doha/s Hotel & Restaurant provides all varieties of food both national and international',
        image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/8e/e7/d6/pool-side.jpg?w=1000&h=-1&s=1',
        rating: 4,
        priceRange: '$10-22',
        location: 'Loma Mountains',
        link: 'https://www.google.com/search?q=dohas+hotel+and+restaurant&oq=Dohas+Hotel+And+Restaurant&gs_lcrp=EgZjaHJvbWUqBwgAEAAYgAQyBwgAEAAYgAQyCggBEAAYgAQYogQyCggCEAAYgAQYogQyCggDEAAYgAQYogTSAQc2MDFqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8'
      },
      {
        name: 'Tiwai Island Restaurant',
        cuisine: 'Wildlife sanctuary dining with eco-friendly practices and local ingredients.',
        image: 'https://www.visitsierraleone.org/wp-content/uploads/2010/02/bliss-patisserie-62-1394888233.jpg',
        rating: 4,
        priceRange: '$15-30',
        location: 'Tiwai Island',
        link: 'https://www.tiwaiisland.org/visit/accommodation-and-food/'
      },
      {
        name: 'Brimelia Vegetarian Restaurant',
        cuisine: '100% Vegetarian Dishes are cooked with very little pepe (chili) but more is provided on the side so that you can flavour to taste.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nocyLA_9PmYayxX_mmp-t-As-TB6697z90TvwpaWvfYCgaXZbmNig6gBoS_NQ-RzdIaXUS8bXvuAbswclbotRlAamTbQMAH2vCouZvqTAqHw0grfPqYKopUfelFd42jXm333B8a=s680-w680-h510-rw',
        rating: 5,
        priceRange: '$10-20',
        location: 'Freetown',
        link: 'https://www.aberdeenbeachgrill.sl/'
      },
      {
        name: 'Bo Central Restaurant',
        cuisine: 'Traditional Sierra Leonean cuisine with authentic flavors and cultural atmosphere.',
        image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/73/35/47/photo0jpg.jpg',
        rating: 3,
        priceRange: '$8-20',
        location: 'Bo',
        link: 'https://bustamantesamai.wixsite.com/chezsamaispizzeriare'
      },
      {
        name: 'Kenema Palace Restaurant',
        cuisine: 'Regional cuisine with traditional dishes and local specialties.',
        image: 'https://media.evendo.com/locations-resized/RestaurantImages/360x263/8c5cb36b-58ca-4ec0-af75-74fea6eff251',
        rating: 3,
        priceRange: '$8-20',
        location: 'Kenema',
        link: 'https://g.co/kgs/CYzEjy7'
      },
      {
        name: 'Yeanne/s Restaurant and Multi Purpose Hall',
        cuisine: 'Local Sierra Leonean restaurant with traditional cuisine and relaxed atmosphere.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4npFmirN0hMymMbNkSV3u3lYkoPKocrzDIY6ccSd2XACawaxq3elvFlN8cgjGcXAYDCsBPGG8HI_41IYzPUwEoyw_cNMP1t2s4WvxdZb2zeK6LhJv-36ZfWTPbupmrduI9QHWki0dw=s680-w680-h510-rw',
        rating: 4,
        priceRange: '$8-20',
        location: 'Makeni',
        link: 'https://share.google/bGvnm7ZHgpzwViA28'
      }
    ]
  },
  {
    name: 'Nigeria',
    description: 'Africa\'s most populous nation offering vibrant culture, Nollywood entertainment, diverse landscapes from Lagos beaches to northern savannas, and rich culinary traditions.',
    image: 'https://cimages.timbu.com/guides/2017/07/Aso-Rock-2.jpg',
    region: 'West Africa',
    population: '232.7 million',
    attractions: [
      {
        name: 'Lagos Island',
        description: 'Historic commercial center with colonial architecture, markets, and vibrant street life in Nigeria\'s economic capital.',
        image: 'https://images.nigeriapropertycentre.com/area-guides/be2256e9-442d-4887-bbd1-28ceb74d84ba.jpg',
        location: 'Lagos',
        link: 'https://ntda.gov.ng/'
      },
      {
        name: 'Yankari National Park',
        description: 'Nigeria\'s premier wildlife destination with elephants, lions, and natural hot springs.',
        image: 'https://www.icirnigeria.org/wp-content/uploads/2023/10/First-Gate-of-Yankari-Game-Rerserve-at-Mainamaji.jpeg',
        location: 'Bauchi State',
        link: 'https://share.google/VaGcYaAHnavN5PJpK'
      },
      {
        name: 'Olumo Rock',
        description: 'Historic granite monolith offering panoramic views and cultural significance to the Egba people.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nr3MDvKFTsONesyu2mEnxoPWb8YdBTtg56yc7gDiOlGPP7kYW5TcX_XzSJt5ilPvWNzSZDY4WqkkJ3GD7cR-r4hmEAEKrwOqIJGLlB8QwuzdZ_I1Yp5LXi4VCJP2fxYaaHXZOwxvQ=s680-w680-h510-rw',
        location: 'Abeokuta, Ogun State',
        link: 'https://share.google/IF4bu8RYUyHF9Vley'
      },
      {
        name: 'Zuma Rock',
        description: 'Iconic monolith known as the "Gateway to Abuja" with mysterious human face formation.',
        image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/4b/63/d4/the-magnificent-zuma.jpg?w=800&h=-1&s=1',
        location: 'Niger State',
        link: 'https://www.tripadvisor.com/Attraction_Review-g3174714-d2718894-Reviews-Zuma_Rock-Madalla_Federal_Capital_Territory.html'
      },
      {
        name: 'Osun-Osogbo Sacred Grove',
        description: 'UNESCO World Heritage site with ancient Yoruba shrines and sacred forest.',
        image: 'https://i.ytimg.com/vi/Tv9tjsulx98/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB5P-kw0-PrvPmjzEQaWhcRpVLl9w',
        location: 'Osun State',
        link: 'https://museum.ng/osun-osogbo-sacred-grove/'
      },
      {
        name: 'Calabar Carnival',
        description: 'Africa\'s biggest street party with colorful parades, music, and cultural celebrations.',
        image: 'https://i.ytimg.com/vi/BjZnFAlvVF0/maxresdefault.jpg',
        location: 'Cross River State',
        link: 'https://www.carnival.crossriverstate.gov.ng/'
      },
      {
        name: 'Idanre Hills',
        description: 'Ancient hills with 660 steps leading to historic settlements and breathtaking views.',
        image: 'https://lh7-rt.googleusercontent.com/docsz/AD_4nXco3p3uiRs47RZ6zT7lbl6taLpWDU-h4xZzfbpVPahkPBTtTLsAkNDG8urjqFiQivaeSxMraUuwsf6hyZNJX855C14TSLXvqu4OQloMtl2-x-kLa3-AfnThm_i99IwnpLrjcqljnaFmmeaGr-qJsm4?key=H1S9E3iaDpLjltnnhBT_JqmT',
        location: 'Ondo State',
        link: 'https://share.google/qIvDS1Dmal17AhidZ'
      },
      {
        name: 'Kainji National Park',
        description: 'Large national park with diverse wildlife, including hippos, elephants, and over 350 bird species.',
        image: 'https://s3.ap-southeast-1.amazonaws.com/gounesco.com/wp-content/uploads/2018/06/04210154/Screen-Shot-2018-06-04-at-7.30.53-PM.png',
        location: 'Niger/Kwara States',
        link: 'https://nationalparksassociation.org/nigeria-national-parks/kainji-national-park/'
      },
      {
        name: 'Benin City Royal Palace',
        description: 'Historic palace of the Oba of Benin with bronze plaques and traditional architecture.',
        image: 'https://dawodu.com/storage/tourism/1651254120-Front-page.jpg',
        location: 'Edo State',
        link: 'https://edo-nation.net/tourism/royal-palace-of-the-oba-of-benin-5'
      },
      {
        name: 'Gurara Falls',
        description: 'Spectacular waterfall with swimming pools and picnic areas in a scenic setting.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrJLOFg8zE9B_wrMBbjh9tj1xsWQ6OraHf9jloQhNQqAJLvBOvYc_020QelDvTl3MntkAXBFPv8ZYpD-lo7IZq4hc96sNa6hKLjlUrY0Tf0tP69YN6KTmdZYGfqxprNKyLew0w=s680-w680-h510-rw',
        location: 'Niger State',
        link: 'https://share.google/HZW5wNnEsDlIyuW4R'
      },
      {
        name: 'Obudu Mountain Resort',
        description: 'Mountain resort with cable car, cool climate, and stunning highland scenery.',
        image: 'https://lh3.googleusercontent.com/p/AF1QipPQ3mU38AV-ANd-SMW1zm58acVH0zYhM7ubevNu=s680-w680-h510-rw',
        location: 'Cross River State',
        link: 'https://www.obudumountainresort.com/'
      },
      {
        name: 'Ogbunike Caves',
        description: 'Network of caves with underground streams and traditional spiritual significance.',
        image: 'https://keckcaves.org/wp-content/uploads/2022/02/Ogbunike-Caves.png',
        location: 'Anambra State',
        link: 'https://share.google/0fJj5QpDGkb2FRf4U'
      },
      {
        name: 'Tafawa Balewa Tomb',
        description: 'Memorial to Nigeria\'s first Prime Minister with historical significance and architecture.',
        image: 'https://i.ytimg.com/vi/Js9zi6k-53E/maxresdefault.jpg',
        location: 'Bauchi State',
        link: 'https://orivvio.com/attraction/tafawa-balewa-tomb/#:~:text=The%20Tafawa%20Balewa%20Tomb%20is,first%20and%20only%20Prime%20Minister.'
      },
      {
        name: 'Awhum Waterfall',
        description: 'Beautiful waterfall with natural cave and spiritual significance for pilgrims.',
        image: 'https://media.premiumtimesng.com/wp-content/files/2022/12/The-road-to-waterfall-fenced-with-granite-rock-CREDIT-FAAN-e1672479997953.jpg',
        location: 'Enugu State',
        link: 'https://share.google/CNAH4Q77OYwV2WNYU'
      },
      {
        name: 'Sukur Cultural Landscape',
        description: 'UNESCO World Heritage site with traditional architecture and terraced fields.',
        image: 'https://images.timbu.com/contents-5e9a2abd9fb44c03958f72d3c2466012/9e9a8e9e-a3b5-4a3a-9c62-5a11eb970ce1.png',
        location: 'Adamawa State',
        link: 'https://whc.unesco.org/en/list/938/'
      },
      {
        name: 'Ikogosi Warm Springs',
        description: 'Natural phenomenon where warm and cold springs meet without mixing.',
        image: 'https://i.pinimg.com/736x/8c/c9/dc/8cc9dc2ffd7958749832a385dc08da08.jpg',
        location: 'Ekiti State',
        link: 'https://www.ikogosiresort.com/'
      },
      {
        name: 'Argungu Fishing Festival',
        description: 'Annual fishing festival with traditional competitions and cultural celebrations.',
        image: 'https://lh3.googleusercontent.com/ci/AL18g_R3fBf763zqWcCQ-bosMBYJAyB3f-PyxYeCGiQSbi55ptDdpYFGZJJajf_qOge6M0xcCzbHBIU=s1200',
        location: 'Kebbi State',
        link: 'https://artsandculture.google.com/story/argungu-festival-africa-s-biggest-fishing-celebration-nigerian-tourism-development-corporation/lAWBWE_EP-keIQ?hl=en'
      },
      {
        name: 'Aso Rock',
        description: 'Iconic rock formation in Abuja serving as the backdrop to Nigeria\'s seat of power.',
        image: 'https://i.ytimg.com/vi/_R3RsKqVaSg/maxresdefault.jpg',
        location: 'Abuja',
        link: 'https://statehouse.gov.ng/presidential-villa/the-villa-2/'
      },
      {
        name: 'Matsirga Waterfalls',
        description: 'Series of cascading waterfalls in a scenic forest setting perfect for hiking.',
        image: 'https://images.timbu.com/contents-df6ad054314c4412b678d8e8c21340a4/49a2dfca-0088-4f4c-b285-070eeb1fc785.png',
        location: 'Kaduna State',
        link: 'https://share.google/VbqBkTuwgZ6POPMO6'
      },
      {
        name: 'Nike Art Gallery',
        description: 'Largest art gallery in West Africa showcasing contemporary Nigerian art and culture.',
        image: 'https://i.ytimg.com/vi/jJTjpBd_Ls8/maxresdefault.jpg',
        location: 'Lagos',
        link: 'https://nikeartfoundation.com/'
      }
    ],
    transportation: [
      {
        type: 'Luxury Airport Transfer',
        description: 'Premium chauffeur service with luxury vehicles for airport transfers.',
        price: '$30-80',
        route: 'Lagos/Abuja Airports to City Center'
      },
      {
        type: 'Private City Tours',
        description: 'Customized city tours with professional guides and air-conditioned vehicles.',
        price: '$100-250/day',
        route: 'Lagos/Abuja City Tours'
      },
      {
        type: 'Domestic Flights',
        description: 'Regular flights connecting major Nigerian cities.',
        price: '$80-200',
        route: 'Lagos to Abuja/Port Harcourt'
      },
      {
        type: 'Safari Vehicles',
        description: '4WD vehicles for national park visits and wildlife viewing.',
        price: '$150-300/day',
        route: 'Yankari/Kainji National Parks'
      }
    ],
    hotels: [
      {
        name: 'Eko Hotel & Suites',
        description: 'Luxury waterfront hotel in Lagos with multiple restaurants, spa, and conference facilities.',
        image: 'https://images.trvl-media.com/lodging/2000000/1090000/1085100/1085067/2f8cac43.jpg?impolicy=resizecrop&rw=1200&ra=fit',
        rating: 5,
        price: '$200-400',
        location: 'Lagos',
        bookingLink: 'https://expedia.com/affiliate/GcgfCHd'
      },
      {
        name: 'Transcorp Hilton Abuja',
        description: 'Premier hotel in Nigeria\'s capital with luxury amenities and government district location.',
        image: 'https://images.trvl-media.com/lodging/1000000/20000/15000/14964/51ac2858.jpg?impolicy=resizecrop&rw=1200&ra=fit',
        rating: 5,
        price: '$180-350',
        location: 'Abuja',
        bookingLink: 'https://expedia.com/affiliate/EZ9YSsz'
      },
      {
        name: 'Four Points by Sheraton Lagos',
        description: 'Modern business hotel with contemporary amenities and central Lagos location.',
        image: 'https://images.trvl-media.com/lodging/4000000/3490000/3482300/3482290/0d627843.jpg?impolicy=resizecrop&rw=1200&ra=fit',
        rating: 4,
        price: '$150-300',
        location: 'Lagos',
        bookingLink: 'https://expedia.com/affiliate/9ATTBbh'
      },
      {
        name: 'Lagos Marriott Hotel Ikeja',
        description: 'Consider a stay at Lagos Marriott Hotel Ikeja and take advantage of a poolside bar, a terrace, and a garden. Treat yourself to a massage, a facial, or a manicure/pedicure at Isade Spa, the onsite spa.',
        image: 'https://images.trvl-media.com/lodging/68000000/67300000/67292300/67292293/b8d86d2f.jpg?impolicy=resizecrop&rw=1200&ra=fit',
        rating: 4,
        price: '$80-160',
        location: 'Lagos',
        bookingLink: 'https://expedia.com/affiliate/hkFdQgA'
      },
      {
        name: 'Obudu Mountain Resort',
        description: 'Mountain resort with cable car access, cool climate, and scenic highland views.',
        image: 'https://lh3.googleusercontent.com/p/AF1QipPQ3mU38AV-ANd-SMW1zm58acVH0zYhM7ubevNu=s680-w680-h510-rw',
        rating: 4,
        price: '$120-250',
        location: 'Cross River State',
        bookingLink: 'https://www.obudumountainresort.com/'
      },
      {
        name: 'Radisson Blu Anchorage Hotel',
        description: 'Luxury hotel on Victoria Island with marina views and upscale amenities.',
        image: 'https://images.trvl-media.com/lodging/5000000/4130000/4125700/4125693/0f3fa14b.jpg?impolicy=resizecrop&rw=1200&ra=fit',
        rating: 5,
        price: '$220-450',
        location: 'Lagos',
        bookingLink: 'https://expedia.com/affiliate/ou4A9Al'
      },
      {
        name: 'InterContinental Lagos',
        description: 'Premium hotel with panoramic city views, multiple dining options, and luxury spa.',
        image: 'https://images.trvl-media.com/lodging/5000000/4960000/4955900/4955853/b8563b5c.jpg?impolicy=resizecrop&rw=1200&ra=fit',
        rating: 5,
        price: '$250-500',
        location: 'Lagos',
        bookingLink: 'https://expedia.com/affiliate/d7gapzQ'
      },
      {
        name: 'Fraser Suites Abuja',
        description: 'Luxury hotel in Abuja with elegant accommodations and comprehensive facilities.',
        image: 'https://images.trvl-media.com/lodging/20000000/19080000/19073900/19073892/7831f1e3.jpg?impolicy=resizecrop&rw=1200&ra=fit',
        rating: 4,
        price: '$140-280',
        location: 'Abuja',
        bookingLink: 'https://expedia.com/affiliate/rBNOPA4'
      },
      {
        name: 'Le Meridien Ogeyi Place',
        description: 'Contemporary hotel in Victoria Island with modern design and luxury amenities.',
        image: 'https://ogeyiplace.com/img/hotel-side-view.jpg',
        rating: 5,
        price: '$200-400',
        location: 'Port Harcourt',
        bookingLink: 'https://ogeyiplace.com/'
      },
      {
        name: 'BON Hotel Ikeja',
        description: 'Modern business hotel near Lagos airport with contemporary amenities.',
        image: 'https://images.trvl-media.com/lodging/77000000/76830000/76830000/76829942/3a679053.jpg?impolicy=resizecrop&rw=1200&ra=fit',
        rating: 4,
        price: '$100-200',
        location: 'Lagos',
        bookingLink: 'https://expedia.com/affiliate/Fudaxtp'
      },
      {
        name: 'Protea Hotel Ikeja',
        description: 'Comfortable hotel with modern facilities and convenient airport location.',
        image: 'https://images.trvl-media.com/lodging/10000000/9090000/9087100/9087067/af3de2cc.jpg?impolicy=resizecrop&rw=1200&ra=fit',
        rating: 4,
        price: '$120-240',
        location: 'Lagos',
        bookingLink: 'https://expedia.com/affiliate/ZIJ9TZm'
      },
      {
        name: 'Hawthorn Suites Abuja',
        description: 'Extended stay hotel with apartment-style accommodations and business facilities.',
        image: 'https://images.trvl-media.com/lodging/4000000/3390000/3389500/3389414/af4975fc.jpg?impolicy=resizecrop&rw=1200&ra=fit',
        rating: 4,
        price: '$130-260',
        location: 'Abuja',
        bookingLink: 'https://expedia.com/affiliate/eKdQkP1'
      },
      {
        name: 'Sheraton Lagos Hotel',
        description: 'Established luxury hotel with comprehensive amenities and central location.',
        image: 'https://images.trvl-media.com/lodging/1000000/10000/600/533/e65b5258.jpg?impolicy=resizecrop&rw=1200&ra=fit',
        rating: 4,
        price: '$160-320',
        location: 'Lagos',
        bookingLink: 'https://expedia.com/affiliate/uHxIL44'
      },
      {
        name: 'Ikogosi Warm Springs Resort',
        description: 'Unique resort at the confluence of warm and cold springs with spa facilities.',
        image: 'https://images.trvl-media.com/lodging/97000000/96680000/96671000/96670908/67669ffd.jpg?impolicy=resizecrop&rw=1200&ra=fit',
        rating: 4,
        price: '$90-180',
        location: 'Ekiti State',
        bookingLink: 'https://expedia.com/affiliate/rIrAwbe'
      },
      {
        name: 'Abuja Continental Hotel',
        description: 'You can look forward to a poolside bar, shopping on site, and a garden at Abuja Continental Hotel. For some rest and relaxation, visit the sauna.',
        image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/d0/2b/57/abuja-continental-hotel.jpg?w=900&h=500&s=1',
        rating: 4,
        price: '$70-140',
        location: 'Abuja',
        bookingLink: 'https://expedia.com/affiliate/mT0pT6d'
      },
      {
        name: 'Benin Royal Hotel',
        description: 'Hotel near the historic Benin Royal Palace with cultural significance.',
        image: 'https://images.trvl-media.com/lodging/10000000/9660000/9650800/9650760/f74183ed.jpg?impolicy=resizecrop&rw=1200&ra=fit',
        rating: 3,
        price: '$60-120',
        location: 'Benin City',
        bookingLink: 'https://expedia.com/affiliate/oa4O0k5'
      },
      {
        name: 'Kainji Safari Lodge',
        description: 'Safari lodge within Kainji National Park offering wildlife viewing experiences.',
        image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/82/bd/8d/chalet-number-1-under.jpg?w=1000&h=-1&s=1',
        rating: 5,
        price: '$80-160',
        location: 'Niger State',
        bookingLink: 'https://www.tripadvisor.com/Hotel_Review-g479224-d1749882-Reviews-Kaingu_Safari_Lodge-Kafue_National_Park.html'
      },
      {
        name: 'The George Lagos Hotel',
        description: 'Located close to Lagos Motor Boat Club and Nigerian National Museum, The George provides a terrace, an art gallery on site, and a coffee shop/cafe.',
        image: 'https://images.trvl-media.com/lodging/12000000/11750000/11742700/11742669/694bead3.jpg?impolicy=resizecrop&rw=1200&ra=fit',
        rating: 3,
        price: '$70-140',
        location: 'Lagos',
        bookingLink: 'https://expedia.com/affiliate/gmnztm8'
      },
      {
        name: 'Eko Signature',
        description: 'Located close to Silverbird Galleria and Nigerian National Museum, Eko Hotel Signature provides a coffee shop/cafe, a garden, and dry cleaning/laundry services.',
        image: 'https://images.trvl-media.com/lodging/101000000/100570000/100566900/100566821/efe00ff6.jpg?impolicy=resizecrop&rw=1200&ra=fit',
        rating: 5,
        price: '$60-120',
        location: 'Lagos',
        bookingLink: 'https://expedia.com/affiliate/AkVKZkq'
      },
      {
        name: 'The Delborough Lagos',
        description: 'Consider a stay at The Delborough Lagos and take advantage of free continental breakfast, a rooftop terrace, and a coffee shop/cafe. Be sure to enjoy a meal at the two on-site restaurants.',
        image: 'https://images.trvl-media.com/lodging/104000000/103060000/103058800/103058735/a0a26d49.jpg?impolicy=resizecrop&rw=1200&ra=fit',
        rating: 4,
        price: '$80-160',
        location: 'Lagos',
        bookingLink: 'https://expedia.com/affiliate/wLEr8vT'
      }
    ],
    restaurants: [
      {
        name: 'Nkoyo',
        cuisine: 'Upscale Nigerian cuisine with contemporary presentation and traditional flavors.',
        image: 'https://nkoyo.ng/wp-content/uploads/2025/04/DSC_0094-Enhanced-NRC.jpg',
        rating: 5,
        priceRange: '$25-50',
        location: 'Lagos',
        link: 'https://share.google/llH4aGPuJ07qeimcm'
      },
      {
        name: 'Terra Kulture',
        cuisine: 'Cultural center and restaurant serving authentic Nigerian dishes with art gallery.',
        image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgbAIluUeGJpVsBlajHVi4Q7zZwTaGO4QZLUZDkKOz91fkCLqculuZkZxsXWGK5lcO4CPa_sPJHS6PHXCxHEwuts9Zk1Tv6Kg8r989a00nNW0wH6R8JbbytNhDkqGljEHc5GzI6BQG9ex8j/s1600/Terra+kulture+lagos.JPG',
        rating: 4,
        priceRange: '$15-35',
        location: 'Lagos',
        link: 'https://restaurant.terrakulture.com/?_ga=2.211200273.504079964.1641124850-1040191239.1638485883'
      },
      {
        name: 'Shiro Restaurant',
        cuisine: 'Asian fusion cuisine with Japanese, Chinese, and Thai specialties.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrLkGzD7mTc9EDwX2HSICnuAyg_WKU_1mJ4_dKJtevWrLQ4aN9rvVqsqGoG5K2W61W88eUWzeJ0zQ7gRf-N6_wV432WHW117GB7DvRMT1YJyeA0lnVvosXqbDyixW3G55EuizJ0=s680-w680-h510-rw',
        rating: 5,
        priceRange: '$30-60',
        location: 'Lagos',
        link: 'https://experienceshiro.com/'
      },
      {
        name: 'Cilantro Restaurant',
        cuisine: 'International cuisine with Mediterranean and continental dishes.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqWlWRqk8-Wfbg20Q0HQObEQZL99icXNfKFhPQWVg9p1bPyb67GpTHwuUfD2zWfy0wXnLq7h8IHdq7xXbnXR2FyY1Dg2e69jhj39blEsmcrv-_jSYNX4HMpWY1FrjDf5prwKb0Y6g=s680-w680-h510-rw',
        rating: 4,
        priceRange: '$20-45',
        location: 'Lagos',
        link: 'https://g.co/kgs/5JYVVUP'
      },
      {
        name: 'Jevinik Restaurant',
        cuisine: 'Fine dining with international menu and elegant atmosphere.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqbUS5MgX1__qEe7RZjku__i3BZiI6ioKH9hLMhAFN5dRPdmchoUG74daVNclzL7uXbQlbbWVTcYpSERoZMKM7YYybks4rnU-XYLKKXajPGs8uVtxtjiKnOZwpFVLX55GikdroM=s680-w680-h510-rw',
        rating: 5,
        priceRange: '$35-70',
        location: 'Lagos',
        link: 'https://www.jevinik.com/'
      },
      {
        name: 'Bukka Hut',
        cuisine: 'Popular Nigerian fast-food chain serving traditional local dishes.',
        image: 'https://h1.nu/1b1SS',
        rating: 4,
        priceRange: '$5-15',
        location: 'Multiple locations',
        link: 'https://www.bukkahut.com/'
      },
      {
        name: 'Yellow Chilli',
        cuisine: 'Contemporary Nigerian cuisine with modern presentation and traditional recipes.',
        image: 'https://media-cdn.tripadvisor.com/media/photo-m/1280/15/6d/4d/f7/secure-parking-for-the.jpg',
        rating: 4,
        priceRange: '$18-40',
        location: 'Lagos',
        link: 'https://yellowchilling.com/'
      },
      {
        name: 'Cactus Restaurant',
        cuisine: 'Mexican and international cuisine with vibrant atmosphere and cocktails.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4np-A7xpp7QHAuaWJAHJWlJUgptu6rfU3CATK-mGEZuIfsUVsJhJ-Xct-oTmHur4FBFpqnsgexo1-HdVWYDQ5nYX19I2ioPB0KyNndex5VqdesZIeZawdXwS7OTv0B5SMQOVle4=s680-w680-h510-rw',
        rating: 4,
        priceRange: '$20-45',
        location: 'Lagos',
        link: 'https://g.co/kgs/pfo2HGX'
      },
      {
        name: 'Bungalow Restaurant',
        cuisine: 'Continental and Nigerian cuisine in a relaxed garden setting.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4noN8sVYLdyJDClqldzun75TPhRHqv174IsuYd090ssXQNGAnAA9gO3y4Ew-u6ZZbdr54YgJpZfNb8oRKW3UOc_X6IONUqkPgk4uBsopAkWjPDOogn_TwYoCQBcw9OMctqRhDSqvHw=s680-w680-h510-rw',
        rating: 4,
        priceRange: '$15-35',
        location: 'Lagos',
        link: 'https://www.bungalowrestaurant.com/home'
      },
      {
        name: 'Zuma Grill',
        cuisine: 'Grilled specialties and international cuisine with outdoor seating.',
        image: 'https://h1.nu/1b2eD',
        rating: 4,
        priceRange: '$22-50',
        location: 'Abuja',
        link: 'https://g.co/kgs/e69mKfo'
      },
      {
        name: 'Wakkis Restaurant',
        cuisine: 'Lebanese and Middle Eastern cuisine with authentic flavors and atmosphere.',
        image: 'https://images.myguide-cdn.com/nigeria/companies/wakkis/large/wakkis-139436.jpg',
        rating: 4,
        priceRange: '$18-40',
        location: 'Lagos',
        link: 'https://wakkis.com/'
      },
      {
        name: 'Bottles Restaurant',
        cuisine: 'Upscale dining with international menu and extensive wine selection.',
        image: 'https://images.squarespace-cdn.com/content/v1/54222358e4b0ef23d87a996b/1532292340391-C9V21DBAEKA4BN71NCY0/B1.jpg',
        rating: 5,
        priceRange: '$10-65',
        location: 'Lagos',
        link: 'https://share.google/kcBBDLDrQJ9CpaCDk'
      },
      {
        name: 'Mama Cass',
        cuisine: 'Traditional Nigerian restaurant serving authentic local dishes and soups.',
        image: 'https://lh3.googleusercontent.com/DVlFlUOZVWwnzSjcPWBMjBAdNrVeGi3pKk5vVNjQBKD7q_vMmWNrZYPUjKBE-A=s680-w680-h510-rw',
        rating: 4,
        priceRange: '$8-20',
        location: 'Abuja',
        link: 'https://mamacassng.com/our-locations/'
      },
      {
        name: 'Spice Route',
        cuisine: 'Indian cuisine with authentic spices and traditional cooking methods.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqjP5zkvk4F3QQ_S4UGrsB8z2m7bOtT-VG2b9zsmwWrItZecdFC9SpbPc14dSqD7IsADPba4EzkAm6c08ORZOfXmzpVQQwK_ojdkj1bL0Bg_DMszc0BC3bykCFb3bTaOZ2CE06r0Q=s680-w680-h510-rw',
        rating: 4,
        priceRange: '$10-45',
        location: 'Lagos',
        link: 'https://g.co/kgs/fLQP5yJ'
      },
      {
        name: 'Rhapsody\'s Restaurant',
        cuisine: 'Fine dining with continental and Nigerian fusion cuisine.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4npxg6eIb0C6JS7ECb5dXEutJ8Ccs2MYFBKUcZJmyDfjDXPmi8d0rv3sDVh5PNSW4Snzj2JXGUgSN4FBklj78-DVFHy2SDoHZMs9ZxHc8jGylKUqs9cO6r9FgLILj0-bOsVVDXg=s680-w680-h510-rw',
        rating: 4,
        priceRange: '$15-55',
        location: 'Lagos',
        link: 'https://www.rhapsodys.ng/'
      },
      {
        name: 'Lagoon Restaurant',
        cuisine: 'Seafood restaurant with fresh catches and waterfront dining.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4npvUqwXrAbOfoMHRWU7h0vUa8Qnsh-n4_MJyL8dX1PVYFXZhAEjizbs1LY_aA_bAZGG7A1hFpY3Pg1n5U84ax254pRFmfIjxUobAzy5RaPaf6vSuAcBLHBnEfs2ykqvp0fGwz8ifmY_ONg=s680-w680-h510-rw',
        rating: 4,
        priceRange: '$20-45',
        location: 'Lagos',
        link: 'https://g.co/kgs/txzvhUy'
      },
      {
        name: 'Casper & Gambini\'s',
        cuisine: 'International cafe chain with sandwiches, salads, and coffee.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrac3RQBZzPRhQToT1IF7MskEwMQJDzgaYcaiYEhruWCoa_WaxMl0e5Id67RjCbdlnSRMo9q2ADfchaJENswxRdhvn2JGFvqDL3epLq5eYNn4qEtD8QeCCAtZU_bjTa02PyuelxBXVuXqoz=s680-w680-h510-rw',
        rating: 4,
        priceRange: '$12-30',
        location: 'Lagos',
        link: 'https://share.google/r72JM0dGhRWRCDpjq'
      },
      {
        name: 'Orchid Bistro',
        cuisine: 'Contemporary bistro with international menu and stylish atmosphere.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqysYLoJjLpNV4Ph4y-_Tc_drGcu4rIusrp-YXF1X5fXXPCDnp1GHaFoNGGeaPHhaVlmbB97TrBwJ3igEv_n4DeS3gKYHPEEIGPUBvUlfebkovZd5ai0LxnmPdcR6FoGw0QP8uQMg=s680-w680-h510-rw',
        rating: 4,
        priceRange: '$18-40',
        location: 'Lagos',
        link: 'https://g.co/kgs/iT8aEGA'
      },
      {
        name: 'Calabar Kitchen',
        cuisine: 'Specializing in Cross River State cuisine with fresh seafood and local specialties.',
        image: 'https://h1.nu/1bqE1',
        rating: 4,
        priceRange: '$12-28',
        location: 'Calabar',
        link: 'https://share.google/F9Hq9D7AbVtvqLlMG'
      },
      {
        name: 'RSVP Restaurant',
        cuisine: 'Upscale restaurant serving international and Nigerian cuisine with elegant presentation.',
        image: 'https://sabiabuja.com/wp-content/uploads/2024/09/RSVP-Lagos.png',
        rating: 4,
        priceRange: '$20-45',
        location: 'Abuja',
        link: 'https://rsvplagos.com/'
      }
    ]
  },
  {
    name: 'Ghana',
    description: 'The Gateway to Africa offering rich history, vibrant culture, beautiful beaches, and warm hospitality in the land of gold and cocoa.',
    image: 'https://2021-2025.state.gov/wp-content/uploads/2023/07/shutterstock_1861397782v2.jpg',
    region: 'West Africa',
    population: '34.43 million',
    attractions: [
      {
        name: 'Cape Coast Castle',
        description: 'UNESCO World Heritage site and former slave trading post with profound historical significance.',
        image: 'https://momaa.org/wp-content/uploads/2019/10/Cape-Coast-Castle-Museum.png',
        location: 'Cape Coast',
        link: 'https://gmmb.gov.gh/cape-coast-castle-cape-coast-1653/'
      },
      {
        name: 'Kakum National Park',
        description: 'Tropical rainforest with canopy walkway offering unique treetop wildlife viewing.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4npEvy5yoH7xxO0vlc7LQb2h9Rq1b7LVsGtt96I6pEmyJzgFw1f94imTaevv4dwqfwkCJErlyv7p0Lrt3hoESsk4BdgN15F1_0-fPVqGTOxEOuQWYrX3WvHqq6prLYLckc2dgk0GUg=s680-w680-h510-rw',
        location: 'Central Region',
        link: 'https://ghana.travel/'
      },
      {
        name: 'Elmina Castle',
        description: 'First European building in tropical Africa and UNESCO World Heritage site.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4np_dueHxTJui0Gv9MwZ92R3ELX1AztJIxWqR0q84B9m0YixcrrUShGrIhPigsJ26vrnkSkgjGGHhN14Yk3wagt8SquGrp7qyS3QCIUkqSpqtZ9bPDpYR58pp5d3VHZrXfQRGUfC=s680-w680-h510-rw',
        location: 'Elmina',
        link: 'https://whc.unesco.org/en/list/34/'
      },
      {
        name: 'Mole National Park',
        description: 'Ghana\'s largest wildlife refuge with elephants, antelopes, and diverse bird species.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrj4qigu1E3Fmf7CVJAavs5MXDI8Kn2wdvFPQBbcYE38-EaUDy1y6UQfqOfgnwi98ZJwsAnCDQkvYHT1oSKN9u3iBNSH_-2qLroTeHWoRLJPqyYXGsn_At_31xVkkACWBIWw15cZg=s680-w680-h510-rw',
        location: 'Northern Region',
        link: 'https://molenationalpark.org/'
      },
      {
        name: 'Lake Volta',
        description: 'One of the world\'s largest artificial lakes with boat cruises and fishing.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Volta_lake_from_the_Saint_Barbara_Church.JPG/1000px-Volta_lake_from_the_Saint_Barbara_Church.JPG',
        location: 'Eastern Region',
        link: 'https://ghana.travel/'
      },
      {
        name: 'Wli Waterfalls',
        description: 'Ghana\'s highest waterfall with hiking trails through lush forest.',
        image: 'https://www.visitwli.com.gh/wp-content/uploads/2023/01/IMG_1557-scaled.jpg',
        location: 'Volta Region',
        link: 'https://www.visitwli.com.gh/'
      },
      {
        name: 'Labadi Beach',
        description: 'Popular beach in Accra with clear waters, water sports, and sunset views.',
        image: 'https://ghanafixer.com/wp-content/uploads/2024/12/Facts-about-Labadi-Beach.jpg',
        location: 'Accra',
        link: 'https://www.tripadvisor.com/Attraction_Review-g293797-d1469182-Reviews-Labadi_Pleasure_Beach-Accra_Greater_Accra.html'
      },
      {
        name: 'Manhyia Palace',
        description: 'Seat of the Asantehene (King of Ashanti) with museum showcasing Ashanti culture.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqKuac4hxpXYChKhrS8pVUfH8038y5UzvAgBA-J1B0rWSYfjwOQz6zMtyCy-6L_V4v_G333tEkgyA7GHoJVUdd_jM4vWH6kbhbPl0ST63bFPYDHInsFuVCGrAUFsbbnS0QcAhGv=s680-w680-h510-rw',
        location: 'Kumasi',
        link: 'https://manhyiapalace.org/'
      },
      {
        name: 'Boti Falls',
        description: 'Twin waterfalls with natural swimming pools and umbrella rock formation.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrwXfkx61QFBK4LwVG0euNKE1CRwEp3mJURLfTORtP66L6gEmu0-W_GSY_i7j79jGStSekGb-tyir3I_F413PId9VzFSAVhe-0linxzsvqN9oFXOaA1LRTlMUBk-1Q69b1Vx9Yu=s680-w680-h510-rw',
        location: 'Eastern Region',
        link: 'https://touringghana.com/boti-falls/'
      },
      {
        name: 'Kente Village',
        description: 'Traditional weaving village where authentic Kente cloth is made by master weavers.',
        image: 'https://visitghana.com/wp-content/uploads/al_opt_content/IMAGE/visitghana.com/wp-content/uploads/2025/04/Upper-East-Region.jpg.bv_resized_mobile.jpg.bv.webp?bv_host=visitghana.com',
        location: 'Bonwire, Ashanti Region',
        link: 'https://visitghana.com/bonwire-kente/'
      },
      {
        name: 'Nzulezo Stilt Village',
        description: 'Unique village built entirely on stilts over Lake Tadane.',
        image: 'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/09/f3/eb/7c.jpg',
        location: 'Western Region',
        link: 'https://nzulezotourism.com/'
      },
      {
        name: 'Aburi Botanical Gardens',
        description: 'Historic botanical gardens with diverse plant species and cool mountain climate.',
        image: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/0a/76/57/b1.jpg',
        location: 'Eastern Region',
        link: 'https://touringghana.com/aburi-botanical-gardens/'
      },
      {
        name: 'Paga Crocodile Pond',
        description: 'Sacred pond where visitors can safely interact with friendly crocodiles.',
        image: 'https://i.ytimg.com/vi/86ypwRv2e9k/mqdefault.jpg',
        location: 'Upper East Region',
        link: 'https://touringghana.com/paga-crocodile-pond/'
      },
      {
        name: 'Shai Hills Resource Reserve',
        description: 'Wildlife reserve with baboons, antelopes, and ancient caves near Accra.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4noa4mNLJlbu6E_1XRP9dX1Ql9n-3IaPqre-QFQ_5px2iJqDk31I7Jbo8aLgfm3c38mjNfs008H5FUFI5vl9cgq8HPbRYVqdCiT7E3gWGQikKEQjDoWslBt7UUbbfyQVC45i1Qc4ew=s680-w680-h510-rw',
        location: 'Greater Accra Region',
        link: 'https://share.google/ljw2xEKAzvipTYD1p'
      },
      {
        name: 'Larabanga Mosque',
        description: 'Ancient mud-built mosque dating back to the 15th century.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqIOVDgXa6BUAfy_3pLn8yi5rMR9Ft9VizoVjQOI72mqJy0IzyOXOnnT5UGCledRan9fqrmEO8ujg0iSrfyIYqsggmiCPAVQ_4aPH3RCnEvezh8TyQ18G9InyweWT7umKVzKkEe=s680-w680-h510-rw',
        location: 'Northern Region',
        link: 'https://www.visitlarabanga.org/'
      },
      {
        name: 'Tongo Hills',
        description: 'Unique rock formations with traditional shrines and panoramic views.',
        image: 'https://lh3.googleusercontent.com/proxy/85UTafZk2K0EpSDcQxSPi382OUq0EHIr7EEuG9wuyC9isrJZxVda468QI2HFEoOk4X_dNyGfXd0vGrA16Wjg4VzHDCEJQw6PC3rrblOWFCVz-t8',
        location: 'Upper East Region',
        link: 'https://visitghana.com/tengzug-tongo-hills-and-shrines/'
      },
      {
        name: 'Ada Foah',
        description: 'Coastal town where the Volta River meets the Atlantic Ocean.',
        image: 'https://adatourism.com/wp-content/uploads/2018/12/20170410_102606.jpg?w=2000&h=1200&crop=1',
        location: 'Greater Accra Region',
        link: 'https://adatourism.com/what-to-do/tours/'
      },
      {
        name: 'Kumasi Central Market',
        description: 'One of West Africa\'s largest markets with traditional crafts and local products.',
        image: 'https://www.adomonline.com/wp-content/uploads/2021/08/Kejetia-Kumasi-Market.jpg',
        location: 'Kumasi',
        link: 'https://share.google/GPDww8qzP8gQgyazN'
      },
      {
        name: 'Ankasa Conservation Area',
        description: 'Pristine rainforest with diverse wildlife and butterfly species.',
        image: 'https://ukgcc.com.gh/wp-content/uploads/2025/08/Ankasa-resource-reserve-3.jpg',
        location: 'Western Region',
        link: 'https://share.google/9ahB2bphkbXvvtOvr'
      },
      {
        name: 'Busua Beach',
        description: 'Popular surfing destination with golden sand beaches and beach resorts.',
        image: 'https://images.trvl-media.com/lodging/88000000/87320000/87318700/87318673/cc072fd3.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill',
        location: 'Western Region',
        link: 'https://busuabeach.com/'
      }
    ],
    transportation: [
      {
        type: 'Luxury Airport Transfer',
        description: 'Premium chauffeur service with air-conditioned vehicles.',
        price: '$25-60',
        route: 'Kotoka International Airport to Accra'
      },
      {
        type: 'Cultural Heritage Tours',
        description: 'Guided tours to historical sites and cultural attractions.',
        price: '$80-200/day',
        route: 'Cape Coast Castle Circuit'
      },
      {
        type: 'Safari Vehicles',
        description: '4WD vehicles for wildlife viewing in national parks.',
        price: '$120-250/day',
        route: 'Mole National Park'
      },
      {
        type: 'Lake Volta Cruise',
        description: 'Boat cruises on Lake Volta with fishing and sightseeing.',
        price: '$50-150',
        route: 'Lake Volta'
      }
    ],
    hotels: [
      {
        name: 'Kempinski Hotel Gold Coast City',
        description: 'Luxury beachfront hotel in Accra with world-class amenities and ocean views.',
        image: 'https://images.trvl-media.com/lodging/6000000/5810000/5801100/5801068/w3837h2555x3y4-05ae3afc.jpg?impolicy=resizecrop&rw=1200&ra=fit',
        rating: 5,
        price: '$200-400',
        location: 'Accra',
        bookingLink: 'https://expedia.com/affiliate/QrP7wBL'
      },
      {
        name: 'Movenpick Ambassador Hotel',
        description: 'Luxury hotel in the heart of Accra with modern amenities and business facilities.',
        image: 'https://images.trvl-media.com/lodging/5000000/4450000/4447800/4447779/cfc78dde.jpg?impolicy=resizecrop&rw=1200&ra=fit',
        rating: 5,
        price: '$180-350',
        location: 'Accra',
        bookingLink: 'https://expedia.com/affiliate/2Z0K6wW'
      },
      {
        name: 'Labadi Beach Hotel',
        description: 'Beachfront resort with traditional Ghanaian architecture and modern luxury.',
        image: 'https://images.trvl-media.com/lodging/1000000/10000/1600/1558/8443dbc1.jpg?impolicy=resizecrop&rw=1200&ra=fit',
        rating: 4,
        price: '$150-300',
        location: 'Accra',
        bookingLink: 'https://expedia.com/affiliate/a7GLdEu'
      },
      {
        name: 'Mole Motel',
        description: 'Safari lodge within Mole National Park offering wildlife viewing and nature walks.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4noBZwhu2RJ30l6qfOMnb8iLrkRfmCcpT6SDDCXLVzxDoGmM1a-ZCdliZ3nAiB955LNS6OGY7vFgjGdKUMZY2fKW5xxhXzcDZrALkhOfCXB-UMvMP9ZAzkvGXBBTI_To5iG9PLMW=s680-w680-h510-rw',
        rating: 3,
        price: '$60-120',
        location: 'Mole National Park',
        bookingLink: 'https://molemotelgh.com/'
      },
      {
        name: 'Golden Tulip Accra',
        description: 'Modern hotel with contemporary amenities and central location.',
        image: 'https://www.kayak.com/rimg/himg/29/dd/3f/agoda-55965-877052462-468145.jpg?width=1366&height=768&crop=true',
        rating: 4,
        price: '$120-250',
        location: 'Accra',
        bookingLink: 'https://goldentulip.hotelsaccra360.com/en/'
      },
      {
        name: 'Coconut Grove Beach Resort',
        description: 'Beachfront resort with traditional architecture and modern comfort.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nodTxRqIcAirR_jmb_IFn3wenlY2lN0PcFZ-h-_0P7wXSSSATau3by7YWqA9QWy1TEVvqS6By6w3Ww4ji1alzI8bxQhfJLlMuGqzHkQ9dvKbydplYjfqJyoWzGc-XBFPMyTzX9skg=s680-w680-h510-rw',
        rating: 4,
        price: '$100-200',
        location: 'Cape Coast',
        BookingLink: 'https://coconutgrovehotelsgh.com/'
      },
      {
        name: 'Alisa Hotel',
        description: 'Boutique hotel in North Ridge with personalized service and elegant design.',
        image: 'https://images.trvl-media.com/lodging/3000000/2620000/2614800/2614727/1f10f774.jpg?impolicy=resizecrop&rw=1200&ra=fit',
        rating: 4,
        price: '$140-280',
        location: 'Accra',
        bookingLink: 'https://expedia.com/affiliate/okMxgxM'
      },
      {
        name: 'Royal Senchi Resort',
        description: 'Luxury resort on Lake Volta with spa, golf course, and water activities.',
        image: 'https://images.trvl-media.com/lodging/10000000/9080000/9073700/9073641/9dafce2a.jpg?impolicy=resizecrop&rw=1200&ra=fit',
        rating: 4,
        price: '$160-320',
        location: 'Eastern Region',
        bookingLink: 'https://expedia.com/affiliate/5yxZHQg'
      },
      {
        name: 'Busua Beach Resort',
        description: 'Beachfront resort popular with surfers and beach lovers.',
        image: 'https://images.trvl-media.com/lodging/88000000/87320000/87318700/87318673/af36f49f.jpg?impolicy=resizecrop&rw=1200&ra=fit',
        rating: 3,
        price: '$80-300',
        location: 'Western Region',
        bookingLink: 'https://expedia.com/affiliate/5vhBn0t'
      },
      {
        name: 'Miklin Hotel',
        description: 'Modern hotel in Kumasi with business facilities and local hospitality.',
        image: 'https://images.trvl-media.com/lodging/4000000/3810000/3802900/3802836/b76b2de2.jpg?impolicy=resizecrop&rw=1200&ra=fit',
        rating: 4,
        price: '$90-300',
        location: 'Kumasi',
        bookingLink: 'https://expedia.com/affiliate/YrD8KTQ'
      },
      {
        name: 'Elmina Beach Resort',
        description: 'Historic beachfront resort near Elmina Castle with cultural significance.',
        image: 'https://images.trvl-media.com/lodging/1000000/920000/915900/915810/7b74ad1e.jpg?impolicy=resizecrop&rw=1200&ra=fit',
        rating: 4,
        price: '$100-300',
        location: 'Elmina',
        bookingLink: 'https://expedia.com/affiliate/D0L81G6'
      },
      {
        name: 'Wli Waterfall Lodge',
        description: 'Eco-lodge near Ghana\'s highest waterfall with nature activities.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4noJonTqLgogp91PWzkrtGcFxxzONqfXOlU2EVu-RXq-e-g4D26RucCJWTkWckOmRqiPipsBTjkxQ6aS54OGXMAo_4tdjP2IHKktv4AMWpyasiut5IH7PoKDpyHGlgDMfaEc2E8qkg=s680-w680-h510-rw',
        rating: 4,
        price: '$70-140',
        location: 'Volta Region',
        bookingLink: 'http://www.ghanacamping.com/index.php?id=51&L=1'
      },
      {
        name: 'Ankasa Conservation Lodge',
        description: 'Rainforest lodge with eco-friendly practices and wildlife viewing.',
        image: 'https://lh3.googleusercontent.com/p/AF1QipNPRXG0Aeq1sYrJ0ROIpL6QOdrGTWLoB25jH9hE=s680-w680-h510-rw',
        rating: 3,
        price: '$80-300',
        location: 'Western Region',
        bookingLink: 'https://ankasareservelodge.com/'
      },
      {
        name: 'Lancaster Accra',
        description: 'Lancaster Accra is a 4-Star Superior First Class hotel with a lovely ambiance and delightfully landscaped in style over spacious grounds with lush vegetation.',
        image: 'https://media-cdn.tripadvisor.com/media/photo-s/1b/79/e9/f6/hillburi-aburi.jpg',
        rating: 3,
        price: '$60-200',
        location: 'Accra',
        bookingLink: 'https://www.lancasteraccra.com/'
      },
      {
        name: 'La Palm Royal Beach Hotel',
        description: 'Take advantage of a casino, a swim-up bar, and a poolside bar at La Palm Royal Beach Hotel. At the 3 on-site restaurants, enjoy lunch, dinner, and Chinese cuisine.',
        image: 'https://images.trvl-media.com/lodging/1000000/470000/469900/469866/4959f48b.jpg?impolicy=resizecrop&rw=1200&ra=fit',
        rating: 5,
        price: '$193-300',
        location: 'Accra',
        bookingLink: 'https://expedia.com/affiliate/6J1DjCn'
      },
      {
        name: 'Shai Hills Lodge',
        description: 'Wildlife lodge near Accra with baboon viewing and cave exploration.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4npzAa8RQsgekuRank_gJQfjkAljUVuuDU82QoH_FKx7a31UJ0_MDHqFczA3TyK_DVAoI-o077Xd06tlq34QQBAI85xsL6oaD82Fp5Mn7ALwYXwpmhmRbgSzkS4lGTQgI0qNr99aLg=s680-w680-h510-rw',
        rating: 4,
        price: '$70-140',
        location: 'Greater Accra Region',
        bookingLink: 'https://share.google/EWUtvqCb2UVhBAnP0'
      },
      {
        name: 'Aqua Safari Resort',
        description: 'A top eco-friendly luxury getaway resort in the heart of Ada in the greater Accra region of Ghana.',
        image: 'https://lh3.googleusercontent.com/p/AF1QipMp4j3rBakH69iVlJ2JudbLyfbWiPADF-sunhwm=s680-w680-h510-rw',
        rating: 4,
        price: '$80-400',
        location: 'Greater Accra Region',
        bookingLink: 'https://aquasafariresort.com/'
      },
      {
        name: 'Accra Marriott Hotel',
        description: 'A terrace, an art gallery on site, and a garden are just a few of the amenities provided at Accra Marriott Hotel.',
        image: 'https://images.trvl-media.com/lodging/25000000/24330000/24322100/24322081/b8c10cdb.jpg?impolicy=resizecrop&rw=1200&ra=fit',
        rating: 3,
        price: '$246-400',
        location: 'Greater Accra',
        bookingLink: 'https://expedia.com/affiliate/Ex5mJRj'
      },
      {
        name: 'Fiesta Royale Hotel',
        description: 'Take advantage of a free roundtrip airport shuttle, a poolside bar, and a terrace at Fiesta Royale Hotel.',
        image: 'https://images.trvl-media.com/lodging/2000000/1640000/1632500/1632468/9be9bb2c.jpg?impolicy=resizecrop&rw=1200&ra=fit',
        rating: 4,
        price: '$212-400',
        location: 'Accra',
        bookingLink: 'https://expedia.com/affiliate/fLWkQHH'
      },
      {
        name: 'Accra City Hotel',
        description: 'Consider a stay at Accra City Hotel and take advantage of a terrace, a shopping mall on site, and mini golf.',
        image: 'https://images.trvl-media.com/lodging/14000000/13360000/13354000/13353907/cd1e3389.jpg?impolicy=resizecrop&rw=1200&ra=fit',
        rating: 4,
        price: '$151-300',
        location: 'Greater Accra',
        bookingLink: 'https://expedia.com/affiliate/BqaOCOv'
      }
    ],
    restaurants: [
      {
        name: 'Santoku Restaurant',
        cuisine: 'Japanese cuisine with fresh sushi, sashimi, and traditional dishes.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4no3GRSI3bpOW8ibWNRzuiB4zs47Ej-pJE0UsfosEm7lrrDAtFh3RB8CvHh0mRnd-wkeqSjM24V7FOI0C6c3E7WxoFCpQ8B9AxFMPFLPONzgd_NZQMF4HPphcCqAZRiGRMYCi2xk_Q=s680-w680-h510-rw',
        rating: 5,
        priceRange: '$15-50',
        location: 'Accra',
        link: 'https://share.google/LuX1IGHHJqynpRAms'
      },
      {
        name: 'Buka Restaurant',
        cuisine: 'Traditional Ghanaian cuisine with authentic local dishes and flavors.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrMlqPEQw9VltqpLRUx7tRNtpeoIjJTfFWjcRipJlRP0P_6oIbTGmUp6SS-lUmHMW_RTT9OAHx2odcFqzKeO2oWTf9rbMQNpwgg6Yd9st5mR7IR4J020gRajIipd6K5uUYcjGa6Vg=s680-w680-h510-rw',
        rating: 4,
        priceRange: '$8-20',
        location: 'Accra',
        link: 'https://www.bukarestaurant.com/'
      },
      {
        name: 'Chez Clarisse',
        cuisine: 'Local Ghanaian delicious foods .',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrZOTogIZe4rV7Co6Fgqr3Pv7eNfLNJ6xnwZa-wv4-5rzkidEWXD0Iai7MT6418mBocJxRXmod3na5M-7zabSgsCM4CD05v9_uVtq2LtnHk3FxZJ4ekuR2dTZ_Elr8Oi6K6IRLE=s680-w680-h510-rw',
        rating: 5,
        priceRange: '$10-30',
        location: 'Accra',
        link: 'https://share.google/kkvsTlEt8XOZ0qUO8'
      },
      {
        name: 'Azmera Restaurant',
        cuisine: 'Ethiopian cuisine with traditional injera and authentic spices.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrC5Hb4wPNk46uRV3qYQ9OzKPzH0yGMtBf3SvHLG5f7d7IwF--1HD_Gyzdf-8mH3prdGJvzBg_wOFjK0f4-7J8oqpJYIbFUOglToyEBrTKK18_DTtf5IH_nra8RxenSFaYoF3WGRv11sZPa=s680-w680-h510-rw',
        rating: 4,
        priceRange: '$15-35',
        location: 'Accra',
        link: 'https://share.google/eCm7PEJ6bjSEdb8Wr'
      },
      {
        name: 'Skybar 25',
        cuisine: 'Rooftop restaurant with international menu and panoramic city views.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4notQSXN1dwmJgTiEImAJDESxsNHwD6ZvffgvAKV7FO7hpIbKhpRfpSodcqHTYE_kyOIH6yvLikegetawkEAmWB5RYENeMPnypXeXHcKrp7jSXsAgXOqwPlfNDiwGXFK1DZMakSX=s680-w680-h510-rw',
        rating: 4,
        priceRange: '$20-45',
        location: 'Accra',
        link: 'https://share.google/teqlPY0XMJHg2AGD5'
      },
      {
        name: 'Asanka Local',
        cuisine: 'Modern Ghanaian cuisine with contemporary presentation of traditional dishes.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrugK1i1v9Sv4tmQ2JtHM2-u01YO9IxYqT4WGuzHEs99TZZyGJ-jL6jHo1oeLZMWm_FRPGyYGJt85egzROKpRoGXgmhtvbd-Zg1W-H40bSlKDN5PaVCI2mzKU4R55164q4zcFY=s680-w680-h510-rw',
        rating: 4,
        priceRange: '$12-30',
        location: 'Accra',
        link: 'https://www.asankalocal.com/'
      },
      {
        name: 'Tunnel Lounge',
        cuisine: 'An elegant restaurant in the heart of Accra tipped to redefine cuisine and beverage service in Ghana.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nr2XOU2lxtk-sI4oifmJ6xtWJ3byGDB7R2eXJmzE01gfBIs2awe9Abw49hFBHr6-ZYHJnFDiG539c5s4ZR8QjlHXmz0Km6NcjmZl9ClA7Mn-obUU8qUtB-64BAs9h7l9JSMwa1UOWVxj4_1=s680-w680-h510-rw',
        rating: 4,
        priceRange: '$10-40',
        location: 'Accra',
        link: 'https://thetunnellounge.com/'
      },
      {
        name: 'Bistro 22',
        cuisine: 'One of ⁩⁦Ghana/s⁩⁦ Best restaurants, second only to Lou Moon in Axim. Consistently excellent food and drinks.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqilJLSOv1UngFP6MfhDI_ZtilHjS_A0dGnvCmYfkPdb35hBMjj0cXmwuNasNdzsE7cSonEy3f8plPtAtJhjLMgEsJHCv-reRlVvU_42AMHbhH4jcJVOCkkLQsuJOLjjJQgz7BJ=s680-w680-h510-rw',
        rating: 4,
        priceRange: '$15-35',
        location: 'Accra',
        link: 'https://www.bistro-22.com/'
      },
      {
        name: 'Zion Thai Restaurant',
        cuisine: 'Authentic Thai cuisine with traditional flavors and spices.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrZZNCVkFSV3mWgSay4H284mbd-_QeF29qWal6DH_k2Gnj-83aZJcpSegbKlwuEe7aY8AMgEFnNw-Ivg_uez8vZ4RS4FDGbn35NI0i67Z8xorqvWARCbtSJpehAVDqoPjJYtt4=s680-w680-h510-rw',
        rating: 4,
        priceRange: '$18-40',
        location: 'Accra',
        link: 'https://share.google/91HsUAIeRpNaRs3gc'
      },
      {
        name: 'Chop Bar',
        cuisine: 'Traditional Ghanaian street food in a modern setting.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4np5hg2kFGqp74Ia90MwQ8TGl2V85qDGzjc_BzrUfVVN3pftRFfBlY4GHcEybMFH8cGjWNkL8rW-5WzEs49pt6icY04PS8ltawiPnuKkTmF-njoRggJv7E9p54ABD6706WQDvJ5CmA=s680-w680-h510-rw',
        rating: 4,
        priceRange: '$5-15',
        location: 'Multiple locations',
        link: 'http://www.thechopbar.com.gh/'
      },
      {
        name: 'Monsoon Restaurant',
        cuisine: 'Pomona/s menu celebrates the culinary traditions of Italian culture in a vibrant garden-house, inspired by everything local.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nr-MWZbDYaGHLY3T-7I-r_VUueSnBYLH86kMar4offZ99WzfHI7ZmMro2_6-vXM7YBZ6jZ4ORoBkxi80Uo_f8gtAB4WCHzgHUUVJzqFsbThEY62sxSfSspt-TUuqW5A6_rd178m=s680-w680-h510-rw',
        rating: 4,
        priceRange: '$10-30',
        location: 'Accra',
        link: 'https://www.pomona-gh.com/'
      },
      {
        name: 'Bosphorus Restaurant',
        cuisine: 'Turkish cuisine with kebabs, mezze, and Mediterranean flavors.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrZgFCD_Vwx-zcU6sQgPaRSr_mYlIR3G1urHlX60X8GxcBCdDyUrFP8CpEXXolkX4QpWrSCx3rPv6oMZUUbbabSs118s25JkCkAB-THWd6mwAJNhmxkKCJkLi81ksocG_TLkpLeYKiXnBc=s680-w680-h510-rw',
        rating: 4,
        priceRange: '$18-40',
        location: 'Accra',
        link: 'https://share.google/ZXtoaZqxCVInBnOcA'
      },
      {
        name: 'Papaye Fast Food',
        cuisine: 'Popular local fast food chain serving Ghanaian and international dishes.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqZzX4HqA9yp3QPuNjyPeyMxmn9m-uaz4bkp8L9hiV0cpiv2EyzQAcqsncS6ZlAFeZ1zPdqyc948UPhyP5DTf317LWr2YIGA1ab1KDfylTWJ4Yo-4tWPay1Yg0mw1z8KSTRySYxjvmZI9w=s680-w680-h510-rw',
        rating: 3,
        priceRange: '$5-25',
        location: 'Multiple locations',
        link: 'https://papayegroup.com/'
      },
      {
        name: 'Frankie\'s Restaurant',
        cuisine: 'Continental and Ghanaian cuisine with family-friendly atmosphere.',
        image: 'https://lh3.googleusercontent.com/gps-proxy/ALd4DhHZz9Ry1uNPqVtLLJem03raLEaQZq4Efkq13xCIz0NbCrW47k6-fRWcAIPpOPdIS6sBg6RQpBkDLASfabmPGL8DfisdBs5ZM_D4a-b5zdhop-sDgMnhPfAKzTwqIPz0IkZe2iiAEMjKNciAIRhtcmFJI-1YwiPtG_LPInUsdaXdbAkr___yMfw=s680-w680-h510-rw',
        rating: 4,
        priceRange: '$12-30',
        location: 'Accra',
        link: 'https://www.frankieshotel.com/restaurant/'
      },
      {
        name: 'Jamrock Restaurant & Grill',
        cuisine: 'International cuisine with outdoor seating and live music.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrpvD2qte4ottzJPPPiHR0_LOKLvQRdFtGw5uSZ0TohUM2OkDeGsM1QV_X2U48dCqsYLDwnwRt8Xgbfh8JqwdQGZSNg4JHrViUSXy5prWC4m46NS2HOzTWDx5m4ZfBmpNRmNlTX=s680-w680-h510-rw',
        rating: 4,
        priceRange: '$15-35',
        location: 'East Airport',
        link: 'https://www.jamrock.com.gh/'
      },
      {
        name: 'YAYA La Parisienne',
        cuisine: 'We serve French cuisine fused with Francophone West African creativity and served with Ghanaian friendliness.',
        image: 'https://lh3.googleusercontent.com/p/AF1QipOlUhlKiYRhXjLl_gfUsqeWJaJblKQMt4_FgddG=s680-w680-h510-rw',
        rating: 4,
        priceRange: '$15-35',
        location: 'Accra',
        link: 'https://www.yaya.restaurant/'
      },
      {
        name: 'Capitol Cafe & Restaurant',
        cuisine: 'Capitol Café & Restaurant brings the best tastes from both Turkish and International cuisine to Cantonments, the heart of Accra.',
        image: 'https://www.capitolgh.com/izinver/big/20240704__4374963641.webp',
        rating: 4,
        priceRange: '$10-25',
        location: 'Accra',
        link: 'https://www.capitolgh.com/'
      },
      {
        name: 'Kōzo Restaurant',
        cuisine: 'Safari lodge restaurant with game meat and traditional dishes.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nr4u41qXP7V0JH7DhFrgGREhpqF_cCfw9_f_teJnzrLBTLAtZ7d05m21J8QsZin5T4rxiBMeNNTqQ1kJjZa9qxlvH-ipj9MOcz_KEoj9j0xqHNiD_bLk4zOnPrRzGbT1xs9X08grQ=s680-w680-h510-rw',
        rating: 4,
        priceRange: '$12-25',
        location: 'Accra',
        link: 'https://www.kozogh.com/'
      },
      {
        name: 'Casamance Beach Restaurant',
        cuisine: 'Beachfront restaurant with fresh seafood and regional specialties.',
        image: 'https://planetescape.pl//app/uploads/2022/09/Lemon-Beach-Resort-%E2%80%93-Restauracja.jpg',
        rating: 3,
        priceRange: '$10-25',
        location: 'Casamance',
        link: 'https://www.tripadvisor.com/Restaurants-g3140004-zfp6-Casamance.html'
      },
      {
        name: 'Gorée Island Restaurant',
        cuisine: 'Historical dining with local cuisine and cultural significance.',
        image: 'https://hotelfarid.com/english/wp-content/uploads/sites/2/2022/07/goree-island-755x350-1.jpg',
        rating: 3,
        priceRange: '$8-20',
        location: 'Gorée Island',
        link: 'https://www.tripadvisor.com/Restaurants-g1602158-Goree_Island_Dakar_Region.html'
      }
    ]
  },
  {
    name: 'Ethiopia',
    description: 'The cradle of humanity offering ancient history, unique culture, dramatic landscapes from the Danakil Depression to the Simien Mountains, and the birthplace of coffee.',
    image: 'https://i.ytimg.com/vi/2wKhEEmgzb4/maxresdefault.jpg',
    region: 'East Africa',
    population: '132.1 million',
    attractions: [
      {
        name: 'Lalibela Rock Churches',
        description: 'UNESCO World Heritage site with 11 medieval rock-hewn churches carved from solid volcanic rock.',
        image: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/07/b0/60/cf.jpg',
        location: 'Lalibela',
        link: 'https://whc.unesco.org/en/list/18/'
      },
      {
        name: 'Simien Mountains National Park',
        description: 'UNESCO World Heritage site featuring dramatic landscapes, endemic wildlife, and Africa\'s highest peaks.',
        image: 'https://whc.unesco.org/uploads/thumbs/activity_1057-384-216-20220305120333.jpg',
        location: 'Amhara Region',
        link: 'https://www.simienmountains.org/visit/park-fees'
      },
      {
        name: 'Danakil Depression',
        description: 'One of the hottest and lowest places on Earth with active volcanoes, salt flats, and colorful mineral deposits.',
        image: 'https://www.bunchofbackpackers.com/wp-content/uploads/2018/11/Danakil-Depression-in-Ethiopia-15.jpg',
        location: 'Afar Region',
        link: 'https://www.brilliant-ethiopia.com/regions/danakil-depression'
      },
      {
        name: 'Omo Valley',
        description: 'UNESCO World Heritage site home to diverse indigenous tribes with unique cultures and traditions.',
        image: 'https://magicethiopiatours.com/wp-content/uploads/2024/01/44862b9d-0443-4074-9a8c-4dffc12fb726.jpg',
        location: 'Southern Nations',
        link: 'https://www.brilliant-ethiopia.com/regions/omo-valley'
      },
      {
        name: 'Axum Obelisks',
        description: 'Ancient stelae and ruins of the Kingdom of Axum, UNESCO World Heritage site.',
        image: 'https://whc.unesco.org/uploads/thumbs/site_0015_0001-750-750-20151104173335.webp',
        location: 'Tigray Region',
        link: 'https://whc.unesco.org/en/list/15/'
      },
      {
        name: 'Blue Nile Falls',
        description: 'Spectacular waterfall known locally as "Tis Issat" (smoking water).',
        image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/9a/77/70/caption.jpg?w=800&h=400&s=1',
        location: 'Amhara Region',
        link: 'https://www.brilliant-ethiopia.com/regions/blue-nile-falls'
      },
      {
        name: 'Harar Old Town',
        description: 'UNESCO World Heritage site known as the fourth holiest city in Islam with ancient walls.',
        image: 'https://www.traveladventures.org/countries/ethiopia/images/harar03.jpg',
        location: 'Harari Region',
        link: 'https://whc.unesco.org/en/list/1189/'
      },
      {
        name: 'Bale Mountains National Park',
        description: 'High-altitude park with endemic wildlife including Ethiopian wolves and mountain nyala.',
        image: 'https://fzs.org/wp-content/uploads/2021/02/dtr7083_entrance_bale-scaled-1350x865.jpg',
        location: 'Oromia Region',
        link: 'https://balemountains.org/'
      },
      {
        name: 'Lake Tana Monasteries',
        description: 'Ancient island monasteries on Ethiopia\'s largest lake, source of the Blue Nile.',
        image: 'https://media-cdn.tripadvisor.com/media/photo-s/1b/ec/5e/ea/lake-tana-monasteries.jpg',
        location: 'Amhara Region',
        link: 'https://www.brilliant-ethiopia.com/lake-tana'
      },
      {
        name: 'Gondar Castles',
        description: 'UNESCO World Heritage site with 17th-century royal enclosure and castles.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-65f2ZJNb17CHPuNId7G88c_wTYjftOocGw&s',
        location: 'Amhara Region',
        link: 'https://whc.unesco.org/en/list/19/'
      },
      {
        name: 'Erta Ale Volcano',
        description: 'Active shield volcano with permanent lava lake in the Danakil Depression.',
        image: 'https://imgix.brilliant-ethiopia.com/Erta-Ale-pic-1.jpg?auto=format,enhance,compress&fit=crop&crop=entropy,faces,focalpoint&w=580&h=480&q=40',
        location: 'Afar Region',
        link: 'https://www.safaribookings.com/tours/erta-ale'
      },
      {
        name: 'Awash National Park',
        description: 'Wildlife park with hot springs, waterfalls, and diverse ecosystems.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrsi4hqhUs2OhhYs-_iTf7PAqAZtVUeRz7fPdgIxDOluQ9v8h4z3VbTUw90t9cmHOgUZ0-KAA8HhkLFYJW7lvtJOUp8efZ_NHHKqFL0TeEM5Mkn1T8caRF_vWW6GJKOnS8s42Unkg=s680-w680-h510-rw',
        location: 'Afar/Oromia Regions',
        link: 'https://hulunem.com/place/ethiopia/afar/didiga/awash-national-park/'
      },
      {
        name: 'Debre Damo Monastery',
        description: 'Ancient monastery accessible only by rope, perched on a flat-topped mountain.',
        image: 'https://www.viajesalpasado.com/wp-content/uploads/Debre-Damo-5.jpg',
        location: 'Tigray Region',
        link: 'https://visitethiopia.et/space/debre-damo-monastery'
      },
      {
        name: 'Sof Omar Caves',
        description: 'Spectacular limestone cave system, one of the longest in Africa.',
        image: 'https://balemountains.org/wp-content/uploads/2013/02/IMG_1334-940x626.jpg',
        location: 'Oromia Region',
        link: 'https://balemountains.org/plan-your-trip/nearby-attractions/sof-umar_tb/'
      },
      {
        name: 'Gambela National Park',
        description: 'Wetland park on the Kafue Flats with endemic Kafue lechwe and exceptional birdlife.',
        image: 'https://nationalparksassociation.org/wp-content/uploads/2024/02/Simien-Mountains-National-Park.jpg',
        location: 'Gambela Region',
        link: 'https://nationalparksassociation.org/ethiopia-national-parks/gambela-national-park/'
      },
      {
        name: 'Tigray Rock Churches',
        description: 'Ancient rock-hewn churches carved into cliff faces with stunning architecture.',
        image: 'https://static1.squarespace.com/static/57b88db03e00be38aec142b0/57c177c0725e258e4bdd517e/59d5ed4e4c326d7c8be6d457/1515151782013/Blog+Cover+-+In+the+Mountains+of+Tigray+-+Rock-hewn+Churches+of+Ethiopia.jpg?format=1500w',
        location: 'Tigray Region',
        link: 'https://www.safaribookings.com/tours/t85683'
      },
      {
        name: 'Mago National Park',
        description: 'Wildlife park in the Omo Valley with diverse ecosystems and tribal cultures.',
        image: 'https://nationalparksassociation.org/wp-content/uploads/2023/12/Uluru-Kata-Tjuta-National-Park-blue-sky-and-clouds.webp',
        location: 'Southern Nations',
        link: 'https://nationalparksassociation.org/ethiopia-national-parks/mago-national-park/'
      },
      {
        name: 'Debre Libanos Monastery',
        description: 'Historic monastery with Portuguese Bridge and gelada monkey viewing.',
        image: 'https://cloudfront.safaribookings.com/lib/ethiopia/704x440/Debre_Libanos_Monastery_002.jpg',
        location: 'Oromia Region',
        link: 'https://visitethiopia.et/space/debre-libanos'
      },
      {
        name: 'Nechisar National Park',
        description: 'Park between two Rift Valley lakes with diverse wildlife and landscapes.',
        image: 'https://visitethiopia.et/uploads/0000/57/2025/01/08/arbaminch-and-nech-sar-national-park1.jpg',
        location: 'Southern Nations',
        link: 'https://www.safaribookings.com/nechisar'
      },
      {
        name: 'Addis Ababa Museums',
        description: 'National Museum housing Lucy fossil and rich Ethiopian cultural artifacts.',
        image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/a4/5d/1c/located-at-the-main-campus.jpg?w=900&h=500&s=1',
        location: 'Addis Ababa',
        link: 'https://palacemuseum.gov.et/'
      }
    ],
    transportation: [
      {
        type: 'Domestic Flights',
        description: 'Ethiopian Airlines domestic flights connecting major destinations.',
        price: '$100-300',
        route: 'Addis Ababa to Lalibela/Axum'
      },
      {
        type: 'Highland Tours',
        description: '4WD vehicles for mountain and highland region exploration.',
        price: '$150-350/day',
        route: 'Simien Mountains Circuit'
      },
      {
        type: 'Danakil Expeditions',
        description: 'Specialized desert expeditions with camping and guides.',
        price: '$200-500/day',
        route: 'Danakil Depression'
      },
      {
        type: 'Cultural Tours',
        description: 'Guided tours to historical and cultural sites.',
        price: '$100-250/day',
        route: 'Historical Circuit'
      }
    ],
    hotels: [
      {
        name: 'Sheraton Addis',
        description: 'Luxury hotel in the capital with comprehensive amenities and central location.',
        image: 'https://images.trvl-media.com/lodging/1000000/120000/112400/112359/6d12ce47.jpg?impolicy=resizecrop&rw=1200&ra=fit',
        rating: 5,
        price: '$200-400',
        location: 'Addis Ababa',
        bookingLink: 'https://expedia.com/affiliate/27V4WsR'
      },
      {
        name: 'Hyatt Regency Addis Ababa',
        description: 'Modern luxury hotel with panoramic city views and world-class facilities.',
        image: 'https://images.trvl-media.com/lodging/33000000/32820000/32813000/32812931/073d16ec.jpg?impolicy=resizecrop&rw=1200&ra=fit',
        rating: 5,
        price: '$180-350',
        location: 'Addis Ababa',
        bookingLink: 'https://expedia.com/affiliate/t8ZIMmn'
      },
      {
        name: 'Mountain View Hotel Lalibela',
        description: 'Hotel with views of the famous rock churches and traditional architecture.',
        image: 'https://mountainview-hotel.com/wp-content/uploads/2017/07/banner-1.jpg',
        rating: 4,
        price: '$120-250',
        location: 'Lalibela',
        bookingLink: 'https://mountainview-hotel.com/'
      },
      {
        name: 'Simien Lodge',
        description: 'Eco-lodge in the Simien Mountains with stunning highland views.',
        image: 'https://www.simiens.com/external/banner/Lodgebanner.jpg',
        rating: 4,
        price: '$150-300',
        location: 'Simien Mountains',
        bookingLink: 'https://www.simiens.com/'
      },
      {
        name: 'Bale Mountain Lodge',
        description: 'Mountain lodge with access to endemic wildlife and highland landscapes.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4noq680REzcj5k634CUinBrYzZwBXG9YdAqfyUxwGBXdGrspmTDbmAGSQi1F7tY2yPfO-fXTbfcdavIO3K5vhBSw3XRZGlTKV5sdlRoymQIysbO1WlqDMyFMsEk9P5RY-yngWjiyvw=s680-w680-h510-rw',
        rating: 4,
        price: '$140-280',
        location: 'Bale Mountains',
        bookingLink: 'http://www.balemountainlodge.com/'
      },
      {
        name: 'Kuriftu Resort & Spa',
        description: 'Luxury resort on Lake Tana with spa facilities and boat excursions.',
        image: 'https://images.trvl-media.com/lodging/19000000/18800000/18799700/18799607/7e60e485.jpg?impolicy=resizecrop&rw=1200&ra=fit',
        rating: 4,
        price: '$160-320',
        location: 'Bahir Dar',
        bookingLink: 'https://expedia.com/affiliate/cQoVLQH'
      },
      {
        name: 'Gheralta Lodge',
        description: 'Eco-lodge near Tigray rock churches with panoramic mountain views.',
        image: 'https://www.gheraltalodge.com/wp-content/uploads/2024/11/gheralta-lodge-etiopia-1024x690.jpg',
        rating: 4,
        price: '$130-260',
        location: 'Tigray Region',
        bookingLink: 'https://www.gheraltalodge.com/'
      },
      {
        name: 'Harar Heritage Hotel',
        description: 'Historic hotel in the ancient walled city with traditional architecture.',
        image: 'https://lh3.googleusercontent.com/p/AF1QipNz0WYVUB4_A67Tn-Hdr0B-NAA3twHAkxvx_WUt=s680-w680-h510-rw',
        rating: 3,
        price: '$80-160',
        location: 'Harar',
        bookingLink: 'https://hararrashotel.com/'
      },
      {
        name: 'Gondar Hills Resort',
        description: 'Resort hotel with views of the royal castles and modern amenities.',
        image: 'https://images.trvl-media.com/lodging/97000000/96010000/96002400/96002327/69a0c929.jpg?impolicy=resizecrop&rw=1200&ra=fit',
        rating: 4,
        price: '$100-200',
        location: 'Gondar',
        bookingLink: 'https://expedia.com/affiliate/JcvDNGE'
      },
      {
        name: 'Omo Valley Lodge',
        description: 'Cultural lodge with access to indigenous tribes and traditional experiences.',
        image: 'https://www.eco-omo.com/wp-content/uploads/2020/10/lodgecompound.jpg',
        rating: 3,
        price: '$120-240',
        location: 'Omo Valley',
        link: 'https://www.eco-omo.com/'
      },
      {
        name: 'Axum Hotel',
        description: 'Hotel near the ancient stelae with historical significance.',
        image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/ae/8f/18/photo0jpg.jpg?w=900&h=500&s=1',
        rating: 3,
        price: '$70-140',
        location: 'Axum',
        bookingLink: 'https://www.tripadvisor.com/Hotel_Review-g293791-d1636489-Reviews-Axum_Hotel_Addis-Addis_Ababa.html'
      },
      {
        name: 'Awash Falls Lodge',
        description: 'Lodge near Awash National Park with wildlife viewing opportunities.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4npyYeDmcq0Qfaqpy7UprY7DLtjZG9BCqEgvxWc_vA_hvlUBauja6PmkASrmiA_VmUtrxxUG8BgLNZ4Nj-kGKHAZkGGcratlLCwchJw1ZeEd1-y-QgR_7feJDwYOnOwuCT6aQkI=s680-w680-h510-rw',
        rating: 3,
        price: '$90-180',
        location: 'Awash National Park',
        bookingLink: 'https://awash-falls-lodge.tophotelsethiopia.com/en/'
      },
      {
        name: 'Danakil Camp',
        description: 'Desert camping experience in the Danakil Depression with guided tours.',
        image: 'https://i0.wp.com/travelwiser.co/wp-content/uploads/2020/09/0280a-dallol-danakil-depression-ethiopia-travel-wiser.jpg?fit=1200%2C800&ssl=1',
        rating: 3,
        price: '$100-200',
        location: 'Danakil Depression',
        bookingLink: 'https://www.wildexpeditions.co/danakil-private-mobile-camp'
      },
      {
        name: 'Blue Nile Resort',
        description: 'Resort near the Blue Nile Falls with river views and nature activities.',
        image: 'https://images.trvl-media.com/lodging/13000000/12700000/12698600/12698584/b0d0025a.jpg?impolicy=resizecrop&rw=1200&ra=fit',
        rating: 5,
        price: '$80-160',
        location: 'Bahir Dar',
        bookingLink: 'https://expedia.com/affiliate/tZcAdyS'
      },
      {
        name: 'Radisson Blu Hotel',
        description: 'Located close to Addis Ababa Stadium and National Museum of Ethiopia, Radisson Blu Hotel, Addis Ababa provides a terrace, designer stores on site, and a coffee shop/cafe.',
        image: 'https://images.trvl-media.com/lodging/5000000/4860000/4855900/4855804/b2846622.jpg?impolicy=resizecrop&rw=1200&ra=fit',
        rating: 5,
        price: '$70-140',
        location: 'Addis Ababa',
        bookingLink: 'https://expedia.com/affiliate/BM78LBb'
      },
      {
        name: 'Gambela Safari Lodge',
        description: 'Wildlife lodge with access to wetland ecosystems and migration routes.',
        image: 'https://cdn.atrsafari.com/cdn/05explore/locations-and-lodges/africa/ethiopia/gambela/gambela-expedition-camp/0/stills/00page/01JGGE-IM0001-gambela-expedition-camp-1920.jpg',
        rating: 4,
        price: '$100-200',
        location: 'Gambela',
        bookingLink: 'https://atrsafari.com/safari-lodges/ethiopia/gambela/gambela-expedition-camp/'
      },
      {
        name: 'Debre Libanos Monastery Guesthouse',
        description: 'Simple accommodation near the historic monastery with spiritual atmosphere.',
        image: 'https://res.cloudinary.com/tourhq/image/upload/fl_progressive,f_auto,h_507,w_900,g_auto,c_fill,q_auto/z6dbnfscrx8khwjnnppe',
        rating: 2,
        price: '$40-80',
        location: 'Debre Libanos',
        bookingLink: 'https://www.safaribookings.com/tours/t96310'
      },
      {
        name: 'Nechisar Lodge',
        description: 'Park lodge between two Rift Valley lakes with wildlife viewing.',
        image: 'https://imgservice.casai.com/500x245/halala-kella-eco-lodge-et-zima-ep-107197060-0.jpg',
        rating: 4,
        price: '$80-160',
        location: 'Nechisar National Park',
        bookingLink: 'https://expedia.com/affiliate/M5Dej4I'
      },
      {
        name: 'Hilton Addis Ababa',
        description: 'Take advantage of 2 poolside bars, a free grocery shopping service, and a terrace at Hilton Addis Ababa. Treat yourself to a body wrap, a body scrub, or a manicure/pedicure at the onsite spa.',
        image: 'https://images.trvl-media.com/lodging/1000000/10000/3400/3335/5f68a09a.jpg?impolicy=resizecrop&rw=1200&ra=fit',
        rating: 4,
        price: '$90-180',
        location: 'Addis Ababa',
        bookingLink: 'https://expedia.com/affiliate/jTYJu51'
      },
      {
        name: 'Capital Hotel and Spa',
        description: 'Take advantage of a free roundtrip airport shuttle, a poolside bar, and a terrace at Capital Hotel & Spa. Indulge in a massage, a body wrap, and aromatherapy at the onsite spa.',
        image: 'https://images.trvl-media.com/lodging/7000000/6600000/6600000/6599955/21ffa6e9.jpg?impolicy=resizecrop&rw=1200&ra=fit',
        rating: 4,
        price: '$150-300',
        location: 'Addis Ababa',
        bookingLink: 'https://expedia.com/affiliate/5tjJR7p'
      }
    ],
    restaurants: [
      {
        name: 'Yod Abyssinia',
        cuisine: 'Traditional Ethiopian cuisine with cultural performances and authentic atmosphere.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nohKU4I2EjNrNX7mIK19dawsGp8-0sKfcZIXJCLYUxtms_jlxz8CpUna6t4OXm0-L7lwgMdUxGV1l94ly8_6PpLOIEUcYMpgfgQvLWTYkad75pA3pYk0iXLCo3UvZx9HOm6xS6o=s680-w680-h510-rw',
        rating: 5,
        priceRange: '$15-35',
        location: 'Addis Ababa',
        link: 'https://share.google/8SfzHu6qcDOJA4wHo'
      },
      {
        name: 'Kategna Restaurant',
        cuisine: 'Upscale Ethiopian restaurant with modern presentation of traditional dishes.',
        image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/de/30/d7/kategna-branch-laphto.jpg?w=900&h=500&s=1',
        rating: 4,
        priceRange: '$12-30',
        location: 'Addis Ababa',
        link: 'https://www.kategna.com/'
      },
      {
        name: 'Castelli Restaurant',
        cuisine: 'Italian cuisine with authentic pasta, pizza, and Mediterranean dishes.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqgjI9tyzFV3Az2A9_7H7Ejj-npjZ_nqorG6mXOPXi-Gu-pLucGKM4K3cCpBEGzRBmvp2Oz5HZGoCPQppZOvJkQ_HiO5yx-z8L1gsIjAV6gHE1fsZIfgF_hdYzkiAdS0cUlUESBOA=s680-w680-h510-rw',
        rating: 4,
        priceRange: '$18-40',
        location: 'Addis Ababa',
        link: 'https://share.google/ABYr4HyQsJEsMR3bE'
      },
      {
        name: 'Lime Tree Restaurant',
        cuisine: 'International cuisine with garden setting and diverse menu.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4npGObMAgPLFxcfvPCooWfO6EFnpjjWe-3bxdUyYWSFwUhzY1raPdFUCw8nBmvsq6calgxyfGWejfTBDqXPaZed8vDZ2WD1jQucfV3n0gBeRtpyw-ukBiukamRSsGyk-nprsDwz1=s680-w680-h510-rw',
        rating: 4,
        priceRange: '$15-35',
        location: 'Addis Ababa',
        link: 'https://share.google/CLP9LrWapFtvFBVul'
      },
      {
        name: 'Dashen Traditional Restaurant',
        cuisine: 'Authentic Ethiopian dining with traditional coffee ceremony and cultural shows.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqbRmkjlltlCb0ZMpml41waUHJZtRfr3OcchXFjTSgRJ2P6vOga0OkI3IuGAyAP0HOLEOAhOsVI6Hwst7wb3jcL0y4YSU7lE04-YU0eprtGPjZxXrVBp_kHqkCLr1p6Oq3Myi_v=s680-w680-h510-rw',
        rating: 4,
        priceRange: '$10-25',
        location: 'Addis Ababa',
        link: 'https://dashenterara.co/'
      },
      {
        name: 'Cravings Restaurant & Bar',
        cuisine: 'We have got everything to satisfy your cravings.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqvtXVtGAyDC4XEvv5Qc58j4hfVdnnpFF1QHriwGM6Y12JWqOiEms0a0VQ-JXO-hD_EvQaFvhFvJ8qV9VowfW8XmeCs9ajb4J92pHUcB6mYOpyXljLFpOJaIMJhiXeQJMDODDju16IsYQzW=s680-w680-h510-rw',
        rating: 4,
        priceRange: '$12-30',
        location: 'Addis Ababa',
        link: 'https://cravingaddis.com/'
      },
      {
        name: 'Marcus Addis Restaurant & Sky Bar',
        cuisine: 'Marcus Addis takes its roots from Ethiopian flavors, but reflects cuisine from across Africa and beyond.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4npK0sq3jm1VnayRi4ahtLDCviuHtgtAcIy-G6XQ3SOZVgx8jgX0Qj4hOOB4-wrpOKI-d9Dx2cgwBjdITwRz3C0urfjKlg6prAF44551qlvDxpbNUDPL3tCh2nb4G9mDPuFoLISuQX3_H2hi=s680-w680-h510-rw',
        rating: 4,
        priceRange: '$8-20',
        location: 'Addis Ababa',
        link: 'https://www.marcusaddis.com/'
      },
      {
        name: 'Habesha 2000 Restaurant',
        cuisine: 'Popular Ethiopian restaurant with live music and traditional atmosphere.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4npjKIwbYk2doE8baAAZLWzvU2lj-ybhk8eSiGu4lEmot7mI6Sil3HhUyqR0qoiPPES3Wnre4bO0ptGXNUM3HWM2XdjGQ9FyhtB_dyrfcQO82ESrs2sISA-ly2UwIzMJ0-1i16Qd4DjdrxY=s680-w680-h510-rw',
        rating: 4,
        priceRange: '$10-25',
        location: 'Addis Ababa',
        link: 'https://2000habesha.net/'
      },
      {
        name: 'Tomoca Coffee',
        cuisine: 'Historic coffee house serving traditional Ethiopian coffee and light meals.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nob5ROLDZEiUIDPQf5QiyzT4bwT6gN3ZX7WR5I7OUU4fGHmOt85KqptaqvihVofOH97YVRSxVDc9afLqtVq6BQ-7XmMpy-H2NBFtpUH5NRYZbqEjBbYLlnOSWs1ZgF_yeanlg0=s680-w680-h510-rw',
        rating: 4,
        priceRange: '$5-15',
        location: 'Addis Ababa',
        link: 'https://share.google/CQ5t3KzOBEbzbMONO'
      },
      {
        name: 'ADD Restaurant | Ethiopian Skylight',
        cuisine: '17 food and beverage outlets for a choice of dining experiences ranging from all-day dining, Ethiopian, Italian, Arabian and Asian restaurants, places to have tea and coffee while catching up with friends, spots for sips or hand-crafted cocktails before or after dinner with a panoramic view of the airport, and the city, also bars to music lovers.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqmTJqEswg-P898B4qd5THWFY0C48Eu7cngH0hWGU4VCvakha0C2YejrgAYz3y5Cs632VY1UnM5xIgn0oZuZhKCqNolWIXYcO3aVrG5_zbUSsUTWfw1ibmSuU_UElxgg4F_HX0=s680-w680-h510-rw',
        rating: 3,
        priceRange: '$10-30',
        location: 'Addis Ababa',
        link: 'https://www.ethiopianskylighthotel.com/restaurant-and-bar'
      },
      {
        name: 'Blue Nile Restaurant',
        cuisine: 'Restaurant with views of the Blue Nile Falls serving Ethiopian cuisine.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBHsSmaJzGHjVUyE3GzkIm5vbDRwgSFe6p0w&s',
        rating: 3,
        priceRange: '$10-25',
        location: 'Bahir Dar',
        link: 'https://www.bluenilerestaurant.com/'
      },
      {
        name: 'Meskott Culinary Experience',
        cuisine: 'Meskott is Addis Ababa’s latest addition to the rare scene of dining, promising a selection of international cuisine and an immersive bar.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqW2lc0zi4CJuii50ogohAS7IUouqzOUZ5wDSv-4yTPH79nT5lb54pnmVkFZHWkSqgdg68G3untEGm6JuhaTjoV18O9WLAyStvO2wUwh2p6QOAKfWjaXQMcjNbFu-xCgalkuH_GnQ=s680-w680-h510-rw',
        rating: 3,
        priceRange: '$8-20',
        location: 'Addis Ababa',
        link: 'https://meskottculinary.com/'
      },
      {
        name: 'HOTTO',
        cuisine: '⁦We serve ⁩⁦modern contemporary Japanese-inspired Asian fusion⁩⁦ with bespoke locally sourced ingredients. Come and indulge your senses.',
        image: 'https://lh3.googleusercontent.com/p/AF1QipOc6s8skpNbFJx6aWGS8XMBU3S1JkVBzpvglVWH=s680-w680-h510-rw',
        rating: 4,
        priceRange: '$10-100',
        location: 'Addis Ababa',
        link: 'https://www.hottoaddis.com/'
      },
      {
        name: 'Axum Heritage Restaurant',
        cuisine: 'The people, the food and the prime locations make Mesti Restaurant the perfect place for good customers to have a great time. We look forward to welcoming you soon.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nq30nkqF-011Y-hZ1owKZEQqutvY_wA8VGodcKxtV4FCcw0kOYsWXgHt-qMpL6y6mqBMBxvhQ1XCvzo9us7VTHKN2jS4fCrH-1-Zp6Qow3GiYyjeCN8ib0HLuh73mA5JZCzO--K=s680-w680-h510-rw',
        rating: 5,
        priceRange: '$10-30',
        location: 'Addis Ababa',
        link: 'https://mestirestaurant.com.et/'
      },
      {
        name: 'Simien Mountain Restaurant',
        cuisine: 'Mountain restaurant with highland cuisine and panoramic views.',
        image: 'https://media.evendo.com/locations-resized/DestinationDetails/original/052630ae-ee88-4bf3-be2c-a462ecf80acd',
        rating: 3,
        priceRange: '$10-25',
        location: 'Simien Mountains',
        link: 'https://www.tripadvisor.com/RestaurantsNear-g317059-d9786050-Simien_Mountain_Trekking_and_Tours-Gonder_Amhara_Region.html'
      },
      {
        name: 'Belvedere Restaurant',
        cuisine: 'Italian, Mediterranean, European,Lunch, Dinner, Special Diets, Vegetarian friendly, Vegan options.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrsXccbCCPLTawlUgv5FaJDh-aZCPzNa5SS52cYkmSw2OIHQofLTbmAaYyrugvlf8m-dDa-gwxFDQqr6cgNLYNaLZ7YC2Dpl750yK1xQyFOf6LbRPQ_ljs_8Zt44_CNIEvV8Oo=s680-w680-h510-rw',
        rating: 3,
        priceRange: '$12-28',
        location: 'Addis Ababa',
        link: 'https://share.google/scwNHIeNbY8ylVCvr'
      },
      {
        name: 'Omo Valley Cultural Restaurants',
        cuisine: 'Cultural dining experience with traditional tribal cuisine and performances.',
        image: 'https://imgix.brilliant-ethiopia.com/view-from-restaurant-at-paradise-lodge-arba-minch.jpg?auto=format,enhance,compress&fit=crop&crop=entropy,faces,focalpoint&w=0&h=288&q=60',
        rating: 3,
        priceRange: '$10-25',
        location: 'Omo Valley',
        link: 'https://www.tripadvisor.com/RestaurantsNear-g293791-d15613590-Omo_Valley_Experience_Tours-Addis_Ababa.html'
      },
      {
        name: 'Awash Falls Restaurant',
        cuisine: 'Restaurant near the national park with local cuisine and nature views.',
        image: 'https://kuriftu-public-media.s3.amazonaws.com/awash/21.webp',
        rating: 3,
        priceRange: '$8-20',
        location: 'Awash National Park',
        link: 'https://www.kurifturesorts.com/resorts/awash/dining'
      },
      {
        name: 'Tigray Rock Church Restaurant',
        cuisine: 'Traditional restaurant near the ancient rock churches with local specialties.',
        image: 'https://static1.squarespace.com/static/57b88db03e00be38aec142b0/57c177c0725e258e4bdd517e/59d5ed4e4c326d7c8be6d457/1515151782013/Blog+Cover+-+In+the+Mountains+of+Tigray+-+Rock-hewn+Churches+of+Ethiopia.jpg?format=1500w',
        rating: 3,
        priceRange: '$8-20',
        location: 'Tigray Region',
        link: 'https://evendo.com/locations/ethiopia/tigray-region/best-restaurants'
      },
      {
        name: 'Entoto Restaurant',
        cuisine: 'We offer the best contemporary fine ⁩⁦dining in addis⁩ - ⁦Entoto⁩⁦ proudly uses natural, free-range, and organic meats and poultry, the finest produce we can find.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4noWVbmWUpzxdIVaNrhyyG4lVzJqEW614cq-_6aaFVpUVrqqfZieCnkEEHJcYbm38lRtSxBAK_NUivQhrXPoTOBl9OjH17URgzCpuydMQ9OV7jZTktOefMwGwJz0pW5fr8ZpREcP=s680-w680-h510-rw',
        rating: 5,
        priceRange: '$10-20',
        location: 'Addis Ababa',
        link: 'https://share.google/dDXMOVYVIJv5J0GfQ'
      }
    ]
  },
  {
    name: 'Botswana',
    description: 'A landlocked gem offering pristine wilderness, the Okavango Delta, abundant wildlife, and luxury safari experiences in one of Africa\'s most stable democracies.',
    image: 'https://images.pond5.com/gaborone-botswana-january-2023-three-footage-231227235_iconl.jpeg',
    region: 'Southern Africa',
    population: '2.521 million',
    attractions: [
      {
        name: 'Okavango Delta',
        description: 'UNESCO World Heritage site and world\'s largest inland delta with pristine waterways and abundant wildlife.',
        image: 'https://atzaro-okavango.com/wp-content/uploads/2024/10/Atzaro_019-1.webp',
        location: 'Northern Botswana',
        link: 'https://okavangodelta.com/'
      },
      {
        name: 'Chobe National Park',
        description: 'Famous for having the largest concentration of elephants in Africa and diverse ecosystems.',
        image: 'https://d1azn61i9hwokk.cloudfront.net/uploads/big/The-Safari-Store-Savuti-Chobe-Mababe-Gate.jpg',
        location: 'Northern Botswana',
        link: 'https://www.chobe.com/'
      },
      {
        name: 'Central Kalahari Game Reserve',
        description: 'One of the world\'s largest game reserves with vast desert landscapes and unique wildlife.',
        image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/46/fe/72/matswere-gate-central.jpg?w=900&h=500&s=1',
        location: 'Central Botswana',
        link: 'https://www.botswanatourism.co.bw/explore/central-kalahari-game-reserve'
      },
      {
        name: 'Moremi Game Reserve',
        description: 'First wildlife sanctuary established by local communities, covering diverse ecosystems in the Okavango.',
        image: 'https://www.fotofeeling.com/Infos/Moremi/JPEG/21.jpg',
        location: 'Okavango Delta',
        link: 'https://www.botswanatourism.co.bw/explore/moremi-game-reserve'
      },
      {
        name: 'Makgadikgadi Pans',
        description: 'Vast salt pans creating surreal landscapes and hosting spectacular zebra migrations.',
        image: 'https://www.capetracks.nl/media/images/large/Makgadikgadi%20ingang%20%281%29.jpg',
        location: 'Central Botswana',
        link: 'https://www.botswanatourism.co.bw/explore/makgadikgadi-pans-game-reserve'
      },
      {
        name: 'Tsodilo Hills',
        description: 'UNESCO World Heritage site with over 4,500 rock paintings spanning thousands of years.',
        image: 'https://travelblog.gabrielaaufreisen.de/wp-content/uploads/2023/02/entrance-Tsodilo-Hills.jpg',
        location: 'Northwestern Botswana',
        link: 'https://www.botswanatourism.co.bw/explore/tsodilo-hills'
      },
      {
        name: 'Savuti',
        description: 'Famous for predator concentrations and the mysterious Savuti Channel.',
        image: 'https://d1azn61i9hwokk.cloudfront.net/uploads/big/The-Safari-Store-Savuti-Chobe-Mababe-Gate.jpg',
        location: 'Chobe National Park',
        link: 'https://www.botswanatourism.co.bw/savuti'
      },
      {
        name: 'Linyanti Wildlife Reserve',
        description: 'Private concession with excellent wildlife viewing and luxury safari experiences.',
        image: 'https://www.andbeyond.com/wp-content/uploads/sites/5/Large-Observation-Desk-at-Savuti-Camp.jpg',
        location: 'Northern Botswana',
        link: 'https://africanbushcamps.com/destinations/botswana/'
      },
      {
        name: 'Khama Rhino Sanctuary',
        description: 'Community-based sanctuary protecting white and black rhinos.',
        image: 'https://media.tracks4africa.co.za/users/images/w150292_23009_entrance-gate-khama-rhino-sanctuary_the-entrance.JPG',
        location: 'Central Botswana',
        link: 'https://www.khamarhinosanctuary.org.bw/'
      },
      {
        name: 'Nxai Pan National Park',
        description: 'Salt pan with ancient baobab trees and seasonal wildlife concentrations.',
        image: 'https://africanlanders.com/wp-content/uploads/2021/06/20190826_120216-scaled.jpg',
        location: 'Northern Botswana',
        link: 'https://www.info-botswana.com/activities-and-places-of-interest/makgadikgadi-nxai-pans/nxai-pan-national-park'
      },
      {
        name: 'Tuli Block',
        description: 'Private reserves along the Limpopo River with diverse landscapes and wildlife.',
        image: 'https://africantravels.com/wp-content/uploads/2021/02/African-Travels-1500-Botswana-Accommodation-lodge-Jao-Camp-Okavango-8.png',
        location: 'Eastern Botswana',
        link: 'https://www.notugre.com/'
      },
      {
        name: 'Gcwihaba Caves',
        description: 'Limestone caves with stalactites and stalagmites in the Kalahari Desert.',
        image: 'https://pbs.twimg.com/media/Dj5pYUUXcAApziJ.jpg',
        location: 'Northwestern Botswana',
        link: 'https://www.botswanatourism.co.bw/explore/gcwihaba-caves-and-aha-hills'
      },
      {
        name: 'Gaborone Game Reserve',
        description: 'Small reserve near the capital with walking trails and wildlife viewing.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Gaborone_Game_Reserve%2C_Entrance_20200402.jpg',
        location: 'Gaborone',
        link: 'https://www.botswanatourism.co.bw/'
      },
      {
        name: 'Mokolodi Nature Reserve',
        description: 'Private reserve near Gaborone with rhino breeding program and education center.',
        image: 'https://thegaboronerunner.com/wp-content/uploads/2022/02/mokolodi-1.jpg?w=500',
        location: 'Near Gaborone',
        link: 'https://mokolodi.co.bw/'
      },
      {
        name: 'Mashatu Game Reserve',
        description: 'Private reserve in the Tuli Block known for elephant herds and baobab trees.',
        image: 'https://drivebotswana.com/wp-content/uploads/2019/08/Mashatu-Euphorbia-Villa.jpg',
        location: 'Eastern Botswana',
        link: 'https://www.mashatu.com/'
      },
      {
        name: 'Kgalagadi Transfrontier Park',
        description: 'Cross-border park with South Africa featuring red sand dunes and desert wildlife.',
        image: 'https://cheetahsafaris.com/wp-content/uploads/2025/01/20240722_093438.jpg',
        location: 'Southern Botswana',
        link: 'https://www.sanparks.org/parks/kgalagadi'
      },
      {
        name: 'Kubu Island',
        description: 'Ancient granite outcrop in Makgadikgadi Pans with baobab trees and archaeological sites.',
        image: 'https://www.photostream.ch/wp/wp-content/uploads/2019/03/MG_8632.jpg',
        location: 'Makgadikgadi Pans',
        link: 'http://www.kubuisland.com/'
      },
      {
        name: 'Selinda Reserve',
        description: 'Private concession connecting Okavango Delta and Linyanti with diverse ecosystems.',
        image: 'https://i.ytimg.com/vi/nX1T1BUVcwk/maxresdefault.jpg',
        location: 'Northern Botswana',
        link: 'https://www.botswanatourism.co.bw/stay/selinda-camp'
      },
      {
        name: 'Kwando Concession',
        description: 'Private wildlife area with excellent predator viewing and luxury camps.',
        image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/83/e2/e6/kwando-lagoon-camp-swimming.jpg?w=900&h=-1&s=1',
        location: 'Northern Botswana',
        link: 'https://www.kwando.co.bw/'
      },
      {
        name: 'Jao Concession',
        description: 'Pristine Okavango Delta concession with water-based safari activities.',
        image: 'https://cdn.atrsafari.com/cdn/05explore/locations-and-lodges/africa/botswana/okavango/okavango-jao/jao-camp/0/stills/02location/01BJAO-IM0201-jao-camp-1280.jpg',
        location: 'Okavango Delta',
        link: 'https://okavangodelta.com/destinations/jao-concession/'
      }
    ],
    transportation: [
      {
        type: 'Charter Flights',
        description: 'Small aircraft transfers between safari camps and destinations.',
        price: '$200-600',
        route: 'Maun to Delta Camps'
      },
      {
        type: 'Mokoro Excursions',
        description: 'Traditional dugout canoe trips through Okavango Delta waterways.',
        price: '$50-150/day',
        route: 'Okavango Delta Channels'
      },
      {
        type: 'Safari Vehicles',
        description: 'Luxury 4WD vehicles for game drives and park transfers.',
        price: '$200-500/day',
        route: 'Chobe and Moremi'
      },
      {
        type: 'Boat Safaris',
        description: 'River cruises on Chobe River and Delta waterways.',
        price: '$100-300',
        route: 'Chobe River'
      }
    ],
    hotels: [
      {
        name: 'Belmond Eagle Island Lodge',
        description: 'Ultra-luxury lodge in the heart of the Okavango Delta with water-based activities.',
        image: 'https://i.ytimg.com/vi/vYkKNXOy2_U/maxresdefault.jpg',
        rating: 5,
        price: '$2000-4000',
        location: 'Okavango Delta',
        bookingLink: 'https://www.belmond.com/'
      },
      {
        name: 'Mombo Camp',
        description: 'Exclusive safari camp in Moremi Game Reserve with exceptional wildlife viewing.',
        image: 'https://cdn.atrsafari.com/cdn/05explore/locations-and-lodges/africa/botswana/okavango/okavango-moremi/mombo-camp/0/stills/02location/01BMOM-IM1001-mombo-camp-1280.jpg',
        rating: 5,
        price: '$2500-5000',
        location: 'Moremi Game Reserve',
        bookingLink: 'https://www.wilderness-safaris.com/our-camps/camps/mombo-camp'
      },
      {
        name: 'Chobe Game Lodge',
        description: 'Luxury lodge on the banks of the Chobe River with elephant viewing.',
        image: 'https://www.matriarchafrica.com/wp-content/uploads/2018/07/Bush-Lodge-Chobe.jpg',
        rating: 5,
        price: '$1500-3000',
        location: 'Chobe National Park',
        bookingLink: 'https://www.desertdelta.com/chobe-game-lodge'
      },
      {
        name: 'Jao Camp',
        description: 'Elevated luxury camp in pristine Okavango Delta concession.',
        image: 'https://www.swissafrican.com/img/camps/botswana/bw_qorokwe/qorokwe_01a.jpg',
        rating: 5,
        price: '$2200-4500',
        location: 'Okavango Delta',
        bookingLink: 'https://www.wilderness-safaris.com/our-camps/camps/jao-camp'
      },
      {
        name: 'Savuti Camp',
        description: 'Luxury camp in the famous Savuti area known for predator concentrations.',
        image: 'https://www.swissafrican.com/img/camps/botswana/bw_duma_tau/duma_tau_01a.jpg',
        rating: 5,
        price: '$1800-3600',
        location: 'Chobe National Park',
        bookingLink: 'https://www.campsavuti.com/'
      },
      {
        name: 'Duba Plains Camp',
        description: 'Exclusive camp famous for lion and buffalo interactions in the Okavango.',
        image: 'https://i.ytimg.com/vi/tZuzxv5tjRc/maxresdefault.jpg',
        rating: 5,
        price: '$2000-4000',
        location: 'Okavango Delta',
        bookingLink: 'https://www.greatplainsconservation.com/duba-plains'
      },
      {
        name: 'Zarafa Camp',
        description: 'Ultra-luxury camp in Selinda Reserve with exceptional wildlife and scenery.',
        image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/6b/82/ef/xigera-safari-lodge.jpg?w=1200&h=-1&s=1',
        rating: 5,
        price: '$2500-5000',
        location: 'Selinda Reserve',
        bookingLink: 'https://greatplainsconservation.com/'
      },
      {
        name: 'Mashatu Main Camp',
        description: 'Luxury safari lodge in Mashatu Game Reserve with diverse wildlife.',
        image: 'https://safari-consultants.com/wp-content/uploads/2023/05/jacks-camp-aerial-c-ns.jpg',
        rating: 4,
        price: '$800-1600',
        location: 'Tuli Block',
        bookingLink: 'https://mashatu.com/tag/mashatu-main-camp/'
      },
      {
        name: 'Leroo La Tau',
        description: 'Luxury camp overlooking the Boteti River with zebra migration viewing.',
        image: 'https://silverless-media-desertdelta.s3.eu-west-2.amazonaws.com/wp-content/uploads/2019/05/25134715/Leroo-La-Tau-Aerial-01.jpg',
        rating: 4,
        price: '$600-1200',
        location: 'Makgadikgadi Pans',
        bookingLink: 'https://www.desertdelta.com/leroo-la-tau'
      },
      {
        name: 'Kwando Lebala Camp',
        description: 'Luxury camp in Kwando Concession with excellent predator viewing.',
        image: 'https://cdn.atrsafari.com/cdn/05explore/locations-and-lodges/africa/botswana/linyanti/kwando/lagoon-camp/0/stills/02location/02BLAG-IM1002-lagoon-camp.jpg',
        rating: 5,
        price: '$1500-3000',
        location: 'Kwando Concession',
        bookingLink: 'https://www.kwando.co.bw/camps/lebala/'
      },
      {
        name: 'Camp Kalahari',
        description: 'Classic safari camp in the Central Kalahari with traditional atmosphere.',
        image: 'https://media.istockphoto.com/id/1137069728/video/4k-aerial-view-of-camp-kalahari-on-the-makgadikgadi-pans-botswana.jpg?s=640x640&k=20&c=oR7ciG1IIJzGyOYD7RpLXcqnCfBGi6ZdfEqRPOI5hnY=',
        rating: 4,
        price: '$800-1600',
        location: 'Central Kalahari',
        bookingLink: 'https://naturalselection.travel/camps/camp-kalahari/'
      },
      {
        name: 'Linyanti Bush Camp',
        description: 'Intimate camp in Linyanti Wildlife Reserve with excellent game viewing.',
        image: 'https://cdn.atrsafari.com/cdn/05explore/locations-and-lodges/africa/botswana/linyanti/chobeenclave/linyanti-bush-camp/0/stills/02location/01BLYB-IM0201-linyanti-bush-camp-1280.jpg',
        rating: 4,
        price: '$1200-2400',
        location: 'Linyanti Reserve',
        bookingLink: 'https://expedia.com/affiliate/LasZUGk'
      },
      {
        name: 'Nxai Pan Camp',
        description: 'Seasonal camp in Nxai Pan National Park with baobab trees and wildlife.',
        image: 'https://www.wintonafricasafaris.com/wp-content/uploads/2024/09/Nxai-Pan-National-Park.jpg',
        rating: 4,
        price: '$1000-2000',
        location: 'Nxai Pan',
        bookingLink: 'https://www.wilderness-safaris.com/our-camps/camps/nxai-pan-camp'
      },
      {
        name: 'Khwai River Lodge',
        description: 'Community-owned lodge on the edge of Moremi Game Reserve.',
        image: 'https://lft-dev-images.s3.eu-west-1.amazonaws.com/public/property/xigeraaerial.jpg?w=450&h=150&q=75&auto=compress,format',
        rating: 4,
        price: '$600-1200',
        location: 'Khwai Community Area',
        bookingLink: 'https://pelorustravel.com/botswana/accommodation/khwai-river-lodge'
      },
      {
        name: 'Deception Valley Lodge',
        description: 'Luxury lodge in Central Kalahari with unique desert experiences.',
        image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/30/20/a3/65/star-bed-at-our-sky-luxe.jpg?w=1200&h=-1&s=1',
        rating: 4,
        price: '$1000-2000',
        location: 'Central Kalahari',
        bookingLink: 'https://deceptionvalleyprivatereserve.com/'
      },
      {
        name: 'Tau Pan Camp',
        description: 'Remote camp in Central Kalahari with authentic desert safari experience.',
        image: 'https://www.chaloafrica.com/wp-content/uploads/2018/03/Tau-Pan-Camp-Aerial-View-770x250.jpg',
        rating: 4,
        price: '$1200-2400',
        location: 'Central Kalahari',
        bookingLink: 'https://www.kwando.co.bw/camps/tau-pan/'
      },
      {
        name: 'Selinda Camp',
        description: 'Luxury camp in Selinda Reserve with diverse ecosystems and wildlife.',
        image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/0c/e4/cb/selinda-camp-aerial-view.jpg?w=800&h=500&s=1',
        rating: 5,
        price: '$1800-3600',
        location: 'Selinda Reserve',
        bookingLink: 'https://okavangodelta.com/camps/selinda-camp/'
      },
      {
        name: 'Tubu Tree Camp',
        description: 'Elevated camp in Jao Concession with excellent wildlife and bird viewing.',
        image: 'https://cdn.atrsafari.com/cdn/05explore/locations-and-lodges/africa/botswana/okavango/okavango-jao/tubu-tree-camp/0/stills/02location/01BTUB-IM0201-tubu-tree-camp-1280.jpg',
        rating: 5,
        price: '$2000-4000',
        location: 'Jao Concession',
        bookingLink: 'https://www.wilderness-safaris.com/our-camps/camps/tubu-tree-camp'
      },
      {
        name: 'Vumbura Plains Camp',
        description: 'Luxury camp in northern Okavango Delta with water and land activities.',
        image: 'https://www.go2africa.com/wp-content/uploads/2017/08/Vumbura-Plains-Botswana-Wilderness-Safaris-aerial-BANNER.jpg',
        rating: 5,
        price: '$1800-3600',
        location: 'Okavango Delta',
        bookingLink: 'https://www.wildernessdestinations.com/africa/botswana/okavango-delta/vumbura-plains-camp?utm_source=google&utm_medium=organic&utm_campaign=gmb&utm_content=camp_profile'
      },
      {
        name: 'Sandibe Okavango Safari Lodge',
        description: 'Eco-luxury lodge with innovative design in pristine Okavango setting.',
        image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/6b/82/ef/xigera-safari-lodge.jpg?w=1200&h=-1&s=1',
        rating: 5,
        price: '$1500-3000',
        location: 'Okavango Delta',
        bookingLink: 'https://www.andbeyond.com/our-lodges/africa/botswana/okavango-delta/andbeyond-sandibe-okavango-safari-lodge/'
      }
    ],
    restaurants: [
      {
        name: 'Bull & Bush Pub',
        cuisine: 'International pub fare with steaks, burgers, and local atmosphere.',
        image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/65/ab/c6/photo0jpg.jpg?w=1200&h=1200&s=1',
        rating: 4,
        priceRange: '$15-35',
        location: 'Gaborone',
        link: 'https://www.bullbush.com/'
      },
      {
        name: 'Caravela Portuguese Restaurant',
        cuisine: 'Portuguese cuisine with fresh seafood and traditional dishes.',
        image: 'https://lh3.googleusercontent.com/p/AF1QipN9-0xAE_LVGf92CizG8wWdydcdcDraDyRXKUqW=s680-w680-h510-rw',
        rating: 4,
        priceRange: '$20-45',
        location: 'Gaborone',
        link: 'https://www.facebook.com/twosixsevenbw/'
      },
      {
        name: 'Thorn Tree Cafe',
        cuisine: 'Continental and African cuisine with outdoor seating and garden atmosphere.',
        image: 'https://www.sarovahotels.com/stanley-nairobi/assets/images/product/500/thorn-tree-cafe-banner_thorn-tree-cafe.jpg',
        rating: 4,
        priceRange: '$12-30',
        location: 'Maun',
        link: 'https://diggersinn.co.bw/thorn-tree/'
      },
      {
        name: 'Chutney Restaurant',
        cuisine: 'Indian cuisine with authentic spices and traditional cooking methods.',
        image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/80/50/06/photo2jpg.jpg?w=1200&h=-1&s=1',
        rating: 4,
        priceRange: '$15-35',
        location: 'Gaborone',
        link: 'https://g.co/kgs/haJxe6F'
      },
      {
        name: 'Sanitas Tea Garden',
        cuisine: 'Light meals, teas, and homemade cakes in a peaceful garden setting.',
        image: 'https://i.ytimg.com/vi/X55px0j72d8/maxresdefault.jpg',
        rating: 4,
        priceRange: '$8-20',
        location: 'Francistown',
        link: 'https://www.sanitas.co.bw/tea_garden.html'
      },
      {
        name: 'Beef Baron',
        cuisine: 'Steakhouse specializing in premium Botswana beef and grilled meats.',
        image: 'https://lh3.googleusercontent.com/p/AF1QipPFIEHjzP51QMRvqkpTkNH3Uo4tSRPB9OTHIfN8=s680-w680-h510-rw',
        rating: 4,
        priceRange: '$18-40',
        location: 'Gaborone',
        link: 'https://grandpalm.bw/restaurants/'
      },
      {
        name: 'Mokolodi Restaurant',
        cuisine: 'Restaurant at nature reserve serving game meat and traditional dishes.',
        image: 'https://goldcoastxp.com/wp-content/uploads/Mokolodi-Restaurant-dp2.jpg',
        rating: 4,
        priceRange: '$15-35',
        location: 'Mokolodi Nature Reserve',
        link: 'https://g.co/kgs/JfvFbs2'
      },
      {
        name: 'Table50Two restauran',
        cuisine: 'Our ﬁne dining restaurant offers a unique and world class menu complemented by a comprehensive selection of fine wines and beverages. Breakfast is also served on the Rooftop; a full English breakfast buffet is on offer with some healthy options also available. Table50two is the ideal place to have your breakfast meeting, corporate lunch, a quiet family dinner or to celebrate a special occasion.',
        image: 'https://table50two.co.bw/img/restaurant/rest3.jpg',
        rating: 4,
        priceRange: '$18-40',
        location: 'Gaborone',
        link: 'https://table50two.co.bw/'
      },
      {
        name: 'Park 27 restaurant',
        cuisine: 'A note worthy lifestyle restaurant that conceptualizes a new era of dining. Fusion of flavors, ambiance, people, & music.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nobA2vR343vaekqx7lDkimXbJP99KVsDWKyDF78izdLle_BeqwRRKc4XwwiTtyLlmIXrty-Vs3BcG69b_CAHVbhE5Cy-yqnENpNAyqx4bNavEEhr5RFaZLjw_Jk9UPVuG-xCR_7sQ=s680-w680-h510-rw',
        rating: 4,
        priceRange: '$10-30',
        location: 'Gaborone',
        link: 'https://g.co/kgs/ypMvkZq'
      },
      {
        name: 'Doppio Zero The Fields restaurant',
        cuisine: 'Real good-mood food and uplifting personal connection are effortlessly enjoyed in our aspirational and ‘localised’ eateries, where you always feel comfortable to be you.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqr8jYJ9Tac7u8G35lpfo7yv_ZoNT6jwbZhUiPHT3CWezP5rLYGh7fNJtMjhViI_hy1DhRCQfbjGfl7jPbEu6sKhYS7uT0HXeIg1Y4KyJhQNnqLv9zIRUBetXg1-EEK1zcvm3Ea=s680-w680-h510-rw',
        rating: 4,
        priceRange: '$25-50',
        location: 'Gaborone',
        link: 'https://doppio.co.za/restaurant/gaborone-the-fields/'
      },
      {
        name: 'Mozambik Gaborone Restauran',
        cuisine: 'Passionate about friends and family coming together over exceptional food and a welcoming experience! This is exactly what we have created, a “sink your toes into the sand and sip on cocktails and R&R’s while the sun goes down” experience.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4npcg5NN9-HvA6dnzFrf-RMba3uJdyWmirGJuijkBDP29FzoCu3yHmvG-YJyCktgt38Vrav2GOb6mbOFhUQJZDdEYK2wz7gXPBdcEO81O2iiZY3JS8yjfzJAtznk_2sc-uEn1ZJT=s680-w680-h510-rw',
        rating: 4,
        priceRange: '$25-50',
        location: 'Gaborone',
        link: 'https://www.mozambik.co.za/botswana/'
      },
      {
        name: 'Nando\'s Botswana',
        cuisine: 'Popular chicken restaurant chain with peri-peri flavors.',
        image: 'https://lh3.googleusercontent.com/p/AF1QipPJ_987mx76krguya7r2rr5tTMZtcp2IzsLjrND=s1600-w2436',
        rating: 3,
        priceRange: '$8-20',
        location: 'Multiple locations',
        link: 'https://www.nandos.co.bw/'
      },
      {
        name: 'Main Deck Restaurant & Bar',
        cuisine: 'Main Deck Restaurant and Bar in located in the heart of Main Mall.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrdMULIrxMxxbmqAz4McFfGB5SnyF7XuQYYRewv7pDs-OXPbYNpBzt5_yj0MNqIf2NjCszyrsBstOqANnGdZTcmRf41oTS6oKaaQtIUUUg8i47jMU8kb32bCxjUhNc9z8N5RId1Qg=s680-w680-h510-rw',
        rating: 4,
        priceRange: '$18-40',
        location: 'Gaborone',
        link: 'https://g.co/kgs/WhrRzBm'
      },
      {
        name: 'Zen Cafe Lounge',
        cuisine: 'Indulge your senses at Zen Cafe Lounge, Gaborone’s premier destination for fine dining, gourmet burgers, fusion cuisine, and artisan cocktails., where culinary artistry meets vibrant nightlife. Our diverse menu, ranging from gourmet burgers and pizzas to delightful breakfast and lunch options, caters to every palate.',
        image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/95/f6/29/step-into-a-world-of.jpg?w=900&h=500&s=1',
        rating: 3,
        priceRange: '$15-35',
        location: 'Gaborone',
        link: 'https://zencafe.co.bw/'
      },
      {
        name: 'Dusty Donkey Café Restaurant',
        cuisine: 'A delightful Café and Coffee Shop. There is always a delicious table of freshly baked cakes, cookies and savoury delights. A fridge has local farm products for sale. The basic menu together with the daily specials offers fresh, seasonal light meals.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4no--uWLaPi-HDNcrhJrCNqmzGxMRcc_eusqSWkXYsgRmTDE38hsLfJPteaWyzgqwTJ9a9C9ewl1u8kT75PXIvJKry9-ty9qQUrP6Jukn4Hrg-hnaoZlrNf2tJZ1J03cKMvtJkFz=s680-w680-h510-rw',
        rating: 5,
        priceRange: '$12-30',
        location: 'Maun',
        link: 'https://g.co/kgs/Ncg6hs4'
      },
      {
        name: 'Studio Cafe BW Restaurant',
        cuisine: 'CELEBRATE LIFE! Top Notch Dining with unparalleled experience and atmosphere in an ecological environment.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4now_nCxRhY-fnpmmXg0XGeUJYJWml5RdugbUBBBnMUNeo1jjuOcs04jWYEmF0QuMZOGCRfhAG40P3BIDMhHb-zWHn18au6onbABT-FVZBiE-cGdKwXJmALfc9hKbLG24izFqH7C=s680-w680-h510-rw',
        rating: 4,
        priceRange: '$10-45',
        location: 'Gaborone',
        link: 'https://g.co/kgs/JFzuxDB'
      },
      {
        name: 'RocoMamas Gaborone Restaurant',
        cuisine: 'Rocomama’s has the best selection of Burgers, American Style Chicken Wings and Waffles.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nplMirvSFFitB6Mf9r0QzTig2OW-pP0tEz0x7ATQWYik5DbMyr9mt4nterDgeKWSh2LPYtQc8AiIDYyNRekIsLviPzvh_XYQ6z7PcSVUwqMRzN9GkRcLfAnlJ6dYd_SUrEYVBVvcQ=s680-w680-h510-rw',
        rating: 5,
        priceRange: '$12-28',
        location: 'Francistown',
        link: 'https://rocomamas.com/bw'
      },
      {
        name: 'Cappucinos Restaurant',
        cuisine: 'The diverse menu is a testament of time-honoured family recipes and current foodie trends made with the finest quality ingredients that through trial-and-error ensure that the Cappuccinos offering remains fresh and exciting.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqQ2pWFVp4JNu70Te9NWNzd0jgq-zK7cpW7TaLsnrejCiY3Ww6GT6a0fO7_5RbGOFO8vpklv1buSDlGyzq1Jq5qmvb6bRexTt0en8Mq7m-Ekv4_KlnAdtogg3PRpjydJMAkFsLx_Q=s680-w680-h510-rw',
        rating: 4,
        priceRange: '$10-40',
        location: 'Gaborone',
        link: 'https://www.cappuccinos.co.za/restaurants'
      },
      {
        name: 'The Pond Restaurant',
        cuisine: 'The Pond Restaurant “a small body of still water formed naturally or by artificial means.”Located at Mogobe Plaza in Botswana’s Central Business District, The Pond Restaurant is a vibrant spot and dining destination where guests can unwind & enjoy life.',
        image: 'https://lh3.googleusercontent.com/p/AF1QipOhiwk-sRR_fhYa130gu3GGWbG5rCo88mrenSXL=s680-w680-h510-rw',
        rating: 4,
        priceRange: '$10-25',
        location: 'Gaborone',
        link: 'https://thepondrestaurant.com/'
      },
      {
        name: 'Nando\'s CBD restaurant',
        cuisine: 'Born in South Africa and taken to the world, Nando\'s specialises in Portuguese-style, flamed-grilled chicken dishes with various PERi-PERi marinades.Experience a truly South African dining experience at Nando’s in Gaborone.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqG-6wYfwoxj7QGERQitOuwYA0Z2VkiTC3Ksl3Xp51LboJf4O3N4j51akEZWq3_LM862syIy44v8o6uXBnNSPkVdfyScUzivSVf1IQrz_2rslPOxcY5wxPuJ6odthIgkcWO5PD-=s680-w680-h510-rw',
        rating: 4,
        priceRange: '$10-30',
        location: 'Gaborone',
        link: 'https://store.nandos.co.bw/details/cbd'
      }
    ]
  },
  {
    name: 'Namibia',
    description: 'A land of stark beauty featuring the ancient Namib Desert, dramatic coastlines, and unique wildlife adapted to extreme environments.',
    image: 'https://i.ytimg.com/vi/Gn2sa80o_Cs/maxresdefault.jpg',
    region: 'Southern Africa',
    population: '3.03 million',
    attractions: [
      {
        name: 'Sossusvlei',
        description: 'Iconic red sand dunes and white clay pans in the Namib Desert, offering spectacular sunrise views and photography opportunities.',
        image: 'https://www.uniqhotels.com/media/hotels/60-hotel-orig/desert_whisper.jpg.938x599_q85_box-400%2C0%2C1996%2C789_crop_detail.jpg',
        location: 'Namib-Naukluft Park',
        link: 'https://www.sossusvlei.org/'
      },
      {
        name: 'Etosha National Park',
        description: 'Premier wildlife destination centered around a vast salt pan with exceptional game viewing at waterholes.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrj7vhuPW3c0CKfDCBfoCpjWUEhPLqEmW4RWteP45G0Z-AgcSeV29I8BYXGHGyMwuHZ29UslFqS-T1n1HbU25imG3xAlyx9PjQbk7K2Yr3XW5vzfVSUAMOoVHi7H_JjBAo0WESDMQ=s680-w680-h510-rw',
        location: 'Northern Namibia',
        link: 'https://www.etoshanationalpark.org/'
      },
      {
        name: 'Fish River Canyon',
        description: 'Second largest canyon in the world with dramatic landscapes and hiking opportunities.',
        image: 'https://gondwana-collection.com/hubfs/Gondwana%20Website/Accommodation/Canyon%20Roadhouse/Canyon%20Roadhouse_main%20banner.jpg',
        location: 'Southern Namibia',
        link: 'https://gondwana-collection.com/en/the-fish-river-canyon-experience'
      },
      {
        name: 'Skeleton Coast',
        description: 'Hauntingly beautiful coastline with shipwrecks, seal colonies, and desert landscapes meeting the Atlantic Ocean.',
        image: 'https://www.micato.com/wp-content/uploads/2018/09/skeleton-coast.jpg',
        location: 'Northwestern Namibia',
        link: 'https://www.go2africa.com/destinations/skeleton-coast/why-go'
      },
      {
        name: 'Damaraland',
        description: 'Rugged region with ancient rock art, desert-adapted elephants, and dramatic rock formations.',
        image: 'https://q-xx.bstatic.com/xdata/images/hotel/840x460/451976626.jpg?k=770a764fe88e630b059afd90b125c64e9c46431cce852c059e32b49298128cf4&o=',
        location: 'Northwestern Namibia',
        link: 'https://www.go2africa.com/destinations/damaraland/why-go'
      },
      {
        name: 'Swakopmund',
        description: 'Coastal town with German colonial architecture, adventure activities, and desert tours.',
        image: 'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/09/a5/59/d2.jpg',
        location: 'Western Namibia',
        link: 'https://www.expedia.com/Swakopmund.dx3322'
      },
      {
        name: 'Twyfelfontein',
        description: 'UNESCO World Heritage site with thousands of ancient rock engravings and paintings.',
        image: 'https://images.trvl-media.com/lodging/90000000/89170000/89168500/89168418/06df7bab.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill',
        location: 'Damaraland',
        link: 'https://www.namibiaexperience.com/blog/twyfelfontein-namibia/'
      },
      {
        name: 'Kolmanskop Ghost Town',
        description: 'Abandoned diamond mining town being reclaimed by the desert, offering eerie photography opportunities.',
        image: 'https://www.shutterstock.com/image-photo/sign-ghost-town-kolmanskop-namibia-260nw-62145379.jpg',
        location: 'Southern Namibia',
        link: 'https://kolmanskuppe.com/'
      },
      {
        name: 'Caprivi Strip',
        description: 'Lush riverine region contrasting with the rest of Namibia, offering excellent wildlife viewing and water activities.',
        image: 'https://www.expertafrica.com/images/background-image/8490323320a2478e8409d35142a69482.jpg',
        location: 'Northeastern Namibia',
        link: 'https://www.namibiaexperience.com/places-to-visit/caprivi-strip/'
      },
      {
        name: 'Spitzkoppe',
        description: 'Dramatic granite peaks rising from the desert, with ancient rock art and spectacular stargazing.',
        image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/22/0a/6e/5c/spitzkoppe-namibia.jpg?w=1200&h=-1&s=1',
        location: 'Western Namibia',
        link: 'https://charlies-travels.com/en/unique-experience/spitzkoppe/'
      },
      {
        name: 'Waterberg Plateau',
        description: 'Table mountain with rich biodiversity, hiking trails, and rare species conservation.',
        image: 'https://www.info-namibia.com/images/accommodation/waterberg/Waterberg-Plateau-Lodge-Intro.jpg',
        location: 'Central Namibia',
        link: 'https://www.nwr.com.na/waterberg-plateau-park/'
      },
      {
        name: 'Kaokoland',
        description: 'Remote wilderness area home to the Himba people and desert-adapted wildlife.',
        image: 'https://www.namibiaexperience.com/wp-content/uploads/2024/10/epupa-falls-namibia-omarunga-epupa-falls-thumb-1024x605.jpg',
        location: 'Northwestern Namibia',
        link: 'https://www.namibiaexperience.com/places-to-visit/kaokoland/'
      },
      {
        name: 'Lüderitz',
        description: 'Coastal town with German colonial architecture surrounded by the Namib Desert.',
        image: 'https://image.isu.pub/151208063629-71b29b765d4ea2232a60e4e1dc930946/jpg/page_1_thumb_large.jpg',
        location: 'Southern Namibia',
        link: 'https://www.namibiaexperience.com/de/sehenswuerdigkeiten/luederitz/'
      },
      {
        name: 'NamibRand Nature Reserve',
        description: 'Private reserve with stunning desert landscapes, wildlife, and International Dark Sky designation.',
        image: 'https://namibian.org/img/cms/lodges/galleries/namibrand8-beyondheader01_crop500x350.jpg',
        location: 'Southern Namibia',
        link: 'https://www.namibrand.org/'
      },
      {
        name: 'Windhoek',
        description: 'Capital city with German colonial architecture, museums, and cultural attractions.',
        image: 'https://www.namibiaexperience.com/wp-content/uploads/2022/08/windhoek-places-to-visit-namibia--1536x573.jpg',
        location: 'Central Namibia',
        link: 'https://www.namibiaexperience.com/places-to-visit/windhoek/'
      },
      {
        name: 'Brandberg Mountain',
        description: 'Namibia\'s highest mountain with ancient rock art including the famous White Lady painting.',
        image: 'https://adventuresnolimits.com/wp-content/uploads/2022/10/National_Monument_Brandberg-Copy.jpg',
        location: 'Western Namibia',
        link: 'https://namibian.org/nature/mountains/mountains/brandberg'
      },
      {
        name: 'Quiver Tree Forest',
        description: 'Natural monument featuring hundreds of unique aloe trees and dramatic landscapes.',
        image: 'https://charlies-travels.com/wp-content/uploads/2024/10/CT-Namibie-Header-Highlight-Quivertree-forest.jpg',
        location: 'Southern Namibia',
        link: 'https://charlies-travels.com/en/unique-experience/quiver-forest/'
      },
      {
        name: 'Cape Cross Seal Reserve',
        description: 'Home to one of the largest Cape fur seal colonies in the world with thousands of seals.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4noocpJzU_o__5gTYnjOWkXU9h4UE9qzadzCIsrzg18446uC1-QdbSXsSiZVH4U1B30YkaZeqfnGfyN3QVoammeeg0LV8AMdL8N4Rmm6cadMlmDIkToixzUSC8Rxp8ls8QRq5Iuo=s680-w680-h510-rw',
        location: 'Western Namibia',
        link: 'https://share.google/pckMy3KuyXrsIOovE'
      },
      {
        name: 'Epupa Falls',
        description: 'Series of waterfalls on the Kunene River bordering Angola, with baobab trees and Himba settlements.',
        image: 'https://journeysnamibia.com/uploads/photos/d8961fe769b2771b92a0d6d7076eec7fb1e60247.jpg',
        location: 'Northern Namibia',
        link: 'https://epupafallslodge.com/'
      },
      {
        name: 'Walvis Bay',
        description: 'Coastal city with lagoon, flamingos, and marine wildlife including dolphins and whales.',
        image: 'https://www.info-namibia.com/images/attractions/activities/sandwich-harbour/Sandwich-Harbour-Tour.jpg',
        location: 'Western Namibia',
        link: 'http://www.walvisbaytourism.com/'
      }
    ],
    transportation: [
      {
        type: 'Safari 4x4 Vehicle',
        description: 'Specialized desert-equipped 4WD vehicles with experienced guides for exploring remote areas.',
        price: '$200-500/day',
        route: 'Namib Desert & Etosha'
      },
      {
        type: 'Scenic Flights',
        description: 'Light aircraft flights over the Namib Desert, Skeleton Coast, and other scenic landscapes.',
        price: '$300-800',
        route: 'Sossusvlei & Skeleton Coast'
      },
      {
        type: 'Private Transfers',
        description: 'Luxury vehicle transfers between destinations with professional drivers.',
        price: '$150-400',
        route: 'Windhoek to Swakopmund'
      },
      {
        type: 'Self-Drive 4x4',
        description: 'Premium 4x4 rental vehicles for independent exploration of Namibia\'s landscapes.',
        price: '$100-250/day',
        route: 'Namibia Classic Circuit'
      }
    ],
    hotels: [
      {
        name: 'andBeyond Sossusvlei Desert Lodge',
        description: 'Luxury desert lodge with spectacular stargazing, private plunge pools, and exclusive desert experiences.',
        image: 'https://lh3.googleusercontent.com/p/AF1QipMsGE-Ft77qHgv2chWzzAKGtCZZOzsHSK37zv0h=s680-w680-h510-rw',
        rating: 5,
        price: '$1000-2000',
        location: 'NamibRand Nature Reserve',
        bookingLink: 'https://www.andbeyond.com/our-lodges/africa/namibia/sossusvlei/andbeyond-sossusvlei-desert-lodge/'
      },
      {
        name: 'Little Kulala',
        description: 'Exclusive desert retreat with private plunge pools and rooftop star beds near Sossusvlei.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqlVt2_UOu5GdsGBvWKwuAAhk3LegvJHyW3IRnhaYM6Vs7guPqv9OBmNSTtdJtEYwmc8FnB1KHX3KIIRTx-w9Et7j5pus-tm2cAfhireNOzVml59mB_MoCnYGsp6OoAO894Gd0=s680-w680-h510-rw',
        rating: 5,
        price: '$800-1600',
        location: 'Sossusvlei',
        bookingLink: 'https://www.wilderness-safaris.com/our-camps/camps/little-kulala'
      },
      {
        name: 'Hoanib Skeleton Coast Camp',
        description: 'Remote luxury camp offering exclusive access to the mysterious Skeleton Coast.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqJmfnwHBns0ulVlEz0kLb2hjkDhA3TmUAFJXViHGP4O5F19PFQ8-bRTqjAmBD9AKN7igCIipgjjiu5Y9vPW-dzrJkdptZFitxVC8MZl7cQIfe94u16wgnEdBtCiguIqNNo84UC=s680-w680-h510-rw',
        rating: 5,
        price: '$1200-2400',
        location: 'Skeleton Coast',
        bookingLink: 'https://www.wilderness-safaris.com/our-camps/camps/hoanib-skeleton-coast-camp'
      },
      {
        name: 'Onguma The Fort',
        description: 'Moroccan-inspired luxury lodge overlooking Etosha National Park with exceptional wildlife viewing.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrpruYdWhtvtVdSHF8WNpTxIEgXLVT09cEr9iWTP7oeMTmOM10GbhpkVsvolD4YUXI5SdVmq-Kz5FFEKrhzju1vVDc9qMu9xRBNTDms5uVQop2iS4dNyrw5e1811mdRvolhdpD73Q=s680-w680-h510-rw',
        rating: 5,
        price: '$600-1200',
        location: 'Etosha National Park',
        bookingLink: 'https://www.onguma.com/onguma-the-fort'
      },
      {
        name: 'Okonjima Bush Camp',
        description: 'Luxury safari camp at the AfriCat Foundation with big cat conservation and tracking experiences.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqapZhOD5s8MaUt7TbdSJrlSmqDyLnzyv4N2i0w97WK1YjW-CGXA-WhYg1uHz3MXlGGXOoDlDwyyzO0lnl18c6m7PLpsUMkKnhlLdrQ34rlVWCE1C2b9uXC8HnOm7XlhqHcekWGN7wpALKb=s680-w680-h510-rw',
        rating: 5,
        price: '$500-1000',
        location: 'Central Namibia',
        bookingLink: 'https://okonjima.com/'
      },
      {
        name: 'Serra Cafema Camp',
        description: 'Remote luxury camp on the Kunene River bordering Angola, offering Himba cultural experiences.',
        image: 'https://lh3.googleusercontent.com/p/AF1QipPwhFok2jhmud_Bpfebp9WtE23q3zL7WdE1kk-K=s680-w680-h510-rw',
        rating: 5,
        price: '$1000-2000',
        location: 'Kaokoland',
        bookingLink: 'https://www.wilderness-safaris.com/our-camps/camps/serra-cafema-camp'
      },
      {
        name: 'Mowani Mountain Camp',
        description: 'Luxury tented camp set among giant granite boulders with stunning desert views.',
        image: 'https://lh3.googleusercontent.com/p/AF1QipM8f43bUaTeFdkG7e2lrJxnKLh5TD9mJOdRKYyi=s680-w680-h510-rw',
        rating: 4,
        price: '$400-800',
        location: 'Damaraland',
        bookingLink: 'https://www.chiwani.com/mowani'
      },
      {
        name: 'The Strand Hotel',
        description: 'Luxury beachfront hotel in Swakopmund with ocean views and German colonial architecture.',
        image: 'https://lh3.googleusercontent.com/p/AF1QipOW5Zt9oziDXtCZY7lgXt-yBhN9sns0DgYd0Z4z=s680-w680-h510-rw',
        rating: 4,
        price: '$200-400',
        location: 'Swakopmund',
        bookingLink: 'https://www.strandhotelswakopmund.com/'
      },
      {
        name: 'Fish River Lodge',
        description: 'Only lodge located directly on the edge of Fish River Canyon with spectacular views.',
        image: 'https://images.trvl-media.com/lodging/8000000/7510000/7509800/7509715/468d2e4a.jpg?impolicy=resizecrop&rw=1200&ra=fit',
        rating: 4,
        price: '$300-600',
        location: 'Fish River Canyon',
        bookingLink: 'https://expedia.com/affiliate/fsqc7KF'
      },
      {
        name: 'Mushara Lodge',
        description: 'Elegant safari lodge near Etosha National Park with luxury accommodations and wildlife viewing.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrmrp3RiobfMxie3q8lEQz044vXL5QRqVO2Whxv2vnFGYsnMqArwzla8sOZ6NV_8FfJn0udifCGkmC3qxV_4DujqJPrkLDWFoJfzvWGE7fElhLxlaoMhq4Ozq-SFR02mt-GwzhcAw=s680-w680-h510-rw',
        rating: 4,
        price: '$300-600',
        location: 'Etosha National Park',
        bookingLink: 'https://www.mushara-lodge.com/'
      },
      {
        name: 'Wolwedans Dunes Lodge',
        description: 'Eco-luxury lodge built on wooden platforms with panoramic desert views in NamibRand Reserve.',
        image: 'https://lh3.googleusercontent.com/proxy/-JW8CQ2LUA9xtIPPUGLAIO2pSXj6P3M8LLQAffIDMNupu-b-ycJ7JMRpwRAY75AQNfGYslrZTn0R5i2y9OBiEEwqQ_DKu4aAMhg1KCcdYVBDT2-jtejWwgz79YJzj7dbPCOzYD799m2ZHRsbZljFJjYgwSDuMGc=s680-w680-h510-rw',
        rating: 5,
        price: '$600-1200',
        location: 'NamibRand Nature Reserve',
        bookingLink: 'https://www.wolwedans.com/'
      },
      {
        name: 'Damaraland Camp',
        description: 'Award-winning eco-camp with desert-adapted wildlife viewing and dramatic landscapes.',
        image: 'https://www.info-namibia.com/images/accommodation/damaraland/Camp_Kipwe.jpg',
        rating: 4,
        price: '$500-1000',
        location: 'Damaraland',
        bookingLink: 'https://www.wilderness-safaris.com/our-camps/camps/damaraland-camp'
      },
      {
        name: 'Desert Homestead Lodge',
        description: 'Charming lodge with horse riding safaris and access to Sossusvlei dunes.',
        image: 'https://images.trvl-media.com/lodging/90000000/89040000/89031500/89031498/0162f11c.jpg?impolicy=resizecrop&rw=1200&ra=fit',
        rating: 4,
        price: '$200-400',
        location: 'Sossusvlei',
        bookingLink: 'https://expedia.com/affiliate/XKpztfG'
      },
      {
        name: 'Hilton Windhoek',
        description: 'Luxury city hotel with rooftop pool, multiple restaurants, and central location.',
        image: 'https://images.trvl-media.com/lodging/5000000/4040000/4034800/4034758/13e97b54.jpg?impolicy=resizecrop&rw=1200&ra=fit',
        rating: 5,
        price: '$370-500',
        location: 'Windhoek',
        bookingLink: 'https://expedia.com/affiliate/n7k0OrM'
      },
      {
        name: 'Shipwreck Lodge',
        description: 'Unique lodge designed to resemble shipwrecks on the Skeleton Coast with exclusive experiences.',
        image: 'https://images.trvl-media.com/lodging/23000000/22240000/22237000/22236901/2007faa1.jpg?impolicy=resizecrop&rw=1200&ra=fit',
        rating: 5,
        price: '$800-1600',
        location: 'Skeleton Coast',
        bookingLink: 'https://expedia.com/affiliate/RitmNXz'
      },
      {
        name: 'Okahirongo Elephant Lodge',
        description: 'Remote luxury lodge in Kaokoland with desert-adapted elephants and Himba cultural experiences.',
        image: 'https://lh3.googleusercontent.com/p/AF1QipPi7I7L5Qb1E9uUlp8QxmFnUHiH-jyhRFkIZydh=s680-w680-h510-rw',
        rating: 5,
        price: '$700-1400',
        location: 'Kaokoland',
        bookingLink: 'https://www.abercrombiekent.com/stays/safari-lodges/okahirongo-elephant-lodge'
      },
      {
        name: 'Nambwa Tented Lodge',
        description: 'Luxury tented lodge built on stilts in the lush Caprivi region with river views.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrpP9_i8CPpcTVFb47LTr4AcYK68HGan1FsDfp92Gx1s7oRYhTx7ORjcvLLq_gcJiqweeAcByfbKFBb6-qLj8gCtancheG8gMPtmFUIsKdSvCOtYMq3bq-W5_bIXz6zz3z0B0mv=s680-w680-h510-rw',
        rating: 4,
        price: '$400-800',
        location: 'Caprivi Strip',
        bookingLink: 'https://www.nambwalodge.com/'
      },
      {
        name: 'Spitzkoppen Lodge',
        description: 'Luxury lodge nestled among the dramatic granite formations of Spitzkoppe.',
        image: 'https://images.trvl-media.com/lodging/34000000/33410000/33410000/33409946/4130c1fe.jpg?impolicy=resizecrop&rw=1200&ra=fit',
        rating: 4,
        price: '$300-600',
        location: 'Spitzkoppe',
        bookingLink: 'https://expedia.com/affiliate/2tWfCBp'
      },
      {
        name: 'Doro Nawas Camp',
        description: 'Desert lodge with rooftop star beds and desert-adapted elephant tracking.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrV1K-TOHe8D3rCwfhuYp5uD33nxbG_MQwqiEXEwl-J0Uyf_g9N2uBypLMy--1IClItWM3aJypWDnYDTRVVcWHENCU_ewR42r5uqza8zIwLheZiWrZv1KlA8PnLfi2wWX_wdybw6mjUPZE=s680-w680-h510-rw',
        rating: 4,
        price: '$500-1000',
        location: 'Damaraland',
        bookingLink: 'https://www.wilderness-safaris.com/our-camps/camps/doro-nawas-camp'
      },
      {
        name: 'Olive Exclusive All-Suite Hotel',
        description: 'Boutique luxury hotel in Windhoek with individually designed suites and gourmet dining.',
        image: 'https://images.trvl-media.com/lodging/12000000/11470000/11470000/11469977/f1b0be29.jpg?impolicy=resizecrop&rw=1200&ra=fit',
        rating: 5,
        price: '$500-700',
        location: 'Windhoek',
        bookingLink: 'https://expedia.com/affiliate/5EOmexy'
      }
    ],
    restaurants: [
      {
        name: 'The Stellenbosch Wine Bar & Bistro',
        cuisine: 'Fine dining restaurant with South African wines and international cuisine with local influences.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4npwvm-6hJtab7uKMk6nhsWmkoYP9TCgfAH_DeSkvcuxrURuwLL1EMeaRyE5tmGLTaLQl5tRu1kVgCdqjUvEKZJucwjyYPlQ4WgrQJe_AkS1xv8rGRXU0JYjTMalqHKlkgWfchG0=s680-w680-h510-rw',
        rating: 4,
        priceRange: '$20-45',
        location: 'Windhoek',
        link: 'https://www.thestellenboschwinebar.com/'
      },
      {
        name: 'Joe\'s Beerhouse',
        cuisine: 'Iconic restaurant serving game meats and German-influenced cuisine in a quirky setting.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4npFzWKoe9SkEVd-yyoAdUVe5U0bVUPt87ZYrSJi5rP6_mbUnhf3Tqu0CLQ27HfZSQRbEnm9rtdr4NtlTCHjSzOTGCQF9NhXgj7PX_SFKhp1VIA-TGLESqE_gMDw0eo4Gr4gtemZ=s680-w680-h510-rw',
        rating: 4,
        priceRange: '$15-35',
        location: 'Windhoek',
        link: 'https://www.joesbeerhouse.com/'
      },
      {
        name: 'The Tug Restaurant',
        cuisine: 'Seafood restaurant built around an actual tugboat with ocean views and fresh catches.',
        image: 'https://lh3.googleusercontent.com/p/AF1QipPWiEhs7xCAW8JD9SPwuOsZM9MdNRH5sGb9Msg_=s680-w680-h510-rw',
        rating: 4,
        priceRange: '$20-40',
        location: 'Swakopmund',
        link: 'https://www.the-tug.com/'
      },
      {
        name: 'Jetty 1905',
        description: 'Historic restaurant on Swakopmund\'s jetty with panoramic ocean views and fresh seafood.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrxtuxucwfPJISwLTnYZNIBdfSR2WNA-Jo7z2tPGZUAsk3PM4CW1mpulXbpJbMbnth2iJK4EkEwdW8jDP5JQ1nJIbOtROMomcCh2wzBdrjzgsC4-_FAn4Y_55MuXgXflgEJSRIFSA=s680-w680-h510-rw',
        rating: 4,
        priceRange: '$25-50',
        location: 'Swakopmund',
        link: 'https://lhg.na/jetty-1905/'
      },
      {
        name: 'O Portuga',
        cuisine: 'Portuguese restaurant specializing in seafood and traditional Portuguese dishes.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4no-Mn5Pw8RQLSuSwWfskusIGR3ZdfGrrva6FGne12ocmXV_G3UXi09HzxkZ73vGpJaM2j1INi-69Z9c1Qz1orw5sjyAobqyhu8P5gTR10r9OSzwlEQ6SkEFBZFfycupku8C5E6O=s680-w680-h510-rw',
        rating: 4,
        priceRange: '$15-35',
        location: 'Windhoek',
        link: 'https://share.google/1sFPjHMhU5pgJdJBN'
      },
      {
        name: 'Farmhouse Deli',
        cuisine: 'Artisanal deli and café with fresh baked goods, sandwiches, and organic ingredients.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4no5dXodx7zCUyhV9DcFWf1ORl48_tIwAD34pYeSI-6eCy1wPTCNcdBeydHkLqSJrNHOsZSGwc-W71ojiYkUvsQ2On5XHmCXmOevSNUn3cRY0fV-GZBGe4WWIMdGhzBqc3Dm3xM=s680-w680-h510-rw',
        rating: 4,
        priceRange: '$10-25',
        location: 'Swakopmund',
        link: 'https://www.ol-leisure.com/destinations/coastal/strand-hotel-swakopmund-restaurants'
      },
      {
        name: 'Leo\'s at the Castle',
        cuisine: 'Fine dining restaurant at Hotel Heinitzburg with panoramic views of Windhoek.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4np0na2msTFgXNBP-6jJvyBBzWkCckncBD1BTm-HK8z6yHPI75ZlR27DhnoXQL-snXdPljNv9O0U9SFZv9wygv-jTkwwmmZoG2e7Pk57Rf2YxGJjfWHDDk3UYs1jcp4SnRhcPTCo=s680-w680-h510-rw',
        rating: 5,
        priceRange: '$30-60',
        location: 'Windhoek',
        link: 'https://heinitzburg.com/en/restaurants/leos-at-the-castle'
      },
      {
        name: 'Sossusvlei Lodge Restaurant',
        cuisine: 'Desert lodge restaurant with buffet dining and views of the Namib Desert.',
        image: 'https://www.sossusvleilodge.com/images/facilities/slider/SVL_Restaurant1.jpg',
        rating: 4,
        priceRange: '$25-50',
        location: 'Sossusvlei',
        link: 'https://www.sossusvleilodge.com/restaurant.html'
      },
      {
        name: 'Butcher Block',
        cuisine: '⁦Butcher Block⁩⁦ serves very good steaks, albeit the ubiquituous cuts, at slightly above average prices. Steaks are cooked to perfection, sauces are average.⁩',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4npvozZb0u58GxJRU_tNXsIiosuOGLsEE0PLCsQv8CP3ZtxANLcvFYpvoPY_PKbPCCznP3M_bp-9szJH2XvyD6fhNuOyqLNFsrsEi3mU0M0RoHVO0pMv-GSsKN6Bd6rJ8jHTF2ZX79D64I89=s680-w680-h510-rw',
        rating: 4,
        priceRange: '$15-35',
        location: 'Windhoek',
        link: 'https://butcherblocksteakhouse.com/'
      },
      {
        name: 'Fresh ’n Wild at Utopia',
        cuisine: 'The restaurant is situated in a beautiful garden surrounded by old trees a dam and water features.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4npyQYkL2O9dcXzwGhQy1NgXYCAw9wKRZwxzpefHDxyMJcKH5cM-Tf4scbZyC5vMAwHUTLvhxOaeMLHiwBsqNO2_wtt7e1NbJ99F9_9gP2uzMsbB51AOvpnrYoP8CERG9F69140=s680-w680-h510-rw',
        rating: 4,
        priceRange: '$20-40',
        location: 'Windhoek',
        link: 'https://freshnwild.net/'
      },
      {
        name: 'Garnish Restaurant',
        cuisine: 'Contemporary restaurant with international menu and elegant atmosphere.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4no0GzHddKKi4Hg1qLKOb2Z-__GoE39ulA7Z7TnBvBdKi5DkrUpqKe0pxriF_7j_CZzv7OqSQWFpfO4-Jdck6N-Y8OVgAmivW3LUc5xYv8ZaUA4K2EvDj-O4_LnTBZa_Oj2Xz0E=s680-w680-h510-rw',
        rating: 4,
        priceRange: '$20-45',
        location: 'Windhoek',
        link: 'https://share.google/HOT6yEBGYu71UgTED'
      },
      {
        name: 'Kücki\'s Pub',
        cuisine: 'German pub with traditional German dishes, beer, and lively atmosphere.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqOikaZHWJA__tTAl7WkonZciCdE5OWzlEKY9Je69toLLUvOcWLJ8FgRGpMY9RBD4x2-DZOYdNYC_rk0n1uv27FdeEwItS7wm_bJV5cqu3UnEFvXtsrmqD9Fj5biqatftYi3BLE=s680-w680-h510-rw',
        rating: 4,
        priceRange: '$15-30',
        location: 'Swakopmund',
        link: 'https://kuckispub.com/'
      },
      {
        name: 'Xwama Cultural Village & Restaurant',
        cuisine: 'Traditional Namibian cuisine with cultural performances and authentic atmosphere.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4npkVic81jBVZiWdovGdWTZs_n5kJigyDFN3PG56c0bh8k7ECHqkPwCvF0NzbLlb2dM9-LhDr_sNJDHf3zg0xTUz3dQRIkiPknQRxtOF4wWLyUxdgyXLYEZ_42qQ3SDzjfimjHm8=s680-w680-h510-rw',
        rating: 4,
        priceRange: '$10-25',
        location: 'Windhoek',
        link: 'https://www.xwama.com/'
      },
      {
        name: 'Swakopmund Brauhaus',
        cuisine: 'German brewery and restaurant with traditional German dishes and craft beer.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrCDDwvHgAByOcBSnUyoWGFcXaD7EoPlRik-RpinSTwvEgGY5Zyio8SjwGEpLvcs6PnBVEJKbCKNqLXACTIUAZx_oDutn2bointJJS9y3sV2T-tUVxUnGewKauLwJloKbRUcACN=s680-w680-h510-rw',
        rating: 4,
        priceRange: '$15-35',
        location: 'Swakopmund',
        link: 'https://share.google/D6sjuPEW12BzFrv2W'
      },
      {
        name: 'Ocean Cellar',
        cuisine: 'Canyon-edge restaurant with panoramic views and desert-inspired cuisine.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrod7-GstSMTD6A6_p7PKm3CSGkxNG7OwURptl5Auj4CVqh_8Dpuy5QbNEVapIFV2lGOa52W7WgneztB9JqIEAvONI0D2L1iYJHFLLg8fvdxuAaxZNJiuK7-ihgJbnkfGegIjD2=s680-w680-h510-rw',
        rating: 4,
        priceRange: '$15-50',
        location: 'Swakopmund',
        link: 'https://www.ol-leisure.com/destinations/coastal/strand-hotel-swakopmund-restaurants'
      },
      {
        name: 'Francesco Restaurant',
        cuisine: '⁦Italian & Mediterranean ⁩⁦restaurant⁩⁦ nestled in the heart of ⁩⁦Windhoek⁩⁦. Welcome to the ⁩⁦Francesco⁩⁦ Family. Download our Menu! Contact us!⁩.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqxM6Hd5Txnv0Q43dxJJACI-vcnbt_PYWM12vFcAKddCKpCunuTFUJqIu-RV3f4XyDhlaH6ixim2M-CG9rNPGUG1xDUaI-iAzYQsBDcBkk0TPbLgNU7joC42qaZpljTzZfyaWVP=s680-w680-h510-rw',
        rating: 4,
        priceRange: '$20-45',
        location: 'Windhoek',
        link: 'https://share.google/xBnqYtIeTx16vavGx'
      },
      {
        name: 'Stratos At Avani',
        cuisine: 'We have sips, bites and satisfying meals for you day and night. Enjoy international comfort food. Try Namibian delights.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nodCSoo1Ko3aBU7yoZL2Ee2kYjmqPD7ud9SWFp57L86rzvp6CjxMthzAGX2dSOZIo1w9N3S1kdfoisu_xtMIMwtKMG38DQ6_EXIvMwJDkXLH1COedpBBp3PVg5dPCZAw59Kjdyf=s680-w680-h510-rw',
        rating: 5,
        priceRange: '$10-25',
        location: 'Windhoek',
        link: 'https://share.google/w5ZrWbt22kS1jAFZX'
      },
      {
        name: 'Livega House',
        cuisine: 'Our food is prepared in contemporary style cooking adding up to a fusion of Asian and French cuisine with emphasis on freshness and seasonable flavours. Our menu is ever evolving and new dishes are developed on a regular basis.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4npjnBD1-aFzOj81wC2d9Cc7Ugf46fZuW6L5_jEzWR46YO0MM5KhE1gLcMh-exx43swdegTwwXSwI3pdAy0u8wmCdM_iZFlZuLqMjQaD-xDfpkAntH8rtX4bgv-bCVPQfCOz6VkG=s680-w680-h510-rw',
        rating: 4,
        priceRange: '$20-40',
        location: 'Namib Desert',
        link: 'https://livega.co/restaurant'
      },
      {
        name: 'The Stellenbosch Tasting Room',
        cuisine: 'Each taste tells a story of passion, craftsmanship, and the boundless beauty of a good meal.',
        image: 'https://lh3.googleusercontent.com/p/AF1QipMSulYgpxcXoikxMKO6q0YYu5FDLboV6PcAN0D6=s680-w680-h510-rw',
        rating: 5,
        priceRange: '$50-100',
        location: 'Windhoek',
        link: 'https://tastingroom.com.na/'
      },
      {
        name: 'Isabel\'s Table',
        cuisine: 'Great staff,the food is excellent and prepared meticulously by the head chef. Real Portuguese cuisine and on top of that you feel right at home when you walk in.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4noMy2Ru9WXPZKaD4iB8jR9zl4KhBfHzk3lRfezGAWEkpW9qWbX1IEYo_I3fJyv3DyKrkAqcTzbWC9z248FoHW5x0Am6YGRfpQ52lr8oKHc4IFZxHo9hH0DkgQqRIbJ7zcuircxblA=s680-w680-h510-rw',
        rating: 4,
        priceRange: '$30-60',
        location: 'Damaraland',
        link: 'https://share.google/c4okk6Lpk829HRJEY'
      }
    ]
  },
  {
    name: 'Zambia',
    description: 'Home to Victoria Falls, pristine national parks, and the mighty Zambezi River, offering authentic safari experiences and adventure activities.',
    image: 'https://i.ytimg.com/vi/nv4DdTxhZ68/maxresdefault.jpg',
    region: 'Southern Africa',
    population: '21.31 million',
    attractions: [
      {
        name: 'Victoria Falls',
        description: 'One of the Seven Natural Wonders of the World, this spectacular waterfall on the Zambezi River creates the world\'s largest curtain of falling water.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrvedg_9k7lNIgYheMTZZE_MEhRIDiV2z672tezC1-lprAUoGMBZvaut5FBHXR8rwhazldFn5PVDEaTu2e9hznJVYcZxMDviCAkgwTb9qf-mhgAvxr2lE-n9DeRqBkMI7YEU1xcxP5fZSM=s680-w680-h510-rw',
        location: 'Livingstone',
        link: 'https://www.zambiatourism.com/destinations/waterfalls/victoria-falls/'
      },
      {
        name: 'South Luangwa National Park',
        description: 'Premier wildlife sanctuary known for walking safaris, leopard sightings, and diverse ecosystems along the Luangwa River.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nq3DQAQVodhm4eQtdqxZ-aUWcCQyc3r7qC4WfdtLho1IrxcB1SqAUMxLhdNOa31k3onKzXg7oDN8h4CAS4dxYkrxJom76O4IoqmCYcMDuiMPnuD2HBnfOtiIjLDuV_R0mEGKDKf=s680-w680-h510-rw',
        location: 'Eastern Zambia',
        link: 'https://www.zambiatourism.com/destinations/national-parks/south-luangwa-national-park/'
      },
      {
        name: 'Lower Zambezi National Park',
        description: 'Pristine wilderness along the Zambezi River offering canoeing safaris, fishing, and wildlife viewing.',
        image: 'https://www.zambiatourism.com/media/LowerZam_NP_Header-1200x480.jpg',
        location: 'Southern Zambia',
        link: 'https://www.zambiatourism.com/destinations/national-parks/lower-zambezi-national-park/'
      },
      {
        name: 'Kafue National Park',
        description: 'Zambia\'s largest national park with diverse landscapes from floodplains to woodlands and exceptional wildlife.',
        image: 'https://www.zambiatourism.com/media/Kafue_NP_Header-1200x480.jpg',
        location: 'Western Zambia',
        link: 'https://www.zambiatourism.com/destinations/national-parks/kafue-national-park/'
      },
      {
        name: 'Livingstone Island & Devil\'s Pool',
        description: 'Unique opportunity to swim at the edge of Victoria Falls in the natural infinity pool during low water season.',
        image: 'https://www.zambiatourism.com/media/slidersafaris.jpg',
        location: 'Livingstone',
        link: 'https://www.zambiatourism.com/destinations/waterfalls/victoria-falls/livingstone-island/'
      },
      {
        name: 'Liuwa Plain National Park',
        description: 'Remote park hosting Africa\'s second-largest wildebeest migration and exceptional birdlife.',
        image: 'https://www.zambiatourism.com/media/sliderholidays.jpg',
        location: 'Western Zambia',
        link: 'https://www.zambiatourism.com/destinations/national-parks/liuwa-plain-national-park/'
      },
      {
        name: 'Bangweulu Wetlands',
        description: 'Vast wetland ecosystem home to the endemic black lechwe antelope and shoebill storks.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nr5-gD1SuUCY3oI5otZlAOH-v25Q1VJow8c2BAIrfruqCyhwUo4dSlw5jE5GVOJOMb3LD3qJGwcbpnhI0UBCpF2vG7McQQYDJjvYPm8t9DpoTqPsvJtyhiHIIXqJFrKOIXcL2OFww=s680-w680-h510-rw',
        location: 'Northern Zambia',
        link: 'https://www.africanparks.org/the-parks/bangweulu'
      },
      {
        name: 'Kasanka National Park',
        description: 'Small park famous for hosting the world\'s largest fruit bat migration with millions of bats.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrw61tCuJeNwNl2gwB0940bpLXMBkPWNnQn4sLZ94CUCfGtpcyg5W0KZgw28rWngoviaeDK75wb0T50i0s1CXOvw07egFY8BVUlxQvZtCveF_PHJKQkfrfr_kB9R-PR01nwNobK=s680-w680-h510-rw  ',
        location: 'Central Zambia',
        link: 'https://kasanka.com/'
      },
      {
        name: 'Zambezi River',
        description: 'Africa\'s fourth-largest river offering white water rafting, canoeing safaris, and tiger fishing.',
        image: 'https://cdn.britannica.com/91/5391-050-78522514/Victoria-Falls-bridge-Zambezi-River-Zimbabwe-Zambia.jpg',
        location: 'Southern Zambia',
        link: 'https://www.zambiatourism.com/destinations/rivers/zambezi-river/'
      },
      {
        name: 'Lusaka National Museum',
        description: 'Cultural museum showcasing Zambia\'s history, art, and cultural heritage in the capital city.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrG0E1YBHntAO8D7gbLIXeNv2X7PwvuqHM-R6GqvabmuSk8F9GvPpddZW1VVSATtTDcw_ppjJruNSx2nmgXs5gvqXYiT5eSxY7en27koQnoTIxkCFLc1BdRvu3xS-asYQpL_HwEr9gumH9p=s680-w680-h510-rw',
        location: 'Lusaka',
        link: 'https://share.google/I8r9wvYUyQ5Yqz6rF'
      },
      {
        name: 'Shiwa Ng\'andu',
        description: 'Historic English manor house built in the 1920s with colonial architecture and beautiful gardens.',
        image: 'https://www.robinpopesafaris.net/wp-content/uploads/camporlodge-shiwa-ngandu-manor-4.jpeg',
        location: 'Northern Zambia',
        link: 'https://www.shiwangandu.com/'
      },
      {
        name: 'Chimfunshi Wildlife Orphanage',
        description: 'Chimpanzee sanctuary providing refuge for rescued chimps and conservation education.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbOrOGeLZ7pGeDtqn8ER-5-xqflvC-5ydKBLZh2pLg1vAn5gMPRW5aIvTTG-dcSYpMsog&usqp=CAU',
        location: 'Copperbelt Province',
        link: 'https://www.chimfunshiwildlife.org/'
      },
      {
        name: 'Kundalila Falls',
        description: 'Scenic waterfall dropping 70 meters into a natural pool with hiking trails and picnic areas.',
        image: 'https://we-travel.at/wp-content/uploads/CORJ3618_970w.jpg',
        location: 'Central Zambia',
        link: 'https://www.zambiatourism.com/destinations/waterfalls/kundalila-falls/'
      },
      {
        name: 'Lochinvar National Park',
        description: 'Wetland park on the Kafue Flats with endemic Kafue lechwe and exceptional birdlife.',
        image: 'https://storiesbeyondthevictoriafalls.wordpress.com/wp-content/uploads/2012/01/entrance1.jpg?w=584',
        location: 'Southern Zambia',
        link: 'https://www.zambiatourism.com/destinations/national-parks/lochinvar-national-park/'
      },
      {
        name: 'Kalambo Falls',
        description: 'One of Africa\'s highest uninterrupted waterfalls with archaeological sites dating back 250,000 years.',
        image: 'https://www.tanzaniatourism.com/images/uploads/Kalambo_Falls_Waterfalls_40.jpg',
        location: 'Northern Zambia',
        link: 'https://www.zambiatourism.com/destinations/waterfalls/kalambo-falls/'
      },
      {
        name: 'Nsumbu National Park',
        description: 'Remote park on the shores of Lake Tanganyika with pristine beaches and wildlife.',
        image: 'https://cheetahsafaris.com/wp-content/uploads/2025/02/Chika-Falls-in-Nsumbu-National-Park_Mana-Meadows.jpg',
        location: 'Northern Zambia',
        link: 'https://www.zambiatourism.com/destinations/national-parks/nsumbu-national-park/'
      },
      {
        name: 'Livingstone Museum',
        description: 'Oldest and largest museum in Zambia with exhibits on David Livingstone and Zambian culture.',
        image: 'https://lh3.googleusercontent.com/p/AF1QipMZnaG1QTSCzJh5bblPY0D7oW-pGjJsnjKDWuOx=s680-w680-h510-rw',
        location: 'Livingstone',
        link: 'https://livingstonemuseum.org/'
      },
      {
        name: 'Chaminuka Nature Reserve',
        description: 'Private reserve near Lusaka with wildlife, art collection, and cultural experiences.',
        image: 'https://www.chaminuka.com/wp-content/uploads/2019/08/drone-chaminuka.jpg',
        location: 'Lusaka',
        link: 'https://www.chaminuka.com/'
      },
      {
        name: 'Blue Lagoon National Park',
        description: 'Wetland park with seasonal floodplains, lechwe antelope, and abundant birdlife.',
        image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/74/c7/b4/the-pool-at-10-00.jpg?w=900&h=500&s=1',
        location: 'Central Zambia',
        link: 'https://www.zambiatourism.com/destinations/national-parks/blue-lagoon-national-park/'
      },
      {
        name: 'Mutinondo Wilderness',
        description: 'Private nature reserve with granite whale-back mountains, rivers, and diverse flora.',
        image: 'https://b-cdn.springnest.com/media/img/l5/g1841279.jpg?aspect_ratio=672%3A415&width=672',
        location: 'Northern Zambia',
        link: 'https://www.mutinondozambia.com/'
      }
    ],
    transportation: [
      {
        type: 'Safari Vehicle',
        description: 'Open-sided 4x4 vehicles with experienced guides for game drives in national parks.',
        price: '$150-350/day',
        route: 'South Luangwa & Lower Zambezi'
      },
      {
        type: 'Canoe Safari',
        description: 'Multi-day guided canoe trips along the Zambezi River with camping.',
        price: '$200-400/day',
        route: 'Lower Zambezi'
      },
      {
        type: 'Charter Flights',
        description: 'Light aircraft flights between remote safari destinations and major cities.',
        price: '$300-800',
        route: 'Lusaka to South Luangwa'
      },
      {
        type: 'Private Transfers',
        description: 'Luxury vehicle transfers with professional drivers between major destinations.',
        price: '$100-300',
        route: 'Livingstone to Victoria Falls'
      }
    ],
    hotels: [
      {
        name: 'Royal Livingstone Hotel',
        description: 'Luxury colonial-style hotel on the banks of the Zambezi River with direct access to Victoria Falls.',
        image: 'https://images.trvl-media.com/lodging/1000000/800000/795900/795828/9ca5d7d4.jpg?impolicy=resizecrop&rw=1200&ra=fit',
        rating: 5,
        price: '$860-1000',
        location: 'Livingstone',
        bookingLink: 'https://expedia.com/affiliate/R6GNgdr'
      },
      {
        name: 'Chinzombo',
        description: 'Ultra-luxury safari camp in South Luangwa with private plunge pools and river views.',
        image: 'https://www.untamedtravelling.com/wp-content/uploads/2020/09/2835_original-20200909-081750.jpg',
        rating: 5,
        price: '$1000-2000',
        location: 'South Luangwa National Park',
        bookingLink: 'https://timeandtideafrica.com/camps/chinzombo/'
      },
      {
        name: 'Tongabezi Lodge',
        description: 'Romantic luxury lodge on the Zambezi River with private houses and cottages upstream from Victoria Falls.',
        image: 'https://images.trvl-media.com/lodging/12000000/11040000/11037200/11037118/53130e3d.jpg?impolicy=resizecrop&rw=1200&ra=fit',
        rating: 5,
        price: '$700-1400',
        location: 'Livingstone',
        bookingLink: 'https://expedia.com/affiliate/557WxG9'
      },
      {
        name: 'Sausage Tree Camp',
        description: 'Exclusive luxury tented camp in the Lower Zambezi National Park with river activities.',
        image: 'https://images.trvl-media.com/lodging/67000000/66030000/66020600/66020543/619b3d43.jpg?impolicy=resizecrop&rw=1200&ra=fit',
        rating: 5,
        price: '3100-5000',
        location: 'Lower Zambezi National Park',
        bookingLink: 'https://expedia.com/affiliate/Ti2E7wf'
      },
      {
        name: 'King Lewanika Lodge',
        description: 'Luxury safari camp in the remote Liuwa Plain National Park with exclusive wildlife viewing.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nq1iL-hJ7Rgdm_e4mAQsfxnpG6Iukww9uBPOwWJH75qT9XSi4r8JPHQyXRDLHdW0gQXZncYnH4n88B7Swemd9mo5kmJkrk4_JmtG7d_dlDaPWpmKFT40mAp_MpnAjyLJKpZiZ4n=s680-w680-h510-rw',
        rating: 5,
        price: '$1000-2000',
        location: 'Liuwa Plain National Park',
        bookingLink: 'https://kerdowneyzambia.com/'
      },
      {
        name: 'Mfuwe Lodge',
        description: 'Award-winning safari lodge famous for elephants walking through reception to access wild mango trees.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqDzUHkV-borD8hMC0r0OtaM2HkDLHbL3x0ldoYa9wCYZg-GodEuWZlUhpzKHgSe0hr4OvFOAnt6yhAp2u9iur3QUzCHegvH3p8gQ4Igs_sWbDvKhhG_Ah67BpE09kmbZvCFwB1jg=s680-w680-h510-rw',
        rating: 4,
        price: '$500-1000',
        location: 'South Luangwa National Park',
        bookingLink: 'https://www.southluangwa.com/mfuwe-lodge.html'
      },
      {
        name: 'Islands of Siankaba',
        description: 'Luxury lodge built on two private islands in the Zambezi River connected by suspension bridges.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrNfSEHMswAI5SITarGCO8XzdTljaISKP9ECS0B7NZbv3LiGDjkL0_4hi2mcF1N_KWNj_BfRYgFBZVQaGH1zGLUuiiyLzKEBMb3JV4t_nNbcsRTt7TNs6hmVyYPvKTrV8xYr7tG=s680-w680-h510-rw',
        rating: 5,
        price: '$600-1200',
        location: 'Livingstone',
        bookingLink: 'https://www.google.com/search?q=islands+of+siankaba&oq=Islands+of+Siankaba&gs_lcrp=EgZjaHJvbWUqBwgAEAAYgAQyBwgAEAAYgAQyCAgBEAAYFhgeMggIAhAAGBYYHjIICAMQABgWGB4yCAgEEAAYFhgeMggIBRAAGBYYHjIGCAYQRRg8MgYIBxBFGDzSAQgxMjY2ajBqOagCBrACAfEFE_Cd542ducw&sourceid=chrome&ie=UTF-8'
      },
      {
        name: 'Chichele Presidential Lodge',
        description: 'Historic colonial-style lodge built for the former Zambian president with panoramic views.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nquZzpcUtDug7ILF_8-qCus2-Mepr64D5ZUzGc6k6py9TvwVujGKzoowNNlQo3yylDPll8vauRkDN3_tGcWv4aChcnNocwnN75R4oj2PYuN8rLl1vLhaUkNNkC1Qh68dVXvr21G=s680-w680-h510-rw',
        rating: 4,
        price: '$400-800',
        location: 'South Luangwa National Park',
        bookingLink: 'https://www.chiawa.com/'
      },
      {
        name: 'Baines\' River Camp',
        description: 'Colonial-style safari lodge on the banks of the Zambezi River with fishing and canoeing.',
        image: 'https://lh3.googleusercontent.com/p/AF1QipMgR4ShP-CcHaK2UAMpOl9VuE1DqKIa0vCoYF2G=s680-w680-h510-rw',
        rating: 4,
        price: '$500-1000',
        location: 'Lower Zambezi National Park',
        bookingLink: 'https://www.bainesrivercamp.com/'
      },
      {
        name: 'Tafika Camp',
        description: 'Family-owned safari camp with microlighting, walking safaris, and authentic bush experience.',
        image: 'https://lh3.googleusercontent.com/p/AF1QipMxqDbkO9cxvMNrqd_1RMPBvUuV6pLElo4d9Z3e=s680-w680-h510-rw',
        rating: 4,
        price: '$700-1400',
        location: 'South Luangwa National Park',
        bookingLink: 'https://www.remoteafrica.com/tafika-camp/'
      },
      {
        name: 'Latitude 15°',
        description: 'Boutique hotel in Lusaka with contemporary African art, stylish design, and excellent dining.',
        image: 'https://images.trvl-media.com/lodging/9000000/8770000/8762300/8762214/51deb4ab.jpg?impolicy=resizecrop&rw=1200&ra=fit',
        rating: 4,
        price: '$200-400',
        location: 'Lusaka',
        bookingLink: 'https://expedia.com/affiliate/GNh3GMJ'
      },
      {
        name: 'Chundukwa River Lodge',
        description: 'Eco-friendly lodge with riverside chalets and horseback safaris near Victoria Falls.',
        image: 'https://lh3.googleusercontent.com/p/AF1QipPakT7g1kMVeZTozawVXQO8gSMjlDVX5AFKXJYW=s680-w680-h510-rw',
        rating: 4,
        price: '$300-600',
        location: 'Livingstone',
        bookingLink: 'https://www.chundukwariverlodge.com/'
      },
      {
        name: 'Ila Safari Lodge',
        description: 'Eco-luxury lodge in Kafue National Park with solar power and boat safaris.',
        image: 'https://images.trvl-media.com/lodging/99000000/98540000/98535400/98535311/185c687a.jpg?impolicy=resizecrop&rw=1200&ra=fit',
        rating: 5,
        price: '$1400-2000',
        location: 'Kafue National Park',
        bookingLink: 'https://expedia.com/affiliate/ncuVEk2'
      },
      {
        name: 'Waterberry Zambezi Lodge',
        description: 'Intimate riverside lodge with individual cottages and river activities near Victoria Falls.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrggvg7krG0-cEt5LN6XBgCPnign6d8Bku3_TJTzznrEBtxQWWhMM2HQKFyoqdElvr_c79bTelJL1DaZx8g9k_DH_2c_8JmpdWr0qpmDL5XtztJ0Dp1dmTq_KdX2DyIU_2P-V8=s680-w680-h510-rw',
        rating: 4,
        price: '$300-600',
        location: 'Livingstone',
        bookingLink: 'https://www.waterberrylodge.com/'
      },
      {
        name: 'Nsolo Bush Camp',
        description: 'Remote bush camp offering authentic walking safaris and intimate wildlife experiences.',
        image: 'https://www.jacadatravel.com/_next/image/?url=https%3A%2F%2Fcdn.jacadatravel.com%2Fwp-content%2Fuploads%2F2016%2F03%2FNsolo-Bush-Camp-6.jpg&w=3840&q=100',
        rating: 4,
        price: '$600-3000',
        location: 'South Luangwa National Park',
        bookingLink: 'https://www.expertafrica.com/zambia/south-luangwa-national-park/nsolo-bushcamp'
      },
      {
        name: 'Mukambi Safari Lodge',
        description: 'Family-friendly lodge on the banks of the Kafue River with diverse safari activities.',
        image: 'https://images.trvl-media.com/lodging/16000000/15410000/15403000/15402996/cc80a946.jpg?impolicy=resizecrop&rw=1200&ra=fit',
        rating: 4,
        price: '$700-1000',
        location: 'Kafue National Park',
        bookingLink: 'https://expedia.com/affiliate/hfD9QaS'
      },
      {
        name: 'Chobe Water Villas',
        description: 'Luxury water villas on the Chobe River with views of Chobe National Park in Namibia.',
        image: 'https://images.trvl-media.com/lodging/9000000/8850000/8843000/8842927/e4c3c1d0.jpg?impolicy=resizecrop&rw=1200&ra=fit',
        rating: 5,
        price: '$800-1000',
        location: 'Caprivi Strip',
        bookingLink: 'https://expedia.com/affiliate/bW5Mbvi'
      },
      {
        name: 'Thorntree River Lodge',
        description: 'Contemporary luxury lodge on the Zambezi River with private plunge pools and river activities.',
        image: 'https://images.trvl-media.com/lodging/21000000/20260000/20257500/20257481/69d8e9d0.jpg?impolicy=resizecrop&rw=1200&ra=fit',
        rating: 5,
        price: '$700-2000',
        location: 'Livingstone',
        bookingLink: 'https://expedia.com/affiliate/CEH91h6'
      },
      {
        name: 'Lilayi Lodge',
        description: 'Safari lodge on the outskirts of Lusaka with wildlife viewing and elephant nursery.',
        image: 'https://images.trvl-media.com/lodging/9000000/8760000/8751000/8750918/afcf59db.jpg?impolicy=resizecrop&rw=1200&ra=fit',
        rating: 4,
        price: '$300-500',
        location: 'Lusaka',
        bookingLink: 'https://expedia.com/affiliate/jc5oaKw'
      },
      {
        name: 'Nkwali Camp',
        description: 'Riverside safari camp with open-fronted chalets and excellent wildlife viewing.',
        image: 'https://lh3.googleusercontent.com/p/AF1QipPq1fIiX4JK7OwOJT_dz11s3yZYPa1d__GnpCAX=s680-w680-h510-rw',
        rating: 4,
        price: '$500-1000',
        location: 'South Luangwa National Park',
        bookingLink: 'https://www.expertafrica.com/zambia/south-luangwa-national-park/nkwali'
      }
    ],
    restaurants: [
      {
        name: 'The Royal Livingstone Express',
        cuisine: 'Fine dining experience aboard a restored steam train with gourmet cuisine and wine pairings.',
        image: 'https://travelforsenses.com/wp-content/uploads/2019/01/The-Royal-Livingstone-_Express-Dining-Experience.jpg',
        rating: 5,
        priceRange: '$100-400',
        location: 'Livingstone',
        link: 'https://www.anantara.com/en/restaurants?location=ZM&cuisine='
      },
      {
        name: 'Marlin Restaurant',
        cuisine: 'Upscale restaurant serving international cuisine with Zambian influences and fresh ingredients.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nq4fJsdZPJZRYgxfhX0pewTS5Ka5Za27u7VzzyfekDlDeKBznNxhL-_Mq0K2lqxNM-vc7Ix69xEPCu0BfUSXa08kD-tLOrQ9allhe5iXqAlDUs6HX4_KX2f_weWTWBtA2mAthuX=s680-w680-h510-rw',
        rating: 4,
        priceRange: '$10-50',
        location: 'Lusaka',
        link: 'https://share.google/TjjFGOjUO6wGoNruz'
      },
      {
        name: 'Cafe Zambezi',
        cuisine: 'Casual riverside restaurant with African and international dishes in a relaxed setting.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4npne-_cPvj6RHvpbTYzGeAfgnhImW_g4zries456imo_huiD-twx1OgpGJxuuPGOsOfu9X-EfwwKVmI76LeK1c_AEGhJWQVMOXhAT9iPvScDuNhI5KwJX3F9yMHGc_kj43tsjT7gQ=s680-w680-h510-rw',
        rating: 4,
        priceRange: '$10-25',
        location: 'Livingstone',
        link: 'https://share.google/PQmL2S9ai9WgR482k'
      },
      {
        name: 'Munda Wanga Restaurant',
        cuisine: 'Garden restaurant at the environmental park with international menu and family-friendly atmosphere.',
        image: 'https://evendo.com/public/assets/vendor-images/004/16/163392/163392a_hb_ro_001_20250610_120823.jpg',
        rating: 3,
        priceRange: '$10-25',
        location: 'Lusaka',
        link: 'https://www.tripadvisor.com/RestaurantsNear-g7198812-d7034442-Munda_Wanga_Environmental_Park-Chilanga_Lusaka_Province.html'
      },
      {
        name: 'Olga\'s Italian Corner',
        cuisine: 'Authentic Italian restaurant with homemade pasta, pizza, and Mediterranean specialties.',
        image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/740710575.jpg?k=6ba63751ec0c5102f97445f51360b3c8c8e9a379196ee00a775f0b25d115372b&o=&hp=1',
        rating: 4,
        priceRange: '$20-40',
        location: 'Lusaka',
        link: 'https://olgasproject.wordpress.com/homepage/'
      },
      {
        name: 'The Elephant Cafe',
        cuisine: 'Unique dining experience with gourmet cuisine on a deck over the Zambezi River with visiting elephants.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nq7pKg2J7wvwYDN5-x80FBcP4kzTBQQGLgWlZ15XarYXOxYOijF1xUn6AWx43txLpMcB9UCC1nOLi6fJL6v1OWqqQo901A4zdC_uvxvQe0wx3LB-sfyuVcnsfP6E5-CWyC1aRA=s680-w680-h510-rw',
        rating: 5,
        priceRange: '$80-120',
        location: 'Livingstone',
        link: 'https://safpar.com/the-elephant-cafe/'
      },
      {
        name: 'Dil\'s Indian Restaurant',
        cuisine: 'Authentic Indian cuisine with traditional tandoori dishes and curries.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4non3DbShUdyB2KSWgGHICs8kQi4CWI95lzGdQDsuyf_0VjHKfC5-iYgb2Q81JD5lvcSXiUPg4u1Ucte4q4fOYl0r9SGSkJURhtPL99aaVUZaq72FPhQiQI2zPttJG55B1yD-YgA4g=s680-w680-h510-rw',
        rating: 4,
        priceRange: '$15-30',
        location: 'Lusaka',
        link: 'https://share.google/4yvcsnlSaL2BafJnG'
      },
      {
        name: 'Kubu Cafe',
        cuisine: 'Riverside cafe with international menu, coffee, and relaxed atmosphere overlooking the Zambezi.',
        image: 'https://farm2.staticflickr.com/1895/29393447307_f1d1f0fe76_k.jpg',
        rating: 4,
        priceRange: '$10-25',
        location: 'Livingstone',
        link: 'https://www.anantara.com/en/royal-livingstone/restaurants/kubu'
      },
      {
        name: 'Portico Restaurant',
        cuisine: 'Mediterranean and international cuisine with elegant atmosphere and extensive wine list.',
        image: 'https://res.cloudinary.com/dhsjpmqz9/f_auto,q_auto/cjlmgnxjx001301ql8cxshlcf',
        rating: 4,
        priceRange: '$20-40',
        location: 'Lusaka',
        link: 'https://www.tripadvisor.com/Restaurant_Review-g293843-d10876724-Reviews-Il_Portico-Lusaka_Lusaka_Province.html'
      },
      {
        name: 'Copper Pot Restaurant',
        cuisine: 'Copper Pot Restaurant at Neelkanth Sarovar Premiere Hotel, Lusaka, is open all day to serve an extravagant buffet breakfast. The finest selection of renowned cuisines including local delicacies of Zambia adds art to the palette.',
        image: 'https://assets.simplotel.com/simplotel/image/upload/w_5000,h_3333/x_0,y_260,w_5000,h_2813,r_0,c_crop,q_80,fl_progressive/w_1650,f_auto,c_fit/neelkanth-sarovar-premiere-lusaka/Copper_Pot_Restaurant_1_s0oo0p',
        rating: 5,
        priceRange: '$15-40',
        location: 'Lusaka',
        link: 'https://www.neelkanthsarovarpremiere.com/dining/copper-pot-restaurant.html'
      },
      {
        name: 'Bo\'jangles',
        cuisine: 'International restaurant chain with diverse menu, cocktails, and modern atmosphere.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nq44RSxezpXOV0ZyStPWhORnB_MeB_JxgH-L1cc5NnhCzbki4noY4qpiHyPgUZEuHsKiArUoEVbPg60kOZlNAA_26cd0Zvj4H8eOsZBYwDx9FLNPoDjr51Ss7hXKByWiBA4dskR=s680-w680-h510-rw',
        rating: 4,
        priceRange: '$15-35',
        location: 'Lusaka',
        link: 'https://bojangleslsk.com/'
      },
      {
        name: 'Trees Cafe',
        cuisine: ' Trees⁩⁦ is a place to be. The ⁩⁦restaurant⁩⁦ has a wide range of international cuisine. The place has a garden space. The place is family friendly.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrbY08GiISlebKI9uOJdufoI6fPki-TbcIEC3wV_gvyQk9TConv4l1URSuDWVd8IHuX6cvbIg_iWL3iilUfCfXtqcuDLcoqr7YkUr6DXBPaHR1obC3n3CL-VMbyZOdGg7YtzVpz=s680-w680-h510-rw',
        rating: 4,
        priceRange: '$10-40',
        location: 'Lusaka',
        link: 'https://share.google/VsPBSipf5OlD1Pztb'
      },
      {
        name: 'Zambezi Cafe',
        cuisine: 'Piatto serves only the best gourmet Mediterranean cuisine and fine wine to go with your meals.',
        image: 'https://www.piattozambia.com/images/gallery/p1.jpg',
        rating: 4,
        priceRange: '$10-50',
        location: 'Lusaka',
        link: 'https://www.piattozambia.com/'
      },
      {
        name: 'The Aviary Lounge',
        cuisine: '⁦Experience a vibrant blend of taste, music, and atmosphere. Whether you\'re here to chill, dine, or vibe with friends, ⁩⁦the Aviary Lounge⁩⁦ is your perfect escape.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nq4ypL-Tw5CBcufFJ0cOMD4obq5w9dZjvoSkYC9fo7WFpdsEO2rGx5h_oTQJ77osm_bN9s8I0pFs9Z2Y_06uMxASeu2X7RCIRhTEqrGfFYcMj-oT1nAmw_YlSOwzHxc6VsvK_L9=s680-w680-h510-rw',
        rating: 4,
        priceRange: '$15-30',
        location: 'Lusaka',
        link: 'https://oddmenu.com/p/the-aviary-lounge'
      },
      {
        name: 'Prime Joint | EastPark Mall',
        cuisine: 'Welcome to Prime Joint, discover the ultimate dining experience , conveniently located on the edge of East Park Mall. Immerse yourself in the warm ambiance, surrounded by lush plants and rustic decor, and indulge in the rich flavors of Zambia.',
        image: 'https://lh3.googleusercontent.com/p/AF1QipOXWRmFNYHfGMiqW2B5Bpxz7HfWsEz2c20mXfoy=s680-w680-h510-rw',
        rating: 5,
        priceRange: '$10-25',
        location: 'Lusaka',
        link: 'https://primejointzm.com/primejoint/'
      },
      {
        name: 'Onoma Mediterranean Restaurant',
        cuisine: 'Mediterranean cuisine with Greek, Italian, and Middle Eastern influences.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4npoxOohBJVuKnDGQFfymumofeJ0uykeu_3DsN4Y9HUWxoiRWhOirxGfHS6Z-FjiW897MmKJtPvAxzv8K819RUQm4sl-HiJopmEBbVvNOaMD-GmsYrXzO-CYxG-SaxdauZCgEsv2=s680-w680-h510-rw',
        rating: 4,
        priceRange: '$15-35',
        location: 'Lusaka',
        link: 'https://www.onoma.co.zm/'
      },
      {
        name: 'Flavours Pub & Grill',
        cuisine: 'Casual dining with international menu, grilled meats, and sports atmosphere.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4noVwEdZXcUQLJabEB-TVurOc0MK3d7KeEMmjx25KhF1A6w7JhBEmlu6xqQW3HCXlcK1k6ZoV-CZPEwC-PPtjTXDooUhUK2f8BYpFxEEDETi43ftZ-R25ywWLDlP4hS9TpZs4rN2=s680-w680-h510-rw',
        rating: 4,
        priceRange: '$10-50',
        location: 'Lusaka',
        link: 'https://share.google/YUt4vO07yH6TeGGiH'
      },
      {
        name: 'D\'Lila Restaurant',
        cuisine: 'Local restaurant with international cuisine and bush dining experiences.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrg0jRgk8YqtF4RcmKPJ8SG21LKW5dD0abWdiP0PMSrq4973Nztpbj9sQaNS7HW8LnmiqH-YhpIlJw6kswccrL5mGDM2LFNPNmKRt8Cz0W275vhgfjJ3GijXlOi0pm0VcRyblnrhA=s680-w680-h510-rw',
        rating: 4,
        priceRange: '$10-50',
        location: 'Luaska',
        link: 'https://share.google/Zg110TIKOBSQCPg4v'
      },
      {
        name: 'Mozambik Pinnacle Mall',
        cuisine: 'From traditional fare such as prawns through to Mozambik’s famous chicken, the menu offers a wide variety of taste experiences.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4noRGjVrybnAkWsffYB1LSUVtv9DecLE2ZJcdggq3tFZTCdmTk9caVE2D5vjsH8LTLAvNS4ndrCfoBq_AYbIX1d_3WjTinMJvHQe9gxhO4NzP5FBZRJJOas7qrWgJ-JOBLyV1l9fUQ=s680-w680-h510-rw',
        rating: 4,
        priceRange: '$12-30',
        location: 'Lusaka',
        link: 'https://www.mozambik.co.za/zambia/'
      },
      {
        name: 'Grandaddy’s Shoka Nyama',
        cuisine: 'Steakhouse specializing in game meats and traditional Zambian barbecue.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqI6qxbJh-rIsE5G-ix0vIKEvAwWGsifD1Gxk4rmama_WESHAI5Mz0Xp9bxH2M7rMbJYWFb8auJQR9oOpanNejIgtn_gGmxsJuVa6m2828JfVaJmZ-kyAupQVAzfoM82MPYSmxuQw=s680-w680-h510-rw',
        rating: 4,
        priceRange: '$10-40',
        location: 'Lusaka',
        link: 'https://share.google/cQ2KwY589kUMgKLH7'
      }
    ]
  },
  {
    name: 'Zimbabwe',
    description: 'Land of ancient ruins, spectacular wildlife, and the majestic Victoria Falls, offering authentic safari experiences and rich cultural heritage.',
    image: 'https://i.ytimg.com/vi/ejz1gwbQS4s/maxresdefault.jpg',
    region: 'Southern Africa',
    population: '16.63 million',
    attractions: [
      {
        name: 'Victoria Falls',
        description: 'One of the Seven Natural Wonders of the World, this spectacular waterfall on the Zambezi River creates a thundering curtain of water visible from miles away.',
        image: 'https://www.visitvictoriafalls.org/wp-content/uploads/2024/06/victoria-falls-hd-image-1.png',
        location: 'Victoria Falls Town',
        link: 'https://www.visitvictoriafalls.org/'
      },
      {
        name: 'Hwange National Park',
        description: 'Zimbabwe\'s largest national park with one of Africa\'s largest elephant populations and diverse wildlife.',
        image: 'https://tourafrika.africa/wp-content/uploads/2019/12/The-road-sign-at-the-entrance-to-Hwange-National-Park.jpg',
        location: 'Western Zimbabwe',
        link: 'https://www.zimparks.org.zw/hwange-national-park/'
      },
      {
        name: 'Great Zimbabwe Ruins',
        description: 'UNESCO World Heritage site featuring the largest ancient stone structures in sub-Saharan Africa, dating back to the 11th century.',
        image: 'https://www.greatzimbabweruins.com/images/Great-Zimbabwe-Ruins-view.jpg',
        location: 'Masvingo',
        link: 'https://www.greatzimbabweruins.com/'
      },
      {
        name: 'Mana Pools National Park',
        description: 'UNESCO World Heritage site along the Zambezi River known as Africa\'s Eden with incredible wildlife density.',
        image: 'https://zimfieldguide.com/sites/default/files/Images/mana42.JPG',
        location: 'Northern Zimbabwe',
        link: 'https://www.go2africa.com/destinations/mana-pools/why-go'
      },
      {
        name: 'Matobo National Park',
        description: 'Ancient granite hills with balancing rock formations, rock art, Cecil Rhodes\' grave, and rhino tracking.',
        image: 'https://www.naturalhighsafaris.com/wp-content/uploads/2020/11/matobo-national-park.jpg',
        link: 'https://www.zimparks.org.zw/matobo-national-park/'
      },
      {
        name: 'Gonarezhou National Park',
        description: 'Remote wilderness park with dramatic red sandstone cliffs, baobab trees, and large elephant herds.',
        image: 'https://visitafrica.site/wp-content/uploads/2024/03/Visit-Africa_Gonarezhou-National-Park_01-1024x576.webp',
        location: 'Southeastern Zimbabwe',
        link: 'https://gonarezhou.org/visit-gonarezhou-national-park/'
      },
      {
        name: 'Nyanga National Park',
        description: 'Zimbabwe\'s oldest national park with rolling hills, waterfalls, trout fishing, and ancient ruins.',
        image: 'https://makupsy.wordpress.com/wp-content/uploads/2019/05/nyanga-national-park-2019.jpg',
        location: 'Eastern Highlands',
        link: 'https://www.zimparks.org.zw/nyanga-national-park/'
      },
      {
        name: 'Zambezi River',
        description: 'Mighty river offering white water rafting, canoeing safaris, tiger fishing, and sunset cruises.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqSkelZ9rtEGDk45nPbeNt3HG8MLSUrcUyaGHdtijBz1S_qfbwIqyu6YH2Hr4P9E5Ol_G4tEylJ4YEtRxL_arZRrA2F3lY9elativ7LJ-Ow_gykdZUyUjnPU3uDaIjnSeL-p8Y4ZQ=s680-w680-h510-rw',
        location: 'Northern Zimbabwe',
        link: 'https://www.visit-victoria-falls.com/zambezi-river-cruises/'
      },
      {
        name: 'Chinhoyi Caves',
        description: 'Limestone caves with a cobalt blue pool known as the Sleeping Pool or Chirorodziva.',
        image: 'https://zimbabwetourism.net/wp-content/uploads/2021/02/chinhoyi-caves-4-1024x683-1-770x550.jpg',
        location: 'Mashonaland West',
        link: 'https://zimbabwetourism.net/portfolios/chinhoyi-caves/'
      },
      {
        name: 'Bvumba Mountains',
        description: 'Misty mountains with botanical gardens, forest walks, and spectacular views into Mozambique.',
        image: 'https://tasda.co.za/wp-content/uploads/2018/12/47234472_10157213374040101_8744456996935172096_n.jpg',
        location: 'Eastern Highlands',
        link: 'https://visitvumba.com/'
      },
      {
        name: 'Lake Kariba',
        description: 'World\'s largest man-made lake by volume, offering houseboat cruises, fishing, and wildlife viewing.',
        image: 'https://dev.zimbabwetourism.net/destination/wp-content/uploads/2020/07/Lake-Kariba-2-scaled.jpg',
        location: 'Northern Zimbabwe',
        link: 'https://zimbabwetourism.net/portfolios/lake-kariba-recreational-park/'
      },
      {
        name: 'Khami Ruins',
        description: 'UNESCO World Heritage site featuring stone ruins from the Kingdom of Butua, successor to Great Zimbabwe.',
        image: 'https://naturalhistorymuseum.s3.us-west-2.amazonaws.com/2015/10/khami-ruins.jpg',
        location: 'Bulawayo',
        link: 'https://naturalhistorymuseumzimbabwe.com/khami-ruins/'
      },
      {
        name: 'Chimanimani National Park',
        description: 'Remote mountain wilderness with hiking trails, waterfalls, and unique flora and fauna.',
        image: 'https://www.wonderfulzimbabwe.com/wp-content/uploads/2018/08/Chimanimani-1.jpg',
        location: 'Eastern Highlands',
        link: 'https://www.zimparks.org.zw/chimanimani-national-park/'
      },
      {
        name: 'Harare Gardens',
        description: 'Beautiful botanical gardens in the capital city with diverse plant collections and peaceful atmosphere.',
        image: 'https://images.myguide-cdn.com/zimbabwe/companies/harare-gardens/large/harare-gardens-141625.jpg',
        location: 'Harare',
        link: 'https://www.google.com/search?q=visit+Harare+Gardens&sca_esv=ef5c9cfd86438e8a&rlz=1C1GCEU_nlNL1084NL1084&biw=3440&bih=1313&sxsrf=AE3TifNSHMYGyxXfq3q5RuGBrhfABnV6NQ%3A1758699697034&ei=saDTaLnuAZ2P9u8P2JvB2Q4&ved=0ahUKEwj5itX18vCPAxWdh_0HHdhNMOsQ4dUDCBA&uact=5&oq=visit+Harare+Gardens&gs_lp=Egxnd3Mtd2l6LXNlcnAiFHZpc2l0IEhhcmFyZSBHYXJkZW5zMgUQIRigAUiqFFD8B1jkEnABeACQAQCYAXCgAYACqgEDMi4xuAEDyAEA-AEB-AECmAIDoALbAcICChAAGLADGNYEGEfCAgQQIxgnwgIKEAAYgAQYQxiKBcICBRAAGIAEwgIHEAAYgAQYCsICCxAuGIAEGMcBGK8BmAMAiAYBkAYIkgcDMi4xoAeiErIHAzEuMbgH0wHCBwUwLjEuMsgHDg&sclient=gws-wiz-serp'
      },
      {
        name: 'Bulawayo Railway Museum',
        description: 'Fascinating collection of historic locomotives and railway memorabilia from the colonial era.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4noTiATrddxIyruZWvkQHYiDFLfVILep_KfJwplTI2mr3nnemEZH-FgZbiEtjZlo-keSBkX2PjNhoZWy5RBlyjjfv7KqAjHj7vtTkMZ5iXkKNkbgqcttAb_oQwdATpIgRW8kTj8=s680-w680-h510-rw',
        location: 'Bulawayo',
        link: 'https://nrz.co.zw/rail-museum/'
      },
      {
        name: 'Mutarazi Falls',
        description: 'Zimbabwe\'s highest waterfall and Africa\'s second highest with a 762-meter drop in two tiers.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nr1_JYcfG3Qs9dA-vzub-FpA2CxJmCPQaxol-n7dvMp2SVZfEn7VWyOWsPQX55Xo7jze1cWFpWRJ4miq5hVunf1CGyMDSiaR-2lSrvVqvFiSzxRnIbnTgPzFKp_mXHHfGdntnsv=s680-w680-h510-rw',
        location: 'Eastern Highlands',
        link: 'https://www.farandwide.co.zw/'
      },
      {
        name: 'Chizarira National Park',
        description: 'Remote and rugged park with spectacular gorges, plateaus, and diverse wildlife.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4npYmDSvCO_GFChFkBEonbj9Un-5TD_T_5VMDBnwI9uupftHzYS77DeVA0fgCozd3FwyNfKTy7D1B2YnKWoHqCnME4XX4-NVn_dXglfOYpLGho0PXrZhWU-w89LBL76Op5J2RIzo=s680-w680-h510-rw',
        location: 'Northwestern Zimbabwe',
        link: 'https://www.zimparks.org.zw/chizarira-national-park/'
      },
      {
        name: 'National Gallery of Zimbabwe',
        description: 'Premier art gallery showcasing contemporary and historical Zimbabwean and African art.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4noiBZDnpXZI9ePd3N0E-LYJcL9Uuhg5JMHCmUzukk_ZQq6nHXSASJREqFbj82qNY8WLvhM1xqfeQp3PHKriYqoaE4dzNXLqw-YftDybbehByKXUNNosPocLAvUu-yyrfg68lHWC7A=s680-w680-h510-rw',
        location: 'Harare',
        link: 'https://www.nationalgallery.co.zw/'
      },
      {
        name: 'Domboshava Cave',
        description: 'Ancient rock art site in a granite hill with panoramic views of the surrounding countryside.',
        image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/27/ca/9f/f3/caption.jpg?w=900&h=500&s=1',
        location: 'Near Harare',
        link: 'https://zimbabwetourism.net/portfolios/domboshava-caves/'
      },
      {
        name: 'Antelope Park',
        description: 'Private game reserve offering lion conservation programs and diverse wildlife activities.',
        image: 'https://lh3.googleusercontent.com/p/AF1QipPsh784wPuAETIKZmdMUG81UaLHERSElr6FJBjb=s680-w680-h510-rw',
        location: 'Gweru',
        link: 'https://www.antelopepark.co.zw/'
      }
    ],
    transportation: [
      {
        type: 'Safari Vehicle',
        description: 'Open-sided 4x4 vehicles with experienced guides for game drives in national parks.',
        price: '$150-350/day',
        route: 'Hwange & Mana Pools'
      },
      {
        type: 'Charter Flights',
        description: 'Light aircraft flights between remote safari destinations and major cities.',
        price: '$300-800',
        route: 'Harare to Mana Pools'
      },
      {
        type: 'Luxury Transfers',
        description: 'Private vehicle transfers with professional drivers between major tourist destinations.',
        price: '$100-300',
        route: 'Victoria Falls to Hwange'
      },
      {
        type: 'Houseboat Cruises',
        description: 'Multi-day luxury houseboat experiences on Lake Kariba with wildlife viewing.',
        price: '$200-500/day',
        route: 'Lake Kariba'
      }
    ],
    hotels: [
      {
        name: 'Victoria Falls Hotel',
        description: 'Historic colonial-era hotel with stunning views of Victoria Falls Bridge and the gorges, offering luxury accommodations since 1904.',
        image: 'https://images.trvl-media.com/lodging/1000000/30000/25000/24943/d2301ae4.jpg?impolicy=resizecrop&rw=1200&ra=fit',
        rating: 5,
        price: '$760-900',
        location: 'Victoria Falls',
        bookingLink: 'https://expedia.com/affiliate/eA2c0fP'
      },
      {
        name: 'Singita Pamushana Lodge',
        description: 'Ultra-luxury safari lodge in the private Malilangwe Wildlife Reserve with stunning architecture and exceptional wildlife.',
        image: 'https://lh3.googleusercontent.com/p/AF1QipPcssjC5uH_Q0XPIzXoe1hZ65eVyjRH58xJx9qu=s680-w680-h510-rw',
        rating: 5,
        price: '$1500-3000',
        location: 'Malilangwe Wildlife Reserve',
        bookingLink: 'https://www.singita.com/lodge/singita-pamushana-lodge/'
      },
      {
        name: 'The Elephant Camp',
        description: 'Luxury tented camp with private plunge pools and views of the Victoria Falls spray from each suite.',
        image: 'https://images.trvl-media.com/lodging/18000000/17710000/17709200/17709163/ccb4572a.jpg?impolicy=resizecrop&rw=1200&ra=fit',
        rating: 5,
        price: '$600-1200',
        location: 'Victoria Falls',
        bookingLink: 'https://expedia.com/affiliate/t3Fe5CG'
      },
      {
        name: 'Linkwasha Camp',
        description: 'Contemporary luxury safari camp in a private concession in Hwange National Park.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4npNSk23Q0nKcovHGuzy6QXn5as9VRVnWMuOpo0voihJW3aKeYlp5AXL2JD-XuSHLMsWzB2NEcveEaiwYJqShkR3kCgRiTyyLdFzs0GkSugLnO0LTBd41JhFtgfbyNwuMyS3Zw4qkA=s680-w680-h510-rw',
        rating: 5,
        price: '$800-1600',
        location: 'Hwange National Park',
        bookingLink: 'https://www.wilderness-safaris.com/our-camps/camps/linkwasha-camp'
      },
      {
        name: 'Bumi Hills Safari Lodge',
        description: 'Luxury lodge perched on a hill overlooking Lake Kariba with infinity pool and spectacular sunsets.',
        image: 'https://images.trvl-media.com/lodging/65000000/64640000/64635100/64635057/2eda11de.jpg?impolicy=resizecrop&rw=1200&ra=fit',
        rating: 5,
        price: '$800-1200',
        location: 'Lake Kariba',
        bookingLink: 'https://expedia.com/affiliate/GwmrdkJ'
      },
      {
        name: 'Matetsi Victoria Falls',
        description: 'Luxury lodge on a private game reserve along the Zambezi River combining safari experiences with Victoria Falls.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nofPO8HX1I_MV-pcpp1C1IroWDqraSvKg7d6uuaCOJVXJysFYXkFUo4HHmKu_fCrVdaNXRFyjeJuUuy_N1MdSwWMlPTgdFP89Tm76DtqnfVe0Wcu-ddTpjPqt3wThnDGv31wX-3=s680-w680-h510-rw',
        rating: 5,
        price: '$1000-2000',
        location: 'Victoria Falls',
        bookingLink: 'https://www.matetsivictoriafalls.com/'
      },
      {
        name: 'Ruckomechi Camp',
        description: 'Premier tented camp in Mana Pools National Park with views of the Zambezi River and Rift Valley escarpment.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrHyeWr7Iv3hO04tlxu7HFGGlC0uxOWN4A7vm3TY1VeUPn_We63V2fMg5fNz4hQikSsEEhSNhHipLD04aAvPTKwnMqoz5ZVMbW5hVQslcHQtbK5SoUPXNaAOZBR49AdvNOcI7c=s680-w680-h510-rw',
        rating: 5,
        price: '$800-1600',
        location: 'Mana Pools National Park',
        bookingLink: 'https://www.wilderness-safaris.com/our-camps/camps/ruckomechi-camp'
      },
      {
        name: 'Ilala Lodge',
        description: 'Boutique hotel within walking distance of Victoria Falls with colonial charm and excellent dining.',
        image: 'https://images.trvl-media.com/lodging/7000000/6990000/6981300/6981220/bf0cbbd0.jpg?impolicy=resizecrop&rw=1200&ra=fit',
        rating: 4,
        price: '$200-500',
        location: 'Victoria Falls',
        bookingLink: 'https://expedia.com/affiliate/ow0UxNe'
      },
      {
        name: 'Camp Amalinda',
        description: 'Unique lodge built into ancient granite boulders in the Matobo Hills with rock art and rhino tracking.',
        image: 'https://images.trvl-media.com/lodging/13000000/12780000/12776800/12776704/1164fd36.jpg?impolicy=resizecrop&rw=1200&ra=fit',
        rating: 4,
        price: '$300-600',
        location: 'Matobo National Park',
        bookingLink: 'https://expedia.com/affiliate/iogcbEz'
      },
      {
        name: 'Meikles Hotel',
        description: 'Historic five-star hotel in the heart of Harare with luxury amenities and colonial elegance.',
        image: 'https://images.trvl-media.com/lodging/1000000/10000/7700/7612/927fd78c.jpg?impolicy=resizecrop&rw=1200&ra=fit',
        rating: 4,
        price: '$150-300',
        location: 'Harare',
        bookingLink: 'https://expedia.com/affiliate/NVNOg1u'
      },
      {
        name: 'Chilo Gorge Safari Lodge',
        description: 'Luxury lodge overlooking the Save River and Gonarezhou National Park with stunning views.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqofH4gNSu2qV1F1-9tXr3tqDAjdrFv3F4RVtkJdKHx9wfs3EPtBdStuxeJhFZxHJPeysVpmluk0YLHuVZ53ztnBaF2_-8547PYJ1NiIfPVif3rS_QxCxaZpOX09xbkv1vQqBFClA=s680-w680-h510-rw',
        rating: 4,
        price: '$400-100',
        location: 'Gonarezhou National Park',
        bookingLink: 'https://chilogorge.com/'
      },
      {
        name: 'The Hide Safari Camp',
        description: 'Award-winning safari camp in Hwange National Park with underground hide for close wildlife viewing.',
        image: 'https://www.africastay.com/media/website/6412-extra-image_1.jpg',
        rating: 4,
        price: '$500-1000',
        location: 'Hwange National Park',
        bookingLink: 'https://www.thehide.com/'
      },
      {
        name: 'Amanzi Lodge',
        description: 'Boutique lodge in Harare with individually designed rooms, beautiful gardens, and excellent dining.',
        image: 'https://images.trvl-media.com/lodging/14000000/13170000/13161500/13161477/0a9ebf0b.jpg?impolicy=resizecrop&rw=1200&ra=fit',
        rating: 4,
        price: '$150-300',
        location: 'Harare',
        bookingLink: 'https://expedia.com/affiliate/G2xa6fS'
      },
      {
        name: 'Musango Safari Camp',
        description: 'Private island camp in Lake Kariba offering diverse activities and intimate safari experiences.',
        image: 'https://lh3.googleusercontent.com/p/AF1QipOsbEpq-VBk2jZ0tfu9on1EJpwNDI7a2ifU0Fxs=s680-w680-h510-rw',
        rating: 4,
        price: '$400-2000',
        location: 'Lake Kariba',
        bookingLink: 'https://www.musangosafaricamp.com/'
      },
      {
        name: 'Khayelitshe House',
        description: 'Exclusive-use luxury villa in Matobo Hills with unique architecture and private safari experiences.',
        image: 'https://lh3.googleusercontent.com/p/AF1QipM89A02SnbRFoaIJbBHDh_WFKBMklIvInfcujtN=s680-w680-h510-rw',
        rating: 5,
        price: '$800-1600',
        location: 'Matobo Hills',
        bookingLink: 'https://africanbushcamps.com/experiences/khayelitshe-house/'
      },
      {
        name: 'Norma Jeane\'s Lakeview Resort',
        description: 'Lakeside resort on Lake Kariba with comfortable accommodations and water activities.',
        image: 'https://lh3.googleusercontent.com/p/AF1QipPKydt1DgdYccHrltodDabPte3OLVMxiVZhylDE=s680-w680-h510-rw',
        rating: 5,
        price: '$100-400',
        location: 'Kariba',
        bookingLink: 'https://clevershotelsandresorts.com/clevers-lakeview-resort/'
      },
      {
        name: 'Inn on Rupurara',
        description: 'Country inn in the Eastern Highlands with trout fishing, horse riding, and mountain activities.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nouVvp320il9H4Z4CjoHpiOi-paY5WRawW2OFkS7hcoKzA6-6_CtaS-9mAWxSWKTAb1IE9RIUgfnuQM3b7-8DW8cczLF65GOzh0nk3XvB07-zSuafwfYmu793Fhdi8I37XZjAkP=s680-w680-h510-rw',
        rating: 4,
        price: '$150-300',
        location: 'Nyanga',
        bookingLink: 'https://www.google.com/search?sca_esv=a0d1b552b0cbf3bf&sxsrf=AE3TifO4lzKy4JyErTkxrC1Ym-xUgFhzHg:1758916331811&uds=AOm0WdE2fekQnsyfYEw8JPYozOKz8ApIadQLmEGoRDEJ92CwHAqq0HUL0F_phihEzfgSf-NSzWpqPkod1OLXOWV4S9KbtDJtGmZEs2qmIGHXNX-XUPQoU9m6g7OAudTtpGlfpu0GkUfX01BSpR_ew5uP5_HRpgbTOw&q=Inn+On+Rupurara+Prices&si=AMgyJEuRD3GDqxU_L8_PeeEjTvjV-qP0VAp8vNvPrAbc6ek8QOEwm9iR8fkhx7n1K-4BcYKiGBxMXPsKT70fLInpjMd6Fg6KmU1MIbSkjU6KTqD8F2uD45ffLiYaoxssup93dgbt7Oo1qnbPeLEoxOFjUwB87A_zYg%3D%3D&sa=X&ved=2ahUKEwjbwpb5mfePAxX8gP0HHRvnHbkQrK0LegQIKhAG&biw=1821&bih=798&dpr=0.75'
      },
      {
        name: 'Bulawayo Club',
        description: 'Historic gentlemen\'s club converted to a boutique hotel with colonial architecture and memorabilia.',
        image: 'https://images.trvl-media.com/lodging/7000000/6130000/6120200/6120159/ee61498c.jpg?impolicy=resizecrop&rw=1200&ra=fit',
        rating: 4,
        price: '$48-200',
        location: 'Bulawayo',
        bookingLink: 'https://expedia.com/affiliate/JxllnJ1'
      },
      {
        name: 'Zambezi Sands River Camp',
        description: 'Luxury tented camp on the banks of the Zambezi River within Zambezi National Park.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4npnDsWKkftxUo8IYXKoMhyx536ZSHyjoHrXPY5UR5g3R1mJmq0Ban02RCcSjyJELGKdNktCZln0qlRALM2mzW10eXwPe8UWtd9TgH08kGFiXvFO5OgsRJC7TbohCwfBhW-7IGRBPQ=s680-w680-h510-rw',
        rating: 4,
        price: '$500-1000',
        location: 'Victoria Falls',
        bookingLink: 'https://batokaafrica.com/properties/zambezi-sands/'
      },
      {
        name: 'Troutbeck Resort',
        description: 'Historic resort in the Eastern Highlands with trout fishing, golf course, and mountain views.',
        image: 'https://images.trvl-media.com/lodging/1000000/120000/113600/113536/2a688694.jpg?impolicy=resizecrop&rw=1200&ra=fit',
        rating: 4,
        price: '$150-300',
        location: 'Nyanga',
        bookingLink: 'https://expedia.com/affiliate/57E7iRB'
      }
    ],
    restaurants: [
      {
        name: 'The Boma - Place of Eating',
        cuisine: 'Interactive cultural dining experience with traditional Zimbabwean cuisine, dancing, and drumming.',
        image: 'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/09/9e/77/8d.jpg',
        rating: 4,
        priceRange: '$40-60',
        location: 'Victoria Falls',
        link: 'https://www.theboma.co.zw/'
      },
      {
        name: 'Coimbra Restaurant',
        cuisine: 'Portuguese and Mediterranean cuisine with fresh seafood and traditional dishes.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4np9GtDOlzDoMVMuKK7lEfEP9WjY2GWrvSw4E2UVQOPNlZRGpCW2eZL9heV2NSrFacv2edV4MyK6AmwOUj7m3cK7ty0fC7EJ8LjZ3feEfTWjQP7ie8U1Nu7PsbJNUQOd8uSIJcr6=s680-w680-h510-rw',
        rating: 4,
        priceRange: '$20-40',
        location: 'Harare',
        link: 'https://share.google/7Bg6T0DBXHLtH0SrZ'
      },
      {
        name: 'Lookout Café',
        cuisine: 'Spectacular cliff-top restaurant overlooking the Batoka Gorge with international menu.',
        image: 'https://lh3.googleusercontent.com/p/AF1QipP0SvO8_DIyFYAoL7mW1fMpn2Vdlcbr6Xvkt5x3=s680-w680-h510-rw',
        rating: 4,
        priceRange: '$15-35',
        location: 'Victoria Falls',
        link: 'https://share.google/5krz7XZx4RMunGjkv'
      },
      {
        name: 'La Fontaine',
        cuisine: 'Fine dining restaurant at Meikles Hotel with international cuisine and elegant atmosphere.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqmxQNRenTlPGTuceBXjqmijsgHbGAGqEQe8HULUrKCp2g4c_tl5XEvSEbKe6r_bF3faxDYLUWg_wP4Dbf1pmw7M0-xISUrIqDCgmEVBeF9ZdUiGPGe5Nq92XMYjFVIVHwyF66O5g=s680-w680-h510-rw',
        rating: 4,
        priceRange: '$25-50',
        location: 'Harare',
        link: 'https://share.google/hx80upWIPadtudfj0'
      },
      {
        name: 'Mozambik Honeybear Greystone Park',
        cuisine: 'Traditional African cuisine with cultural performances and authentic atmosphere.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4np4EKLguscL656PlcSQwKQh_PRFqZ4OTauwN-mXRpQAd_nhrYDxrHL3x41N0771x29asweUiYCE_88Y7zEmHZ1x26o21ubtFg0ev1bjqKFyqpYIUXiEsPV_yDoBqsbsU5xka6at=s680-w680-h510-rw',
        rating: 4,
        priceRange: '$15-30',
        location: 'Harare',
        link: 'https://www.mozambik.co.za/zimbabwe/'
      },
      {
        name: 'Victoria 22',
        cuisine: 'Contemporary restaurant with international menu, cocktails, and elegant atmosphere.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqSPBpvs1cPbgwJzUAfy3rIh9DuaC1FA_gjeSmRZQZDt5HwIqlRZpU2nAzfIETff2yO7N4lvaCZkfvVS5zAJN-ihdWwyP17eZz97Htj_NXGS1ql4dbIeI4iCa8rKaVjA-_h78jE1Q=s680-w680-h510-rw',
        rating: 4,
        priceRange: '$20-40',
        location: 'Harare',
        link: 'https://www.victoria22.com/'
      },
      {
        name: 'Rainforest Café',
        cuisine: 'Casual dining with international menu and views of the rainforest near Victoria Falls.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nonq1UzKum1VujzAk4Jf5GCuMznINIj4RQtRcWs81yEaznXV8RWlrbDAREwbYnpLM0SlOsF40G-7VzOW8dj6JhM-RLv_hhtiDR_IsmWeSpdQGuZ67zxDIwujSv41iujDYWHjLGHIA=s680-w680-h510-rw',
        rating: 4,
        priceRange: '$10-25',
        location: 'Victoria Falls',
        link: 'https://victoriafalls-rainforest.cafe/'
      },
      {
        name: 'Queen of Hearts',
        cuisine: 'Upscale restaurant with game meats, international cuisine, and colonial atmosphere.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4np6UoOy-wIXe4GaZwVGA8tXW70frdPUqW1q23jateolxXiF24XmbvNGRv0pqZBGm_paub0tzR0FHHjR3VVoeuigSYB6PZcdlnL8JCwI_iWVixH4c08SbMRJMXbvw241lYAK7eRCNQ=s680-w680-h510-rw',
        rating: 4,
        priceRange: '$20-45',
        location: 'Harare',
        link: 'https://queenofhearts.co.zw/'
      },
      {
        name: 'Amanzi Restaurant',
        cuisine: 'Garden restaurant with international cuisine, water features, and relaxed atmosphere.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqZ7TVkRgQchG-MkHkPFUn3nibc85cbRo6qNggEdkunNAszCeSjpIH-hNiZBBWVwiPX7q3xC4diZ57etE46CKMvNyWWQ1FIIUa0FsOC5KOncbqWv4omahznXZyhYHVURjwooBIO=s680-w680-h510-rw',
        rating: 4,
        priceRange: '$20-40',
        location: 'Harare',
        link: 'https://www.amanzi.co.zw/'
      },
      {
        name: 'Gavas Restaurant',
        cuisine: '⁦Gava\'s serves traditional ⁩⁦Zimbabwean⁩⁦ cuisine (Sadza and Stew), and also has an extensive grill menu. We source our ingredients from local, independent farmers.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nq_LXoVK0hXFCfoqBi4Rdg8DrUbX0uTsn5dAVFQnyQa67-eWHOSxdJcQiY3amiCfB9AuyYCUc0l0SjUYbqbY5elP8ywOCkG2CMkKStkWMKlJSYk693zst8hYlDir8aYDkG6GWBK=s680-w680-h510-rw',
        rating: 5,
        priceRange: '$30-60',
        location: 'Harare',
        link: 'https://www.gavasrestaurant.com/'
      },
      {
        name: 'Garwe Restaurant',
        cuisine: 'Traditional Zimbabwean cuisine with cultural performances and authentic atmosphere.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4npIj6yeTljYNyEIJ9pQ9TBVXVIpOUaA1XrAxbhrFiwtr_UPO9vNdF_3HfH-cDCJ0LIzKPN2iiQKJqsR9gdxvTIogUEjk6N0hda0BnFHcwwQ771Wywzd5Oo4RnHOal3rpuv6_UPkXQ=s680-w680-h510-rw',
        rating: 4,
        priceRange: '$15-30',
        location: 'Harare',
        link: 'https://www.garwerestaurant.co.zw/'
      },
      {
        name: 'Alo Alo Restaurant',
        cuisine: 'International cuisine with African influences and elegant atmosphere.',
        image: 'https://lh3.googleusercontent.com/p/AF1QipPQ44aqe8PhTFsRs6n7nMmoCXGm71DRFf_Kym8c=s680-w680-h510-rw',
        rating: 4,
        priceRange: '$20-40',
        location: 'Harare',
        link: 'https://share.google/c9ZGAsp7UCVofTP1x'
      },
      {
        name: 'Three Monkeys Café',
        cuisine: 'Casual café with international menu, coffee, and relaxed atmosphere.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4noIA3TeSmg7MgNlh8K6JV4UrLBDdo0EZTvspXjq-1V6QTH0GwZnZatIM9VezTNxI0bP0lgek13g7xpf8Wkz0BrpT5FwwT368s-3rx6LZniYdPLyVH4sftr5e6xQ11YcN2VX-hWg82f68Vr3=s680-w680-h510-rw',
        rating: 4,
        priceRange: '$10-25',
        location: 'Harare',
        link: 'https://www.threemonkeys.co.zw/'
      },
      {
        name: 'Paula\'s Place',
        cuisine: '⁦Paula\'s Place⁩⁦ is an authentic Portuguese charcoal grill restaurant. All staff have been trained in house and are friendly and attentive.⁩',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrwtAQ3f-sTGRSwXpU8Qw2ddY2PQcl4emWrlS77DZeaU-ChSgr9NH_smtzwFcTJvHYfs4fLPvdnz20yBE4gEB6MyGANMkStbqmPvoKTfFTMARqeYD6rqZ-k_bNQUe1hnI4Ayhg4lA=s680-w680-h510-rw',
        rating: 4,
        priceRange: '$15-35',
        location: 'Harare',
        link: 'https://www.paulasplacezw.com/'
      },
      {
        name: 'The Kitchen',
        cuisine: 'A LA CARTE ALL DAY DINING INTERNATIONAL CUISINE RESTAURANT. Nestled at the vibrant intersection of 3rd Street and Jason Moyo Avenue, The Kitchen welcomes you to an intimate dining experience where culinary mastery meets comforting familiarity.',
        image: 'https://lh3.googleusercontent.com/p/AF1QipPF9f5aFkWrflHYR34R2i1lz9SSJYQYML_gSx8R=s680-w680-h510-rw',
        rating: 4,
        priceRange: '$10-25',
        location: 'Harare',
        link: 'https://www.hyattrestaurants.com/en/harare/restaurant/the-kitchen-hyatt-regency-harare-the-meikles'
      },
      {
        name: 'Chop Chop Grill House',
        cuisine: 'African fusion cuisine with modern presentation and traditional flavors.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqCEs3AW2uPtc88iNukwE-CETVlcdqAjR2Sef9UCHmwEwgMKDEUmC_HsV7bdsr7Oz2RSfkNbbuxgXUf9fQkg0PkYbOJxsuFtyZVXewM3YivKV-AdQTdgCYJMvria-J82ATkOpSJ=s680-w680-h510-rw',
        rating: 4,
        priceRange: '$15-35',
        location: 'Harare',
        link: 'https://www.chopchop.co.zw/'
      },
      {
        name: 'The River Brewing Co',
        cuisine: 'Craft brewery with pub food, local beers, and riverside atmosphere.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nr8Ru_oRm3VGTIB-i5ym4Qrg6ROi1MAVWNy7P9jH0qMjV54w435-175e-mMp_4TB8RP5DX-AoO9Tr2N1IyrAEJyiEuQErm07LudT73Ck9D8Z-rHFbotZzbM08hyK_R48eLSTmcpqSR2KlY=s680-w680-h510-rw',
        rating: 4,
        priceRange: '$10-25',
        location: 'Victoria Falls',
        link: 'https://www.riverbrewco.com/'
      },
      {
        name: 'Pariah State',
        cuisine: 'Trendy restaurant and bar with international menu, craft beer, and vibrant atmosphere.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4npQ3h3cEgm87Hwthy7tjO2s4YlSQnMpdPMaVngiOgcoJu3ogk3DHN0BxAFCT0El7Npv6ECWcshx3ovjobv1hKs553dMTvb9BDM85gH1za67T-C8eYFxFWvHQNbFmMFeDyemikHwBSdou15o=s680-w680-h510-rw',
        rating: 4,
        priceRange: '$15-30',
        location: 'Harare',
        link: 'https://share.google/ySNAv36MAPyenbTh7'
      },
      {
        name: 'The Stanley & Livingstone Restaurant',
        cuisine: 'Fine dining restaurant at boutique hotel with international cuisine and elegant atmosphere.',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nq4h0Lo9wcQuP-9yA6dukB5jMT68QeeJvQtArOKowNLgM5D5pUlmXduTN6hTtWGdJVAOpUKt0T--qgGtgAvb9zooXYgGqQJZKZ0c2J7BbkQrUmbK4nncaPUAUEnue86Md0H5SHD=s680-w680-h510-rw',
        rating: 5,
        priceRange: '$30-60',
        location: 'Victoria Falls',
        link: 'https://www.anantara.com/en/stanley-and-livingstone-victoria-falls/restaurants/1871-restaurant'
      },
      {
        name: 'St Elmo\'s',
        cuisine: '⁦Authentic Italian woodfired pizzas, best steak and seafood, pasta, salad. Child friendly restaurant with kids playcentre, video games etc.',
        image: 'https://lh3.googleusercontent.com/p/AF1QipNtaw9hkDciUFbXbeumjSx8juhDC2CnkicHQ_z9=s680-w680-h510-rw',
        rating: 4,
        priceRange: '$10-25',
        location: 'Harare',
        link: 'https://stelmosrestaurant.com/'
      }
    ]
  },
  {
    name: 'Uganda',
    description: 'The Pearl of Africa offering mountain gorilla trekking, chimpanzee encounters, and diverse landscapes from the Rwenzori Mountains to the source of the Nile.',
    image: 'https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg', // Bwindi Impenetrable Forest
    region: 'East Africa',
    population: '45 million',
    attractions: [
      {
        name: 'Bwindi Impenetrable National Park',
        description: 'UNESCO World Heritage site and home to nearly half the world\'s remaining mountain gorillas, offering unforgettable gorilla trekking experiences.',
        image: 'https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Southwestern Uganda',
        link: 'https://www.ugandawildlife.org/explore-our-parks/parks-by-name-a-z/bwindi-impenetrable-national-park'
      },
      {
        name: 'Murchison Falls National Park',
        description: 'Uganda\'s largest national park where the mighty Nile squeezes through a narrow gorge before plunging 43 meters into the "Devil\'s Cauldron".',
        image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Northwestern Uganda',
        link: 'https://www.ugandawildlife.org/explore-our-parks/parks-by-name-a-z/murchison-falls-national-park'
      },
      {
        name: 'Queen Elizabeth National Park',
        description: 'Diverse park with tree-climbing lions, 10 primate species, and over 600 bird species across savanna and forest habitats.',
        image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Western Uganda',
        link: 'https://www.ugandawildlife.org/explore-our-parks/parks-by-name-a-z/queen-elizabeth-national-park'
      },
      {
        name: 'Kibale National Park',
        description: 'Primate capital of the world with 13 species including chimpanzees, offering guided chimp tracking and habituation experiences.',
        image: 'https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Western Uganda',
        link: 'https://www.ugandawildlife.org/explore-our-parks/parks-by-name-a-z/kibale-national-park'
      },
      {
        name: 'Rwenzori Mountains National Park',
        description: 'UNESCO World Heritage site featuring Africa\'s third highest peak and spectacular alpine landscapes with unique flora.',
        image: 'https://images.pexels.com/photos/1670732/pexels-photo-1670732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Western Uganda',
        link: 'https://www.ugandawildlife.org/explore-our-parks/parks-by-name-a-z/rwenzori-mountains-national-park'
      },
      {
        name: 'Jinja - Source of the Nile',
        description: 'Adventure capital of East Africa where the Nile begins its journey from Lake Victoria, offering white water rafting and other activities.',
        image: 'https://images.pexels.com/photos/1670045/pexels-photo-1670045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Eastern Uganda',
        link: 'https://www.visituganda.com/explore/destinations/jinja/'
      },
      {
        name: 'Lake Bunyonyi',
        description: 'Second deepest lake in Africa with 29 islands, terraced hillsides, and dugout canoe experiences.',
        image: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Southwestern Uganda',
        link: 'https://www.visituganda.com/explore/destinations/lake-bunyonyi/'
      },
      {
        name: 'Mgahinga Gorilla National Park',
        description: 'Part of the Virunga Conservation Area with mountain gorillas, golden monkeys, and three extinct volcanoes.',
        image: 'https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Southwestern Uganda',
        link: 'https://www.ugandawildlife.org/explore-our-parks/parks-by-name-a-z/mgahinga-gorilla-national-park'
      },
      {
        name: 'Ssese Islands',
        description: '84 islands in Lake Victoria offering pristine beaches, fishing, and relaxation away from the mainland.',
        image: 'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Lake Victoria',
        link: 'https://www.visituganda.com/explore/destinations/ssese-islands/'
      },
      {
        name: 'Kidepo Valley National Park',
        description: 'Remote wilderness park in the northeastern corner with spectacular savanna landscapes and abundant wildlife.',
        image: 'https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Northeastern Uganda',
        link: 'https://www.ugandawildlife.org/explore-our-parks/parks-by-name-a-z/kidepo-valley-national-park'
      },
      {
        name: 'Sipi Falls',
        description: 'Series of three waterfalls on the slopes of Mount Elgon with hiking trails and coffee tours.',
        image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Eastern Uganda',
        link: 'https://www.visituganda.com/explore/destinations/sipi-falls/'
      },
      {
        name: 'Kasubi Tombs',
        description: 'UNESCO World Heritage site and burial ground of Buganda kings with traditional architecture.',
        image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Kampala',
        link: 'https://whc.unesco.org/en/list/1022/'
      },
      {
        name: 'Lake Mburo National Park',
        description: 'Compact park with zebras, impalas, and over 300 bird species, perfect for walking safaris.',
        image: 'https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Western Uganda',
        link: 'https://www.ugandawildlife.org/explore-our-parks/parks-by-name-a-z/lake-mburo-national-park'
      },
      {
        name: 'Ngamba Island Chimpanzee Sanctuary',
        description: 'Island sanctuary in Lake Victoria providing refuge for rescued and orphaned chimpanzees.',
        image: 'https://images.pexels.com/photos/1670732/pexels-photo-1670732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Lake Victoria',
        link: 'https://ngambaisland.org/'
      },
      {
        name: 'Semuliki National Park',
        description: 'Extension of the Congo Basin forest with hot springs, lowland gorillas, and unique Central African wildlife.',
        image: 'https://images.pexels.com/photos/1670045/pexels-photo-1670045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Western Uganda',
        link: 'https://www.ugandawildlife.org/explore-our-parks/parks-by-name-a-z/semuliki-national-park'
      },
      {
        name: 'Ndere Cultural Centre',
        description: 'Vibrant cultural center showcasing traditional Ugandan music, dance, and cuisine.',
        image: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Kampala',
        link: 'https://www.ndere.com/'
      },
      {
        name: 'Mount Elgon National Park',
        description: 'Extinct volcano with one of the world\'s largest caldera, caves, hot springs, and diverse ecosystems.',
        image: 'https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Eastern Uganda',
        link: 'https://www.ugandawildlife.org/explore-our-parks/parks-by-name-a-z/mount-elgon-national-park'
      },
      {
        name: 'Ziwa Rhino Sanctuary',
        description: 'Conservation area reintroducing rhinos to Uganda with guided rhino tracking on foot.',
        image: 'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Central Uganda',
        link: 'https://www.rhinofund.org/ziwa-rhino-sanctuary'
      },
      {
        name: 'Entebbe Botanical Gardens',
        description: 'Historic gardens established in 1898 with diverse plant collections, monkeys, and birds.',
        image: 'https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Entebbe',
        link: 'https://www.visituganda.com/explore/destinations/entebbe-botanical-gardens/'
      },
      {
        name: 'Bigodi Wetland Sanctuary',
        description: 'Community-run wetland with exceptional birding and primate viewing adjacent to Kibale Forest.',
        image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Western Uganda',
        link: 'https://www.kabaroleresearchtourismcentre.org/bigodi-wetland-sanctuary/'
      }
    ],
    transportation: [
      {
        type: 'Safari Vehicle',
        description: 'Specialized 4x4 vehicles with pop-up roofs for game viewing in national parks.',
        price: '$150-300/day',
        route: 'Queen Elizabeth & Murchison Falls'
      },
      {
        type: 'Gorilla Trekking Transfer',
        description: 'Private transfers to gorilla trekking locations with experienced drivers.',
        price: '$200-400',
        route: 'Kampala to Bwindi'
      },
      {
        type: 'Domestic Flights',
        description: 'Light aircraft flights between major tourist destinations saving travel time.',
        price: '$200-500',
        route: 'Entebbe to Kihihi (Bwindi)'
      },
      {
        type: 'Boat Cruises',
        description: 'Wildlife and scenic boat trips on the Nile, Lake Victoria, and other waterways.',
        price: '$50-150',
        route: 'Murchison Falls Boat Safari'
      }
    ],
    hotels: [
      {
        name: 'Sanctuary Gorilla Forest Camp',
        description: 'Luxury tented camp located within Bwindi Impenetrable Forest with gorillas often visiting the camp.',
        image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 5,
        price: '$600-1200',
        location: 'Bwindi Impenetrable National Park',
        bookingLink: 'https://www.sanctuaryretreats.com/uganda-lodges-gorilla-forest-camp'
      },
      {
        name: 'Clouds Mountain Gorilla Lodge',
        description: 'Uganda\'s highest lodge with stunning views, private cottages with fireplaces, and gorilla trekking access.',
        image: 'https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 5,
        price: '$700-1400',
        location: 'Bwindi Impenetrable National Park',
        bookingLink: 'https://www.wildplacesafrica.com/clouds-mountain-gorilla-lodge/'
      },
      {
        name: 'Chobe Safari Lodge',
        description: 'Luxury lodge on the banks of the Nile River in Murchison Falls National Park with pool and river views.',
        image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        price: '$200-400',
        location: 'Murchison Falls National Park',
        bookingLink: 'https://chobelodgeuganda.com/'
      },
      {
        name: 'Kyambura Gorge Lodge',
        description: 'Eco-luxury lodge overlooking Queen Elizabeth National Park and Kyambura Gorge with chimpanzee trekking.',
        image: 'https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 5,
        price: '$500-1000',
        location: 'Queen Elizabeth National Park',
        bookingLink: 'https://www.volcanoessafaris.com/kyambura-gorge-lodge/'
      },
      {
        name: 'Kyaninga Lodge',
        description: 'Stunning luxury lodge built from timber on the rim of a crater lake with views of the Rwenzori Mountains.',
        image: 'https://images.pexels.com/photos/1670732/pexels-photo-1670732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 5,
        price: '$400-800',
        location: 'Fort Portal',
        bookingLink: 'https://www.kyaningalodge.com/'
      },
      {
        name: 'Wildwaters Lodge',
        description: 'Unique lodge situated on a private island in the middle of the Nile River with luxury suites and rapids views.',
        image: 'https://images.pexels.com/photos/1670045/pexels-photo-1670045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 5,
        price: '$300-600',
        location: 'Jinja',
        bookingLink: 'https://www.wildwaterslodge.com/'
      },
      {
        name: 'Apoka Safari Lodge',
        description: 'Remote luxury lodge in Kidepo Valley National Park with panoramic savanna views and wildlife.',
        image: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 5,
        price: '$600-1200',
        location: 'Kidepo Valley National Park',
        bookingLink: 'https://www.wildplacesafrica.com/apoka-safari-lodge/'
      },
      {
        name: 'Serena Lake Victoria Resort',
        description: 'Luxury resort on the shores of Lake Victoria with golf course, spa, and water activities.',
        image: 'https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 5,
        price: '$200-400',
        location: 'Entebbe',
        bookingLink: 'https://www.serenahotels.com/serenalakevictoria/'
      },
      {
        name: 'Buhoma Lodge',
        description: 'Intimate safari lodge with views of Bwindi Forest and easy access to gorilla trekking.',
        image: 'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        price: '$400-800',
        location: 'Bwindi Impenetrable National Park',
        bookingLink: 'https://www.ugandaexclusivecamps.com/buhoma-lodge/'
      },
      {
        name: 'Mihingo Lodge',
        description: 'Luxury safari lodge perched on a rocky outcrop with stunning views over Lake Mburo National Park.',
        image: 'https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        price: '$300-600',
        location: 'Lake Mburo National Park',
        bookingLink: 'https://www.mihingolodge.com/'
      },
      {
        name: 'Kampala Serena Hotel',
        description: 'Five-star hotel in the heart of Kampala with luxury amenities, spa, and multiple restaurants.',
        image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 5,
        price: '$200-400',
        location: 'Kampala',
        bookingLink: 'https://www.serenahotels.com/serenakampala/'
      },
      {
        name: 'Ndali Lodge',
        description: 'Colonial-style lodge set on a crater lake with stunning views and access to Kibale Forest.',
        image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        price: '$300-600',
        location: 'Kibale Forest',
        bookingLink: 'https://www.ndalilodge.com/'
      },
      {
        name: 'Ishasha Wilderness Camp',
        description: 'Intimate tented camp in the southern sector of Queen Elizabeth National Park, famous for tree-climbing lions.',
        image: 'https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        price: '$400-800',
        location: 'Queen Elizabeth National Park',
        bookingLink: 'https://www.ugandaexclusivecamps.com/ishasha-wilderness-camp/'
      },
      {
        name: 'Lemala Wildwaters Lodge',
        description: 'Luxury lodge on a private island in the Nile River with rapids views and adventure activities.',
        image: 'https://images.pexels.com/photos/1670732/pexels-photo-1670732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 5,
        price: '$300-600',
        location: 'Jinja',
        bookingLink: 'https://www.lemalacamp.com/wildwaters-lodge/'
      },
      {
        name: 'Crater Safari Lodge',
        description: 'Luxury lodge overlooking a crater lake with easy access to Kibale Forest for chimpanzee trekking.',
        image: 'https://images.pexels.com/photos/1670045/pexels-photo-1670045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        price: '$300-600',
        location: 'Kibale Forest',
        bookingLink: 'https://www.cratersafarilodge.com/'
      },
      {
        name: 'Paraa Safari Lodge',
        description: 'Classic safari lodge overlooking the Nile River in Murchison Falls National Park.',
        image: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        price: '$200-400',
        location: 'Murchison Falls National Park',
        bookingLink: 'https://www.paraalodge.com/'
      },
      {
        name: 'Arcadia Cottages',
        description: 'Charming cottages on the shores of Lake Bunyonyi with stunning views and water activities.',
        image: 'https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        price: '$100-200',
        location: 'Lake Bunyonyi',
        bookingLink: 'https://www.arcadialodges.com/'
      },
      {
        name: 'Mount Gahinga Lodge',
        description: 'Luxury lodge at the base of the Virunga Volcanoes with gorilla trekking and cultural experiences.',
        image: 'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 5,
        price: '$400-800',
        location: 'Mgahinga Gorilla National Park',
        bookingLink: 'https://www.volcanoessafaris.com/mount-gahinga-lodge/'
      },
      {
        name: 'Sipi River Lodge',
        description: 'Eco-friendly lodge with stunning views of Sipi Falls and coffee plantation tours.',
        image: 'https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        price: '$100-200',
        location: 'Sipi Falls',
        bookingLink: 'https://www.sipiriverlodge.com/'
      },
      {
        name: 'Protea Hotel Entebbe',
        description: 'Luxury hotel on the shores of Lake Victoria with pool, restaurant, and airport proximity.',
        image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        price: '$150-300',
        location: 'Entebbe',
        bookingLink: 'https://www.marriott.com/hotels/travel/ebben-protea-hotel-entebbe/'
      }
    ],
    restaurants: [
      {
        name: 'The Lawns Restaurant',
        cuisine: 'Fine dining restaurant at Kampala Serena Hotel with international cuisine and elegant atmosphere.',
        image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 5,
        priceRange: '$30-60',
        location: 'Kampala',
        link: 'https://www.serenahotels.com/serenakampala/dining/the-lawns-restaurant/'
      },
      {
        name: 'Cafe Javas',
        cuisine: 'Popular cafe chain with international menu, coffee, and casual dining atmosphere.',
        image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        priceRange: '$10-25',
        location: 'Multiple locations',
        link: 'https://www.cafejavas.co.ug/'
      },
      {
        name: 'Mediterraneo',
        cuisine: 'Authentic Italian restaurant with wood-fired pizza, pasta, and Mediterranean specialties.',
        image: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        priceRange: '$15-35',
        location: 'Kampala',
        link: 'https://www.mediterraneokampala.com/'
      },
      {
        name: 'The Bistro',
        cuisine: 'International cuisine with garden setting and relaxed atmosphere at Kampala Serena Hotel.',
        image: 'https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        priceRange: '$20-40',
        location: 'Kampala',
        link: 'https://www.serenahotels.com/serenakampala/dining/the-bistro/'
      },
      {
        name: 'Endiro Coffee',
        cuisine: 'Farm-to-cup coffee shop with light meals, pastries, and specialty coffee.',
        image: 'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        priceRange: '$5-15',
        location: 'Multiple locations',
        link: 'https://www.endiro.com/'
      },
      {
        name: 'Yujo Izakaya',
        cuisine: 'Japanese restaurant with sushi, ramen, and traditional Japanese dishes.',
        image: 'https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        priceRange: '$15-35',
        location: 'Kampala',
        link: 'https://www.yujoizakaya.com/'
      },
      {
        name: 'Prunes Restaurant',
        cuisine: 'Fine dining restaurant with international cuisine and intimate atmosphere.',
        image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        priceRange: '$20-40',
        location: 'Kampala',
        link: 'https://www.prunesrestaurant.com/'
      },
      {
        name: 'The Lawns Restaurant & Bar',
        cuisine: 'Riverside restaurant at Wildwaters Lodge with international cuisine and Nile views.',
        image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        priceRange: '$20-40',
        location: 'Jinja',
        link: 'https://www.wildwaterslodge.com/dining/'
      },
      {
        name: 'Cafesserie',
        cuisine: 'European-style cafe with pastries, light meals, and coffee in an elegant setting.',
        image: 'https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        priceRange: '$10-25',
        location: 'Kampala',
        link: 'https://www.cafesserie.com/'
      },
      {
        name: 'Mamba Point Restaurant',
        cuisine: 'Italian and international cuisine with extensive wine list and elegant atmosphere.',
        image: 'https://images.pexels.com/photos/1670732/pexels-photo-1670732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        priceRange: '$20-40',
        location: 'Kampala',
        link: 'https://www.mambapoint.com/'
      },
      {
        name: 'The Boma Entebbe',
        cuisine: 'Garden restaurant with international cuisine and colonial atmosphere.',
        image: 'https://images.pexels.com/photos/1670045/pexels-photo-1670045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        priceRange: '$15-35',
        location: 'Entebbe',
        link: 'https://www.thehotelguide.com/the-boma-entebbe/'
      },
      {
        name: 'Khana Khazana',
        cuisine: 'Authentic Indian restaurant with traditional dishes and spices.',
        image: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        priceRange: '$15-30',
        location: 'Kampala',
        link: 'https://www.khanakhazana.co.ug/'
      },
      {
        name: 'Riders Lounge',
        cuisine: 'Sports bar and grill with international menu and lively atmosphere.',
        image: 'https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 3,
        priceRange: '$10-25',
        location: 'Kampala',
        link: 'https://www.riderslounge.com/'
      },
      {
        name: 'Gorilla Forest Camp Restaurant',
        cuisine: 'Safari lodge restaurant with international cuisine and forest views in Bwindi.',
        image: 'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 5,
        priceRange: '$50-100',
        location: 'Bwindi Impenetrable National Park',
        link: '  https://www.sanctuaryretreats.com/uganda-lodges-gorilla-forest-camp/dining'
      },
      {
        name: 'Nawab Restaurant',
        cuisine: 'Indian and Pakistani cuisine with authentic flavors and traditional dishes.',
        image: 'https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        priceRange: '$15-30',
        location: 'Kampala',
        link: 'https://www.nawabrestaurant.com/'
      },
      {
        name: 'Faze 2 Restaurant',
        cuisine: 'International cuisine with lake views and relaxed atmosphere in Entebbe.',
        image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 3,
        priceRange: '$10-25',
        location: 'Entebbe',
        link: 'https://www.faze2restaurant.com/'
      },
      {
        name: 'Murchison Falls Lodge Restaurant',
        cuisine: 'Safari lodge restaurant with international cuisine and river views.',
        image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        priceRange: '$20-40',
        location: 'Murchison Falls National Park',
        link: 'https://www.murchisonfallslodge.com/dining/'
      },
      {
        name: 'Bubbles O\'Leary',
        cuisine: 'Irish pub with international menu, beer, and lively atmosphere.',
        image: 'https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 3,
        priceRange: '$10-25',
        location: 'Kampala',
        link: 'https://www.bubblesoleary.com/'
      },
      {
        name: 'The Lawns at Lake Victoria Serena',
        cuisine: 'Elegant restaurant with international cuisine and lake views.',
        image: 'https://images.pexels.com/photos/1670732/pexels-photo-1670732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 5,
        priceRange: '$25-50',
        location: 'Entebbe',
        link: 'https://www.serenahotels.com/serenalakevictoria/dining/'
      },
      {
        name: 'Haandi Restaurant',
        cuisine: 'North Indian cuisine with traditional tandoori dishes and curries.',
        image: 'https://images.pexels.com/photos/1670045/pexels-photo-1670045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        priceRange: '$15-30',
        location: 'Kampala',
        link: 'https://www.haandi.co.ug/'
      }
    ]
  },
  {
    name: 'Rwanda',
    description: 'The Land of a Thousand Hills offering mountain gorilla trekking, pristine national parks, and a remarkable story of recovery and conservation.',
    image: 'https://images.pexels.com/photos/6894388/pexels-photo-6894388.jpeg', // Kigali Genocide Memorial
    region: 'East Africa',
    population: '13 million',
    attractions: [
      {
        name: 'Volcanoes National Park',
        description: 'Home to endangered mountain gorillas and golden monkeys, offering unforgettable trekking experiences in the Virunga Mountains.',
        image: 'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Northern Rwanda',
        link: 'https://www.visitrwanda.com/destinations/volcanoes-national-park/'
      },
      {
        name: 'Nyungwe Forest National Park',
        description: 'Ancient rainforest with 13 primate species, 300 bird species, and East Africa\'s only canopy walkway.',
        image: 'https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Southwestern Rwanda',
        link: 'https://www.visitrwanda.com/destinations/nyungwe-national-park/'
      },
      {
        name: 'Kigali Genocide Memorial',
        description: 'Powerful memorial honoring the victims of the 1994 genocide and educating visitors about Rwanda\'s history.',
        image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Kigali',
        link: 'https://www.kgm.rw/'
      },
      {
        name: 'Lake Kivu',
        description: 'Beautiful inland sea with beaches, islands, and water activities along Rwanda\'s western border.',
        image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Western Rwanda',
        link: 'https://www.visitrwanda.com/destinations/lake-kivu/'
      },
      {
        name: 'Akagera National Park',
        description: 'Big Five safari destination with savanna, lakes, and wetlands in eastern Rwanda.',
        image: 'https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Eastern Rwanda',
        link: 'https://www.visitrwanda.com/destinations/akagera-national-park/'
      },
      {
        name: 'Ethnographic Museum',
        description: 'Rwanda\'s most important cultural museum showcasing the country\'s traditions, crafts, and way of life.',
        image: 'https://images.pexels.com/photos/1670732/pexels-photo-1670732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Huye',
        link: 'https://www.museum.gov.rw/index.php?id=69'
      },
      {
        name: 'Dian Fossey Tomb',
        description: 'Memorial to the famous primatologist who dedicated her life to mountain gorilla conservation.',
        image: 'https://images.pexels.com/photos/1670045/pexels-photo-1670045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Volcanoes National Park',
        link: 'https://www.visitrwanda.com/destinations/dian-fossey-tomb/'
      },
      {
        name: 'Inema Arts Center',
        description: 'Contemporary art gallery showcasing Rwanda\'s vibrant art scene with exhibitions and workshops.',
        image: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Kigali',
        link: 'https://www.inemaartcenter.com/'
      },
      {
        name: 'Iby\'Iwacu Cultural Village',
        description: 'Interactive cultural experience showcasing traditional Rwandan life, dance, and crafts.',
        image: 'https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Musanze',
        link: 'https://www.ibyiwacuculturalvillage.org/'
      },
      {
        name: 'Mount Karisimbi',
        description: 'Highest peak in the Virunga Mountains offering challenging hikes and spectacular views.',
        image: 'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Volcanoes National Park',
        link: 'https://www.visitrwanda.com/destinations/mount-karisimbi/'
      },
      {
        name: 'Ntarama Church Genocide Memorial',
        description: 'Powerful memorial site where thousands sought refuge during the 1994 genocide.',
        image: 'https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Bugesera District',
        link: 'https://www.cnlg.gov.rw/index.php?id=87'
      },
      {
        name: 'Kigali Convention Centre',
        description: 'Iconic modern building inspired by traditional Rwandan design, illuminated at night.',
        image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Kigali',
        link: 'https://www.kigalicc.com/'
      },
      {
        name: 'Twin Lakes Burera and Ruhondo',
        description: 'Scenic crater lakes surrounded by terraced hills and volcanic peaks.',
        image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Northern Rwanda',
        link: 'https://www.visitrwanda.com/destinations/twin-lakes/'
      },
      {
        name: 'Gishwati-Mukura National Park',
        description: 'Rwanda\'s newest national park with rainforest conservation and chimpanzee populations.',
        image: 'https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Western Rwanda',
        link: 'https://www.visitrwanda.com/destinations/gishwati-mukura-national-park/'
      },
      {
        name: 'Nyanza Royal Palace',
        description: 'Traditional palace of Rwanda\'s last king with cultural exhibits and traditional architecture.',
        image: 'https://images.pexels.com/photos/1670732/pexels-photo-1670732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Southern Rwanda',
        link: 'https://www.museum.gov.rw/index.php?id=70'
      },
      {
        name: 'Bisesero Genocide Memorial',
        description: 'Memorial site commemorating Tutsis who resisted during the 1994 genocide.',
        image: 'https://images.pexels.com/photos/1670045/pexels-photo-1670045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Western Rwanda',
        link: 'https://www.cnlg.gov.rw/index.php?id=87'
      },
      {
        name: 'Kimironko Market',
        description: 'Vibrant local market with colorful textiles, crafts, fresh produce, and authentic atmosphere.',
        image: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Kigali',
        link: 'https://www.visitrwanda.com/destinations/kimironko-market/'
      },
      {
        name: 'Congo Nile Trail',
        description: 'Hiking and biking trail along Lake Kivu with stunning scenery and cultural experiences.',
        image: 'https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Western Rwanda',
        link: 'https://www.visitrwanda.com/destinations/congo-nile-trail/'
      },
      {
        name: 'Nyamata Church Genocide Memorial',
        description: 'Powerful memorial site where thousands were killed during the 1994 genocide.',
        image: 'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Bugesera District',
        link: 'https://www.cnlg.gov.rw/index.php?id=87'
      },
      {
        name: 'Kitabi Tea Plantation',
        description: 'Tea plantation offering tours, tastings, and insights into Rwanda\'s tea production.',
        image: 'https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Southern Rwanda',
        link: 'https://www.visitrwanda.com/destinations/kitabi-tea-plantation/'
      }
    ],
    transportation: [
      {
        type: 'Gorilla Trekking Transfers',
        description: 'Luxury 4x4 vehicles with experienced drivers for transfers to gorilla trekking locations.',
        price: '$150-300',
        route: 'Kigali to Volcanoes National Park'
      },
      {
        type: 'Helicopter Tours',
        description: 'Scenic helicopter flights over Rwanda\'s landscapes and national parks.',
        price: '$400-1000',
        route: 'Kigali to Volcanoes National Park'
      },
      {
        type: 'Safari Vehicles',
        description: 'Specialized 4x4 vehicles for game drives in Akagera National Park.',
        price: '$150-300/day',
        route: 'Akagera National Park'
      },
      {
        type: 'Boat Cruises',
        description: 'Scenic boat trips on Lake Kivu with stops at islands and beaches.',
        price: '$50-150',
        route: 'Lake Kivu'
      }
    ],
    hotels: [
      {
        name: 'Bisate Lodge',
        description: 'Architectural masterpiece with luxury forest villas nestled in an eroded volcanic cone near Volcanoes National Park.',
        image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 5,
        price: '$1500-3000',
        location: 'Volcanoes National Park',
        bookingLink: 'https://www.wilderness-safaris.com/our-camps/camps/bisate-lodge'
      },
      {
        name: 'One&Only Nyungwe House',
        description: 'Luxury lodge set on a working tea plantation on the edge of Nyungwe Forest National Park.',
        image: 'https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 5,
        price: '$1000-2000',
        location: 'Nyungwe Forest National Park',
        bookingLink: 'https://www.oneandonlyresorts.com/nyungwe-house'
      },
      {
        name: 'Kigali Serena Hotel',
        description: 'Luxury hotel in the heart of Kigali with pool, spa, and multiple dining options.',
        image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 5,
        price: '$200-400',
        location: 'Kigali',
        bookingLink: 'https://www.serenahotels.com/serenakigali/'
      },
      {
        name: 'Sabyinyo Silverback Lodge',
        description: 'Luxury lodge at the foothills of the Virunga Volcanoes with stunning views and gorilla trekking access.',
        image: 'https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 5,
        price: '$1000-2000',
        location: 'Volcanoes National Park',
        bookingLink: 'https://www.governorscamp.com/sabyinyo-silverback-lodge/'
      },
      {
        name: 'The Retreat by Heaven',
        description: 'Luxury boutique hotel in Kigali with saltwater pool, spa, and farm-to-table dining.',
        image: 'https://images.pexels.com/photos/1670732/pexels-photo-1670732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 5,
        price: '$300-600',
        location: 'Kigali',
        bookingLink: 'https://www.heavenrwanda.com/the-retreat/'
      },
      {
        name: 'Magashi Camp',
        description: 'Luxury tented camp in Akagera National Park with views over Lake Rwanyakazinga.',
        image: 'https://images.pexels.com/photos/1670045/pexels-photo-1670045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 5,
        price: '$800-1600',
        location: 'Akagera National Park',
        bookingLink: 'https://www.wilderness-safaris.com/our-camps/camps/magashi-camp'
      },
      {
        name: 'Virunga Lodge',
        description: 'Eco-luxury lodge with panoramic views of the Virunga Volcanoes and Lakes Burera and Ruhondo.',
        image: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 5,
        price: '$800-1600',
        location: 'Volcanoes National Park',
        bookingLink: 'https://www.volcanoessafaris.com/virunga-lodge/'
      },
      {
        name: 'Radisson Blu Hotel & Convention Centre',
        description: 'Modern luxury hotel adjacent to the iconic Kigali Convention Centre with comprehensive amenities.',
        image: 'https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 5,
        price: '$200-400',
        location: 'Kigali',
        bookingLink: 'https://www.radissonhotels.com/en-us/hotels/radisson-blu-kigali'
      },
      {
        name: 'Cormoran Lodge',
        description: 'Rustic-luxury lodge built on stilts overlooking Lake Kivu with private terraces.',
        image: 'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        price: '$150-300',
        location: 'Lake Kivu',
        bookingLink: 'https://www.cormoranlodge.com/'
      },
      {
        name: 'Mantis Kivu Marina Bay Hotel',
        description: 'Luxury hotel on the shores of Lake Kivu with marina, pool, and water activities.',
        image: 'https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        price: '$200-400',
        location: 'Rusizi',
        bookingLink: 'https://www.mantiscollection.com/hotel/mantis-kivu-marina-bay/'
      },
      {
        name: 'Marriott Kigali',
        description: 'Modern luxury hotel in the city center with multiple restaurants, pool, and business facilities.',
        image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 5,
        price: '$200-400',
        location: 'Kigali',
        bookingLink: 'https://www.marriott.com/hotels/travel/kglmc-kigali-marriott-hotel/'
      },
      {
        name: 'Gorilla\'s Nest',
        description: 'Luxury lodge with private villas nestled in a eucalyptus forest near Volcanoes National Park.',
        image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 5,
        price: '$1500-3000',
        location: 'Volcanoes National Park',
        bookingLink: 'https://www.oneandonlyresorts.com/gorillas-nest'
      },
      {
        name: 'Lake Kivu Serena Hotel',
        description: 'Luxury resort on the shores of Lake Kivu with beach access, pool, and water sports.',
        image: 'https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        price: '$200-400',
        location: 'Gisenyi',
        bookingLink: 'https://www.serenahotels.com/serenalakekivu/'
      },
      {
        name: 'Five Volcanoes Boutique Hotel',
        description: 'Charming boutique hotel with garden cottages and mountain views near Volcanoes National Park.',
        image: 'https://images.pexels.com/photos/1670732/pexels-photo-1670732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        price: '$200-400',
        location: 'Musanze',
        bookingLink: 'https://www.fivevolcanoes.com/'
      },
      {
        name: 'Nyungwe Top View Hill Hotel',
        description: 'Mountain lodge with panoramic views of Nyungwe Forest and tea plantations.',
        image: 'https://images.pexels.com/photos/1670045/pexels-photo-1670045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 3,
        price: '$100-200',
        location: 'Nyungwe Forest',
        bookingLink: 'https://www.nyungwetopviewhotel.com/'
      },
      {
        name: 'Akagera Game Lodge',
        description: 'Safari lodge overlooking Lake Ihema in Akagera National Park with pool and game viewing.',
        image: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 3,
        price: '$150-300',
        location: 'Akagera National Park',
        bookingLink: 'https://www.akageragamelodge.com/'
      },
      {
        name: 'Lemigo Hotel',
        description: 'Modern hotel in Kigali with pool, multiple restaurants, and business facilities.',
        image: 'https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        price: '$150-300',
        location: 'Kigali',
        bookingLink: 'https://www.lemigohotel.com/'
      },
      {
        name: 'Mountain Gorilla View Lodge',
        description: 'Comfortable lodge with individual cottages and fireplaces near Volcanoes National Park.',
        image: 'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 3,
        price: '$200-400',
        location: 'Volcanoes National Park',
        bookingLink: 'https://www.mountaingorillalodge.com/'
      },
      {
        name: 'Kigali Marriott Apartments',
        description: 'Luxury serviced apartments in Kigali with full kitchens and hotel amenities.',
        image: 'https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        price: '$150-300',
        location: 'Kigali',
        bookingLink: 'https://www.marriott.com/hotels/travel/kglka-marriott-executive-apartments-kigali/'
      },
      {
        name: 'Ruzizi Tented Lodge',
        description: 'Eco-friendly tented lodge on the shores of Lake Ihema in Akagera National Park.',
        image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        price: '$300-600',
        location: 'Akagera National Park',
        bookingLink: 'https://www.africanparks.org/the-parks/akagera/visitor-information/accommodation/ruzizi-tented-lodge'
      }
    ],
    restaurants: [
      {
        name: 'Heaven Restaurant & Boutique Hotel',
        cuisine: 'Farm-to-table international cuisine with Rwandan influences and social enterprise mission.',
        image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        priceRange: '$15-35',
        location: 'Kigali',
        link: 'https://www.heavenrwanda.com/restaurant/'
      },
      {
        name: 'Fusion Restaurant',
        cuisine: 'Asian fusion cuisine with sushi, Thai, and Chinese specialties in an elegant setting.',
        image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        priceRange: '$20-40',
        location: 'Kigali',
        link: 'https://www.fusionrestaurant.rw/'
      },
      {
        name: 'Poivre Noir',
        cuisine: 'French and Belgian cuisine with fine dining atmosphere and extensive wine list.',
        image: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        priceRange: '$25-50',
        location: 'Kigali',
        link: 'https://www.poivrenoir.rw/'
      },
      {
        name: 'Repub Lounge',
        cuisine: 'Contemporary Rwandan cuisine with modern presentation and rooftop views of Kigali.',
        image: 'https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        priceRange: '$15-30',
        location: 'Kigali',
        link: 'https://www.republounge.com/'
      },
      {
        name: 'Sakae',
        cuisine: 'Authentic Japanese restaurant with sushi, sashimi, and traditional Japanese dishes.',
        image: 'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        priceRange: '$20-40',
        location: 'Kigali',
        link: 'https://www.sakae.rw/'
      },
      {
        name: 'Ubumwe Grande Hotel Rooftop',
        cuisine: 'International cuisine with panoramic views of Kigali from the rooftop restaurant.',
        image: 'https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        priceRange: '$20-40',
        location: 'Kigali',
        link: 'https://www.ubumwegrande.com/dining/'
      },
      {
        name: 'Khana Khazana',
        cuisine: 'Authentic Indian restaurant with traditional dishes and spices.',
        image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        priceRange: '$15-30',
        location: 'Kigali',
        link: 'https://www.khanakhazana.rw/'
      },
      {
        name: 'Pili Pili',
        cuisine: 'Beach restaurant on Lake Kivu with international menu and relaxed atmosphere.',
        image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        priceRange: '$15-30',
        location: 'Gisenyi',
        link: 'https://www.pilipili.rw/'
      },
      {
        name: 'Serena Kigali Restaurant',
        cuisine: 'Fine dining at Kigali Serena Hotel with international cuisine and elegant atmosphere.',
        image: 'https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 5,
        priceRange: '$25-50',
        location: 'Kigali',
        link: 'https://www.serenahotels.com/serenakigali/dining/'
      },
      {
        name: 'Soko Restaurant',
        cuisine: 'Farm-to-table restaurant at The Retreat with organic ingredients and international menu.',
        image: 'https://images.pexels.com/photos/1670732/pexels-photo-1670732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        priceRange: '$20-40',
        location: 'Kigali',
        link: 'https://www.heavenrwanda.com/the-retreat/dining/'
      },
      {
        name: 'Bistro',
        cuisine: 'European-style bistro with international menu, coffee, and pastries.',
        image: 'https://images.pexels.com/photos/1670045/pexels-photo-1670045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        priceRange: '$10-25',
        location: 'Kigali',
        link: 'https://www.bistro.rw/'
      },
      {
        name: 'Meze Fresh',
        cuisine: 'Mediterranean-inspired fast-casual restaurant with healthy options and fresh ingredients.',
        image: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        priceRange: '$8-20',
        location: 'Kigali',
        link: 'https://www.mezefresh.com/'
      },
      {
        name: 'Brachetto',
        cuisine: 'Italian restaurant with authentic pasta, pizza, and Mediterranean specialties.',
        image: 'https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        priceRange: '$15-35',
        location: 'Kigali',
        link: 'https://www.brachetto.rw/'
      },
      {
        name: 'Nyungwe Forest Lodge Restaurant',
        cuisine: 'Luxury lodge restaurant with international cuisine and forest views.',
        image: 'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 5,
        priceRange: '$30-60',
        location: 'Nyungwe Forest National Park',
        link: 'https://www.oneandonlyresorts.com/nyungwe-house/dining'
      },
      {
        name: 'Bourbon Coffee',
        cuisine: 'Rwandan coffee chain with light meals, pastries, and specialty coffee.',
        image: 'https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        priceRange: '$5-15',
        location: 'Multiple locations',
        link: 'https://www.bourboncoffee.rw/'
      },
      {
        name: 'Sabyinyo Silverback Lodge Restaurant',
        cuisine: 'Luxury lodge restaurant with international cuisine and views of the Virunga Volcanoes.',
        image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 5,
        priceRange: '$50-100',
        location: 'Volcanoes National Park',
        link: 'https://www.governorscamp.com/sabyinyo-silverback-lodge/dining'
      },
      {
        name: 'Magda Café',
        cuisine: 'Casual café with international menu, coffee, and relaxed atmosphere.',
        image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 3,
        priceRange: '$8-20',
        location: 'Kigali',
        link: 'https://www.magdacafe.rw/'
      },
      {
        name: 'Virunga Bistro',
        cuisine: 'Restaurant with international menu and views of the Virunga Mountains.',
        image: 'https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        priceRange: '$15-35',
        location: 'Musanze',
        link: 'https://www.virungabistro.rw/'
      },
      {
        name: 'Iriba Bar',
        cuisine: 'Elegant bar and restaurant at Kigali Marriott with international menu and cocktails.',
        image: 'https://images.pexels.com/photos/1670732/pexels-photo-1670732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        priceRange: '$15-35',
        location: 'Kigali',
        link: 'https://www.marriott.com/hotels/hotel-information/restaurant/kglmc-kigali-marriott-hotel/'
      },
      {
        name: 'Kivu Lake View Restaurant',
        cuisine: 'Lakeside restaurant with fresh fish, international menu, and sunset views.',
        image: 'https://images.pexels.com/photos/1670045/pexels-photo-1670045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        priceRange: '$15-30',
        location: 'Gisenyi',
        link: 'https://www.kivulakeview.rw/'
      }
    ]
  },
  {
    name: 'Senegal',
    description: 'Vibrant West African nation offering rich cultural heritage, historic colonial architecture, diverse wildlife, and stunning Atlantic coastlines.',
    image: 'https://images.pexels.com/photos/8828205/pexels-photo-8828205.jpeg', // African Renaissance Monument, Dakar
    region: 'West Africa',
    population: '17 million',
    attractions: [
      {
        name: 'Gorée Island',
        description: 'UNESCO World Heritage site and former slave trading post with powerful historical significance and colonial architecture.',
        image: 'https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Off Dakar',
        link: 'https://whc.unesco.org/en/list/26/'
      },
      {
        name: 'Djoudj National Bird Sanctuary',
        description: 'UNESCO World Heritage site and one of the world\'s most important bird sanctuaries with over 3 million migratory birds.',
        image: 'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Northern Senegal',
        link: 'https://whc.unesco.org/en/list/25/'
      },
      {
        name: 'Pink Lake (Lac Rose)',
        description: 'Unique pink-hued salt lake where traditional salt harvesting continues and visitors can float in the buoyant waters.',
        image: 'https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Near Dakar',
        link: 'https://www.visitsenegal.sn/en/destinations/pink-lake/'
      },
      {
        name: 'African Renaissance Monument',
        description: 'Tallest statue in Africa at 49 meters, offering panoramic views of Dakar and the Atlantic Ocean.',
        image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Dakar',
        link: 'https://www.visitsenegal.sn/en/destinations/african-renaissance-monument/'
      },
      {
        name: 'Niokolo-Koba National Park',
        description: 'UNESCO World Heritage site and largest national park in Senegal with diverse wildlife including lions, elephants, and chimpanzees.',
        image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Southeastern Senegal',
        link: 'https://whc.unesco.org/en/list/153/'
      },
      {
        name: 'Saint-Louis',
        description: 'UNESCO World Heritage site and former colonial capital with distinctive architecture, jazz festival, and vibrant culture.',
        image: 'https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Northern Senegal',
        link: 'https://whc.unesco.org/en/list/956/'
      },
      {
        name: 'Saloum Delta',
        description: 'UNESCO World Heritage site with mangrove forests, islands, and traditional fishing communities.',
        image: 'https://images.pexels.com/photos/1670732/pexels-photo-1670732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Central Senegal',
        link: 'https://whc.unesco.org/en/list/1359/'
      },
      {
        name: 'Casamance Region',
        description: 'Lush southern region with pristine beaches, traditional villages, and distinct culture.',
        image: 'https://images.pexels.com/photos/1670045/pexels-photo-1670045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Southern Senegal',
        link: 'https://www.visitsenegal.sn/en/destinations/casamance/'
      },
      {
        name: 'Dakar',
        description: 'Vibrant capital city with museums, markets, nightlife, and colonial architecture.',
        image: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Western Senegal',
        link: 'https://www.visitsenegal.sn/en/destinations/dakar/'
      },
      {
        name: 'Touba Grand Mosque',
        description: 'One of Africa\'s largest mosques and the spiritual center of the Mouride Brotherhood.',
        image: 'https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Touba',
        link: 'https://www.visitsenegal.sn/en/destinations/touba/'
      },
      {
        name: 'Bandia Wildlife Reserve',
        description: 'Private reserve near Dakar with reintroduced wildlife including rhinos, giraffes, and antelopes.',
        image: 'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Near Dakar',
        link: 'https://www.visitsenegal.sn/en/destinations/bandia-reserve/'
      },
      {
        name: 'Joal-Fadiouth',
        description: 'Unique shell island connected by bridge to the mainland with Christian-Muslim cemetery.',
        image: 'https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Thiès Region',
        link: 'https://www.visitsenegal.sn/en/destinations/joal-fadiouth/'
      },
      {
        name: 'Fathala Wildlife Reserve',
        description: 'Private reserve with safari experiences and reintroduced wildlife including rhinos and giraffes.',
        image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Kaolack Region',
        link: 'https://www.fathalawildlife.com/'
      },
      {
        name: 'Lompoul Desert',
        description: 'Small Saharan-like desert with orange sand dunes and traditional nomadic camp experiences.',
        image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Louga Region',
        link: 'https://www.visitsenegal.sn/en/destinations/lompoul-desert/'
      },
      {
        name: 'Île de N\'Gor',
        description: 'Small island off Dakar with beaches, surfing, and relaxed atmosphere.',
        image: 'https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Dakar',
        link: 'https://www.visitsenegal.sn/en/destinations/ile-de-ngor/'
      },
      {
        name: 'Saly',
        description: 'Popular beach resort town with luxury hotels, water sports, and nightlife.',
        image: 'https://images.pexels.com/photos/1670732/pexels-photo-1670732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Thiès Region',
        link: 'https://www.visitsenegal.sn/en/destinations/saly/'
      },
      {
        name: 'Popenguine Nature Reserve',
        description: 'Coastal reserve with cliffs, beaches, and religious significance as pilgrimage site.',
        image: 'https://images.pexels.com/photos/1670045/pexels-photo-1670045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Thiès Region',
        link: 'https://www.visitsenegal.sn/en/destinations/popenguine/'
      },
      {
        name: 'Toubab Dialaw',
        description: 'Artistic fishing village with distinctive architecture, beaches, and cultural center.',
        image: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Thiès Region',
        link: 'https://www.visitsenegal.sn/en/destinations/toubab-dialaw/'
      },
      {
        name: 'Palmarin',
        description: 'Coastal area with traditional salt harvesting, baobab forests, and pristine beaches.',
        image: 'https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Fatick Region',
        link: 'https://www.visitsenegal.sn/en/destinations/palmarin/'
      },
      {
        name: 'Île de Gorée Museum House of Slaves',
        description: 'Powerful museum documenting the Atlantic slave trade in a former slave house.',
        image: 'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Gorée Island',
        link: 'https://www.visitsenegal.sn/en/destinations/house-of-slaves/'
      }
    ],
    transportation: [
      {
        type: 'Private Car & Driver',
        description: 'Luxury vehicle with professional driver for customized tours and intercity travel.',
        price: '$100-250/day',
        route: 'Dakar City Tour & Beyond'
      },
      {
        type: 'Boat Excursions',
        description: 'Private boat trips to islands, delta regions, and coastal attractions.',
        price: '$80-200',
        route: 'Dakar to Gorée Island'
      },
      {
        type: 'Desert Excursions',
        description: '4x4 vehicles for desert experiences in Lompoul with experienced guides.',
        price: '$150-300/day',
        route: 'Lompoul Desert'
      },
      {
        type: 'Domestic Flights',
        description: 'Time-saving flights between major destinations and remote areas.',
        price: '$150-300',
        route: 'Dakar to Ziguinchor (Casamance)'
      }
    ],
    hotels: [
      {
        name: 'Radisson Blu Hotel Dakar Sea Plaza',
        description: 'Luxury hotel overlooking the Atlantic Ocean with infinity pool, spa, and multiple restaurants.',
        image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 5,
        price: '$200-400',
        location: 'Dakar',
        bookingLink: 'https://www.radissonhotels.com/en-us/hotels/radisson-blu-dakar-sea-plaza'
      },
      {
        name: 'Terrou-Bi Beach & Casino Resort',
        description: 'Beachfront resort with private beach, casino, multiple restaurants, and luxury amenities.',
        image: 'https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 5,
        price: '$200-400',
        location: 'Dakar',
        bookingLink: 'https://www.terroubi.com/'
      },
      {
        name: 'Le Lamantin Beach Resort & Spa',
        description: 'Luxury beachfront resort in Saly with spa, multiple pools, and water sports.',
        image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 5,
        price: '$250-500',
        location: 'Saly',
        bookingLink: 'https://www.lelamantin.com/'
      },
      {
        name: 'Pullman Dakar Teranga',
        description: 'Upscale hotel in the heart of Dakar with ocean views, pool, and multiple dining options.',
        image: 'https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        price: '$150-300',
        location: 'Dakar',
        bookingLink: 'https://www.pullman-dakar-teranga.com/'
      },
      {
        name: 'Royal Lodge Niokolo-Koba',
        description: 'Safari lodge in Niokolo-Koba National Park with wildlife viewing and natural surroundings.',
        image: 'https://images.pexels.com/photos/1670732/pexels-photo-1670732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        price: '$150-300',
        location: 'Niokolo-Koba National Park',
        bookingLink: 'https://www.royallodge.sn/'
      },
      {
        name: 'Fathala Wildlife Reserve Lodge',
        description: 'Luxury safari tents in a wildlife reserve with game drives and wildlife viewing.',
        image: 'https://images.pexels.com/photos/1670045/pexels-photo-1670045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        price: '$200-400',
        location: 'Kaolack Region',
        bookingLink: 'https://www.fathalawildlife.com/accommodation/'
      },
      {
        name: 'Hotel de la Poste',
        description: 'Historic colonial hotel in Saint-Louis with traditional architecture and river views.',
        image: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        price: '$100-200',
        location: 'Saint-Louis',
        bookingLink: 'https://www.hoteldelaposte-saintlouis.com/'
      },
      {
        name: 'Laguna Beach Hotel & Spa',
        description: 'Beachfront hotel in the Saly resort area with spa, pool, and water activities.',
        image: 'https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        price: '$150-300',
        location: 'Saly',
        bookingLink: 'https://www.laguna-beach-hotel.com/'
      },
      {
        name: 'Lodge des Collines de Niassam',
        description: 'Unique eco-lodge with tree houses, floating huts, and traditional architecture in the Sine Saloum Delta.',
        image: 'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        price: '$150-300',
        location: 'Sine Saloum Delta',
        bookingLink: 'https://www.niassam.com/'
      },
      {
        name: 'Novotel Dakar',
        description: 'Modern hotel in the business district of Dakar with pool, restaurant, and city views.',
        image: 'https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        price: '$120-250',
        location: 'Dakar',
        bookingLink: 'https://www.novotel.com/gb/hotel/0529-novotel-dakar/index.shtml'
      },
      {
        name: 'Keur Saloum',
        description: 'Eco-lodge in the Sine Saloum Delta with traditional architecture and boat excursions.',
        image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 3,
        price: '$80-160',
        location: 'Sine Saloum Delta',
        bookingLink: 'https://www.keursaloum.com/'
      },
      {
        name: 'Ecolodge de Lompoul',
        description: 'Desert camp with traditional Mauritanian tents in the Lompoul Desert dunes.',
        image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        price: '$100-200',
        location: 'Lompoul Desert',
        bookingLink: 'https://www.ecolodge-senegal.com/'
      },
      {
        name: 'La Maison Rose',
        description: 'Boutique hotel in Gorée Island with colonial architecture and historical significance.',
        image: 'https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 3,
        price: '$80-160',
        location: 'Gorée Island',
        bookingLink: 'https://www.lamaisonrose.sn/'
      },
      {
        name: 'Hotel Djoloff',
        description: 'Boutique hotel in Dakar with traditional architecture, rooftop terrace, and cultural atmosphere.',
        image: 'https://images.pexels.com/photos/1670732/pexels-photo-1670732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 3,
        price: '$80-160',
        location: 'Dakar',
        bookingLink: 'https://www.hoteldjoloff.com/'
      },
      {
        name: 'Le Paradis du Pêcheur',
        description: 'Riverside lodge in Casamance with traditional architecture and boat excursions.',
        image: 'https://images.pexels.com/photos/1670045/pexels-photo-1670045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 3,
        price: '$80-160',
        location: 'Casamance',
        bookingLink: 'https://www.paradisdupecheur.com/'
      },
      {
        name: 'Cap Skirring Hotel',
        description: 'Beachfront hotel in Casamance with ocean views, pool, and water activities.',
        image: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 3,
        price: '$100-200',
        location: 'Cap Skirring',
        bookingLink: 'https://www.capskirringhotel.com/'
      },
      {
        name: 'Résidence Les Jardins de Toubab Dialaw',
        description: 'Artistic eco-lodge in Toubab Dialaw with unique architecture and ocean views.',
        image: 'https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 3,
        price: '$60-120',
        location: 'Toubab Dialaw',
        bookingLink: 'https://www.lesjardinsdetoubabdialaw.com/'
      },
      {
        name: 'Kaira Kamp',
        description: 'Eco-lodge in the Sine Saloum Delta with traditional huts and boat excursions.',
        image: 'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 3,
        price: '$60-120',
        location: 'Sine Saloum Delta',
        bookingLink: 'https://www.kairakamp.com/'
      },
      {
        name: 'Hotel Mermoz',
        description: 'Beachfront hotel in Saint-Louis with colonial architecture and ocean views.',
        image: 'https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 3,
        price: '$80-160',
        location: 'Saint-Louis',
        bookingLink: 'https://www.hotelmermoz.com/'
      },
      {
        name: 'Souimanga Lodge',
        description: 'Luxury eco-lodge in the Sine Saloum Delta with overwater bungalows and bird watching.',
        image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        price: '$200-400',
        location: 'Sine Saloum Delta',
        bookingLink: 'https://www.souimanga-lodge.com/'
      }
    ],
    restaurants: [
      {
        name: 'Le Lagon 1',
        cuisine: 'Upscale seafood restaurant with ocean views, fresh catches, and international influences.',
        image: 'https://h1.nu/15sTX',
        rating: 4,
        priceRange: '$20-40',
        location: 'Dakar',
        link: 'https://h1.nu/19P9b'
      },
      {
        name: 'La Fourchette',
        cuisine: 'French bistro with traditional dishes and elegant atmosphere in Dakar.',
        image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        priceRange: '$20-40',
        location: 'Dakar',
        link: 'https://h1.nu/19PcU'
      },
      {
        name: 'Clube Naval',
        cuisine: 'Historic waterfront restaurant with Portuguese and Senegalese cuisine.',
        image: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        priceRange: '$20-40',
        location: 'Dakar',
        link: 'https://www.clubenaval.com/'
      },
      {
        name: 'Le Cabanon Dakar',
        cuisine: 'Beachfront restaurant with fresh seafood and relaxed atmosphere.',
        image: 'https://h1.nu/19PfE',
        rating: 4,
        priceRange: '$15-35',
        location: 'Dakar',
        link: 'https://www.lecabanondakar.org/'
      },
      {
        name: 'Alkimia',
        cuisine: 'Contemporary restaurant with innovative cuisine and modern atmosphere.',
        image: 'https://h1.nu/15t2G',
        rating: 4,
        priceRange: '$15-30',
        location: 'Dakar',
        link: 'https://alkimiadakar.com/'
      },
      {
        name: 'Restaurant La Pointe des Almadies',
        cuisine: 'Upscale restaurant with panoramic ocean views and French-Senegalese cuisine.',
        image: 'https://h1.nu/15t4y',
        rating: 4,
        priceRange: '$20-40',
        location: 'Dakar',
        link: 'https://h1.nu/19Pk0'
      },
      {
        name: 'Caravela',
        cuisine: 'Portuguese and Senegalese cuisine with seafood specialties and ocean views.',
        image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        priceRange: '$20-40',
        location: 'Saint-Louis',
        link: 'https://www.caravela.com/'
      },
      {
        name: 'Restaurante Sabores',
        cuisine: 'Traditional Senegalese cuisine with local flavors and ingredients.',
        image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 3,
        priceRange: '$10-25',
        location: 'Dakar',
        link: 'https://www.sabores.com/'
      },
      {
        name: 'Docks',
        cuisine: 'Upscale restaurant in Dakar with international cuisine and waterfront views.',
        image: 'https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        priceRange: '$25-50',
        location: 'Dakar',
        link: 'https://www.docks.com/'
      },
      {
        name: 'Restaurante Piri Piri',
        cuisine: 'Portuguese-Senegalese restaurant specializing in piri piri chicken and seafood.',
        image: 'https://images.pexels.com/photos/1670732/pexels-photo-1670732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        priceRange: '$15-30',
        location: 'Dakar',
        link: 'https://www.piripiri.com/'
      },
      {
        name: 'Dolphin Dhow',
        cuisine: 'Seafood restaurant with dhow boat dining experiences in Saly.',
        image: 'https://images.pexels.com/photos/1670045/pexels-photo-1670045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        priceRange: '$20-40',
        location: 'Saly',
        link: 'https://www.dolphindhow.com/'
      },
      {
        name: 'Restaurante Ilha',
        cuisine: 'Seafood restaurant on Gorée Island with historic setting and fresh catches.',
        image: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        priceRange: '$15-35',
        location: 'Gorée Island',
        link: 'https://www.restauranteilha.com/'
      },
      {
        name: 'Tofo Tofo',
        cuisine: 'Beach restaurant in Saly with seafood, international cuisine, and ocean views.',
        image: 'https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 3,
        priceRange: '$15-30',
        location: 'Saly',
        link: 'https://www.tofotofo.com/'
      },
      {
        name: 'Restaurante Escondidinho',
        cuisine: 'Traditional Portuguese restaurant in Dakar with authentic flavors and atmosphere.',
        image: 'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        priceRange: '$20-40',
        location: 'Dakar',
        link: 'https://www.escondidinho.com/'
      },
      {
        name: 'Beira-Mar',
        cuisine: 'Seafood restaurant in Saint-Louis with ocean views and fresh local catches.',
        image: 'https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 3,
        priceRange: '$15-30',
        location: 'Saint-Louis',
        link: 'https://www.beiramar.com/'
      },
      {
        name: 'Gorée Island Café',
        cuisine: 'Historic café on Gorée Island with traditional Senegalese dishes and colonial atmosphere.',
        image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 3,
        priceRange: '$10-25',
        location: 'Gorée Island',
        link: 'https://www.goreeislandcafe.com/'
      },
      {
        name: 'Casamance River Lodge Restaurant',
        cuisine: 'Riverside restaurant in Casamance with fresh fish and regional specialties.',
        image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 3,
        priceRange: '$15-30',
        location: 'Casamance',
        link: 'https://www.casamanceriverlodge.com/restaurant/'
      },
      {
        name: 'Niokolo-Koba Lodge Restaurant',
        cuisine: 'Safari lodge restaurant with game meat and traditional dishes.',
        image: 'https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 3,
        priceRange: '$15-30',
        location: 'Niokolo-Koba National Park',
        link: 'https://www.niokolokoba.com/restaurant/'
      },
      {
        name: 'Marisqueira Tropic',
        cuisine: 'Seafood restaurant in Dakar with Portuguese influences and fresh catches.',
        image: 'https://images.pexels.com/photos/1670732/pexels-photo-1670732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        priceRange: '$20-40',
        location: 'Dakar',
        link: 'https://www.marisqueiratropic.com/'
      },
      {
        name: 'Flamingo Bay Restaurant',
        cuisine: 'Beachfront restaurant in Saly with international cuisine and ocean views.',
        image: 'https://images.pexels.com/photos/1670045/pexels-photo-1670045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        priceRange: '$20-40',
        location: 'Saly',
        link: 'https://www.flamingobay.com/restaurant/'
      }
    ]
  },
  {
    name: 'Madagascar',
    description: 'The world\'s fourth-largest island offering unique wildlife found nowhere else, including lemurs and baobabs, alongside pristine beaches and diverse landscapes.',
    image: 'https://images.pexels.com/photos/9967643/pexels-photo-9967643.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    region: 'East Africa',
    population: '28 million',
    attractions: [
      {
        name: 'Avenue of the Baobabs',
        description: 'Iconic landscape with ancient baobab trees lining a dirt road, especially spectacular at sunset.',
        image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Western Madagascar',
        link: 'https://www.madagascar-tourisme.com/en/what-to-do/national-parks-and-reserves/avenue-of-the-baobabs/'
      },
      {
        name: 'Tsingy de Bemaraha National Park',
        description: 'UNESCO World Heritage site featuring dramatic limestone needle-like formations, canyons, and unique wildlife.',
        image: 'https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Western Madagascar',
        link: 'https://whc.unesco.org/en/list/494/'
      },
      {
        name: 'Isalo National Park',
        description: 'Jurassic-era sandstone massif with canyons, natural pools, and diverse wildlife including ring-tailed lemurs.',
        image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Southern Madagascar',
        link: 'https://www.madagascar-tourisme.com/en/what-to-do/national-parks-and-reserves/isalo-national-park/'
      },
      {
        name: 'Andasibe-Mantadia National Park',
        description: 'Rainforest reserve famous for the indri lemur, the largest living lemur species, known for its haunting calls.',
        image: 'https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Eastern Madagascar',
        link: 'https://www.madagascar-tourisme.com/en/what-to-do/national-parks-and-reserves/andasibe-mantadia-national-park/'
      },
      {
        name: 'Nosy Be',
        description: 'Madagascar\'s premier beach destination with white sand beaches, coral reefs, and luxury resorts.',
        image: 'https://images.pexels.com/photos/1670732/pexels-photo-1670732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Northern Madagascar',
        link: 'https://www.madagascar-tourisme.com/en/where-to-go/provinces/nosy-be/'
      },
      {
        name: 'Ranomafana National Park',
        description: 'Rainforest park with hot springs, diverse lemur species, and exceptional biodiversity.',
        image: 'https://images.pexels.com/photos/1670045/pexels-photo-1670045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Southeastern Madagascar',
        link: 'https://www.madagascar-tourisme.com/en/what-to-do/national-parks-and-reserves/ranomafana-national-park/'
      },
      {
        name: 'Royal Hill of Ambohimanga',
        description: 'UNESCO World Heritage site and sacred hill with royal palace complex and historical significance.',
        image: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Near Antananarivo',
        link: 'https://whc.unesco.org/en/list/950/'
      },
      {
        name: 'Île Sainte-Marie',
        description: 'Tropical island with pirate history, whale watching, and pristine beaches.',
        image: 'https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Eastern Madagascar',
        link: 'https://www.madagascar-tourisme.com/en/where-to-go/provinces/ile-sainte-marie/'
      },
      {
        name: 'Masoala National Park',
        description: 'Madagascar\'s largest protected area with rainforest, coastal forest, and marine parks.',
        image: 'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Northeastern Madagascar',
        link: 'https://www.madagascar-tourisme.com/en/what-to-do/national-parks-and-reserves/masoala-national-park/'
      },
      {
        name: 'Ankarana National Park',
        description: 'Dramatic limestone karst formations with caves, underground rivers, and diverse wildlife.',
        image: 'https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Northern Madagascar',
        link: 'https://www.madagascar-tourisme.com/en/what-to-do/national-parks-and-reserves/ankarana-national-park/'
      },
      {
        name: 'Andringitra National Park',
        description: 'Mountainous park with Madagascar\'s highest accessible peak and diverse ecosystems.',
        image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Central Madagascar',
        link: 'https://www.madagascar-tourisme.com/en/what-to-do/national-parks-and-reserves/andringitra-national-park/'
      },
      {
        name: 'Kirindy Forest',
        description: 'Dry deciduous forest with high density of primates and the fossa, Madagascar\'s largest predator.',
        image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Western Madagascar',
        link: 'https://www.madagascar-tourisme.com/en/what-to-do/national-parks-and-reserves/kirindy-forest/'
      },
      {
        name: 'Antananarivo',
        description: 'Capital city with French colonial architecture, palaces, and vibrant markets.',
        image: 'https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Central Madagascar',
        link: 'https://www.madagascar-tourisme.com/en/where-to-go/provinces/antananarivo/'
      },
      {
        name: 'Nosy Iranja',
        description: 'Twin islands connected by a sandbar at low tide with pristine beaches and turquoise waters.',
        image: 'https://images.pexels.com/photos/1670732/pexels-photo-1670732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Northwestern Madagascar',
        link: 'https://www.madagascar-tourisme.com/en/where-to-go/provinces/nosy-iranja/'
      },
      {
        name: 'Zombitse-Vohibasia National Park',
        description: 'Transitional forest between dry and humid ecosystems with endemic birds and lemurs.',
        image: 'https://images.pexels.com/photos/1670045/pexels-photo-1670045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Southwestern Madagascar',
        link: 'https://www.madagascar-tourisme.com/en/what-to-do/national-parks-and-reserves/zombitse-vohibasia-national-park/'
      },
      {
        name: 'Lokobe National Park',
        description: 'Protected rainforest on Nosy Be island with black lemurs and panther chameleons.',
        image: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Nosy Be',
        link: 'https://www.madagascar-tourisme.com/en/what-to-do/national-parks-and-reserves/lokobe-national-park/'
      },
      {
        name: 'Amber Mountain National Park',
        description: 'Montane rainforest with waterfalls, crater lakes, and diverse wildlife.',
        image: 'https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Northern Madagascar',
        link: 'https://www.madagascar-tourisme.com/en/what-to-do/national-parks-and-reserves/amber-mountain-national-park/'
      },
      {
        name: 'Ifaty',
        description: 'Coastal village with coral reefs, spiny forest, and traditional fishing communities.',
        image: 'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Southwestern Madagascar',
        link: 'https://www.madagascar-tourisme.com/en/where-to-go/provinces/ifaty/'
      },
      {
        name: 'Berenty Private Reserve',
        description: 'Famous private reserve known for ring-tailed lemurs and dancing sifaka lemurs.',
        image: 'https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Southern Madagascar',
        link: 'https://www.madagascar-tourisme.com/en/what-to-do/national-parks-and-reserves/berenty-private-reserve/'
      },
      {
        name: 'Antsirabe',
        description: 'Colonial spa town with thermal baths, pousse-pousse (rickshaws), and craft markets.',
        image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Central Madagascar',
        link: 'https://www.madagascar-tourisme.com/en/where-to-go/provinces/antsirabe/'
      }
    ],
    transportation: [
      {
        type: 'Private 4x4 Vehicle',
        description: 'Essential for navigating Madagascar\'s challenging roads with experienced drivers.',
        price: '$100-250/day',
        route: 'Cross-Country Exploration'
      },
      {
        type: 'Domestic Flights',
        description: 'Time-saving flights between major destinations and remote areas.',
        price: '$200-400',
        route: 'Antananarivo to Nosy Be'
      },
      {
        type: 'Boat Transfers',
        description: 'Private boat trips to islands and coastal attractions with experienced captains.',
        price: '$50-200',
        route: 'Nosy Be to Nosy Iranja'
      },
      {
        type: 'Guided Trekking',
        description: 'Expert guides for hiking in national parks with wildlife spotting.',
        price: '$50-150/day',
        route: 'National Park Treks'
      }
    ],
    hotels: [
      {
        name: 'Anjajavy Le Lodge',
        description: 'Luxury lodge in a private nature reserve with beachfront villas, wildlife, and exclusive experiences.',
        image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 5,
        price: '$600-1200',
        location: 'Northwestern Madagascar',
        bookingLink: 'https://www.anjajavy.com/'
      },
      {
        name: 'Constance Tsarabanjina',
        description: 'Exclusive private island resort with luxury beach villas, diving, and pristine beaches.',
        image: 'https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 5,
        price: '$800-1600',
        location: 'Nosy Be Archipelago',
        bookingLink: 'https://www.constancehotels.com/en/hotels-resorts/madagascar/tsarabanjina/'
      },
      {
        name: 'Miavana',
        description: 'Ultra-luxury private island resort with beachfront villas, helicopter access, and exclusive experiences.',
        image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 5,
        price: '$2500-5000',
        location: 'Nosy Ankao',
        bookingLink: 'https://timeandtideafrica.com/miavana/'
      },
      {
        name: 'Relais & Châteaux Maison Gallieni',
        description: 'Boutique luxury hotel in a restored colonial mansion in the heart of Antananarivo.',
        image: 'https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 5,
        price: '$200-400',
        location: 'Antananarivo',
        bookingLink: 'https://www.maisongallieni.com/'
      },
      {
        name: 'Isalo Rock Lodge',
        description: 'Modern luxury lodge built into the Isalo massif with stunning views and pool.',
        image: 'https://images.pexels.com/photos/1670732/pexels-photo-1670732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        price: '$200-400',
        location: 'Isalo National Park',
        bookingLink: 'https://www.isalorocklodge.com/'
      },
      {
        name: 'Vakona Forest Lodge',
        description: 'Rainforest lodge with bungalows, private lemur island, and nature activities.',
        image: 'https://images.pexels.com/photos/1670045/pexels-photo-1670045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        price: '$150-300',
        location: 'Andasibe',
        bookingLink: 'https://www.hotelvakona.com/'
      },
      {
        name: 'Princesse Bora Lodge & Spa',
        description: 'Luxury beach lodge on Île Sainte-Marie with spa, whale watching, and private villas.',
        image: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        price: '$200-400',
        location: 'Île Sainte-Marie',
        bookingLink: 'https://www.princesse-bora.com/'
      },
      {
        name: 'Ravintsara Wellness Hotel',
        description: 'Luxury wellness retreat in Nosy Be with spa, yoga, and beachfront location.',
        image: 'https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        price: '$200-400',
        location: 'Nosy Be',
        bookingLink: 'https://www.ravintsarahotel.com/'
      },
      {
        name: 'Le Soleil des Tsingy',
        description: 'Lodge near Tsingy de Bemaraha with pool, restaurant, and access to the limestone formations.',
        image: 'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        price: '$150-300',
        location: 'Tsingy de Bemaraha',
        bookingLink: 'https://www.lesoleildes tsingy.com/'
      },
      {
        name: 'Mantasaly Resort',
        description: 'Beachfront resort on Nosy Be with luxury villas, pool, and water activities.',
        image: 'https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        price: '$200-400',
        location: 'Nosy Be',
        bookingLink: 'https://www.mantasaly.com/'
      },
      {
        name: 'Setam Lodge',
        description: 'Eco-lodge at the entrance of Ranomafana National Park with rainforest views.',
        image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 3,
        price: '$100-200',
        location: 'Ranomafana National Park',
        bookingLink: 'https://www.setamlodge.com/'
      },
      {
        name: 'Hotel Colbert',
        description: 'Historic luxury hotel in Antananarivo with colonial architecture and modern amenities.',
        image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        price: '$100-200',
        location: 'Antananarivo',
        bookingLink: 'https://www.hotel-colbert.com/'
      },
      {
        name: 'Vanila Hotel & Spa',
        description: 'Beachfront resort in Nosy Be with spa, multiple restaurants, and water activities.',
        image: 'https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        price: '$150-300',
        location: 'Nosy Be',
        bookingLink: 'https://www.vanila-hotel.com/'
      },
      {
        name: 'Jardin du Roy',
        description: 'Luxury lodge built into the rocks near Isalo National Park with pool and restaurant.',
        image: 'https://images.pexels.com/photos/1670732/pexels-photo-1670732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        price: '$150-300',
        location: 'Isalo National Park',
        bookingLink: 'https://www.lejardinduroy.com/'
      },
      {
        name: 'Nature Lodge',
        description: 'Eco-lodge near Amber Mountain National Park with bungalows and rainforest setting.',
        image: 'https://images.pexels.com/photos/1670045/pexels-photo-1670045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 3,
        price: '$80-160',
        location: 'Diego Suarez',
        bookingLink: 'https://www.naturelodge.mg/'
      },
      {
        name: 'Iharana Bush Camp',
        description: 'Unique lodge built with local materials overlooking the Tsingy d\'Ankarana with cultural experiences.',
        image: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        price: '$100-200',
        location: 'Ankarana National Park',
        bookingLink: 'https://www.iharana.mg/'
      },
      {
        name: 'Manga Soa Lodge',
        description: 'Eco-lodge on Nosy Komba island with bungalows, beach access, and lemur viewing.',
        image: 'https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 3,
        price: '$100-200',
        location: 'Nosy Komba',
        bookingLink: 'https://www.mangasoa.com/'
      },
      {
        name: 'Palmarium Hotel',
        description: 'Unique lodge on the Pangalanes Canal with private lemur reserve and boat excursions.',
        image: 'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 3,
        price: '$100-200',
        location: 'Pangalanes Canal',
        bookingLink: 'https://www.palmarium.mg/'
      },
      {
        name: 'Tsara Komba Lodge',
        description: 'Luxury eco-lodge on Nosy Komba with ocean views, gourmet dining, and wildlife.',
        image: 'https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 5,
        price: '$300-600',
        location: 'Nosy Komba',
        bookingLink: 'https://www.tsarakomba.com/'
      },
      {
        name: 'Carlton Madagascar',
        description: 'Luxury hotel in Antananarivo with city views, multiple restaurants, and business facilities.',
        image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        price: '$150-300',
        location: 'Antananarivo',
        bookingLink: 'https://www.carlton-madagascar.com/'
      }
    ],
    restaurants: [
      {
        name: 'La Varangue',
        cuisine: 'Fine dining restaurant in Antananarivo with French and Malagasy cuisine in a colonial setting.',
        image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        priceRange: '$20-40',
        location: 'Antananarivo',
        link: 'https://www.lavarangue.com/'
      },
      {
        name: 'Ku de Ta',
        cuisine: 'Contemporary restaurant with international cuisine, cocktails, and city views.',
        image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        priceRange: '$15-35',
        location: 'Antananarivo',
        link: 'https://www.kudeta.mg/'
      },
      {
        name: 'Le Café de la Gare',
        cuisine: 'Historic restaurant in a converted railway station with French and Malagasy cuisine.',
        image: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        priceRange: '$15-30',
        location: 'Antananarivo',
        link: 'https://www.cafedelagare.mg/'
      },
      {
        name: 'La Terrasse',
        cuisine: 'Rooftop restaurant with international cuisine and panoramic views of Antananarivo.',
        image: 'https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        priceRange: '$20-40',
        location: 'Antananarivo',
        link: 'https://www.laterrasse.mg/'
      },
      {
        name: 'Chez Madame Chabaud',
        cuisine: 'Traditional Malagasy cuisine with authentic flavors and home-style cooking.',
        image: 'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        priceRange: '$10-25',
        location: 'Antananarivo',
        link: 'https://www.chezmadamechabaud.mg/'
      },
      {
        name: 'Le Combava',
        cuisine: 'Gourmet restaurant with creative cuisine using local ingredients and French techniques.',
        image: 'https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        priceRange: '$25-50',
        location: 'Nosy Be',
        link: 'https://www.lecombava.mg/'
      },
      {
        name: 'La Table d\'Edmond',
        cuisine: 'Fine dining restaurant at Mantasaly Resort with seafood and international cuisine.',
        image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        priceRange: '$20-40',
        location: 'Nosy Be',
        link: 'https://www.mantasaly.com/dining/'
      },
      {
        name: 'Le Carnivore',
        cuisine: 'Steakhouse with game meats, grilled seafood, and international cuisine.',
        image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        priceRange: '$15-35',
        location: 'Antananarivo',
        link: 'https://www.lecarnivore.mg/'
      },
      {
        name: 'Chez Sika',
        cuisine: 'Seafood restaurant in Nosy Be with fresh catches and beachfront dining.',
        image: 'https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        priceRange: '$15-30',
        location: 'Nosy Be',
        link: 'https://www.chezsika.mg/'
      },
      {
        name: 'Café de la Gare',
        cuisine: 'French and Malagasy cuisine in a historic setting with colonial atmosphere.',
        image: 'https://images.pexels.com/photos/1670732/pexels-photo-1670732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 3,
        priceRange: '$10-25',
        location: 'Antsirabe',
        link: 'https://www.cafedelagare-antsirabe.mg/'
      },
      {
        name: 'Le Buffet du Jardin',
        cuisine: 'Garden restaurant with international buffet and Malagasy specialties.',
        image: 'https://images.pexels.com/photos/1670045/pexels-photo-1670045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        priceRange: '$15-30',
        location: 'Antananarivo',
        link: 'https://www.lebuffetdujardin.mg/'
      },
      {
        name: 'Chez Madame Chabaud',
        cuisine: 'Traditional Malagasy cuisine with authentic flavors and home-style cooking.',
        image: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        priceRange: '$10-25',
        location: 'Antananarivo',
        link: 'https://www.chezmadamechabaud.mg/'
      },
      {
        name: 'La Rhum-erie',
        cuisine: 'Rum bar and restaurant with international cuisine and extensive rum selection.',
        image: 'https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        priceRange: '$15-30',
        location: 'Nosy Be',
        link: 'https://www.larhumerie.mg/'
      },
      {
        name: 'Le Café de l\'Alliance',
        cuisine: 'French café with pastries, light meals, and coffee in a colonial setting.',
        image: 'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 3,
        priceRange: '$8-20',
        location: 'Antananarivo',
        link: 'https://www.cafedelalliance.mg/'
      },
      {
        name: 'Isalo Rock Lodge Restaurant',
        cuisine: 'Lodge restaurant with international cuisine and views of Isalo National Park.',
        image: 'https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        priceRange: '$20-40',
        location: 'Isalo National Park',
        link: 'https://www.isalorocklodge.com/dining/'
      },
      {
        name: 'Le Baobab Café',
        cuisine: 'Casual café near the Avenue of the Baobabs with local cuisine and refreshments.',
        image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 3,
        priceRange: '$5-15',
        location: 'Morondava',
        link: 'https://www.baobabcafe.mg/'
      },
      {
        name: 'Anjajavy Restaurant',
        cuisine: 'Luxury lodge restaurant with gourmet cuisine and ocean views.',
        image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 5,
        priceRange: '$50-100',
        location: 'Anjajavy',
        link: 'https://www.anjajavy.com/dining/'
      },
      {
        name: 'Le Tsara Be',
        cuisine: 'Traditional Malagasy restaurant with cultural performances and authentic cuisine.',
        image: 'https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 3,
        priceRange: '$10-25',
        location: 'Antananarivo',
        link: 'https://www.letsarabe.mg/'
      },
      {
        name: 'Ravinala Café',
        cuisine: 'Casual café with Malagasy coffee, pastries, and light meals.',
        image: 'https://images.pexels.com/photos/1670732/pexels-photo-1670732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 3,
        priceRange: '$5-15',
        location: 'Antananarivo',
        link: 'https://www.ravinalacafe.mg/'
      },
      {
        name: 'Vanila Restaurant',
        cuisine: 'Beachfront restaurant at Vanila Hotel with seafood and international cuisine.',
        image: 'https://images.pexels.com/photos/1670045/pexels-photo-1670045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        priceRange: '$20-40',
        location: 'Nosy Be',
        link: 'https://www.vanila-hotel.com/dining/'
      }
    ]
  },
  {
    name: 'Seychelles',
    description: 'Pristine archipelago in the Indian Ocean offering some of the world\'s most beautiful beaches, unique granite rock formations, and exclusive island resorts.',
    image: 'https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    region: 'East Africa',
    population: '98,000',
    attractions: [
      {
        name: 'Anse Source d\'Argent',
        description: 'One of the world\'s most photographed beaches with distinctive granite boulders, crystal-clear waters, and powder-soft sand.',
        image: 'https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'La Digue Island',
        link: 'https://www.seychelles.travel/en/discover/anse-source-dargent'
      },
      {
        name: 'Vallée de Mai Nature Reserve',
        description: 'UNESCO World Heritage site home to the rare coco de mer palm and pristine palm forest.',
        image: 'https://images.pexels.com/photos/1670732/pexels-photo-1670732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Praslin Island',
        link: 'https://whc.unesco.org/en/list/261/'
      },
      {
        name: 'Aldabra Atoll',
        description: 'UNESCO World Heritage site and one of the world\'s largest coral atolls, home to giant tortoises.',
        image: 'https://images.pexels.com/photos/1670045/pexels-photo-1670045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Outer Islands',
        link: 'https://whc.unesco.org/en/list/185/'
      },
      {
        name: 'Beau Vallon Beach',
        description: 'Popular beach on Mahé with clear waters, water sports, and sunset views.',
        image: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Mahé Island',
        link: 'https://www.seychelles.travel/en/discover/beau-vallon-beach'
      },
      {
        name: 'Morne Seychellois National Park',
        description: 'Largest national park in Seychelles with hiking trails, endemic species, and mountain views.',
        image: 'https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Mahé Island',
        link: 'https://www.seychelles.travel/en/discover/morne-seychellois-national-park'
      },
      {
        name: 'Anse Lazio',
        description: 'Consistently rated among the world\'s best beaches with perfect white sand and turquoise waters.',
        image: 'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Praslin Island',
        link: 'https://www.seychelles.travel/en/discover/anse-lazio'
      },
      {
        name: 'Victoria',
        description: 'One of the world\'s smallest capitals with colorful markets, clock tower, and botanical gardens.',
        image: 'https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Mahé Island',
        link: 'https://www.seychelles.travel/en/discover/victoria'
      },
      {
        name: 'Curieuse Island',
        description: 'Former leper colony now home to giant tortoises, mangroves, and historic doctor\'s house.',
        image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Near Praslin',
        link: 'https://www.seychelles.travel/en/discover/curieuse-island'
      },
      {
        name: 'Anse Intendance',
        description: 'Stunning beach with powerful waves, perfect for surfing and sunbathing in a natural setting.',
        image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Mahé Island',
        link: 'https://www.seychelles.travel/en/discover/anse-intendance'
      },
      {
        name: 'Cousin Island',
        description: 'Special nature reserve and important bird sanctuary with conservation success stories.',
        image: 'https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Near Praslin',
        link: 'https://www.cousinisland.net/'
      },
      {
        name: 'Aride Island',
        description: 'Northernmost granitic island in Seychelles with important seabird colonies and endemic plants.',
        image: 'https://images.pexels.com/photos/1670732/pexels-photo-1670732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Near Praslin',
        link: 'https://www.arideisland.com/'
      },
      {
        name: 'Moyenne Island',
        description: 'Small island transformed into a nature reserve by a single man with giant tortoises and pirate graves.',
        image: 'https://images.pexels.com/photos/1670045/pexels-photo-1670045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Near Mahé',
        link: 'https://www.seychelles.travel/en/discover/moyenne-island'
      },
      {
        name: 'Anse Georgette',
        description: 'Secluded beach with pristine sand and clear waters, accessible through Constance Lemuria Resort.',
        image: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Praslin Island',
        link: 'https://www.seychelles.travel/en/discover/anse-georgette'
      },
      {
        name: 'Mission Lodge Lookout',
        description: 'Historic site with panoramic views of Mahé\'s west coast and mountains.',
        image: 'https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Mahé Island',
        link: 'https://www.seychelles.travel/en/discover/mission-lodge-lookout'
      },
      {
        name: 'Silhouette Island',
        description: 'Mountainous island with pristine nature, hiking trails, and luxury resort.',
        image: 'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Near Mahé',
        link: 'https://www.seychelles.travel/en/discover/silhouette-island'
      },
      {
        name: 'Sainte Anne Marine National Park',
        description: 'Marine park encompassing six islands with exceptional snorkeling and glass-bottom boat tours.',
        image: 'https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Near Mahé',
        link: 'https://www.seychelles.travel/en/discover/sainte-anne-marine-national-park'
      },
      {
        name: 'Fond Ferdinand Nature Reserve',
        description: 'Alternative to Vallée de Mai with coco de mer palms, hiking trails, and panoramic views.',
        image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Praslin Island',
        link: 'https://www.seychelles.travel/en/discover/fond-ferdinand-nature-reserve'
      },
      {
        name: 'L\'Union Estate',
        description: 'Historic plantation with coconut oil mill, giant tortoises, and access to Anse Source d\'Argent.',
        image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'La Digue Island',
        link: 'https://www.seychelles.travel/en/discover/lunion-estate'
      },
      {
        name: 'Takamaka Rum Distillery',
        description: 'Rum distillery offering tours and tastings in a historic plantation setting.',
        image: 'https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Mahé Island',
        link: 'https://www.takamaka.com/'
      },
      {
        name: 'North Island',
        description: 'Exclusive private island resort with conservation focus and pristine beaches.',
        image: 'https://images.pexels.com/photos/1670732/pexels-photo-1670732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Near Mahé',
        link: 'https://www.north-island.com/'
      }
    ],
    transportation: [
      {
        type: 'Private Helicopter Transfers',
        description: 'Luxury helicopter transfers between islands with spectacular aerial views.',
        price: '$500-1500',
        route: 'Inter-Island Transfers'
      },
      {
        type: 'Luxury Yacht Charter',
        description: 'Private yacht charters for island hopping and exclusive experiences.',
        price: '$1000-5000/day',
        route: 'Island Hopping'
      },
      {
        type: 'Private Car & Driver',
        description: 'Luxury vehicle with professional driver for island tours on the main islands.',
        price: '$150-300/day',
        route: 'Island Tours'
      },
      {
        type: 'Fast Ferry',
        description: 'High-speed catamaran services between the main islands.',
        price: '$60-120',
        route: 'Mahé to Praslin/La Digue'
      }
    ],
    hotels: [
      {
        name: 'North Island',
        description: 'Ultra-exclusive private island resort with just 11 villas, offering the ultimate in luxury and privacy.',
        image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 5,
        price: '$5000-10000',
        location: 'North Island',
        bookingLink: 'https://www.north-island.com/'
      },
      {
        name: 'Four Seasons Resort Seychelles',
        description: 'Luxury hillside resort with private pool villas overlooking Petite Anse bay.',
        image: 'https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 5,
        price: '$1000-2000',
        location: 'Mahé Island',
        bookingLink: 'https://www.fourseasons.com/seychelles/'
      },
      {
        name: 'Six Senses Zil Pasyon',
        description: 'Exclusive resort on Félicité Island with dramatic ocean views and eco-luxury focus.',
        image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 5,
        price: '$1500-3000',
        location: 'Félicité Island',
        bookingLink: 'https://www.sixsenses.com/en/resorts/zil-pasyon/'
      },
      {
        name: 'Fregate Island Private',
        description: 'Conservation-focused private island with just 16 villas and seven pristine beaches.',
        image: 'https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 5,
        price: '$3000-6000',
        location: 'Fregate Island',
        bookingLink: 'https://www.fregate.com/'
      },
      {
        name: 'Constance Lemuria',
        description: 'Luxury resort with the only 18-hole championship golf course in Seychelles.',
        image: 'https://images.pexels.com/photos/1670732/pexels-photo-1670732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 5,
        price: '$800-1600',
        location: 'Praslin Island',
        bookingLink: 'https://www.constancehotels.com/en/hotels-resorts/seychelles/lemuria/'
      },
      {
        name: 'Raffles Seychelles',
        description: 'Luxury resort with private pool villas and views of Anse Takamaka and Curieuse Island.',
        image: 'https://images.pexels.com/photos/1670045/pexels-photo-1670045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 5,
        price: '$900-1800',
        location: 'Praslin Island',
        bookingLink: 'https://www.raffles.com/seychelles/'
      },
      {
        name: 'Banyan Tree Seychelles',
        description: 'Luxury resort with Creole-style villas overlooking Intendance Bay.',
        image: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 5,
        price: '$800-1600',
        location: 'Mahé Island',
        bookingLink: 'https://www.banyantree.com/en/seychelles/'
      },
      {
        name: 'Maia Luxury Resort & Spa',
        description: 'All-villa resort with private butlers, secluded beach, and award-winning spa.',
        image: 'https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 5,
        price: '$1500-3000',
        location: 'Mahé Island',
        bookingLink: 'https://www.anantara.com/en/maia-seychelles'
      },
      {
        name: 'JA Enchanted Island Resort',
        description: 'Boutique resort on a private island in the Sainte Anne Marine Park.',
        image: 'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 5,
        price: '$1000-2000',
        location: 'Round Island',
        bookingLink: 'https://www.jaresortshotels.com/seychelles/ja-enchanted-island-resort'
      },
      {
        name: 'Hilton Seychelles Labriz Resort & Spa',
        description: 'The only resort on Silhouette Island with mountain backdrop and marine national park.',
        image: 'https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 5,
        price: '$400-800',
        location: 'Silhouette Island',
        bookingLink: 'https://www.hilton.com/en/hotels/sezhihi-hilton-seychelles-labriz-resort-and-spa/'
      },
      {
        name: 'Constance Ephelia',
        description: 'Sprawling resort spanning two of Mahé\'s most beautiful beaches with extensive facilities.',
        image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 5,
        price: '$500-1000',
        location: 'Mahé Island',
        bookingLink: 'https://www.constancehotels.com/en/hotels-resorts/seychelles/ephelia/'
      },
      {
        name: 'Le Domaine de L\'Orangeraie',
        description: 'Boutique resort with Zen-style villas nestled in tropical gardens on La Digue.',
        image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        price: '$300-600',
        location: 'La Digue Island',
        bookingLink: 'https://www.orangeraie.com/'
      },
      {
        name: 'Kempinski Seychelles Resort',
        description: 'Luxury resort on Baie Lazare with Olympic-length swimming pool and water sports.',
        image: 'https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 5,
        price: '$400-800',
        location: 'Mahé Island',
        bookingLink: 'https://www.kempinski.com/en/seychelles/seychelles-resort/'
      },
      {
        name: 'Denis Private Island',
        description: 'Exclusive private island resort with focus on sustainability and natural experiences.',
        image: 'https://images.pexels.com/photos/1670732/pexels-photo-1670732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 5,
        price: '$1000-2000',
        location: 'Denis Island',
        bookingLink: 'https://www.denisisland.com/'
      },
      {
        name: 'STORY Seychelles',
        description: 'Luxury resort on Beau Vallon beach with multiple restaurants and extensive facilities.',
        image: 'https://images.pexels.com/photos/1670045/pexels-photo-1670045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 5,
        price: '$400-800',
        location: 'Mahé Island',
        bookingLink: 'https://www.story-seychelles.com/'
      },
      {
        name: 'Carana Beach Hotel',
        description: 'Boutique hotel with chalets inspired by beach houses and ocean views.',
        image: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        price: '$300-600',
        location: 'Mahé Island',
        bookingLink: 'https://www.caranabeach.com/'
      },
      {
        name: 'Paradise Sun Hotel',
        description: 'Beachfront hotel on Praslin\'s Côte d\'Or with Creole architecture and tropical gardens.',
        image: 'https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        price: '$300-600',
        location: 'Praslin Island',
        bookingLink: 'https://www.paradisesunhotel.com/'
      },
      {
        name: 'Le Repaire Boutique Hotel',
        description: 'Small Italian-owned boutique hotel near the beach on La Digue.',
        image: 'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 3,
        price: '$200-400',
        location: 'La Digue Island',
        bookingLink: 'https://www.lerepaireladigue.com/'
      },
      {
        name: 'Coco de Mer Hotel & Black Parrot Suites',
        description: 'Four-star hotel with colonial atmosphere and exclusive suites section.',
        image: 'https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        price: '$300-600',
        location: 'Praslin Island',
        bookingLink: 'https://www.cocodemer.com/'
      },
      {
        name: 'Savoy Resort & Spa',
        description: 'Modern luxury resort on Beau Vallon beach with the largest pool in Seychelles.',
        image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 5,
        price: '$300-600',
        location: 'Mahé Island',
        bookingLink: 'https://www.savoy.sc/'
      }
    ],
    restaurants: [
      {
        name: 'Château de Feuilles',
        cuisine: 'Fine dining restaurant with panoramic ocean views and French-Creole fusion cuisine.',
        image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 5,
        priceRange: '$50-100',
        location: 'Praslin Island',
        link: 'https://www.chateaudefeuilles.com/dining/'
      },
      {
        name: 'La Grande Maison',
        cuisine: 'Elegant restaurant in a plantation house with Creole and international cuisine.',
        image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        priceRange: '$30-60',
        location: 'La Digue Island',
        link: 'https://www.lagrandemaison.sc/'
      },
      {
        name: 'Chez Batista',
        cuisine: 'Authentic Creole restaurant with beachfront setting and Sunday buffet with traditional music.',
        image: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        priceRange: '$25-50',
        location: 'Mahé Island',
        link: 'https://www.chezbatista.sc/'
      },
      {
        name: 'Eden',
        cuisine: 'Fine dining restaurant at Eden Bleu Hotel with international cuisine and marina views.',
        image: 'https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        priceRange: '$40-80',
        location: 'Eden Island, Mahé',
        link: 'https://www.edenbleu.com/dining/eden/'
      },
      {
        name: 'Bonbon Plume',
        cuisine: 'Beachfront restaurant on Anse Lazio with fresh seafood and Creole specialties.',
        image: 'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        priceRange: '$30-60',
        location: 'Praslin Island',
        link: 'https://www.bonbonplume.com/'
      },
      {
        name: 'Marie Antoinette',
        cuisine: 'Historic restaurant serving traditional Seychellois set menu in a colonial mansion.',
        image: 'https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        priceRange: '$25-50',
        location: 'Mahé Island',
        link: 'https://www.marieantoinette.sc/'
      },
      {
        name: 'Jardin du Roi',
        cuisine: 'Garden restaurant at a spice plantation with Creole cuisine and panoramic views.',
        image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        priceRange: '$20-40',
        location: 'Mahé Island',
        link: 'https://www.jardinduroidespices.com/'
      },
      {
        name: 'La Plage Restaurant',
        cuisine: 'Beachfront restaurant at Paradise Sun Hotel with seafood and international cuisine.',
        image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        priceRange: '$30-60',
        location: 'Praslin Island',
        link: 'https://www.paradisesunhotel.com/dining/'
      },
      {
        name: 'Boat House',
        cuisine: 'Popular restaurant specializing in Creole buffet with seafood and traditional dishes.',
        image: 'https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        priceRange: '$25-50',
        location: 'Mahé Island',
        link: 'https://www.boathouse.sc/'
      },
      {
        name: 'Chez Jules',
        cuisine: 'Authentic local restaurant on La Digue with fresh fish and Creole specialties.',
        image: 'https://images.pexels.com/photos/1670732/pexels-photo-1670732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        priceRange: '$20-40',
        location: 'La Digue Island',
        link: 'https://www.chezjules.sc/'
      },
      {
        name: 'Bravo Restaurant',
        cuisine: 'Italian restaurant with wood-fired pizza, pasta, and Mediterranean specialties.',
        image: 'https://images.pexels.com/photos/1670045/pexels-photo-1670045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        priceRange: '$20-40',
        location: 'Mahé Island',
        link: 'https://www.bravo.sc/'
      },
      {
        name: 'Les Lauriers',
        cuisine: 'Creole restaurant with home-style cooking and authentic local flavors.',
        image: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        priceRange: '$20-40',
        location: 'Praslin Island',
        link: 'https://www.leslauriers.sc/'
      },
      {
        name: 'Mahek',
        cuisine: 'Indian restaurant with authentic curries, tandoori dishes, and vegetarian options.',
        image: 'https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        priceRange: '$20-40',
        location: 'Mahé Island',
        link: 'https://www.mahek.sc/'
      },
      {
        name: 'La Perle Noire',
        cuisine: 'Elegant restaurant with seafood, international cuisine, and ocean views.',
        image: 'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        priceRange: '$30-60',
        location: 'Praslin Island',
        link: 'https://www.laperlenoire.sc/'
      },
      {
        name: 'Café des Arts',
        cuisine: 'Beachfront restaurant with artistic atmosphere, seafood, and international cuisine.',
        image: 'https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        priceRange: '$25-50',
        location: 'Praslin Island',
        link: 'https://www.cafedesarts.sc/'
      },
      {
        name: 'Del Place',
        cuisine: 'Seafront restaurant with fresh fish, Creole cuisine, and sunset views.',
        image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        priceRange: '$20-40',
        location: 'Mahé Island',
        link: 'https://www.delplace.sc/'
      },
      {
        name: 'Pirogue Restaurant & Bar',
        cuisine: 'Beachfront restaurant with international cuisine and Creole influences.',
        image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        priceRange: '$25-50',
        location: 'La Digue Island',
        link: 'https://www.pirogue.sc/'
      },
      {
        name: 'Tamarind',
        cuisine: 'Asian fusion restaurant with Chinese, Thai, and Japanese specialties.',
        image: 'https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        priceRange: '$20-40',
        location: 'Mahé Island',
        link: 'https://www.tamarind.sc/'
      },
      {
        name: 'Pescado',
        cuisine: 'Seafood restaurant with Mediterranean influences and ocean views.',
        image: 'https://images.pexels.com/photos/1670732/pexels-photo-1670732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        priceRange: '$30-60',
        location: 'Mahé Island',
        link: 'https://www.pescado.sc/'
      },
      {
        name: 'Village du Pêcheur',
        cuisine: 'Seafood restaurant in a traditional Creole setting with beach views.',
        image: 'https://images.pexels.com/photos/1670045/pexels-photo-1670045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        priceRange: '$25-50',
        location: 'Praslin Island',
        link: 'https://www.villagedupecheur.sc/'
      }
    ]
  },
  {
    name: 'Tunisia',
    description: 'Mediterranean gem offering ancient Roman ruins, Sahara desert experiences, Mediterranean beaches, and rich cultural heritage with Arab and European influences.',
    image: 'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    region: 'North Africa',
    population: '12 million',
    attractions: [
      {
        name: 'Carthage',
        description: 'UNESCO World Heritage site with ancient Punic and Roman ruins including the Antonine Baths and Carthage Museum.',
        image: 'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Near Tunis',
        link: 'https://whc.unesco.org/en/list/37/'
      },
      {
        name: 'Medina of Tunis',
        description: 'UNESCO World Heritage site with maze-like streets, historic mosques, palaces, and vibrant souks.',
        image: 'https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Tunis',
        link: 'https://whc.unesco.org/en/list/36/'
      },
      {
        name: 'El Jem Amphitheatre',
        description: 'One of the world\'s best-preserved Roman amphitheaters and UNESCO World Heritage site.',
        image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'El Jem',
        link: 'https://whc.unesco.org/en/list/38/'
      },
      {
        name: 'Djerba Island',
        description: 'Mediterranean island with beautiful beaches, historic sites, and traditional Berber culture.',
        image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Southern Tunisia',
        link: 'https://www.discovertunisia.com/en/places-to-visit/djerba'
      },
      {
        name: 'Sidi Bou Said',
        description: 'Picturesque blue and white village overlooking the Mediterranean with Andalusian architecture.',
        image: 'https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Near Tunis',
        link: 'https://www.discovertunisia.com/en/places-to-visit/sidi-bou-said'
      },
      {
        name: 'Sahara Desert',
        description: 'Desert experiences including camel treks, 4x4 adventures, and stays in luxury desert camps.',
        image: 'https://images.pexels.com/photos/1670732/pexels-photo-1670732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Southern Tunisia',
        link: 'https://www.discovertunisia.com/en/places-to-visit/sahara-desert'
      },
      {
        name: 'Bardo Museum',
        description: 'One of North Africa\'s finest museums housed in a former palace with the world\'s largest collection of Roman mosaics.',
        image: 'https://images.pexels.com/photos/1670045/pexels-photo-1670045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Tunis',
        link: 'https://www.discovertunisia.com/en/places-to-visit/bardo-museum'
      },
      {
        name: 'Dougga',
        description: 'UNESCO World Heritage site and best-preserved Roman small town in North Africa.',
        image: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Northern Tunisia',
        link: 'https://whc.unesco.org/en/list/794/'
      },
      {
        name: 'Hammamet',
        description: 'Popular beach resort town with historic medina, beaches, and vibrant nightlife.',
        image: 'https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Northeastern Tunisia',
        link: 'https://www.discovertunisia.com/en/places-to-visit/hammamet'
      },
      {
        name: 'Kairouan',
        description: 'UNESCO World Heritage site and Islam\'s fourth holiest city with the Great Mosque and medina.',
        image: 'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Central Tunisia',
        link: 'https://whc.unesco.org/en/list/499/'
      },
      {
        name: 'Chott el Jerid',
        description: 'Vast salt lake with otherworldly landscapes and mirages, especially spectacular at sunset.',
        image: 'https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Southern Tunisia',
        link: 'https://www.discovertunisia.com/en/places-to-visit/chott-el-jerid'
      },
      {
        name: 'Sousse Medina',
        description: 'UNESCO World Heritage site with ancient walls, Great Mosque, and vibrant souks.',
        image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Sousse',
        link: 'https://whc.unesco.org/en/list/498/'
      },
      {
        name: 'Matmata',
        description: 'Berber village with unique troglodyte (underground) dwellings and Star Wars filming locations.',
        image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Southern Tunisia',
        link: 'https://www.discovertunisia.com/en/places-to-visit/matmata'
      },
      {
        name: 'Monastir',
        description: 'Coastal city with the impressive Ribat fortress, mausoleum, and beaches.',
        image: 'https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Eastern Tunisia',
        link: 'https://www.discovertunisia.com/en/places-to-visit/monastir'
      },
      {
        name: 'Tabarka',
        description: 'Coastal town with Genoese fort, coral reefs, and the famous "Needles" rock formations.',
        image: 'https://images.pexels.com/photos/1670732/pexels-photo-1670732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Northwestern Tunisia',
        link: 'https://www.discovertunisia.com/en/places-to-visit/tabarka'
      },
      {
        name: 'Kerkennah Islands',
        description: 'Traditional fishing islands with authentic lifestyle, beaches, and minimal tourism.',
        image: 'https://images.pexels.com/photos/1670045/pexels-photo-1670045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Eastern Tunisia',
        link: 'https://www.discovertunisia.com/en/places-to-visit/kerkennah-islands'
      },
      {
        name: 'Sbeitla',
        description: 'Ancient Roman city with well-preserved forum, temples, and Byzantine churches.',
        image: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Central Tunisia',
        link: 'https://www.discovertunisia.com/en/places-to-visit/sbeitla'
      },
      {
        name: 'Tozeur',
        description: 'Oasis town with distinctive architecture, palm groves, and desert experiences.',
        image: 'https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Southwestern Tunisia',
        link: 'https://www.discovertunisia.com/en/places-to-visit/tozeur'
      },
      {
        name: 'Bizerte',
        description: 'Tunisia\'s northernmost city with historic medina, old port, and beaches.',
        image: 'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Northern Tunisia',
        link: 'https://www.discovertunisia.com/en/places-to-visit/bizerte'
      },
      {
        name: 'Ichkeul National Park',
        description: 'UNESCO World Heritage site and important wetland for migratory birds.',
        image: 'https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Northern Tunisia',
        link: 'https://whc.unesco.org/en/list/8/'
      }
    ],
    transportation: [
      {
        type: 'Private Car & Driver',
        description: 'Luxury vehicle with professional driver for customized tours and intercity travel.',
        price: '$100-250/day',
        route: 'Tunis to Carthage & Sidi Bou Said'
      },
      {
        type: 'Desert 4x4 Excursions',
        description: 'Private 4x4 vehicles with experienced guides for Sahara desert exploration.',
        price: '$150-300/day',
        route: 'Southern Tunisia Desert Tours'
      },
      {
        type: 'Luxury Yacht Charter',
        description: 'Private yacht charters for coastal exploration and Mediterranean experiences.',
        price: '$500-2000/day',
        route: 'Mediterranean Coast'
      },
      {
        type: 'Domestic Flights',
        description: 'Time-saving flights between major cities and Djerba Island.',
        price: '$100-200',
        route: 'Tunis to Djerba'
      }
    ],
    hotels: [
      {
        name: 'Four Seasons Hotel Tunis',
        description: 'Luxury beachfront hotel with Mediterranean views, multiple restaurants, and comprehensive spa.',
        image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 5,
        price: '$300-600',
        location: 'Gammarth, Tunis',
        bookingLink: 'https://www.fourseasons.com/tunis/'
      },
      {
        name: 'The Residence Tunis',
        description: 'Elegant resort with private beach, thalassotherapy spa, and golf course.',
        image: 'https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 5,
        price: '$250-500',
        location: 'Gammarth, Tunis',
        bookingLink: 'https://www.cenizaro.com/theresidence/tunis/'
      },
      {
        name: 'Dar El Jeld Hotel & Spa',
        description: 'Boutique luxury hotel in a restored mansion in the heart of Tunis medina.',
        image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 5,
        price: '$200-400',
        location: 'Tunis Medina',
        bookingLink: 'https://www.dareljeld.com/'
      },
      {
        name: 'Anantara Sahara Tozeur Resort & Villas',
        description: 'Luxury desert resort with pool villas, spa, and desert experiences.',
        image: 'https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 5,
        price: '$300-600',
        location: 'Tozeur',
        bookingLink: 'https://www.anantara.com/en/sahara-tozeur'
      },
      {
        name: 'La Badira',
        description: 'Adults-only luxury resort with minimalist design and Mediterranean views.',
        image: 'https://images.pexels.com/photos/1670732/pexels-photo-1670732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 5,
        price: '$200-400',
        location: 'Hammamet',
        bookingLink: 'https://www.labadira.com/'
      },
      {
        name: 'Movenpick Resort & Marine Spa Sousse',
        description: 'Beachfront resort with multiple pools, spa, and dining options.',
        image: 'https://images.pexels.com/photos/1670045/pexels-photo-1670045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 5,
        price: '$150-300',
        location: 'Sousse',
        bookingLink: 'https://www.movenpick.com/en/africa/tunisia/sousse/resort-marine-spa-sousse/'
      },
      {
        name: 'Radisson Blu Palace Resort & Thalasso',
        description: 'Luxury resort with extensive thalassotherapy spa and beachfront location.',
        image: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 5,
        price: '$150-300',
        location: 'Djerba',
        bookingLink: 'https://www.radissonhotels.com/en-us/hotels/radisson-blu-resort-djerba'
      },
      {
        name: 'Dar Hi Life',
        description: 'Eco-friendly design hotel in Nefta with unique architecture and desert views.',
        image: 'https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        price: '$200-400',
        location: 'Nefta',
        bookingLink: 'https://www.dar-hi.net/'
      },
      {
        name: 'Hasdrubal Prestige Thalassa & Spa',
        description: 'Luxury resort with the largest suite in Tunisia and extensive spa facilities.',
        image: 'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 5,
        price: '$200-400',
        location: 'Djerba',
        bookingLink: 'https://www.hasdrubal-thalassa.com/'
      },
      {
        name: 'The Sindbad',
        description: 'Boutique hotel with Moorish architecture, gardens, and beachfront location.',
        image: 'https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 5,
        price: '$150-300',
        location: 'Hammamet',
        bookingLink: 'https://www.thesindbad.com/'
      },
      {
        name: 'Dar Said',
        description: 'Boutique hotel in a traditional mansion in Sidi Bou Said with Mediterranean views.',
        image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        price: '$150-300',
        location: 'Sidi Bou Said',
        bookingLink: 'https://www.darsaid.com.tn/'
      },
      {
        name: 'Seabel Alhambra Beach Golf & Spa',
        description: 'Beachfront resort with Andalusian architecture, golf course, and spa.',
        image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        price: '$100-200',
        location: 'Port El Kantaoui',
        bookingLink: 'https://www.seabelhotels.com/en/seabel-alhambra-beach-golf-spa/'
      },
      {
        name: 'Dar El Bhar',
        description: 'Boutique hotel in a converted fisherman\'s house with sea views in Djerba.',
        image: 'https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        price: '$100-200',
        location: 'Djerba',
        bookingLink: 'https://www.darelbhar.com/'
      },
      {
        name: 'Palais Bayram',
        description: 'Luxury boutique hotel in a restored 18th-century palace in the Tunis medina.',
        image: 'https://images.pexels.com/photos/1670732/pexels-photo-1670732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        price: '$150-300',
        location: 'Tunis Medina',
        bookingLink: 'https://www.palaisbayram.com/'
      },
      {
        name: 'Dar Dhiafa',
        description: 'Traditional guesthouse in Djerba with authentic architecture and intimate atmosphere.',
        image: 'https://images.pexels.com/photos/1670045/pexels-photo-1670045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        price: '$100-200',
        location: 'Djerba',
        bookingLink: 'https://www.dardhiafa.com/'
      },
      {
        name: 'Mövenpick Hotel du Lac Tunis',
        description: 'Modern luxury hotel overlooking Tunis Lake with business facilities and spa.',
        image: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 5,
        price: '$150-300',
        location: 'Tunis',
        bookingLink: 'https://www.movenpick.com/en/africa/tunisia/tunis/hotel-du-lac-tunis/'
      },
      {
        name: 'Dar Sabri',
        description: 'Boutique hotel in a restored mansion in Nabeul with traditional architecture.',
        image: 'https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        price: '$100-200',
        location: 'Nabeul',
        bookingLink: 'https://www.darsabri.com/'
      },
      {
        name: 'Dar Hayet',
        description: 'Charming boutique hotel with Andalusian gardens and traditional architecture.',
        image: 'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        price: '$80-160',
        location: 'Hammamet',
        bookingLink: 'https://www.darhayet.com/'
      },
      {
        name: 'Hôtel Dar Saïd',
        description: 'Elegant boutique hotel in Sidi Bou Said with traditional architecture and sea views.',
        image: 'https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        price: '$150-300',
        location: 'Sidi Bou Said',
        bookingLink: 'https://www.darsaid.com.tn/'
      },
      {
        name: 'Iberostar Selection Diar El Andalous',
        description: 'Beachfront resort with Andalusian architecture, multiple pools, and spa.',
        image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 5,
        price: '$150-300',
        location: 'Sousse',
        bookingLink: 'https://www.iberostar.com/en/hotels/sousse/iberostar-selection-diar-el-andalous/'
      }
    ],
    restaurants: [
      {
        name: 'Dar El Jeld',
        cuisine: 'Fine dining Tunisian cuisine in a historic mansion with traditional decor and atmosphere.',
        image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 5,
        priceRange: '$40-80',
        location: 'Tunis Medina',
        link: 'https://www.dareljeld.com/restaurant/'
      },
      {
        name: 'Le Baroque',
        cuisine: 'French and Mediterranean cuisine with elegant atmosphere and extensive wine list.',
        image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        priceRange: '$30-60',
        location: 'Tunis',
        link: 'https://www.lebaroque.com.tn/'
      },
      {
        name: 'La Falaise',
        cuisine: 'Seafood restaurant with Mediterranean views and fresh local catches.',
        image: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        priceRange: '$25-50',
        location: 'Sidi Bou Said',
        link: 'https://www.lafalaise.com.tn/'
      },
      {
        name: 'Restaurant du Golfe',
        cuisine: 'Seafood restaurant with terrace overlooking the Gulf of Tunis.',
        image: 'https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        priceRange: '$20-40',
        location: 'La Marsa',
        link: 'https://www.restaurantdugolfe.com.tn/'
      },
      {
        name: 'Le Bon Vieux Temps',
        cuisine: 'Traditional Tunisian cuisine in a historic setting with authentic atmosphere.',
        image: 'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        priceRange: '$20-40',
        location: 'Tunis',
        link: 'https://www.lebonvieuxtemps.com.tn/'
      },
      {
        name: 'Dar Zarrouk',
        cuisine: 'Upscale Tunisian cuisine with panoramic views of the Mediterranean from Sidi Bou Said.',
        image: 'https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        priceRange: '$30-60',
        location: 'Sidi Bou Said',
        link: 'https://www.darzarrouk.com/'
      },
      {
        name: 'Le Café des Nattes',
        cuisine: 'Historic café in Sidi Bou Said with traditional mint tea and light meals.',
        image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 3,
        priceRange: '$5-15',
        location: 'Sidi Bou Said',
        link: 'https://www.cafedesnattes.com.tn/'
      },
      {
        name: 'La Victoire',
        cuisine: 'Traditional Tunisian pastries and coffee in a historic café in the medina.',
        image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 3,
        priceRange: '$5-15',
        location: 'Tunis Medina',
        link: 'https://www.lavictoire.com.tn/'
      },
      {
        name: 'Le Méditerranée',
        cuisine: 'Seafood restaurant with Mediterranean cuisine and fresh local ingredients.',
        image: 'https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        priceRange: '$25-50',
        location: 'Hammamet',
        link: 'https://www.lemediterranee.com.tn/'
      },
      {
        name: 'Dar Belhadj',
        cuisine: 'Traditional Tunisian cuisine in a restored palace in the medina with cultural performances.',
        image: 'https://images.pexels.com/photos/1670732/pexels-photo-1670732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        priceRange: '$25-50',
        location: 'Tunis Medina',
        link: 'https://www.darbelhadj.com/'
      },
      {
        name: 'L\'Astragale',
        cuisine: 'Mediterranean cuisine with French influences and elegant atmosphere.',
        image: 'https://images.pexels.com/photos/1670045/pexels-photo-1670045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        priceRange: '$30-60',
        location: 'Carthage',
        link: 'https://www.lastragale.com.tn/'
      },
      {
        name: 'Le Boeuf sur le Toit',
        cuisine: 'French brasserie with steaks, seafood, and international cuisine.',
        image: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        priceRange: '$25-50',
        location: 'Tunis',
        link: 'https://www.leboeufsurleto it.com.tn/'
      },
      {
        name: 'Chez Slah',
        cuisine: 'Historic restaurant serving traditional Tunisian cuisine since 1938.',
        image: 'https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        priceRange: '$15-30',
        location: 'Tunis',
        link: 'https://www.chezslah.com.tn/'
      },
      {
        name: 'La Closerie',
        cuisine: 'French and Mediterranean cuisine with elegant atmosphere and garden setting.',
        image: 'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        priceRange: '$25-50',
        location: 'La Marsa',
        link: 'https://www.lacloserie.com.tn/'
      },
      {
        name: 'El Ali',
        cuisine: 'Tunisian cuisine in a restored mansion in the medina with rooftop terrace.',
        image: 'https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        priceRange: '$20-40',
        location: 'Tunis Medina',
        link: 'https://www.elali.com.tn/'
      },
      {
        name: 'Le Golfe',
        cuisine: 'Seafood restaurant with Mediterranean views and fresh local catches.',
        image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        priceRange: '$20-40',
        location: 'Hammamet',
        link: 'https://www.legolfe.com.tn/'
      },
      {
        name: 'Restaurant Essaraya',
        cuisine: 'Traditional Tunisian cuisine in a historic palace with authentic atmosphere.',
        image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        priceRange: '$20-40',
        location: 'Tunis Medina',
        link: 'https://www.essaraya.com.tn/'
      },
      {
        name: 'La Daurade',
        cuisine: 'Seafood restaurant with harbor views and fresh local catches.',
        image: 'https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        priceRange: '$20-40',
        location: 'Bizerte',
        link: 'https://www.ladaurade.com.tn/'
      },
      {
        name: 'Le Petit Mousse',
        cuisine: 'Seafood restaurant with Mediterranean cuisine and port views.',
        image: 'https://images.pexels.com/photos/1670732/pexels-photo-1670732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        priceRange: '$20-40',
        location: 'Tabarka',
        link: 'https://www.lepetitmousse.com.tn/'
      },
      {
        name: 'Restaurant Dar Slah',
        cuisine: 'Traditional Tunisian cuisine in a historic setting with authentic atmosphere.',
        image: 'https://images.pexels.com/photos/1670045/pexels-photo-1670045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        priceRange: '$20-40',
        location: 'Tunis Medina',
        link: 'https://www.darslah.com.tn/'
      }
    ]
  },
  {
    name: 'Mozambique',
    description: 'Emerging destination with pristine Indian Ocean beaches, rich Portuguese colonial heritage, vibrant culture, and exceptional marine life.',
    image: 'https://images.pexels.com/photos/8828678/pexels-photo-8828678.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    region: 'Southern Africa',
    population: '32 million',
    attractions: [
      {
        name: 'Bazaruto Archipelago',
        description: 'Pristine island group with white sand beaches, coral reefs, and luxury resorts in the Indian Ocean.',
        image: 'https://images.pexels.com/photos/1670045/pexels-photo-1670045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Inhambane Province',
        link: 'https://www.visitmozambique.net/places-to-go/bazaruto-archipelago/'
      },
      {
        name: 'Ilha de Moçambique',
        description: 'UNESCO World Heritage site with Portuguese colonial architecture, historic forts, and cultural heritage.',
        image: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Nampula Province',
        link: 'https://whc.unesco.org/en/list/599/'
      },
      {
        name: 'Gorongosa National Park',
        description: 'Restored wildlife reserve with diverse ecosystems and conservation success story.',
        image: 'https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Central Mozambique',
        link: 'https://www.gorongosa.org/'
      },
      {
        name: 'Quirimbas Archipelago',
        description: 'Remote island chain with pristine beaches, coral reefs, and luxury eco-lodges.',
        image: 'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Cabo Delgado Province',
        link: 'https://www.visitmozambique.net/places-to-go/quirimbas-archipelago/'
      },
      {
        name: 'Maputo',
        description: 'Capital city with Portuguese colonial architecture, vibrant markets, and cultural attractions.',
        image: 'https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Southern Mozambique',
        link: 'https://www.visitmozambique.net/places-to-go/maputo/'
      },
      {
        name: 'Tofo Beach',
        description: 'Popular beach destination with whale sharks, manta rays, and laid-back atmosphere.',
        image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Inhambane Province',
        link: 'https://www.visitmozambique.net/places-to-go/tofo-beach/'
      },
      {
        name: 'Niassa Reserve',
        description: 'One of Africa\'s largest conservation areas with diverse wildlife and remote wilderness.',
        image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Northern Mozambique',
        link: 'https://www.visitmozambique.net/places-to-go/niassa-reserve/'
      },
      {
        name: 'Inhambane',
        description: 'Historic coastal town with Portuguese colonial architecture and nearby beaches.',
        image: 'https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Inhambane Province',
        link: 'https://www.visitmozambique.net/places-to-go/inhambane/'
      },
      {
        name: 'Pemba',
        description: 'Coastal city with beautiful bay, beaches, and gateway to the Quirimbas Archipelago.',
        image: 'https://images.pexels.com/photos/1670732/pexels-photo-1670732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Cabo Delgado Province',
        link: 'https://www.visitmozambique.net/places-to-go/pemba/'
      },
      {
        name: 'Vilanculos',
        description: 'Coastal town and gateway to the Bazaruto Archipelago with beaches and water activities.',
        image: 'https://images.pexels.com/photos/1670045/pexels-photo-1670045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Inhambane Province',
        link: 'https://www.visitmozambique.net/places-to-go/vilanculos/'
      },
      {
        name: 'Maputo Elephant Reserve',
        description: 'Wildlife reserve near the capital with elephants, antelope, and coastal landscapes.',
        image: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Maputo Province',
        link: 'https://www.visitmozambique.net/places-to-go/maputo-elephant-reserve/'
      },
      {
        name: 'Ponta do Ouro',
        description: 'Beach destination near the South African border with diving, dolphin encounters, and surfing.',
        image: 'https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Maputo Province',
        link: 'https://www.visitmozambique.net/places-to-go/ponta-do-ouro/'
      },
      {
        name: 'Ibo Island',
        description: 'Historic island in the Quirimbas with colonial architecture, fort, and cultural heritage.',
        image: 'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Cabo Delgado Province',
        link: 'https://www.visitmozambique.net/places-to-go/ibo-island/'
      },
      {
        name: 'Chimanimani Mountains',
        description: 'Remote mountain range with hiking trails, waterfalls, and pristine wilderness.',
        image: 'https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Manica Province',
        link: 'https://www.visitmozambique.net/places-to-go/chimanimani-mountains/'
      },
      {
        name: 'Inhaca Island',
        description: 'Island near Maputo with beaches, marine reserve, and day trip potential from the capital.',
        image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Maputo Province',
        link: 'https://www.visitmozambique.net/places-to-go/inhaca-island/'
      },
      {
        name: 'Beira',
        description: 'Port city with art deco architecture, beaches, and gateway to central Mozambique.',
        image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Sofala Province',
        link: 'https://www.visitmozambique.net/places-to-go/beira/'
      },
      {
        name: 'Limpopo National Park',
        description: 'Transfrontier park connected to Kruger National Park with developing wildlife populations.',
        image: 'https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Gaza Province',
        link: 'https://www.visitmozambique.net/places-to-go/limpopo-national-park/'
      },
      {
        name: 'Machangulo Peninsula',
        description: 'Pristine coastal area with beaches, dunes, and luxury lodges near Maputo.',
        image: 'https://images.pexels.com/photos/1670732/pexels-photo-1670732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Maputo Province',
        link: 'https://www.visitmozambique.net/places-to-go/machangulo-peninsula/'
      },
      {
        name: 'Benguerra Island',
        description: 'Second largest island in the Bazaruto Archipelago with luxury lodges and pristine beaches.',
        image: 'https://images.pexels.com/photos/1670045/pexels-photo-1670045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Inhambane Province',
        link: 'https://www.visitmozambique.net/places-to-go/benguerra-island/'
      },
      {
        name: 'Cahora Bassa Lake',
        description: 'One of Africa\'s largest artificial lakes with fishing, boating, and wildlife.',
        image: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Tete Province',
        link: 'https://www.visitmozambique.net/places-to-go/cahora-bassa-lake/'
      }
    ],
    transportation: [
      {
        type: 'Private Helicopter Transfers',
        description: 'Luxury helicopter transfers to remote islands and coastal destinations.',
        price: '$500-2000',
        route: 'Vilanculos to Bazaruto Archipelago'
      },
      {
        type: 'Luxury Boat Transfers',
        description: 'Private boat transfers to islands and coastal destinations.',
        price: '$200-500',
        route: 'Vilanculos to Benguerra Island'
      },
      {
        type: 'Private 4x4 Safari Vehicle',
        description: 'Luxury 4x4 vehicles with experienced guides for wildlife viewing and remote areas.',
        price: '$200-400/day',
        route: 'Gorongosa National Park'
      },
      {
        type: 'Domestic Flights',
        description: 'Time-saving flights between major destinations and remote areas.',
        price: '$200-500',
        route: 'Maputo to Pemba'
      }
    ],
    hotels: [
      {
        name: 'Anantara Bazaruto Island Resort',
        description: 'Luxury island resort with private villas, spa, and pristine beaches in the Bazaruto Archipelago.',
        image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 5,
        price: '$600-1200',
        location: 'Bazaruto Island',
        bookingLink: 'https://www.anantara.com/en/bazaruto-island'
      },
      {
        name: 'andBeyond Benguerra Island',
        description: 'Exclusive luxury lodge with beachfront casitas and exceptional service in the Bazaruto Archipelago.',
        image: 'https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 5,
        price: '$1000-2000',
        location: 'Benguerra Island',
        bookingLink: 'https://www.andbeyond.com/our-lodges/africa/mozambique/bazaruto-archipelago/andbeyond-benguerra-island/'
      },
      {
        name: 'Azura Benguerra Island',
        description: 'Luxury eco-boutique retreat with beachfront villas and personalized service.',
        image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 5,
        price: '$1000-2000',
        location: 'Benguerra Island',
        bookingLink: 'https://www.azura-retreats.com/azura-benguerra/'
      },
      {
        name: 'Azura Quilalea Private Island',
        description: 'Exclusive private island resort in the Quirimbas Archipelago with just nine villas.',
        image: 'https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 5,
        price: '$1500-3000',
        location: 'Quirimbas Archipelago',
        bookingLink: 'https://www.azura-retreats.com/azura-quilalea/'
      },
      {
        name: 'Polana Serena Hotel',
        description: 'Historic luxury hotel in Maputo with colonial architecture and modern amenities.',
        image: 'https://images.pexels.com/photos/1670732/pexels-photo-1670732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 5,
        price: '$200-400',
        location: 'Maputo',
        bookingLink: 'https://www.serenahotels.com/serenapolana/'
      },
      {
        name: 'White Pearl Resorts',
        description: 'Luxury beach resort with private plunge pools and ocean views near the South African border.',
        image: 'https://images.pexels.com/photos/1670045/pexels-photo-1670045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 5,
        price: '$600-1200',
        location: 'Ponta Mamoli',
        bookingLink: 'https://www.whitepearlresorts.com/'
      },
      {
        name: 'Coral Lodge',
        description: 'Luxury beach and lagoon resort near Ilha de Moçambique with water villas.',
        image: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 5,
        price: '$400-800',
        location: 'Nampula Province',
        bookingLink: 'https://www.corallodgemozambique.com/'
      },
      {
        name: 'Santorini Mozambique',
        description: 'Greek-inspired luxury villa resort with ocean views and personalized service.',
        image: 'https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 5,
        price: '$500-1000',
        location: 'Vilanculos',
        bookingLink: 'https://www.santorinimozambique.com/'
      },
      {
        name: 'Ibo Island Lodge',
        description: 'Historic lodge in restored colonial mansions on Ibo Island in the Quirimbas Archipelago.',
        image: 'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        price: '$300-600',
        location: 'Ibo Island',
        bookingLink: 'https://www.iboisland.com/'
      },
      {
        name: 'Gorongosa Safari Camp',
        description: 'Luxury tented camp in Gorongosa National Park with wildlife viewing and conservation focus.',
        image: 'https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        price: '$300-600',
        location: 'Gorongosa National Park',
        bookingLink: 'https://www.gorongosa.org/stay-here/'
      },
      {
        name: 'Bahia Mar Boutique Hotel',
        description: 'Boutique hotel in Vilanculos with ocean views, pool, and access to Bazaruto Archipelago.',
        image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        price: '$200-400',
        location: 'Vilanculos',
        bookingLink: 'https://www.bahiamarclub.com/'
      },
      {
        name: 'Anantara Medjumbe Island Resort',
        description: 'Exclusive private island resort in the Quirimbas Archipelago with beachfront villas.',
        image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 5,
        price: '$800-1600',
        location: 'Quirimbas Archipelago',
        bookingLink: 'https://www.anantara.com/en/medjumbe-island'
      },
      {
        name: 'Dugong Beach Lodge',
        description: 'Luxury beach lodge in the Vilanculos Coastal Wildlife Sanctuary with marine experiences.',
        image: 'https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        price: '$300-600',
        location: 'Vilanculos',
        bookingLink: 'https://www.dugongbeachlodge.com/'
      },
      {
        name: 'Radisson Blu Hotel & Residence, Maputo',
        description: 'Modern luxury hotel in Maputo with ocean views, multiple restaurants, and business facilities.',
        image: 'https://images.pexels.com/photos/1670732/pexels-photo-1670732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 5,
        price: '$150-300',
        location: 'Maputo',
        bookingLink: 'https://www.radissonhotels.com/en-us/hotels/radisson-blu-maputo'
      },
      {
        name: 'Machangulo Beach Lodge',
        description: 'Luxury beach lodge on the Machangulo Peninsula with ocean and bay views.',
        image: 'https://images.pexels.com/photos/1670045/pexels-photo-1670045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        price: '$400-800',
        location: 'Machangulo Peninsula',
        bookingLink: 'https://www.machangulobeachlodge.com/'
      },
      {
        name: 'Tofo Mar Hotel',
        description: 'Beachfront hotel in Tofo with ocean views, restaurant, and diving center.',
        image: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 3,
        price: '$100-200',
        location: 'Tofo',
        bookingLink: 'https://www.tofo-mar.com/'
      },
      {
        name: 'Pemba Beach Hotel',
        description: 'Beachfront hotel in Pemba with pool, multiple restaurants, and gateway to Quirimbas.',
        image: 'https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        price: '$150-300',
        location: 'Pemba',
        bookingLink: 'https://www.pembabeachhotel.com/'
      },
      {
        name: 'Nuarro Lodge',
        description: 'Eco-lodge on a remote beach in northern Mozambique with diving and whale watching.',
        image: 'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        price: '$200-400',
        location: 'Memba Bay',
        bookingLink: 'https://www.nuarro.com/'
      },
      {
        name: 'Barra Beach Club',
        description: 'Beachfront resort near Inhambane with ocean views, restaurant, and water activities.',
        image: 'https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 3,
        price: '$100-200',
        location: 'Barra',
        bookingLink: 'https://www.barrabeachclub.com/'
      },
      {
        name: 'Southern Sun Maputo',
        description: 'Beachfront hotel in Maputo with ocean views, pool, and multiple restaurants.',
        image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        price: '$150-300',
        location: 'Maputo',
        bookingLink: 'https://www.tsogosun.com/southern-sun-maputo/'
      }
    ],
    restaurants: [
      {
        name: 'Zambi',
        cuisine: 'Fine dining restaurant in Maputo with seafood, Portuguese, and Mozambican influences.',
        image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        priceRange: '$30-60',
        location: 'Maputo',
        link: 'https://www.zambi.co.mz/'
      },
      {
        name: 'Restaurante Dhow',
        cuisine: 'Seafood restaurant with ocean views and fresh local catches in Maputo.',
        image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        priceRange: '$20-40',
        location: 'Maputo',
        link: 'https://www.dhowrestaurante.co.mz/'
      },
      {
        name: 'Clube Naval',
        cuisine: 'Historic waterfront restaurant with Portuguese and Mozambican cuisine.',
        image: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        priceRange: '$20-40',
        location: 'Maputo',
        link: 'https://www.clubenaval.co.mz/'
      },
      {
        name: 'Sagres',
        cuisine: 'Portuguese restaurant with traditional dishes and seafood specialties.',
        image: 'https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        priceRange: '$15-35',
        location: 'Maputo',
        link: 'https://www.sagres.co.mz/'
      },
      {
        name: 'Mercado do Peixe',
        cuisine: 'Seafood market where you select fresh fish and have it cooked to order.',
        image: 'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        priceRange: '$15-30',
        location: 'Maputo',
        link: 'https://www.mercadodopeixe.co.mz/'
      },
      {
        name: 'Baía dos Deuses',
        cuisine: 'Beachfront restaurant in Vilanculos with seafood and international cuisine.',
        image: 'https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        priceRange: '$20-40',
        location: 'Vilanculos',
        link: 'https://www.baiadeuses.co.mz/'
      },
      {
        name: 'Caravela',
        cuisine: 'Portuguese and Mozambican cuisine with seafood specialties and ocean views.',
        image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        priceRange: '$20-40',
        location: 'Pemba',
        link: 'https://www.caravela.co.mz/'
      },
      {
        name: 'Restaurante Sabores',
        cuisine: 'Traditional Mozambican cuisine with local flavors and ingredients.',
        image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 3,
        priceRange: '$10-25',
        location: 'Maputo',
        link: 'https://www.sabores.co.mz/'
      },
      {
        name: 'Docks',
        cuisine: 'Upscale restaurant in Maputo with international cuisine and waterfront views.',
        image: 'https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        priceRange: '$25-50',
        location: 'Maputo',
        link: 'https://www.docks.co.mz/'
      },
      {
        name: 'Restaurante Piri Piri',
        cuisine: 'Portuguese-Mozambican restaurant specializing in piri piri chicken and seafood.',
        image: 'https://images.pexels.com/photos/1670732/pexels-photo-1670732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        priceRange: '$15-30',
        location: 'Maputo',
        link: 'https://www.piripiri.co.mz/'
      },
      {
        name: 'Dolphin Dhow',
        cuisine: 'Seafood restaurant with dhow boat dining experiences in Vilanculos.',
        image: 'https://images.pexels.com/photos/1670045/pexels-photo-1670045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        priceRange: '$20-40',
        location: 'Vilanculos',
        link: 'https://www.dolphindhow.co.mz/'
      },
      {
        name: 'Restaurante Ilha',
        cuisine: 'Seafood restaurant on Ilha de Moçambique with historic setting and fresh catches.',
        image: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        priceRange: '$15-35',
        location: 'Ilha de Moçambique',
        link: 'https://www.restauranteilha.co.mz/'
      },
      {
        name: 'Tofo Tofo',
        cuisine: 'Beach restaurant in Tofo with seafood, international cuisine, and ocean views.',
        image: 'https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 3,
        priceRange: '$15-30',
        location: 'Tofo',
        link: 'https://www.tofotofo.co.mz/'
      },
      {
        name: 'Restaurante Escondidinho',
        cuisine: 'Traditional Portuguese restaurant in Maputo with authentic flavors and atmosphere.',
        image: 'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        priceRange: '$20-40',
        location: 'Maputo',
        link: 'https://www.escondidinho.co.mz/'
      },
      {
        name: 'Beira-Mar',
        cuisine: 'Seafood restaurant in Beira with ocean views and fresh local catches.',
        image: 'https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 3,
        priceRange: '$15-30',
        location: 'Beira',
        link: 'https://www.beiramar.co.mz/'
      },
      {
        name: 'Inhambane Café',
        cuisine: 'Historic café in Inhambane with Portuguese pastries, coffee, and light meals.',
        image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 3,
        priceRange: '$5-15',
        location: 'Inhambane',
        link: 'https://www.inhambanecafe.co.mz/'
      },
      {
        name: 'Pemba Dive & Bush Camp Restaurant',
        cuisine: 'Beach restaurant with international cuisine and ocean views in Pemba.',
        image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 3,
        priceRange: '$15-30',
        location: 'Pemba',
        link: 'https://www.pembadive.co.mz/restaurant/'
      },
      {
        name: 'Gorongosa Café',
        cuisine: 'Restaurant at Gorongosa National Park with international cuisine and conservation focus.',
        image: 'https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 3,
        priceRange: '$15-30',
        location: 'Gorongosa National Park',
        link: 'https://www.gorongosa.org/visit/dining/'
      },
      {
        name: 'Marisqueira Tropic',
        cuisine: 'Seafood restaurant in Maputo with Portuguese influences and fresh catches.',
        image: 'https://images.pexels.com/photos/1670732/pexels-photo-1670732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        priceRange: '$20-40',
        location: 'Maputo',
        link: 'https://www.marisqueiratropic.co.mz/'
      },
      {
        name: 'Flamingo Bay Restaurant',
        cuisine: 'Overwater restaurant at Flamingo Bay Water Lodge with seafood and international cuisine.',
        image: 'https://images.pexels.com/photos/1670045/pexels-photo-1670045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        priceRange: '$25-50',
        location: 'Inhambane',
        link: 'https://www.flamingobay.co.mz/dining/'
      }
    ]
  },
  {
    name: 'Malawi',
    description: 'The Warm Heart of Africa offering the crystal-clear waters of Lake Malawi, diverse landscapes, and authentic cultural experiences.',
    image: 'https://images.pexels.com/photos/4577179/pexels-photo-4577179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    region: 'Southern Africa',
    population: '19 million',
    attractions: [
      {
        name: 'Lake Malawi National Park',
        description: 'UNESCO World Heritage site with crystal-clear waters, colorful cichlid fish, and pristine beaches.',
        image: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Southern Malawi',
        link: 'https://whc.unesco.org/en/list/289/'
      },
      {
        name: 'Liwonde National Park',
        description: 'Premier wildlife sanctuary known for walking safaris, leopard sightings, and diverse ecosystems along the Shire River.',
        image: 'https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Southern Malawi',
        link: 'https://www.malawitourism.com/regions/south-malawi/liwonde-national-park/'
      },
      {
        name: 'Mulanje Mountain',
        description: 'Highest peaks in Central Africa with hiking trails and mountain villages.',
        image: 'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Southern Malawi',
        link: 'https://www.malawitourism.com/regions/south-malawi/mulanje-mountain/'
      },
      {
        name: 'Likoma Island',
        description: 'Remote island in Lake Malawi with pristine beaches, historic cathedral, and traditional villages.',
        image: 'https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Northern Lake Malawi',
        link: 'https://www.malawitourism.com/regions/north-malawi/likoma-island/'
      },
      {
        name: 'Nyika National Park',
        description: 'High altitude plateau with rolling hills, wildlife, and unique flora in northern Malawi.',
        image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Northern Malawi',
        link: 'https://www.malawitourism.com/regions/north-malawi/nyika-national-park/'
      },
      {
        name: 'Cape Maclear',
        description: 'Popular beach destination on Lake Malawi with snorkeling, diving, and lakeside lodges.',
        image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Southern Lake Malawi',
        link: 'https://www.malawitourism.com/regions/south-malawi/cape-maclear/'
      },
      {
        name: 'Zomba Plateau',
        description: 'Mountain plateau with forests, waterfalls, and panoramic views of the surrounding landscapes.',
        image: 'https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Southern Malawi',
        link: 'https://www.malawitourism.com/regions/south-malawi/zomba-plateau/'
      },
      {
        name: 'Majete Wildlife Reserve',
        description: 'Restored Big Five reserve with successful conservation story and diverse wildlife.',
        image: 'https://images.pexels.com/photos/1670732/pexels-photo-1670732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Southern Malawi',
        link: 'https://www.africanparks.org/the-parks/majete'
      },
      {
        name: 'Nkhotakota Wildlife Reserve',
        description: 'Vast wilderness area with ongoing wildlife reintroduction and pristine miombo woodland.',
        image: 'https://images.pexels.com/photos/1670045/pexels-photo-1670045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Central Malawi',
        link: 'https://www.africanparks.org/the-parks/nkhotakota'
      },
      {
        name: 'Chongoni Rock Art Area',
        description: 'UNESCO World Heritage site with ancient rock paintings and cultural significance.',
        image: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Central Malawi',
        link: 'https://whc.unesco.org/en/list/476/'
      },
      {
        name: 'Livingstonia',
        description: 'Historic mission station with colonial architecture and spectacular views from the escarpment.',
        image: 'https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Northern Malawi',
        link: 'https://www.malawitourism.com/regions/north-malawi/livingstonia/'
      },
      {
        name: 'Lilongwe Wildlife Centre',
        description: 'Wildlife sanctuary and rescue center in the capital city with conservation programs.',
        image: 'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Lilongwe',
        link: 'https://www.lilongwewildlife.org/'
      },
      {
        name: 'Viphya Plateau',
        description: 'Forested highland area with hiking, fishing, and outdoor activities in northern Malawi.',
        image: 'https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Northern Malawi',
        link: 'https://www.malawitourism.com/regions/north-malawi/viphya-plateau/'
      },
      {
        name: 'Mangochi',
        description: 'Lake Malawi beach town with resorts, water activities, and cultural experiences.',
        image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Southern Lake Malawi',
        link: 'https://www.malawitourism.com/regions/south-malawi/mangochi/'
      },
      {
        name: 'Blantyre',
        description: 'Malawi\'s commercial center with colonial architecture, museums, and cultural attractions.',
        image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Southern Malawi',
        link: 'https://www.malawitourism.com/regions/south-malawi/blantyre/'
      },
      {
        name: 'Mua Mission',
        description: 'Cultural center with Malawi\'s best museum of indigenous culture and woodcarving school.',
        image: 'https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Central Malawi',
        link: 'https://www.malawitourism.com/regions/central-malawi/mua-mission/'
      },
      {
        name: 'Nkhata Bay',
        description: 'Laid-back lakeside town with clear waters, diving, and backpacker atmosphere.',
        image: 'https://images.pexels.com/photos/1670732/pexels-photo-1670732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Northern Lake Malawi',
        link: 'https://www.malawitourism.com/regions/north-malawi/nkhata-bay/'
      },
      {
        name: 'Kasungu National Park',
        description: 'Off-the-beaten-path wildlife reserve with elephants, antelope, and diverse birdlife.',
        image: 'https://images.pexels.com/photos/1670045/pexels-photo-1670045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Central Malawi',
        link: 'https://www.malawitourism.com/regions/central-malawi/kasungu-national-park/'
      },
      {
        name: 'Senga Bay',
        description: 'Popular beach destination on Lake Malawi with resorts, water sports, and relaxed atmosphere.',
        image: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Central Lake Malawi',
        link: 'https://www.malawitourism.com/regions/central-malawi/senga-bay/'
      },
      {
        name: 'Dedza',
        description: 'Highland town known for pottery, rock art, and cooler climate in central Malawi.',
        image: 'https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Central Malawi',
        link: 'https://www.malawitourism.com/regions/central-malawi/dedza/'
      }
    ],
    transportation: [
      {
        type: 'Private 4x4 Vehicle',
        description: 'Luxury 4x4 vehicles with experienced drivers for exploring national parks and remote areas.',
        price: '$150-300/day',
        route: 'Cross-Country Exploration'
      },
      {
        type: 'Lake Cruises',
        description: 'Private boat trips on Lake Malawi with experienced captains and guides.',
        price: '$100-300/day',
        route: 'Lake Malawi Excursions'
      },
      {
        type: 'Domestic Flights',
        description: 'Time-saving flights between major destinations and remote areas.',
        price: '$150-300',
        route: 'Lilongwe to Likoma Island'
      },
      {
        type: 'Luxury Transfers',
        description: 'Private vehicle transfers between major destinations with professional drivers.',
        price: '$100-250',
        route: 'Airport & Hotel Transfers'
      }
    ],
    hotels: [
      {
        name: 'Kaya Mawa',
        description: 'Luxury lodge on Likoma Island with unique stone and thatch cottages built into the rocks overlooking Lake Malawi.',
        image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 5,
        price: '$400-800',
        location: 'Likoma Island',
        bookingLink: 'https://www.kayamawa.com/'
      },
      {
        name: 'Pumulani',
        description: 'Robin Pope Safaris luxury beach lodge on Lake Malawi with hillside villas and private beach.',
        image: 'https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 5,
        price: '$400-800',
        location: 'Lake Malawi National Park',
        bookingLink: 'https://www.robinpopesafaris.net/camps/pumulani/'
      },
      {
        name: 'Mvuu Lodge',
        description: 'Luxury safari lodge in Liwonde National Park overlooking the Shire River with wildlife viewing.',
        image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        price: '$300-600',
        location: 'Liwonde National Park',
        bookingLink: 'https://www.cawsmw.com/lodges/mvuu-lodge/'
      },
      {
        name: 'Mkulumadzi',
        description: 'Luxury lodge in Majete Wildlife Reserve with private chalets and wildlife viewing.',
        image: 'https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 5,
        price: '$400-800',
        location: 'Majete Wildlife Reserve',
        bookingLink: 'https://www.robinpopesafaris.net/camps/mkulumadzi/'
      },
      {
        name: 'Chelinda Lodge',
        description: 'Highland lodge in Nyika National Park with log cabins, fireplaces, and unique plateau landscapes.',
        image: 'https://images.pexels.com/photos/1670732/pexels-photo-1670732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        price: '$300-600',
        location: 'Nyika National Park',
        bookingLink: 'https://www.cawsmw.com/lodges/chelinda-lodge/'
      },
      {
        name: 'The Makokola Retreat',
        description: 'Luxury beach resort on Lake Malawi with spa, golf course, and water activities.',
        image: 'https://images.pexels.com/photos/1670045/pexels-photo-1670045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        price: '$200-400',
        location: 'Mangochi',
        bookingLink: 'https://www.theclub-makokola.com/'
      },
      {
        name: 'Mumbo Island Camp',
        description: 'Eco-friendly island camp in Lake Malawi National Park with rustic luxury and pristine environment.',
        image: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        price: '$300-600',
        location: 'Lake Malawi National Park',
        bookingLink: 'https://www.mumboisland.com/'
      },
      {
        name: 'Huntingdon House',
        description: 'Colonial-era plantation house on the Satemwa Tea Estate with elegant accommodations and gardens.',
        image: 'https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        price: '$200-400',
        location: 'Thyolo',
        bookingLink: 'https://www.satemwa.com/accommodation/huntingdon-house/'
      },
      {
        name: 'Tongole Wilderness Lodge',
        description: 'Luxury eco-lodge in Nkhotakota Wildlife Reserve with river views and conservation focus.',
        image: 'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        price: '$300-600',
        location: 'Nkhotakota Wildlife Reserve',
        bookingLink: 'https://www.tongole.com/'
      },
      {
        name: 'Danforth Yachting',
        description: 'Luxury lodge and yacht charter on Lake Malawi with sailing, diving, and water activities.',
        image: 'https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        price: '$200-400',
        location: 'Cape Maclear',
        bookingLink: 'https://www.danforthyachting.com/'
      },
      {
        name: 'Kumbali Country Lodge',
        description: 'Boutique lodge in a forest setting near Lilongwe with comfortable accommodations and restaurant.',
        image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        price: '$150-300',
        location: 'Lilongwe',
        bookingLink: 'https://www.kumbalilodge.com/'
      },
      {
        name: 'Blue Zebra Island Lodge',
        description: 'Island lodge in Lake Malawi National Park with tented chalets and water activities.',
        image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        price: '$200-400',
        location: 'Lake Malawi National Park',
        bookingLink: 'https://www.bluezebra.mw/'
      },
      {
        name: 'Sunbird Mount Soche',
        description: 'Modern hotel in Blantyre with city views, multiple restaurants, and business facilities.',
        image: 'https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        price: '$150-300',
        location: 'Blantyre',
        bookingLink: 'https://www.sunbirdmalawi.com/hotels/mount-soche/'
      },
      {
        name: 'Sunbird Capital Hotel',
        description: 'Business hotel in Lilongwe with modern amenities, restaurant, and central location.',
        image: 'https://images.pexels.com/photos/1670732/pexels-photo-1670732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        price: '$150-300',
        location: 'Lilongwe',
        bookingLink: 'https://www.sunbirdmalawi.com/hotels/capital/'
      },
      {
        name: 'Chawani Bungalow',
        description: 'Historic colonial bungalow on Zomba Plateau with mountain views and traditional atmosphere.',
        image: 'https://images.pexels.com/photos/1670045/pexels-photo-1670045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 3,
        price: '$100-200',
        location: 'Zomba Plateau',
        bookingLink: 'https://www.chawanibungalow.com/'
      },
      {
        name: 'Nkwichi Lodge',
        description: 'Remote eco-lodge on the Mozambican shore of Lake Malawi with pristine beach and wilderness.',
        image: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        price: '$300-600',
        location: 'Lake Malawi',
        bookingLink: 'https://www.nkwichi.com/'
      },
      {
        name: 'Luwawa Forest Lodge',
        description: 'Mountain lodge in the Viphya Plateau with hiking, fishing, and outdoor activities.',
        image: 'https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 3,
        price: '$100-200',
        location: 'Viphya Plateau',
        bookingLink: 'https://www.luwawaforestlodge.com/'
      },
      {
        name: 'Makuzi Beach Lodge',
        description: 'Intimate beach lodge on Lake Malawi with private beach and comfortable chalets.',
        image: 'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 3,
        price: '$150-300',
        location: 'Chintheche',
        bookingLink: 'https://www.makuzibeachlodge.com/'
      },
      {
        name: 'Sunbird Ku Chawe',
        description: 'Mountain resort on Zomba Plateau with panoramic views and colonial atmosphere.',
        image: 'https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 3,
        price: '$100-200',
        location: 'Zomba Plateau',
        bookingLink: 'https://www.sunbirdmalawi.com/hotels/ku-chawe/'
      },
      {
        name: 'Njaya Lodge',
        description: 'Laid-back lodge in Nkhata Bay with lake views, restaurant, and backpacker atmosphere.',
        image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 3,
        price: '$50-100',
        location: 'Nkhata Bay',
        bookingLink: 'https://www.njayalodge.com/'
      },
      {
        name: 'Thawale Lodge',
        description: 'Safari lodge in Majete Wildlife Reserve with comfortable tents and wildlife viewing.',
        image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 3,
        price: '$150-300',
        location: 'Majete Wildlife Reserve',
        bookingLink: 'https://www.africanparks.org/the-parks/majete/visit'
      }
    ],
    restaurants: [
      {
        name: '21 Grill',
        cuisine: 'Fine dining restaurant at Sunbird Mount Soche Hotel with steaks, international cuisine, and elegant atmosphere.',
        image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        priceRange: '$20-40',
        location: 'Blantyre',
        link: 'https://www.sunbirdmalawi.com/hotels/mount-soche/dining/'
      },
      {
        name: 'Latitude 13°',
        cuisine: 'Contemporary restaurant with international cuisine, cocktails, and stylish atmosphere.',
        image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        priceRange: '$15-35',
        location: 'Lilongwe',
        link: 'https://www.latitude13.com/dining/'
      },
      {
        name: 'Kumbali Lodge Restaurant',
        cuisine: 'Farm-to-table restaurant with organic ingredients and international cuisine.',
        image: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        priceRange: '$15-30',
        location: 'Lilongwe',
        link: 'https://www.kumbalilodge.com/restaurant/'
      },
      {
        name: 'Makokola Retreat Restaurant',
        cuisine: 'Lakeside restaurant with international cuisine and fresh seafood from Lake Malawi.',
        image: 'https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        priceRange: '$20-40',
        location: 'Mangochi',
        link: 'https://www.theclub-makokola.com/dining/'
      },
      {
        name: 'Pumulani Restaurant',
        cuisine: 'Luxury lodge restaurant with international cuisine and lake views.',
        image: 'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        priceRange: '$25-50',
        location: 'Lake Malawi National Park',
        link: 'https://www.robinpopesafaris.net/camps/pumulani/dining/'
      },
      {
        name: 'Mbalamanja Restaurant',
        cuisine: 'Traditional Malawian cuisine with authentic flavors and cultural atmosphere.',
        image: 'https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 3,
        priceRange: '$10-25',
        location: 'Blantyre',
        link: 'https://www.mbalamanja.com/'
      },
      {
        name: 'Kaya Mawa Restaurant',
        cuisine: 'Luxury lodge restaurant on Likoma Island with fresh ingredients and lake views.',
        image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 5,
        priceRange: '$30-60',
        location: 'Likoma Island',
        link: 'https://www.kayamawa.com/dining/'
      },
      {
        name: 'Jungle Pepper',
        cuisine: 'International restaurant in Lilongwe with diverse menu and casual atmosphere.',
        image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 3,
        priceRange: '$10-25',
        location: 'Lilongwe',
        link: 'https://www.junglepepper.com/'
      },
      {
        name: 'Tasty Bites',
        cuisine: 'Popular restaurant in Blantyre with international menu and local favorites.',
        image: 'https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 3,
        priceRange: '$10-25',
        location: 'Blantyre',
        link: 'https://www.tastybites.mw/'
      },
      {
        name: 'Mvuu Lodge Restaurant',
        cuisine: 'Safari lodge restaurant in Liwonde National Park with river views and wildlife.',
        image: 'https://images.pexels.com/photos/1670732/pexels-photo-1670732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        priceRange: '$25-50',
        location: 'Liwonde National Park',
        link: 'https://www.cawsmw.com/lodges/mvuu-lodge/dining/'
      },
      {
        name: 'Four Seasons Restaurant',
        cuisine: 'Chinese and international cuisine in Lilongwe with diverse menu.',
        image: 'https://images.pexels.com/photos/1670045/pexels-photo-1670045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 3,
        priceRange: '$10-25',
        location: 'Lilongwe',
        link: 'https://www.fourseasonsrestaurant.mw/'
      },
      {
        name: 'Huntingdon House Restaurant',
        cuisine: 'Colonial-style dining at historic tea plantation with traditional British and Malawian influences.',
        image: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        priceRange: '$20-40',
        location: 'Thyolo',
        link: 'https://www.satemwa.com/accommodation/huntingdon-house/dining/'
      },
      {
        name: 'Mkulumadzi Restaurant',
        cuisine: 'Safari lodge restaurant in Majete Wildlife Reserve with river views and international cuisine.',
        image: 'https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        priceRange: '$25-50',
        location: 'Majete Wildlife Reserve',
        link: 'https://www.robinpopesafaris.net/camps/mkulumadzi/dining/'
      },
      {
        name: 'Ku Chawe Inn Restaurant',
        cuisine: 'Mountain resort restaurant on Zomba Plateau with panoramic views and international cuisine.',
        image: 'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 3,
        priceRange: '$15-30',
        location: 'Zomba Plateau',
        link: 'https://www.sunbirdmalawi.com/hotels/ku-chawe/dining/'
      },
      {
        name: 'Fisherman\'s Rest',
        cuisine: 'Riverside restaurant with fresh fish, international cuisine, and community focus.',
        image: 'https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 3,
        priceRange: '$10-25',
        location: 'Blantyre',
        link: 'https://www.fishermansrest.net/'
      },
      {
        name: 'Mumbo Island Camp Restaurant',
        cuisine: 'Eco-friendly island camp restaurant with fresh ingredients and lake views.',
        image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        priceRange: '$25-50',
        location: 'Lake Malawi National Park',
        link: 'https://www.mumboisland.com/dining/'
      },
      {
        name: 'Tongole Wilderness Lodge Restaurant',
        cuisine: 'Eco-lodge restaurant in Nkhotakota Wildlife Reserve with river views and international cuisine.',
        image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        priceRange: '$25-50',
        location: 'Nkhotakota Wildlife Reserve',
        link: 'https://www.tongole.com/dining/'
      },
      {
        name: 'Makuzi Beach Lodge Restaurant',
        cuisine: 'Beachfront restaurant on Lake Malawi with fresh fish and international cuisine.',
        image: 'https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 3,
        priceRange: '$15-30',
        location: 'Chintheche',
        link: 'https://www.makuzibeachlodge.com/dining/'
      },
      {
        name: 'Chelinda Lodge Restaurant',
        cuisine: 'Mountain lodge restaurant in Nyika National Park with international cuisine and fireside dining.',
        image: 'https://images.pexels.com/photos/1670732/pexels-photo-1670732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        priceRange: '$25-50',
        location: 'Nyika National Park',
        link: 'https://www.cawsmw.com/lodges/chelinda-lodge/dining/'
      },
      {
        name: 'Sunbird Capital Brasserie',
        cuisine: 'Hotel restaurant in Lilongwe with international buffet and à la carte options.',
        image: 'https://images.pexels.com/photos/1670045/pexels-photo-1670045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 3,
        priceRange: '$15-30',
        location: 'Lilongwe',
        link: 'https://www.sunbirdmalawi.com/hotels/capital/dining/'
      }
    ]
  },
  {
    name: 'Eswatini',
    description: 'Formerly known as Swaziland, this small kingdom offers rich traditional culture, scenic mountain landscapes, wildlife reserves, and authentic African experiences.',
    image: 'https://images.pexels.com/photos/5490899/pexels-photo-5490899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    region: 'Southern Africa',
    population: '1.2 million',
    attractions: [
      {
        name: 'Mlilwane Wildlife Sanctuary',
        description: 'Eswatini\'s oldest protected area with diverse wildlife, hiking trails, and traditional beehive huts for accommodation.',
        image: 'https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Ezulwini Valley',
        link: 'https://www.biggameparks.org/mlilwane'
      },
      {
        name: 'Hlane Royal National Park',
        description: 'Eswatini\'s largest protected area with lions, elephants, rhinos, and traditional game drives.',
        image: 'https://images.pexels.com/photos/1670732/pexels-photo-1670732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Eastern Eswatini',
        link: 'https://www.biggameparks.org/hlane'
      },
      {
        name: 'Mkhaya Game Reserve',
        description: 'Exclusive wildlife sanctuary known for rhino conservation and intimate safari experiences.',
        image: 'https://images.pexels.com/photos/1670045/pexels-photo-1670045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Eastern Eswatini',
        link: 'https://www.biggameparks.org/mkhaya'
      },
      {
        name: 'Mantenga Cultural Village',
        description: 'Living museum showcasing traditional Swazi lifestyle, crafts, and cultural performances.',
        image: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Ezulwini Valley',
        link: 'https://www.mantengaculturalvillage.org/'
      },
      {
        name: 'Malolotja Nature Reserve',
        description: 'Mountainous reserve with Eswatini\'s highest waterfall, hiking trails, and diverse flora and fauna.',
        image: 'https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Northwestern Eswatini',
        link: 'https://www.sntc.org.sz/reserves/malolotja.html'
      },
      {
        name: 'Swazi Candles Craft Market',
        description: 'Colorful craft market featuring handmade candles, textiles, and traditional crafts.',
        image: 'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Malkerns Valley',
        link: 'https://www.swazicandles.com/'
      },
      {
        name: 'Ngwenya Glass Factory',
        description: 'Africa\'s oldest glass factory producing handmade glassware from recycled glass.',
        image: 'https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Ngwenya',
        link: 'https://www.ngwenyaglass.co.sz/'
      },
      {
        name: 'Sibebe Rock',
        description: 'World\'s second-largest monolith after Uluru with hiking opportunities and panoramic views.',
        image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Near Mbabane',
        link: 'https://www.thekingdomofeswatini.com/attractions/sibebe-rock/'
      },
      {
        name: 'Ezulwini Valley',
        description: 'Valley of Heaven with craft markets, hot springs, casinos, and cultural attractions.',
        image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Central Eswatini',
        link: 'https://www.thekingdomofeswatini.com/regions/ezulwini-valley/'
      },
      {
        name: 'Phophonyane Falls',
        description: 'Scenic waterfall and nature reserve with hiking trails and diverse birdlife.',
        image: 'https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Northern Eswatini',
        link: 'https://www.phophonyane.co.sz/'
      },
      {
        name: 'Shewula Mountain Camp',
        description: 'Community-run eco-tourism project offering authentic cultural experiences and stunning views.',
        image: 'https://images.pexels.com/photos/1670732/pexels-photo-1670732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Lubombo Region',
        link: 'https://www.shewulacamp.org/'
      },
      {
        name: 'Lobamba Royal Village',
        description: 'Ceremonial capital with royal residences, parliament, and national museum.',
        image: 'https://images.pexels.com/photos/1670045/pexels-photo-1670045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Lobamba',
        link: 'https://www.thekingdomofeswatini.com/attractions/lobamba-royal-village/'
      },
      {
        name: 'Nsangwini Rock Art',
        description: 'Ancient San rock art site with guided tours and cultural significance.',
        image: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Northern Eswatini',
        link: 'https://www.thekingdomofeswatini.com/attractions/nsangwini-rock-art/'
      },
      {
        name: 'Mbabane',
        description: 'Capital city with markets, restaurants, and gateway to nearby attractions.',
        image: 'https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Northwestern Eswatini',
        link: 'https://www.thekingdomofeswatini.com/regions/mbabane/'
      },
      {
        name: 'Manzini',
        description: 'Eswatini\'s largest urban center with vibrant markets and commercial activities.',
        image: 'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Central Eswatini',
        link: 'https://www.thekingdomofeswatini.com/regions/manzini/'
      },
      {
        name: 'Umhlanga Reed Dance',
        description: 'Annual cultural festival where thousands of young women gather to honor the Queen Mother.',
        image: 'https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Lobamba',
        link: 'https://www.thekingdomofeswatini.com/events/umhlanga-reed-dance/'
      },
      {
        name: 'Incwala Ceremony',
        description: 'Sacred kingship ceremony and Eswatini\'s most important cultural event.',
        image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Lobamba',
        link: 'https://www.thekingdomofeswatini.com/events/incwala-ceremony/'
      },
      {
        name: 'House on Fire',
        description: 'Unique arts and music venue hosting the famous Bushfire Festival.',
        image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Malkerns Valley',
        link: 'https://www.house-on-fire.com/'
      },
      {
        name: 'Maguga Dam',
        description: 'Large dam with scenic views, fishing, and water activities.',
        image: 'https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Northern Eswatini',
        link: 'https://www.thekingdomofeswatini.com/attractions/maguga-dam/'
      },
      {
        name: 'Hawane Resort',
        description: 'Highland resort with fishing, hiking, and mountain views.',
        image: 'https://images.pexels.com/photos/1670732/pexels-photo-1670732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Northern Eswatini',
        link: 'https://www.hawane.co.sz/'
      }
    ],
    transportation: [
      {
        type: 'Private 4x4 Vehicle',
        description: 'Luxury 4x4 vehicles with experienced drivers for exploring wildlife reserves and remote areas.',
        price: '$100-250/day',
        route: 'Cross-Country Exploration'
      },
      {
        type: 'Cultural Tours',
        description: 'Guided tours to traditional villages and cultural sites with knowledgeable guides.',
        price: '$80-200/day',
        route: 'Cultural Circuit'
      },
      {
        type: 'Safari Vehicles',
        description: 'Specialized vehicles for game drives in national parks and wildlife reserves.',
        price: '$150-300/day',
        route: 'Wildlife Reserves'
      },
      {
        type: 'Airport Transfers',
        description: 'Private transfers from airports to hotels and between destinations.',
        price: '$50-150',
        route: 'Airport to Hotels'
      }
    ],
    hotels: [
      {
        name: 'Royal Swazi Spa',
        description: 'Luxury resort with golf course, casino, spa, and multiple restaurants in the Ezulwini Valley.',
        image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        price: '$150-300',
        location: 'Ezulwini Valley',
        bookingLink: 'https://www.suninternational.com/royal-swazi/'
      },
      {
        name: 'Reilly\'s Rock Hilltop Lodge',
        description: 'Historic lodge in Mlilwane Wildlife Sanctuary with colonial atmosphere and wildlife viewing.',
        image: 'https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        price: '$150-300',
        location: 'Mlilwane Wildlife Sanctuary',
        bookingLink: 'https://www.biggameparks.org/accommodation/reillys-rock'
      },
      {
        name: 'Foresters Arms',
        description: 'Historic country hotel in the highlands with English atmosphere and beautiful gardens.',
        image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 3,
        price: '$100-200',
        location: 'Mhlambanyatsi',
        bookingLink: 'https://www.forestersarms.co.sz/'
      },
      {
        name: 'Mkhaya Stone Camp',
        description: 'Unique safari camp in Mkhaya Game Reserve with stone cottages and exceptional rhino viewing.',
        image: 'https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        price: '$200-400',
        location: 'Mkhaya Game Reserve',
        bookingLink: 'https://www.biggameparks.org/accommodation/stone-camp'
      },
      {
        name: 'Phophonyane Falls Ecolodge',
        description: 'Eco-friendly lodge near waterfalls with beautiful gardens and hiking trails.',
        image: 'https://images.pexels.com/photos/1670732/pexels-photo-1670732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        price: '$100-200',
        location: 'Piggs Peak',
        bookingLink: 'https://www.phophonyane.co.sz/'
      },
      {
        name: 'Mountain Inn',
        description: 'Comfortable hotel in Mbabane with mountain views and central location.',
        image: 'https://images.pexels.com/photos/1670045/pexels-photo-1670045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 3,
        price: '$80-160',
        location: 'Mbabane',
        bookingLink: 'https://www.mountaininn.sz/'
      },
      {
        name: 'Mantenga Lodge',
        description: 'Boutique lodge in the Ezulwini Valley with mountain views and proximity to cultural attractions.',
        image: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 3,
        price: '$100-200',
        location: 'Ezulwini Valley',
        bookingLink: 'https://www.mantengalodge.com/'
      },
      {
        name: 'Hawane Resort',
        description: 'Highland resort with fishing, hiking, and mountain views.',
        image: 'https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 3,
        price: '$80-160',
        location: 'Northern Eswatini',
        bookingLink: 'https://www.hawane.co.sz/'
      },
      {
        name: 'Mlilwane Rest Camp',
        description: 'Traditional beehive huts and camping in Mlilwane Wildlife Sanctuary with wildlife viewing.',
        image: 'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 3,
        price: '$50-100',
        location: 'Mlilwane Wildlife Sanctuary',
        bookingLink: 'https://www.biggameparks.org/accommodation/rest-camp'
      },
      {
        name: 'Shewula Mountain Camp',
        description: 'Community-run eco-tourism project with traditional accommodations and cultural experiences.',
        image: 'https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 3,
        price: '$50-100',
        location: 'Lubombo Region',
        bookingLink: 'https://www.shewulacamp.org/'
      },
      {
        name: 'Hlane Royal National Park Camp',
        description: 'Safari camp in Hlane Royal National Park with wildlife viewing and traditional accommodations.',
        image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 3,
        price: '$80-160',
        location: 'Hlane Royal National Park',
        bookingLink: 'https://www.biggameparks.org/accommodation/ndlovu-camp'
      },
      {
        name: 'Maguga Lodge',
        description: 'Lodge overlooking Maguga Dam with water activities and mountain views.',
        image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 3,
        price: '$80-160',
        location: 'Maguga Dam',
        bookingLink: 'https://www.magugalodge.com/'
      },
      {
        name: 'Mogi Boutique Hotel',
        description: 'Modern boutique hotel in Ezulwini Valley with stylish design and amenities.',
        image: 'https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        price: '$100-200',
        location: 'Ezulwini Valley',
        bookingLink: 'https://www.mogihotel.com/'
      },
      {
        name: 'Lidwala Lodge',
        description: 'Backpacker lodge with comfortable accommodations and mountain views.',
        image: 'https://images.pexels.com/photos/1670732/pexels-photo-1670732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 3,
        price: '$30-80',
        location: 'Ezulwini Valley',
        bookingLink: 'https://www.lidwala.co.sz/'
      },
      {
        name: 'Happy Valley Hotel',
        description: 'Business hotel in Ezulwini Valley with conference facilities and restaurant.',
        image: 'https://images.pexels.com/photos/1670045/pexels-photo-1670045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 3,
        price: '$80-160',
        location: 'Ezulwini Valley',
        bookingLink: 'https://www.happyvalleyhotel.com/'
      },
      {
        name: 'Sibebe Backpackers',
        description: 'Eco-friendly backpacker lodge near Sibebe Rock with hiking access.',
        image: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 2,
        price: '$20-60',
        location: 'Mbabane',
        bookingLink: 'https://www.sibebebackpackers.com/'
      },
      {
        name: 'Malolotja Eco Lodge',
        description: 'Eco-friendly lodge in Malolotja Nature Reserve with hiking and wildlife viewing.',
        image: 'https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 3,
        price: '$80-160',
        location: 'Malolotja Nature Reserve',
        bookingLink: 'https://www.sntc.org.sz/accommodation/malolotja.html'
      },
      {
        name: 'Buhleni Farm Chalets',
        description: 'Farm stay with self-catering chalets and rural atmosphere.',
        image: 'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 3,
        price: '$60-120',
        location: 'Malkerns Valley',
        bookingLink: 'https://www.buhlenifarm.com/'
      },
      {
        name: 'Summerfield Botanical Garden Resort',
        description: 'Luxury resort set in botanical gardens with spa and fine dining.',
        image: 'https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 5,
        price: '$200-400',
        location: 'Manzini',
        bookingLink: 'https://www.summerfieldresort.com/'
      },
      {
        name: 'Piggs Peak Hotel',
        description: 'Mountain hotel with casino, restaurant, and scenic views.',
        image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 3,
        price: '$80-160',
        location: 'Piggs Peak',
        bookingLink: 'https://www.piggspeakhotel.co.sz/'
      }
    ],
    restaurants: [
      {
        name: 'Edladleni Restaurant',
        cuisine: 'Traditional Swazi cuisine with cultural performances and authentic atmosphere.',
        image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        priceRange: '$15-30',
        location: 'Ezulwini Valley',
        link: 'https://www.edladleni.co.sz/'
      },
      {
        name: 'Calabash Restaurant',
        cuisine: 'Fine dining restaurant at Royal Swazi Spa with international cuisine and elegant atmosphere.',
        image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        priceRange: '$20-40',
        location: 'Ezulwini Valley',
        link: 'https://www.suninternational.com/royal-swazi/dining/calabash/'
      },
      {
        name: 'Malandela\'s Restaurant',
        description: 'Farm-to-table restaurant at House on Fire with international cuisine and artistic atmosphere.',
        image: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        priceRange: '$15-30',
        location: 'Malkerns Valley',
        link: 'https://www.malandelas.com/'
      },
      {
        name: 'Foresters Arms Pub & Restaurant',
        cuisine: 'Traditional English pub food and local specialties in a historic country hotel.',
        image: 'https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        priceRange: '$15-30',
        location: 'Mhlambanyatsi',
        link: 'https://www.forestersarms.co.sz/restaurant/'
      },
      {
        name: 'Mantenga Lodge Restaurant',
        cuisine: 'International cuisine with mountain views and relaxed atmosphere.',
        image: 'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 3,
        priceRange: '$15-30',
        location: 'Ezulwini Valley',
        link: 'https://www.mantengalodge.com/restaurant/'
      },
      {
        name: 'Mountain Inn Restaurant',
        cuisine: 'International cuisine with mountain views and comfortable atmosphere.',
        image: 'https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 3,
        priceRange: '$15-30',
        location: 'Mbabane',
        link: 'https://www.mountaininn.sz/restaurant/'
      },
      {
        name: 'Sambane Coffee Shop',
        cuisine: 'Café with coffee, pastries, and light meals in a relaxed setting.',
        image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 3,
        priceRange: '$5-15',
        location: 'Mbabane',
        link: 'https://www.sambanecoffee.co.sz/'
      },
      {
        name: 'Swazi Candles Café',
        cuisine: 'Café at the craft market with light meals, coffee, and relaxed atmosphere.',
        image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 3,
        priceRange: '$5-15',
        location: 'Malkerns Valley',
        link: 'https://www.swazicandles.com/cafe/'
      },
      {
        name: 'Summerfield Botanical Restaurant',
        cuisine: 'Fine dining in botanical gardens with international cuisine and elegant atmosphere.',
        image: 'https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 5,
        priceRange: '$25-50',
        location: 'Manzini',
        link: 'https://www.summerfieldresort.com/restaurant/'
      },
      {
        name: 'Ngwenya Glass Restaurant',
        cuisine: 'Restaurant at the glass factory with international menu and views of glassblowing.',
        image: 'https://images.pexels.com/photos/1670732/pexels-photo-1670732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 3,
        priceRange: '$10-25',
        location: 'Ngwenya',
        link: 'https://www.ngwenyaglass.co.sz/restaurant/'
      },
      {
        name: 'Phophonyane Falls Restaurant',
        cuisine: 'Eco-lodge restaurant with garden setting and international cuisine.',
        image: 'https://images.pexels.com/photos/1670045/pexels-photo-1670045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        priceRange: '$15-30',
        location: 'Piggs Peak',
        link: 'https://www.phophonyane.co.sz/restaurant/'
      },
      {
        name: 'Maguga Lodge Restaurant',
        cuisine: 'Lodge restaurant overlooking Maguga Dam with international menu.',
        image: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 3,
        priceRange: '$10-25',
        location: 'Maguga Dam',
        link: 'https://www.magugalodge.com/restaurant/'
      },
      {
        name: 'Mlilwane Rest Camp Restaurant',
        cuisine: 'Safari camp restaurant with international cuisine and wildlife viewing.',
        image: 'https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 3,
        priceRange: '$10-25',
        location: 'Mlilwane Wildlife Sanctuary',
        link: 'https://www.biggameparks.org/accommodation/rest-camp/dining/'
      },
      {
        name: 'Mkhaya Stone Camp Restaurant',
        cuisine: 'Safari lodge restaurant with traditional cuisine and bush dining experiences.',
        image: 'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        priceRange: '$20-40',
        location: 'Mkhaya Game Reserve',
        link: 'https://www.biggameparks.org/accommodation/stone-camp/dining/'
      },
      {
        name: 'Shewula Mountain Camp Restaurant',
        cuisine: 'Community-run restaurant with traditional Swazi cuisine and cultural experiences.',
        image: 'https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 3,
        priceRange: '$10-20',
        location: 'Lubombo Region',
        link: 'https://www.shewulacamp.org/restaurant/'
      },
      {
        name: 'Hlane Royal National Park Restaurant',
        cuisine: 'Safari camp restaurant with international cuisine and wildlife viewing.',
        image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 3,
        priceRange: '$15-30',
        location: 'Hlane Royal National Park',
        link: 'https://www.biggameparks.org/accommodation/ndlovu-camp/dining/'
      },
      {
        name: 'Buhleni Farm Restaurant',
        cuisine: 'Farm restaurant with home-style cooking and rural atmosphere.',
        image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 3,
        priceRange: '$10-25',
        location: 'Malkerns Valley',
        link: 'https://www.buhlenifarm.com/restaurant/'
      },
      {
        name: 'Piggs Peak Hotel Restaurant',
        cuisine: 'Hotel restaurant with international menu and mountain views.',
        image: 'https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 3,
        priceRange: '$15-30',
        location: 'Piggs Peak',
        link: 'https://www.piggspeakhotel.co.sz/restaurant/'
      },
      {
        name: 'Lidwala Lodge Restaurant',
        cuisine: 'Backpacker lodge restaurant with international menu and relaxed atmosphere.',
        image: 'https://images.pexels.com/photos/1670732/pexels-photo-1670732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 3,
        priceRange: '$8-20',
        location: 'Ezulwini Valley',
        link: 'https://www.lidwala.co.sz/restaurant/'
      },
      {
        name: 'Happy Valley Hotel Restaurant',
        cuisine: 'Hotel restaurant with international cuisine and business atmosphere.',
        image: 'https://images.pexels.com/photos/1670045/pexels-photo-1670045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 3,
        priceRange: '$15-30',
        location: 'Ezulwini Valley',
        link: 'https://www.happyvalleyhotel.com/restaurant/'
      }
    ]
  }
];

// Export featured countries for the homepage
export const featuredCountries = allCountries.slice(0, 6);