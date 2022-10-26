import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { TiTick } from 'react-icons/ti'
import { AiTwotoneCrown } from 'react-icons/ai'


const CourseDetails = () => {
    const details = useLoaderData()



    return (
        <div className='bg-gradient-to-tl from-gray-400 to-gray-100'>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="mx-auto sm:text-center lg:max-w-2xl">
                    <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                        <div>
                            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                                Welcome to {details.name} course
                            </p>
                        </div>
                        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
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
                                <span className="relative text-6xl lg:text-8xl text-teal-900">{details.name}</span>
                            </span>{' '}

                        </h2>
                        <p className="text-base text-gray-700 md:text-lg">
                            Enroll today and unlock your full potential with our expert team and experienced instructors
                        </p>
                    </div>
                    <div className="mb-4 transition-shadow duration-300 hover:shadow-xl lg:mb-6 flex items-center">
                        <img
                            className=" w-96 h-56 rounded shadow-lg sm:h-64 md:h-80 lg:h-96 mx-auto"
                            src={details.picture}
                            alt=""
                        />
                    </div>
                    <p className="max-w-xl mb-4 text-base text-gray-700 sm:mx-auto">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud ullamco laboris aliquip ex ea.
                    </p>




                    <div className="grid gap-8 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-2 sm:grid-cols-1">
                        <div className="duration-300 transform bg-gray-200 rounded-lg border-l-4 hover:-translate-y-2 hover:bg-gray-100">
                            <div className="h-full p-5 border border-l-0 rounded-lg shadow-sm">
                                <h6 className="mb-9 font-semibold leading-5 text-3xl">Free classes</h6>
                                <p className=" text-gray-900">
                                    {details.topics.map(topic => <>
                                        <div className='flex justify-between text-l bg-gray-200 hover:bg-gray-100 my-1 p-1'>
                                            <div>{topic}</div>
                                            <div className='text-green-700'><TiTick /></div>
                                        </div>
                                    </>)}
                                </p>
                            </div>
                        </div>


                        <div className="duration-300 transform bg-gray-200 border-l-4 rounded-lg hover:-translate-y-2 hover:bg-gray-100">
                            <div className="h-full p-5 border border-l-0 rounded-lg shadow-sm">
                                <h6 className="mb-9 font-semibold leading-5 text-3xl">Premium contents</h6>
                                <p className=" text-gray-900">
                                    {details.premium.map(topic => <>
                                        <div className='flex justify-between text-l bg-gray-200 hover:bg-gray-100 my-1 p-1'>
                                            <div>{topic}</div>
                                            <div className='text-yellow-400'><AiTwotoneCrown /></div>
                                        </div>
                                    </>)}
                                </p>

                            </div>
                        </div>


                    </div>
                </div>

                {/* <button type="button" className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">Green to Blue</button> */}
                <Link to={`/checkout/${details._id}`}>
                    <p className='w-96 sm:w-80 text-white rounded-lg mx-auto text-center px-3 py-2 bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 cursor-pointer shadow-lg'>Get Premium Access</p>
                </Link>

            </div>

        </div>
    );
};

export default CourseDetails;