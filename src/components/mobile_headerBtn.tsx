'use client';

import { useState, Fragment } from 'react';
import { Transition } from '@headlessui/react';
// import Link from 'next/link'; // Next.js에 의존하지 않도록 Link를 제거합니다.

// 메뉴를 여는 아이콘
const StarIcon = ({ className = 'w-6 h-6' }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M24 10.7504H15.0147L21.3671 4.39804L19.602 2.62969L13.2431 8.98858V0H10.7504V8.98532L4.39804 2.62969L2.62969 4.39804L8.98206 10.7504H0V13.2463H8.98532L2.62969 19.602L4.39804 21.367L10.7504 15.0147V24H13.2431V15.0114L19.602 21.367L21.3671 19.602L15.0114 13.2463H24V10.7504Z" fill="currentColor"/>
  </svg>
);

// 메뉴를 닫는 X 아이콘
const CloseIcon = ({ className = 'w-6 h-6' }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className={className}>
    {/* React에서는 속성을 camelCase(strokeWidth)로 쓰는 것이 표준입니다. */}
    <path d="M1 1L18.5 18.5" stroke="black" strokeWidth="2"/>
    <path d="M18.5 1L0.999999 18.5" stroke="black" strokeWidth="2"/>
  </svg>
);

// 네비게이션 링크 데이터
const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/works', label: 'Works' },
  { href: '/designers', label: 'Designers' },
  { href: '/archive', label: 'Archive' },
];

export default function SlideOutMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* 메뉴 여는 버튼 */}
      <button
        onClick={toggleMenu}
        className="rounded-md text-gray-700 hover:focus:outline-none"
        aria-label="메뉴 열기"
      >
        <StarIcon />
      </button>

      {/* 배경 오버레이: 클릭 시 메뉴 닫힘 */}
      <Transition
        show={isOpen}
        as={Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div
          className="fixed inset-0 bg-[rgba(0,0,0,0.70)] z-40" // [수정] Tailwind CSS의 임의 값 기능을 사용하여 배경색과 투명도를 직접 설정
          onClick={toggleMenu}
          aria-hidden="true"
        />
      </Transition>

      {/* 슬라이드 메뉴 패널 */}
      <Transition
        show={isOpen}
        as={Fragment}
        enter="transform transition ease-in-out duration-300"
        // [수정] 오른쪽에서 나타나도록 enterFrom과 leaveTo 값을 변경
        enterFrom="translate-x-full"
        enterTo="translate-x-0"
        leave="transform transition ease-in-out duration-200"
        leaveFrom="translate-x-0"
        leaveTo="translate-x-full"
      >
        {/* [수정] 패널 위치를 right-0으로 설정 */}
        <aside className="fixed top-0 right-0 h-full w-80 bg-white shadow-xl z-50">
          <div className="p-6 flex justify-end">
            <button
              onClick={toggleMenu}
              className="p-2 text-gray-700 hover:text-gray-900"
              aria-label="메뉴 닫기"
            >
              <CloseIcon />
            </button>
          </div>
          <nav className="mt-8">
            <ul>
              {navLinks.map((link) => (
                <li key={link.label}>
                  {/* Next.js의 Link를 표준 a 태그로 변경하여 호환성 문제를 해결합니다. */}
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)} // 링크 클릭 시 메뉴 닫기
                    className="block py-4 px-8 text-2xl text-gray-800 hover:bg-gray-50 font-sans"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
      </Transition>
    </>
  );
}