import React, { useState } from 'react'
import winnerPNG from '../assets/winner.png'

type ButtonType = 'btn-single' | 'btn-ako' | 'btn-system'

interface RightbarProps {
    setIsCouponOpen: Function
    isCouponOpen: boolean
}
const RightBar = ({ setIsCouponOpen, isCouponOpen }: RightbarProps) => {
    const [currentButton, setCurrentButton] = useState<ButtonType>('btn-system')

    return (
        <div className='right-bar-over'>
            <div
                className={`right-bar-container ${
                    isCouponOpen ? 'active' : ''
                }`}
            >
                <div className='right-bar-header-container'>
                    <div className='mobile-container'>
                        <div
                            className='mobile-slider'
                            onClick={() => {
                                setIsCouponOpen(false)
                            }}
                        ></div>
                    </div>
                    <h4>
                        <i className='fa-solid fa-cart-shopping'></i> Kupon
                    </h4>
                    <div className='buttons-container'>
                        <button
                            className={`btn-single ${
                                currentButton === 'btn-single' ? 'active' : ''
                            }`}
                            onClick={() => {
                                setCurrentButton('btn-single')
                            }}
                        >
                            Pojedyncze
                        </button>
                        <button
                            className={`btn-ako ${
                                currentButton === 'btn-ako' ? 'active' : ''
                            }`}
                            onClick={() => {
                                setCurrentButton('btn-ako')
                            }}
                        >
                            AKO
                        </button>
                        <button
                            className={`btn-system ${
                                currentButton === 'btn-system' ? 'active' : ''
                            }`}
                            onClick={() => {
                                setCurrentButton('btn-system')
                            }}
                        >
                            System
                        </button>
                    </div>
                </div>
                <div className='right-bar-content-container'>
                    <div className='no-bets-container'>
                        <img src={winnerPNG} alt='Trophy Image' />
                        <h3>Dodaj swój pierwszy zakład!</h3>
                        <p>
                            Nie masz żadnych zakładów. Kliknij kursy aby dodać
                            zakłady.
                        </p>
                        <button className='btn-all-bets'>
                            Wszystkie zakłady
                        </button>
                    </div>
                </div>
                <div className='right-bar-footer-container'>
                    <div className='top-container'>
                        <p>Łączna stawka:</p>
                        <span>0,00 zł</span>
                    </div>
                    <div className='middle-container'>
                        <p>Ewentualna wygrana:</p>
                        <i className='fa-regular fa-circle-question'></i>
                        <span>0,00 zł</span>
                    </div>
                    <div className='bottom-container'>
                        <p>Współczynnik 0.88</p>
                    </div>
                    <div className='button-container'></div>
                    <div className='button-container'>
                        <button className='btn-bet'>Obstaw</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RightBar
