import { useState } from 'react'
import { Link } from 'react-router-dom'
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
                    <a>
                        <Link to='/betclic-clone'>
                            <span>BETCLIC.</span>
                        </Link>
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
                                    <Link
                                        to='/betclic-clone'
                                        className={`${
                                            currentPage === 'home'
                                                ? 'active'
                                                : ''
                                        }`}
                                    >
                                        ZAKŁADY
                                    </Link>
                                </a>
                            </li>
                            <li>
                                <a
                                    className={`live-category ${
                                        currentPage === 'live' ? 'active' : ''
                                    }`}
                                >
                                    <Link
                                        to='/betclic-clone/live'
                                        className={`${
                                            currentPage === 'live'
                                                ? 'active'
                                                : ''
                                        }`}
                                    >
                                        NA ŻYWO
                                    </Link>{' '}
                                    <div className='live-label'>
                                        <p>0</p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a
                                    className={`${
                                        currentPage === 'promo' ? 'active' : ''
                                    }`}
                                >
                                    <Link
                                        to='/betclic-clone/promotion'
                                        className={`${
                                            currentPage === 'promo'
                                                ? 'active'
                                                : ''
                                        }`}
                                    >
                                        PROMOCJE
                                    </Link>
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
