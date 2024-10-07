import saulltechimg from './assets/Mail.svg'
import saulltechphone from './assets/Phone call.svg'
import saulltechmenu from './assets/menu.svg'
import saulltechclose from './assets/Close_MD.svg'
import saulltechprofile from './assets/profile.svg'
import Flag from 'react-world-flags';
import { useState } from 'react'


function Nav() {

  const [navmonitor, Setnavmonitor] = useState('')
  const [navmonitor2, Setnavmonitor2] = useState('hidden')
  

  const togglenav = () => {
     if(navmonitor === ''){
      Setnavmonitor('bg-[#003333]')
      Setnavmonitor2('block')

     }else{
      Setnavmonitor('')
      Setnavmonitor2('hidden')
     }
  }

  return (
    <div className="landing">
    <main className="h-screen bg-center bg-cover w-[100%] bg-[url('https://agentplus-s3.s3.eu-west-2.amazonaws.com/discover-agentplus/slides/2023/10/25/696c44fa-082c-414c-9222-a211b2f6bc83.jpg')]">
      <nav className={ `flex justify-between px-[5%] sm:px-[3%] py-[2rem] items-center bg sm:py-[1rem] ${navmonitor}`}>
        <img  className="w-[50%] sm:w-[30%] h-[50%]" src='https://agentplus-s3.s3.eu-west-2.amazonaws.com/discover-agentplus/logos/2022/08/17/34f7a0a9-8d33-4345-93ff-699c5611dfa4.png' alt="" />

        <div className='flex items-center justify-center w-[35%]'>
          <a className='w-fit' href=""> <img className='w-[70%] sm:w-[55%] opacity-70' src={saulltechimg} alt="" /> </a>
          <a href=""> <img className='w-[70%] sm:w-[55%] opacity-70' src={saulltechphone} alt="" /> </a>
         <img onClick={togglenav} className='opacity-70 w-[30%] sm:w-[15%]' src={ navmonitor === '' ? saulltechmenu : saulltechclose} alt="" />
        </div>
      </nav>

      <div className={`bg-[#003333] text-white absolute w-[100%] px-[5%] text-lg  ${navmonitor2}`}>
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


      <div className='text-white text-center mt-[8rem]'>
      <h1 className='border-b-[1px] py-6 md:w-[50rem] mx-[auto]  text-[1.4rem]  tracking-wider md:text-[4rem] md:font-thin md:mt-[12rem] '>Helping you Sell your Home since 1999</h1>

        <div className=" mx-[10%] grid grid-cols-1 gap-[2rem] md:grid-cols-2 xl:grid-cols-4 gap-x-4 gap-y-7  items-center lg:items-start md:mx-[20%] md:max-w-[50rem] pt-[1rem] lg:mx-auto">
        <a className='bg-[#aa3939] w-full whitespace-nowrap text-sm lg:text-base text-center tracking-wide font-bold uppercase rounded-lg block transition-all py-3 cta lg:px-6' href="">FOR SALE</a>
        <a className='bg-[#aa3939] w-full whitespace-nowrap text-sm lg:text-base text-center tracking-wide font-bold uppercase rounded-lg block transition-all py-3 cta lg:px-6 ' href="">FOR RENT</a>
        <a className='bg-[#aa3939] w-full whitespace-nowrap text-sm lg:text-base text-center tracking-wide font-bold uppercase rounded-lg block transition-all py-3 cta lg:px-6 ' href="">VALUATION</a>
        <a className='bg-[#aa3939] w-full whitespace-nowrap text-sm lg:text-base text-center tracking-wide font-bold uppercase rounded-lg block transition-all py-3 cta lg:px-6 ' href="">CONTACT US</a>

        </div>
      </div>
    </main>
    <div className='bg-black h-screen'>
      
    </div>
    </div>
  )
}

export default Nav