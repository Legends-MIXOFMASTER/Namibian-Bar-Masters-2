import React, { useState } from 'react';
import { Calendar, Clock, Users, ChevronRight } from 'lucide-react';

const services = [
  {
    id: 1,
    name: 'Private Event Bartending',
    description: 'Professional bartending service for private events',
    priceRange: 'N$2000-5000',
    duration: '4-8 hours'
  },
  {
    id: 2,
    name: 'Corporate Workshop',
    description: 'Mixology workshops for corporate team building',
    priceRange: 'N$800 per person',
    duration: '3 hours'
  },
  {
    id: 3,
    name: 'Bar Consultation',
    description: 'Expert consultation for bar setup and menu development',
    priceRange: 'N$1500',
    duration: '2 hours'
  }
];

const timeSlots = [
  '09:00', '10:00', '11:00', '14:00', '15:00', '16:00'
];

const BookingSystem = () => {
  const [selectedService, setSelectedService] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [guests, setGuests] = useState('1');
  const [notes, setNotes] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle booking submission
    console.log({
      service: selectedService,
      date: selectedDate,
      time: selectedTime,
      guests,
      notes
    });
  };

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Book Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Schedule a private event, corporate workshop, or consultation with our expert mixologists
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Service
                </label>
                <select
                  required
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-600 focus:border-amber-600"
                >
                  <option value="">Choose a service</option>
                  {services.map(service => (
                    <option key={service.id} value={service.id}>
                      {service.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Date
                  </label>
                  <input
                    type="date"
                    required
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-600 focus:border-amber-600"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Time
                  </label>
                  <select
                    required
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-600 focus:border-amber-600"
                  >
                    <option value="">Select time</option>
                    {timeSlots.map(time => (
                      <option key={time} value={time}>{time}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Number of Guests
                </label>
                <input
                  type="number"
                  min="1"
                  required
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-600 focus:border-amber-600"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Notes
                </label>
                <textarea
                  rows={4}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-600 focus:border-amber-600"
                  placeholder="Any special requirements or preferences?"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition flex items-center justify-center space-x-2"
              >
                <span>Book Now</span>
                <ChevronRight className="h-4 w-4" />
              </button>
            </form>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-lg p-6 space-y-6">
              <h3 className="text-lg font-semibold text-gray-900">Available Services</h3>
              
              <div className="space-y-4">
                {services.map(service => (
                  <div key={service.id} className="bg-white p-4 rounded-md shadow-sm">
                    <h4 className="font-medium text-gray-900">{service.name}</h4>
                    <p className="text-sm text-gray-600 mt-1">{service.description}</p>
                    <div className="mt-2 flex items-center justify-between text-sm">
                      <span className="text-amber-600 font-medium">{service.priceRange}</span>
                      <span className="text-gray-500">{service.duration}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-200 pt-4">
                <h4 className="font-medium text-gray-900 mb-2">Contact Us</h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>Email: Legendsofcocktails@gmail.com</p>
                  <p>Phone: +264 85 758 1864</p>
                  <p>Address: 3 Potgieter str, Pioneerspark, Windhoek, Namibia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingSystem;