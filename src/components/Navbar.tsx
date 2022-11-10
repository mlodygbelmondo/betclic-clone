import { useState } from 'react'

import { GiHamburgerMenu } from 'react-icons/gi'
import { MdClose } from 'react-icons/md'
import { ImSun } from 'react-icons/im'
import { BsFillMoonFill } from 'react-icons/bs'

type CurrentPage = 'home' | 'live' | 'promo'

interface NavProps {
    currentPage: CurrentPage
}

const Navbar = ({ currentPage }: NavProps) => {
    const [navState, setNavState] = useState<boolean>(false)
    const html = document.querySelector('html')
    html?.addEventListener('click', () => {
        setNavState(false)
    })
    return (
        <nav>
            <div className='container py-3 mx-3'>
                <div className='brand'>
                    <a href='/betclic-clone'>
                        <span>BETCLIC.</span>
                    </a>
                    <div className='hr'></div>
                    <div className='links'>
                        <ul>
                            <li>
                                <a
                                    href='/betclic-clone'
                                    className={`${
                                        currentPage === 'home' ? 'active' : ''
                                    }`}
                                >
                                    ZAKŁADY
                                </a>
                            </li>
                            <li>
                                <a
                                    href='/betclic-clone/live'
                                    className={`live-category ${
                                        currentPage === 'live' ? 'active' : ''
                                    }`}
                                >
                                    NA ŻYWO{' '}
                                    <div className='live-label'>
                                        <p>0</p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a
                                    href='/betclic-clone/promotion'
                                    className={`${
                                        currentPage === 'promo' ? 'active' : ''
                                    }`}
                                >
                                    PROMOCJE
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div
                    className='links-container'
                    onClick={(e) => {
                        e.stopPropagation()
                    }}
                >
                    <button className='login'>Zaloguj się</button>
                    <button className='register'>Zarejestruj się</button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
