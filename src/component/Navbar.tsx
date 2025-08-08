import React, { useEffect, useState } from 'react';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Track screen size to check if it's mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Check once on load
    window.addEventListener('resize', handleResize); // Listen for screen size changes
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {/* Navbar */}
      <div className="w-full">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-16">
          <div className="py-3 sm:py-8 flex items-center justify-between border-b border-[#e0e0e0]">
            {/* Left */}
            <div className="flex items-center space-x-3">
              <img src="icons/logo.png" alt="logo" className="h-6 w-auto" />
              <h1 className="font-semibold text-base hidden lg:block">
                <span className="text-xl">/</span> hello@essential.io
              </h1>
            </div>

            {/* Center */}
            <div className="hidden md:flex font-semibold space-x-4 text-sm cursor-pointer">
              <p>Product .</p>
              <p>Resources .</p>
              <p>Our work</p>
            </div>

            {/* Right */}
            <div className="flex items-center space-x-3 ">
              <p className="font-semibold hidden md:block cursor-pointer">FAQ</p>
              <button className="border rounded-full px-4 py-1 text-sm font-semibold hidden md:block cursor-pointer">
                Download API
              </button>

              {/* Always show icon, but only work on mobile */}
              <button
                onClick={() => isMobile && setMenuOpen(!menuOpen)}
                className="ml-4"
              >
                <svg width="28" height="32" viewBox="0 0 20 20" fill="none">
                  <line
                    x1="2"
                    y1="6"
                    x2="18"
                    y2="6"
                    stroke="black"
                    strokeWidth="2"
                  />
                  <line
                    x1="2"
                    y1="14"
                    x2="18"
                    y2="14"
                    stroke="black"
                    strokeWidth="2"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar (Mobile Only) */}
      {menuOpen && (
        <div className="fixed top-0 left-0 h-full w-64 bg-white shadow-md z-50 p-6 md:hidden transition-all duration-300 ease-in-out">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold">Menu</h2>
            <button
              onClick={() => setMenuOpen(false)}
              className="text-xl"
            >
              &times;
            </button>
          </div>
          <nav className="space-y-4 text-base font-medium cursor-pointer">
            <p>Product</p>
            <p>Resources</p>
            <p>Our work</p>
            <p>FAQ</p>
            <button className="border rounded-full px-4 py-1 text-sm font-semibold cursor-pointer">
              Download API
            </button>
          </nav>
        </div>
      )}
    </>
  );
};

export default Navbar;
