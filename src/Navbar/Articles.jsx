import React from 'react'
import Donk from '../Images/donk.webp'

export default function Articles() {
  return (
    <div className='h-auto grid place-items-center bg-black'>
        <img className='h-screen w-screen' src={Donk} alt='donk'></img>
    </div>
  )
}
