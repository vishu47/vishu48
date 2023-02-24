import clsx from 'clsx'
import React from 'react'
import SVG from 'react-inlinesvg'
import {toAbsoluteUrl} from 'sr/helpers/AssetHelpers'
type Props = {
  className?: string
  path: string
  imgClassName?: string
  alt: string
  width?: string
  height?: string
}

const KTIMG: React.FC<Props> = ({
  className = '',
  path,
  imgClassName = '',
  alt,
  width = '',
  height = '',
}) => {
  return (
    <span className={`${className}`}>
      <img
        src={toAbsoluteUrl(path)}
        width={width}
        height={height}
        className={clsx(imgClassName)}
        alt={alt}
      />
    </span>
  )
}

export {KTIMG}

KTIMG.defaultProps = {
  imgClassName: 'w-100 h-100',
}
