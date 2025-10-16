import { Menu } from 'lucide-react'
import { useState } from 'react'
import PP_Menu from './PP_Menu';
import MyPhoto from '../../assets/MyPhoto.png'

export default function PP_Navbar() {
  const [isShow, setIsShow] = useState<boolean>(false);

  return (
    <div className='relative bg-black w-full text-white'>
      
      {/* For Mobile*/}
      {isShow && 
      <div className=' top-0 left-0 h-screen absolute max-w-[300px] bg-black w-full p-5'>
        <PP_Menu setIsShow={setIsShow}/>
      </div>
      }
      
      <div className=' md:hidden p-5 items-center flex flex-row justify-between'>
        <Menu onClick={() => setIsShow(!isShow)}/>
          <p>Welcome to My Porfolio</p>
        <img className='w-8 h-8 rounded-full border-2 border-white p-1' src={MyPhoto} alt="Floi Photo" />
      </div>

      <div className=' hidden md:flex p-4'>
          <PP_Menu setIsShow={setIsShow}/>
      </div>
    </div>
  )
}
