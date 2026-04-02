import React, { useEffect, useState } from 'react';
import Card from './EventCard';

const DynamicCards: React.FC = () => {
  const [cardsData, setCardsData] = useState<any[]>([]);

  useEffect(() => {
    // Simulera hätning av data från backend
    const fetchData = async () => {
      const response = await fetch('https://din-backend-api.com/cards');
      const data = await response.json();
      setCardsData(data);
    };
    
    fetchData();
  }, []);

  return (
    <div className="cards-container">
      {cardsData.map((item, index) => (
        <Card 
          key={index}
          title={item.title}
          description={item.description}
          link={item.link}
        />
      ))}
    </div>
  );
};

export default DynamicCards;