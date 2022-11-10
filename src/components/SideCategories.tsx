import React from 'react'
import circlePlaceholder from '../assets/circle.webp'
import gamingPNG from '../assets/categories/gaming.png'
import mmaPNG from '../assets/categories/sports/mma.png'
import basketballPNG from '../assets/categories/sports/basketball.png'
import golfPNG from '../assets/categories/sports/golf.png'
import formulaPNG from '../assets/categories/sports/formula.png'
import tennisPNG from '../assets/categories/sports/tennis.png'
import footballPNG from '../assets/categories/sports/football.png'
import volleyballPNG from '../assets/categories/sports/volley-ball.png'

interface Category {
    icon: string
    title: string
}

const SideCategories = () => {
    const categories: Category[] = [
        { icon: footballPNG, title: 'Piłka Nożna' },
        { icon: mmaPNG, title: 'Sztuki Walki' },
        { icon: tennisPNG, title: 'Tenis' },
        { icon: gamingPNG, title: 'E-Sport' },
        { icon: formulaPNG, title: 'Formuła 1' },
        { icon: basketballPNG, title: 'Koszykówka' },
        { icon: golfPNG, title: 'Golf' },
        { icon: volleyballPNG, title: 'Siatkówka' },
    ]

    return (
        <div className='side-categories-container'>
            <h5>Sport</h5>
            {categories.map((category, index) => (
                <div className='category-over' key={index}>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                        }}
                    >
                        <div className='side-category'>
                            <img src={category.icon} alt='category icon' />{' '}
                            {category.title}
                        </div>
                        <i className='fa-sharp fa-solid fa-arrow-right'></i>
                    </div>

                    <div className='category-hr'>
                        <hr className='side-hr' />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default SideCategories
