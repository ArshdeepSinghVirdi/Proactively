import React from 'react';
import '../../styles/LifestyleCards.css';
import Rectangle144 from '../assets/Rectangle 144.png';
import Rectangle152 from '../assets/Rectangle 152.png';
import Rectangle154 from '../assets/Rectangle 154.png';
import Rectangle156 from '../assets/Rectangle 156.png';
import Rectangle158 from '../assets/Rectangle 158.png';
import Rectangle160 from '../assets/Rectangle 160.png';
import rectangle144 from '../assets/rectangle144.png';
import rectangle152 from '../assets/rectangle152.png';
import rectangle154 from '../assets/rectangle154.png';
import rectangle156 from '../assets/rectangle156.png';
import rectangle158 from '../assets/rectangle158.png';
import rectangle160 from '../assets/rectangle160.png';

const cards = [
  {
    id: 1,
    title: 'Nutrition',
    description: 'Evidence supports the use of a whole food, plant-predominant diet to prevent, treat and reverse chronic illness.',
    image: Rectangle144,
    icon: rectangle144,
  },
  {
    id: 2,
    title: 'Physical activity',
    description: 'Regular physical activity is key to managing weight, improving mental health, and reducing risk of chronic disease.',
    image: Rectangle152,
    icon: rectangle152,
  },
  {
    id: 3,
    title: 'Restorative sleep',
    description: 'Consistent, quality sleep is essential for cognitive function and physical health.',
    image: Rectangle154,
    icon: rectangle154,
  },
  {
    id: 4,
    title: 'Stress management',
    description: 'Effective stress management techniques are crucial for mental well-being and overall health.',
    image: Rectangle156,
    icon: rectangle156,
  },
  {
    id: 5,
    title: 'Social connection',
    description: 'Strong social connections are associated with a lower risk of many chronic diseases and enhanced mental health.',
    image: Rectangle158,
    icon: rectangle158,
  },
  {
    id: 6,
    title: 'Substance abuse',
    description: 'Avoiding tobacco, limiting alcohol use, and abstaining from harmful substances are vital for long-term health.',
    image: Rectangle160,
    icon: rectangle160,
  }
];

const LifestyleCards = () => {
  // Duplicated cards array to create a seamless infinite loop
  const repeatedCards = [...cards, ...cards];

  return (
    <section className="lifestyle-cards-section">
      <div className="lifestyle-cards-container">
        <div className="cards-slider">
          {repeatedCards.map((card, index) => (
            <div key={`${card.id}-${index}`} className="lifestyle-card slide-card">
              <div className="card-image-container">
                <img
                  src={card.image}
                  alt={card.title}
                  className="card-image"
                />
                <div className="card-icon-only">
                  <img
                    src={card.icon}
                    alt="icon"
                    className="metric-icon-image"
                  />
                </div>
              </div>
              <div className="card-content">
                <h3 className="card-title">{card.title}</h3>
                <p className="card-description">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LifestyleCards;
