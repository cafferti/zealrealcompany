import saulltechimg from './assets/Mail.svg'
import saulltechphone from './assets/Phone call.svg'
import saulltechmenu from './assets/menu.svg'
import saulltechclose from './assets/Close_MD.svg'
import saulltechprofile from './assets/profile.svg'
import Flag from 'react-world-flags';
import { useState } from 'react'
import saulltecharrow from './assets/Arrow 1.svg'


function Nav() {

  const [navmonitor, Setnavmonitor] = useState('')
  const [navmonitor2, Setnavmonitor2] = useState('hidden')


  const togglenav = () => {
    if (navmonitor === '') {
      Setnavmonitor('bg-[#003333]')
      Setnavmonitor2('block')

    } else {
      Setnavmonitor('')
      Setnavmonitor2('hidden')
    }
  }

  return (
    <div className="landing">
      <main className=" sm:h-fit h-screen pb-[15%] bg-center bg-cover w-[100%] bg-[url('https://agentplus-s3.s3.eu-west-2.amazonaws.com/discover-agentplus/slides/2023/10/25/696c44fa-082c-414c-9222-a211b2f6bc83.jpg')]">
        <nav className={`flex justify-between px-[5%] sm:px-[3%] sm:pr-0  py-[2rem] items-center bg sm:py-[1rem] md:pt-0 md:pr-[5%] ${navmonitor}`}>
          <img className="w-[50%] sm:w-[30%] lg:w-[15%] h-[50%] md:w-[15%] md:pt-1" src='https://agentplus-s3.s3.eu-west-2.amazonaws.com/discover-agentplus/logos/2022/08/17/34f7a0a9-8d33-4345-93ff-699c5611dfa4.png' alt="" />


          <div className='  w-[35%]  md:w-[60%]  transition-all '>
            <div className='flex items-center justify-end md:border-b md:py-1'>
              <a className='w-fit md:flex items-center md:mr-[]' href=""> <img className='md:w-[12%] text-white w-[70%] sm:w-[55%] opacity-70' src={saulltechimg} alt="" /> <p className='text-white px-1 hidden md:block text-[60%] opacity-80' >selveencompanyltd@gmail.com</p> </a>
              <a className='md:flex items-center justify-end' href=""> <img className=' w-[70%] sm:w-[55%] md:w-[12%] opacity-70' src={saulltechphone} alt="" /> <p className="text-white px-1 hidden md:block text-[60%] opacity-80">08144926731</p> </a>
              <img onClick={togglenav} className='opacity-70 w-[30%] sm:w-[15%] md:hidden' src={navmonitor === '' ? saulltechmenu : saulltechclose} alt="" />
            </div>


            <div className=' text-white w-[100%] text-[10px]  justify-between mt-2 hidden md:flex '>
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
          </div>
        </nav>

        <div className={`bg-[#003333] text-white absolute w-[100%] px-[5%] text-lg md:hidden  ${navmonitor2}`}>
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


        <div className='text-white text-center mt-[20%] sm:mt-[8%]'>
          <h1 className='border-b-[1px] py-6 md:w-[30rem] mx-[auto]  text-[1.4rem]  tracking-wider md:text-[2rem] md:font-thin md:mt-[] '>Helping you Sell your Home since 1999</h1>

          <div className=" mx-[10%] grid grid-cols-1 gap-[2rem] sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-4 gap-x-4 gap-y-7  items-center md:items-start md:max-w-[50rem] pt-[1rem] md:mx-auto">
            <a className='bg-[#aa3939] w-full whitespace-nowrap text-sm md:text-base text-center tracking-wide font-bold uppercase rounded-lg block transition-all py-3 cta md:px-6' href="">FOR SALE</a>
            <a className='bg-[#aa3939] w-full whitespace-nowrap text-sm md:text-base text-center tracking-wide font-bold uppercase rounded-lg block transition-all py-3 cta md:px-6 ' href="">FOR RENT</a>
            <a className='bg-[#aa3939] w-full whitespace-nowrap text-sm md:text-base text-center tracking-wide font-bold uppercase rounded-lg block transition-all py-3 cta md:px-6 ' href="">VALUATION</a>
            <a className='bg-[#aa3939] w-full whitespace-nowrap text-sm md:text-base text-center tracking-wide font-bold uppercase rounded-lg block transition-all py-3 cta md:px-6 ' href="">CONTACT US</a>

          </div>
        </div>
      </main>
      <div className=' text-center px-[5%] bg-[#f3f4f4] pb-[7rem]'>
        <img className='w-[50%] inline-block my-[2.5rem] sm:w-[25%]' src='https://agentplus-s3.s3.eu-west-2.amazonaws.com/discover-agentplus/properties/2022/08/17/039efcbf-77da-4b43-8b46-9965b02f9ab5.png' alt="" />
        <h1 className='text-[1.4rem] mb-5 opacity-80' >Your Selling and Buying Expert</h1>

        <p className='text-lg tracking-tight leading-normal opacity-85 md:px-[8rem] md:text-2xl '>Our main aim is to make moving easy! <br />
          Whether you’re a young couple moving into your first home, an expanding 
          family looking to sell your starter home for something roomier, a landlord with
           high hopes for your buy-to-let property, or a tenant looking for a top-notch
            temporary home - we can help you.
        </p>
        <button className='flex items-center mx-auto bg-[#226666] text-white px-6 py-3  text-center mt-10  rounded-lg opacity-90 '>READ MORE
          <img className='pl-2' src={saulltecharrow} alt="" />
        </button>
      </div>
    </div>
  )
}

export default Nav