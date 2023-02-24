import clsx from 'clsx'
import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {Button} from 'sr/helpers'

type Props = {
  action?: any
  nextButtonTitle?: string
  parentElem?: string
  preButtonTitle?: string
  preClassName?: string
  nextClassName?: string
}

export default function FooterWidget1({
  action,
  parentElem,
  preButtonTitle,
  nextButtonTitle,
  nextClassName,
  preClassName,
}: Props) {
  const navigate = useNavigate()
  return (
    <>
      <section className={clsx('footer_extract container-fluid', parentElem)}>
        <div className='d-flex justify-content-center gap-4'>
          {preButtonTitle ? (
            <Button
              onClick={() => {
                navigate(-1)
              }}
              className={clsx('border_secondary  text-dark', preClassName)}
              icon={'/media/icons/duotone/abstract/right-arrow.svg'}
            >
              {preButtonTitle}
            </Button>
          ) : (
            ''
          )}
          {nextButtonTitle ? (
            <Button
              onClick={action}
              className={clsx('bg_primary text-white border_primary', nextClassName)}
              icon={'/media/icons/duotone/abstract/right-arrow-active.svg'}
            >
              {/* <Link to={'/extracted-output'} className='text-white'> */}
              {nextButtonTitle}
              {/* </Link> */}
            </Button>
          ) : (
            ''
          )}
        </div>
      </section>
    </>
  )
}

FooterWidget1.defaultProps = {
  parentElem: 'mt-40 py-17',
}
