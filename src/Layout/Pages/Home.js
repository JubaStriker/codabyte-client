import React, { useContext } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import Typewriter from 'typewriter-effect';
import { AuthContext } from '../../Context/AuthContextProvider';
import logo from '../../Assets/Codabyte.png'
import logoText from '../../Assets/Logo-text.png'
import img1 from '../../Assets/pexels-photo-220453.jpeg'
import { Link } from 'react-router-dom';
const Home = () => {

    const { user } = useContext(AuthContext)

    let name = '';
    if (user) {
        name = user.displayName
    }
    else {
        name = 'Visitor'
    }

    const pic1 = "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"

    return (
        <div className=' bg-gradient-to-tl from-gray-400 to-gray-100 '>

            <div className='text-5xl md:text-8xl font-mono font-semibold text-teal-600 text-center pt-6 md:pt-8'>
                <Typewriter
                    options={{
                        strings: ['Hello!!!', `${name}`],
                        autoStart: true,
                        loop: true,
                    }}
                />


            </div>

            <div className='flex flex-col items-center md:flex-row justify-center mt-12'>
                <h1 className='text-4xl md:text-6xl mr-5 pt-2 font-mono'>Welcome to </h1>
                <img src={logo} alt="" height={100} width={100} />
                <img src={logoText} height={100} width={400} alt="" />
            </div>

            <div className='container mt-20'>
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                        <div>
                            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                                Dream Team
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
                                            id="247432cb-6e6c-4bec-9766-564ed7c230dc"
                                            x="0"
                                            y="0"
                                            width=".135"
                                            height=".30"
                                        >
                                            <circle cx="1" cy="1" r=".7" />
                                        </pattern>
                                    </defs>
                                    <rect
                                        fill="url(#247432cb-6e6c-4bec-9766-564ed7c230dc)"
                                        width="52"
                                        height="24"
                                    />
                                </svg>
                                <span className="relative">Welcome</span>
                            </span>{' '}
                            our talented team of professionals
                        </h2>
                        <p className="text-base text-gray-700 md:text-lg">
                            Working day and night to ensure your bright future
                        </p>
                    </div>
                    <div className="grid gap-10 row-gap-8 mx-auto sm:row-gap-10 lg:max-w-screen-lg sm:grid-cols-2 lg:grid-cols-3">
                        <div className="flex">
                            <img
                                className="object-cover w-20 h-20 mr-4 rounded-full shadow"
                                src={img1}
                                alt="Person"
                            />
                            <div className="flex flex-col justify-center">
                                <p className="text-lg font-bold">Oliver Aguilerra</p>
                                <p className="text-sm text-gray-800">Python expert</p>
                            </div>
                        </div>
                        <div className="flex">
                            <img
                                className="object-cover w-20 h-20 mr-4 rounded-full shadow"
                                src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                                alt="Person"
                            />
                            <div className="flex flex-col justify-center">
                                <p className="text-lg font-bold">Marta Clermont</p>
                                <p className="text-sm text-gray-800">Design Team Lead</p>
                            </div>
                        </div>
                        <div className="flex">
                            <img
                                className="object-cover w-20 h-20 mr-4 rounded-full shadow"
                                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                                alt="Person"
                            />
                            <div className="flex flex-col justify-center">
                                <p className="text-lg font-bold">Anthony Geek</p>
                                <p className="text-sm text-gray-800">C++ Expert</p>
                            </div>
                        </div>
                        <div className="flex">
                            <img
                                className="object-cover w-20 h-20 mr-4 rounded-full shadow"
                                src="https://images.pexels.com/photos/3747435/pexels-photo-3747435.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                                alt="Person"
                            />
                            <div className="flex flex-col justify-center">
                                <p className="text-lg font-bold">Alice Melbourne</p>
                                <p className="text-sm text-gray-800">CSS expert</p>
                            </div>
                        </div>
                        <div className="flex">
                            <img
                                className="object-cover w-20 h-20 mr-4 rounded-full shadow"
                                src="https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
                                alt="Person"
                            />
                            <div className="flex flex-col justify-center">
                                <p className="text-lg font-bold">Martin Garix</p>
                                <p className="text-sm text-gray-800">Django developer</p>
                            </div>
                        </div>
                        <div className="flex">
                            <img
                                className="object-cover w-20 h-20 mr-4 rounded-full shadow"
                                src="https://images.pexels.com/photos/3931603/pexels-photo-3931603.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                                alt="Person"
                            />
                            <div className="flex flex-col justify-center">
                                <p className="text-lg font-bold">Andrew Larkin</p>
                                <p className="text-sm text-gray-800">Backend Developer</p>
                            </div>
                        </div>
                        <div className="flex">
                            <img
                                className="object-cover w-20 h-20 mr-4 rounded-full shadow"
                                src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                                alt="Person"
                            />
                            <div className="flex flex-col justify-center">
                                <p className="text-lg font-bold">Sophie Denmo</p>
                                <p className="text-sm text-gray-800">Designer UI/UX</p>
                            </div>
                        </div>
                        <div className="flex">
                            <img
                                className="object-cover w-20 h-20 mr-4 rounded-full shadow"
                                src="https://images.pexels.com/photos/3931553/pexels-photo-3931553.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                                alt="Person"
                            />
                            <div className="flex flex-col justify-center">
                                <p className="text-lg font-bold">Benedict Caro</p>
                                <p className="text-sm text-gray-800">Frontend Developer</p>
                            </div>
                        </div>
                        <div className="flex">
                            <img
                                className="object-cover w-20 h-20 mr-4 rounded-full shadow"
                                src="https://images.pexels.com/photos/3783255/pexels-photo-3783255.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                                alt="Person"
                            />
                            <div className="flex flex-col justify-center">
                                <p className="text-lg font-bold">Adam Molly</p>
                                <p className="text-sm text-gray-800">Full Stack Developer</p>
                            </div>
                        </div>



                    </div>
                </div>
            </div>
            <div className='mt-8 flex justify-center items-center'>
                <div>
                    <Link to='/courses'> <Player
                        src='https://assets6.lottiefiles.com/packages/lf20_8oJNWmyjNY.json'
                        className="player text-center h-96 w-96"
                        loop
                        autoplay
                    /></Link>
                </div>
                <div className='text-3xl'>Click on the rocket to begin your journey</div>
            </div>

        </div >
    );
};

export default Home;