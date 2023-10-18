import Strings from "../share/Strings";
import { BiSolidQuoteAltLeft,BiSolidQuoteAltRight } from "react-icons/bi";

const About = () => {
  return (
    <div className="flex flex-col px-44 mt-12 text-center items-center">
        <p className="font-semibold md:font-bold text-[40px]">{Strings.ABOUT_HEADING}</p>
        <BiSolidQuoteAltLeft className='bg-gray-500 p-3 text-[44px] mt-6 rounded-full'/>
        <p className="my-6 text-[14px] text-gray-400">{Strings.ABOUT_DESC}</p>
        <BiSolidQuoteAltRight className='bg-gray-500 p-3 text-[44px] mt-3 rounded-full'/>
    </div>
  )
}

export default About
