import clsx from 'clsx'
import {Link} from 'react-router-dom'
import {KTIMG} from 'sr/helpers/ui-components/KTIMG'
import {useLayout} from 'sr/layout/master-layout'

const AdminFooter = () => {
  const {classes} = useLayout()
  return (
    <div className={'main_footer container-fluid d-flex flex-lg-column '} id=''>
      {/* <div
        className={clsx(
          'item_main_footer d-flex container flex-column flex-md-row align-items-start justify-content-between'
        )}
      >
        <div className='wx-150 xtract'>
          <p>Xtract</p>
          <ul>
            <li className='font-13 fonts-400'>
              <Link to='#'>Xtract Cheque</Link>
            </li>
            <li className='pt-10 font-13 fonts-400'>
              <Link to='#'>Xtract Cheque</Link>
            </li>
            <li className='pt-10 font-13 fonts-400'>
              <Link to='#'>Xtract Cheque</Link>
            </li>
          </ul>
          <p>More</p>
        </div>
        <div className='wx-150 Compare'>
          <p>Compare</p>
          <ul>
            <li className=' font-13 fonts-400'>
              <Link to='#'>Compare Cheque</Link>
            </li>
            <li className='pt-10 font-13 fonts-400'>
              <Link to='#'>Compare Cheque</Link>
            </li>
            <li className='pt-10 font-13 fonts-400'>
              <Link to='#'>Compare Cheque</Link>
            </li>
          </ul>
          <p>More</p>
        </div>
        <div className='wx-150 engines'>
          <p>AI Engines</p>
          <ul>
            <li className='font-13 fonts-400'>
              <Link to='#'>AI Engines Cheque</Link>
            </li>
            <li className='pt-10 font-13 fonts-400'>
              <Link to='#'>AI Engines Cheque</Link>
            </li>
            <li className='pt-10 font-13 fonts-400'>
              <Link to='#'>AI Engines Cheque</Link>
            </li>
          </ul>
          <p>More</p>
        </div>
        <div className='wx-150 contact'>
          <p>Contact</p>
          <ul>
            <li className='font-13 fonts-400'>
              <Link to='#'>Help</Link>
            </li>
            <li className='pt-10 font-13 fonts-400'>
              <Link to='#'>Implementation Request</Link>
            </li>
          </ul>
        </div>
        <div className='wx-150 others'>
          <p>Others</p>
          <ul>
            <li className='font-13 fonts-400'>
              <Link to='#'>Pillars of Support</Link>
            </li>
          </ul>
        </div>
      </div> */}
      <hr className='border_line' />
      <div className='container sub_main_header d-flex align-items-center justify-content-between px-80'>
        <div className='d-flex justify-content-start align-items-center'>
          <p className='pr-40 font-13 fonts-400'> &#169; Admin Standard Chartered Bank 2022</p>
          <p className='font-13 fonts-400'>Privacy Policy</p>
        </div>
        <div className='d-flex justify-content-end align-items-center'>
          <span className='d-flex hx-15'>
            <p className='text-uppercase me-2 font-13 fonts-400 p-0'>Powered By</p>
            <KTIMG path={'/media/img/png/scnxt.png'} alt='scnxt' />
          </span>
        </div>
      </div>
    </div>
  )
}

export {AdminFooter}
