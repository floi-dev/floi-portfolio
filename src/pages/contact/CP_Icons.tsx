import type { CPT_Icons } from '../types/ContactPageTypes'

type CPIconsType = {
    data : CPT_Icons
}

export default function CP_Icons({data}:CPIconsType) {
  return (
    <div>
        <a href={data.Link}>
            <img className='h-14 p-1 w-14 object-contain rounded-full' src={data.Photo} alt={data.Link} />
        </a>
    </div>
  )
}
