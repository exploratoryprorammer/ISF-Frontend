import React from 'react'
import { FaFacebookSquare, FaTwitter, FaPinterest } from "react-icons/fa";
import { Link } from 'react-router-dom';



const ISFRobotics = () => {
  return (
    <div id="card1" className="flex flex-col md:flex-row md:max-w-7xl mx-auto my-8 shadow-lg rounded-lg">
                <img
                    src="https://www.firstinspires.org/sites/default/files/open-graph-first-logo.png"
                    className="mt-4 md:ml-6 w-full h-64 md:h-80 object-cover rounded-lg"
                    alt="logo"
                />
                <div className="bg-light-grayish-blue px-12 py-8 h-auto rounded-b-lg md:rounded-b-none md:rounded-r-lg flex flex-col justify-center">
                    <h3 className='text-xl font-bold mb-6 text-dark-grayish-blue text-center'>
                        ISF Robotics

                    </h3>
                    <p className="text-grayish-blue font-medium text-base text-center mb-6">
                        What is ISF Robotics? Potential Robotics Project ISF Robotics is the current project to provide underprivileged children in impoverished areas of Nepal with education in the form of robotics to ignite their curiosity, creativity, and potential for brighter futures for themselves and those around them...                    </p>
                    <div id="share-container" className="flex flex-col items-center">
                        <div className='flex flex-row items-center mb-6'>
                            <img className="w-12 h-12 rounded-full mr-6" src="ISF.png" alt="author" />
                            <div className="flex flex-col">
                                <h4 className="text-base font-semibold text-dark-grayish-blue">Shubham Sah</h4>
                                <h5 className="text-sm font-medium text-desaturated-dark-blue">28 Jun, 2020</h5>
                            </div>
                        </div>
                        <div id="share-icon" className='flex flex-row justify-center text-light-grayish-blue space-x-4'>
                            <button><FaFacebookSquare className='text-2xl' /></button>
                            <button><FaTwitter className='text-2xl' /></button>
                            <button><FaPinterest className='text-2xl' /></button>
                            <Link to="/ISFrobotics"><button className='bg-black text-white border-black hover:shadow-xl'>Show more</button></Link>
                        </div>
                    </div>
                </div>
            </div>
  )
}

export default ISFRobotics