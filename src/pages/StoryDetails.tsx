import React from 'react';
import { ArrowLeft, ArrowRight, CalendarDays, MapPin } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { getAfricaStory } from '../data/stories';

const StoryDetails = () => {
  const { storySlug } = useParams<{ storySlug: string }>();
  const story = storySlug ? getAfricaStory(storySlug) : undefined;

  if (!story) {
    return (
      <main className="min-h-[70vh] flex items-center justify-center px-6 text-center">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-amber-700 mb-3">Story not found</p>
          <h1 className="text-4xl font-black text-gray-900 mb-6">That page has moved on.</h1>
          <Link to="/" className="african-button inline-flex items-center gap-2">Back to Discover Africa <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-[#f8f7f3]">
      <section className="relative min-h-[58vh] flex items-end overflow-hidden bg-black">
        <img src={story.image} alt={story.title} className="absolute inset-0 w-full h-full object-cover opacity-75" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/10" />
        <div className="relative z-10 max-w-5xl mx-auto w-full px-6 lg:px-8 pb-16 pt-24 text-white">
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-amber-300 transition-colors mb-10"><ArrowLeft className="h-4 w-4" /> Back to stories</Link>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-300 mb-4">{story.category}</p>
          <h1 className="text-4xl md:text-6xl font-black leading-tight max-w-4xl">{story.title}</h1>
          <div className="flex flex-wrap gap-5 mt-6 text-sm text-white/75">
            <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-amber-300" /> {story.location}</span>
            <span className="inline-flex items-center gap-2"><CalendarDays className="h-4 w-4 text-amber-300" /> {story.readTime}</span>
          </div>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-6 lg:px-8 py-16 md:py-24">
        <p className="text-xl md:text-2xl leading-relaxed text-gray-700 font-medium mb-12">{story.introduction}</p>
        <div className="space-y-10">
          {story.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-3">{section.heading}</h2>
              <p className="text-gray-600 leading-8 text-base md:text-lg">{section.text}</p>
            </section>
          ))}
        </div>
        <div className="border-t border-gray-200 mt-14 pt-8">
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-bold text-amber-700 hover:text-amber-900 transition-colors"><ArrowLeft className="h-4 w-4" /> Discover more stories</Link>
        </div>
      </article>
    </main>
  );
};

export default StoryDetails;
