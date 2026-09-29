import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Send, MapPin, Phone, Facebook, Twitter, Instagram, Youtube, Linkedin } from 'lucide-react';
import { supabase } from '../lib/supabase';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes('@')) {
      setMessage('Please enter a valid email address');
      return;
    }

    const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
    const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseKey) {
      setMessage('Configuration error: Please contact support at Himamaafrica@gmail.com');
      console.error('Missing environment variables:', { supabaseUrl: !!supabaseUrl, supabaseKey: !!supabaseKey });
      return;
    }

    setLoading(true);
    setMessage('');

    try {
      const { data, error } = await supabase
        .from('newsletter_subscribers')
        .insert({
          email: email.toLowerCase(),
          source: 'footer_form',
          is_active: true
        })
        .select();

      if (error) {
        console.error('Newsletter error details:', {
          message: error.message,
          details: error.details,
          hint: error.hint,
          code: error.code
        });

        if (error.code === '23505') {
          setMessage('You are already subscribed to our newsletter!');
        } else {
          setMessage(`Error: ${error.message}. Please try again.`);
        }
      } else {
        console.log('Newsletter subscription successful:', data);
        setMessage('Thank you for subscribing!');
        setEmail('');
      }
    } catch (error: any) {
      console.error('Newsletter subscription error:', error);
      setMessage(`An error occurred: ${error?.message || 'Unknown error'}. Please try again.`);
    } finally {
      setLoading(false);
      setTimeout(() => setMessage(''), 5000);
    }
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-50 via-white to-gray-50 text-gray-900">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1670732/pexels-photo-1670732.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-5"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              Mother Africa
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Discover the beauty and diversity of Africa. Your gateway to unforgettable African adventures and cultural experiences.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-100 hover:bg-amber-500 rounded-full transition-all duration-300 hover:scale-110 text-gray-700 hover:text-white">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-100 hover:bg-amber-500 rounded-full transition-all duration-300 hover:scale-110 text-gray-700 hover:text-white">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-100 hover:bg-amber-500 rounded-full transition-all duration-300 hover:scale-110 text-gray-700 hover:text-white">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-100 hover:bg-amber-500 rounded-full transition-all duration-300 hover:scale-110 text-gray-700 hover:text-white">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-100 hover:bg-amber-500 rounded-full transition-all duration-300 hover:scale-110 text-gray-700 hover:text-white">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-amber-600">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-700 hover:text-amber-600 transition-colors duration-300 flex items-center">
                  <span className="mr-2">→</span> Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-700 hover:text-amber-600 transition-colors duration-300 flex items-center">
                  <span className="mr-2">→</span> About Us
                </Link>
              </li>
              <li>
                <Link to="/search" className="text-gray-700 hover:text-amber-600 transition-colors duration-300 flex items-center">
                  <span className="mr-2">→</span> Destinations
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-700 hover:text-amber-600 transition-colors duration-300 flex items-center">
                  <span className="mr-2">→</span> Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-amber-600">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-amber-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-500 text-sm">Email</p>
                  <a href="mailto:Himamaafrica@gmail.com" className="text-gray-900 hover:text-amber-600 transition-colors">
                    Himamaafrica@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-amber-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-500 text-sm">Location</p>
                  <p className="text-gray-900">Across Africa</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-amber-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-500 text-sm">Support</p>
                  <p className="text-gray-900">Available 24/7</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-amber-600">Newsletter</h3>
            <p className="text-gray-700 mb-4">
              Subscribe to get the latest updates on African destinations and travel tips.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-gray-900 placeholder-gray-400 transition-all"
                  disabled={loading}
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
              >
                <span>{loading ? 'Subscribing...' : 'Subscribe'}</span>
                <Send className="h-4 w-4" />
              </button>
              {message && (
                <p className={`text-sm ${message.includes('Thank') ? 'text-green-600' : 'text-amber-600'}`}>
                  {message}
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Mother Africa. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-500 hover:text-amber-600 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-500 hover:text-amber-600 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;