import React from 'react';
import { format } from 'date-fns';

const EventCalendar = () => {
  const today = new Date();
  const currentMonth = format(today, 'MMMM yyyy');
  
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const events = {
    25: 'Mixology Workshop',
    28: 'Cocktail Competition'
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-900">{currentMonth}</h3>
        <div className="flex space-x-2">
          <button className="p-2 hover:bg-gray-100 rounded-lg transition">&lt;</button>
          <button className="p-2 hover:bg-gray-100 rounded-lg transition">&gt;</button>
        </div>
      </div>
      
      <div className="grid grid-cols-7 gap-2 text-center mb-2">
        {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
          <div key={day} className="text-sm font-medium text-gray-500">
            {day}
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-7 gap-2">
        {days.map(day => (
          <div
            key={day}
            className={`aspect-square flex flex-col items-center justify-center rounded-lg text-sm
              ${events[day] ? 'bg-amber-50 text-amber-600' : 'hover:bg-gray-50'}
              ${day === today.getDate() ? 'border-2 border-amber-600' : ''}
            `}
          >
            {day}
            {events[day] && (
              <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-1" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCalendar;