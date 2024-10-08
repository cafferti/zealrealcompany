
import saulltechmenu from './assets/menu.svg'
import saulltechclose from './assets/Close_MD.svg'
import saulltechprofile from './assets/profile.svg'
import Flag from 'react-world-flags';
import { useState, useEffect } from 'react'


function Nav() {

    const [navmonitor2, Setnavmonitor2] = useState('hidden')
    const [showNavOnScroll, setShowNavOnScroll] = useState(false);
    
    const togglenav = () => {
       if(navmonitor2 === 'hidden'){
    
        Setnavmonitor2('block')
  
       }else{
        
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
    <main className={`${ showNavOnScroll ? 'fixed top-0 w-full z-50 visiblenav' : 'hiddennav absolute' } tarsition-all`}>
    <nav className={ ` flex justify-between px-[5%] py-[0.2rem] items-center bg bg-[#003333]`}>
        <img  className="w-[50%] sm:w-[40%] md:w-[15%]  h-[50%]" src='https://agentplus-s3.s3.eu-west-2.amazonaws.com/discover-agentplus/logos/2022/08/17/34f7a0a9-8d33-4345-93ff-699c5611dfa4.png' alt="" />

        <div className=' text-white w- text-[10px] transition-all  justify-between mt-2 hidden md:flex w-[60%]'>
              <a className='block  opacity-90' href="">Buy</a>
              <a className='block opacity-90' href="">Rent</a>
              <a className=' block  opacity-90' href="">New Builds </a>
              <a className='block opacity-90' href="">Valuation</a>
              <a className='block  opacity-90' href="">About</a>
              <a className='block opacity-90' href="">News</a>
              <a className='block opacity-90' href="">Contact </a>
              <div className='w-[2rem] rounded-[50%] opacity-90 '>
                <Flag className=' w-[100%] rounded-[10rem]' code="NG" height="50" width="50" />
              </div>
              <div className='flex items-center gap-3 opacity-90'>
                <img src={saulltechprofile} alt="" />
                <p className='font-bold'>Sign-in / Register</p>
              </div>
            </div>


         <img onClick={togglenav} className='opacity-70 w-[10%] md:hidden ' src={ navmonitor2 === 'hidden' ? saulltechmenu : saulltechclose} alt="" />        
      </nav>

      <div className={`bg-[#003333] text-white absolute w-[100%] px-[5%] text-lg md:hidden  ${navmonitor2} `}>
          <a className='block py-2 opacity-70' href="">Buy</a>
          <a className='block py-2  opacity-70' href="">Rent</a>
          <a className=' block py-2 opacity-70' href="">New Builds </a>
          <a className='block py-2 opacity-70' href="">Valuation</a>
          <a className='block py-2 opacity-70' href="">About</a>
          <a className='block py-2 opacity-70' href="">News</a>
          <a className='block py-2 opacity-70' href="">Contact </a>
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