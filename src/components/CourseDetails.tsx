import React from 'react';
import { useParams } from 'react-router-dom';
import { Clock, BookOpen, Star } from 'lucide-react';

const CourseDetails = () => {
  const { courseId } = useParams();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="relative h-[400px]">
          <img
            src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
            alt="Course Cover"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Mixology Fundamentals</h1>
          <div className="flex items-center space-x-6 mb-6">
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-gray-400" />
              <span className="text-gray-600">6 weeks</span>
            </div>
            <div className="flex items-center space-x-2">
              <BookOpen className="h-5 w-5 text-gray-400" />
              <span className="text-gray-600">24 lessons</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="h-5 w-5 text-amber-500" />
              <span className="text-gray-600">4.9 (128 reviews)</span>
            </div>
          </div>
          <p className="text-gray-600 mb-8">
            Master the basics of cocktail making and essential techniques in this comprehensive course.
            Learn everything from basic bar tools to advanced mixing techniques.
          </p>
          <button className="bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;