import React from 'react'
import {Button, DropDown, HomeCard4, Input, SearchIconText} from 'sr/helpers'
import {KTIMG} from 'sr/helpers/ui-components/KTIMG'

type Props = {bgImage: any; title?: any; description?: any; leftImage?: boolean}

export default function Search1({bgImage, title, description, leftImage}: Props) {
  return (
    <>
      <div className='position-relative'>
        <div
          className='banner_section radius-12 d-flex justify-content-center align-items-center mt-20 hx-250  bg_primary background_set'
          style={{backgroundImage: `url(${bgImage})`}}
        >
          {leftImage ? (
            <KTIMG
              imgClassName='wx-145 hx-145'
              className='mr-44'
              path={HomeCard4}
              alt={'Maya Bot'}
            />
          ) : (
            ''
          )}
          <div className='bannerimage'>
            <p className='text-white font-30 fonts-600 text-center'>{title}</p>
            <p className='text-white font-16 fonts-400 pt-12 text-center'>{description}</p>
          </div>
        </div>
        <div className='search_section radius-31 hx-62 position-absolute bg-white'>
          <div className='row h-100'>
            <div className='col-md-7 input_section d-flex align-items-center h-100 m-auto px-44'>
              <Input
                inputClass='bg-transparent w-100 text_black_70 font-12 fonts-500'
                type={'text'}
                placeholder={'Ask any use case or Enter a keyword'}
                onChange={() => {}}
              />
            </div>
            <div className='col-md-5 p-0'>
              <div className='row p-0 h-100'>
                <div className='col-md-6 d-flex align-items-center'>
                  <DropDown className={'bg-transparent w-100 text_black_70 font-12 fonts-500'}>
                    <option value='' selected>
                      Category
                    </option>
                  </DropDown>
                </div>
                <div className='col-md-6 d-flex align-items-center justify-content-end pr-37'>
                  <Button
                    type={'ui-button-2'}
                    // onClick={() => {
                    //   OpenToggleSidebar()
                    // }}
                    onClick={() => {}}
                    className='font-14 fonts-500 bg_primary2 hx-46'
                    icon={SearchIconText}
                  >
                    Search
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className='font-12 pt-66 text-center text_black_75'>
        You search using works like <span className='fonts-600 text-dark'>Extract</span> or
        <span className='fonts-600 text-dark'>Comparasion</span> etc
      </p>
    </>
  )
}

Search1.defaultProps = {
  title: 'Main Title',
  desctiption: 'Main Title Description',
  leftImage: true,
}
