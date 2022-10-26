import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { BsFillCartCheckFill } from 'react-icons/bs'
import { AuthContext } from '../../Context/AuthContextProvider';
import { Player } from '@lottiefiles/react-lottie-player';
import Typewriter from 'typewriter-effect';

const Premium = () => {
    const { user } = useContext(AuthContext)
    const details = useLoaderData()

    console.log(user);

    return (
        <div className=' bg-gradient-to-tl from-gray-400 to-gray-100 p-8 md:p-18'>
            <h2 className="max-w-lg mb-16 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                <span className="relative inline-block">
                    <svg
                        viewBox="0 0 52 24"
                        fill="currentColor"
                        className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                    >
                        <defs>
                            <pattern
                                id="5dc90b42-5ed4-45a6-8e63-2d78ca9d3d95"
                                x="0"
                                y="0"
                                width=".135"
                                height=".30"
                            >
                                <circle cx="1" cy="1" r=".7" />
                            </pattern>
                        </defs>
                        <rect
                            fill="url(#5dc90b42-5ed4-45a6-8e63-2d78ca9d3d95)"
                            width="52"
                            height="24"
                        />
                    </svg>
                    <span className="relative text-6xl lg:text-8xl text-teal-900 mt-10">
                        <Typewriter
                            options={{
                                strings: ['Check out'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </span>
                </span>{' '}

            </h2>
            <div className="max-w-screen-md  bg-white rounded-lg border border-gray-200 shadow-md mx-auto">
                <div className="flex justify-end px-4 pt-4">
                </div>
                <div className="flex flex-col items-center pb-10">
                    <img className="mb-3 w-24 h-24 rounded-full shadow-lg" src={user ? user.photoURL : ''} alt="" />
                    <h5 className="mb-1 text-xl font-medium text-gray-900">{user ? user.displayName : ''}</h5>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{user ? user.email : ''}</span>
                    <div className="flex mt-4 space-x-3 md:mt-6">
                        <p className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor:pointer">Check Out   <BsFillCartCheckFill className='ml-3'/> </p>

                    </div>
                </div>
                <div>
                    <h1 className='text-center text-4xl text-teal-700 mb-6'>Course name : {details.name}</h1>
                    <h1 className='text-center text-2xl'>Contents to unlock</h1>
                    <p className=" text-gray-900 px-10 md:px-20 pb-8">
                                    {details.topics.map(topic => <>
                                        <div className='flex justify-between text-lg my-1 px-6 py-2'>
                                            <div>{topic}</div>
                                            <div className='text-green-700'><Player
                    src='https://assets2.lottiefiles.com/packages/lf20_8lpuvcuq.json'
                    className="player" style={{ width: '20px', height: '20px' }}
                    loop
                    autoplay /></div>
                                        </div>
                                    </>)}
                                    {details.premium.map(topic => <>
                                        <div className='flex justify-between text-lg my-0 px-6 py-2'>
                                            <div>{topic}</div>
                                            <div className='text-yellow-400'><Player
                    src='https://assets2.lottiefiles.com/packages/lf20_8lpuvcuq.json'
                    className="player" style={{ width: '20px', height: '20px' }}
                    loop
                    autoplay /></div>
                                        </div>
                                    </>)}
                                </p>
                </div>
            </div>

        </div >
    );
};

export default Premium;