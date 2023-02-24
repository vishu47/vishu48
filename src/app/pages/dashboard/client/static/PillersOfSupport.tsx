import {useState} from 'react'
import NavigationHeader from 'sr/partials/widgets/widgets-components/header/NavigationHeader'
import {
  BuildingCoins,
  FileListShield,
  FooterScnxt,
  HomeShield,
  KTSVG,
  Team,
  PillarsOfSupport1,
  PillarsOfSupport2,
  PillarsOfSupport3,
  RightArrowPimary,
  WhySwooshLogo,
  SCNXLogo,
  BotIcon,
  Airplay,
  Database,
  Brain,
  IconLeft,
  IconRight,
} from 'sr/helpers'
import {KTIMG} from 'sr/helpers/ui-components/KTIMG'
import CardWidget17 from 'sr/partials/widgets/widgets-components/cards/CardWidget17'

// type Props = {}

export default function PillersOfSupport() {
  const list = ['Pillar of support']
  const teams = [
    {
      id: 1,
      name: 'Demo Name',
      image: Team,
      email: 'demo@sc.com',
      social_links: ['facebook.com', 'instagram.com', 'twitter.com'],
    },
    {
      id: 2,
      name: 'Demo Name',
      image: Team,
      email: 'demo@sc.com',
      social_links: ['facebook.com', 'instagram.com', 'twitter.com'],
    },
    {
      id: 3,
      name: 'Demo Name',
      image: Team,
      email: 'demo@sc.com',
      social_links: ['facebook.com', 'instagram.com', 'twitter.com'],
    },
    {
      id: 4,
      name: 'Demo Name',
      image: Team,
      email: 'demo@sc.com',
      social_links: ['facebook.com', 'instagram.com', 'twitter.com'],
    },
    {
      id: 5,
      name: 'Demo Name',
      image: Team,
      email: 'demo@sc.com',
      social_links: ['facebook.com', 'instagram.com', 'twitter.com'],
    },
    {
      id: 6,
      name: 'Demo Name',
      image: Team,
      email: 'demo@sc.com',
      social_links: ['facebook.com', 'instagram.com', 'twitter.com'],
    },
  ]
  // state
  const [card, setCard] = useState<any>('')

  return (
    <div>
      <div className='pillerofsupport'>
        <div className=' bg_secondary_75 hx-40 m-auto'>
          <div className='container h-100 d-flex align-items-center'>
            <div className='navigation_header'>
              <NavigationHeader list={list} />
            </div>
          </div>
        </div>
        <div className='container px-100'>
          <div className='row'>
            <div className='col-md-6 pt-58'>
              <KTSVG className='hx-40' path={FooterScnxt} />
              <p className='font-20 fonts-600 text-primary'>Pillars of support </p>
            </div>
          </div>
          <div className='row pt-24'>
            <div className='col-md-6 pr-30'>
              <p className='font-20 fonts-500'>
                <span className='text-primary '>Our pillars of support</span>
                eget curabitur aliquam. Sagittis, id eu eget nisl. Dignissim vel et, egestas non vel
                vitae odio.
              </p>
            </div>
            <div className='col-md-6'>
              Our pillars of support eget curabitur aliquam. Sagittis, id eu eget nisl. Dignissim
              vel et, egestas non vel vitae odio. Dictum at lectus laoreet purus quis aliquet.
              Fermentum quis ipsum, elit pretium amet sem commodo. Sed leo sed ut nibh.
            </div>
          </div>
        </div>
        <div className='container-fluid pt-50'>
          <div className='row p-0'>
            <div className='col-md-7 py-0 pl-0 pr-6'>
              <KTIMG imgClassName='hx-480 w-100' path={PillarsOfSupport1} alt={''} />
            </div>
            <div className='col-md-5 p-0 pl-6 d-flex gap-1 flex-column'>
              <div className='row'>
                <KTIMG className='' imgClassName='hx-238 w-100' path={PillarsOfSupport2} alt={''} />
              </div>
              <div className='row'>
                <KTIMG className='' imgClassName='hx-238 w-100' path={PillarsOfSupport3} alt={''} />
              </div>
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='row pt-60'>
            <div className='col-md-12 d-flex flex-row justify-content-center align-items-center'>
              <p className='font-48 fonts-400 mr-10 '>Why</p>
              <p className='font-40 fonts-700'>
                <KTSVG svgClassName='text_primary' path={SCNXLogo} />
              </p>
            </div>
          </div>
          <div className='row pb-50'>
            <div className='col-md-12 d-flex flex-row justify-content-center align-items-center'>
              <p className='font-28 fonts-600 text-center m-auto content_header'>
                SCNxt has 4 highly integrated verticals
              </p>
            </div>
          </div>
          <div className='row why_scnxt'>
            <div className='col-md-12 d-flex justify-content-center flex-gap-50'>
              <div className='icon_content bg_secondary_35 active rounded-circle wx-100 hx-100 p-30'>
                <KTSVG svgClassName='text_primary' path={Brain} />
              </div>
              <div className='icon_content bg_secondary_35  rounded-circle wx-100 hx-100 p-30'>
                <KTSVG svgClassName='text_primary' path={Database} />
              </div>
              <div className='icon_content bg_secondary_35  rounded-circle wx-100 hx-100 p-30'>
                <KTSVG svgClassName='text_primary' path={BotIcon} />
              </div>
              <div className='icon_content bg_secondary_35  rounded-circle wx-100 hx-100 p-30'>
                <KTSVG svgClassName='text_primary' path={Airplay} />
              </div>
            </div>
          </div>
          <div className='row mt-8 mb-65 why_scnxtwhy_scnxt_trext'>
            <div className='col-md-12 pt-28'>
              <p className='text-center text_primary font-24 fonts-500 pb-7'>
                Data Science & Analytics
              </p>
              <div className='w-100 m-auto text-center d-flex justify-content-center description'>
                <p className='text-center font-18 fonts-500'>
                  Dignissim enim sit amet venenatis urna cursus eget nunc. Praesent elementum
                  facilisis leo vel fringilla est ullamcorper eget nulla. Fermentum et sollicitudin
                  ac orci phasellus egestas tellus.
                </p>
              </div>
            </div>
          </div>
          <div className='out_team pt-50'>
            <div className='d-flex justify-content-center align-items-center pb-64  px-100'>
              <p className='fonts-600 font-36 w-100 text-center pl-100'>Our incredible team</p>
              <div className='team_header d-flex justify-content-between align-items-center'>
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
            </div>
            <div className='card_section container px-100 pb-80'>
              <div className='teams_cards'>
                {teams.map((item: any) => {
                  return (
                    <>
                      <CardWidget17
                        className={'wx-340 hx-212 mb-12'}
                        image={item.image}
                        name={item.name}
                        id={item.id}
                        card={card}
                        email={item.email}
                        setCard={() => setCard(item.id)}
                        social={item.social_links}
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
  )
}
