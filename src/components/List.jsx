import { React, useState, useEffect, useRef } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import ListItem from './ListItem';

const List = () => {
  const listRef = useRef();
  const [currentPosition, setCurrentPosition] = useState(0);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    setCurrentPosition(listRef.current.getBoundingClientRect().x);
    handleButtonVisibility();
  }, []);

  const handleButtonVisibility = () => {
    setShowLeftButton(currentPosition < 0);
    setShowRightButton(
      listRef.current && currentPosition + listRef.current.offsetWidth > window.innerWidth,
    );
  };

  const handleClick = (direction) => {
    const listWidth = listRef.current.offsetWidth;
    const windowWidth = window.innerWidth;
    const positionDelta = 250; // Amount of pixels to move on each click

    if (direction === 'right') {
      // Calculate the new position after moving left
      const newPosition = Math.max(-listWidth + windowWidth, currentPosition - positionDelta);

      // Update the state and apply the transform to the list
      setClickCount(clickCount + 1);
      setCurrentPosition(newPosition);
      listRef.current.style.transform = `translateX(${newPosition}px)`;
    } else if (direction === 'left') {
      // Calculate the new position after moving right
      const newPosition = Math.min(0, currentPosition + positionDelta);

      // Update the state and apply the transform to the list
      setClickCount(clickCount + 1);
      setCurrentPosition(newPosition);
      listRef.current.style.transform = `translateX(${newPosition}px)`;
    }
  };

  useEffect(() => {
    handleButtonVisibility();
  }, [clickCount]);

  return (
    <div className="w-full my-[3vw]">
      <div>
        <h2 className="text-neutral-200 font-medium text-[1.4vw] mx-[4%] mt-0 mb-2">
          Continue Watching
        </h2>
        <div className="relative">
          {showLeftButton && (
            <ChevronLeftIcon
              className="absolute h-full w-12 m-auto font-medium text-white left-0 top-0 bottom-0 z-[99] bg-neutral-900 bg-opacity-60 cursor-pointer"
              onClick={() => handleClick('left')}
            />
          )}
          <div className="flex px-[4%] w-max transition-all duration-1000 ease-out" ref={listRef}>
            <ListItem index={0} />
            <ListItem index={1} />
            <ListItem index={2} />
            <ListItem index={3} />
            <ListItem index={4} />
            <ListItem index={5} />
            <ListItem index={6} />
            <ListItem index={7} />
            <ListItem index={8} />
            <ListItem index={9} />
          </div>
          {showRightButton && (
            <ChevronRightIcon
              className="absolute h-full w-12 m-auto font-medium text-white right-0 top-0 bottom-0 z-[99] bg-neutral-900 bg-opacity-60 cursor-pointer"
              onClick={() => handleClick('right')}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default List;
