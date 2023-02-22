/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
import {Link} from 'react-router-dom'
// import clsx from 'clsx'
import {AsideMenu} from './AsideMenu'
import {useLayout} from 'sr/layout/master-layout'
import {toAbsoluteUrl} from 'sr/helpers'

const AsideDefault: FC = () => {
  const {classes} = useLayout()
  return (
    <div id='kt_aside'>
      {/* begin::Brand */}
      <div className='uwl_002' id='kt_aside_logo'>
        <Link to='/dashboard' className='d-flex align-items-center justify-content-center pb-4'>
          <img
            src={toAbsoluteUrl('/media/icons/duotone/abstract/abs015.svg')}
            alt='logo'
            className=''
          />
        </Link>
      </div>
      <div className='uwl_001'>
        <AsideMenu />
      </div>
      {/* end::Brand */}
    </div>
  )
}

export {AsideDefault}
