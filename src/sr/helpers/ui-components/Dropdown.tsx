type Props = {
  name: any
  children: any
  onChange: (e: any) => void
  labelClass?: any
  label?: any
  className?: any
  required?: any
  value?: any
  error?: any
}

export function DropDown({
  labelClass,
  label,
  name,
  onChange,
  className,
  required,
  children,
  error,
  value,
}: Props) {
  return (
    <>
      <div className='d-flex flex-column'>
        {label ? (
          <label className={` ${labelClass} ui_dropdown_label fw-semibold mb-1`} htmlFor={name}>
            {label}
          </label>
        ) : (
          ''
        )}
        <select
          id={name}
          onChange={onChange}
          className={` ${className} ui_dropdown text-capitalize`}
          name={name}
          value={value}
          required={required}
        >
          {children}
        </select>
        {error ? <p className='mt-1 text-red-400 md:text-sm sm:text-[.65rem]'>{error}</p> : ''}
      </div>
    </>
  )
}

DropDown.defaultProps = {
  className: 'bg-uw-primary-50 w-100',
  labelClass: '',
  label: '',
  name: '',
  onChange: '',
  value: '',
  required: false,
  error: '',
  children: '',
  labelMargin: '',
}
