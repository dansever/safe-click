import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'; // Import the icon you need
import '../style/Onboarding.css'; // Custom CSS for the page
import image1 from '../assets/images/internet_possibilities.webp';
import image2 from '../assets/images/social_media_dangerous.webp';
import image3 from '../assets/images/children_using_smartphones.webp';

const onboardingPages = [
  {
    id: 1,
    title: 'Welcome to Our App',
    text: 'Discover amazing features to help you achieve your goals.',
    image: image1,
  },
  {
    id: 2,
    title: 'Stay Connected',
    text: 'Connect with friends and stay in the loop with what’s happening.',
    image: image2,
  },
  {
    id: 3,
    title: 'Get Started',
    text: 'Join us and make the most out of our platform!',
    image: image3,
  },
];

export default function Onboarding() {
  const [currentPage, setCurrentPage] = useState(0);
  const navigate = useNavigate();

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handlePrev(),
  });

  const handleNext = () => {
    if (currentPage < onboardingPages.length - 1) {
      setCurrentPage(currentPage + 1);
    } else {
      navigate('/login'); // Navigate to home after the last screen
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div {...swipeHandlers} className="onboarding-container">
      <div className="onboarding-slider" style={{ transform: `translateX(-${currentPage * 100}%)` }}>
        {onboardingPages.map((page, index) => (
          <div className="onboarding-page" key={page.id}>
            <img
              className="onboarding-image"
              src={page.image}
              alt={`Onboarding step ${index + 1}`}
            />
            <h1 className="onboarding-title">{page.title}</h1>
            <p className="onboarding-text">{page.text}</p>
            
            <div className="swipe-hint">
              <FontAwesomeIcon icon={faArrowRight} size="3x" className="swipe-arrow" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
