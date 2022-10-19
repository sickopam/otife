import React from 'react'
import Yoda from '../Images/yoda.jpeg'

export default function Enrollment() {
  return (
    <div className='h-auto grid place-items-center bg-black'>
        <img className='h-screen w-screen' src={Yoda} alt='yoda'></img>
    </div>
  )
}
