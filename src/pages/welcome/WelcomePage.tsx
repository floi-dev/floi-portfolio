import MyPhoto from '../../assets/MyPhoto.png'
import { useNavigate } from 'react-router-dom'

export default function WelcomePage() {
  const nav = useNavigate();
  return (
    <div className=' w-full p-5 h-screen flex items-center flex-col justify-between'>
      <div>
        <img className='md:w-96' src={MyPhoto} alt="Floi's Profile Picture" />
        <p className='text-2xl text-center mb-2 font-bold'>Welcome to Floi's Porfolio</p>
      </div>
      <div className='flex flex-col gap-1 w-full max-w-[500px]'>
        <button onClick={() => nav('/about')} className=' duration-150 transition-all ease-in-out hover:bg-white hover:border-2 hover:border-black hover:text-black w-full bg-black p-2 text-white'>My Profile</button>
        <p className='text-sm text-center'>Please click here to proceed</p>
      </div>
    </div>
  )
}
