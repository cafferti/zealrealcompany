import saulltechimg from './assets/Mail.svg'
import saulltechphone from './assets/Phone call.svg'
import saulltechmenu from './assets/menu.svg'
import saulltechclose from './assets/Close_MD.svg'
import saulltechprofile from './assets/profile.svg'
import Flag from 'react-world-flags';
import { useState } from 'react'
import saulltecharrow from './assets/Arrow 1.svg'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import saulltecharrowback from './assets/Frame 155 (1).svg'
import saulltecharrowfront from './assets/frameack.svg'
import { faBed, faBath, faStar, } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons/faHeart'
import { Oval } from 'react-loader-spinner';
import zeallogo from './assets/zeallogo.jpeg'
import { NavLink } from 'react-router-dom'

// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper.css'; // Import Swiper styles

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



function Nav() {

  const [navmonitor, Setnavmonitor] = useState('')
  const [navmonitor2, Setnavmonitor2] = useState('hidden')
  const [oncec, setoncec] = useState(1)
  const [twice, settwice] = useState(1)
  const [thrice, setthrice] = useState(1)
  const [fourth, setfourth] = useState(1)








  // Increment function carousel
  const incrementOncec = () => {
    if (oncec < 3) {
      console.log(oncec)

      setoncec(oncec + 1);
    } else {
      setoncec(3);
      console.log(oncec)
    }
  };

  // Decrement function carousel
  const decrementOncec = () => {
    if (oncec > 1) {
      setoncec(oncec - 1);
    } else {
      setoncec(1);
    }
  };



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
    <div className="landing relative">
      <div className=' absolute top-[6rem] right-0  text-white text-center mx-[5%]'>
        <Oval
          height={60}
          width={60}
          color="#3498db"
          ariaLabel="oval-loading"
          secondaryColor="#f3f3f3"
          strokeWidth={2}
          strokeWidthSecondary={2}
          visible={true}
        />
        <h1 className='text-[8px] font-forumSerif mt-[-2rem] opacity-70'>SAULLTECH</h1>
      </div>
      <main className=" h-screen pb-[15%] bg-center bg-cover w-[100%] bg-[url('https://agentplus-s3.s3.eu-west-2.amazonaws.com/discover-agentplus/slides/2023/10/25/696c44fa-082c-414c-9222-a211b2f6bc83.jpg')]">
        <nav className={`flex justify-between px-[5%] sm:px-[3%] sm:pr-0  py-[1rem] items-center bg sm:py-[1rem] md:pt-0 md:pr-[5%] ${navmonitor}`}>
          <img className="w-[50%] sm:w-[30%] lg:w-[15%] h-[50%] md:w-[15%] md:pt-1" src='https://agentplus-s3.s3.eu-west-2.amazonaws.com/discover-agentplus/logos/2022/08/17/34f7a0a9-8d33-4345-93ff-699c5611dfa4.png' alt="" />
          <img className="w-[50%] sm:w-[30%] lg:w-[15%] h-[50%] md:w-[15%] md:pt-1 hidden" src={zeallogo} alt="" />



          <div className='  w-[35%]  md:w-[60%]  transition-all '>
            <div className='flex items-center justify-end md:border-b md:py-1'>
              <a className='w-fit md:flex items-center md:mr-[]' href="mailto:zealrealestate@gmail.com"> <img className='md:w-[12%] text-white w-[70%] sm:w-[55%] opacity-70' src={saulltechimg} alt="" /> <p className='text-white px-1 hidden md:block text-[60%] opacity-80' >Zealrealestate@gmail.com</p> </a>
              <a className='md:flex items-center justify-end' href="tel:+2348138129988"> <img className=' w-[70%] sm:w-[55%] md:w-[12%] opacity-70' src={saulltechphone} alt="" /> <p className="text-white px-1 hidden md:block text-[60%] opacity-80">0813812988</p> </a>
              <img onClick={togglenav} className='opacity-70 w-[30%] sm:w-[15%] md:hidden' src={navmonitor === '' ? saulltechmenu : saulltechclose} alt="" />
            </div>


            <div className=' text-white w-[100%] text-[10px]  justify-between mt-2 hidden md:flex '>
              <NavLink to='/buy?' className='block  opacity-90'>Buy</NavLink>
              <NavLink to='/rent?' className='block opacity-90'>Rent</NavLink>
              <NavLink to='/newbuilds?' className=' block  opacity-90'>New Builds </NavLink>
              <NavLink to='/valuation?' className='block opacity-90'>Valuation</NavLink>
              <NavLink to='/about?' className='block  opacity-90'>About</NavLink>
              <NavLink to='/news?' className='block opacity-90'>News</NavLink>
              <a href='#contactus' className='block opacity-90'>Contact </a>
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


        <div className='text-white text-center first-line: sm:h-[100%] sm:py-[5%]'>
          <h1 className='border-b-[1px] py-6 md:w-[30rem] mt-[20%] sm:mt-0 mx-[auto] font-forumSerif  text-[1.4rem]  tracking-wider md:text-[2rem] md:font-thin'>Zeal Real Estate And Interiors.....</h1>

          <div className=" mx-[10%] grid grid-cols-1 gap-[2rem] sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-4 gap-x-4 gap-y-7  items-center md:items-start md:max-w-[50rem] pt-[1rem] md:mx-auto">
            <NavLink to='/buy?' className='bg-[#aa3939] w-full whitespace-nowrap text-sm md:text-base text-center tracking-wide font-bold uppercase rounded-lg block transition-all py-3 cta md:px-6'>FOR SALE</NavLink>
            < NavLink to='/rent?' className='bg-[#aa3939] w-full whitespace-nowrap text-sm md:text-base text-center tracking-wide font-bold uppercase rounded-lg block transition-all py-3 cta md:px-6 ' >FOR RENT</NavLink>
            <NavLink to='/contacts?' className='bg-[#aa3939] w-full whitespace-nowrap text-sm md:text-base text-center tracking-wide font-bold uppercase rounded-lg block transition-all py-3 cta md:px-6 '>TEAM</NavLink>
            < a href='#contactus' className='bg-[#aa3939] w-full whitespace-nowrap text-sm md:text-base text-center tracking-wide font-bold uppercase rounded-lg block transition-all py-3 cta md:px-6 '>CONTACT US</a>

          </div>
        </div>
      </main>

      <div className=' text-center px-[5%] bg-[#f3f4f4] pb-[7rem]'>
        <img className='w-[50%] inline-block my-[2.5rem] sm:w-[25%]' src='https://agentplus-s3.s3.eu-west-2.amazonaws.com/discover-agentplus/properties/2022/08/17/039efcbf-77da-4b43-8b46-9965b02f9ab5.png' alt="" />
        <h1 className=' text-2xl sm:text-[3rem] mb-5 opacity-80 font-forumSerif' >Your Selling and Buying Expert</h1>

        <p className='text-lg tracking-tight leading-normal opacity-85 md:px-[8rem] md:text-xl '>Our main aim is to make moving easy! <br />
          Whether you’re a young couple moving into your first home, an expanding
          family looking to sell your starter home for something roomier, a landlord with
          high hopes for your buy-to-let property, or a tenant looking for a top-notch
          temporary home - we can help you.
        </p>
        <button className='flex items-center mx-auto bg-[#226666] text-white px-6 py-3  text-center mt-10  rounded-lg opacity-90 '>READ MORE
          <img className='pl-2' src={saulltecharrow} alt="" />
        </button>
      </div>




      <div className=" w-[100%] py-[3rem]">
        <h1 className=' sm:text-left sm:pl-[5%] tracking-tight font-forumSerif leading-normal opacity-90 text-lg text-center md:text-center ' >Fatured Properties</h1>

        <div className='sm:grid sm:grid-cols-2 md:grid-cols-4'>

          {/* single card */}
          <div className="section mx-[5%] pt-[2rem] relative px-[1%] h-fit shadow-lg rounded-2xl ">
            <div>
              <button onClick={decrementOncec} className='absolute left-[5%] top-[12rem] sm:top-[8rem]'>
                <img src={saulltecharrowback} alt="" />
              </button>

              <button onClick={incrementOncec} className='absolute right-[5%] top-[12rem] sm:top-[8rem] '>
                <img src={saulltecharrowfront} alt="" />
              </button>

            </div>


            <div className='transition-all h-[20rem] sm:h-[15rem] w-full'>
              {oncec === 1 && (
                <img className=' h-full object-cover block  rounded-xl w-[100%]'
                  src="https://agentplus-s3.s3.eu-west-2.amazonaws.com/discover-agentplus/properties/2022/06/10/md/PG8TLQUI912UBKu9GXF0RLr5dtoGyTEL.jpeg"
                  alt="First"
                />
              )}
              {oncec === 2 && (
                <img className=' h-full object-cover block  rounded-xl w-[100%]'
                  src="https://agentplus-s3.s3.eu-west-2.amazonaws.com/discover-agentplus/properties/2022/06/10/md/wwVnBOX5jMx9Lh81NhFtSrellCRkOtxM.jpg"
                  alt="Second"
                />
              )}
              {oncec === 3 && (
                <img className='h-full object-cover block  rounded-xl w-[100%]'
                  src="https://agentplus-s3.s3.eu-west-2.amazonaws.com/discover-agentplus/properties/2022/06/10/md/N6yryl9qbqHiSyE0QvgmCIJwJekFoC4f.jpg"
                  alt="Third"
                />
              )}
            </div>

            <h1 className=' leading-tight font-forumSerif uppercase font-bold text-xl line-clamp-1 py-2 opacity-80' >₦285,000</h1>
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

            <h1 className=' font-forumSerif leading-tight uppercase font-bold text-xl line-clamp-1 py-2 opacity-80' >₦285,000</h1>
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

            <h1 className=' font-forumSerif leading-tight uppercase font-bold text-xl line-clamp-1 py-2 opacity-80' >₦285,000</h1>
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

            <h1 className='font-forumSerif leading-tight uppercase font-bold text-xl line-clamp-1 py-2 opacity-80' >₦285,000</h1>
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

      <div className='cards  w-[100%] h-fit text-white'>

        <div className='grid gap-4 sm:grid-cols-2 md:grid-cols-4 mx-[5%] sm:mx-[1%] pt-6'>
          {/* singlecard */}
          <div className="saleproperties h-[23rem] sm:h-[20rem] group overflow-hidden relative rounded-lg bg-cover bg-center  bg-[url('https://agentplus-s3.s3.eu-west-2.amazonaws.com/discover-agentplus/popular-searches/2023/10/25/54039769-6f25-4ff2-b365-95b778887c85.jpg')]">
            <div className='bg-[rgba(0,0,0,0.4)] hover:bg-[rgba(34,102,102,0.85)] h-[100%] px-8 pt-[12rem] sm:pt-[10rem] rounded-xl transition-all duration-150'>
              <h1 className='text-[1.5rem] mb-[2rem] opacity-80  group-hover:sm:mt-[0px] sm:mt-[2rem] transition-all duration-700'>Sale Properties</h1>
              <NavLink to='/buy' className='  hover:bg-white hover:text-black hover:opacity-75 transition-all duration-700 border rounded-lg py-2 px-5 uppercase block w-fit sm:absolute sm:bottom-[-3rem] group-hover:sm:bottom-[2rem]'>
                View More
              </NavLink>
            </div>
          </div>
          {/* singlecard */}
          {/* singlecard */}
          <div className="saleproperties h-[23rem] sm:h-[20rem] group overflow-hidden relative rounded-lg bg-cover bg-center  bg-[url('https://agentplus-s3.s3.eu-west-2.amazonaws.com/discover-agentplus/popular-searches/2023/10/25/b93972d2-a109-4e06-b045-8c10111f88fe.jpg')]">
            <div className='bg-[rgba(0,0,0,0.4)] hover:bg-[rgba(34,102,102,0.85)] h-[100%] px-8 pt-[12rem]  sm:pt-[10rem] rounded-xl transition-all duration-150'>
              <h1 className='text-[1.5rem] mb-[2rem] opacity-80  group-hover:sm:mt-[0px] sm:mt-[2rem] transition-all duration-700'>Meet the Team</h1>
              <NavLink to='/contacts' className='  hover:bg-white hover:text-black hover:opacity-75 transition-all duration-700 border rounded-lg py-2 px-5 uppercase block w-fit sm:absolute sm:bottom-[-3rem] group-hover:sm:bottom-[2rem]'>
                View More
              </NavLink>
            </div>
          </div>
          {/* singlecard */}
          <div className="saleproperties h-[23rem] sm:h-[20rem] group overflow-hidden relative rounded-lg bg-cover bg-center  bg-[url('https://agentplus-s3.s3.eu-west-2.amazonaws.com/discover-agentplus/popular-searches/2023/10/25/9708b692-ae02-43db-950c-3ebd85c85e94.jpg')]">
            <div className='bg-[rgba(0,0,0,0.4)] hover:bg-[rgba(34,102,102,0.85)] h-[100%] px-8 pt-[12rem]  sm:pt-[10rem] rounded-xl transition-all duration-150'>
              <h1 className='text-[1.5rem] mb-[2rem] opacity-80  group-hover:sm:mt-[0px] sm:mt-[2rem] transition-all duration-700'>Careers</h1>
              <a className=' hover:bg-white hover:text-black hover:opacity-75 transition-all duration-700 border rounded-lg py-2 px-5 uppercase block w-fit sm:absolute sm:bottom-[-3rem] group-hover:sm:bottom-[2rem]'>
                View More
              </a>
            </div>
          </div>
          {/* singlecard */}
          {/* singlecard */}
          {/* singlecard */}
          <div className="saleproperties h-[23rem] sm:h-[20rem] group overflow-hidden relative rounded-lg bg-cover bg-center  bg-[url('https://agentplus-s3.s3.eu-west-2.amazonaws.com/discover-agentplus/popular-searches/2023/10/25/ba08a505-e516-4aa1-bfe4-39827ecb7839.jpg')]">
            <div className='bg-[rgba(0,0,0,0.4)] hover:bg-[rgba(34,102,102,0.85)] h-[100%] px-8 pt-[12rem]  sm:pt-[10rem] rounded-xl transition-all duration-150'>
              <h1 className='text-[1.5rem] mb-[2rem] opacity-80  group-hover:sm:mt-[0px] sm:mt-[2rem] transition-all duration-700'>About Us</h1>
              <a className='  hover:bg-white hover:text-black hover:opacity-75 transition-all duration-700 border rounded-lg py-2 px-5 uppercase block w-fit sm:absolute sm:bottom-[-3rem] group-hover:sm:bottom-[2rem]'>
                View More
              </a>
            </div>
          </div>
          {/* singlecard */}




        </div>



      </div>


      <div className="stars mx-[5%] mt-[4rem] text-center ">

        <h1 className='text-3xl font-forum sm:my-[4rem]'>Discover Estates</h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-20">
          {/* single card */}
          <div className='pt-[2rem]'>
            <FontAwesomeIcon className='text-[#226666] w-[100%] h-[4rem] pr-2' icon={faStar} />
            <h1 className='py-[1rem] text-2xl font-forum'>Independence</h1>

            <p className='tracking-tight leading-normal text-sm'>
              We are an Independent real estate company, with years of experience to provide the best experience to our customers

            </p>
          </div>
          {/* single card */}

          {/* single card */}
          <div className='pt-[2rem]'>
            <FontAwesomeIcon className='text-[#226666] w-[100%] h-[4rem] pr-2' icon={faStar} />
            <h1 className='py-[1rem] text-2xl font-forum'>Professional</h1>

            <p className='tracking-tight leading-normal text-sm'>
              We are an Independent real estate company, with years of experience to provide the best experience to our customers

            </p>
          </div>
          {/* single card */}

          {/* single card */}
          <div className='pt-[2rem]'>
            <FontAwesomeIcon className='text-[#226666] w-[100%] h-[4rem] pr-2' icon={faStar} />
            <h1 className='py-[1rem] text-2xl font-forum '>Local</h1>

            <p className='tracking-tight leading-normal text-sm'>
              We are an Independent real estate company, with years of experience to provide the best experience to our customers

            </p>
          </div>
          {/* single card */}

          {/* single card */}
          <div className='pt-[2rem]'>
            <FontAwesomeIcon className='text-[#226666] w-[100%] h-[4rem] pr-2' icon={faStar} />
            <h1 className='py-[1rem] text-2xl font-forum'>Passionate</h1>

            <p className='tracking-tight leading-normal text-sm'>
              We are an Independent real estate company, with years of experience to provide the best experience to our customers

            </p>
          </div>
          {/* single card */}


        </div>


      </div>


      <div className=' w-[100%] h-fit text-center px-[5%] py-12 bg-[#f4f4f4] mt-[3rem]' >
        <h1 className='text-[17px] pb-6 text-[rgb(51,51,1)] leading-tight  tracking-tight text-2xl font-forum'> Latest Videos</h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {/*  */}
          <div className="rounded-2xl shadow-md">
            <iframe className='w-full rounded-tl-2xl rounded-tr-2xl sm:h-[15rem]' width="60" height="315" src="https://www.youtube.com/embed/vngXI_x50dc?si=pRS0sjrWccgxdLGM" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            <p className='p-8 text-[17px] text-[#226666]'>Luxury Property Tours</p>
          </div>
          {/*  */}

          <div className="rounded-2xl shadow-md">
            <iframe className='w-full rounded-tl-2xl rounded-tr-2xl sm:h-[15rem]' width="560" height="315" src="https://www.youtube.com/embed/B1BLeAdBUAE?si=0bbBM1WNQI5ZvL6m" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
            <p className='p-8 text-[17px] text-[#226666]'>Luxury Property With Kevin</p>
          </div>
          {/*  */}

          <div className="rounded-2xl shadow-md ">
            <iframe className='w-full rounded-tl-2xl rounded-tr-2xl sm:h-[15rem]' width="560" height="315" src="https://www.youtube.com/embed/y9j-BL5ocW8?si=7pvE0LrMWIQSabJ_" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            <p className='p-8 text-[17px] text-[#226666]'>Mansion Walk Throught </p>
          </div>
          {/*  */}

          <div className="rounded-2xl shadow-md ">
            <iframe className='w-full rounded-tl-2xl rounded-tr-2xl sm:h-[15rem]' width="560" height="315" src="https://www.youtube.com/embed/zumJJUL_ruM?si=rVa3Qhs5czxMJpdx" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            <p className='p-8 text-[17px] text-[#226666]'>Luxury Property Tours Saulltech</p>
          </div>
          {/*  */}

        </div>
        <button className='flex items-center mx-auto bg-[#226666] text-white px-6 py-3  text-center mt-10  rounded-lg opacity-90 '>VIEW ARCHIVE
        </button>


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

      <div className=" px-[10%] text-center pt-14 bg-[#f4f4f4] sm:px-60 md:px-[30%] h-fit">
        <h1 className='tracking-tight text-2xl py-2 font-serif pb-6'>What Our Customers Think</h1>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]} // Add Autoplay module
          spaceBetween={100}
          slidesPerView={1} // Show one slide at a time
          scrollbar={{ draggable: true }}
          autoplay={{
            delay: 3000, // Delay between transitions (3 seconds)
            disableOnInteraction: false, // Autoplay continues after user interaction
          }}
          loop={true} // Enable looping
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide>
            <h2 className='tracking-tight leading-tight text-lg pt-6 font-[17px]'>
              "For the 8 years I have worked with PW I have been consistently impressed with their innovative ideas and dedication. They have helped us nurture our business from start-up to established island portal and provided us with industry insights to both maximise our growth and onboard new technology. The team is always reliable and on time, often working out of hours to complete tasks. They have also assisted greatly with our marketing, SEO, new product launch and new idea generation. I would not hesitate to recommend the team to help your business grow and flourish."
            </h2>
            <p className='py-2 text-[#226666] tracking-tight text-sm'>
              Richard Shelton, Shelton and Lines
            </p>
          </SwiperSlide>

          <SwiperSlide>
            <h2 className='tracking-tight leading-tight text-lg pt-6 font-[17px]'>
              "What an experience. I enquired about online marketing for my property business in Spain in the middle of the Covid, and within 20 days we had the ads set up, landing pages created, and leads flooding in from the first day! To put the cherry on the cake, we had our first conversion after only two weeks of advertising, making us over 1950% ROI!!! Thank you Luke, as you said, we’re just getting started."
            </h2>
            <p className='py-2 text-[#226666] tracking-tight text-sm'>
              Oliver Hornby, One Property Group
            </p>
          </SwiperSlide>

          <SwiperSlide>
            <h2 className='tracking-tight leading-tight text-lg pt-6 font-[17px]'>
              "What an experience. I enquired about online marketing for my property business in Spain in the middle of the Covid, and within 20 days we had the ads set up, landing pages created, and leads flooding in from the first day! To put the cherry on the cake, we had our first conversion after only two weeks of advertising, making us over 1950% ROI!!! Thank you Luke, as you said, we’re just getting started."
            </h2>
            <p className='py-2 text-[#226666] tracking-tight text-sm'>
              Oliver Hornby, One Property Group
            </p>
          </SwiperSlide>

          <SwiperSlide>
            <h2 className='tracking-tight leading-tight text-lg pt-6 font-[17px]'>
              "What an experience. I enquired about online marketing for my property business in Spain in the middle of the Covid, and within 20 days we had the ads set up, landing pages created, and leads flooding in from the first day! To put the cherry on the cake, we had our first conversion after only two weeks of advertising, making us over 1950% ROI!!! Thank you Luke, as you said, we’re just getting started."
            </h2>
            <p className='py-2 text-[#226666] tracking-tight text-sm'>
              Oliver Hornby, One Property Group
            </p>
          </SwiperSlide>

          <SwiperSlide>
            <h2 className='tracking-tight leading-tight text-lg pt-6 font-[17px]'>
              "What an experience. I enquired about online marketing for my property business in Spain in the middle of the Covid, and within 20 days we had the ads set up, landing pages created, and leads flooding in from the first day! To put the cherry on the cake, we had our first conversion after only two weeks of advertising, making us over 1950% ROI!!! Thank you Luke, as you said, we’re just getting started."
            </h2>
            <p className='py-2 text-[#226666] tracking-tight text-sm'>
              Oliver Hornby, One Property Group
            </p>
          </SwiperSlide>

        </Swiper>
      </div>






    </div>
  )
}

export default Nav