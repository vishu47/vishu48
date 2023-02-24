import {FC} from 'react'
import {Button, KTSVG} from 'sr/helpers'
import {MenuItem} from '../MenuItem'

const AdminHeader: FC = () => {
  return (
    <div id='hr_header_menu' className='w-100'>
      <div className='d-flex justify-content-between align-items-center gap-2'>
        <div className='logo'>
          <MenuItem
            className='wx-150'
            image={'/media/img/png/logo.png'}
            to='/dashboard'
            hasPadding={false}
          />
        </div>
        {/* <div className='middle d-flex justify-content-between align-items-center flex-row gap-22'>
          <MenuItem to={'/dashboard'} titleClass={'font-16 fonts-500'} title={'About'} />
          <MenuItem to={'/about'} titleClass={'font-16'} title={'Under The Hood'} />
          <MenuItem to={'/about'} titleClass={'font-16'} title={'Bazaar'} />
          <MenuItem to={'/about'} titleClass={'font-16'} title={'Use Cases'} />
          <MenuItem to={'/about'} titleClass={'font-16'} title={'Help'} />
          <MenuItem to={'/about'} titleClass={'font-16'} title={'Pillars fo Support'} />
        </div> */}
        <div className='right d-flex align-items-center'>
          <Button
            type={'ui-button-2'}
            className='font-14 fonts-500 px-20 py-12 bg_primary'
            icon={'/media/icons/duotone/general/cancel-4.svg'}
          >
            Admin Login
          </Button>
        </div>
      </div>
    </div>
  )
}

export {AdminHeader}
