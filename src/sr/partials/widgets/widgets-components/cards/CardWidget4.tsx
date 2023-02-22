import React, {useState, useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {toast} from 'react-toastify'
import {Button, CheckBox, DropDown, Input} from 'sr/helpers'
import {Missing} from 'sr/helpers/alerts/CommonAlerts'
import {TextArea} from 'sr/helpers/ui-components/TextArea'
import {
  ActionCreateMenu,
  ActionCreatePage,
  ActionCreateSubPageIconSection,
  ActionEditMenuItem,
  ActionEditPageItem,
  ActionEditSubPageIconItem,
  ActionListMenu,
  ActionMenuTypeList,
  ActionSectionList,
} from 'sr/redux/admin/actions/HomepageAction'
import {useAdminSelector} from 'sr/redux/reducers'

// type Props = {list: any}

export default function CardWidget4() {
  // url
  // redux
  const dispatch = useDispatch()
  const {homepage} = useAdminSelector()
  // console.log(homepage.pageSectionDetails)

  // states
  const [details, setDetails] = useState<any>([])
  const [pageDetails, setPageDetails] = useState<any>([])
  const [editId, setEditId] = useState<number>(0)
  const [editPageId, setEditPageId] = useState<number>(0)
  const [id, setId] = useState<number>(0)
  const [section, setSection] = useState('')
  const [link, setLink] = useState('')
  const [description, setDescription] = useState('')
  const [file, setFile] = useState<any>({})
  const [status, setStatus] = useState(true)
  const [title, setTitle] = useState('')
  // function
  const SetOption = (e: any) => {
    ResetForm(e)
    const index = e.target.selectedIndex
    const el = e.target.childNodes[index]
    const ids = el.getAttribute('id')
    const sections = e.target.value
    setSection(sections)
    setId(parseInt(ids))
  }
  const ResetForm = (e: any) => {
    // reset form
    e.preventDefault()
    setEditId(0)
    setId(0)
    setSection('')
    setTitle('')
    setLink('')
    setDescription('')
    setFile('')
    setStatus(true)
  }
  const ResetStates = async () => {
    // reset form
    setEditId(0)
    setId(0)
    setSection('')
    setTitle('')
    setLink('')
    setDescription('')
    setFile('')
    setStatus(true)
  }
  const UploadImage = (e: any) => {
    // reset form
    e.preventDefault()
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0])
    }
  }
  const AddSectionsData = async (e: any) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('menu_type', id as any)
    formData.append('title', title)
    formData.append('link', link)
    formData.append('description', description)
    formData.append('is_active', status as any)
    formData.append('image_field', file)

    if (section === 'header') {
      if (formData.get('title') === '' || formData.get('link') === '')
        return toast.error('Menu Fields Are missing!!')
      if (editId) {
        // add id in existing object
        formData.append('id', editId as any)
        await dispatch(ActionEditMenuItem(formData))
        await ResetStates()
      } else {
        await dispatch(ActionCreateMenu(formData))
        await ResetStates()
      }
    } else if (
      section === 'why_swoosh' ||
      section === 'conversational_ai' ||
      section === 'chat_bot' ||
      section === 'banner' ||
      section === 'why_swoosh_card' ||
      section === 'conversation_ai_card'
    ) {
      if (
        (section === 'conversation_ai_card' || section === 'banner') &&
        formData.get('image_field') === ''
      )
        return toast.error('Image/Icon Fields is missing!!')
      if (section === 'why_swoosh_card' && formData.get('link') === '')
        return toast.error('Link Fields is missing!!')
      if (formData.get('title') === '' || formData.get('description') === '')
        return toast.error('Menu Fields Are missing!!')
      if (editPageId) {
        // add id in existing object
        formData.append('id', editPageId as any)
        await dispatch(ActionEditPageItem(formData))
        await ResetStates()
      } else {
        await dispatch(ActionCreatePage(formData))
        await ResetStates()
      }
    } else if (section === 'why_swoosh_icons') {
      const sec = homepage.sectionList.find((item: any) => item.menu_type === 2)
      formData.append('section', sec.id as any)
      if (editPageId) {
        // add id in existing object
        formData.append('id', editPageId as any)
        await dispatch(ActionEditSubPageIconItem(formData))
        await ResetStates()
      } else {
        await dispatch(ActionCreateSubPageIconSection(formData))
        await ResetStates()
      }
    } else if (section === '') {
      Missing()
    } else {
      Missing()
    }

    await dispatch(ActionListMenu())
    await dispatch(ActionSectionList())
  }
  const TitleInput = () => {
    return (
      <>
        {section !== '' ? (
          <Input
            label={'Add Title'}
            placeholder={'Add Title...'}
            type={'text'}
            value={title}
            onChange={(e: any) => setTitle(e.target.value)}
          />
        ) : (
          ''
        )}
      </>
    )
  }
  const LinkInput = () => {
    return (
      <>
        {section === 'header' ||
        section === 'footer1' ||
        section === 'footer2' ||
        section === 'why_swoosh_icons' ||
        section === 'why_swoosh_card' ? (
          <Input
            label={'Add Link/Route'}
            placeholder={'Add Link/Route...'}
            type={'text'}
            onChange={(e: any) => setLink(e.target.value)}
            value={link}
          />
        ) : (
          ''
        )}
      </>
    )
  }
  const ImageInput = () => {
    return (
      <>
        {section === 'banner' ||
        section === 'conversation_ai_card' ||
        section === 'why_swoosh_icons' ? (
          <Input
            label={'Add Icon/Image'}
            placeholder={'Add Link/Route...'}
            type={'file'}
            onChange={(e: any) => UploadImage(e)}
            // value={}
          />
        ) : (
          ''
        )}
      </>
    )
  }
  const DescriptionInput = () => {
    return (
      <>
        {section === 'why_swoosh' ||
        section === 'why_swoosh_card' ||
        section === 'conversational_ai' ||
        section === 'conversation_ai_card' ||
        section === 'why_swoosh_icons' ||
        section === 'chat_bot' ? (
          <TextArea
            label={'Add Description'}
            placeholder={'Add Description...'}
            type={'text'}
            value={description}
            onChange={(e: any) => {
              setDescription(e.target.value)
            }}
          />
        ) : (
          ''
        )}
      </>
    )
  }
  const StatusCheckbox = () => {
    return (
      <>
        <CheckBox
          type={'checkbox'}
          onChange={(e: any) => {
            if (e.target.checked) {
              setStatus(true)
            } else {
              setStatus(false)
            }
          }}
          label={'Is Active'}
          labelClass={'font-16 fonts-500'}
          inputClass={'border border-2'}
          checked={status}
        />
      </>
    )
  }

  // useeffects
  useEffect(() => {
    setDetails(homepage.itemDetails)
    setPageDetails(homepage.pageSectionDetails)
    if (details) {
      if (homepage.menuTypeList) {
        const cc: any = homepage.menuTypeList.find((item: any) => item.id === details.menu_type)
        if (cc) {
          setSection(cc.type_name)
          setId(cc.id)
        }
      }
      setTitle(details.title)
      setLink(details.link)
    }
    if (pageDetails) {
      if (homepage.menuTypeList) {
        const cc: any = homepage.menuTypeList.find((item: any) => item.id === pageDetails.menu_type)
        if (cc) {
          setSection(cc.type_name)
          setId(cc.id)
        }
      }
      setEditPageId(pageDetails.id)
      setTitle(pageDetails.title)
      setLink(pageDetails.link)
      setDescription(pageDetails.description)
      setFile(pageDetails.image_field)
    }

    dispatch(ActionMenuTypeList())
  }, [
    homepage.itemDetails,
    homepage.pageSectionDetails,
    details,
    pageDetails,
    dispatch,
    homepage.menuTypeList,
  ])

  return (
    <>
      <h4>Add Homepage Section</h4>
      <form
        onSubmit={(e: any) => {
          AddSectionsData(e)
        }}
        className='py-20 border_secondary mt-3 radius-8 p-4 gap-3 d-flex flex-column'
      >
        <DropDown
          name={'section'}
          onChange={(e: any) => {
            SetOption(e)
          }}
          value={section}
          label={'Select Section'}
        >
          <option value=''>{'--Choose Section-- '}</option>
          {homepage.menuTypeList.map((item: any) => {
            return (
              <>
                <option id={item.id} value={item.type_name}>
                  {item.title}
                </option>
              </>
            )
          })}
        </DropDown>
        {TitleInput()}
        {LinkInput()}
        {DescriptionInput()}
        {ImageInput()}
        {StatusCheckbox()}

        <div className='d-flex gap-2 justify-content-end'>
          <Button
            onClick={(e: any) => {
              ResetForm(e)
            }}
            className='px-16 py-6 radius-8 bg_primary fonts-400'
          >
            Reset
          </Button>
          <Button className='px-16 py-6 radius-8 bg_primary fonts-400'>Submit</Button>
        </div>
      </form>
    </>
  )
}
