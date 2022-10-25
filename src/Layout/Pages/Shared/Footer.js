import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../Assets/Codabyte.png';
import logoText from '../../../Assets/Logo-text.png';

const Footer = () => {
    return (
        <div>

            <footer className="p-4 bg-sky-900 rounded-b-lg shadow md:px-6 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <Link to='/' className="flex items-center mb-4 sm:mb-0">
                        <img src={logo} className="mr-3 h-8" alt="CodaByte Logo" />
                        <img src={logoText} className="mr-3 h-8" alt="CodaByte Logo" />

                    </Link>
                    <ul className="flex flex-wrap items-center mb-6 text-sm text-white sm:mb-0">
                        <li>
                            <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
                        </li>
                        <li>
                            <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" className="mr-4 hover:underline md:mr-6 ">Licensing</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://flowbite.com/" className="hover:underline">CodaByte™</a>. All Rights Reserved.
                </span>
            </footer>


        </div>
    );
};

export default Footer;