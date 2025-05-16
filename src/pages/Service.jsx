import React from 'react'
import aboutImg from '../assets/bg-image.jpg'
import service from '../assets/services-1.jpg'
import portrait2 from '../assets/portrait-2.jpg'
import portrait3 from '../assets/portrait-3.jpg'
import portrait4 from '../assets/portrait-4.jpg'
import portrait5 from '../assets/portrait-5.jpg'
import MyPainting from '../components/MyPainting'
import Footer from '../components/Footer'

function Service() {
  return (
    <div>
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
                <h2 className="text-6xl lg:text-8xl text-white font-semibold tracking-wider">Service</h2> 
            </div>
        </div>
          <div className='mt-20  lg:flex justify-between lg:space-x-10 max-sm:mx-12 sm:mx-12 lg:mx-16'>
             <div className='lg:w-1/2 sm:pt-8 max-sm:pt-8'>
             <img className='rounded-xl shadow-lg shadow-black flex-shrink-0 h-[90%] md:min-w-[500px]' src={service} alt="" />
             </div>
             <div className='flex-col lg:w-1/2 md:pl-8 max-lg:pt-8 max-md:pt-8 max-sm:pt-8'>
               <h1 className='text-4xl font-semibold tracking-wider'>A Few Words About Me</h1>
               <p className='pt-10 text-neutral-500 mb-8 leading-normal text-96 lg:text-xl'>There are always situations that call for more than just a photograph. Have your portrait painted by a really experienced fine artist who can literally paint anything you can dream up! A portrait is a representation of a particular person. Such paintings have always been more than just a record. They have been used to show the power, importance, virtue, beauty, wealth, taste, learning or other important qualities that characterize the sitter. It is one of the best ways to depict a person and show his/her character.</p>
              <a className=' border border-orange-300 rounded-full text-orange-300 px-3 py-1 text-2xl hover:text-neutral-900 hover:bg-yellow-500/70 transition duration-400' href="#">Learn More</a>
             </div>
           </div>
           <div className='lg:flex pt-12 max-md:pt-12 max-sm:pt-12 gap-8 mx-12'>
                <div className='h-screen'>
                    <img src={portrait2} alt="" className='h-[90%] rounded-lg shadow-xl shadow-black' />
                </div>
                <div>
                    <img src={portrait3} alt="" className='w-[100%] rounded-lg shadow-xl shadow-black'/>
                    <div className='pt-10 flex flex-col items-end'>
                    <h2 className='text-orange-300 text-4xl'>Oil on Canvas of a Little Girl</h2>
                    <p className='text-neutral-400 pt-2 text-xl'>The portrait was created in 2015 for my brother's daughter, Emily Morgan.</p>
                    </div>
                </div>
           </div>
           <div className='lg:flex pt-12 max-md:pt-12 max-sm:pt-12 gap-8 mx-12'>
                 <div>
                    <img src={portrait4} alt="" className='w-[100%] rounded-lg shadow-xl shadow-black'/>
                    <div className='pt-10 flex flex-col items-start'>
                    <h2 className='text-orange-300 text-4xl'>Watercolor Portrait</h2>
                    <p className='text-neutral-400 pt-4 text-xl'>Jane Williams, my friend and colleague, asked me to paint her portrait and this is what I did.</p>
                    </div>
                </div>               
                <div className='h-screen'>
                    <img src={portrait5} alt="" className='h-[90%] rounded-lg shadow-xl shadow-black' />
                </div>
           </div>
           <MyPainting/>
           <Footer/>
    </div>
  )
}

export default Service