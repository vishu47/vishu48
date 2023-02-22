import clsx from 'clsx'
import React from 'react'
import {Direction} from 'react-toastify/dist/utils'

type Props = {
  label?: string
  labelClass?: string
  type: string
  name?: string
  id?: string
  required?: boolean
  value?: string
  x?: number
  y?: number
  w?: number
  h?: number
  min?: string
  max?: string
  onChange: any
  checked?: any
  readOnly?: boolean
  inputClass?: string
  error?: string
}

export function CheckBox({
  label,
  labelClass,
  id,
  required,
  value,
  x,
  y,
  w,
  h,
  name,
  checked,
  onChange,
  readOnly,
  inputClass,
  error,
  type,
}: Props) {
  return (
    <>
      <div className='form-check ui-checkbox'>
        <input
          className={clsx('form-check-input', inputClass)}
          type={type}
          value={value}
          data-x={x}
          data-y={y}
          data-w={w}
          data-h={h}
          id={id}
          onChange={onChange}
          name={name}
          readOnly={readOnly}
          checked={checked}
        />
        <label className={clsx('form-check-label', labelClass)} htmlFor={id}>
          {label}
        </label>
        {error ? <p className='ui_input_error'>{error}</p> : ''}
      </div>
    </>
  )
}

CheckBox.defaultProps = {
  labelClass: '',
  type: 'checkbox',
}
