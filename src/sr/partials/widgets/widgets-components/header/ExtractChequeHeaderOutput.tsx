import React from 'react'
import {Link} from 'react-router-dom'
import {KTSVG} from 'sr/helpers'
import HeaderMenuInner from './HeaderMenuInner'

type Props = {
  openSidebar: () => void
}

export default function ExtractHeaderOutput({openSidebar}: Props) {
  return (
    <>
      <section className='bg_secondary_75 hx-62 d-flex align-items-center'>
        <div className='container'>
          <div className='d-flex justify-content-between flex-gap-26 align-items-center'>
            <div className='left'>
              <HeaderMenuInner
                type={'button'}
                buttonBg={'bg_secondary_85 text-dark'}
                action={openSidebar}
                title={'All Documents'}
                icon={'/media/icons/duotone/abstract/all-docs.svg'}
              />
            </div>
            <div className='right d-flex flex-gap-26 align-items-center'>
              <HeaderMenuInner
                title={'Search Extracted Data'}
                icon={'/media/icons/duotone/general/search-doc.svg'}
              />
              <HeaderMenuInner
                title={'Download'}
                icon={'/media/icons/duotone/general/download.svg'}
              />
              <HeaderMenuInner
                title={'Delete All'}
                icon={'/media/icons/duotone/general/delete-20.svg'}
              />
              <HeaderMenuInner
                type={'button'}
                title={'Upload New File'}
                icon={'/media/icons/duotone/general/upload-24.svg'}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
