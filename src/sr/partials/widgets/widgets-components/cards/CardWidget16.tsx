import {Link} from 'react-router-dom'
import {KTSVG, RightArrowPimary} from 'sr/helpers'

type Props = {
  number: string
  description: string
  setCard: any
  card: any
  title: string
  id: any
  className: any
}

export default function CardWidget16({
  description,
  className,
  number,
  setCard,
  card,
  title,
  id,
}: Props) {
  return (
    <>
      <div className={`${className} useases_card_detailed radius-12 `} onClick={setCard}>
        <div className={`outer p-34 radius-12 ${card === id ? 'active' : ''}`}>
          <div className='title d-flex '>
            <p className='font-16 fonts-700'>{title}</p>
          </div>
          <p className='font-14 fonts-500 py-20 desc'>{description}</p>
          <div className='use '>
            <Link className='d-flex font-16 pr-12 fonts-700 text-dark' to={'#'}>
              Try This
              <KTSVG className='pl-12' path={RightArrowPimary} />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
