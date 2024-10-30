import React from 'react';
import { MapPin, Mail, Phone, Facebook, Instagram, Twitter } from 'lucide-react';
import TeamMember from '../components/about/TeamMember';

const AboutPage = () => {
  const teamMembers = [
    {
      name: 'Nande Ishuna',
      role: 'Founder & Head Mixologist',
      image: 'https://images.unsplash.com/photo-1583394293214-28ded15ee548?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
      bio: 'Passionate mixologist with 14 years of experience in craft cocktails and hospitality education.'
    },
    {
      name: 'Alma Alina Shiimi',
      role: 'Events Director',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
      bio: 'Expert in event coordination and mobile bar services.'
    },
    {
      name: 'Bonny Shatyohamba',
      role: 'Bar Operations Manager',
      image: 'https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
      bio: 'Specialist in bar operations and staff training.'
    }
  ];

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="relative h-[400px]">
        <img
          src="https://images.unsplash.com/photo-1516997121675-4c2d1684aa3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
          className="w-full h-full object-cover"
          alt="Bar atmosphere"
        />
        <div className="absolute inset-0 bg-black/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="text-white">
              <h1 className="text-4xl font-bold mb-4">About Legends of Cocktails</h1>
              <p className="text-xl max-w-2xl">
                Namibia's leading mobile bar service and mixology academy, crafting unforgettable experiences one cocktail at a time.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-600 mb-6">
              Founded with a passion for exceptional cocktails and service, Legends of Cocktails 
              has grown to become Namibia's premier mobile bar service and mixology academy.
            </p>
            <p className="text-gray-600">
              We specialize in creating unique drinking experiences through our mobile bar services, 
              custom cocktail creation, and professional bartender training programs.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
            <p className="text-gray-600 mb-6">
              We aim to elevate Namibia's cocktail culture by providing world-class mobile bar 
              services and education that blend international standards with local flavors.
            </p>
            <p className="text-gray-600">
              Through our commitment to excellence and innovation, we're setting new standards 
              in the hospitality industry while celebrating Namibia's unique identity.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <MapPin className="h-6 w-6 text-amber-600" />
                <span className="text-gray-600">
                  3 Potgieter str, Pioneerspark, Windhoek, Namibia
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="h-6 w-6 text-amber-600" />
                <span className="text-gray-600">Legendsofcocktails@gmail.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="h-6 w-6 text-amber-600" />
                <span className="text-gray-600">+264 85 758 1864</span>
              </div>
              <div className="flex space-x-4 pt-4">
                <a href="https://www.instagram.com/legends.of.cocktails.namibia/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-amber-600 transition">
                  <Instagram className="h-6 w-6" />
                </a>
              </div>
            </div>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-600 focus:border-amber-600"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-600 focus:border-amber-600"
              />
              <textarea
                rows={4}
                placeholder="Your Message"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-600 focus:border-amber-600"
              />
              <button
                type="submit"
                className="w-full bg-amber-600 text-white py-2 rounded-md hover:bg-amber-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;