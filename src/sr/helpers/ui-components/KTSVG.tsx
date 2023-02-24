import React from 'react'
import SVG from 'react-inlinesvg'
import {toAbsoluteUrl} from 'sr/helpers/AssetHelpers'
type Props = {
  className?: string
  path: string
  svgClassName?: string
}

const KTSVG: React.FC<Props> = ({className = '', path, svgClassName = ''}) => {
  return (
    <span className={`svg-icon d-flex align-items-center ${className}`}>
      <SVG src={toAbsoluteUrl(path)} className={svgClassName} />
    </span>
  )
}

export {KTSVG}
