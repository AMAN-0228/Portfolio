import react from '../assets/react.png'
import js from '../assets/js.png'
import html from '../assets/html.png'
import css from '../assets/css.png'
import cpp from '../assets/cpp.png'
import nodejs from '../assets/nodejs.png'
import tailwind from '../assets/Tailwind CSS.png'

const Skills = () => {
  const skills=[
    {
      id:1,
      src:react,
      style:"shadow-blue-600 ",
      title:"React js"
    },
    {
      id:2,
      src:js,
      style:"shadow-yellow-400",
      title:"JavaScript"
    },
    {
      id:3,
      src:tailwind,
      style:"shadow-sky-400",
      title:"Tailwind CSS"
    },
    {
      id:4,
      src:html,
      style:"shadow-orange-600",
      title:"Html"
    },
    {
      id:5,
      src:css,
      style:"shadow-blue-500",
      title:"CSS"
    },    
    {
      id:6,
      src:nodejs,
      style:"shadow-green-900",
      title:"Node js"
    },
    {
      id:7,
      src:cpp,
      style:"shadow-blue-800",
      title:"C++"
    },
  ]
  return (
    <div  className="w-full px-4 md:px-12 my-[122px] flex-col justify-center items-center ">
        {/* Heading start */}
      <div className="w-full flex gap-4 justify-center items-center">
        <div className='h-[7px] w-[20px] rounded-full bg-green-600'></div>
        <div className="w-full border-[1px]"></div>
        <p className="text-2xl font-semibold ">Skills</p>
        <div className="w-full border-[1px]"></div>
        <div className='h-[7px] w-[20px] rounded-full bg-green-600'></div>
      </div>    
      {/* heading end */}

      <div className='mt-[32px] md:mt-[44px] grid grid-cols-2 md:grid-cols-3 gap-12'>
        {
          skills.map((skill)=>(
            <div key={skill.id} className={`shadow-md rounded-lg text-center flex flex-col justify-between items-center ${skill.style}`}>
              <img 
              className='w-[90px] mt-4 mx-auto md:w-[130px]'
              src={skill.src} alt={`${skill.title}'s image`} />
              <p className='my-4 text-lg md:text-xl'>{skill.title}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Skills
