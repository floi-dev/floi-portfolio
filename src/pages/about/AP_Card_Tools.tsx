import type { APT_CardTools } from '../types/AboutPageTypes'

type APCardToolsType = {
    data : APT_CardTools
}

export default function AP_Card_Tools({data} : APCardToolsType) {
  return (
    <div className='text-center'>
        <div className='border-2 flex flex-col gap-2 justify-center p-5 border-black rounded-full overflow-clip w-24 h-32'>
            <img className='h-10 w-fit mx-auto' src={data?.Icon} alt="My App Used" />
            <p className='font-bold text-xl'>{data?.Percent}%</p>
        </div>
        <p className='mt-1'>{data?.Name}</p>
    </div>
  )
}
