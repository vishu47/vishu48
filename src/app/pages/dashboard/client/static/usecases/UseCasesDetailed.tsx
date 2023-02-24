import React, {useState} from 'react'
import {
  BannerImageBg,
  DetailedVideo,
  IconLeft,
  IconRight,
  Input,
  KTSVG,
  RightArrowPimary,
  UseCasesImageBanner,
} from 'sr/helpers'
import CardWidget13 from 'sr/partials/widgets/widgets-components/cards/CardWidget13'
import CardWidget16 from 'sr/partials/widgets/widgets-components/cards/CardWidget16'
import NavigationHeader from 'sr/partials/widgets/widgets-components/header/NavigationHeader'
import Search1 from 'sr/partials/widgets/widgets-components/search/Search1'

export default function UseCasesDetailed() {
  const [card, setCard] = useState<any>('')

  const list = ['Help Center', 'List of Solved Usecases']
  const cards = [
    {
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesettiPng industry printing and typesetting industry. ',
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
            leftImage={false}
            title={'We pioneered to solve the business problems'}
            description={
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
            }
            bgImage={BannerImageBg}
          />
        </div>
        <div className='container px-100 pt-52'>
          <p className='font-36 fonts-600'>List of Solved Use Cases</p>
          <div className='row pt-43'>
            <div className='col-md-5 col-sm-6'>
              <div className='radius-12'>
                <video
                  className='radius-12'
                  width='460'
                  height='258
                '
                  autoPlay
                  muted
                  loop
                >
                  <source src={DetailedVideo} type='video/mp4' />
                </video>
              </div>
            </div>
            <div className='col-md-7 col-sm-6 pl-38 pt-12 d-flex align-items-center flex-column text-start'>
              <p className='font-20 fonts-600 text-primary pb-21 w-100'>
                Single Customer Identifier (SCI) - Address Comparison
              </p>
              <p className='font-18 fonts-500 text-start w-100 pb-14'>Business Challenge</p>
              <p className='font-14 fonts-400 text-black-75'>
                You can talk about the data discrepancy and need of manual process to get automated
                You can talk about the data discrepancy and need of manual process to get automated
                You can talk about the data discrepancy and need of manual process to get automated
              </p>
            </div>
          </div>
          <div className='description py-45'>
            <p className='font-18 fonts-500'>Solution</p>
            <p className='font-14 fonts-400 py-25 pb-40'>
              You can talk about the data discrepancy and need of manual process to get automated
              You can talk about the data discrepancy and need of manual process to get automated
              You can talk about the data discrepancy and need of manual process to get automated
            </p>
            <div className='solution_card'>
              <ul className='table_border py-23 px-42 radius-10'>
                <li className='font-14 fonts-400 py-25 text-black-50 p-0'>
                  1. Fliers and business cards can be tacked on such bulletin boards. <br /> 2. But
                  before doing so, check out with the human resource department <br />
                  3. Parents are required to be in regular touch with the teachers to know <br />
                  4. Do not miss this opportunity and spread the word. Hand them the business card
                </li>
              </ul>
              <p className='py-35'>
                You can talk about the data discrepancy and need of manual process to get automated
                You can talk about the data discrepancy and need of manual process to get automated
                You can talk about the data discrepancy and need of manual process to get automated
              </p>
            </div>
            <p className='font-18 fonts-500'>Problem Reuses</p>
            <p className='font-14 fonts-400 py-25 pb-40'>
              You can talk about the data discrepancy and need of manual process to get automated
              You can talk about the data discrepancy and need of manual process to get automated
              You can talk about the data discrepancy and need of manual process to get automated
            </p>
            <div className='solution_card'>
              <ul className='table_border py-23 px-42 radius-10'>
                <li className='font-14 fonts-400 py-25 text-black-50 p-0'>
                  1. Fliers and business cards can be tacked on such bulletin boards. <br /> 2. But
                  before doing so, check out with the human resource department <br />
                  3. Parents are required to be in regular touch with the teachers to know <br />
                  4. Do not miss this opportunity and spread the word. Hand them the business card
                </li>
              </ul>
              <p className='py-35'>
                You can talk about the data discrepancy and need of manual process to get automated
                You can talk about the data discrepancy and need of manual process to get automated
                You can talk about the data discrepancy and need of manual process to get automated
              </p>
            </div>
            <div className='try_related_cases pt-30'>
              <div className='ty_header d-flex justify-content-between pb-24 align-items-center'>
                <p className='font-20 fonts-600'>Try Related Use Cases</p>
                <div className='d-flex justify-content-center'>
                  <KTSVG
                    svgClassName={'wx-10 hx-10'}
                    className='p-14 cursor mr-4 bg_secondary_35 text-black rounded-circle'
                    path={IconRight}
                  />
                  <KTSVG
                    svgClassName={'wx-10 hx-10'}
                    className='p-14 cursor bg_secondary_35  rounded-circle '
                    path={IconLeft}
                  />
                </div>
              </div>
              <div className='try_card_section w-100 '>
                <div className='try_card_section_child'>
                  {cards.map((item: any) => {
                    return (
                      <>
                        <CardWidget16
                          className={'wx-352 mr-32 '}
                          description={item.description}
                          title={item.title}
                          number={item.number}
                          id={item.id}
                          card={card}
                          setCard={() => setCard(item.id)}
                        />
                      </>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
