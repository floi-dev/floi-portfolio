import MyPhoto from '../../assets/MyPhoto.png'
import { useNavigate } from 'react-router-dom'
import type { CPT_Icons } from '../types/ContactPageTypes';
import CP_Icons from './CP_Icons';

import fb from '../../assets/contacts/facebook.png'
import gmail from '../../assets/contacts/gmail.png'
import onlinejobs from '../../assets/contacts/onlinejobs.jfif'

const CP_Links : CPT_Icons[] = [
    {
        Photo : fb,
        Link : "https://www.facebook.com/renren.pana",
    },
    {
        Photo : gmail,
        Link : "https://mail.google.com/mail/?view=cm&fs=1&to=floirendopana@gmail.com",
    },
    {
        Photo : onlinejobs,
        Link : "https://www.onlinejobs.ph/jobseekers/info/4545534",
    },
    
]

export default function ContactPage() {
    const nav = useNavigate();
  return (
    <div className='flex flex-col h-full'>
        <span className='my-auto hidden md:block'></span>

        {/* About Me */}
        <div className='lg:px-40 md:flex-row md:items-center md:gap-2 flex flex-col p-10 '>
            <div className='md:1/2 md:gap-5 text-start flex flex-col gap-2'>
            <p className='lg:text-2xl text-lg text-center'>Hello there!</p>
            <p className='lg:text-3xl text-xl text-center'>I am 
                <span className='font-bold text-yellow-600'> Floirendo Paña</span>, an Administrative Assistant at the City Civil Registry Office of Bislig City</p>
            <p className='lg:text-lg text-center text-gray-600'>I am an experienced Administrative Assistant with three years of experience handling paperwork, customer support, and cross-office collaboration. I am also skilled in programming and IT support, managing NAS devices, servers, databases, and various systems</p>

            <div className = 'flex flex-row gap-2 justify-center'>
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

        {/* Contact Information */}
        <div className='md:flex-row md:justify-center flex flex-col gap-5 p-10 items-center'>
            {CP_Links.map((d,i) => (
                <CP_Icons key={i} data = {d}/>
            ))}
        </div>

        <span className='my-auto hidden md:block'></span>
    </div>
  )
}
