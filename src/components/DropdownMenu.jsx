import { React, useState } from 'react';
import { ChevronDownIcon, PencilIcon, UserIcon } from '@heroicons/react/24/outline';

const DropdownMenu = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    clearTimeout(timeout);
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeout = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 200);
  };

  let timeout;

  return (
    <div
      className="flex items-center relative ml-5 h-9"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src="/src/assets/images/MieAvatar.jpg"
        alt=""
        className="w-8 h-8 rounded object-cover cursor-pointer"
      />
      <ChevronDownIcon className="h-6 w-6 text-white cursor-pointer" />
      {isDropdownOpen && (
        <div className="absolute right-0 top-full mt-2 bg-main-color rounded shadow-md py-2">
          <div className="flex items-center px-2 py-2 cursor-pointer hover:bg-gray-100">
            <PencilIcon className="h-5 w-5 text-gray-500 mr-2" />
            <span>Edit Profile</span>
          </div>
          <div className="flex items-center px-2 py-2 cursor-pointer hover:bg-gray-100">
            <UserIcon className="h-5 w-5 text-gray-500 mr-2" />
            <span>Account</span>
          </div>
          <div className="border-t border-gray-200"></div>
          <div className="flex items-center px-2 py-2 cursor-pointer hover:bg-gray-100">
            <span>Sign Out</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
