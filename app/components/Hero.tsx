import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className='relative w-[1440px] h-[800px]  left-[-2.5px] mx-auto'>
      <div className="absolute w-[1030px] h-[308px] top-[246px] left-[231px]">

        <h1 className='font-heebo font-[900] text-[48px] md:text-[48px] leading-[61px] pb-6 text-customText'>
          Hi, I am John, <br />
          Creative Technologist
        </h1>
        <p className="font-heebo font-normal text-[16px] leading-[23.5px] pb-5 text-customText">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet <br />  sint. Velit officia consequat duis enim velit mollit. Exercitation veniam  <br /> consequat sunt nostrud amet.

        </p>

        <button className="w-[205px] h-[50px] absolute text-white font-heebo font-[500px] text-lg rounded-sm bg-myPink mt-5" style={{boxShadow: "0 4px 4px 0 #4141418a"}}>
          Download Resume
        </button>


      </div>

      <div className="absolute w-[298px] h-[308px] top-[246px] left-[963px]">

      <Image 
        src="./images/images.svg"
        alt="Hero Section Image"
        width={298}
        height={308}
        className=""
        />

      </div>




    </section>
  )
}

export default Hero
