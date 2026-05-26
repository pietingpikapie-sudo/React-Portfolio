import React from 'react'
import { Route, Routes } from 'react-router-dom'

// Import all page components
import Home from './components/Home'
import About from './src/about'
import Contact from './src/contact'
import Education from './src/education'
import Project from './src/project'
import Counter from './src/counter'
import Layout from './components/Layout'

// Main routing component that controls page navigation
const MainRouter = () => {
  return (
    <div>

      {/* Layout appears on every page (navbar/header) */}
      <Layout />

      {/* Route definitions for each page */}
      <Routes>

        {/* Home page route */}
        <Route exact path="/" element={<Home />} />

        {/* About page route */}
        <Route exact path="/about" element={<About />} />

        {/* Education page route */}
        <Route exact path="/education" element={<Education />} />

        {/* Projects page route */}
        <Route exact path="/project" element={<Project />} />

        {/* Contact page route */}
        <Route exact path="/contact" element={<Contact />} />

        {/* Counter page route */}
        <Route exact path="/counter" element={<Counter />} />

      </Routes>
    </div>
  )
}

// Export router so it can be used in main app
export default MainRouter