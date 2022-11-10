import React from 'react'
import sad from '../assets/sad.png'
import { Link } from 'react-router-dom'
const PromotionpageMain = () => {
    return (
        <div className='promotionpage-main-container'>
            <img src={sad} alt='Sad image' />
            <h4>Nic tu nie ma!</h4>
            <p>Aktualnie nie ma żadnych promocji.</p>
            <Link to='/betclic-clone'>
                <button>Powrót</button>
            </Link>
        </div>
    )
}

export default PromotionpageMain
