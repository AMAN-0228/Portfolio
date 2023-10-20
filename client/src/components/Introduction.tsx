
const Introduction = () => {
  return (
    <div id="home" className="flex flex-col items-center justify-center mt-[40px] md:mt-[80px]">
      <div className="h-[120px] border-r-[1px]"/>
      <div className="w-[5px] h-[5px] bg-slate-600 rounded-full"/>
      <p className="mt-5 text-black font-medium tracking-widest text-[13px] uppercase">Hello! My name is</p>
      <h2 className="uppercase text-[60px]  text-center font-bold">Aman Kant <br /> Sahu</h2>
      <img src="/profile_pic.jpeg" alt="small profile pic" className="w-[130px] h-[130px] bg-gray-300 rounded-full p-[20px] mt-7" />
    </div>
  )
}

export default Introduction
