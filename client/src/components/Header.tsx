import { useState } from 'react'
// import {AiOutlineBars} from 'react-icons/ai'
import { BsFillDoorClosedFill, BsFillDoorOpenFill } from 'react-icons/bs'
// import { Link } from 'react-scroll';
const Header = () => {
    const [toggle, setToggle] = useState<boolean>(false);
    const menu = [
        {
            id: 1,
            name: "home",
        },
        {
            id: 2,
            name: "skills",
        },
        {
            id: 3,
            name: "project",
        },
        {
            id: 4,
            name: "contact",
        },
    ];
    return (
        <div className="z-[5] flex items-center fixed bg-white justify-between w-full top-0 left-0 border-b-[1px]">
            <div className="w-[90px] h-[90px] bg-black text-center">
                {/* <img src="/logo.png"
                    alt="logo"
                    className="p-7" /> */}
                <h2 className='text-[60px] font-semibold md:font-black text-white'>A</h2>
            </div>
            {/* Desktop Navigation */}
            <div className="hidden  gap-14 items-center mr-3 sm:flex">
                {menu.map(item => {
                    return (
                        <div
                            key={item.id}
                            className="hover:cursor-pointer hover:underline font-medium uppercase">
                            {/* <Link to={item.name} spy={true}  offset={-100} smooth={true} duration={500}>{item.name}</Link> */}
                            <a href={`#${item.name}`} >{item.name}</a>
                        </div>
                    )
                })}
            </div>

            {/* mobile Navigation */}
            <div className=' md:hidden h-screen w-screen fixed bg-white left-[-105%] top-[90px]' style={{ left: toggle ? '0' : '-105%' }}>
                {
                    toggle &&
                    <div className='flex flex-col gap-5 justify-center text-center'>

                        {menu.map(item => {
                            return (
                                <div
                                    key={item.id}
                                    onClick={() => setToggle(false)}
                                    className='text-3xl uppercase cursor-pointer mt-5 hover:text-slate-500'>
                                    {/* <Link onClick={()=>setToggle(false)} spy={true}  to={item.name} offset={-90} smooth={true} duration={500}>{item.name}</Link> */}
                                    <a href={`#${item.name}`}>{item.name}</a>
                                </div>
                            )
                        })}

                    </div>
                }
            </div>
            {/* mobile hamburger */}
            <div className="sm:hidden block ">
                {/* <AiOutlineBars /> */}
                {
                    toggle ? <BsFillDoorClosedFill className='text-3xl cursor-pointer' onClick={() => (setToggle(false))} /> : <BsFillDoorOpenFill className='text-3xl cursor-pointer' onClick={() => (setToggle(true))} />
                }

            </div>
            {/* <div className="w-[90px] h-[90px] bg-red-500 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>

            </div> */}
        </div>
    )
}

export default Header
