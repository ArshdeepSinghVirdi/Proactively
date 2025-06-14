import React from 'react';

const GradientSection = () => {
  return (
    <section className="relative h-20 lg:h-48 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-orange-400 to-pink-500 opacity-80"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-300 to-pink-400 opacity-60"></div>
      <div className="absolute top-0 left-1/4 w-32 h-32 bg-yellow-200 rounded-full opacity-30 blur-2xl"></div>
      <div className="absolute bottom-0 right-1/3 w-40 h-40 bg-pink-300 rounded-full opacity-40 blur-3xl"></div>
    </section>
  );
};

export default GradientSection;