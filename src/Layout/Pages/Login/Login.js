import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AiOutlineEyeInvisible, AiOutlineEye, AiFillGithub } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc'
import { AuthContext } from '../../../Context/AuthContextProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { Player } from '@lottiefiles/react-lottie-player';

const Login = () => {

    const { signIn, providerLogin, user } = useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const [showPass, setShowPass] = useState(false);
    const [error, setError] = useState('');
    const handleShowPass = () => {
        setShowPass(!showPass);
    }

    const handleOnSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;


        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
            });
        form.reset();

    }

    const handleGoogleLogin = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                setError('');
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error('Error', error);
                setError(error.message);
            });

    }
    const handleGithubLogin = () => {
        providerLogin(githubProvider)
            .then(result => {
                const user = result.user;
                setError('');
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error('Error', error);
                setError(error.message);
            })


    }


    return (
        <div className="h-full bg-gradient-to-tl from-green-400 to-indigo-900 w-full py-16 px-4">
            <div className="flex flex-col items-center justify-center">
                <Player
                    src='https://assets6.lottiefiles.com/packages/lf20_kvoazdkd.json'
                    className="player" style={{ width: '150px', height: '150px' }}
                    loop
                    autoplay />
                <div className="bg-white shadow rounded lg:w-1/3  md:w-1/2 w-full p-10 mt-16">

                    <p tabIndex={0} aria-label="Login to your account" className="text-2xl font-extrabold leading-6 text-gray-800">
                        Login to your account
                    </p>
                    <p className="text-sm mt-4 font-medium leading-none text-gray-500">
                        Don't have account?{" "}
                        <span tabIndex={0} role="link" aria-label="Sign up here" className="text-sm font-medium leading-none underline text-gray-800 cursor-pointer">
                            {" "}
                            <Link to='/signup'>Sign up here</Link>
                        </span>
                    </p>
                    <button onClick={handleGoogleLogin} aria-label="Continue with google" className="focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-10">
                        <FcGoogle className='text-2xl' />
                        <p className="text-base font-medium ml-4 text-gray-700">Continue with Google</p>
                    </button>
                    <button onClick={handleGithubLogin} aria-label="Continue with github" className="focus:outline-none  focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-4">
                        <AiFillGithub className='text-2xl' />
                        <p className="text-base font-medium ml-4 text-gray-700">Continue with Github</p>
                    </button>

                    <div className="w-full flex items-center justify-between py-5">
                        <hr className="w-full bg-gray-400" />
                        <p className="text-base font-medium leading-4 px-2.5 text-gray-400">OR</p>
                        <hr className="w-full bg-gray-400  " />
                    </div>
                    <form onSubmit={handleOnSubmit} action="">
                        <div>
                            <p className="text-sm font-medium leading-none text-gray-800">Email</p>
                            <input placeholder="enter email address" type="email" name='email' className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2" />
                        </div>
                        <div className="mt-6  w-full">
                            <p className="text-sm font-medium leading-none text-gray-800">Password</p>
                            <div className="relative flex items-center justify-center">
                                <input placeholder='enter your password' type={showPass ? "text" : "password"} name='password'
                                    className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2" />
                                <div onClick={handleShowPass} className="absolute right-0 mt-2 mr-3 cursor-pointer">
                                    {showPass ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                                </div>
                            </div>
                        </div>
                        <div className="mt-8">
                            <button type='submit' aria-label="create my account" className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full">
                                Login
                            </button>
                        </div>

                        <div className='text-red-600 text-sm mt-4'>{error}</div>
                    </form>
                </div>
            </div>
        </div>
    );

};

export default Login;