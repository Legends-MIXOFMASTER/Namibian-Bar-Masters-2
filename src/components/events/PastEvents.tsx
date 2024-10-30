import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';

const PastEvents = () => {
  const pastEvents = [
    {
      id: 1,
      title: 'Summer Cocktail Workshop',
      date: 'February 15, 2024',
      location: 'Windhoek Central',
      image: 'https://images.unsplash.com/photo-1560512823-829485b8bf24?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      title: 'Bartending Competition',
      date: 'January 28, 2024',
      location: 'Hotel Safari',
      image: 'https://images.unsplash.com/photo-1572116469696-31de0f17cc34?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {pastEvents.map(event => (
        <div key={event.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
          <img
            className="h-48 w-full object-cover"
            src={event.image}
            alt={event.title}
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{event.title}</h3>
            <div className="space-y-2 text-gray-600">
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4 text-amber-600" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-amber-600" />
                <span>{event.location}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PastEvents;