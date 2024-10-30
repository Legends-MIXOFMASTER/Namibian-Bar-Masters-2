import React from 'react';
import { User, Award } from 'lucide-react';

const UserProfile = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center space-x-4 mb-6">
        <div className="bg-amber-100 p-3 rounded-full">
          <User className="h-6 w-6 text-amber-600" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">John Smith</h3>
          <p className="text-sm text-gray-500">Member since March 2024</p>
        </div>
      </div>
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <Award className="h-5 w-5 text-amber-600" />
          <span className="text-gray-600">Level 2 Mixologist</span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full">
          <div className="h-2 bg-amber-600 rounded-full" style={{ width: '60%' }} />
        </div>
        <p className="text-sm text-gray-500">
          120/200 XP to Level 3
        </p>
      </div>
    </div>
  );
};

export default UserProfile;