// import {useIntl} from 'react-intl'
// import {PageTitle} from 'sr/layout/master-layout'
import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import {
  AIBackGroundImage,
  BannerImage,
  BannerImageArchitecture,
  BannerImageBg,
  BannerImageIcon,
  BuildingCoins,
  Button,
  FileListShield,
  HomeCard1,
  HomeCard2,
  HomeCard3,
  HomeCard4,
  HomeDesign,
  HomeShield,
  KTSVG,
  MaskGroup,
  MaskGroupDesign,
  RightArrowPimary,
  RightArrowWhite,
  WhySwooshLogo,
} from 'sr/helpers'
import {KTIMG} from 'sr/helpers/ui-components/KTIMG'
import {usePageData} from 'sr/layout/master-layout'

// type Props = {}

const DashboardPage = () => {
  useEffect(() => {
    // We have to show toolbar only for dashboard page
    // document.getElementById('kt_layout_toolbar')?.classList.remove('d-none')
    // return () => {
    //   document.getElementById('kt_layout_toolbar')?.classList.add('d-none')
    // }
  }, [])

  return (
    <>
      {/* begin::tabs */}
      <section className='banner_section' data-testid={'dashboard-1'}>
        <div className='container-fluid'>
          <div
            className='row p-0 banner_img text-center'
            style={{backgroundImage: `url(${BannerImageBg})`}}
          >
            <div className='w-100  hx-36  mt-85'>
              <KTIMG className='p-0' path={BannerImageIcon} alt='Main Banner' />
            </div>
            <p className='font-24 fonts-500 text-white pt-15 pb-40'>
              Artificial Intelligence Platform
            </p>
            <KTIMG
              className='w-75 m-auto pb-60'
              path={BannerImageArchitecture}
              alt='architecture'
            />
          </div>
        </div>
      </section>
      <section className='why_swoosh' data-testid={'why_swoosh'}>
        <div className='container'>
          <div className='row pt-60'>
            <div className='col-md-12 d-flex flex-row justify-content-center align-items-center'>
              <p className='font-48 fonts-400 mr-10 '>Why</p>
              <p className='font-40 fonts-700'>
                <KTSVG svgClassName='text_primary' path={WhySwooshLogo} />
              </p>
            </div>
          </div>
          <div className='row pb-50'>
            <div className='col-md-12 d-flex flex-row justify-content-center align-items-center'>
              <p className='font-18 fonts-500 text-center m-auto content_header'>
                Any Template . Any Format. Any Source. Simple Drag and Drop Interface that helps to
                convert unstructured data to structured and more..
              </p>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-12 d-flex justify-content-center flex-gap-50'>
              <div className='icon_content bg_secondary_35 active rounded-circle wx-100 hx-100 p-30'>
                <KTSVG svgClassName='text_primary' path={HomeShield} />
              </div>
              <div className='icon_content bg_secondary_35  rounded-circle wx-100 hx-100 p-30'>
                <KTSVG svgClassName='text_primary' path={BuildingCoins} />
              </div>
              <div className='icon_content bg_secondary_35  rounded-circle wx-100 hx-100 p-30'>
                <KTSVG svgClassName='text_primary' path={FileListShield} />
              </div>
            </div>
          </div>
          <div className='row mt-8 mb-65'>
            <div className='col-md-12 '>
              <p className='text-center text_primary font-24 fonts-500 pb-7'>Enterprise Grade</p>
              <p className='text-center font-18 fonts-500'>
                Robust. Reusable. Easy to use. Compliant to Bank Standards
              </p>
            </div>
          </div>
        </div>
        <div className='container' data-testid={'why_swoosh_card'}>
          <div className='why_swoosh_card pb-60' data-testid={'why_swoosh_card_child'}>
            <div
              className='card radius-8 card_gradient py-50 px-36 d-flex flex-row justify-content-between position-relative'
              // style={{backgroundImage: `url(${HomeCard2})`}}
            >
              <div className='z-index-10'>
                <p className='font-24 fonts-500 text-white text-capitalize'>Bazaar</p>
                <p className='font-16 fonts-500 text-white pt-15 pb-30 card_description'>
                  Powerful engines that helps in seamless API integration with KONG Gateway
                </p>
                <span className='hx-45 d-flex'>
                  <Button
                    className='px-28 font-16 fonts-500 text-white bg-transparent border border-white'
                    icon={RightArrowWhite}
                  >
                    Read More
                  </Button>
                </span>
              </div>
              <KTIMG
                path={HomeDesign}
                alt={''}
                className={'position-absolute image_class_vector z-index-1'}
              />
              <KTIMG
                path={HomeCard1}
                alt={''}
                className={'position-absolute image_class z-index-10'}
              />
            </div>
            <div
              className='card radius-8 card_gradient py-50 px-36 d-flex flex-row justify-content-between position-relative'
              // style={{backgroundImage: `url(${HomeCard2})`}}
            >
              <div className=''>
                <p className='font-24 fonts-500 text-white text-capitalize'>Under The Hood</p>
                <p className='font-16 fonts-500 text-white pt-15 pb-30 card_description'>
                  Powerful engines that helps in seamless API integration with KONG Gateway
                </p>
                <span className='hx-45 d-flex'>
                  <Button
                    className='px-28 font-16 fonts-500 text-white bg-transparent border border-white'
                    icon={RightArrowWhite}
                  >
                    Read More
                  </Button>
                </span>
              </div>
              <KTIMG
                path={HomeDesign}
                alt={''}
                className={'position-absolute image_class_vector'}
              />
              <KTIMG path={HomeCard2} alt={''} className={'position-absolute image_class'} />
            </div>
            <div
              className='card radius-8  why_swoosh_card_white py-50 px-36 d-flex flex-row justify-content-between position-relative'
              // style={{backgroundImage: `url(${HomeCard2})`}}
            >
              <div className=''>
                <p className='font-24 fonts-500 text-black text-capitalize'>Use Cases</p>
                <p className='font-16 fonts-500 text-black pt-15 pb-30 card_description'>
                  Checkout how SWOOSH solved the business challenges using AI with human centric
                  approach
                </p>
                <span className='hx-45 d-flex'>
                  <Button
                    className='px-28 font-16 fonts-500 bg-transparent text_primary'
                    icon={RightArrowPimary}
                  >
                    Read More
                  </Button>
                </span>
              </div>
              <KTIMG path={HomeCard3} alt={''} className={'position-absolute image_class'} />
            </div>
            <div
              className='card radius-8  why_swoosh_card_white py-50 px-36 d-flex flex-row justify-content-between position-relative'
              // style={{backgroundImage: `url(${HomeCard2})`}}
            >
              <div className=''>
                <p className='font-24 fonts-500 text-black text-capitalize'>Mayabot</p>
                <p className='font-16 fonts-500 text-black pt-15 pb-30 card_description'>
                  Algorithms which allows to reproduce human intelligence, behaviour and
                  conversations.
                </p>
                <span className='hx-45 d-flex'>
                  <Button
                    className='px-28 font-16 fonts-500 bg-transparent text_primary'
                    icon={RightArrowPimary}
                  >
                    Read More
                  </Button>
                </span>
              </div>
              <KTIMG path={HomeCard4} alt={''} className={'position-absolute image_class_4'} />
            </div>
          </div>
        </div>
      </section>
      <section
        className='conversational_ai container-fluid position-relative p-0 '
        data-testid={'conversationalAI'}
      >
        <div className=''>
          <div className='ai_banner hx-465' style={{backgroundImage: `url(${AIBackGroundImage})`}}>
            <div className='ai_heading text-center pt-55 pb-24'>
              <p className='font-36 fonts-400 text-white'>Conversational AI Transforms Insurance</p>
              <p className='font-16 fonts-500 text-white m-auto py-10'>
                When Swoosh teams up with human colleagues to solve challenges for insurance
                providers and customers, she delivers world-class service and measurable results.
              </p>
            </div>
            <div className='container'>
              <div
                className='ai_cards position-absolute px-75 mb-60 row'
                data-testid='conversationalAICard'
              >
                <div data-testid={'card_test'} className='cards_detailed pr-50'>
                  <p className='font-40 fonts-600 text-white'>1.5x</p>
                  <p className='font-26 fonts-600 text-white'>Banks</p>
                  <p className='font-16 fonts-500 text-white'>
                    Algorithms which allows to reproduce human intelligence, behaviour and
                    conversations.
                  </p>
                </div>
                <div data-testid={'card_test'} className='cards_detailed pr-50'>
                  <p className='font-40 fonts-600 text-white'>2.5M</p>
                  <p className='font-26 fonts-600 text-white'>End User</p>
                  <p className='font-16 fonts-500 text-white'>
                    Algorithms which allows to reproduce human intelligence, behaviour and
                    conversations.
                  </p>
                </div>
                <div data-testid={'card_test'} className='cards_detailed pr-50'>
                  <p className='font-40 fonts-600 text-white'>63%</p>
                  <p className='font-26 fonts-600 text-white'>Recognition</p>
                  <p className='font-16 fonts-500 text-white'>
                    Algorithms which allows to reproduce human intelligence, behaviour and
                    conversations.
                  </p>
                </div>
                <div data-testid={'card_test'} className='cards_detailed pr-50'>
                  <p className='font-40 fonts-600 text-white'>15023</p>
                  <p className='font-26 fonts-600 text-white'>Employee</p>
                  <p className='font-16 fonts-500 text-white'>
                    Algorithms which allows to reproduce human intelligence, behaviour and
                    conversations.
                  </p>
                </div>
                <div data-testid={'card_test'} className='cards_detailed pr-50'>
                  <p className='font-40 fonts-600 text-white'>23</p>
                  <p className='font-26 fonts-600 text-white'>Hold Time</p>
                  <p className='font-16 fonts-500 text-white'>
                    Algorithms which allows to reproduce human intelligence, behaviour and
                    conversations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className='ai_bot container pb-30 mt-75' data-testid={'chatbotId'}>
        <div className='ai_bot_card radius-8 card_gradient py-40 px-70 position-relative'>
          <p className='font-36 fonts-500 text-white'>Looking for automate something?</p>
          <p className='font-18 fonts-500 pt-10 pb-20 desc text-white'>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium.
          </p>
          <Button
            className='px-28 font-16 fonts-500 text-white bg-transparent border border-white'
            icon='/media/icons/duotone/general/right-arrow.svg'
          >
            Read More
          </Button>
          <KTIMG path={MaskGroup} alt={''} className={'position-absolute bot_image'} />
          <KTIMG path={MaskGroupDesign} alt={''} className={'position-absolute bot_image_2'} />
        </div>
      </div>
      {/* end::tabs */}
    </>
  )
}

export default function DashboardWrapper() {
  // for using different languages and changing the text in to other languages
  // const intl = useIntl()
  const {setHeaderTitle} = usePageData()
  useEffect(() => {
    setHeaderTitle('Dashboard')
  }, [setHeaderTitle])

  return (
    <>
      {/* <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'MENU.DASHBOARD'})}</PageTitle> */}
      <DashboardPage />
    </>
  )
}
