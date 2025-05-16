import React from 'react'
import bg from '../assets/bg.jpg'
import brand from '../assets/brand-inverse.png'
import home from '../assets/home.jpg'
import MyPainting from '../components/MyPainting'
import house from '../assets/house.png'
import leaf from '../assets/leaf.png'
import apple from '../assets/apple-logo.png'
import user from '../assets/user.png'
import Footer from '../components/Footer.jsx'

function Home() {
  return (
  <div>
    <section className="relative h-screen">
    <div className="absolute inset-0">
      <img
        src={bg}
        alt="Background"
        className="w-full h-full object-cover"
        />
      <div className="absolute inset-0 bg-gray-900/40" /> 
    </div>

    <div className="relative z-10 flex items-center justify-center h-full text-white">
      <img className='lg:w-2/4' src={brand} alt="" />
    </div>
  </section>
<div className='mt-20  lg:flex justify-between items-center  lg:space-x-10 sm:mx-12 lg:mx-16'>
  <div className='flex-col lg:w-1/2 '>
    <h1 className='text-4xl font-semibold tracking-wider'>A Few Words About Me</h1>
    <p className='pt-10 text-neutral-500 mb-8 leading-normal text-xl'>My name is Samantha Morgan, and I have been a fine artist since my youth. I find inspiration from the innovative styles of contemporary and urban art, such as graphic and graffiti illustrations. I strongly believe that art is a global form of communication. It educates visually by either moving you, pleasing you, or even inspiring you.</p>
   <a className=' border border-orange-300 rounded-full text-orange-300 px-3 py-1 text-2xl hover:text-neutral-900 hover:bg-yellow-500/70 transition duration-400' href="#">Learn More</a>
  </div>
<div className='lg:w-1/2 sm:pt-8 max-sm:pt-8 '>
  <img className='rounded-xl shadow-lg shadow-black flex-shrink-0 md:min-w-[500px]' src={home} alt="" />
</div>
</div>
<div>
<MyPainting/>
</div>
<div className='mt-28'>
  <div>
    <h2 className='text-5xl text-center text-neutral-700 tracking-wide font-semibold'>Services</h2>
    <p className='text-center mt-8 text-xl text-neutral-500 tracking-wide'>If you are looking for custom paintings, which will decorate your home or office, consider booking one or several <br/>of
my services listed below. They will add more colors and emotions to your daily life.</p>
  </div>
  <div className="flex flex-wrap justify-center gap-4 mx-8 lg:mx-20 pt-10">
  <div className="w-full sm:w-[48%] lg:w-[23%]">
    <div className="border-2 rounded-md border-orange-400 px-8 py-20 flex flex-col items-center text-center shadow-md shadow-black/75">
      <img className="w-16 h-16 mb-4" src={leaf} alt="leaf" />
      <h2 className="text-2xl font-semibold">Portrait</h2>
    </div>
  </div>
  <div className="w-full sm:w-[48%] lg:w-[23%]">
    <div className="border-2 rounded-md border-orange-400 px-8 py-20 flex flex-col items-center text-center shadow-md shadow-black/75">
      <img className="w-16 h-16 mb-4" src={apple} alt="leaf" />
      <h2 className="text-2xl font-semibold">Portrait</h2>
    </div>
  </div>
  <div className="w-full sm:w-[48%] lg:w-[23%]">
    <div className="border-2 rounded-md border-orange-400 px-8 py-20 flex flex-col items-center text-center shadow-md shadow-black/75">
      <img className="w-16 h-16 mb-4" src={user} alt="leaf" />
      <h2 className="text-2xl font-semibold">Portrait</h2>
    </div>
  </div>
  <div className="w-full sm:w-[48%] lg:w-[23%]">
    <div className="border-2 rounded-md border-orange-400 px-8 py-20 flex flex-col items-center text-center shadow-md shadow-black/75">
      <img className="w-16 h-16 mb-4" src={house} alt="leaf" />
      <h2 className="text-2xl font-semibold">Portrait</h2>
    </div>
  </div>
</div>
<div className='mt-10 flex justify-center'>
  <a href="#" className='border-2 border-orange-300 text-orange-400/90 px-4 py-2 rounded-full text-2xl hover:bg-black'>View All Service</a>
</div>
</div>
<Footer/>
</div>

  )
}

export default Home