import React, { useState, useEffect } from 'react';
import { avantGarde } from '@/styles/fonts';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // 맨 위로 스크롤
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className={`${avantGarde.className} fixed bottom-8 right-8 z-50 w-16 h-16 bg-[#20FF4F] text-[#000] text-[27.429px] font-[400] rounded-full shadow-lg hover:bg-[#44fa6c] transition-all duration-300 flex items-center justify-center group`}
          aria-label="Scroll to top"
        >
          <p>Top</p>
        </button>
      )}
    </>
  );
}