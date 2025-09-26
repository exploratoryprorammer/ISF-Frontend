// import React, { useState } from 'react';
// import { HiMenuAlt3 } from 'react-icons/hi';

// const Navbar = () => {
//   const [nav, setNav] = useState(false);
//   const handleNav = () => {
//     setNav(!nav);
//     if (!nav) {
//       document.body.style.overflow = 'hidden'
//     } else {
//       document.body.style.overflow = 'scroll'
//     }
//   };

//   return (
//     <div className='w-full p-4 fixed top-0 left-0 bg-opacity-0 z-50'>
//     <div className='flex justify-between items-center'>
//       <h1 className='text-black font-bold text-2xl'>INDU SAH FOUNDATION</h1>
//       <nav className='flex'>
//         <ul className='flex space-x-8'>
//           <li className='text-black font-bold text-xl hover:text-gray-400 px-2 py-1 rounded cursor-pointer'>ABOUT US</li>
//           <li className='text-black font-bold text-xl hover:text-gray-400 px-2 py-1 rounded cursor-pointer'>PROJECTS</li>
//           <li className='text-black font-bold text-xl hover:text-gray-400 px-2 py-1 rounded cursor-pointer'>DONATE</li>
//           <li className='text-black font-bold text-xl hover:text-gray-400 px-2 py-1 rounded cursor-pointer'>Leadership</li>
//           <li className='text-balck font-bold text-xl hover:text-gray-400 px-2 py-1 rounded cursor-pointer'>Letter From Founders</li>
//         </ul>
//       </nav>
//     </div>
//   </div>
//     // <div className='absolute w-full flex p-4 justify-between items-center'>
//     //   <h1 className='text-white font-bold text-2xl z-20'>INDU SAH FOUNDATION</h1>
//     //   <nav className='absolute w-full flex justify-around items-center p-4'>
//     //     <ul className='flex space-x-8'>
//     //       <li className='text-white font-bold text-1xl z-20 hover:text-black px-2 py-1 rounded cursor-pointer'>ABOUT US</li>
//     //       <li className='text-white font-bold text-1xl z-20 hover:text-black px-2 py-1 rounded cursor-pointer'>PROJECTS</li>
//     //       <li className='text-white font-bold text-1xl z-20 hover:text-black px-2 py-1 rounded cursor-pointer'>DONATE</li>
//     //       <li className='text-white font-bold text-1xl z-20 hover:text-black px-2 py-1 rounded cursor-pointer'>Leadership</li>

//     //       <li className='text-white font-bold text-1xl z-20 hover:text-black px-2 py-1 rounded cursor-pointer'>Letter From Founders</li>



//     //     </ul>
//     //   </nav>





//     //   {/* <div
//     //     className={
//     //       nav
//     //         ? 'ease-in duration-300 fixed text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex-col z-10'
//     //         : 'absolute top-0 h-screen left-[-100%] ease-in duration-500 z-10'
//     //     }
//     //   >
//     //     <ul className='flex flex-col fixed w-full h-full items-center justify-center'>
//     //       <li className='font-bold text-3xl p-8'>Home</li>
//     //       <li className='font-bold text-3xl p-8'>Destinations</li>
//     //       <li className='font-bold text-3xl p-8'>Reservations</li>
//     //       <li className='font-bold text-3xl p-8'>Amenities</li>
//     //       <li className='font-bold text-3xl p-8'>Rooms</li>
//     //     </ul>
//     //   </div> */}
//     // </div >
//   );
// };

// export default Navbar;



// <div className='w-full p-4 fixed top-0 left-0 bg-opacity-0 z-50'>
//     <div className='flex justify-between items-center'>
//       <h1 className='text-black font-bold text-2xl'>INDU SAH FOUNDATION</h1>
//       <nav className='flex'>
//         <ul className='flex space-x-8'>
//           <li className='text-black font-bold text-xl hover:text-gray-400 px-2 py-1 rounded cursor-pointer'>ABOUT US</li>
//           <li className='text-black font-bold text-xl hover:text-gray-400 px-2 py-1 rounded cursor-pointer'>PROJECTS</li>
//           <li className='text-black font-bold text-xl hover:text-gray-400 px-2 py-1 rounded cursor-pointer'>DONATE</li>
//           <li className='text-black font-bold text-xl hover:text-gray-400 px-2 py-1 rounded cursor-pointer'>Leadership</li>
//           <li className='text-balck font-bold text-xl hover:text-gray-400 px-2 py-1 rounded cursor-pointer'>Letter From Founders</li>
//         </ul>
//       </nav>
//     </div>
//   </div> make nav bar white after scroll
// ChatGPT
// To make your navigation bar change to white after scrolling, you'll need to use a combination of CSS and JavaScript. Here’s a step-by-step guide to achieve this effect:

// Add a new CSS class for the white background:

// Define a new CSS class that applies a white background to the navigation bar. You can add this in your CSS or Tailwind configuration:

// css
// Copy code
// .navbar-scrolled {
//   background-color: white;
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Optional: adds a subtle shadow */
// }
// Update your HTML to include the class dynamically:

// You can use JavaScript to add the navbar-scrolled class to the navigation bar when the page is scrolled. Here’s an updated version of your HTML with a unique ID for the navigation bar:

// html
// Copy code
// <div id="navbar" className='w-full p-4 fixed top-0 left-0 bg-opacity-0 z-50'>
//   <div className='flex justify-between items-center'>
//     <h1 className='text-black font-bold text-2xl'>INDU SAH FOUNDATION</h1>
//     <nav className='flex'>
//       <ul className='flex space-x-8'>
//         <li className='text-black font-bold text-xl hover:text-gray-400 px-2 py-1 rounded cursor-pointer'>ABOUT US</li>
//         <li className='text-black font-bold text-xl hover:text-gray-400 px-2 py-1 rounded cursor-pointer'>PROJECTS</li>
//         <li className='text-black font-bold text-xl hover:text-gray-400 px-2 py-1 rounded cursor-pointer'>DONATE</li>
//         <li className='text-black font-bold text-xl hover:text-gray-400 px-2 py-1 rounded cursor-pointer'>Leadership</li>
//         <li className='text-black font-bold text-xl hover:text-gray-400 px-2 py-1 rounded cursor-pointer'>Letter From Founders</li>
//       </ul>
//     </nav>
//   </div>
// </div>
// Add JavaScript to handle the scroll event:

// Use JavaScript to add the navbar-scrolled class when the user scrolls down the page:

// javascript
// Copy code
// window.addEventListener('scroll', function() {
//   const navbar = document.getElementById('navbar');
//   if (window.scrollY > 50) { // Adjust the scroll value as needed
//     navbar.classList.add('navbar-scrolled');
//   } else {
//     navbar.classList.remove('navbar-scrolled');
//   }
// });
// This JavaScript code listens for the scroll event and adds the navbar-scrolled class to the navigation bar when the scroll position exceeds 50 pixels. You can adjust this value to control when the background change occurs.

// With these changes, your navigation bar should now change to a white background as you scroll down the page.

// tailwind
// ChatGPT
// To achieve a changing background color for your navigation bar after scrolling using Tailwind CSS, you can use a combination of Tailwind classes and JavaScript. Here’s how you can do it:

// Add Tailwind CSS classes for styling:

// First, ensure that you have Tailwind CSS configured in your project. You’ll define a class for the white background that can be toggled via JavaScript.

// Update your HTML structure:

// Add an id or class to your navigation bar element so you can easily target it with JavaScript. For example:

// html
// Copy code
// <div id="navbar" className='w-full p-4 fixed top-0 left-0 bg-opacity-0 z-50 transition-colors duration-300'>
//   <div className='flex justify-between items-center'>
//     <h1 className='text-black font-bold text-2xl'>INDU SAH FOUNDATION</h1>
//     <nav className='flex'>
//       <ul className='flex space-x-8'>
//         <li className='text-black font-bold text-xl hover:text-gray-400 px-2 py-1 rounded cursor-pointer'>ABOUT US</li>
//         <li className='text-black font-bold text-xl hover:text-gray-400 px-2 py-1 rounded cursor-pointer'>PROJECTS</li>
//         <li className='text-black font-bold text-xl hover:text-gray-400 px-2 py-1 rounded cursor-pointer'>DONATE</li>
//         <li className='text-black font-bold text-xl hover:text-gray-400 px-2 py-1 rounded cursor-pointer'>Leadership</li>
//         <li className='text-black font-bold text-xl hover:text-gray-400 px-2 py-1 rounded cursor-pointer'>Letter From Founders</li>
//       </ul>
//     </nav>
//   </div>
// </div>
// Use Tailwind's bg-white class for the white background:

// Define a CSS class to apply the white background and use Tailwind's utility classes:

// html
// Copy code
// <style>
//   .navbar-scrolled {
//     @apply bg-white shadow-md;
//   }
// </style>
// Add JavaScript to toggle the class on scroll:

// Write JavaScript to add or remove the navbar-scrolled class based on the scroll position. Here’s a simple script to achieve that:

// html
// Copy code
// <script>
//   window.addEventListener('scroll', function() {
//     const navbar = document.getElementById('navbar');
//     if (window.scrollY > 50) { // Adjust the scroll value as needed
//       navbar.classList.add('navbar-scrolled');
//     } else {
//       navbar.classList.remove('navbar-scrolled');
//     }
//   });
// </script>
// This script listens for the scroll event and toggles the navbar-scrolled class based on the vertical scroll position.

// Complete Example:
// Here’s how your code will look with these changes:

// html
// Copy code
// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Navbar Scroll Effect</title>
//   <link href="https://cdn.jsdelivr.net/npm/tailwindcss@3.2.4/dist/tailwind.min.css" rel="stylesheet">
//   <style>
//     .navbar-scrolled {
//       @apply bg-white shadow-md;
//     }
//   </style>
// </head>
// <body>

//   <div id="navbar" className='w-full p-4 fixed top-0 left-0 bg-opacity-0 z-50 transition-colors duration-300'>
//     <div className='flex justify-between items-center'>
//       <h1 className='text-black font-bold text-2xl'>INDU SAH FOUNDATION</h1>
//       <nav className='flex'>
//         <ul className='flex space-x-8'>
//           <li className='text-black font-bold text-xl hover:text-gray-400 px-2 py-1 rounded cursor-pointer'>ABOUT US</li>
//           <li className='text-black font-bold text-xl hover:text-gray-400 px-2 py-1 rounded cursor-pointer'>PROJECTS</li>
//           <li className='text-black font-bold text-xl hover:text-gray-400 px-2 py-1 rounded cursor-pointer'>DONATE</li>
//           <li className='text-black font-bold text-xl hover:text-gray-400 px-2 py-1 rounded cursor-pointer'>Leadership</li>
//           <li className='text-black font-bold text-xl hover:text-gray-400 px-2 py-1 rounded cursor-pointer'>Letter From Founders</li>
//         </ul>
//       </nav>
//     </div>
//   </div>

//   <script>
//     window.addEventListener('scroll', function() {
//       const navbar = document.getElementById('navbar');
//       if (window.scrollY > 50) { // Adjust the scroll value as needed
//         navbar.classList.add('navbar-scrolled');
//       } else {
//         navbar.classList.remove('navbar-scrolled');
//       }
//     });
//   </script>

// </body>
// </html>
// This setup will ensure that your navigation bar changes its background color to white with a shadow when you scroll down the page.

// in react js
// ChatGPT
// In a React application, you can achieve the background color change for your navigation bar after scrolling by using React's state management along with JavaScript for scroll events. Here's how you can do it:

// Setup the Component:

// Create a React component for your navigation bar. Use Tailwind CSS classes and handle the scroll event using React hooks.

// Handle Scrolling:

// Use the useState and useEffect hooks to manage and apply the background color class based on the scroll position.

// Example:
// Here’s a complete example of how you can implement this in a React component:

// jsx
// Copy code
import React, { useState, useEffect, useRef } from 'react';
import Hero from './Hero';
import Aboutus from './Aboutus';
import Article from './article';
import Contact from './Contact';
import LFF from './LFF';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const aboutusRef = useRef(null);
  const projectref = useRef(null);
  const LFFref = useRef(null);


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); 
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
    document.body.style.overflow = isNavOpen ? 'scroll' : 'hidden';
  };

  const handleClickAboutUs = () => {
    const offset = 160; 
    const element = aboutusRef.current;
    if (element) {
      const top = element.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const handleClickProjectref = () => {
    const offset = 300; 
    const element = projectref.current;
    if (element) {
      const top = element.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const handleClickLFF = () => {
    const offset = 200; 
    const element = LFFref.current;
    if (element) {
      const top = element.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };


  return (
    <div>
      <div
        className={`w-full h-44 -mb-20 p-4 fixed top-0 left-0 transition-colors duration-300 z-50 ${isScrolled ? 'bg-white shadow-md' : 'bg-opacity-0'}`}
      >
        <div className='flex justify-between items-center'>
          <div className='w-64 -mt-10 h-42 overflow-hidden'>
            <img
              src="isf23.png"
              className='w-full h-full object-cover'
              alt="ISF Logo"
            />
          </div> 
          {/* Mobile menu button */}
          <button onClick={toggleNav} className='img:hidden -mt-16 lg:hidden text-black font-bold text-2xl'>
            {isNavOpen ? '✖' : '☰'}
          </button>
          <nav className={`lg:flex ${isNavOpen ? 'block' : 'hidden'} lg:block -mt-16 `}>
            <ul className={`flex flex-col lg:flex-row lg:space-x-8 space-y-4 lg:space-y-0`}>
              <li className= {`font-mono ${isScrolled ? 'text-black' : 'text-white'} font-bold text-xl hover:text-gray-400 px-2 py-1 rounded cursor-pointer`}>
                <button onClick={handleClickAboutUs}>ABOUT US</button>
              </li>
              <li className={`font-mono ${isScrolled ? 'text-black' : 'text-white'} font-bold text-xl hover:text-gray-400 px-2 py-1 rounded cursor-pointer`}>
                <button onClick={handleClickProjectref}>PROJECTS</button>
              </li>
              <li className={`font-mono ${isScrolled ? 'text-black' : 'text-white'} font-bold text-xl hover:text-gray-400 px-2 py-1 rounded cursor-pointer`}>
                <button>DONATE</button>
              </li>
              <li className={`font-mono ${isScrolled ? 'text-black' : 'text-white'} font-bold text-xl hover:text-gray-400 px-2 py-1 rounded cursor-pointer`}>
                <button>LEADERSHIP</button>
              </li>
              <li className={`font-mono ${isScrolled ? 'text-black' : 'text-white'} font-bold text-xl hover:text-gray-400 px-2 py-1 rounded cursor-pointer`}>
                <button onClick={handleClickLFF}>LETTER FROM FOUNDERS</button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <Hero />
      <Aboutus ref={aboutusRef} />
      <Article ref={projectref}/>
      <Contact />
      <LFF ref={LFFref}/>
    </div>
  );
};

export default Navbar;

