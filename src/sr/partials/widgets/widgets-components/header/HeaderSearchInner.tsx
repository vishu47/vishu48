import React from 'react'
import {KTSVG} from 'sr/helpers'

type Props = {
  placeholder?: string
  icon?: string
  inputClass?: string
  className?: string
}

export default function HeaderSearchInner({placeholder, icon, inputClass, className}: Props) {
  return (
    <>
      <div className={`${className} border_secondary d-flex justify-content-start radius-8 px-20`}>
        {icon && <KTSVG path={icon} />}
        <input
          className={`${inputClass} pl-16 bg-transparent border-0 w-100`}
          type='text'
          placeholder={placeholder}
        />
      </div>
    </>
  )
}
