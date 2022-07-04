/* eslint-disable */ 
import React from 'react'
import gameList from '../games.json'
import { useState } from 'react'
import Card from '../components/Card'
import { AiOutlineArrowLeft } from 'react-icons/ai';
function Games() {

    const [gamesToShow, setGamesToShow] = useState(20) // default to show 20 games

    const slice = gameList.slice(0, gamesToShow)

    const Loadmore = () => {
        setGamesToShow(gamesToShow + gamesToShow)
    }
  return (
    <div className='flex flex-col w-full h-screen items-center'>
        <AiOutlineArrowLeft className='absolute m-2 top-0 left-0 text-white text-3xl hover:cursor-pointer'
        onClick={() => {window.location.href = "/"}}
        />
        <h1 className='text-5xl text-white mt-10'>Games</h1>
        <p className='text-2xl text-gray-400 p-5'>Thanks to <a className='text-gray-300 hover:underline transition-all' href="https://github.com/Radon-Games/" target="_blank">Radon-games</a> we can have all these games so go give them a start!</p>
        <div className="flex flex-row flex-wrap justify-center">
            {slice.map(game => {
                return <Card key={game.title} title={game.title} description={game.description} route={game.route} listed={game.listed} gameType={game.gameType}  />
            })}
        </div>
        <button 
        className='inline-flex items-center justify-center h-14 px-10 py-4 mb-5 text-xl font-semibold text-center text-gray-200 no-underline align-middle transition-all duration-300 ease-in-out bg-transparent border-2 border-gray-600 border-solid rounded-full cursor-pointer select-none hover:text-white hover:border-white focus:shadow-xs focus:no-underline'
        onClick={Loadmore}
        >
            Load More
        </button>
    </div>
  )
}

{/* {
    gameList.map(game => {
        return (
            <div>
                <h1>{game.title}</h1>
                <p>{game.description}</p>
            </div>
        )
    })
} */}

export default Games