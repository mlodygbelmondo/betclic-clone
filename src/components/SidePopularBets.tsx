import React from 'react'
import circlePlaceholder from '../assets/circle.webp'
import csgoPNG from '../assets/popularbets/shooting.png'
import soccerPNG from '../assets/popularbets/football.png'
import polandPNG from '../assets/popularbets/flags/poland.png'
import germanyPNG from '../assets/popularbets/flags/germany.png'
import spainPNG from '../assets/popularbets/flags/spain.png'
import italyPNG from '../assets/popularbets/flags/italy.png'
import englandPNG from '../assets/popularbets/flags/england.png'
import francePNG from '../assets/popularbets/flags/france.png'
import europePNG from '../assets/popularbets/flags/european-union.png'

interface Popularbet {
    icon: string
    title: string
}

const SidePopularBets = () => {
    const popularbets: Popularbet[] = [
        { icon: europePNG, title: 'Najpopularniejsze Ligi Europejskie' },
        { icon: polandPNG, title: 'Ekstraklasa' },
        { icon: englandPNG, title: 'Premier League' },
        { icon: italyPNG, title: 'Serie A' },
        { icon: spainPNG, title: 'La Liga' },
        { icon: germanyPNG, title: 'Bundesliga' },
        { icon: francePNG, title: 'Ligue 1' },
    ]

    return (
        <div className='side-popularbets-container'>
            <h5>Popularne</h5>
            {popularbets.map((popularbet, index) => (
                <div className='popularbet-over' key={index}>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                        }}
                    >
                        <div className='side-popularbet'>
                            <img src={soccerPNG} alt='soccer icon' />
                            <img src={popularbet.icon} alt='popular bet icon' />
                            {popularbet.title}
                        </div>
                        <i className='fa-sharp fa-solid fa-arrow-right'></i>
                    </div>

                    <div className='popularbet-hr'>
                        <hr className='side-hr' />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default SidePopularBets
