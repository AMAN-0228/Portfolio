import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import { BsFillFileEarmarkArrowDownFill } from 'react-icons/bs'
import { HiMail } from 'react-icons/hi'

const Sidebar = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          <IoLogoGithub className="cursor-pointer hover:scale-110 transition-all ease-in-out" />
        </>
      ),
      href: "https://github.com/AMAN-0228",
    },
    {
      id: 2,
      child: (
        <>
          <IoLogoLinkedin className="cursor-pointer hover:scale-110 transition-all ease-in-out" />
        </>
      ),
      href: "https://www.linkedin.com/in/aman-sahu-2001/",
    },
    {
      id: 3,
      child: (
        <>
          <BsFillFileEarmarkArrowDownFill className="cursor-pointer hover:scale-110 transition-all ease-in-out" />
        </>
      ),
      href: "/AmanKantSahu_resume.pdf",
      download: true
    },
    {
      id: 4,
      child: (
        <>
          <HiMail className="cursor-pointer hover:scale-110 transition-all ease-in-out" />
        </>
      ),
      href: "mailto:amansahu5051@gmail.com",
    },
  ]
  return (
    <>
      <div className=" w-[90px] h-screen bg-white border-r-[1px] fixed left-0 top-[90px] flex flex-col items-center justify-around">
        <h2 className="-rotate-90 tracking-widest font-normal">HOMEPAGE</h2>
        <div className="flex flex-col gap-7 mb-10 text-[20px] text-black">
          {
            links.map(link => (
              <a key={link.id} className="text-black"
                href={link.href}
                rel='noopener noreferrer'
                target="_blank"
                download={link.download}>
                {link.child}
              </a>
            ))
          }
        </div>
      </div>
    </>
  );
};

export default Sidebar;
