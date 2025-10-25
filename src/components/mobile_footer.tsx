import React from 'react';
import Image from 'next/image';
import Logo from "../../public/img/logo.svg";
import { avantGarde } from '@/styles/fonts';

export default function Footer() {
  return (
    <footer className="w-[390px] mx-auto py-8 flex flex-col items-center bg-white">
      <div className="mb-4">
        <Image 
            src={Logo} 
            alt="Where The Light Begins Logo" 
            width={180}
            height={40} 
            priority
          /> 
      </div>
      <p className={`${avantGarde.className} text-[9px] text-[#1C1C1C] text-center`}>
        © 2025. Handong Global University Contents Convergence Design All Rights Reserved.
      </p>

    </footer>
  );
}