import logo from '../assets/images/20190225_150947.jpg';
import { FaFacebookSquare, FaTwitter, FaPinterest } from "react-icons/fa";
import { Link } from 'react-router-dom';
import ISFRobotics from './Projects/ISFRobotics';
import ISFEdc from './Projects/ISFEdc';
import ISFHumani from './Projects/ISFHumani';
import ISFSmile from './Projects/ISFSmile';
import ISFCovid from './Projects/ISFCovid';
import React, { forwardRef } from 'react';


// import { FaShare } from "react-icons/fa";


let date = ('28 Jun, 2020')


const Article = forwardRef((props, ref) => {
    return (
        <div ref={ref}>
            <ISFRobotics/>
            <ISFEdc />
            <ISFHumani/>
            <ISFSmile/>
            <ISFCovid/>


        </div>




    );
});

export default Article


//Navbar smaller, waterproject 
//