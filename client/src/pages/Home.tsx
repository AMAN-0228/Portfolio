import About from "../components/About"
import Introduction from "../components/Introduction"
import ProfilePic from "../components/ProfilePic"
import ProgressBar from "../components/ProgressBar"

const Home = () => {
  return (
    <div className=' ml-[90px] md:grid md:grid-cols-3'>
        <div className='col-span-2 '>
          <Introduction/>
          <About/>
        </div>
        <div className='hidden md:block'>
          <ProgressBar/>
          <ProfilePic/>
        </div>
      </div>
  )
}

export default Home
