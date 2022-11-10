import React, { useState } from 'react'

interface Bet {
    icon: string
    category: string
    date: string
    hour: string
    homeName: string
    awayName: string
    bet1Name: string
    home1Name: string
    away1Name: string
    home1Odds: number
    away1Odds: number
    home1Percents: number
    away1Percents: number
    isBet2: boolean
    bet2Name: string | null
    home2Name: string | null
    away2Name: string | null
    home2Odds: number | null
    away2Odds: number | null
    home2Percents: number | null
    away2Percents: number | null
}

interface BetProps {
    bet: Bet
}

interface ButtonsClicked {
    home1Clicked: boolean
    away1Clicked: boolean
    home2Clicked: boolean
    away2Clicked: boolean
}

const BetCard = ({ bet }: BetProps) => {
    const {
        icon,
        category,
        date,
        hour,
        homeName,
        awayName,
        bet1Name,
        home1Name,
        away1Name,
        home1Odds,
        away1Odds,
        home1Percents,
        away1Percents,
        isBet2,
        bet2Name,
        home2Name,
        away2Name,
        home2Odds,
        away2Odds,
        home2Percents,
        away2Percents,
    } = bet

    const [activeButtons, setActiveButtons] = useState<ButtonsClicked>({
        home1Clicked: false,
        away1Clicked: false,
        home2Clicked: false,
        away2Clicked: false,
    })

    return (
        <div className='bet-card-container'>
            <div className='left-bet-card-container'>
                <div className='category-and-date-container'>
                    <div className='category-container'>
                        <img src={icon} alt='Icon Image' />
                        <p>{category}</p>
                    </div>
                    <div className='date-container'>
                        <p>
                            {date} {hour}
                        </p>
                    </div>
                </div>
                <div className='team-names'>
                    <h5>
                        {homeName}
                        <span className='team-gap' />
                        <span className='bold-minus'>-</span>
                        <span className='team-gap' />
                        {awayName}
                    </h5>
                </div>
            </div>
            <div className='middle-bet-card-container'>
                <div className='bet-1-name-container'>
                    <p>{bet1Name}</p>
                </div>
                <div className='bets-buttons-container'>
                    <div className='left-bets-buttons-container'>
                        <button
                            onClick={() => {
                                setActiveButtons((prevValue) => {
                                    return {
                                        ...prevValue,
                                        home1Clicked:
                                            !activeButtons.home1Clicked,
                                    }
                                })
                            }}
                            className={`${
                                activeButtons.home1Clicked ? 'active' : ''
                            }`}
                        >
                            <h5>{home1Name}</h5>
                            <h4>{home1Odds}</h4>
                        </button>
                        <div className='bet-percent'>
                            <span className='percent'>{home1Percents}%</span>
                            <div className='chart'>
                                <div
                                    className='chart-content'
                                    style={{ width: `${home1Percents}%` }}
                                ></div>
                            </div>
                        </div>
                    </div>
                    <div className='right-bets-buttons-container'>
                        <button
                            onClick={() => {
                                setActiveButtons((prevValue) => {
                                    return {
                                        ...prevValue,
                                        away1Clicked:
                                            !activeButtons.away1Clicked,
                                    }
                                })
                            }}
                            className={`${
                                activeButtons.away1Clicked ? 'active' : ''
                            }`}
                        >
                            <h5>{away1Name}</h5>
                            <h4>{away1Odds}</h4>
                        </button>
                        <div className='bet-percent'>
                            <span className='percent'>{away1Percents}%</span>
                            <div className='chart'>
                                <div
                                    className='chart-content'
                                    style={{ width: `${away1Percents}%` }}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className='right-bet-card-container'
                hidden={isBet2 ? false : true}
            >
                <div className='bet-2-name-container'>
                    <p>{bet2Name}</p>
                </div>
                <div className='bets-buttons-container'>
                    <div className='left-bets-buttons-container'>
                        <button
                            onClick={() => {
                                setActiveButtons((prevValue) => {
                                    return {
                                        ...prevValue,
                                        home2Clicked:
                                            !activeButtons.home2Clicked,
                                    }
                                })
                            }}
                            className={`${
                                activeButtons.home2Clicked ? 'active' : ''
                            }`}
                        >
                            <h5>{home2Name}</h5>
                            <h4>{home2Odds}</h4>
                        </button>
                        <div className='bet-percent'>
                            <span className='percent'>{home2Percents}%</span>
                            <div className='chart'>
                                <div
                                    className='chart-content'
                                    style={{ width: `${home2Percents}%` }}
                                ></div>
                            </div>
                        </div>
                    </div>
                    <div className='right-bets-buttons-container'>
                        <button
                            onClick={() => {
                                setActiveButtons((prevValue) => {
                                    return {
                                        ...prevValue,
                                        away2Clicked:
                                            !activeButtons.away2Clicked,
                                    }
                                })
                            }}
                            className={`${
                                activeButtons.away2Clicked ? 'active' : ''
                            }`}
                        >
                            <h5>{away2Name}</h5>
                            <h4>{away2Odds}</h4>
                        </button>
                        <div className='bet-percent'>
                            <span className='percent'>{away2Percents}%</span>
                            <div className='chart'>
                                <div
                                    className='chart-content'
                                    style={{ width: `${away2Percents}%` }}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className='right-bet-card-container'></div> */}
        </div>
    )
}

export default BetCard
