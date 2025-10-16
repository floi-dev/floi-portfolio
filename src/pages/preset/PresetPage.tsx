import PP_Navbar from './PP_Navbar'
import { Outlet } from 'react-router-dom'
import PP_Footer from './PP_Footer'

export default function PresetPage() {
  return (
    <div className='flex flex-col justify-between h-screen'>
      <div>
        <PP_Navbar/>
      </div>
      <div className=' overflow-auto h-full'>
        <Outlet/>
      </div>
      <div>
        <PP_Footer/>
      </div>
    </div>
  )
}
