import React from 'react'
import {ProgressBar} from 'react-bootstrap'

type Props = {
  onChange: () => void
  type?: string
  label?: string
  labelClass?: string
  id?: string
  value?: number
  min?: number
  max?: number
  className?: string
  error?: string
}

export function Progressbar({
  label,
  labelClass,
  type,
  id,
  value,
  min,
  max,
  onChange,
  className,
  error,
}: Props) {
  return (
    <>
      <div className='d-flex flex-column w-100 ui_progress'>
        {label ? (
          <label htmlFor={id} className={` ${labelClass} ui_progress_label fw-semibold mb-1`}>
            {label}
          </label>
        ) : (
          ''
        )}
        <ProgressBar
          className={`${className} radius-6 ui_progress_${type}`}
          now={value}
          // label={`${value}%`}
          max={max}
          min={min}
        />
        {error ? (
          <p className={`ui_progress_error font-12 fonts-500 text_secondary text-start`}>{error}</p>
        ) : (
          ''
        )}
      </div>
    </>
  )
}

Progressbar.defaultProps = {
  className: 'hx-6 w-100',
  value: '80',
  max: '100',
}
