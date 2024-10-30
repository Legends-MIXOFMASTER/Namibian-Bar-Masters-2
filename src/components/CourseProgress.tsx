import React from 'react';
import { useParams } from 'react-router-dom';
import { CheckCircle, Circle } from 'lucide-react';

const CourseProgress = () => {
  const { courseId } = useParams();

  const modules = [
    {
      id: 1,
      title: 'Introduction to Mixology',
      completed: true,
      lessons: [
        { id: 1, title: 'Basic Bar Tools', completed: true },
        { id: 2, title: 'Essential Glassware', completed: true },
        { id: 3, title: 'Common Ingredients', completed: true }
      ]
    },
    {
      id: 2,
      title: 'Mixing Techniques',
      completed: false,
      lessons: [
        { id: 4, title: 'Shaking Methods', completed: false },
        { id: 5, title: 'Stirring Techniques', completed: false },
        { id: 6, title: 'Building Drinks', completed: false }
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Course Progress</h1>
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="space-y-8">
          {modules.map(module => (
            <div key={module.id} className="border-b border-gray-200 pb-6 last:border-0 last:pb-0">
              <div className="flex items-center space-x-3 mb-4">
                {module.completed ? (
                  <CheckCircle className="h-6 w-6 text-green-500" />
                ) : (
                  <Circle className="h-6 w-6 text-gray-300" />
                )}
                <h3 className="text-xl font-semibold text-gray-900">{module.title}</h3>
              </div>
              <div className="space-y-3 pl-9">
                {module.lessons.map(lesson => (
                  <div key={lesson.id} className="flex items-center space-x-3">
                    {lesson.completed ? (
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    ) : (
                      <Circle className="h-5 w-5 text-gray-300" />
                    )}
                    <span className="text-gray-600">{lesson.title}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseProgress;