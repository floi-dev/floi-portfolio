import type { SPT_Cards } from '../types/SkillsPageTypes'

type SPCardsTypes = {
    data : SPT_Cards;
}

export default function SP_Cards({data} : SPCardsTypes) {
  return (
    <div className='flex flex-col items-center gap-1'>
        <img className='h-12 w-12 rounded-full p-1 border-2 border-red-800 object-contain' src={data?.Photo} alt="Skill" />
        <p>{data?.Name}</p>
    </div>
  )
}
