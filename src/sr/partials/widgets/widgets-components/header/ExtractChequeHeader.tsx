import {useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {Button, KTSVG} from 'sr/helpers'
import HeaderMenuInner from './HeaderMenuInner'
import HeaderSearchInner from './HeaderSearchInner'

type Props = {}

export default function ExtractListHeader() {
  const pathname = window.location.pathname
  useEffect(() => {
    console.log(pathname)
  }, [pathname])

  return (
    <>
      <section className='bg_secondary_75 hx-62 d-flex align-items-center'>
        <div className='container'>
          <div className='d-flex justify-content-between align-items-center flex-gap-12 m-0 px-1'>
            <HeaderSearchInner
              className={'hx-40 w-100 table_border'}
              inputClass={'fonts-500 font-12'}
              placeholder={'Search Upload Files'}
              icon={'/media/icons/duotone/general/search-doc.svg'}
            />
            <span className='d-flex flex-gap-10'>
              <Button
                type={'ui-button-2'}
                icon={'/media/icons/duotone/general/upload-24.svg'}
                onClick={() => {}}
                text={'Upload New File'}
                textClassName={'fonts-400 font-12 text-nowrap'}
                className={`px-12 bg_primary radius-8`}
              ></Button>
              {/* {pathname !== '/demo/extract-cheque/upload-list' && (
                <HeaderMenuInner
                  title={'Delete All'}
                  icon={'/media/icons/duotone/general/delete-20.svg'}
                />
              )} */}
            </span>
          </div>
        </div>
      </section>
    </>
  )
}
