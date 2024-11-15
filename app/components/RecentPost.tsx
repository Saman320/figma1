import React from 'react'
import Link from 'next/link'
import RecentPostBox from './RecentPostBox'

const RecentPost = () => {
  return (
    <div>
      <section className='bg-[#F4E2E2] absolute w-[1440px] h-[502px] top-[665px]'>
        <div className='flex justify-between px-4 md:px-16 lg:px-28 py-6'>
          <h1 className='absolute h-[32px] w-[120px] top-[26px] left-[237px] text-black font-heebo text-[16px] lg:text-[22px] md:text-[22px]'>
            Recent Post
          </h1>
          <Link href="/" className='absolute w-[77px] h-[32px] top-[26px] left-[1168px] text-myPink font-heebo font-[500] text-[16px] lg:text-[22px] md:text-[22px]'>
            View all
          </Link>
        </div>
        <div className="flex lg:flex-row mx-4 md:mx-14 lg:mx-40 gap-12 h-auto">
       
           <div className="absolute top-[78px] left-[238px]">
        <RecentPostBox />
        </div>

        </div>
        <div className='absolute top-[78px] left-[763px] '>
        
        <RecentPostBox />
       
        </div>

      </section>
    </div>
  )
}

export default RecentPost
