import React from 'react';
import { Bell } from 'lucide-react';

const NotificationCenter = () => {
  const notifications = [
    {
      id: 1,
      message: 'Sarah replied to your post',
      time: '2h ago'
    },
    {
      id: 2,
      message: 'New course available: Advanced Mixology',
      time: '5h ago'
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Notifications</h3>
        <Bell className="h-5 w-5 text-amber-600" />
      </div>
      <div className="space-y-4">
        {notifications.map(notification => (
          <div key={notification.id} className="border-l-2 border-amber-600 pl-4">
            <p className="text-gray-600">{notification.message}</p>
            <p className="text-sm text-gray-500">{notification.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationCenter;