import React from 'react';
import { PlayIcon } from '@heroicons/react/24/solid';
import { InformationCircleIcon } from '@heroicons/react/24/outline';

const Featured = ({ type }) => {
  return (
    <div className="h-[90vh] relative">
      {type && (
        <div className="flex absolute top-20 left-12 items-center text-white font-medium">
          <span className="text-4xl mr-4">{type === 'movies' ? 'Movies' : 'TV Shows'}</span>
          <select
            name="genres"
            id="genres"
            className="bg-main-color text-base cursor-pointer border-white border-opacity-90 py-0 pl-3 pr-1 ml-5"
          >
            <option>Genres</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img
        src="/src/assets/images/spiderman_wallpaper.jpg"
        alt=""
        className="w-full h-full object-cover"
      />
      <div className="w-[35%] absolute left-12 bottom-24 flex flex-col">
        <img
          src="https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABXiUYvfZp7YBZXzwl0nikuO79LD-6fMtrhJZPd5yXUDoYQRh4MNiCYe3s_2qU4MqXpIQo__Lf7Z-oyHeLsIuQmo-TQCt7pFttZzPfOV1XX4.webp?r=047"
          alt=""
          className="w-[400px] h-full object-cover"
        />
        <span className="mx-0 my-5 text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, error voluptatem fuga
          omnis, cumque quasi cum praesentium tempore, minus culpa velit aliquam sit ea similique
          quidem sint sed excepturi impedit!
        </span>
        <div className="flex font-bold space-x-3">
          <button className="px-6 py-2 border-0 rounded-md flex items-center justify-center bg-white cursor-pointer gap-2 hover:bg-opacity-75 text-main-color">
            <PlayIcon className="h-6 w-6 text-main-color" />
            <span>Play</span>
          </button>
          <button className="px-6 py-2 border-0 rounded-md flex items-center justify-center bg-gray-500 bg-opacity-60 cursor-pointer gap-2 hover:bg-gray-500 hover:bg-opacity-40 text-white">
            <InformationCircleIcon className="h-6 w-6 text-white" />
            <span>More Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
