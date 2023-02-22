import {Carousel} from 'react-bootstrap'
import {Button, Input, KTSVG} from 'sr/helpers'

type Props = {close: () => void; LoginUserAction: () => void; setPassword: any; setBankId: any}

export default function CardWidget10({close, LoginUserAction, setBankId, setPassword}: Props) {
  // useeffects
  return (
    <>
      <div className='row login_card'>
        <div className='col-md-6'></div>
        <div className='col-md-6 h-full'>
          <div className='d-flex justify-content-end'>
            <KTSVG className='cursor' path={'/media/icons/duotone/general/cancel.svg'} />
          </div>
          <p>Login With Your Credentials</p>
          <form onSubmit={LoginUserAction}>
            <Input
              type={'text'}
              placeholder={'Bank Id'}
              onChange={(e: any) => {
                setBankId(e.target.value)
              }}
            />
            <Input
              type={'password'}
              placeholder={'Bank Id'}
              onChange={(e: any) => {
                setPassword(e.target.value)
              }}
            />
            <Button type={'ui-button-2'} className='font-14 fonts-500 px-20 py-12 bg_primary'>
              Login Now
            </Button>
          </form>
        </div>
      </div>
    </>
  )
}
