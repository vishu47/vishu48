import React from 'react'

type Props = {
  width: string
  height: string
  className?: string
}

export default function Loader({width, height, className}: Props) {
  return (
    <>
      <div className={`spinner-border ${className}`} style={{width, height}} role='status'>
        <span className='sr-only'>Loading...</span>
      </div>
    </>
  )
}

Loader.defaultProps = {
  width: '3rem',
  height: '3rem',
}
