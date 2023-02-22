import clsx from 'clsx'
import {KTSVG} from './KTSVG'

type Props = {
  text?: string
  title?: string
  id?: string
  children?: any
  icon?: any
  icon2?: any
  type?: string
  className?: string
  svgIconColor?: string
  textClassName?: string
  onClick?: (e: any) => void
}
// 'ui-button-1', 'ui-button-2'

export function Button({
  onClick,
  id,
  title,
  children,
  text,
  icon,
  icon2,
  type,
  className,
  svgIconColor,
  textClassName,
}: Props) {
  return (
    <>
      {type === 'ui-button-1' && (
        <button
          onClick={onClick}
          id={id}
          data-title={title}
          className={`${className} border_primary ${type} h-100`}
        >
          <div className='d-flex items-center align-items-center'>
            {children}
            {text}
            {icon ? (
              <span>
                <KTSVG path={icon} svgClassName={svgIconColor} />
              </span>
            ) : (
              ''
            )}
          </div>
        </button>
      )}
      {type === 'ui-button-2' && (
        <button
          onClick={onClick}
          id={id}
          data-title={title}
          className={`border-0 ${type} ${className}`}
        >
          <div className={`d-flex items-center align-items-center ${textClassName}`}>
            {icon ? <KTSVG path={icon} svgClassName={svgIconColor} className={'mr-15'} /> : ''}
            {icon2 ? <KTSVG path={icon} svgClassName={svgIconColor} /> : ''}
            {children}
            {text}
          </div>
        </button>
      )}
    </>
  )
}

Button.defaultProps = {
  className: 'text-capitalize',
  text: '',
  title: '',
  id: '',
  children: '',
  icon: '',
  type: 'ui-button-1',
  textClassName: 'fonts-400 font-12 ',
}
