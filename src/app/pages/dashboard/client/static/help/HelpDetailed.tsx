import React, {useState} from 'react'
import {BannerImageBg, Help1Banner, KTSVG, UseCaseSearchIcon, UseCasesImageBanner} from 'sr/helpers'
import NavigationHeader from 'sr/partials/widgets/widgets-components/header/NavigationHeader'
import Help1 from 'sr/partials/widgets/widgets-components/help/HelpWidget1'
import Search1 from 'sr/partials/widgets/widgets-components/search/Search1'

export default function HelpDetailed() {
  const [card, setCard] = useState<any>('')
  const [liTag, setliTag] = useState<any>('')

  const list = ['Help Center', 'Text Related Capabilities']
  const cards = [
    {
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry printing and typesetting industry. ',
      id: 1,
      title: 'Xtract Cheque',
      number: '80N',
    },
    {
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry printing and typesetting industry. ',
      id: 2,
      title: 'Xtract Cheque',
      number: '1000hrs',
    },
    {
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry printing. ',
      id: 3,
      title: 'Xtract Cheque',
      number: '150%',
    },
  ]
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
    {id: 7, url: '#', name: 'Regulatory Automated Responses Efficiency (R.A.R.E) '},
  ]
  const list3 = [
    {id: 1, url: '#', name: 'What is swoosh?'},
    {
      id: 2,
      url: '#',
      name: 'How is swoosh different from other Machine Learning products available in the bank?',
    },
    {id: 3, url: '#', name: 'How many API???s does swoosh have? Do you have API Documentation?'},
    {id: 4, url: '#', name: 'I would like to know more about swoosh? Who should I contact?'},
  ]

  return (
    <>
      <div className='usecasesdetailed'>
        <div className=' bg_secondary_75 hx-40 m-auto'>
          <div className='container h-100 d-flex align-items-center'>
            <div className='navigation_header'>
              <NavigationHeader list={list} />
            </div>
          </div>
        </div>
        <div className='container'>
          <Search1
            title={'Ask sandy self service chatboat'}
            description={
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
            }
            bgImage={BannerImageBg}
          />
        </div>
        <div className='container px-100 pt-52'>
          <div className='list_section d-flex'>
            <div className='right_section pt-26 pb-125 pr-86 w-100'>
              <p className='font-36 fonts-600 pure-black'>Searching Text related capabilities</p>
              <p className='text-primary font-20 fonts-600'>What is Swoosh ?</p>
              <p className='font-12 fonts-400 pt-42 pb-30'>
                You can talk about the data discrepancy and need of manual process to get automated
                You can talk about the data discrepancy and need of manual process to get automated
                You can talk about the data discrepancy and need of manual process to get automated
              </p>
              <div
                className='hx-132 radius-12'
                style={{backgroundImage: `url(${Help1Banner})`}}
              ></div>
              <p className='font-12 fonts-400 pb-30 pt-30'>
                You can talk about the data discrepancy and need of manual process to get automated
                You can talk about the data discrepancy and need of manual process to get automated
                You can talk about the data discrepancy and need of manual process to get automated
              </p>
              <p className='font-12 fonts-400 pb-30'>
                You can talk about the data discrepancy and need of manual process to get automated
                You can talk about the data discrepancy and need of manual process to get automated
                You can talk about the data discrepancy and need of manual process to get automated
              </p>
              <p className='font-12 fonts-400 pb-90'>
                You can talk about the data discrepancy and need of manual process to get automated
                You can talk about the data discrepancy and need of manual process to get automated
                You can talk about the data discrepancy and need of manual process to get automated
              </p>
            </div>
            <div className='left_section pt-52 py-30'>
              <KTSVG
                className='ml-20 p-14 bg_secondary_75 rounded-circle hx-46 wx-46'
                path={UseCaseSearchIcon}
              />
              <p className='pb-20 font-20 fonts-600 px-25 pt-32 pure-black'>
                Searching Text related capabilities
              </p>
              <ul>
                {list1.map((li: any) => {
                  return (
                    <>
                      <li
                        className={`lilist py-13 px-30 font-14 fonts-600 cursor wx-330 ${
                          liTag === li.id
                            ? 'active text-white radius-32 bg_primary2_75'
                            : 'pure-black'
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
          </div>
        </div>
        <div className='mt-30'>
          <Help1 />
        </div>
      </div>
    </>
  )
}
