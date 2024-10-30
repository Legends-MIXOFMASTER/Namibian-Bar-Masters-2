import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';

const EventsList = () => {
  const events = [
    {
      id: 1,
      title: 'Mixology Workshop',
      date: 'March 25, 2024',
      time: '14:00 - 17:00',
      location: 'Windhoek Central',
      image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      title: 'Cocktail Competition',
      date: 'April 2, 2024',
      time: '18:00 - 22:00',
      location: 'Hotel Thule',
      image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <div className="space-y-6">
      {events.map(event => (
        <div key={event.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <img
                className="h-48 w-full object-cover md:w-48"
                src={event.image}
                alt={event.title}
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h3>
              <div className="space-y-2 text-gray-600">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-amber-600" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-amber-600" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-amber-600" />
                  <span>{event.location}</span>
                </div>
              </div>
              <button className="mt-4 bg-amber-600 text-white px-6 py-2 rounded-lg hover:bg-amber-700 transition">
                Register Now
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventsList;