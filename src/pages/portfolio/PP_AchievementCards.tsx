import type { PPT_Projects } from '../types/PortfolioPageTypes'

type PPACTypes = {
  data : PPT_Projects
}
export default function PP_AchievementCards({data} : PPACTypes) {
  return (
    <div className='p-2 md:h-[550px] h-[600px] border-black text-center mx-10'>
      <img className='h-[300px] mx-auto bg-white p-1 object-contain' src={data.Photo} alt={data.Title} />
      <div className='mt-5'>
        <p className='text-xl font-bold '>{data.Title}</p>
        <p className='text-sm text-justify'>{data.Description}</p>
      </div>
    </div>
  )
}
