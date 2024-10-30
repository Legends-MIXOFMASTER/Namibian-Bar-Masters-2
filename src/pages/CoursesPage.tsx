import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CourseCatalog from '../components/CourseCatalog';
import CourseDetails from '../components/CourseDetails';
import CourseProgress from '../components/CourseProgress';
import Quiz from '../components/Quiz';

const CoursesPage = () => {
  return (
    <div className="pt-16">
      <Routes>
        <Route path="/" element={<CourseCatalog />} />
        <Route path="/:courseId" element={<CourseDetails />} />
        <Route path="/:courseId/progress" element={<CourseProgress />} />
        <Route path="/:courseId/quiz/:quizId" element={<Quiz />} />
      </Routes>
    </div>
  );
};

export default CoursesPage;