import projects from '../share/projectsdetails'

const Projects = () => {

    return (
        <div id='project' className='flex px-20 flex-col items-center'>
            <div className='flex items-center full'>
                <h2 className='uppercase tracking-widest  text-2xl font-semibold'>
                    <span className='text-4xl  text-slate-600 font-bold'>Pro</span>ject
                </h2>
                <div className='w-full mx-4 h-[2px] rounded-sm translate-y-[4px] border-2 text-slate-400'></div>
            </div>

            <div className='mt-[50px] grid grid-cols-1 md:grid-cols-3 gap-9'>
                {/* box */}
                {
                    projects.map(item => (
                        <div
                        key={item.id}
                        className=' shadow-sm hover:scale-110 rounded-md p-3 shadow-green-400'>
                            <div className='border-b-1 border-gray-600'>
                                <img className=' h-2/3' src={item.src} alt={item.title+`'s img`} />
                            </div>
                            <div className='flex justify-between items-center mt-4'>
                                <a href={item.site} target='_blank'>
                                    Demo
                                </a>
                                <a href={item.code} 
                                className={item.code_disable?`text-slate-300`:''} target='_blank'>
                                    Code
                                </a>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Projects
