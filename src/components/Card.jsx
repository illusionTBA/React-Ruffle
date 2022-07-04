/* eslint-disable */
import React from 'react';

function Card(props) {
  const { title, description, route, listed, gameType } = props;
  const trimedDesc =
    description.length > 100
      ? description.substring(0, 100) + '...'
      : description;
    const playRoute = `/play/${route}`;
  if (listed) {
    return (
      <div className="p-6 w-[320px] bg-[#252e3f] rounded-lg border border-[#252e3f] m-5">
        <a href={playRoute}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
            {title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-300 ">
            {trimedDesc}    
        </p>
        <p className="mb-3 font-normal text-gray-300 ">
            type: {gameType}    
        </p>
        <a
          href={playRoute}
          className="inline-flex justify-end items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 transition-all duration-300 ease-in-out"
        >
          Play
          <svg
            className="ml-2 -mr-1 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
      //   <div className="flex flex-col justify-center rounded-md bg-[#252e3f] w-[320px] h-[300px] m-5 break-words overflow-auto">
      //         <h1 className="text-2xl text-white">{title}</h1>
      //         <p className="text-gray-400">{trimedDesc}</p>
      //   </div>
    );
  }
}

export default Card;
