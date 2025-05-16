import {React, useState} from 'react'
import { Menu, X } from 'lucide-react'
import logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom'
 
const navItems = [
  { name: "Home", path: "/" },
  { name: "About us", path: "/about" },
  { name: "Services", path: "/service" },
  { name: "Contact us", path: "/contact" },]
function Navbar() {

  const [mobileDrawer, setMobileDrawer] = useState(false)
  
  const toggleNavbar = () => {
    setMobileDrawer(!mobileDrawer)
  }

  return (
    <nav className='sticky top-0 z-20 bg-neutral-100'>
      <div className='flex justify-between items-center'>
        <div>
        <img className='py-8 lg:ml-28' src={logo} alt="logo" />
        </div>
        <div>
          <ul className='hidden lg:flex justify-between'>
            {navItems.map((item) => (
              <li key={item.name} className='px-3  uppercase text-md mr-14 mt-1'>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `cursor-pointer transition duration-200 hover:text-orange-300 ${
                      isActive
                        ? 'text-orange-300 font-semibold'
                        : 'text-neutral-500'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
          </div>
          <div className='lg:hidden md:flex'>
            <button className='border p-1  border-neutral-300 mr-8 text-neutral-500' onClick={toggleNavbar}>
                {mobileDrawer ? <X/> : <Menu/>}
            </button>
          </div>
      </div>
      {mobileDrawer &&
      <div className='fixed flex flex-col  w-full lg:hidden bg-neutral-100  justify-center items-center'>
         <ul>
            {navItems.map((item) => (
              <li key={item.name} className='mt-2 mb-2'>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `cursor-pointer transition duration-200 ${
                      isActive
                        ? 'text-orange-300 font-semibold'
                        : 'text-neutral-500 hover:text-orange-300'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
          </div>
      }
    </nav>
  )
}

export default Navbar