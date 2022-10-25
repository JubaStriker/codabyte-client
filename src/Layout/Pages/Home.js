import React, { useContext } from 'react';
import Typewriter from 'typewriter-effect';
import { AuthContext } from '../../Context/AuthContextProvider';

const Home = () => {

    const { user } = useContext(AuthContext)

    let name = '';
    if (user) {
        name = user.displayName
    }
    else {
        name = 'Stranger'
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

        </div>
    );
};

export default Home;