import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import {useLocation} from 'react-router'
import clsx from 'clsx'
import {checkIsActive, KTSVG, toAbsoluteUrl} from 'sr/helpers'
import {KTIMG} from 'sr/helpers/ui-components/KTIMG'

type Props = {
  to?: string
  image?: string
  title?: string
  icon?: string
  fontIcon?: string
  hasArrow?: boolean
  hasBorder?: boolean
  hasPadding?: boolean
  type?: string
  svgColor?: string
  className?: string
  titleClass?: string
}

const MenuItem: React.FC<Props> = ({
  to,
  title,
  image,
  icon,
  fontIcon,
  hasBorder = false,
  hasArrow = false,
  hasPadding = true,
  type = '',
  className,
  titleClass,
  svgColor,
}) => {
  const {pathname} = useLocation()
  const css = {
    border: '',
    info: 'header iconBorder',
  }

  return (
    <>
      {to === undefined && icon && (
        <span className='menu-icon '>
          <KTSVG path={icon} className='d-flex fs-2 ms-2 ' svgClassName={svgColor} />
        </span>
      )}
      {to && (
        <div
          className={clsx(
            'radius-8',
            className,
            hasBorder && css.border,
            hasPadding && 'p-2',
            hasPadding || 'pr-2'
          )}
        >
          <Link to={to} className={clsx(checkIsActive(pathname, to) && 'active')}>
            {icon && (
              <span className='menu-icon '>
                <KTSVG path={icon} className='d-flex p-1' svgClassName={svgColor} />
              </span>
            )}
            {image && (
              <span className='menu-icon '>
                <KTIMG path={image} className='d-flex p-1' alt={image} />
              </span>
            )}

            {fontIcon && (
              <span className='menu-icon'>
                <i className={clsx('bi', fontIcon)}></i>
              </span>
            )}

            {hasArrow && <span className='menu-arrow'></span>}
            {title && <div className={`${titleClass} cursor`}>{title}</div>}
          </Link>
        </div>
      )}
      {to === undefined && title && <div className={`${titleClass} `}>{title}</div>}
    </>
  )
}
export {MenuItem}

MenuItem.defaultProps = {
  titleClass: 'font-24  ms-3 fonts-500',
}
