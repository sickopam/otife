import React from 'react'
import '../App.css'
import { useNavigate } from 'react-router-dom'
import New from './New'
import Contacts from './Contacts'

export default function Home() {
    const nav = useNavigate()
  return (
    <>
    <div className='h-auto p-4 xl:p-10'>
        <div data-aos='fade-in' className=''>
            <div className='box grid place-items-center'>
                <h1 className='text-red-500 uppercase text-3xl font-oti font-semibold'>omahti press</h1>
            </div>
            <div className='box2 grid items-center'>
                <ul className='text-xs font-oti2 lg:text-base flex justify-between mx-12'>
                    <button onClick={() => { nav('/about') }} className='underlink'>ABOUT</button>
                    <button onClick={() => { nav('/research') }} className='underlink'>RESEARCH</button>
                    <button onClick={() => { nav('/events') }} className='underlink'>EVENTS</button>
                    <button onClick={() => { nav('/articles') }} className='underlink'>ARTICLES</button>
                    <button onClick={() => { nav('/books') }} className='underlink'>BOOKS</button>
                    <button onClick={() => { nav('/enrollment') }} className='underlink'>ENROLLMENT</button>
                    <button className='underlink'>SIGN IN/SIGN UP {'(tried so many times)'}</button>
                </ul>
            </div>
        </div>
        <div className='pt-12'>
            <h1 data-aos='fade-in' className='text-lg font-semibold font-oti'>Trending on Press</h1>
            <div data-aos='fade-in' className='pt-5 grid grid-cols-3 lg:grid-cols-5 gap-5'>
                <button className='card flex'>
                    <div className='layout duration-300 grid place-items-center'>
                        <h1>SEE CASE</h1>
                    </div>
                    <div className='p-5'>
                        <div className='py-4 text-2xs font-oti2 uppercase flex justify-between'>
                            <h1>event</h1>
                            <h1 className='text-gray-400'>3rd august, 2022</h1>
                        </div>
                        <div className='h-40 xl:h-52 bg-gray-200'></div>
                        <div className='pt-5'>
                            <p className='text-sm font-oti'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas augue lacus</p>
                        </div>
                    </div>
                </button>
                <button className='card flex'>
                    <div className='layout duration-200 grid place-items-center'>
                        <h1>SEE CASE</h1>
                    </div>
                    <div className='p-5'>
                        <div className='py-4 text-2xs font-oti2 uppercase flex justify-between'>
                            <h1>article</h1>
                            <h1 className='text-gray-400'>17th august, 2022</h1>
                        </div>
                        <div className='h-40 xl:h-52 bg-gray-200'></div>
                        <div className='pt-5'>
                            <p className='text-sm font-oti'>In vehicula rhoncus felis sed congue. Quisque eget</p>
                        </div>
                    </div>
                </button>
                <button className='card flex'>
                    <div className='layout duration-200 grid place-items-center'>
                        <h1>SEE CASE</h1>
                    </div>
                    <div className='p-5'>
                        <div className='py-4 text-2xs font-oti2 uppercase flex justify-between'>
                            <h1>research</h1>
                            <h1 className='text-gray-400'>1st july, 2022</h1>
                        </div>
                        <div className='h-40 xl:h-52 bg-gray-200'></div>
                        <div className='pt-5'>
                            <p className='text-sm font-oti'>Sed sit amet velit eleifend, laoreet lacus eu, porta eros. Pellentesque auctor auctoe acuse solani mur ect</p>
                        </div>
                    </div>
                </button>
                <button className='card flex'>
                    <div className='layout duration-200 grid place-items-center'>
                        <h1>SEE CASE</h1>
                    </div>
                    <div className='p-5'>
                        <div className='py-4 text-2xs font-oti2 uppercase flex justify-between'>
                            <h1>research</h1>
                            <h1 className='text-gray-400'>2nd july, 2022</h1>
                        </div>
                        <div className='h-40 xl:h-52 bg-gray-200'></div>
                        <div className='pt-5'>
                            <p className='text-sm font-oti'>Donec sit amet ornare augue. Nam quis nunc lectus.</p>
                        </div>
                    </div>
                </button>
                <button className='card flex'>
                    <div className='layout duration-200 grid place-items-center'>
                        <h1>SEE CASE</h1>
                    </div>
                    <div className='p-5'>
                        <div className='py-4 text-2xs font-oti2 uppercase flex justify-between'>
                            <h1>technology</h1>
                            <h1 className='text-gray-400'>1st august, 2022</h1>
                        </div>
                        <div className='h-40 xl:h-52 bg-gray-200'></div>
                        <div className='pt-5'>
                            <p className='text-sm font-oti'>Donec sit amet ornare augue. Na quis nunc lectus. Sed blandit tristique odio, sed aliquet</p>
                        </div>
                    </div>
                </button>
            </div>
            <div className='pt-12'>
                <div data-aos='fade-in' className='h-px w-full bg-black'></div>
            </div>
        </div>
    </div>
    <New/>
    <Contacts/>
    </>
  )
}

