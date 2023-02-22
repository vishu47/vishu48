import {Link} from 'react-router-dom'
import {Facebook, Instagram, KTSVG, Twitter} from 'sr/helpers'
import {KTIMG} from 'sr/helpers/ui-components/KTIMG'

type Props = {
  social: any
  name: string
  email: string
  id: any
  image: any
  card: any
  setCard: any
  className: any
}

export default function CardWidget17({className, name, setCard, card, email, id, image}: Props) {
  return (
    <>
      <div className={`${className} useases_card_detailed radius-12 text-center`} onClick={setCard}>
        <div className={`radius-12 ${card === id ? 'outer active' : ''}`}>
          <div className='image pt-20'>
            <KTIMG imgClassName='wx-64 hx-64 rounded-circle' path={image} alt={''} />
          </div>
          <p className='font-18 fonts-600 w-100 pt-8'>{name}</p>
          <p className='font-16 fonts-500 w-100 pb-25'>{email}</p>
          <div className='social_media pb-30 d-flex justify-content-center gap-2'>
            <KTSVG path={Instagram} />
            <KTSVG path={Twitter} />
            <KTSVG path={Facebook} />
          </div>
        </div>
      </div>
    </>
  )
}
