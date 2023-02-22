import React from 'react'
import {KTSVG, toAbsoluteUrl} from 'sr/helpers'

type Props = {
  svgPath?: any
}

export default function ExtractLoader({svgPath}: Props) {
  return (
    <>
      <section className='absolute bg_model top-0 bottom-0 left-0 right-0 w-100 h-100 big_screen_loader'>
        <div className='h-100 d-flex justify-content-center align-items-center relative'>
          <div className='svg_section bg-white d-flex flex-column radius-12 justify-content-center'>
            <KTSVG path={svgPath} className={'justify-content-center'} />
            <div className='loader_area d-flex align-items-center w-100 justify-content-center mt-3'>
              <span className='font-20 fonts-500 me-2'>Extracting Data</span>
              <div className='spinner-border text-dark spinner-border-md' role='status'>
                <span className='sr-only'>Loading...</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

ExtractLoader.default = {
  svgPath: '/media/img/svg/extract-waiting.svg',
}
