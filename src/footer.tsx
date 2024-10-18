
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faLinkedin, faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';


function Footer() {
  return (
    <footer className='border-t  mt-6'>
    <h1 className=' text py-8 px-8 text-center text-[17px] font-forumSerif text-2xl pb-8 cursor-pointer' >Popular Location</h1>
    <section className='bg-[#0d4d4d] text-center py-12 text-white md:flex md:items-center md:gap-4 md:center sm:px-[1%] md:justify-around'>
      <div className='md:text-right'>
        <h1 className='leading-tight text-2xl  mb-1 font-forumSerif'> Sign up to our  newsletter</h1>
        <h2 className='tracking-tight leading-tight pb-4 mb-4  font-[17px]'> stay up to date with latest news</h2>

      </div>
      <div className='md:flex md:gap-6'>
        <input className=' w-[90%] rounded-lg text-sm px-4 border-2 h-11 mb-4 border-gray-50 ' type="text" placeholder='Fullname' />
        <div className='flex justify-between items-center md:w-[150%]  w-[90%] text bg-white mx-auto px-4 pr-1 border-2 h-11 mb-4 border-gray-50 rounded-lg'>
          <input className='w-[90%] mx-auto' type="text" placeholder='Enter Email' />
          <button className='bg-[#aa3939] rounded-lg transition-all tracking-wide uppercase font-bold text-sm px-4 h-9'>
            signup
          </button>
        </div>

      </div>
    </section>
    <div className='bg-[#003333] md:text-left text-center py-5 md:grid lg:grid-cols-5 sm:grid-cols-4'>
      <img className='w-[50%] mx-auto md:hidden' src='https://agentplus-s3.s3.eu-west-2.amazonaws.com/discover-agentplus/logos/2022/08/20/0d604b5a-79f0-4f94-91de-96ba4aab2d7e.png' alt="" />

      <div className='text-white py-6 border-b md:border-none  sm:mx-[10%]'>
        <h1 className='tracking-tight font-bold text-lg '>Menu</h1>
        <div className='mt-3 '>
          <a className='text-[17px] opacity-90 block' href="">Buy properties</a>
          <a className='text-[17px] opacity-90 block' href=""> About Us</a>
          <a className='text-[17px] opacity-90 block' href="">Meet The Team</a>
          <a className='text-[17px] opacity-90 block' href="">Testimonial</a>
          <a className='text-[17px] opacity-90 block' href="">News</a>
          <a className='text-[17px] opacity-90 block' href="">Contact Us</a>
        </div>
      </div>

      <div className='text-white py-6 border-b md:border-none  sm:mx-[10%]'>
        <h1 className='tracking-tight font-bold text-lg'>Socials</h1>
        <div className='mt-3'>
          <a className='text-[17px] opacity-90 block' href="https://www.facebook.com/profile.php?id=61554711257755&mibextid=LQQJ4d">Facebook</a>
          <a className='text-[17px] opacity-90 block' href=""> LinkedIn</a>
          <a className='text-[17px] opacity-90 block' href="https://www.instagram.com/zeal_real_estate_and_interior_?igsh=OGQ5ZDc2ODk2ZA==">Instagram</a>

        </div>
      </div>


      <div className='text-white py-6 border-b md:border-none  sm:mx-[10%]'>
        <h1 className='tracking-tight font-bold text-lg'>Company</h1>
        <div className='mt-3'>
          <a className='text-[17px] opacity-90 block' href="">Privacy Policy</a>
          <a className='text-[17px] opacity-90 block' href=""> Terms and Condition</a>
        </div>
      </div>

      <div className='text-white py-6 border-b md:border-none  sm:mx-[10%]' id='contactus'>
        <h1 className='tracking-tight font-bold text-lg'>Get In Touch</h1>
        <div className='mt-3'>
          <a className='text-[17px] opacity-90 block' href="tel:+2348138129988">+234(8138129988)</a>
          <a className='text-[17px] opacity-90 block' href="mailto:zealrealestate@gmail.com">Zealrealestate@gmail</a>
        </div>
      </div>

      <div className='text-white py-6   sm:mx-[10%]'>
        <h1 className='tracking-tight font-bold text-lg'>Resources</h1>
        <div className='mt-3'>
          <a className='text-[17px] opacity-90 block' href="">Download Our  Free Guide</a>
          <a className='text-[17px] opacity-90 block' href=""> Area Guide</a>
        </div>
      </div>

    </div>
    <div className='py-5 bg-[#003333] text-center border-t'>
      <a href=""><FontAwesomeIcon icon={faLinkedin} className="text-xl px-2 text-white opacity-90" />
      </a>
      <a href="https://www.facebook.com/profile.php?id=61554711257755&mibextid=LQQJ4d"><FontAwesomeIcon icon={faFacebook} className="text-xl px-2 text-white opacity-90" />
      </a>
      <a href="https://www.instagram.com/zeal_real_estate_and_interior_?igsh=OGQ5ZDc2ODk2ZA=="><FontAwesomeIcon icon={faInstagram} className="text-xl px-2 text-white opacity-90" />
      </a>
      <a href=""><FontAwesomeIcon icon={faTwitter} className="text-xl px-2 text-white opacity-90" />
      </a>
      <p className='text-white pt-7 opacity-70'>
        Copyright Discover 2024. All rights reserved.
      </p>
    </div>


  </footer>  )
}

export default Footer