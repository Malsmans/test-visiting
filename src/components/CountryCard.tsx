import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, MapPin } from 'lucide-react';
import { Country } from '../types';

interface CountryCardProps {
  country: Country;
}

const CountryCard: React.FC<CountryCardProps> = ({ country }) => {
  const countrySlug = country.name.toLowerCase().replace(/\s+/g, '-');

  return (
    <Link
      to={`/country/${countrySlug}`}
      className="group block overflow-hidden rounded-2xl bg-white border border-[#e8e5dc] transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/10"
    >
      <div className="relative h-60 overflow-hidden bg-gray-200">
        <img
          src={country.image}
          alt={country.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent" />
        <div className="absolute left-5 right-5 bottom-4 flex items-end justify-between gap-4">
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-amber-200">{country.region}</span>
          <span className="h-9 w-9 rounded-full bg-white/90 text-gray-900 flex items-center justify-center transition-transform duration-300 group-hover:rotate-45">
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>
      </div>
      <div className="px-5 py-4 flex items-center justify-between gap-4">
        <h3 className="text-xl font-extrabold text-gray-900 group-hover:text-amber-700 transition-colors">{country.name}</h3>
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-500 whitespace-nowrap">
          <MapPin className="h-3.5 w-3.5 text-amber-700" />
          {country.attractions.length} destinations
        </span>
      </div>
    </Link>
  );
};

export default CountryCard;
