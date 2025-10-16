import MyPhoto from '../../assets/MyPhoto.png'
import IdeaPhoto from '../../assets/Idea.png'
import AP_Card from './AP_Card'
import type { AboutPageType_Cards, APT_CardTools } from '../types/AboutPageTypes'
import AP_Card_Tools from './AP_Card_Tools'
import CapcutIcon from '../../assets/top_tool/capcut.png'
import MsOfficeIcon from '../../assets/top_tool/msoffice.webp'
import VscodeIcon from '../../assets/top_tool/vscode.jfif'

import AdminImg from '../../assets/services/Admin.png'
import BloggingIcon from '../../assets/services/Blogging.png'
import ProgrammingIcon from '../../assets/services/Programming.png'
import { useNavigate } from 'react-router-dom'

const ListCards : AboutPageType_Cards [] = [
  {
    Img : AdminImg,
    Title : "Administrative Task",
    Description: "Provide professional administrative support, managing documents, schedules, correspondence, and workflows to ensure smooth and efficient operations.",
  },
  {
    Img : ProgrammingIcon,
    Title : "Programmer",
    Description: "Develop full-stack web and desktop applications, handling programming, databases, and system integration to deliver efficient, scalable solutions.",
  },
  {
    Img : BloggingIcon,
    Title : "Blogging",
    Description: "Manage blogs and create engaging content using skills in photo and video editing, ensuring visually appealing and well-organized posts that attract and retain audiences.",
  },
]

const ListFavTools : APT_CardTools[] = [
  {
    Icon : VscodeIcon,
    Percent: "88",
    Name: "VSCode",
  },
  {
    Icon : CapcutIcon,
    Percent: "86",
    Name: "Capcut",
  },
  {
    Icon : MsOfficeIcon,
    Percent: "85",
    Name: "Ms Office",
  },
]

export default function AboutPage() {
  const nav = useNavigate();
  return (
    <div className=''>

      {/* About Me */}
      <div className='lg:px-40 md:border-none md:flex-row md:items-center md:gap-2 flex flex-col p-10 border-b-2 border-black'>
        <div className='md:1/2 md:gap-5 text-start flex flex-col gap-2'>
          <p className='lg:text-2xl text-lg text-center'>Hello there!</p>
          <p className='lg:text-3xl text-xl text-center'>I am 
            <span className='font-bold text-yellow-600'> Floirendo Paña</span>, an Administrative Assistant at the City Civil Registry Office of Bislig City</p>
          <p className='lg:text-lg text-center text-gray-600'>I am an experienced Administrative Assistant with three years of experience handling paperwork, customer support, and cross-office collaboration. I am also skilled in programming and IT support, managing NAS devices, servers, databases, and various systems</p>

          <div className='flex flex-row gap-2 justify-center'>
            <button onClick={()=>nav('/portfolio')} className='hover:bg-white hover:text-black border-black bg-black px-5 py-2 border-2 rounded-full text-white '>View my Porfolio</button>
            <a href="https://www.facebook.com/renren.pana">
              <button className='hover:bg-black hover:text-white border-2 border-black px-5 py-2 rounded-full'>Hire Me</button>
            </a>
          </div>
        </div>
        <div className='w-full'>
          <img className=' lg:h-[700px] object-contain mx-auto mt-5' src={MyPhoto} alt="Floi Photo" />
        </div>
      </div>

      {/* Service */}
      <div className=' lg:px-40 lg:justify-center lg:gap-10 lg:h-[1000px] md:h-[500px] md:justify-between flex flex-col gap-2 p-10'>
        <div className='md:flex-row md:justify-between md:gap-5 flex mb-5 flex-col items-center'>
          <p className='font-bold text-2xl'>Services 
            <span className='text-yellow-600 font-bold'> I Provide</span></p>
          <button onClick={()=>nav('/services')} className='md:border-2 md:border-black px-5 rounded-lg md:hover:bg-black md:hover:text-white md:py-2 underline md:no-underline'>View All Serives</button>
        </div>
        <div className="flex gap-2 flex-row justify-center">
          <span className='mx-auto md:block hidden'></span>
          <div className='flex flex-col gap-2 md:flex-row md:1/2 md:gap-5'>
            {ListCards.map((d, i) => (
              <AP_Card key={i} data={d} />
            ))}
          </div>
          <span className='mx-auto md:block hidden'></span>
        </div>
        <span className='hidden md:block'></span>
      </div>

      {/* Projecs */}
      <div className= ' flex flex-col md:flex-row md:items-center bg-black text-white p-10'>
        <img className='md:w-1/2' src={MyPhoto} alt="Floi Service Photo" />
        <div className='flex flex-col items-center gap-2'>
          <p className='text-2xl md:text-5xl'>About Me</p>
          <p className='md:text-3xl text-xl text-gray-300'>Who is 
            <span className='font-bold text-yellow-400'> Floirendo Paña?</span></p>
          <p className='md:text-base text-center text-gray-200 text-sm'>I am a self-taught programmer with hands-on experience in building web and desktop applications. As an Administrative Assistant, I reliably complete tasks independently and go beyond my responsibilities to ensure smooth operations.</p>
          <div className='flex flex-row md:mt-5 gap-3 text-center'>
            <div className='md:flex flex-col gap-3'>
              <p className='md:flex md:flex-row md:items-end md:text-5xl text-3xl font-bold text-yellow-400'>3 <span className='hidden md:block text-base indent-2'>systems</span></p>
              <p className='md:text-base text-xs text-gray-200'>Systems Completed</p>
            </div>
            <div className='md:flex flex-col gap-3'>
              <p className='md:flex md:flex-row md:items-end md:text-5xl text-3xl font-bold text-yellow-400'>5 <span className='hidden md:block text-base indent-2'>servers</span></p>
              <p className='md:text-base text-xs text-gray-200'>Server Managed</p>
            </div>
            <div className='md:flex flex-col gap-3'>
              <p className=' md:flex md:flex-row md:items-end md:text-5xl text-3xl font-bold text-yellow-400'>2 <span className='hidden md:block text-3xl indent-2'>+</span></p>
              <p className='md:text-base text-xs text-gray-200'>Years of Experience</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tools */}
      <div className=' md:border-none md:py-32 p-10 flex flex-col gap-1 items-center border-b-2 border-black'>
          <p className='lg:mb-5 lg:text-2xl'>--- My Top 3 Favorite Tools ---</p>
          <p className='md:text-5xl text-3xl'>Exploring the Tools</p>
          <p className='lg:mb-5 md:text-5xl text-3xl'>Behind my Jobs</p>

          <div className=' md:flex-row md:gap-10 md:mt-5 flex flex-col gap-2'>
            {ListFavTools.map((d,i) =>(
              <AP_Card_Tools key={i} data = {d}/>
            ))}
          </div>
      </div>

      {/* Endorsement */}
      <div className='flex flex-col md:flex-row items-center gap-2 p-10'>
        <div className='md:w-1/2'>
          <img className='lg:h-[800px]' src={IdeaPhoto} alt="Thinking Solution" />
        </div>
        <div className='flex flex-col md:w-1/2 items-center gap-2'>
          <p className='lg:text-5xl lg:mb-5 text-2xl font-bold'>Problems?</p>
          <p className='lg:text-xl font-bold text-center'>Manual, Time-Consuming Tasks and Disorganized Data</p>
          <p className='lg:text-xl text-center'>If your team is manually handling tasks, entering data individually, and struggling to organize information, I can create custom solutions for you. I specialize in developing web applications, desktop software, and mobile apps that automate these processes, improve data organization, and reduce errors. This allows your operations to run efficiently without relying on repetitive manual work.</p>
          <p className='lg:text-xl text-center'>If the challenge is a lack of skilled encoders, clerks, or secretaries, I can also fill that gap. I can handle data entry, organize information, and implement the system myself, ensuring that your workflow continues smoothly even with limited personnel.</p>
        </div>
      </div>

    </div>
  )
}
