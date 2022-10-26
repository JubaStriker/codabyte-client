import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from '../../components/CourseCard';

const Courses = () => {

    const courses = useLoaderData();
    console.log(courses);

    return (
        <div className=' bg-gradient-to-tl from-gray-400 to-gray-100 '>



            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="flex flex-col w-full mb-6 lg:justify-between lg:flex-row md:mb-8">
                    <div className="flex items-center mb-5 md:mb-6 group lg:max-w-xl">
                        <a href="/" aria-label="Item" className="mr-3">
                            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-indigo-50">
                                <svg
                                    className="w-12 h-12 text-deep-purple-accent-400"
                                    stroke="currentColor"
                                    viewBox="0 0 52 52"
                                >
                                    <polygon
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        fill="none"
                                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    />
                                </svg>
                            </div>
                        </a>
                        <h2 className="font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl">
                            <span className="inline-block mb-2">Our Courses</span>
                            <div className="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100" />
                        </h2>
                    </div>
                    <p className="w-full text-gray-700 lg:text-sm lg:max-w-md">
                        Explore our individual courses to know more.
                    </p>
                </div>
                <div className="grid gap-8 row-gap-5 mb-8 md:grid-cols-2 lg:grid-cols-3 lg:row-gap-8">
                    {courses ? courses.map(course => <CourseCard key={course._id} course={course} ></CourseCard>)
                        : ''}
                </div>
            </div>
        </div>
    );
};

export default Courses;