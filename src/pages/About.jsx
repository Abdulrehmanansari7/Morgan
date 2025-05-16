import React from "react";
import aboutImg from "../assets/bg-image.jpg";
import still from "../assets/still-life-1.jpg"
import MyPainting from "../components/MyPainting";
import Footer from "../components/Footer";

function About() {
  return (
    <section>
     <div className="relative h-96">
      <div className="relative w-full h-full">
        <img
          src={aboutImg}
          alt="Background"
          className="w-full h-full object-cover"
          />
        <div className="absolute inset-0 bg-gray-900/20" /> 
      </div>
    
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <h2 className="text-6xl lg:text-8xl text-white font-semibold tracking-wider">About</h2> 
      </div>
    </div>
    <div className='mt-20  lg:flex justify-between  lg:space-x-10 max-sm:mx-12 sm:mx-12 lg:mx-16'>
      <div className='flex-col lg:w-1/2 '>
        <h1 className='text-4xl font-semibold tracking-wider'>A Few Words About Me</h1>
        <p className='pt-10 text-neutral-500 mb-8 leading-normal text-96 lg:text-xl'>There are always situations that call for more than just a photograph. Have your portrait painted by a really experienced fine artist who can literally paint anything you can dream up! A portrait is a representation of a particular person. Such paintings have always been more than just a record. They have been used to show the power, importance, virtue, beauty, wealth, taste, learning or other important qualities that characterize the sitter. It is one of the best ways to depict a person and show his/her character. I am always ready to meet all your wishes and preferences in your portrait, whether it’s created as a personal painting or a piece of art for an official person. Contact me today to discuss your future portrait.F</p>
       <a className=' border border-orange-300 rounded-full text-orange-300 px-3 py-1 text-2xl hover:text-neutral-900 hover:bg-yellow-500/70 transition duration-400' href="#">Learn More</a>
      </div>
    <div className='lg:w-1/2 sm:pt-8 max-sm:pt-8'>
      <img className='rounded-xl shadow-lg shadow-black flex-shrink-0 h-[90%] md:min-w-[500px]' src={still} alt="" />
    </div>
    </div>
    <MyPainting/>
    <Footer/>
    </section>
  );
}

export default About;
