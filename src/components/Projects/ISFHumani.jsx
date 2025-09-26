import React from 'react'
import { FaFacebookSquare, FaTwitter, FaPinterest } from "react-icons/fa";
import { Link } from 'react-router-dom';

const ISFHumani = () => {
    return (
        <div id="card1" className="flex flex-col md:flex-row md:max-w-7xl mx-auto my-8 shadow-lg rounded-lg">
            <img
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg4BwpPKXPlxwQfA8znuMHRD5bliWd8PplBNjx59lc5HPgzl2h-RJHmlP02lF8mMqY7AebrD1TWjEjTfu20Cp1jZRW7Qr6mhX5NNtwedjbaxwOnDG0U7ksNo8bVJhZEswlhvx-Hk-FND2c/s640/1B6B30D0-FE8B-48D9-A031-CC6DA3691A58.jpeg"
                className="my-4 md:ml-6 w-full h-64 md:h-80 object-cover rounded-lg"
                alt="logo"
            />
            <div className="bg-light-grayish-blue px-12 py-8 h-auto rounded-b-lg md:rounded-b-none md:rounded-r-lg flex flex-col justify-center">
                <h3 className='text-xl font-bold mb-6 text-dark-grayish-blue text-center'>
                    Indu Sah Foundation's Humanitarian Effort Continues...

                </h3>
                <p className="text-grayish-blue font-medium text-base text-center mb-6">
                    Indu Sah Foundation is one of the leading humanitarian organizations in Nepal, which empathizes with the people living under the poverty line. ISF is always focused on its mission to uplift the lives of the underserved communities in Nepal. ISF is currently taking care of families in Mahottari...
                </p>
                <div id="share-container" className="flex flex-col items-center">
                    <div className='flex flex-row items-center mb-6'>
                        <img className="w-12 h-12 rounded-full mr-6" src="ISF.png" alt="author" />
                        <div className="flex flex-col">
                            <h4 className="text-base font-semibold text-dark-grayish-blue">Dr. Vijay Sah</h4>
                            <h5 className="text-sm font-medium text-desaturated-dark-blue">February 06, 2022</h5>
                        </div>
                    </div>
                    <div id="share-icon" className='flex flex-row justify-center text-light-grayish-blue space-x-4'>
                        <button><FaFacebookSquare className='text-2xl' /></button>
                        <button><FaTwitter className='text-2xl' /></button>
                        <button><FaPinterest className='text-2xl' /></button>
                        <Link to="/ISFHumanitarian"><button className='bg-black text-white border-black hover:shadow-xl'>Show more</button></Link>
                    </div>
                </div>
            </div>
        </div>)
}

export default ISFHumani