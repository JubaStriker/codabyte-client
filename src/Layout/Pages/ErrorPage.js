import { Link, useRouteError } from 'react-router-dom';
import { Player } from '@lottiefiles/react-lottie-player';



const ErrorPage = () => {
    const error = useRouteError();

    return (
        <div className='flex flex-col min-h-[700px] justify-center items-center mb-20'>
            <h1 className='text-4xl mt-10'>Ops! An Error Ocurred!</h1>
            <br />
            <div>
                <Player
                    src='https://assets7.lottiefiles.com/packages/lf20_pNx6yH.json'
                    className="player"
                    loop
                    autoplay
                />
            </div>


            {error && (
                <div>
                    <p className='text-teal-700'>{error.statusText || error.message}</p>
                    <p className='text-red-500 text-center text-xl'>{error.status}</p>
                </div>
            )}

            <button type="button" className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2  shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 f my-10"> <a href="/quiz"><Link to='home'>Back to Home</Link></a></button>
        </div>
    );
};

export default ErrorPage;