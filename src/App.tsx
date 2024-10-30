import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import FeaturedCourses from './components/FeaturedCourses';
import Footer from './components/Footer';
import CoursesPage from './pages/CoursesPage';
import CommunityPage from './pages/CommunityPage';
import EventsPage from './pages/EventsPage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Stats />
            <FeaturedCourses />
          </>
        } />
        <Route path="/courses/*" element={<CoursesPage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;