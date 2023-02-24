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

type Props = {chat_bot: any}

export default function CardWidget9({chat_bot}: Props) {
  // console.log(chat_bot)
  const data = chat_bot.find((item: any) => item.menu_type === 4)
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
      <div className='py-20 border_secondary mt-3 radius-8 p-4 gap-3'>
        <h5>Chat Bot Section</h5>
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
      </div>
    </>
  )
}
