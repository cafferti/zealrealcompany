import saulltechimg from './assets/Mail.svg'
import saulltechphone from './assets/Phone call.svg'
import saulltechmenu from './assets/menu.svg'
import saulltechclose from './assets/Close_MD.svg'
import saulltechprofile from './assets/profile.svg'
import Flag from 'react-world-flags';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { NavLink } from 'react-router-dom'
import { useState } from 'react'



function news() {

    const [navmonitor, Setnavmonitor] = useState('')
    const [navmonitor2, Setnavmonitor2] = useState('hidden')
    // const [oncec, setoncec] = useState(1)
    // const [thrice, setthrice] = useState(1)


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
                        <a className='md:flex items-center justify-end'  href="tel:+2348138129988"> <img className=' w-[70%] sm:w-[55%] md:w-[12%] opacity-70' src={saulltechphone} alt="" /> <p className="text-white px-1 hidden md:block text-[60%] opacity-80">0813812988</p> </a>
                        <img onClick={togglenav} className='opacity-70 w-[30%] sm:w-[15%] md:hidden' src={navmonitor === '' ? saulltechmenu : saulltechclose} alt="" />
                    </div>


                    <div className=' text-white w-[100%] text-[10px]  justify-between mt-2 hidden md:flex '>
                        <NavLink to='/buy?' className='block opacity-90'>Buy</NavLink>

                        <NavLink to='/rent?' className='block opacity-90'>Rent</NavLink>
                        <NavLink to='/newbuilds?' className=' block  opacity-90'>New Builds </NavLink>
                        <NavLink to='/valuation?' className='block opacity-90'>Valuation</NavLink>
                        <NavLink to='/about?' className='block  opacity-90'>About</NavLink>
                        <NavLink to='/news?' className='block opacity-90'>News</NavLink>
                        <a href='contactus' className='block opacity-90'>Contact </a>
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
                <a href='#contactus' className='block py-2 opacity-70'>Contact </a>
                <div className='w-[4rem] rounded-[50%] opacity-90 pt-[1rem]'>
                    <Flag className=' w-[100%] rounded-[10rem]' code="NG" height="50" width="50" />
                </div>
                <div className='flex items-center gap-3 py-[1rem] opacity-80'>
                    <img src={saulltechprofile} alt="" />
                    <p>Sign-in / Register</p>
                </div>

            </div>



            <div className='news text-center my-7'>
                <h1 className='text-[17px] pb-6 text-[rgb(51,51,1)] leading-tight  tracking-tight text-2xl font-forum'> Latest News</h1>

                <div className='grid  sm:grid-cols-2 md:grid-cols-4 mx-[4%] gap-4'>
                    {/*  */}
                    <div className="rounded-2xl shadow-md ">
                        <img className='rounded-t-3xl h-[12rem] w-[100%]' src='https://agentplus-s3.s3.eu-west-2.amazonaws.com/discover-agentplus/articles/2022/06/10/878f8a8a-c5ba-49c2-aa41-428877f5bd9a.jpg' alt="" />
                        <h1 className='mb-3 pt-7 text-[17px]  leading-tight text-base text-left font-bold px-3'>5 Things Landlords should be doing by 2022</h1>
                        <p className='text-left text-sm leading-none px-3'>LandlordHere are the 5 things that landlord should be doing by 2022. 1.  Marketing your</p>
                        <button className='flex items-center mt-7 mx-3  text-[#226666]  py-3  text-center tracking-wide font-bold  rounded-lg opacity-90 '>Read More
                        </button>
                    </div>
                    {/*  */}
                    {/*  */}
                    <div className="rounded-2xl shadow-md ">
                        <img className='rounded-t-3xl h-[12rem] w-[100%]' src='https://agentplus-s3.s3.eu-west-2.amazonaws.com/discover-agentplus/articles/2022/06/10/4c8e360d-b067-4e75-8456-44205cb16b9e.jpg' alt="" />
                        <h1 className='mb-3 pt-7 text-[17px]  leading-tight text-base text-left font-bold px-3'>Free Market Valuations for everyone!</h1>
                        <p className='text-left text-sm leading-none px-3'>How to get your house valued for free!If you’re intrigued to know how much your house is worth, there are...</p>
                        <button className='flex items-center mt-7 mx-3  text-[#226666]  py-3  text-center tracking-wide font-bold  rounded-lg opacity-90 '>Read More
                        </button>
                    </div>
                    {/*  */}
                    {/*  */}
                    <div className="rounded-2xl shadow-md ">
                        <img className='rounded-t-3xl h-[12rem] w-[100%]' src='https://agentplus-s3.s3.eu-west-2.amazonaws.com/discover-agentplus/articles/2022/06/10/046835b7-fa1f-46c0-bae2-89c607ca13be.jpg' alt="" />
                        <h1 className='mb-3 pt-7 text-[17px]  leading-tight text-base text-left font-bold px-3'>What is home staging and is it worth it?</h1>
                        <p className='text-left text-sm leading-none px-3'>What is home staging?Given that it is good practice to make a home as appealing as possible when placing it up</p>
                        <button className='flex items-center mt-7 mx-3  text-[#226666]  py-3  text-center tracking-wide font-bold  rounded-lg opacity-90 '>Read More
                        </button>
                    </div>
                    {/*  */}
                    {/*  */}
                    <div className="rounded-2xl shadow-md ">
                        <img className='rounded-t-3xl h-[12rem] w-[100%]' src='https://agentplus-s3.s3.eu-west-2.amazonaws.com/discover-agentplus/articles/2022/06/10/e45a8016-a75d-48c6-9e81-7c9dc268c8ec.jpg' alt="" />
                        <h1 className='mb-3 pt-7 text-[17px]  leading-tight text-base text-left font-bold px-3'>Making your property stand out</h1>
                        <p className='text-left text-sm leading-none px-3'>HOW TO MAKE YOUR RENTAL PROPERTY MORE <br /> ATTRACTIVE The property market is a fickle mistress</p>
                        <button className='flex items-center mt-7 mx-3  text-[#226666]  py-3  text-center tracking-wide font-bold  rounded-lg opacity-90 '>Read More
                        </button>
                    </div>
                    {/*  */}

                </div>
            </div>
        </div>


    )
}

export default news