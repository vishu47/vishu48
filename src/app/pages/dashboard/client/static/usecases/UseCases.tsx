import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {CasesBanner, CasesFlag, CasesTarget, CasesUser} from 'sr/helpers'
import CardWidget13 from 'sr/partials/widgets/widgets-components/cards/CardWidget13'
import NavigationHeader from 'sr/partials/widgets/widgets-components/header/NavigationHeader'
import Search1 from 'sr/partials/widgets/widgets-components/search/Search1'

export default function UseCases() {
  // redux
  // state
  const [card, setCard] = useState<any>('')
  const [liTag, setliTag] = useState<any>('')
  const list = ['Use Cases']
  const list1 = [
    {id: 1, url: '#', name: 'Single customer  identifier ( SCI )'},
    {id: 2, url: '#', name: 'Ask Sandy - Self-Service Account'},
    {id: 3, url: '#', name: 'Cheque Clearing'},
    {id: 4, url: '#', name: 'Ask TPTA - Third Party Security'},
    {id: 5, url: '#', name: 'MT 599 Swift Message Routing'},
    {id: 6, url: '#', name: '(R.A.R.E)'},
    {id: 7, url: '#', name: 'Identity Access Management '},
  ]
  const list2 = [
    {id: 1, url: '#', name: 'Single Customer Identifier (SCI) - Address Comparison'},
    {id: 2, url: '#', name: 'Ask Sandy - Self-service Accounts Payable status assistance chatbot'},
    {
      id: 3,
      url: '#',
      name: 'Cheque Clearing - Character recognition, technical and signature verification',
    },
    {id: 4, url: '#', name: 'Ask TPTA - Third party security Risk self service'},
    {
      id: 5,
      url: '#',
      name: 'International Organization for Standardization (ISO)Transaction codes ',
    },
    {id: 6, url: '#', name: 'MT 599 Swift Message Routing'},
    {id: 7, url: '#', name: 'Regulatory Automated Responses Efficiency (R.A.R.E) '},
    {id: 8, url: '#', name: 'Identity Access Management - User Access Review'},
    {id: 9, url: '#', name: 'Email Classification - Complaints Handling'},
  ]
  const cards = [
    {description: 'Use Cases solve successfully', id: 1, number: '80N', icon: CasesFlag},
    {description: 'Man hours saved', id: 2, number: '1000hrs', icon: CasesTarget},
    {description: 'Productivity increased', id: 3, number: '150%', icon: CasesUser},
  ]
  return (
    <>
      <div className='usecases'>
        <div className=' bg_secondary_75 hx-40 m-auto'>
          <div className='container h-100 d-flex align-items-center'>
            <div className='navigation_header'>
              <NavigationHeader list={list} />
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='container'>
            <Search1
              leftImage={false}
              title={'We pioneered to solve the business problems'}
              description={
                'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
              }
              bgImage={CasesBanner}
            />
          </div>
          <div className='px-100'>
            <div className='card_section pt-38'>
              {cards.map((item: any) => {
                return (
                  <>
                    <CardWidget13
                      description={item.description}
                      icon={item.icon}
                      number={item.number}
                      id={item.id}
                      card={card}
                      setCard={() => setCard(item.id)}
                    />
                  </>
                )
              })}
            </div>
            <div className='list_section d-flex'>
              <div className='left_section pt-52'>
                <p className='pb-20 font-20 fonts-600 px-25'>
                  List of Solved <br /> Use Cases
                </p>
                <ul>
                  {list1.map((li: any) => {
                    return (
                      <>
                        <li
                          className={`lilist py-13 px-20 font-14 fonts-600 cursor wx-330 ${
                            liTag === li.id ? 'active text-white radius-32 bg_primary2_75' : ''
                          } `}
                          onClick={() => setliTag(li.id)}
                        >
                          {li.name}
                        </li>
                      </>
                    )
                  })}
                </ul>
              </div>
              <div className='right_section pt-26 pb-125 pl-72 w-100'>
                <p className='font-36 fonts-600'>List of Solved Use Cases</p>
                <p className='text_black_25 font-14 fonts-600 pt-30'> Solved Use Cases</p>
                <ul className='pl-26 pt-40'>
                  {list2.map((li: any) => {
                    return (
                      <>
                        <Link to={`/use-cases/slug`}>
                          <li className={`cursor lilist font-16 fonts-500 text-black`}>
                            {li.name}
                            <hr className='li_border' />
                          </li>
                        </Link>
                      </>
                    )
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
