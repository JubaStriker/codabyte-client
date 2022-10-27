import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {

    const { name, picture, price, _id } = course;


    return (
        <Link to={`/courses/${_id}`}>
            <div className='bg-white hover:bg-gray-100 border hover:border-gray-300 flex flex-col p-4 rounded-xl m-3'>
                <img
                    className="  h-70 mb-6 rounded shadow-lg md:h-80 w-80 xl:h-80 "
                    src={picture}
                    alt=""
                />
                <p className="mb-2 text-xl font-bold leading-none sm:text-2xl text-center">
                    {name}
                </p>
                <div className="text-gray-700">
                    <div className='mr-4 text-start text-3xl text-teal-600 font-semibold'> {price}. 00 $</div>

                </div>
            </div>
        </Link>
    );
};

export default CourseCard;