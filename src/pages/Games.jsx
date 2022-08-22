/* eslint-disable */
import React from 'react';
import gameList from '../games.json';
import { useState, useRef } from 'react';
import Card from '../components/Card';
import { AiOutlineArrowLeft, AiOutlineSearch } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
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

function Games() {
  const searchInput = useRef(null);
  const gameContainer = useRef(null);
  const [pressed, setPressed] = useState(false);
  const [gamesToShow, setGamesToShow] = useState(20); // default to show 20 games
  const [searchGame, setSearchGame] = useState(false);
  const [search, setSearch] = useState('');
  const slice = gameList.slice(0, gamesToShow);

  const Loadmore = () => {
    setGamesToShow(gamesToShow + gamesToShow);
  };
  const listSearch = (e) => {
    const search = e.target.value.toLowerCase();
    if (search === '') {
      setSearchGame(false);
      setGamesToShow(20);
    } else {
      setSearchGame(true);
      const filtered = gameList.filter((game) =>
        game.title.toLowerCase().includes(search),
      );
      setGamesToShow(0);
      setSearch(filtered);
    }
  };

  return (
    <motion.div
      className="flex flex-col w-full h-screen items-center"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
    >
      <NavLink to={'/'}>
        {' '}
        <AiOutlineArrowLeft className="absolute m-2 top-0 left-0 text-white text-3xl hover:cursor-pointer" />
      </NavLink>
      <div className="flex flex-row items-center justify-center mt-3 ">
        <AiOutlineSearch
          className=" text-white text-3xl mr-2 hover:cursor-pointer"
          onClick={() => {
            !setPressed(!pressed);
          }}
        />
        {pressed ? (
          <input
            ref={searchInput}
            className="flex relativemax-w-xs w-full h-10 p-2 bg-[#232b3b] border-none text-white outline-none rounded-md focus:outline-none"
            type="text"
            placeholder="Search"
            onChange={listSearch}
          />
        ) : null}
      </div>

      <h1 className="text-5xl text-white mt-10">Games</h1>
      <p className="text-2xl text-gray-400 p-5">
        Thanks to{' '}
        <a
          className="text-gray-300 hover:underline transition-all"
          href="https://github.com/Radon-Games/"
          target="_blank"
        >
          Radon-games
        </a>{' '}
        we can have all these games so go give them a start!
      </p>
      <div
        className="flex flex-row flex-wrap justify-center"
        ref={gameContainer}
      >
        {searchGame
          ? search.map((game, index) => {
              return (
                <Card
                  key={game.title}
                  title={game.title}
                  description={game.description}
                  route={game.route}
                  listed={game.listed}
                  gameType={game.gameType}
                />
              );
            })
          : slice.map((game) => {
              return (
                <Card
                  key={game.title}
                  title={game.title}
                  description={game.description}
                  route={game.route}
                  listed={game.listed}
                  gameType={game.gameType}
                />
              );
            })}
      </div>
      <button
        className="inline-flex items-center justify-center h-14 px-10 py-4 mb-5 text-xl font-semibold text-center text-gray-200 no-underline align-middle transition-all duration-300 ease-in-out bg-transparent border-2 border-gray-600 border-solid rounded-full cursor-pointer select-none hover:text-white hover:border-white focus:shadow-xs focus:no-underline"
        onClick={Loadmore}
      >
        Load More
      </button>
    </motion.div>
  );
}

export default Games;
