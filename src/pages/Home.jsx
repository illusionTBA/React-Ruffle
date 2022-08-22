/* eslint-disable */
import React from 'react';
import gameList from '../games.json';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { TbBrandGithub } from 'react-icons/tb';
import { FaDiscord } from 'react-icons/fa';

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5,
};

const pageVariants = {
  initial: { opacity: 0, x: '100vh' },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: '-100vh' },
};

function Home() {
  const [games, setGames] = useState(gameList.length);

  return (
    <div className="flex flex-col items-center w-full h-screen overflow-hidden">
      <motion.div
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={pageTransition}
        className="flex flex-col w-full h-full justify-center items-center"
      >
        <img src="/favicon.png" width={200} className="drop-shadow-xl" />

        <h1 className="text-4xl text-white p-5">Welcome to React-Ruffle</h1>
        <p className="text-2xl text-gray-600 p-2">
          We have over <span className="text-1xl text-gray-400">{games}+</span>{' '}
          games for you to choose from
        </p>
        <NavLink
          to="/games"
          className="inline-flex items-center justify-center drop-shadow-xl h-14 px-10 py-2 mt-2 text-xl font-semibold text-center text-gray-200 no-underline align-middle transition-all duration-300 ease-in-out bg-transparent border-2 border-gray-600 border-solid rounded-full cursor-pointer select-none hover:text-white hover:border-white focus:shadow-xs focus:no-underline"
        >
          Start Browsing
        </NavLink>
      </motion.div>
      <div className="flex bottom-0 items-center">
        <div className="flex flex-row rounded-md bg-[#1f2635] p-1 space-x-4">
          <TbBrandGithub
            className="flex text-gray-300 text-3xl hover:cursor-pointer hover:text-gray-500 transition-all duration-300 ease-in-out"
            onClick={() => {
              window.open(
                'https://github.com/illusionTBA/React-Ruffle',
                '_blank',
              );
            }}
          />
          <FaDiscord
            className="flex text-gray-300 text-3xl hover:cursor-pointer hover:text-gray-500 transition-all duration-300 ease-in-out"
            onClick={() => {
              window.open('https://discord.gg/raFAecZw', '_blank');
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
