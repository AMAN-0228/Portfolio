import About from "../components/About"
import Introduction from "../components/Introduction"
import ProfilePic from "../components/ProfilePic"
import ProgressBar from "../components/ProgressBar"
import Skills from '../components/Skills'
import Projects from '../components/Projects'

const Home = () => {
  return (
    <div className='ml-[90px] md:grid md:grid-cols-3'>
        <div className='col-span-2 '>
          <Introduction/>
          <About/>
          <Skills/>
          <Projects/>
        </div>
        <div className='hidden md:block '>
          <ProgressBar/>
          <ProfilePic/>
        </div>
      </div>
  )
}

export default Home
