import React from 'react'
import CardWidget10 from 'sr/partials/widgets/widgets-components/cards/CardWidget10'

type Props = {
  setPassword: any
  setBankId: any
  close: () => void
  LoginUserAction: () => void
}

export default function UserLogin({close, setBankId, setPassword, LoginUserAction}: Props) {
  // url
  // redux
  // states
  // functions
  // useeffects

  return (
    <>
      <div className='user_login'>
        <CardWidget10
          setBankId={setBankId}
          setPassword={setPassword}
          close={close}
          LoginUserAction={LoginUserAction}
        />
      </div>
    </>
  )
}
