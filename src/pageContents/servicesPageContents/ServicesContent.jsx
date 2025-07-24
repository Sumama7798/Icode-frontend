import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import Footer from '../../homePageContents/footer/Footer';
import { useCard } from '../../../hooks/useCard';

const ServicesContent = () => {
  const location = useLocation();
  const { id } = useParams();
  const { getCardsByAdress, getCardsForSection } = useCard();

  // Fetch the current list from the store (will update if Zustand is reactive)
  const cards = getCardsForSection('servicesPage', 'ourServicesSection');

  // Check from state or fallback search in cards
  const [Scard, setScard] = useState(location.state?.Scard || null);

  useEffect(() => {
    const loadCard = async () => {
      if (!cards.length) {
        await getCardsByAdress('servicesPage', 'ourServicesSection');
      }
    };

    loadCard();
  }, [cards.length, getCardsByAdress]);

  useEffect(() => {
    if (!Scard && id && cards.length) {
      const found = cards.find((card) => card._id === id);
      setScard(found || null);
    }
  }, [cards, id, Scard]);

  if (!Scard) {
    return (
      <div className="text-center text-xl p-10 text-black font-semibold">
        Loading service details...
      </div>
    );
  }

  const {
    image = 'default-image.jpg',
    heading = 'No Title',
    description = 'No description available.',
  } = Scard;

  return (
    <div className="m-auto text-black">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-10 p-10">

        {/* Text Content */}
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-4">{heading}</h1>
          <p className="text-lg leading-relaxed">{description}</p>
        </div>

        {/* Image */}
        <div className="flex-1">
          <img
            src={image}
            alt={heading}
            className="h-[400px] w-full object-cover rounded-lg shadow-md"
          />
        </div>

      </div>

      <Footer />
    </div>
  );
};

export default ServicesContent;
