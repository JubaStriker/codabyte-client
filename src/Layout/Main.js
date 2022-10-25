import React, { useContext, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from './Pages/Shared/Footer';
import { IoMdLogIn } from 'react-icons/io';
import { BiUserPlus, BiHomeAlt } from 'react-icons/bi';
import { AuthContext } from '../Context/AuthContextProvider';
import { FaUserCircle } from 'react-icons/fa';
import { BsFillFileEarmarkPlusFill } from 'react-icons/bs';



const Main = () => {

    const { user, logOut } = useContext(AuthContext);
    const [show, setShow] = useState(false);
    const [profile, setProfile] = useState(false);
    let photo;
    if (user && user.photoURL) {
        photo = user.photoURL;
    }
    else { photo = null }

    const handleSignOut = () => {
        logOut()
            .then(() => { })
            .catch(error => (console.error('Error: ', error)));
    }

    return (
        <div>
            <>
                <div className="w-full h-full bg-slate-800">
                    <div className="flex flex-no-wrap">
                        {/* Sidebar starts */}
                        <div className="absolute lg:relative w-64 h-auto shadow bg-gray-100 hidden lg:block">
                            <div className="h-16 w-full flex items-center px-8">
                                <Link to='/' className="flex items-center mb-4 sm:mb-0">
                                    <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-8" alt="Flowbite Logo" />
                                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-teal-500">CodaByte</span>
                                </Link>
                            </div>
                            <ul className=" py-6">
                                <li className="pl-6 cursor-pointer text-white text-sm leading-3 tracking-normal pb-4 pt-5 text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                    <div className="flex items-center">
                                        <div>
                                            <BiHomeAlt className='text-lg' />
                                        </div>
                                        <span className="ml-2">

                                            <Link to='/home'>Home</Link></span>
                                    </div>
                                </li>
                                <li className="pl-6 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-4 mb-4 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                    <div className="flex items-center">
                                        <BiUserPlus className='text-xl' />
                                        <span className="ml-2">
                                            <Link to='/signup'>Signup</Link>
                                        </span>
                                    </div>
                                </li>
                                <li className="pl-6 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mb-4 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                    <div className="flex items-center">
                                        <IoMdLogIn className='text-lg' />
                                        <span className="ml-2">
                                            <Link to='/login'>Login</Link></span>
                                    </div>
                                </li>
                                <li className="pl-6 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                    <div className="flex items-center">
                                        <BsFillFileEarmarkPlusFill />
                                        <span className="ml-2">
                                            <Link to='/courses'>Courses</Link>
                                        </span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        {/*Mobile responsive sidebar*/}
                        <div className={show ? "w-full h-full absolute z-40  transform  translate-x-0 " : "   w-full h-full absolute z-40  transform -translate-x-full"} id="mobile-nav">

                            <div className="bg-gray-800 opacity-50 absolute h-full w-full lg:hidden" onClick={() => setShow(!show)} />
                            <div className="absolute z-40 sm:relative w-64 md:w-96 shadow pb-4 bg-gray-100 lg:hidden transition duration-150 ease-in-out h-full">
                                <div className="flex flex-col justify-between h-full w-full">
                                    <div>
                                        <div className="flex items-center justify-between px-8">
                                            <div className="h-16 w-full flex items-center">
                                                <Link to='/' className="flex items-center  sm:mb-0">
                                                    <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-8" alt="Flowbite Logo" />
                                                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-teal-500">CodaByte</span>
                                                </Link>
                                            </div>
                                            <div id="closeSideBar" className="flex items-center justify-center h-10 w-10" onClick={() => setShow(!show)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" />
                                                    <line x1={18} y1={6} x2={6} y2={18} />
                                                    <line x1={6} y1={6} x2={18} y2={18} />
                                                </svg>
                                            </div>
                                        </div>
                                        <ul className=" py-6">
                                            <li className="pl-6 cursor-pointer text-white text-sm leading-3 tracking-normal pb-4 pt-5 text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                                <div className="flex items-center">
                                                    <div className="w-6 h-6 md:w-8 md:h-8">
                                                        <BiHomeAlt className='text-2xl' />
                                                    </div>
                                                    <span className="ml-2 xl:text-base md:text-2xl text-base">
                                                        <Link to='/home'>Home</Link></span>
                                                </div>
                                            </li>
                                            <li className="pl-6 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-4 mb-4 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                                <div className="flex items-center">
                                                    <BiUserPlus className='text-3xl' />
                                                    <span className="ml-2 xl:text-base md:text-2xl text-base"> <Link to='/signup'>Signup</Link></span>
                                                </div>
                                            </li>
                                            <li className="pl-6 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mb-4 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                                <div className="flex items-center">
                                                    <IoMdLogIn className='text-2xl' />
                                                    <span className="ml-2 xl:text-base md:text-2xl text-base">
                                                        <Link to='/login'>Login</Link></span>
                                                </div>
                                            </li>
                                            <li className="pl-6 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                                <div className="flex items-center">
                                                    <BsFillFileEarmarkPlusFill />
                                                    <span className="ml-2">
                                                        <Link to='/courses'>Courses</Link>
                                                    </span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="w-full">
                                        <div className="flex justify-center mb-4 w-full px-6">
                                            <div className="relative w-full">
                                                <div className="text-gray-500 absolute ml-4 inset-0 m-auto w-4 h-4">

                                                </div>

                                            </div>
                                        </div>
                                        <div className="border-t border-gray-300">
                                            <div className="w-full flex-col gap-3 items-center justify-between px-3 py-2">
                                                <div className="flex items-center my-3">
                                                    <p className="md:text-xl text-gray-800 text-base leading-4 ml-2">{user ? user.email : ''}</p>
                                                </div>
                                                <div className='flex justify-around'>
                                                    <div>{photo ? <><img className='rounded-full h-8 w-8' src={photo} alt="" srcset="" /></> : <FaUserCircle className='text-3xl' />}</div>

                                                    <div> {user ? <button onClick={handleSignOut} type="button" className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Sign out</button> :
                                                        <Link to='/login'>
                                                            <button onClick={handleSignOut} type="button" className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Log in</button>
                                                        </Link>}</div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*Mobile responsive sidebar*/}
                        {/* Sidebar ends */}
                        <div className="w-full">
                            {/* Navigation starts */}
                            <nav className="h-16 flex items-center lg:items-stretch justify-end lg:justify-between bg-gray-100 shadow relative z-10">
                                <div className="hidden lg:flex w-full pr-6">
                                    <div className="w-1/2 h-full hidden lg:flex items-center pl-6 pr-24">
                                        <h1>{user ? `Logged in as ${user.email}` : 'Log in to get full access'}</h1>
                                    </div>
                                    <div className="w-full hidden lg:flex">
                                        <div className="w-full flex items-center pl-8 justify-end gap-2">
                                            <div>
                                                {photo ? <><img className='rounded-full h-9 w-9' src={photo} alt="" srcset="" /></> : <FaUserCircle className='text-3xl' />}
                                            </div>

                                            <div className="flex items-center relative cursor-pointer" onClick={() => setProfile(!profile)}>
                                                {user ? <button onClick={handleSignOut} type="button" className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Sign out</button> :
                                                    <Link to='/login'>
                                                        <button onClick={handleSignOut} type="button" className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Log in</button>
                                                    </Link>}
                                            </div>


                                        </div>
                                    </div>
                                </div>
                                <div className="text-gray-600 mr-8 visible lg:hidden relative" onClick={() => setShow(!show)}>
                                    {show ? (
                                        " "
                                    ) : (
                                        <svg aria-label="Main Menu" aria-haspopup="true" xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-menu cursor-pointer" width={30} height={30} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <line x1={4} y1={8} x2={20} y2={8} />
                                            <line x1={4} y1={16} x2={20} y2={16} />
                                        </svg>
                                    )}
                                </div>
                            </nav>
                            {/* Navigation ends */}
                            {/* Remove class [ h-64 ] when adding a card block */}
                            <div className="mx-auto md:w-full">
                                <Outlet />

                            </div>
                        </div>
                    </div>
                </div>
            </>
            <Footer />

        </div>
    );
};

export default Main;