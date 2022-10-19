import React from 'react'
import Dog from '../Images/dog.jpeg'

export default function About() {
  return (
    <div className='h-auto grid place-items-center bg-black'>
        <img className='h-screen w-screen' src={Dog} alt='dog'></img>
    </div>
  )
}
