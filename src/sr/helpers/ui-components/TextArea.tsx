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
  row?: number
  col?: number
  readOnly?: boolean
  inputClass?: string
  error?: string
}

export function TextArea({
  label,
  labelClass,
  type,
  name,
  id,
  placeholder,
  required,
  value,
  row,
  col,
  onChange,
  readOnly,
  inputClass,
  error,
}: Props) {
  return (
    <>
      <div className='d-flex flex-column w-100'>
        {label ? (
          <label className={` ${labelClass} ui_input_label fw-semibold mb-1`}>{label}</label>
        ) : (
          ''
        )}
        <span className='flex h-full w-100'>
          <textarea
            name={name}
            id={id}
            rows={row}
            cols={col}
            placeholder={placeholder}
            required={required}
            value={value}
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

TextArea.defaultProps = {
  inputClass: 'bg-uw-primary-50 w-100',
}
