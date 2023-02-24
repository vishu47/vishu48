import {FC} from 'react'
import clsx from 'clsx'
import {toAbsoluteUrl, XtractCancel, XtractInfoIcon, XtractUserImg} from 'sr/helpers/index'
import {MenuItem} from './MenuItem'

// const itemClass = 'ms-1 ms-lg-3'
// const btnClass = 'btn btn-icon btn-active-light-primary w-30px h-30px w-md-40px h-md-40px'
// const userAvatarClass = 'symbol-30px symbol-md-40px'

const Topbar: FC = () => {
  // const {config} = useLayout()

  return (
    <div className='menu-item d-flex justify-content-center align-items-center gap-2 h-100'>
      <MenuItem icon={XtractInfoIcon} to='/dashboard' hasPadding={false} />
      <div className={clsx('px-2 d-flex align-items-center')} id='kt_header_user_menu_toggle'>
        {/* begin::Toggle */}
        <div className={clsx('cursor-pointer symbol')}>
          <img
            src={toAbsoluteUrl(XtractUserImg)}
            className='rounded-circle'
            alt='avatar'
            width={'40px'}
            height={'40px'}
          />
        </div>
      </div>
      <div className={clsx('menu-link d-flex align-items-center')}>
        {/* begin::Toggle */}
        <MenuItem icon={XtractCancel} to='/dashboard' hasPadding={false} />
      </div>
    </div>
  )
}
export {Topbar}
