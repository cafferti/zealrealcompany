
import saulltechmenu from './assets/menu.svg'
import saulltechclose from './assets/Close_MD.svg'
import saulltechprofile from './assets/profile.svg'
import Flag from 'react-world-flags';
import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';


function Nav() {

  const [navmonitor2, Setnavmonitor2] = useState('hidden')
  const [showNavOnScroll, setShowNavOnScroll] = useState(false);

  const togglenav = () => {
    if (navmonitor2 === 'hidden') {

      Setnavmonitor2('block')

    } else {

      Setnavmonitor2('hidden')
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowNavOnScroll(true); // Show the nav when scrolling
      } else {
        setShowNavOnScroll(false); // Hide it when back at the top
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <main className={`${showNavOnScroll ? 'fixed top-0 w-full z-50 visiblenav' : 'hiddennav absolute'} tarsition-all`}>
      <nav className={` flex justify-between px-[5%] py-[0.2rem] items-center bg bg-[#003333]`}>
        <img className="w-[50%] sm:w-[40%] md:w-[15%]  h-[50%]" src='https://agentplus-s3.s3.eu-west-2.amazonaws.com/discover-agentplus/logos/2022/08/17/34f7a0a9-8d33-4345-93ff-699c5611dfa4.png' alt="" />

        <div className=' text-white w- text-[10px] transition-all  justify-between mt-2 hidden md:flex w-[60%]'>
          <NavLink to='/buy?' className='block  opacity-90'>Buy</NavLink>
          <NavLink to='/rent?' className='block opacity-90'>Rent</NavLink>
          <NavLink to='/newbuilds?' className=' block  opacity-90'>New Builds </NavLink>
          <NavLink to='/valuation?' className='block opacity-90'>Valuation</NavLink>
          <NavLink to='/about?' className='block  opacity-90'>About</NavLink>
          <NavLink to='/news?' className='block opacity-90'>News</NavLink>
          <NavLink to='/contacts?' className='block opacity-90'>Contact </NavLink>
          <div className='w-[2rem] rounded-[50%] opacity-90 '>
            <Flag className=' w-[100%] rounded-[10rem]' code="NG" height="50" width="50" />
          </div>
          <div className='flex items-center gap-3 opacity-90'>
            <img src={saulltechprofile} alt="" />
            <p className='font-bold'>Sign-in / Register</p>
          </div>
        </div>


        <img onClick={togglenav} className='opacity-70 w-[10%] md:hidden ' src={navmonitor2 === 'hidden' ? saulltechmenu : saulltechclose} alt="" />
      </nav>

      <div className={`bg-[#003333] text-white absolute w-[100%] px-[5%] text-lg md:hidden  ${navmonitor2} `}>
        <NavLink to='/buy?' className='block py-2 opacity-70'>Buy</NavLink>
        <NavLink to='/rent?' className='block py-2  opacity-70'>Rent</NavLink>
        <NavLink to='/newbuilds?' className=' block py-2 opacity-70'>New Builds </NavLink>
        <NavLink to='/valuation?' className='block py-2 opacity-70'>Valuation</NavLink>
        <NavLink to='/about?' className='block py-2 opacity-70'>About</NavLink>
        <NavLink to='/news?' className='block py-2 opacity-70' >News</NavLink>
        <NavLink to='/contact?' className='block py-2 opacity-70'>Contact </NavLink>
        <div className='w-[4rem] rounded-[50%] opacity-90 pt-[1rem]'>
          <Flag className=' w-[100%] rounded-[10rem]' code="NG" height="50" width="50" />
        </div>
        <div className='flex items-center gap-3 py-[1rem] opacity-80'>
          <img src={saulltechprofile} alt="" />
          <p>Sign-in / Register</p>
        </div>

      </div>
    </main>
  )
}

export default Nav