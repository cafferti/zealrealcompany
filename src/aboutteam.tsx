
import saulltechmenu from './assets/menu.svg'
import saulltechclose from './assets/Close_MD.svg'
import saulltechprofile from './assets/profile.svg'
import Flag from 'react-world-flags';
import { useState } from 'react'
import olivia from './assets/WhatsApp Image 2024-10-12 at 1.04.47 PM.jpeg'
import worker1 from './assets/WhatsApp Image 2024-10-12 at 1.06.33 PM.jpeg'
import Worker2 from './assets/WhatsApp Image 2024-10-12 at 1.06.58 PM.jpeg'
import worker3 from './assets/WhatsApp Image 2024-10-12 at 1.07.24 PM.jpeg'
import worker4 from './assets/WhatsApp Image 2024-10-12 at 1.08.06 PM.jpeg'
import { NavLink } from 'react-router-dom'
import saulltechimg from './assets/Mail.svg'
import saulltechphone from './assets/Phone call.svg'

const arrow = '>'

function aboutteam() {

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
        <div>
            <nav className={`flex justify-between px-[5%] sm:px-[3%] sm:pr-0  py-[1rem] items-center bg sm:py-[1rem] md:pt-0 md:pr-[5%] bg-[#003333] ${navmonitor}`}>
                <img className="w-[50%] sm:w-[30%] lg:w-[15%] h-[50%] md:w-[15%] md:pt-1" src='https://agentplus-s3.s3.eu-west-2.amazonaws.com/discover-agentplus/logos/2022/08/17/34f7a0a9-8d33-4345-93ff-699c5611dfa4.png' alt="" />
                {/* <img className="w-[50%] sm:w-[30%] lg:w-[15%] h-[50%] md:w-[15%] md:pt-1 hidden" src={zeallogo} alt="" /> */}



                <div className='  w-[35%]  md:w-[60%]  transition-all '>
                    <div className='flex items-center justify-end md:border-b md:py-1'>
                        <a className='w-fit md:flex items-center md:mr-[]' href="mailto:zealrealestate@gmail.com"> <img className='md:w-[12%] text-white w-[70%] sm:w-[55%] opacity-70' src={saulltechimg} alt="" /> <p className='text-white px-1 hidden md:block text-[60%] opacity-80' >Zealrealestate@gmail.com</p> </a>
                        <a className='md:flex items-center justify-end' href=""> <img className=' w-[70%] sm:w-[55%] md:w-[12%] opacity-70' src={saulltechphone} alt="" /> <p className="text-white px-1 hidden md:block text-[60%] opacity-80">0813812988</p> </a>
                        <img onClick={togglenav} className='opacity-70 w-[30%] sm:w-[15%] md:hidden' src={navmonitor === '' ? saulltechmenu : saulltechclose} alt="" />
                    </div>


                    <div className=' text-white w-[100%] text-[10px]  justify-between mt-2 hidden md:flex '>
                        <NavLink to='/buy?' className='block opacity-90'>Buy</NavLink>

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
                </div>
            </nav>

            <div className={`bg-[#003333] text-white z-10 absolute w-[100%] px-[5%] text-lg md:hidden  ${navmonitor2}`}>
                <NavLink to='/buy?' className='block py-2 opacity-70'>Buy</NavLink>
                <NavLink to='/rent?' className='block py-2  opacity-70'>Rent</NavLink>
                <NavLink to='/newbuilds?' className=' block py-2 opacity-70'>New Builds </NavLink>
                <NavLink to='/valuation?' className='block py-2 opacity-70'>Valuation</NavLink>
                <NavLink to='/about?' className='block py-2 opacity-70'>About</NavLink>
                <NavLink to='/news?' className='block py-2 opacity-70' >News</NavLink>
                <NavLink to='/contacts?' className='block py-2 opacity-70'>Contact </NavLink>
                <div className='w-[4rem] rounded-[50%] opacity-90 pt-[1rem]'>
                    <Flag className=' w-[100%] rounded-[10rem]' code="NG" height="50" width="50" />
                </div>
                <div className='flex items-center gap-3 py-[1rem] opacity-80'>
                    <img src={saulltechprofile} alt="" />
                    <p>Sign-in / Register</p>
                </div>

            </div>



        
        <div className='mx-[5%] md:max-w-[50%]'>
            <h1 className='w-[100%] text-2xl pb-2  border-b py-6 font-forumSerif font-medium'>Meet The Team</h1>
            <div className='flex items-center pt-2'>
                <NavLink className='!text-[#226666]' to='/'>Home  </NavLink>
                <p className='px-2'>{arrow}</p>
                <h2>Meet The Team</h2>
            </div>

            <h1 className='text-xl  mb-3  font-medium'>Management</h1>
            <div className='sm:grid sm:grid-cols-2 sm:gap-4'>
                {/* single card */}
                <div className='text-center shadow-lg py-5 rounded-xl'>
                    <img className='rounded-lg w-[100%] h-[27rem]' src={olivia} alt="" />
                    <h2 className='pt-5 text-lg'>Nebeokike Olivia</h2>
                    <p className='text-[#226666] py-1 pb-5 text-sm font-normal'>CEO</p>
                    <div className='flex justify-center gap-4'>
                        <a href="">
                            <img className='bg-[#226666] p-2 rounded-xl' src={saulltechimg} alt="" />
                        </a>
                        <a href="">
                            <img className='bg-[#226666] p-2 rounded-xl' src={saulltechphone} alt="" />
                        </a>
                    </div>
                </div>
                {/* single card */}
                                {/* single card */}
             <div className='text-center shadow-lg py-5 rounded-xl'>
                    <img className='rounded-lg w-[100%] h-[27rem]' src={worker1} alt="" />
                    <h2 className='pt-5 text-lg'>Nebeokike Olivia</h2>
                    <p className='text-[#226666] py-1 pb-5 text-sm font-normal'>CEO</p>
                    <div className='flex justify-center gap-4'>
                        <a href="">
                            <img className='bg-[#226666] p-2 rounded-xl' src={saulltechimg} alt="" />
                        </a>
                        <a href="">
                            <img className='bg-[#226666] p-2 rounded-xl' src={saulltechphone} alt="" />
                        </a>
                    </div>
                </div>
                {/* single card */}

                {/* single card */}
                <div className='text-center shadow-lg py-5 rounded-xl'>
                    <img className='rounded-lg w-[100%] h-[27rem]' src={worker3} alt="" />
                    <h2 className='pt-5 text-lg'>Nebeokike Olivia</h2>
                    <p className='text-[#226666] py-1 pb-5 text-sm font-normal'>CEO</p>
                    <div className='flex justify-center gap-4'>
                        <a href="">
                            <img className='bg-[#226666] p-2 rounded-xl' src={saulltechimg} alt="" />
                        </a>
                        <a href="">
                            <img className='bg-[#226666] p-2 rounded-xl' src={saulltechphone} alt="" />
                        </a>
                    </div>
                </div>
                {/* single card */}

                {/* single card */}
                <div className='text-center shadow-lg py-5 rounded-xl'>
                    <img className='rounded-lg w-[100%] h-[27rem]' src={worker4} alt="" />
                    <h2 className='pt-5 text-lg'>Nebeokike Olivia</h2>
                    <p className='text-[#226666] py-1 pb-5 text-sm font-normal'>CEO</p>
                    <div className='flex justify-center gap-4'>
                        <a href="">
                            <img className='bg-[#226666] p-2 rounded-xl' src={saulltechimg} alt="" />
                        </a>
                        <a href="">
                            <img className='bg-[#226666] p-2 rounded-xl' src={saulltechphone} alt="" />
                        </a>
                    </div>
                </div>
                {/* single card */}

                {/* single card */}
                <div className='text-center shadow-lg py-5 rounded-xl'>
                    <img className='rounded-lg w-[100%] h-[27rem]' src={Worker2} alt="" />
                    <h2 className='pt-5 text-lg'>Nebeokike Olivia</h2>
                    <p className='text-[#226666] py-1 pb-5 text-sm font-normal'>CEO</p>
                    <div className='flex justify-center gap-4'>
                        <a href="">
                            <img className='bg-[#226666] p-2 rounded-xl' src={saulltechimg} alt="" />
                        </a>
                        <a href="">
                            <img className='bg-[#226666] p-2 rounded-xl' src={saulltechphone} alt="" />
                        </a>
                    </div>
                </div>
                {/* single card */}



            </div>
        </div>
        </div>
    )
}

export default aboutteam