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
    title: 'האינטרנט הוא מקום מדהים',
    text: 'עם המון הזדמנויות לחיבורים, למידה והתפתחות',
    image: image1,
  },
  {
    id: 2,
    title: '... אבל יש בו גם סכנות מסוימות',
    text: 'חשוב לדעת איך להתנהל בו בצורה נבונה ואחראית',
    image: image2,
  },
  {
    id: 3,
    title: 'הצטרפו אלינו ל-קליק חכם',
    text: 'כאן ב-קליק חכם נלמד יחד מה חשוב לדעת, לזכור וממה כדאי להישמר כשאנו גולשים באינטרנט, בסמארטפון וברשתות החברתיות',
    image: image3,
  },
];

export default function Onboarding() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const navigate = useNavigate();

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handlePrev(),
  });

  const handleNext = () => {
    if (currentPage < onboardingPages.length - 1) {
      setCurrentPage(currentPage + 1);
    } else {
      setIsExiting(true);
      setTimeout(() => navigate('/login'), 500);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div
      {...swipeHandlers}
      className={`onboarding-container ${isExiting ? 'fade-out' : ''}`}
    >
      <div
        className="onboarding-slider"
        style={{ transform: `translateX(-${currentPage * 100}%)` }}
      >
        {onboardingPages.map((page, index) => (
          <div className="onboarding-page" key={page.id}>
            <img
              className="onboarding-image"
              src={page.image}
              alt={`Onboarding step ${index + 1}`}
            />
            <h1 className="onboarding-title">{page.title}</h1>
            <p className="onboarding-text">{page.text}</p>
          </div>
        ))}
      </div>
      
      <div className="swipe-hint">
        {currentPage < onboardingPages.length? (
          <FontAwesomeIcon icon={faArrowRight} size="3x" className="swipe-arrow" />
        ) : (
          <span className="swipe-text">החלק ימינה להתחלה</span>
        )}
      </div>
    </div>
  );
}