import { React, useState, useEffect } from 'react';
import { BellIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import DropdownMenu from './DropdownMenu';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY === 0 ? false : true);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav>
      <div
        className={
          isScrolled
            ? 'flex items-center justify-between fixed top-0 text-sm text-white px-12 h-16 w-full z-[100] bg-main-color'
            : 'flex items-center justify-between fixed top-0 text-sm text-white px-12 h-16 w-full z-[100] bg-gradient-to-t from-transparent via-black/30'
        }
      >
        <div className="flex items-center justify-start">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="Netflix Logo"
            className="h-[25px] mr-10"
          />
          <span className="mr-5">Home</span>
          <span className="mr-5">TV Shows</span>
          <span className="mr-5">Movies</span>
          <span className="mr-5">New & Popular</span>
          <span className="mr-5">My List</span>
          <span className="mr-5">Browser by Languages</span>
        </div>
        <div className="flex items-center">
          <MagnifyingGlassIcon className="h-6 w-6 text-white cursor-pointer" />
          <span className="ml-5">Kids</span>
          <BellIcon className="h-6 w-6 text-white ml-5 cursor-pointer" />
          <DropdownMenu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
