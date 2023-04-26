import React, { useState } from 'react';
import { PlayIcon, PlusIcon } from '@heroicons/react/24/solid';
import { HandThumbUpIcon, HandThumbDownIcon } from '@heroicons/react/24/outline';

const ListItem = () => {
  return (
    <div className="w-56 h-32 bg-main-color first:mr-[0.2vw] first:ml-0 mx-[0.2vw] rounded overflow-hidden z-50 cursor-pointer text-white hover:w-[325px] hover:h-[300px] hover:shadow-[0_0px_15px_0px_rgba(255,255,255,0.075)]">
      <img
        src="https://occ-0-58-768.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABXQcl6LyIH22X9hB23CtSFtHK79A0STrTX7Pkzf-VhSUr1Qg0tkX0m16savnWjecLFrHgko82QbeZ4ybLkPfMunAhBNB30WZO1M.webp?r=b57"
        alt=""
        className="w-full h-36 object-cover"
      />
      <div>
        <div className="flex">
          <PlayIcon className="h-6 w-6" />
          <PlusIcon className="h-6 w-6" />
          <HandThumbUpIcon className="h-6 w-6" />
          <HandThumbDownIcon className="h-6 w-6" />
        </div>
        <div>
          <span>1 hour 37 mins</span>
          <span>7+</span>
          <span>100% Match</span>
        </div>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa pariatur voluptatum dolores
          atque! Consequatur error ab doloremque. Excepturi, dicta ipsa, ullam reiciendis aperiam
          quaerat voluptatibus in recusandae, error quos sit?
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default ListItem;
