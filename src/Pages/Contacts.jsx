import React from 'react'

export default function Contacts() {
  return (
    <div className='h-auto ccard p-16'>
        <div className='text-white font-oti font-semibold text-xl'>
            <div className='flex justify-evenly'>
                <div className='space-y-7'>
                    <h1 data-aos='fade-in'>Information</h1>
                    <div data-aos='fade-in' className='font-oti2 text-sm space-y-7 font-light'>
                        <h2 className='whitelink w-fit'>About</h2>
                        <h2 className='whitelink w-fit'>Contact</h2>
                        <h2 className='whitelink w-fit'>Enrollment</h2>
                        <h2 className='whitelink w-fit'>Cookie Policy</h2>
                        <h2 className='whitelink w-fit'>Terms and Conditions</h2>
                        <h2 className='whitelink w-fit'>Privacy Policy</h2>
                    </div>
                </div>
                <div className='px-8 xl:px-24 space-y-7'>
                    <h1 data-aos='fade-in'>Follow Us</h1>
                    <div data-aos='fade-in' className='font-oti2 text-sm space-y-7 font-light'>
                        <h2 className='whitelink w-fit'>Facebook</h2>
                        <h2 className='whitelink w-fit'>Instagram</h2>
                        <h2 className='whitelink w-fit'>Twitter</h2>
                    </div>
                </div>
                <div data-aos='fade-in' className='h-auto w-px bg-white'/>
                <div className='font-oti text-sm w-1/2 xl:w-1/4 px-4 xl:px-0'>
                    <p data-aos='fade-in' className='pb-8'>Subscribe to Gadjah Mada University’s digital newsletter for your daily digest of essential news, directly to your inbox.</p>
                    <div data-aos='fade-in'>
                        <button className='btn hover:bg-white duration-300'>
                            <h1 className='text-2xs font-oti2 font-light btntxt'>SUBSCRIBE</h1>
                        </button>
                    </div>
                </div>
                <div data-aos='fade-in' className='h-auto w-px bg-white'/>
                <div className='font-oti text-sm w-1/2 xl:w-1/4 px-4 xl:px-0'>
                    <p data-aos='fade-in' className='pb-8'>Gadjah Mada University ’s content platforms can help you reach an informed cultural and creative professionals.</p>
                    <p data-aos='fade-in'>For more information, contact: <a className='text-red-700 redlink' href='mailto:placeholder@mail.ugm.ac.id'>placeholder@mail.ugm.ac.id</a></p>
                </div>
            </div>
        </div>
    </div>
  )
}
