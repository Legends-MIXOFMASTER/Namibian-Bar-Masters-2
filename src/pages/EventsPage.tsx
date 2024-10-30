import React from 'react';
import EventsList from '../components/events/EventsList';
import EventCalendar from '../components/events/EventCalendar';
import PastEvents from '../components/events/PastEvents';

const EventsPage = () => {
  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Events</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <EventsList />
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Past Events</h2>
              <PastEvents />
            </div>
          </div>
          <div>
            <EventCalendar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;