import React from 'react'
import FeatureWorkBox from './FeatureWorkBox';

const Featurework = () => {
    return (
        <div className='relative w-[919px] h-[934.2px] top-[430px] left-[237px]'>
            <h2 className='w-[153px] h-[32px] top-[1246px] left-[237px] font-heebo lg:text-[22px] font-[500] text-black leading-[32.31px] mb-8'>
                Featured works
            </h2>

            <div className='mb-10'>
      <FeatureWorkBox href="./images/image1.svg" property={1310}/>
     
      </div>
      <div className='mb-10'>
      <FeatureWorkBox href="./images/image2.svg" property={1601}/>
     
      </div>
      <div className='mb-10'>
      <FeatureWorkBox href="./images/image3.svg" property={184}/>
     
      </div>


        </div>
    )
}

export default Featurework
