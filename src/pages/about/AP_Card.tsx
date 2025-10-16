import type { AboutPageType_Cards } from '../types/AboutPageTypes'

type APCardType = {
    data: AboutPageType_Cards
}

export default function AP_Card({data}: APCardType) {
  return (
    <div className='flex flex-col items-center border-2 border-black rounded-md py-2 px-5 md:max-w-[300px] md:w-60 mx-auto h-80 justify-between'>
        <img className='h-24 w-24 object-contain bg-black my-auto rounded-full' src={data?.Img} alt="Service Image" />
        <div className='flex flex-col h-44 mt-5 '>
            <p className='text-center font-bold text-lg'>{data?.Title}</p>
            <p className='text-center text-sm overflow-auto'>{data?.Description}</p>
        </div>
    </div>
  )
}
