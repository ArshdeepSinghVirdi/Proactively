import React from 'react';
import Header from './Components/Header';
import HeroSection from './Components/HeroSection';
import SearchSection from './Components/SearchSection';
import HowItWorksSection from './Components/HowItWorksSection';
import LifestyleCards from './Components/LifestyleCards';
import '../styles/global.css';

function App() {
  return (
    <div className="app">
      <Header />
      <HeroSection>
        <SearchSection />
      </HeroSection>
      <HowItWorksSection />
      <LifestyleCards />
    </div>
  );
}

export default App;