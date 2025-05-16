import React from 'react'
import project1 from '../assets/project-1.jpg'
import project2 from '../assets/project-2.jpg'
import project3 from '../assets/project-3.jpg'
import project4 from '../assets/project-4.jpg'
import project5 from '../assets/project-5.jpg'
import project6 from '../assets/project-6.jpg'


function MyPainting() {
  return (
    <div className='mt-20'>
        <h1 className='text-3xl lg:text-4xl text-neutral-600 text-center py-10 font-semibold tracking-wider'>My Paintings</h1>
        <div className='flex flex-wrap max-sm:mx-8 max-lg:mx-20 lg:mx-20 gap-x-12 gap-y-12'>
            <div className=' sm:w-[100%] lg:w-[45%] xl:w-[30%]'>
            <div className='shadow-2xl shadow-black/50 rounded-xl overflow-hidden'> 
                <img src={project1} alt="" className='h-[72vh] w-full object-cover' />
                <div className='bg-white py-8 px-6'>
                <h2 className='text-orange-300/70 text-3xl'>Sea Storm</h2>
                <p className='text-neutral-400 pt-1 text-xl'>This painting is one of my latest works on sea and ocean topics.</p>
                </div>
            </div>
            </div>
           <div className='sm:w-[100%] lg:w-[45%] xl:w-[30%]'>
            <div className='shadow-2xl shadow-black/50 rounded-xl overflow-hidden'>
                <img src={project2} alt="" className='h-[72vh] w-full object-cover'/>
                <div className='bg-white py-8 px-6'>
                    <h2 className='text-orange-300/70 text-3xl'>Ruins of ancient Fortress</h2>
                    <p className='text-neutral-400 pt-1 text-xl'>When I’ve been to Scotland, I made this painting just in a day.</p>
                </div>
            </div>
           </div>
           <div className='sm:w-[100%] lg:w-[45%] xl:w-[30%]'>
            <div className='shadow-2xl shadow-black/50 rounded-xl overflow-hidden'>
                <img src={project3} alt="" className='h-[72vh] w-full object-cover'/>
                <div className='bg-white py-5 px-6'>
                    <h2 className='text-orange-300/70 text-3xl'>Two Lovers</h2>
                    <p className='text-neutral-400 pt-1 text-xl'>This work was finished in two days for my customers from San Diego, CA, who needed something special.</p>
                </div>
            </div>
           </div>
           <div className='sm:w-[100%] lg:w-[45%] xl:w-[30%]'>
            <div className='shadow-2xl shadow-black/50 rounded-xl overflow-hidden'>
                <img src={project4} alt="" className='h-[72vh]  w-full object-cover'/>
                <div className='bg-white py-5 px-6'>
                    <h2 className='text-orange-300/70 text-3xl'>Watercolor Portrait</h2>
                    <p className='text-neutral-400 pt-1 text-xl'>Jane Williams, my friend and colleague, asked me to paint her portrait and this is what I did.</p>
                </div>
            </div>
           </div>
           <div className='sm:w-[100%] lg:w-[45%] xl:w-[30%]'>
            <div className='shadow-2xl shadow-black/50 rounded-xl overflow-hidden'>
                <img src={project5} alt="" className='h-[72vh] w-full object-cover'/>
                <div className='bg-white py-8 px-6'>
                    <h2 className='text-orange-300/70 text-3xl'>Birches in Autumn</h2>
                    <p className='text-neutral-400 pt-1 text-xl'>I love painting autumn trees and this work is a perfect example.</p>
                </div>
            </div>
           </div>
           <div className='sm:w-[100%] lg:w-[45%] xl:w-[30%]'>
            <div className='shadow-2xl shadow-black/50 rounded-xl overflow-hidden'>
                <img src={project6} alt="" className='h-[72vh] w-full object-cover'/>
                <div className='bg-white py-5 px-6'>
                    <h2 className='text-orange-300/70 text-3xl'>Green Landscape</h2>
                    <p className='text-neutral-400 pt-1 text-xl'>Another abstract work, which appeared at my last year’s exhibition, Morgan Paintings 2016.</p>
                </div>
            </div>
           </div>
            
           
        </div>
    </div>
  )
}

export default MyPainting