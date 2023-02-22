import React, {useState, useEffect} from 'react'
import {Spinner} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {Button, HomepageSliderImage, Input, LoginBG, toAbsoluteUrl} from 'sr/helpers'
import {OnlyNumber} from 'sr/helpers/constants/Regex.Constants'
import {
  LoginPassword,
  LoginUserName,
  LoginUserNameLength,
} from 'sr/helpers/constants/ValidationConstatnt'
import Slider2 from 'sr/partials/widgets/widgets-components/sliders/Slider2'
import {useAuth} from './core/Auth'

export default function AuthPage() {
  const {setCurrentUser} = useAuth()
  const [username, setUsername] = useState<undefined | string>(undefined)
  const [password, setPassword] = useState<undefined | any>(undefined)
  const [error, setError] = useState<null | any>({username, password})
  const LoginAction = (e: any) => {
    e.preventDefault()
    console.log(error, error.username, error.password, password, username)
    setError({})
    if (username === undefined && password === undefined) {
      setError({
        username: LoginUserName,
        password: LoginPassword,
      })
    } else if (username === undefined) {
      setError({
        username: LoginUserName,
      })
    } else if (password === undefined) {
      setError({
        password: LoginPassword,
      })
    }
    if (username !== undefined) {
      if (OnlyNumber.test(username) === false || username.length !== 7) {
        setError({
          username: LoginUserNameLength,
        })
      }
    }
    // setCurrentUser({id: 888})
  }

  // useEffects
  useEffect(() => {
    document.getElementById('main_header')?.classList.add('d-none')
    document.getElementById('main_footer')?.classList.add('d-none')
    return () => {
      document.getElementById('main_header')?.classList.remove('d-none')
      document.getElementById('main_footer')?.classList.remove('d-none')
    }
  }, [])

  return (
    <>
      <section>
        <div className='container-fluid uw_011'>
          <div className='row min-h-screen'>
            <div
              className='col-md-7 col-sm-12 auth_left p-0 background_set'
              style={{backgroundImage: `url(${LoginBG})`}}
            >
              {/* <Slider2 /> */}
            </div>
            <div className='col-md-5 col-sm-12 auth_right'>
              <form className='h-100'>
                <div className='d-flex justify-content-center flex-column align-items-center h-100'>
                  <div className='fields w-75 m-auto d-flex flex-column justify-content-center align-items-start'>
                    <p className='font-18 fonts-400'>Welcome </p>
                    <p className='font-34 fonts-400'>Login to your account</p>
                    <div className='fields mt-40 wx-365'>
                      <Input
                        type='email'
                        label={'Bank Id'}
                        labelClass={'font-12 fonts-400 text_black_75'}
                        placeholder={'Bank Id...'}
                        onChange={(e: any) => {
                          setUsername(e.target.value)
                        }}
                        inputClass='bg-transparent radius-4 table_border w-100 font-14 fonts-400'
                        error={error.username}
                      />
                      <Input
                        type='password'
                        labelClass={'font-12 fonts-400 mt-12 text_black_75'}
                        label={'Password'}
                        placeholder={'Enter Password...'}
                        onChange={(e: any) => {
                          setPassword(e.target.value)
                        }}
                        inputClass='bg-transparent radius-4 table_border w-100 font-14 fonts-400'
                        error={error.password}
                      />
                      <Link to={'#'}>
                        <p className='font-14 fonts-400 pt-10 text_black_75'>Forgot Password ?</p>
                      </Link>
                      <Button
                        type={'ui-button-2'}
                        // onClick={() => {
                        //   OpenToggleSidebar()
                        // }}
                        onClick={(e: any) => {
                          LoginAction(e)
                        }}
                        className='d-flex justify-content-center font-16 w-100 mt-50 radius-4 fonts-400 px-20 py-12 blue_gradient'
                      >
                        Login
                      </Button>
                    </div>
                  </div>
                  <p className='font-14 fonts-400 text_black_75 pb-42 d-flex justify-content-start w-75'>
                    Don’t have an account
                    <Link to={'#'} className='pl-2'>
                      {' '}
                      Register Here
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
