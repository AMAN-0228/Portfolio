import {useState ,useEffect} from 'react'
const ProgressBar = () => {
    const [scroll, setScroll] = useState<number>(0 );

    useEffect(() => {
      window.addEventListener('scroll',onScroll)
    
      return () => {
        window.addEventListener('scroll',onScroll)
      }
    }, [])

    const onScroll = ()=>{

        const winScroll = document.documentElement.scrollTop
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
        const scrollTop = (winScroll/height)*100
        setScroll(scrollTop)
    }
    
  return (
    <div className="w-1.5 mt-[90px] bg-gray-200 fixed ml-[-5px] h-full mb-4">
      <div className="bg-green-600 transition-all ease-out duration-1000" style={{height:`${scroll}%`}}>
        
      </div>
    </div>
  )
}

export default ProgressBar
