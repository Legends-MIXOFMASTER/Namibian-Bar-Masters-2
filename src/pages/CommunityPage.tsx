import React from 'react';
import ForumList from '../components/community/ForumList';
import UserProfile from '../components/community/UserProfile';
import NotificationCenter from '../components/community/NotificationCenter';

const CommunityPage = () => {
  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Community Forum</h1>
            <ForumList />
          </div>
          <div className="space-y-6">
            <UserProfile />
            <NotificationCenter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;