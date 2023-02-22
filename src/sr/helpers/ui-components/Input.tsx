import React from 'react'

type Props = {
  type: string
  onChange: (e: any) => void
  placeholder?: string
  label?: string
  labelClass?: string
  name?: string
  id?: string
  required?: boolean
  value?: string
  min?: string
  max?: string
  readOnly?: boolean
  inputClass?: string
  error?: string
}

export function Input({
  label,
  labelClass,
  type,
  name,
  id,
  placeholder,
  required,
  value,
  min,
  max,
  onChange,
  readOnly,
  inputClass,
  error,
}: Props) {
  return (
    <>
      <div className='d-flex flex-column w-100'>
        {label ? <label className={` ${labelClass} ui_input_label  mb-1`}>{label}</label> : ''}
        <span className='flex h-full w-100'>
          <input
            type={type}
            name={name}
            id={id}
            placeholder={placeholder}
            required={required}
            value={value}
            min={min}
            max={max}
            onChange={onChange}
            readOnly={readOnly}
            className={`${inputClass} ui_input`}
          />
        </span>
        {error ? <p className='ui_input_error'>{error}</p> : ''}
      </div>
    </>
  )
}

Input.defaultProps = {
  inputClass: 'bg-uw-primary-50 w-100 fw-semibold',
}
