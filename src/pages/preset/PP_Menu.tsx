import { X } from 'lucide-react'
import React from 'react'
import type { PPMenuType_Button } from '../types/PresetPageTypes'
import { useNavigate } from 'react-router-dom'
import MyPhoto from '../../assets/MyPhoto.png'

const menuButton : PPMenuType_Button[] = [
  { Menu : "About" , Link : "/about" },
  { Menu : "Skills" , Link : "/skills" },
  { Menu : "Services" , Link : "/services" },
  { Menu : "Portfolio" , Link : "/portfolio" },
  { Menu : "Contacts" , Link : "/contacts" },
]

type PPMenu_Type = {
  setIsShow : React.Dispatch<React.SetStateAction<boolean>>
}

export default function PP_Menu({setIsShow}: PPMenu_Type) {
  const nav = useNavigate();
  const handleMenu = (e : React.MouseEvent<HTMLButtonElement>) => {
    const {value} = e.currentTarget;
    nav(value)
    setIsShow(false);
  }

  return (
    <div className='md:flex-row md:h-full  md:items-center md:p-0 md:w-full md:gap-5 md:justify-center relative flex flex-col gap-2 items-start'>
      <div>
        <img onClick={() => nav('/')} className='hidden md:block w-8 h-8 rounded-full border-2 border-white p-1' src={MyPhoto} alt="Floi Photo" />
      </div>
      <span className='mx-auto'/>
      {menuButton.map((d,i) =>(
        <button value={d.Link} onClick={handleMenu} className='hover:text-red-700' key={i}>{d.Menu}</button>
      ))}

      <X onClick={() => setIsShow(false)} className=' absolute right-5 md:hidden'/>
    </div>
  )
}
