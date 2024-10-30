import React from 'react';
import { Clock, BookOpen, Star } from 'lucide-react';

const courses = [
  {
    id: 1,
    title: 'Mixology Fundamentals',
    description: 'Master the basics of cocktail making and essential techniques',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    duration: '6 weeks',
    lessons: 24,
    rating: 4.9
  },
  {
    id: 2,
    title: 'Namibian Ingredients Mastery',
    description: 'Learn to craft unique cocktails using local Namibian ingredients',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    duration: '4 weeks',
    lessons: 16,
    rating: 4.8
  },
  {
    id: 3,
    title: 'Advanced Mixology',
    description: 'Take your skills to the next level with advanced techniques',
    image: 'https://images.unsplash.com/photo-1560512823-829485b8bf24?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    duration: '8 weeks',
    lessons: 32,
    rating: 4.9
  }
];

const FeaturedCourses = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Courses</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Start your journey to becoming a certified mixologist with our professionally curated courses
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div key={course.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition">
              <div className="relative h-48">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2 text-gray-500">
                    <Clock className="h-4 w-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-500">
                    <BookOpen className="h-4 w-4" />
                    <span>{course.lessons} lessons</span>
                  </div>
                  <div className="flex items-center space-x-1 text-amber-500">
                    <Star className="h-4 w-4 fill-current" />
                    <span>{course.rating}</span>
                  </div>
                </div>

                <button className="w-full bg-amber-600 text-white py-2 rounded-lg hover:bg-amber-700 transition">
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedCourses;