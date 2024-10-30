import React from 'react';
import { GraduationCap, Award, Users } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative pt-16 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1516997121675-4c2d1684aa3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
          className="w-full h-full object-cover"
          alt="Bartending"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="lg:w-2/3">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Legends of Cocktails Namibia
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Namibia's premier mobile bar service and mixology academy. Experience exceptional 
            bartending, custom cocktail creation, and professional training.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition font-semibold">
              Book Our Services
            </button>
            <button className="px-8 py-4 bg-white/10 text-white rounded-lg hover:bg-white/20 transition backdrop-blur-sm font-semibold">
              Explore Courses
            </button>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <GraduationCap className="h-8 w-8 text-amber-500" />
              <span className="text-white">Mobile Bar Services</span>
            </div>
            <div className="flex items-center space-x-3">
              <Award className="h-8 w-8 text-amber-500" />
              <span className="text-white">Custom Cocktails</span>
            </div>
            <div className="flex items-center space-x-3">
              <Users className="h-8 w-8 text-amber-500" />
              <span className="text-white">Professional Training</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;