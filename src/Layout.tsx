import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({children}) => {
  return (
    <div className="bg-slate-400 font-body text-gray-800">
      <div className='bg-white relative max-w-xl mx-auto h-screen'>
        <div className="relative min-h-screen">
          <div className="absolute inset-0 bg-[url('/bg1.jpg')] bg-cover bg-center blur-sm"></div>
          <div className="relative z-10 h-screen flex justify-center items-center">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Layout