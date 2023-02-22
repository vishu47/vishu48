import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {DropDown, Input, KTSVG} from 'sr/helpers'
import Loader from 'sr/helpers/ui-components/Loader'
import {TextArea} from 'sr/helpers/ui-components/TextArea'
import {
  ActionDeletePageSection,
  ActionGetPageItem,
  ActionSectionList,
} from 'sr/redux/admin/actions/HomepageAction'

type Props = {whySwoosh: any}

export default function CardWidget7({whySwoosh}: Props) {
  // console.log(whySwoosh)
  const data = whySwoosh.find((item: any) => item.menu_type === 2)
  const dataCards = whySwoosh.filter((item: any) => item.menu_type === 5)
  // url
  // redux
  const dispatch = useDispatch()
  // states
  const [section, setSection] = useState('')
  const [title, setTitle] = useState('')
  const [link, setLink] = useState('')
  const [description, setDescription] = useState('')
  // function
  const DeleteMenu = async (e: any) => {
    e.preventDefault()
    const id = e.currentTarget.id
    if (window.confirm('Are you want to delete?')) {
      await dispatch(ActionDeletePageSection(id))
      await dispatch(ActionSectionList())
    }
  }
  const EditSection = async (e: any) => {
    const id = e.currentTarget.id
    await dispatch(ActionGetPageItem(id))
  }

  // useeffects
  return (
    <>
      <div className='py-20 border_secondary mt-3 radius-8 p-4 gap-3 card_widget_7'>
        <h5>Why Swoosh Section with Cards Details</h5>
        {data ? (
          <div className='d-flex gap-4'>
            <div className='radius-8 p-3 mt-2 w-100 bg_secondary_85'>
              <div className='d-flex justify-content-between flex-row align-items-center'>
                <h6 className='fonts-600 '>Header Content Section</h6>
                <div className='d-flex gap-3 '>
                  <span
                    id={data.id}
                    onClick={(e: any) => {
                      DeleteMenu(e)
                    }}
                  >
                    <KTSVG className='cursor' path={'/media/icons/duotone/general/delete.svg'} />
                  </span>
                  <span
                    id={data.id}
                    onClick={(e: any) => {
                      EditSection(e)
                    }}
                  >
                    <KTSVG className='cursor' path={'/media/icons/duotone/abstract/edit.svg'} />
                  </span>
                </div>
              </div>
              <h6 className='pt-2'>Title : {data ? data.title : ''}</h6>
              <h6 className='pt-2'>Description : {data ? data.description : ''}</h6>
            </div>
          </div>
        ) : (
          <span className='mt-2'>
            <Loader />
          </span>
        )}

        <h5 className='mt-3'>Why Swoosh Icon Section</h5>
        <div className='gap-3 mt-20 card_widget_7_subsection'>
          {data ? (
            data.subsection?.map((item: any, key: any) => {
              return (
                <div key={key} className='radius-8 p-3 bg_secondary_85'>
                  <div className='d-flex justify-content-between flex-row align-items-center'>
                    <h6 className='fonts-600 '>Card {key + 1}</h6>
                    <div className='d-flex gap-3 '>
                      <span
                        id={item.id}
                        onClick={(e: any) => {
                          DeleteMenu(e)
                        }}
                      >
                        <KTSVG
                          className='cursor'
                          path={'/media/icons/duotone/general/delete.svg'}
                        />
                      </span>
                      <span
                        id={item.id}
                        onClick={(e: any) => {
                          EditSection(e)
                        }}
                      >
                        <KTSVG className='cursor' path={'/media/icons/duotone/abstract/edit.svg'} />
                      </span>
                    </div>
                  </div>
                  <h6 className='pt-2'>Title : {item.title}</h6>
                  <h6 className='pt-2'>Description : {item.description}</h6>
                  <h6 className='pt-2'>Link : {item.link}</h6>
                  <h6 className='pt-2 d-flex justify-content-between'>
                    <span>Icon:</span>{' '}
                    <img
                      width={'20'}
                      height={'20'}
                      src={`${process.env.REACT_APP_BASE_URL}${item.image_field}`}
                      alt='icon'
                    />
                  </h6>
                </div>
              )
            })
          ) : (
            <span className='mt-2'>
              <Loader />
            </span>
          )}
        </div>

        <h5 className='mt-3'>Why Swoosh Card Section</h5>
        <div className='gap-3 mt-20 card_widget_7_subsection'>
          {dataCards ? (
            dataCards?.map((item: any, key: any) => {
              return (
                <div key={key} className='radius-8 p-3 bg_secondary_85'>
                  <div className='d-flex justify-content-between flex-row align-items-center'>
                    <h6 className='fonts-600 '>Card {key + 1}</h6>
                    <div className='d-flex gap-3 '>
                      <span
                        id={item.id}
                        onClick={(e: any) => {
                          DeleteMenu(e)
                        }}
                      >
                        <KTSVG
                          className='cursor'
                          path={'/media/icons/duotone/general/delete.svg'}
                        />
                      </span>
                      <span
                        id={item.id}
                        onClick={(e: any) => {
                          EditSection(e)
                        }}
                      >
                        <KTSVG className='cursor' path={'/media/icons/duotone/abstract/edit.svg'} />
                      </span>
                    </div>
                  </div>
                  <h6 className='pt-2'>Title : {item.title}</h6>
                  <h6 className='pt-2'>Description : {item.description}</h6>
                  <h6 className='pt-2'>Link : {item.link}</h6>
                </div>
              )
            })
          ) : (
            <span className='mt-2'>
              <Loader />
            </span>
          )}
        </div>
      </div>
    </>
  )
}
