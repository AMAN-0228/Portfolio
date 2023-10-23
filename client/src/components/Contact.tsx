import { useState } from 'react'

const initalInfo = {
  personName: "",
  email: "",
  msg: ""
}


const Contact = () => {
  const [info, setInfo] = useState(initalInfo);
  return (
    <section id="contact" className=" mt-[60px] w-full mb-20 flex flex-col items-center">
      <div>
        <h2 className="text-slate-700 text-xl font-semibold">
          Contact Form
        </h2>
      </div>

      {/* form */}
      <form className="flexCenter mt-11 flex-col w-full gap-5">
        {/* <div className='w-full'> */}
          {/* name */}
          <div className="relative flexCenter mt-2 md:mt-4 w-full">
            <input type="text" name="name" id="name" required value={info.personName} onChange={(e) => (setInfo((prev) => { return ({ ...prev, personName: e.target.value }) }))} className='border-2 w-2/3 border-slate-500 rounded-md py-2 px-4 peer/name' />
            <label htmlFor='name' className="absolute left-20 md:left-40 py-2 px-4 text-[18px] cursor-text transition-all duration-700 ease-in-out peer-focus/name:translate-y-[-100%]  peer-focus/name:bg-white peer-focus/name:px-0 peer-focus/name:text-[12px] peer-focus/name:py-0  peer-valid/name:translate-y-[-100%]  peer-valid/name:bg-white peer-valid/name:px-0 peer-valid/name:text-[11px] peer-valid/name:py-0 ">Name</label>

          </div>

          {/* email */}
          <div className='relative flexCenter mt-2 md:mt-5 w-full'>
            <input type="email" name="email" id="email" value={info.email} onChange={(e) => (setInfo((prev) => { return ({ ...prev, email: e.target.value }) }))} required className='border-2 w-2/3 border-slate-500 rounded-md py-2 px-4 peer/name' />
            <label htmlFor="email" className='absolute left-20 md:left-40 py-2 px-4 text-[18px] cursor-text transition-all duration-1000 ease-in-out peer-focus/name:translate-y-[-100%]  peer-focus/name:bg-white peer-focus/name:px-0 peer-focus/name:text-[12px] peer-focus/name:py-0  peer-valid/name:translate-y-[-100%]  peer-valid/name:bg-white peer-valid/name:px-0 peer-valid/name:text-[11px] peer-valid/name:py-0 ' >Email</label>
          </div>
        {/* </div> */}

        {/* message */}
        <div className=' relative flexCenter mt-2 md:mt-5 w-full inputBox'>
          <textarea name="msg" id="msg" cols={25} rows={5} value={info.msg} onChange={(e) => (setInfo((prev) => { return ({ ...prev, msg: e.target.value }) }))} className='border-2 w-2/3 border-slate-500 rounded-md py-2 px-4 peer/name' ></textarea>
          <label htmlFor="email" className='absolute left-20  top-2 md:left-40 text-[18px] cursor-text transition-all duration-700 ease-in-out peer-focus/name:translate-y-[-100%]  peer-focus/name:bg-white peer-focus/name:px-0 peer-focus/name:text-[12px] peer-focus/name:py-0  peer-valid/name:translate-y-[-100%]  peer-valid/name:bg-white peer-valid/name:px-0 peer-valid/name:text-[11px] peer-valid/name:py-0 ' >Message</label>
        </div>
        <button className='border-slate-500 border-2 py-2 px-5 rounded-md text-green-800 hover:scale-110'>Submit</button>
      </form>

      {/* <div className='relative mt-5'>
        <input type="test" name="test" id="test" value={contactname} onChange={(e) => (setContactname(e.target.value))} required className='border-2 border-slate-500 rounded-md py-2 px-4 peer/test' />
        <label htmlFor="test" className='absolute left-0 py-2 px-4 text-[18px] uppercase cursor-text transition-all duration-700 peer-focus/test:translate-y-[-50%]  peer-focus/test:bg-white peer-focus/test:px-0 peer-focus/test:translate-x-2 peer-focus/test:text-[12px]  peer-valid/test:-translate-y-1/2 peer-valid/test:bg-white peer-valid/test:px-0 peer-valid/test:translate-x-2 peer-valid/test:text-[12px]' >test</label>
      </div> */}

    </section>
  )
}

export default Contact
