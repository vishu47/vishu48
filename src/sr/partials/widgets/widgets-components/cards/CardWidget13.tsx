import {KTSVG} from 'sr/helpers'

type Props = {
  icon: string
  number: string
  description: string
  setCard: any
  card: any
  id: any
}

export default function CardWidget13({description, icon, number, setCard, card, id}: Props) {
  return (
    <>
      <div className={`useases_card radius-12 ${card === id ? 'active' : ''}`} onClick={setCard}>
        <div className='outer p-34 radius-12'>
          <KTSVG className='bg_primary2_50 wx-62 hx-62 p-18 rounded-circle' path={icon} />
          <p className='font-36 fonts-600 pt-25'>{number}</p>
          <p className='font-18 fonts-500 text_black_70'>{description}</p>
        </div>
      </div>
    </>
  )
}
