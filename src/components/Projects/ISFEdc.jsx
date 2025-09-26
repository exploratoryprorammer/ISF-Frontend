import React from 'react'
import { FaFacebookSquare, FaTwitter, FaPinterest } from "react-icons/fa";
import { Link } from 'react-router-dom';

const ISFEdc = () => {
    return (
        <div id="card1" className="flex flex-col md:flex-row md:max-w-7xl mx-auto my-8 shadow-lg rounded-lg">
            <img
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhwy1BZIi2HHbqRkh4twNynEdhka29FpPQAjFBZJKV3GyBZRBurNETOK0Vjgg9ImXr1ieaKHkfDatWrz-cf8dGmdjub-BWCRWbjanV2-jNe9-buaET7KEDjDsWSuxpAnbTjBTqXi_64ngGcMcrsHbYe6wz_TfxwuYfnCqLfIytRD4V35wFmjNalzktk/w400-h225/333669764_1614262365706146_8664098070956806414_n.jpg"
                className="mt-4 md:ml-6 w-full h-64 md:h-80 object-cover rounded-lg"
                alt="logo"
            />
            <div className="bg-light-grayish-blue px-12 py-8 h-auto rounded-b-lg md:rounded-b-none md:rounded-r-lg flex flex-col justify-center">
                <h3 className='text-xl font-bold mb-6 text-dark-grayish-blue text-center'>
                    ISF Education: Child Abuse Prevention Awareness in Rajbiraj, Nepal

                </h3>
                <p className="text-grayish-blue font-medium text-base text-center mb-6">
                    Child abuse has been one of the prime issues in Nepal. 8 out of 10 children are suffering from different types of abuse, which needs to be addressed. If children are not safe, how a nation will succeed...                    </p>
                <div id="share-container" className="flex flex-col items-center">
                    <div className='flex flex-row items-center mb-6'>
                        <img className="w-12 h-12 rounded-full mr-6" src="ISF.png" alt="author" />
                        <div className="flex flex-col">
                            <h4 className="text-base font-semibold text-dark-grayish-blue">Dr. Vijay Sah</h4>
                            <h5 className="text-sm font-medium text-desaturated-dark-blue">March 02, 2023</h5>
                        </div>
                    </div>
                    <div id="share-icon" className='flex flex-row justify-center text-light-grayish-blue space-x-4'>
                        <button><FaFacebookSquare className='text-2xl' /></button>
                        <button><FaTwitter className='text-2xl' /></button>
                        <button><FaPinterest className='text-2xl' /></button>
                        <Link to="/ISFED"><button className='bg-black text-white border-black hover:shadow-xl'>Show more</button></Link>
                    </div>
                </div>
            </div>
        </div>)
}

export default ISFEdc