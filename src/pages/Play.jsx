/* eslint-disable */ 
import React, { useEffect } from 'react'
import { useParams } from "react-router-dom";
import games from '../games.json'
import { useRef, useState } from 'react';
import useRuffle from '../components/scripts/useRuffle';

import { BiFullscreen } from 'react-icons/bi';
import { AiOutlinePause, AiOutlineArrowLeft } from 'react-icons/ai';
import { FiPlay } from 'react-icons/fi';
function Play() {

        const { id } = useParams();
        console.log("id: " + id);
        const game = games.find(game => game.route === id);
        if (!game) {
            return <div>Game not found</div>
        }
        const { title, description, source, gameType, width, height, listed } = game;
        if (listed === false) {
            return <div>Game is unlisted please come back later!</div>
        }

        if (gameType === "flash") {
            const ruffleContainer = useRef(null);
            useRuffle(ruffleContainer, source, width, height);

            return (
                <div className='flex shrink w-full h-screen justify-center items-center'>
                    <AiOutlineArrowLeft className='absolute m-2 top-0 left-0 text-white text-3xl hover:cursor-pointer' 
                    onClick={() => {
                        window.location.href = "/games";

                    }} />
                    <div className='flex flex-col w-3/4 h-5/6 items-center justify-center mt-20'>
                        <h1 className='text-4xl text-gray-300 mb-2'>{title}</h1>
                        <div ref={ruffleContainer} className="w-full h-full flex justify-center items-center"></div>
                        <div className='flex w-full justify-center items-center space-x-4 mt-2'>
                            <BiFullscreen className='text-white text-2xl hover:cursor-pointer' />
                            <AiOutlinePause className='text-white text-2xl hover:cursor-pointer' />
                        </div>
                        <p className='flex text-md text-gray-300 break-words pb-10'> {description}</p>
                    </div>
                </div>
            )
        } else if (gameType === "html") {
            return (
                <div className='flex w-full h-screen justify-center items-center'>
                    <AiOutlineArrowLeft className='absolute m-2 top-0 left-0 text-white text-3xl hover:cursor-pointer' 
                    onClick={() => {
                        window.location.href = "/games";

                    }} />
                    <div className='flex flex-col w-3/4 h-5/6 items-center justify-center mt-20'>
                        <h1 className='text-4xl text-gray-300 mb-2'>{title}</h1>
                        <div className="w-full h-full flex justify-center items-center">
                            <iframe src={source} width={width} height={height} frameborder="0"></iframe>
                        </div>
                        <div className='flex w-full justify-center items-center space-x-4 mt-2 text-white'>
                            controls comming soon
                            {/* <BiFullscreen className='text-white text-2xl hover:cursor-pointer' />
                            <AiOutlinePause className='text-white text-2xl hover:cursor-pointer' /> */}
                        </div>
                        <p className='flex text-md text-gray-300 break-words pb-10'> {description}</p>
                    </div>
                </div>
            )
        }
}




export default Play