import SP_Cards from './SP_Cards'
import type { SPT_Cards } from '../types/SkillsPageTypes'
import vscode from '../../assets/top_tool/vscode.jfif'
import msoffice from '../../assets/top_tool/msoffice.webp'
import capcut from '../../assets/top_tool/capcut.png'

import CSharp from '../../assets/skills/technical/CSharp.png'
import Canva from '../../assets/skills/technical/Canva.jfif'
import JS from '../../assets/skills/technical/JS.png'
import Python from '../../assets/skills/technical/Python.jfif'
import TS from '../../assets/skills/technical/TS.png'
import drive from '../../assets/skills/technical/drive.png'
import gcalendar from '../../assets/skills/technical/gcalendar.png'
import gdocs from '../../assets/skills/technical/gdocs.jfif'
import gforms from '../../assets/skills/technical/gforms.png'
import gmail from '../../assets/skills/technical/gmail.png'
import gsheets from '../../assets/skills/technical/gsheets.jfif'
import gslides from '../../assets/skills/technical/gslides.jfif'
import vs from '../../assets/skills/technical/vs.jfif'
import Photoshop from '../../assets/skills/technical/Photoshop.jfif'


import softskills from '../../assets/skills/soft/softskills.png'

const SPCardsData_Technical : SPT_Cards[] = [
  {
    Photo : vscode,
    Name : "Vscode",
  },
   {
    Photo : vs,
    Name : "VS",
  },
  {
    Photo : msoffice,
    Name : "Ms Office",
  },
  {
    Photo : capcut,
    Name : "Capcut",
  },
  {
    Photo : JS,
    Name : "JS",
  },
  {
    Photo : TS,
    Name : "TS",
  },
  {
    Photo : Python,
    Name : "Python",
  },
  {
    Photo : CSharp,
    Name : "C#",
  },
  {
    Photo : Canva,
    Name : "Canva",
  },  
  {
    Photo : Photoshop,
    Name : "Photoshop",
  },

  {
    Photo : gmail,
    Name : "Gmail",
  },
  {
    Photo : gcalendar,
    Name : "G Calendar",
  },
  {
    Photo : drive,
    Name : "Drive",
  },
  {
    Photo : gforms,
    Name : "G Forms",
  },
  {
    Photo : gdocs,
    Name : "G Docs",
  },
  {
    Photo : gsheets,
    Name : "G Sheets",
  },
  {
    Photo : gslides,
    Name : "G Slides",
  },

]

const SPCardsData_Soft : SPT_Cards[] = [
  {
    Photo : softskills,
    Name : "Teamwork / Collaboration",
  },
  {
    Photo : softskills,
    Name : "Customer service",
  },
  {
    Photo : softskills,
    Name : "Time management",
  },
  {
    Photo : softskills,
    Name : "Organization",
  },
  {
    Photo : softskills,
    Name : "Adaptability / Flexibility",
  },
  {
    Photo : softskills,
    Name : "Problem-solving",
  },
  {
    Photo : softskills,
    Name : "Stress management",
  },
  {
    Photo : softskills,
    Name : "Patience",
  },
  {
    Photo : softskills,
    Name : "Conflict management",
  },
  
]

export default function SkillsPage() {
  return (
    <div className='flex flex-row gap-2 items-center justify-center h-full mx-5'>
      <div className='flex flex-row items-center md:border-2 border-black justify-between p-10  gap-5 text-center h-[500px]'>
        <p className=' lg:text-lg writing-vertical-rl'>Skills that get things done</p>
        <div className=' h-full'>
          <p className='lg:text-2xl font-bold text-red-800'>What I do?</p>
          <p className='lg:text-xl text-sm text-center'>Here’s an overview of the skills I’ve developed and can confidently apply in various projects and tasks:</p>

          <div className='lg:h-72 lg:my-10 overflow-y-auto h-80 w-full mt-2 flex flex-col gap-3'>
            <p className='lg:text-lg '>Technical Skills</p>
            <div className=' grid grid-cols-2 md:grid-cols-5 '>
              {SPCardsData_Technical.map((d,i) =>(
                <SP_Cards key={i} data = {d}/>
                ))}
            </div>
            <p className='mt-5 lg:text-lg '>Soft Skills</p>
            <div className=' grid grid-cols-2 md:grid-cols-4 '>
              {SPCardsData_Soft.map((d,i) =>(
                <SP_Cards key={i} data = {d}/>
                ))}
            </div>
          </div>


        </div>
          <p className=' lg:text-lg writing-vertical-rl'>From idea to solution</p>
        </div>
    </div>
  )
}
