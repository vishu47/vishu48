import React from 'react'
import {KTSVG} from 'sr/helpers'
import {KTIMG} from 'sr/helpers/ui-components/KTIMG'
import CardWidget1 from './CardWidget1'

type Props = {
  docPath: string
  close?: () => void
}

export default function CardWidget3({close, docPath}: Props) {
  return (
    <>
      <section>
        <div className='full_view_doc bg-white table_border radius-12'>
          <div className='view_area w-100 h-100'>
            <div className='py-26 px-24 header_view d-flex justify-content-between border_bottom align-items-center'>
              <CardWidget1 />
              <span onClick={close}>
                <KTSVG path={'/media/icons/duotone/general/cancel.svg'} />
              </span>
            </div>
            <div className='doc_view p-44'>
              <KTIMG path={docPath} alt={'docpath9'} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
