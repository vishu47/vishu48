import React, {useEffect} from 'react'
import {KTSVG, toAbsoluteUrl} from 'sr/helpers'

type Props = {
  margin?: string
  viewTitle?: string
  doc: string
  titleClassName?: string
  fullScreen?: () => void
  coordinates?: any
}

export default function ViewWidget1({
  coordinates,
  margin,
  viewTitle,
  doc,
  fullScreen,
  titleClassName = 'fonts-500 font-16',
}: Props) {
  // url
  // redux
  // state
  // function
  const AreaHighlight = (loc: any) => {
    const textRef = document.getElementById('highlightArea') as HTMLCanvasElement
    const ctx = textRef.getContext('2d')
    if (ctx != null) {
      ctx.clearRect(0, 0, 800, 300)
      ctx.beginPath()
      ctx.lineWidth = 1
      ctx.strokeStyle = 'red'
      ctx.strokeRect(loc.x, loc.y, loc.w, loc.h)
    }
  }
  // const OneTimeRender = () => {
  //   const textRef = document.getElementById('highlightArea') as HTMLCanvasElement
  //   const ctx = textRef.getContext('2d')
  //   if (ctx != null) {
  //     ctx.beginPath()
  //     ctx.strokeStyle = 'blue'
  //     ctx.lineWidth = 2
  //     ctx.lineJoin = 'round'
  //     ctx.strokeRect(20, 100, 320, 23)
  //     ctx.strokeStyle = 'blue'
  //     ctx.lineWidth = 2
  //     ctx.lineJoin = 'round'
  //     ctx.strokeRect(625, 90, 243, 35)
  //     ctx.strokeStyle = 'green'
  //     ctx.lineWidth = 2
  //     ctx.lineJoin = 'round'
  //     ctx.strokeRect(40, 10, 150, 30)
  //   }
  // }
  // use effect
  useEffect(() => {
    if (coordinates) {
      if (
        coordinates.x !== '' ||
        coordinates.y !== '' ||
        coordinates.w !== '' ||
        coordinates.h !== ''
      ) {
        AreaHighlight(coordinates)
      }
      // else {
      //   OneTimeRender()
      // }
    }
    //  else {
    //   // OneTimeRender()
    // }
  }, [coordinates])

  return (
    <>
      <section className=' table_border radius-12'>
        <div className='m-auto h-100 d-flex justify-content-between flex-column'>
          <div className='d-flex justify-content-between view_header py-20 px-24'>
            <p className={titleClassName}>{viewTitle}</p>
            <span onClick={fullScreen} className={'cursor'}>
              <KTSVG path={'/media/icons/duotone/general/full-screen.svg'} />
            </span>
          </div>
          <div className='view_image p-16 position-relative'>
            <div className=''>
              <div style={{position: 'relative'}}>
                <div>
                  <img style={{height: '100%', width: '100%'}} src={toAbsoluteUrl(doc)} alt='' />
                </div>
                <canvas
                  id='highlightArea'
                  width='900'
                  height='250'
                  style={{
                    // border: '1px solid red',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                  }}
                ></canvas>
              </div>
            </div>
          </div>
          <div className='view_image p-3 d-flex justify-content-end me-4'>
            <KTSVG
              path={'/media/icons/duotone/general/zoom-in-30.svg'}
              svgClassName={'text_primary'}
            />
          </div>
        </div>
      </section>
    </>
  )
}

ViewWidget1.defaultProps = {
  margin: '112px 0px 8px 0px',
  viewTitle: 'Demo Title',
}
