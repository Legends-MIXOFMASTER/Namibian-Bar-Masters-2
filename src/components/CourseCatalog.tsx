import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import CourseCard from './CourseCard';

const courses = [
  {
    id: 1,
    title: 'Mixology Fundamentals',
    description: 'Master the basics of cocktail making and essential techniques',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    duration: '6 weeks',
    lessons: 24,
    rating: 4.9,
    price: 1499,
    category: 'Mixology',
    level: 'Beginner'
  },
  {
    id: 2,
    title: 'Namibian Ingredients Mastery',
    description: 'Learn to craft unique cocktails using local Namibian ingredients',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    duration: '4 weeks',
    lessons: 16,
    rating: 4.8,
    price: 1299,
    category: 'Local Specialties',
    level: 'Intermediate'
  },
  {
    id: 3,
    title: 'Advanced Mixology',
    description: 'Take your skills to the next level with advanced techniques',
    image: 'https://images.unsplash.com/photo-1560512823-829485b8bf24?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    duration: '8 weeks',
    lessons: 32,
    rating: 4.9,
    price: 1999,
    category: 'Mixology',
    level: 'Advanced'
  },
  {
    id: 4,
    title: 'Bar Management Essentials',
    description: 'Learn the business side of running a successful bar',
    image: 'https://images.unsplash.com/photo-1572116469696-31de0f17cc34?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    duration: '6 weeks',
    lessons: 24,
    rating: 4.7,
    price: 1699,
    category: 'Management',
    level: 'Intermediate'
  }
];

const categories = ['All', 'Mixology', 'Local Specialties', 'Management'];
const levels = ['All', 'Beginner', 'Intermediate', 'Advanced'];

const CourseCatalog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLevel, setSelectedLevel] = useState('All');

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    const matchesLevel = selectedLevel === 'All' || course.level === selectedLevel;
    
    return matchesSearch && matchesCategory && matchesLevel;
  });

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Course Catalog</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse our selection of professional bartending courses
          </p>
        </div>

        <div className="mb-8 space-y-4 md:space-y-0 md:flex md:items-center md:justify-between">
          <div className="relative flex-1 max-w-lg">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-amber-600 focus:border-amber-600 sm:text-sm"
              placeholder="Search courses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <select
                className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-amber-600 focus:border-amber-600 sm:text-sm rounded-md"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            <div className="relative">
              <select
                className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-amber-600 focus:border-amber-600 sm:text-sm rounded-md"
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
              >
                {levels.map(level => (
                  <option key={level} value={level}>{level}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map(course => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseCatalog;