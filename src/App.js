import React from 'react';
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from '@vercel/analytics/react';
import {Header, Footer} from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Contact from './components/Contact';
import './App.css'

const App = () => {
  return (
    <div style={{ background: "linear-gradient(135deg, #000000 0%, #1a1a1a 100%)"}}>
      <SpeedInsights/>
      <Header />
      <Home />
      <Projects />
      <Skills />
      <Resume />
      <Contact />
      {window.innerWidth < 768 && <Footer />}
      <Analytics />
    </div>
  );
};

export default App;