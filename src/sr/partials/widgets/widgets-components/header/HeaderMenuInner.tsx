import React from 'react'
import {Link} from 'react-router-dom'
import {Button, Input, KTSVG} from 'sr/helpers'

type Props = {
  title: string
  icon: string
  type?: string
  buttonBg?: string
  action?: () => void
}

export default function HeaderMenuInner({title, buttonBg, icon, type, action}: Props) {
  return (
    <>
      {type === 'button' && (
        <Button
          type={'ui-button-2'}
          icon={icon}
          onClick={action}
          text={title}
          textClassName={'fonts-400 font-12  text-nowrap'}
          className={`${buttonBg} px-12 radius-8  hx-40`}
        ></Button>
      )}
      {type === 'link' && (
        <Link to={'/'}>
          <li className='d-flex justify-content-center text-dark align-items-center'>
            <KTSVG path={icon} className={'mr-15'} />
            <p className='fonts-400 font-12'>{title}</p>
          </li>
        </Link>
      )}
      {type === '' && (
        <li
          className='d-flex justify-content-center text-dark align-items-center cursor'
          onClick={action}
        >
          <KTSVG path={icon} className={'mr-15'} />
          <p className='fonts-400 font-12'>{title}</p>
        </li>
      )}
    </>
  )
}

HeaderMenuInner.defaultProps = {
  buttonBg: 'bg_primary text-white',
  type: '',
}
