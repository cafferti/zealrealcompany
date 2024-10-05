import saulltechimg from './assets/Mail.svg'
import saulltechphone from './assets/Phone call.svg'
import saulltechmenu from './assets/menu.svg'
import saulltechclose from './assets/Close_MD.svg'
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
    <main className="h-screen bg-center bg-cover w-[100%] bg-[url('https://agentplus-s3.s3.eu-west-2.amazonaws.com/discover-agentplus/slides/2023/10/25/696c44fa-082c-414c-9222-a211b2f6bc83.jpg')]">
      <nav className={ `flex justify-between px-[5%] py-[2rem] items-center bg ${navmonitor}`}>
        <img  className="w-[50%] h-[50%]" src='https://agentplus-s3.s3.eu-west-2.amazonaws.com/discover-agentplus/logos/2022/08/17/34f7a0a9-8d33-4345-93ff-699c5611dfa4.png' alt="" />

        <div className='flex items-center'>
          <a href=""> <img className='w-[70%] opacity-70' src={saulltechimg} alt="" /> </a>
          <a href=""> <img className='w-[70%] opacity-70' src={saulltechphone} alt="" /> </a>
         <img onClick={togglenav} className='opacity-70' src={ navmonitor === '' ? saulltechmenu : saulltechclose} alt="" />
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
        </div>


      <div className='text-white text-center mt-[8rem]'>
        <h1 className='border-b-2 py-6  text-[1.7rem]'>Helping you Sell your Home since <br /> 1999</h1>
        <a className='bg-[#aa3939] text-[1rem] mt-7 inline-block w-[80%] py-[1rem] my-0 rounded-lg' href="">FOR SALE</a>
        <a className='bg-[#aa3939] text-[1rem] mt-4 inline-block w-[80%] py-[1rem]  rounded-lg' href="">FOR RENT</a>
        <a className='bg-[#aa3939] text-[1rem] mt-4 inline-block w-[80%] py-[1rem]  rounded-lg' href="">VALUATION</a>
        <a className='bg-[#aa3939] text-[1rem] mt-4 inline-block w-[80%] py-[1rem]  rounded-lg' href="">CONTACT US</a>

      </div>
    </main>
  )
}

export default Nav