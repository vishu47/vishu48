import React, {useState} from 'react'
import CardWidget11 from 'sr/partials/widgets/widgets-components/cards/CardWidget11'
import TabHeader1 from 'sr/partials/widgets/widgets-components/header/SearchHeader1'

type Props = {}

const info = [
  {name: 'Account Name'},
  {name: 'BIC Code'},
  {name: 'Country'},
  {name: 'IFSC Code'},
  {name: 'Date'},
  {name: 'Email'},
]
const image = [{name: 'Table Extract'}, {name: 'Denoising'}, {name: 'Genesis'}]

export default function AiEngies() {
  const [tab, setTab] = useState('infoxapis')
  const [data, setData] = useState(info)
  const [filter, setFilter] = useState('')

  return (
    <>
      <div className='ai_engines container'>
        <TabHeader1 tab={tab} setTab={setTab} setFilter={setFilter} />
        <div className='content d-flex justify-content-center flex-column'>
          <div className='content_title text_black_85 text-center pt-50 font-36 fonts-600'>
            <p>AI Engines</p>
          </div>
          <div className='content_desc text_black_85 text-center font-20 fonts-500 pt-18'>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
        </div>
        <div className='listing_app'>
          <CardWidget11 list={tab === 'infoxapis' ? info : image} filter={filter} />
        </div>
      </div>
    </>
  )
}
