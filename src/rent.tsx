import saulltechlive from './assets/Upload cloud.svg'
import saulltechsearch from './assets/ic_round-search.svg'
import { useState } from 'react'
import saulltechimg from './assets/Mail.svg'
import saulltechphone from './assets/Phone call.svg'
import saulltechmenu from './assets/menu.svg'
import saulltechclose from './assets/Close_MD.svg'
import saulltechprofile from './assets/profile.svg'
import Flag from 'react-world-flags';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import saulltecharrowback from './assets/Frame 155 (1).svg'
import saulltecharrowfront from './assets/frameack.svg'
import { faBed, faBath } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons/faHeart'
import { NavLink } from 'react-router-dom'




function rent() {

    const [navmonitor, Setnavmonitor] = useState('')
    const [navmonitor2, Setnavmonitor2] = useState('hidden')
    // const [oncec, setoncec] = useState(1)
    const [twice, settwice] = useState(1)
    const [thrice, setthrice] = useState(1)
    const [fourth, setfourth] = useState(1)








    // Increment function carousel
    // const incrementOncec = () => {
    //     if (oncec < 3) {
    //         console.log(oncec)

    //         setoncec(oncec + 1);
    //     } else {
    //         setoncec(3);
    //         console.log(oncec)
    //     }
    // };

    // // Decrement function carousel
    // const decrementOncec = () => {
    //     if (oncec > 1) {
    //         setoncec(oncec - 1);
    //     } else {
    //         setoncec(1);
    //     }
    // };



    const incrementtwice = () => {
        if (twice < 3) {
            console.log(twice)

            settwice(twice + 1);
        } else {
            settwice(3);
            console.log(twice)
        }
    };

    // Decrement function carousel
    const decrementtwice = () => {
        if (twice > 1) {
            settwice(twice - 1);
        } else {
            settwice(1);
        }
    };



    const incrementthrice = () => {
        if (thrice < 3) {
            console.log(thrice)

            setthrice(thrice + 1);
        } else {
            setthrice(3);
            console.log(thrice)
        }
    };

    // Decrement function carousel
    const decrementthrice = () => {
        if (thrice > 1) {
            setthrice(thrice - 1);
        } else {
            setthrice(1);
        }
    };




    const incrementfourth = () => {
        if (fourth < 3) {
            setfourth(fourth + 1);
        } else {
            setfourth(3);
            console.log(fourth)
        }
    };

    // Decrement function carousel
    const decrementfourth = () => {
        if (fourth > 1) {
            setfourth(fourth - 1);
        } else {
            setfourth(1);
        }
    };






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
        <div className='relative'>
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
                </div>
            </nav>

            <div className={`bg-[#003333] text-white z-10 absolute w-[100%] px-[5%] text-lg md:hidden  ${navmonitor2}`}>
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


            <div className=' mx-[5%] mt-[2rem]'>
                <div className='w-[100%] flex items-center align-middle text-17px gap-1 md:justify-start  '>
                    <input className='w-[70%] md:w-[40%] pr-8 py-2 px-2 border border-gray-400 rounded-lg' type="text" placeholder="Search Location" />
                    <button className='bg-[#aa3939] px-[5%]  rounded-md h-10'> <img src={saulltechsearch} alt="" /></button>
                    <button className='bg-gray-400 px-[5%] px-  rounded-md h-10'> <img src={saulltechlive} alt="" /></button>
                </div>

                <div className=" w-[100%] py-[3rem]">
                    <h2 className='text-center leading-tight md:text-left font-semibold my-2'>
                        Properties for Rent in all locations(3)
                    </h2>

                    <div className='sm:grid sm:grid-cols-2 md:grid-cols-4'>



                        {/* single card */}
                        <div className="section mx-[5%] pt-[2rem] relative px-[1%] h-fit shadow-lg rounded-2xl ">
                            <div>
                                <button onClick={decrementtwice} className='absolute left-[5%] top-[12rem] sm:top-[8rem]'>
                                    <img src={saulltecharrowback} alt="" />
                                </button>

                                <button onClick={incrementtwice} className='absolute right-[5%] top-[12rem] sm:top-[8rem] '>
                                    <img src={saulltecharrowfront} alt="" />
                                </button>

                            </div>


                            <div className='transition-all h-[20rem] sm:h-[15rem] w-full'>
                                {twice === 1 && (
                                    <img className=' h-full object-cover block  rounded-xl w-[100%]'
                                        src="https://agentplus-s3.s3.eu-west-2.amazonaws.com/discover-agentplus/properties/2022/06/10/md/pdfoac4As3x8f5L8csHqppzI9SSSC7Rl.jpg"
                                        alt="First"
                                    />
                                )}
                                {twice === 2 && (
                                    <img className=' h-full object-cover block  rounded-xl w-[100%]'
                                        src="https://agentplus-s3.s3.eu-west-2.amazonaws.com/discover-agentplus/properties/2022/06/10/md/air8HNcXdQE33H5E0wVgnfXDx14swu2X.jpg"
                                        alt="Second"
                                    />
                                )}
                                {twice === 3 && (
                                    <img className='h-full object-cover block  rounded-xl w-[100%]'
                                        src="https://agentplus-s3.s3.eu-west-2.amazonaws.com/discover-agentplus/popular-searches/2023/10/25/9708b692-ae02-43db-950c-3ebd85c85e94.jpg"
                                        alt="Third"
                                    />
                                )}
                            </div>

                            <h1 className=' font-forumSerif leading-tight uppercase font-bold text-xl line-clamp-1 py-2 opacity-80' >£285,000</h1>
                            <h2 className='text-lg my-1'>Upgraded New Build</h2>
                            <p className='tracking-tight text-sm'> Hartelpool,Tennesee, Unites kingdom </p>
                            <div className="bed flex gap-2  py-[1rem] ">
                                <div className='flex items-center w-[4rem]'>
                                    <FontAwesomeIcon className='text-[#003333] h-[1.5rem] pr-2' icon={faBed} />
                                    <p className='opacity-50 text-[23px]'>4</p>
                                </div>
                                <div className='flex items-center w-[4rem]'>
                                    <FontAwesomeIcon className='text-[#003333] h-[1.5rem] pr-2' icon={faBath} />
                                    <p className='opacity-50 text-[23px] '>2</p>
                                </div>

                            </div>

                            <div className='flex justify-between py-[1rem]'>
                                <p className='rounded-lg text-white tracking-wide uppercase font-bold text-sm py-2  w-[50%] text-center  bg-[#aa3939] max-w-[13rem]'>view details</p>
                                <FontAwesomeIcon className='text-[#003333] h-[2rem]' icon={faHeart} />
                            </div>
                        </div>
                        {/* singlecard */}




                        {/* single card */}
                        <div className="section mx-[5%] pt-[2rem] relative px-[1%] h-fit shadow-lg rounded-2xl ">
                            <div>
                                <button onClick={decrementthrice} className='absolute left-[5%] top-[12rem] sm:top-[8rem]'>
                                    <img src={saulltecharrowback} alt="" />
                                </button>

                                <button onClick={incrementthrice} className='absolute right-[5%] top-[12rem] sm:top-[8rem] '>
                                    <img src={saulltecharrowfront} alt="" />
                                </button>

                            </div>


                            <div className='transition-all h-[20rem] sm:h-[15rem] w-full'>
                                {thrice === 1 && (
                                    <img className=' h-full object-cover block  rounded-xl w-[100%]'
                                        src="https://agentplus-s3.s3.eu-west-2.amazonaws.com/discover-agentplus/properties/2022/06/10/md/vMA2DepxSXOlAJdBdEJPeRK2vxsKDMpl.jpg"
                                        alt="First"
                                    />
                                )}
                                {thrice === 2 && (
                                    <img className=' h-full object-cover block  rounded-xl w-[100%]'
                                        src="https://agentplus-s3.s3.eu-west-2.amazonaws.com/discover-agentplus/articles/2022/06/10/4c8e360d-b067-4e75-8456-44205cb16b9e.jpg"
                                        alt="Second"
                                    />
                                )}
                                {thrice === 3 && (
                                    <img className='h-full object-cover block  rounded-xl w-[100%]'
                                        src="https://agentplus-s3.s3.eu-west-2.amazonaws.com/discover-agentplus/properties/2022/06/10/md/N6yryl9qbqHiSyE0QvgmCIJwJekFoC4f.jpg"
                                        alt="Third"
                                    />
                                )}
                            </div>

                            <h1 className=' font-forumSerif leading-tight uppercase font-bold text-xl line-clamp-1 py-2 opacity-80' >£285,000</h1>
                            <h2 className='text-lg my-1'>Upgraded New Build</h2>
                            <p className='tracking-tight text-sm'> Hartelpool,Tennesee, Unites kingdom </p>
                            <div className="bed flex gap-2  py-[1rem] ">
                                <div className='flex items-center w-[4rem]'>
                                    <FontAwesomeIcon className='text-[#003333] h-[1.5rem] pr-2' icon={faBed} />
                                    <p className='opacity-50 text-[23px]'>4</p>
                                </div>
                                <div className='flex items-center w-[4rem]'>
                                    <FontAwesomeIcon className='text-[#003333] h-[1.5rem] pr-2' icon={faBath} />
                                    <p className='opacity-50 text-[23px] '>2</p>
                                </div>

                            </div>

                            <div className='flex justify-between py-[1rem]'>
                                <p className='rounded-lg text-white tracking-wide uppercase font-bold text-sm py-2  w-[50%] text-center  bg-[#aa3939] max-w-[13rem]'>view details</p>
                                <FontAwesomeIcon className='text-[#003333] h-[2rem]' icon={faHeart} />
                            </div>
                        </div>
                        {/* singlecard */}







                        {/* single card */}
                        <div className="section mx-[5%] pt-[2rem] relative px-[1%] h-fit shadow-lg rounded-2xl ">
                            <div>
                                <button onClick={decrementfourth} className='absolute left-[5%] top-[12rem] sm:top-[8rem]'>
                                    <img src={saulltecharrowback} alt="" />
                                </button>

                                <button onClick={incrementfourth} className='absolute right-[5%] top-[12rem] sm:top-[8rem] '>
                                    <img src={saulltecharrowfront} alt="" />
                                </button>

                            </div>


                            <div className='transition-all h-[20rem] sm:h-[15rem] w-full'>
                                {fourth === 1 && (
                                    <img className=' h-full object-cover block  rounded-xl w-[100%]'
                                        src="https://agentplus-s3.s3.eu-west-2.amazonaws.com/discover-agentplus/properties/2022/06/10/md/M1FJSZS2JvtArmkQTOzdGK2ijikpLl0Z.jpg"
                                        alt="First"
                                    />
                                )}
                                {fourth === 2 && (
                                    <img className=' h-full object-cover block  rounded-xl w-[100%]'
                                        src="https://agentplus-s3.s3.eu-west-2.amazonaws.com/discover-agentplus/properties/2022/06/10/md/lQRv0gcNnXsuQpHce1odx1RvqKFbjDk5.jpg"
                                        alt="Second"
                                    />
                                )}
                                {fourth === 3 && (
                                    <img className='h-full object-cover block  rounded-xl w-[100%]'
                                        src="https://agentplus-s3.s3.eu-west-2.amazonaws.com/discover-agentplus/properties/2022/06/10/md/N6yryl9qbqHiSyE0QvgmCIJwJekFoC4f.jpg"
                                        alt="Third"
                                    />
                                )}
                            </div>

                            <h1 className='font-forumSerif leading-tight uppercase font-bold text-xl line-clamp-1 py-2 opacity-80' >£285,000</h1>
                            <h2 className='text-lg my-1'>Upgraded New Build</h2>
                            <p className='tracking-tight text-sm'> Hartelpool,Tennesee, Unites kingdom </p>
                            <div className="bed flex gap-2  py-[1rem] ">
                                <div className='flex items-center w-[4rem]'>
                                    <FontAwesomeIcon className='text-[#003333] h-[1.5rem] pr-2' icon={faBed} />
                                    <p className='opacity-50 text-[23px]'>4</p>
                                </div>
                                <div className='flex items-center w-[4rem]'>
                                    <FontAwesomeIcon className='text-[#003333] h-[1.5rem] pr-2' icon={faBath} />
                                    <p className='opacity-50 text-[23px] '>2</p>
                                </div>

                            </div>

                            <div className='flex justify-between py-[1rem]'>
                                <p className='rounded-lg text-white tracking-wide uppercase font-bold text-sm py-2  w-[50%] text-center  bg-[#aa3939] max-w-[13rem]'>view details</p>
                                <FontAwesomeIcon className='text-[#003333] h-[2rem]' icon={faHeart} />
                            </div>
                        </div>
                        {/* singlecard */}









                    </div>



                </div>

            </div>
        </div>
    )
}

export default rent