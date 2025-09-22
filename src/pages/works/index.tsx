import React, { useState } from 'react';
import Header from '../../components/Header'; // 실제 경로에 맞게 수정해주세요

// 타입 정의
type CategoryType = 'All' | 'Communication Design' | 'Service Design' | 'UX Design' | 'Industrial Design';

interface Project {
  id: number;
  name: string;
  category: CategoryType;
  image: string;
}

const WorksPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('All');
  
  const categories: CategoryType[] = [
    'All',
    'Communication Design',
    'Service Design', 
    'UX Design',
    'Industrial Design'
  ];

  const projects: Project[] = Array.from({ length: 90 }, (_, i) => ({
    id: i + 1,
    name: `Project ${i + 1}`,
    category: categories[Math.floor(Math.random() * (categories.length - 1)) + 1] as CategoryType,
    image: `https://picsum.photos/400/300?random=${i + 1}`
  }));

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  // 카테고리 변경 핸들러
  const handleCategoryChange = (category: CategoryType) => {
    setSelectedCategory(category);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-110 p-8 min-h-screen">
          <div className="flex items-baseline mb-8 gap-4">
            <h1 className="text-[var(--Colors-Neutral-Black,#1C1C1C)] font-[AvantGarde Md BT] text-[60px] font-normal leading-normal">
              Works
            </h1>
            <p className="font-[AvantGarde Md BT] text-[25px] font-normal leading-normal">
              <span className="text-[#1C1C1C]">{filteredProjects.length}</span>
              <span className="text-[#7C7C7C]">/90</span>
            </p>
          </div>
  
          <nav className="space-y-4 relative">
            {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className="relative flex items-center w-full transition-all duration-300"
            >
            {/* SVG 아이콘 (All 제외) */}
            {category !== 'All' && (
            <span
              className={`absolute left-0 top-1/2 transform -translate-y-1/2 transition-all duration-300
              ${selectedCategory === category ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'}`}
            >
            {category === 'Communication Design' && (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M6.9292 4.95015C5.18307 3.05488 4.11898 1.7411 4.25806 1.60033L1.60034 4.25806C1.7411 4.1173 3.05488 5.18307 4.95015 6.9292C5.61039 7.53749 5.15459 8.63846 4.25639 8.60159C1.68245 8.49602 0 8.32007 0 8.12065V11.8793C0 11.6799 1.68245 11.5057 4.25639 11.3984C5.15459 11.3615 5.61039 12.4625 4.95015 13.0708C3.05488 14.8169 1.7411 15.881 1.60034 15.7419L4.25806 18.3997C4.1173 18.2589 5.18307 16.9451 6.9292 15.0499C7.53749 14.3896 8.63846 14.8454 8.60159 15.7436C8.49602 18.3176 8.32007 20 8.12065 20H11.8793C11.6799 20 11.5057 18.3176 11.3984 15.7436C11.3615 14.8454 12.4625 14.3896 13.0708 15.0499C14.8169 16.9451 15.881 18.2589 15.7419 18.3997L18.3997 15.7419C18.2589 15.8827 16.9451 14.8169 15.0499 13.0708C14.3896 12.4625 14.8454 11.3615 15.7436 11.3984C18.3176 11.504 20 11.6799 20 11.8793V8.12065C20 8.32007 18.3176 8.49434 15.7436 8.60159C14.8454 8.63846 14.3896 7.53749 15.0499 6.9292C16.9451 5.18307 18.2589 4.11898 18.3997 4.25806L15.7419 1.60033C15.8827 1.7411 14.8169 3.05488 13.0708 4.95015C12.4625 5.61039 11.3615 5.15459 11.3984 4.25639C11.504 1.68245 11.6799 0 11.8793 0H8.12065C8.32007 0 8.49434 1.68245 8.60159 4.25639C8.63846 5.15459 7.53749 5.61039 6.9292 4.95015Z" fill="#00FF36"/>
              </svg>)}
          {category === 'Service Design' && (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 3.36119L8.6118 3.5066L7.28407 3.93615L6.07566 4.62978L5.03869 5.55908L4.21852 6.68227L3.65046 7.94919L3.3597 9.30637V10.6936L3.65046 12.0508L4.21852 13.3194L5.03869 14.4426L6.07566 15.3719L7.28407 16.0655L8.6118 16.4951L10 16.6405L11.3883 16.4951L12.716 16.0655L13.9244 15.3719L14.9614 14.4426L15.7815 13.3194L16.3496 12.0508L16.6404 10.6936V9.30637L16.3496 7.94919L15.7815 6.68227L14.9614 5.55908L13.9244 4.62978L12.716 3.93615L11.3883 3.5066L10 3.36119ZM10 0L12.0908 0.218954L14.0908 0.864115L15.911 1.90874L17.4723 3.3077L18.7076 4.99916L19.5631 6.90958L20 8.9537V11.0446L19.5631 13.0887L18.7076 14.9992L17.4723 16.6906L15.911 18.0896L14.0908 19.1342L12.0908 19.781L10 20L7.90927 19.781L5.90928 19.1342L4.08911 18.0896L2.52777 16.6906L1.29247 14.9992L0.437014 13.0887L3.24249e-05 11.0446V8.9537L0.437014 6.90958L1.29247 4.99916L2.52777 3.3077L4.08911 1.90874L5.90928 0.864115L7.90927 0.218954L10 0Z" fill="#00FF36"/>
              <path d="M9.99905 6.72119L10.6831 6.79306L11.3386 7.00533L11.9352 7.34797L12.4478 7.80593L12.8528 8.35917L13.1335 8.98594L13.2764 9.65617V10.3414L13.1335 11.0117L12.8528 11.6368L12.4478 12.1917L11.9352 12.6497L11.3386 12.9923L10.6831 13.2046L9.99905 13.2764L9.31335 13.2046L8.65788 12.9923L8.06124 12.6497L7.55031 12.1917L7.14528 11.6368L6.86461 11.0117L6.72174 10.3414V9.65617L6.86461 8.98594L7.14528 8.35917L7.55031 7.80593L8.06124 7.34797L8.65788 7.00533L9.31335 6.79306L9.99905 6.72119Z" fill="#00FF36"/>
            </svg>)}
          {category === 'UX Design' && (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4.21359 18.1598L9.99631 12.3774L15.779 18.1598C12.3272 20.6132 7.66709 20.6132 4.21359 18.1598Z" fill="#00FF36"/>
              <path d="M18.1598 15.781L12.3771 9.99867L18.1598 4.21631C20.6134 7.66792 20.6134 12.3278 18.1598 15.781Z" fill="#00FF36"/>
              <path d="M4.21359 1.84007C7.66541 -0.613357 12.3255 -0.613357 15.779 1.84007L9.99631 7.62244L4.21359 1.84007Z" fill="#00FF36"/>
              <path d="M1.84019 4.21631L7.62291 9.99867L1.84019 15.781C-0.613395 12.3294 -0.613395 7.6696 1.84019 4.21631Z" fill="#00FF36"/>
            </svg>)}
          {category === 'Industrial Design' && (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M5.45444 16.3628V20H9.09111V16.3628H5.45444Z" fill="#00FF36"/>
              <path d="M5.45444 10.9101V14.5474H9.09111V10.9101H5.45444Z" fill="#00FF36"/>
              <path d="M5.45444 5.4575V9.09473H9.09111V5.4575H5.45444Z" fill="#00FF36"/>
              <path d="M5.45444 -1.4782e-05V3.63721L9.09111 3.63721V-1.4782e-05L5.45444 -1.4782e-05Z" fill="#00FF36"/>
              <path d="M0 10.9101L0 14.5474H3.63667L3.63667 10.9101H0Z" fill="#00FF36"/>
              <path d="M0.00488281 5.4575L0.00488281 9.09473H3.64156L3.64156 5.4575H0.00488281Z" fill="#00FF36"/>
              <path d="M10.9138 16.3628V20H14.5504V16.3628H10.9138Z" fill="#00FF36"/>
              <path d="M10.904 10.9101V14.5474H14.5407V10.9101H10.904Z" fill="#00FF36"/>
              <path d="M10.9138 5.4575V9.09473H14.5504V5.4575H10.9138Z" fill="#00FF36"/>
              <path d="M10.9138 -1.4782e-05V3.63721L14.5504 3.63721V-1.4782e-05L10.9138 -1.4782e-05Z" fill="#00FF36"/>
              <path d="M16.3584 10.9101V14.5474H19.9951V10.9101H16.3584Z" fill="#00FF36"/>
              <path d="M16.3633 5.4575V9.09473H20V5.4575H16.3633Z" fill="#00FF36"/>
            </svg>)}
          </span>
        )}

        {/* 버튼 텍스트 */}
        <span
        className={`block font-medium text-xl leading-[30px] transition-all duration-300
          ${selectedCategory === category
            ? category === 'All'
              ? 'text-black'
              : 'translate-x-6 text-black'
            : 'translate-x-0 text-gray-400 hover:text-gray-600'
          }`}
        >
          {category}
        </span>
      </button>
    ))}
  </nav>
</aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          <div className="grid grid-cols-3 gap-y-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="group cursor-pointer">
                {/* Project Image */}
                <div className="aspect-[4/3] bg-gray-100 mb-2 relative transition-all group-hover:border-2 group-hover:border-[#00FF36]">
                  <img 
                    src={project.image} 
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:opacity-80 transition-opacity"
                  />
                  
                  {/* 모서리 정사각형들 - 호버시에만 표시 */}
                  <div className="absolute z-10 -top-1 -left-1 w-2 h-2 bg-[#fff] border-2 border-[#00FF36] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute z-10 -top-1 -right-1 w-2 h-2 bg-[#fff] border-2 border-[#00FF36] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute z-10 -bottom-1 -left-1 w-2 h-2 bg-[#fff] border-2 border-[#00FF36] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute z-10 -bottom-1 -right-1 w-2 h-2 bg-[#fff] border-2 border-[#00FF36] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* 우측 하단 제목 박스 - 호버시에만 표시 */}
                  <div className="absolute -bottom-7.2 left-2 bg-[#00FF36] px-2 py-1 text-[14px] font-medium text-black shadow-lg opacity-0 
                  font-[SUIT] group-hover:opacity-100 transition-opacity duration-300">
                    Artwork Name Designer
                  </div>
                </div>
                
                {/* Project Name - 호버시 사라짐 */}
                <h3 className="text-[14px] font-[SUIT] text-[#000] font-medium group-hover:opacity-0 transition-opacity duration-300">
                  {project.name}
                </h3>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default WorksPage;