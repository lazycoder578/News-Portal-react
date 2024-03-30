import React from 'react'
import logo from '../../../assets/logo.png'
import moment from 'moment';

export default function Header() {
  return (
    <div className='text-center'>
        <img className='mx-auto my-2' src={logo} alt="" />
        <p>Journalism Without Fear or Favour</p>
        <p className='text-xl my-2'>{moment().format('dddd, MMMM D, YYYY, h:mm:ss a')}</p>
    </div>
  )
}
