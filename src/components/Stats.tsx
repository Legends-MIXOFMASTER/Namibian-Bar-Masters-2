import React from 'react';
import { Users, GraduationCap, Award, Star } from 'lucide-react';

const Stats = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Users className="h-8 w-8 text-amber-600" />
            </div>
            <div className="text-4xl font-bold text-gray-900 mb-2">500+</div>
            <div className="text-gray-600">Events Serviced</div>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <GraduationCap className="h-8 w-8 text-amber-600" />
            </div>
            <div className="text-4xl font-bold text-gray-900 mb-2">100+</div>
            <div className="text-gray-600">Custom Cocktails</div>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Award className="h-8 w-8 text-amber-600" />
            </div>
            <div className="text-4xl font-bold text-gray-900 mb-2">50+</div>
            <div className="text-gray-600">Trained Professionals</div>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Star className="h-8 w-8 text-amber-600" />
            </div>
            <div className="text-4xl font-bold text-gray-900 mb-2">4.9</div>
            <div className="text-gray-600">Client Rating</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;