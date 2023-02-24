import {useAuth} from 'app/pages/module/auth'
import UserLogin from 'app/pages/module/auth/UserLogin'
import {FC, useState} from 'react'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {Button, HeaderLogo, KTSVG} from 'sr/helpers'
import {ActionUserLogin} from 'sr/redux/client/actions/UserLoginAction'
import {HeaderSearch} from '../../../../helpers/constants/ImageConstant'
import {MenuItem} from '../MenuItem'

const MainHeader: FC = () => {
  // provider
  const {currentUser} = useAuth()

  // url
  const navigate = useNavigate()
  // redux
  const dispatch = useDispatch()
  // states
  // functions
  // useEffects
  return (
    <div id='hr_header_menu' className='w-100' data-testid={'mainHeader'}>
      {/* {loginPopUp ? (
        <UserLogin
          setBankId={setBankId}
          setPassword={setPassword}
          close={CloseToggleSidebar}
          LoginUserAction={LoginUserAction}
        />
      ) : (
        ''
      )} */}
      <div className='d-flex justify-content-between align-items-center gap-2'>
        <div className='logo'>
          <MenuItem className='wx-150' image={HeaderLogo} to='/dashboard' hasPadding={false} />
        </div>
        <div className='middle d-flex justify-content-between align-items-center flex-row gap-22'>
          <MenuItem to={'/dashboard'} titleClass={'font-16 fonts-500'} title={'About'} />
          <MenuItem to={'/under-the-hood'} titleClass={'font-16'} title={'Under The Hood'} />
          <MenuItem to={'/bazaar'} titleClass={'font-16'} title={'Bazaar'} />
          <MenuItem to={'/use-cases'} titleClass={'font-16'} title={'Use Cases'} />
          <MenuItem to={'/help'} titleClass={'font-16'} title={'Help'} />
          {/* <MenuItem to={'/ai-engines'} titleClass={'font-16'} title={'AI Eng'} /> */}
          <MenuItem
            to={'/pillers-of-support'}
            titleClass={'font-16'}
            title={'Pillars fo Support'}
          />
          {/* <MenuItem to={'/admin'} titleClass={'font-16'} title={'Admin'} /> */}
        </div>
        <div className='right d-flex align-items-center'>
          <span className='border_right '>
            <KTSVG svgClassName='text-white cursor' path={HeaderSearch} />
          </span>
          {!currentUser ? (
            <Button
              type={'ui-button-2'}
              onClick={() => {
                navigate('/auth')
              }}
              className='font-14 fonts-500 px-20 py-12 bg_primary pl-35'
            >
              Login Now
            </Button>
          ) : (
            <span>
              <KTSVG
                svgClassName='text-white cursor'
                path={'/media/icons/duotone/general/avatar.svg'}
              />
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

export {MainHeader}
