import { FeaturedWorksProps } from "@/types/types";
import Image from "next/image";

const FeatureWorkBox:React.FC<FeaturedWorksProps> = ({href, property}) => {
    return(
        <div className="flex">
        <div className={"relative top-${property}px"}>
         <Image
         src={href}
         alt="Feature work"
         width={246}
         height={180}
         className="w-[246px] h-[180px] rounded-md"/>

        
        </div>

        <div className="relative w-[623.46px] h-[272.1px] left-[20px]">
            <h3 className="font-heebo text-[28px] leading-[44.06px] w-[305px] h-[44px] font-[700]">
                Designing Dashboards
            </h3>

            <div className="flex">
        <div className="absolute w-[68px] h-[24px] top-[52.9px] left-[3.46px] rounded-[50px] bg-myPink">
        <span className="text-white font-heebo font-bold text-[16px] leading-[26.44px] w-[42px] h-[37px] pl-3">
            2020
        </span>
        </div>
        <p className="text-[#0000009E] font-heebo font-normal text-[20px] leading-[29.38px] absolute w-[97px] h-[29px] top-[52.1px] left-[92.46px]">
        Dashboard
        </p>
        </div>
        <p className="font-heebo font-light text-[18px] leading-[26.44px] text-black absolute w-[622px] h-[170px] top-[102.1px] left-[1.46px]">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
        </p>

    </div>

        </div>

    
    )

}

export default FeatureWorkBox;