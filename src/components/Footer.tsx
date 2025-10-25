import React from 'react';
import { avantGarde } from '@/styles/fonts';

const Footer = () => {
  return (
    <footer className="bg-white text-[#1C1C1C] p-8">
        <div className="flex flex-row justify-between items-center">
          <div className="text-left">
            <p className={`${avantGarde.className} text-[14px] font-[400]`}>26th CCD Graduation Exhibition: Where The Light Begins</p>
            <p className={`${avantGarde.className} mt-1 text-[14px] font-[400]`}>© 2025. Handong Global University, Contents Convergence Design. All Rights Reserved.</p>
          </div>
          <div className={`${avantGarde.className} text-right text-[14px] font-[400]`}>
            <p>
              <span>website | </span>
              <a 
                href="http://www.handong.edu" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="underline"
              >
                www.handong.edu
              </a>
            </p>
            <p className="mt-1">
              <span>instagram | </span>
              <a 
                href="https://www.instagram.com/hgu.exhibition.2025" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="underline"
              >
                @hgu.exhibition.2025
              </a>
            </p>
          </div>
        </div>
    </footer>
  );
};

export default Footer;