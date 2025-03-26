import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Contact from './components/Contact';
import './App.css'

const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <Projects />
      <Skills />
      <Resume />
      <Contact />
      <Analytics />
    </div>
  );
};

export default App;