import clsx from 'clsx'
import {useLayout} from 'sr/layout/master-layout'

const Footer = () => {
  const {classes} = useLayout()
  return (
    <div
      className={'footer justify-content-center  d-flex flex-lg-column layout_footer hx-60'}
      id=''
    >
      <div
        className={clsx(
          'd-flex px-30 flex-column flex-md-row align-items-center justify-content-between'
        )}
      >
        <div className='left d-flex'>
          <div className='font-14 fonts-500 px-4 text_black_footer'>Privacy Policy</div>
          <div className='font-14 fonts-500 px-4 text_black_footer'>License</div>
          <div className='font-14 fonts-500 px-4 text_black_footer'>API</div>
          <div className='font-14 fonts-500 px-4 text_black_footer'>Help Center</div>
        </div>
        <div className='text_secondary font-14 fonts-500 px-4 text_black_footer'>
          <span className=' me-1'>{new Date().getFullYear()}&copy;</span>
          All rights reserved
        </div>
      </div>
    </div>
  )
}

export {Footer}
