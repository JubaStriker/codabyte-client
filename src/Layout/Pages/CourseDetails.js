import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const details = useLoaderData()
    console.log(details);


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
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque rem aperiam, eaque ipsa quae.
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
                    <ul>
                        {details.topics.map(topic => <li>{topic}</li>)}
                    </ul>

                    <ul>
                        {details.premium.map(premium => <li>{premium}</li>)}
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default CourseDetails;