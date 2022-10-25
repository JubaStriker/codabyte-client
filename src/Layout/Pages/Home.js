import React, { useContext } from 'react';
import Typewriter from 'typewriter-effect';
import { AuthContext } from '../../Context/AuthContextProvider';
import logo from '../../Assets/Codabyte.png'
import logoText from '../../Assets/Logo-text.png'

const Home = () => {

    const { user } = useContext(AuthContext)

    let name = '';
    if (user) {
        name = user.displayName
    }
    else {
        name = 'Visitor'
    }



    return (
        <div className='h-screen bg-gradient-to-tl from-gray-400 to-gray-100 '>

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

        </div>
    );
};

export default Home;