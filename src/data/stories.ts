export interface AfricaStory {
  slug: string;
  title: string;
  category: string;
  description: string;
  readTime: string;
  image: string;
  location: string;
  introduction: string;
  sections: { heading: string; text: string }[];
}

export const africaStories: AfricaStory[] = [
  {
    slug: 'african-journeys-worth-taking',
    title: 'The African journeys worth taking once',
    category: 'Places to visit',
    description: 'From the Atlas Mountains to the Okavango Delta, these are the landscapes that stay with you long after the journey home.',
    readTime: '6 min read',
    image: 'https://images.pexels.com/photos/25254928/pexels-photo-25254928.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    location: 'Across the continent',
    introduction: 'Africa rewards the curious traveller with a kind of scale that is hard to find anywhere else. Every region has its own rhythm, colour, and welcome.',
    sections: [
      { heading: 'Begin with contrast', text: 'Pair the medinas and mountain air of Morocco with the open waterways of Botswana, or move from Cape Town’s coastline into the quiet of the Great Karoo.' },
      { heading: 'Leave room for the unexpected', text: 'The most memorable moments often arrive between landmarks: a shared table, a roadside market, or the first call of birds outside a camp at dawn.' },
    ],
  },
  {
    slug: 'africas-best-coastlines',
    title: 'The coastlines made for slow travel',
    category: 'Beaches',
    description: 'Trade busy itineraries for white sand, warm water, and the easy rhythm of Zanzibar, Cape Town, and the Indian Ocean.',
    readTime: '4 min read',
    image: 'https://images.pexels.com/photos/36468248/pexels-photo-36468248.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    location: 'Zanzibar, Tanzania',
    introduction: 'The best African beach days are deliberately unhurried. They begin with warm water, continue with a long lunch, and end as the horizon turns gold.',
    sections: [
      { heading: 'Choose your pace', text: 'Zanzibar is made for drifting between reef swims, spice-scented kitchens, and the soft pulse of coastal villages. For a city-and-sea pairing, Cape Town offers a dramatic change of scene.' },
      { heading: 'Travel with respect', text: 'Support local guides, choose stays that protect the coastline, and leave the beach exactly as you found it. The coast is part of the community, not just a backdrop.' },
    ],
  },
  {
    slug: 'where-the-wild-sets-the-schedule',
    title: 'Where the wild still sets the schedule',
    category: 'Safaris',
    description: 'Follow the herds across the Serengeti and Maasai Mara for a front-row seat to one of nature’s greatest migrations.',
    readTime: '7 min read',
    image: 'https://images.pexels.com/photos/33498304/pexels-photo-33498304.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    location: 'Serengeti and Maasai Mara',
    introduction: 'A safari is less about ticking animals off a list and more about learning to notice. The landscape changes by the hour, and patience is part of the adventure.',
    sections: [
      { heading: 'Follow the seasons', text: 'The movement of wildebeest and zebra is shaped by rain, grass, and instinct. Local guides read those clues and help you find the story unfolding in front of you.' },
      { heading: 'Make the quiet moments count', text: 'A single giraffe beneath an acacia or a lion settling into the shade can be just as powerful as a dramatic crossing. Keep the vehicle still and let the scene come to you.' },
    ],
  },
  {
    slug: 'first-time-african-safari-guide',
    title: 'A first-timer’s guide to planning an African safari',
    category: 'Travel notes',
    description: 'The simple decisions that turn a first safari into a comfortable, thoughtful, unforgettable journey.',
    readTime: '6 min read',
    image: 'https://images.pexels.com/photos/4404524/pexels-photo-4404524.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    location: 'Tanzania',
    introduction: 'Your first safari does not need to be complicated. Start with the season, the kind of wildlife experience you want, and the amount of time you can give the landscape.',
    sections: [
      { heading: 'Pick the experience first', text: 'Decide whether your priority is migration, big cats, walking safaris, or a quieter private conservancy. The right region follows naturally from that choice.' },
      { heading: 'Pack lightly and thoughtfully', text: 'Neutral layers, a good pair of binoculars, sun protection, and a small day bag will take you further than an overloaded suitcase.' },
    ],
  },
  {
    slug: 'victoria-falls-the-thunder-between-two-countries',
    title: 'Victoria Falls: the thunder that connects two countries',
    category: 'Iconic places',
    description: 'A guide to experiencing one of the world’s most powerful natural wonders from both Zimbabwe and Zambia.',
    readTime: '4 min read',
    image: 'https://images.pexels.com/photos/17435022/pexels-photo-17435022.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    location: 'Zimbabwe and Zambia',
    introduction: 'Victoria Falls is not simply something to see. It is something to hear, feel, and carry with you: mist in the air, water in constant motion, and a river that ignores borders.',
    sections: [
      { heading: 'See both sides', text: 'The Zimbabwean viewpoints offer a broad, immersive panorama, while Zambia brings you close to the river’s edge. Together they make the story feel complete.' },
      { heading: 'Stay for the wider landscape', text: 'Give yourself time for a sunset cruise, a local meal, and a quiet morning along the Zambezi. The falls are the beginning of the journey, not its only chapter.' },
    ],
  },
  {
    slug: 'morocco-food-colour-and-craft',
    title: 'A weekend of food, colour, and craft in Morocco',
    category: 'Culture',
    description: 'A slower way to experience Morocco through its kitchens, courtyards, markets, and makers.',
    readTime: '5 min read',
    image: 'https://images.pexels.com/photos/1161927/pexels-photo-1161927.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    location: 'Morocco',
    introduction: 'Morocco is best discovered at walking pace. Follow the sound of a metalworker, the scent of mint tea, or the warm invitation from a neighbourhood kitchen.',
    sections: [
      { heading: 'Let the medina lead', text: 'The old city is a living map of craft and community. Leave the main route, notice the details, and make time for the makers who give each place its character.' },
      { heading: 'Eat locally', text: 'Share a tagine, seek out a morning market, and ask what is freshest today. Moroccan food tells the story of its landscapes in every spice and texture.' },
    ],
  },
];

export const getAfricaStory = (slug: string) => africaStories.find((story) => story.slug === slug);
