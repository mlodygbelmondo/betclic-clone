import React from 'react'
import sad from '../assets/sad.png'

const PromotionpageMain = () => {
    return (
        <div className='promotionpage-main-container'>
            <img src={sad} alt='Sad image' />
            <h4>Nic tu nie ma!</h4>
            <p>Aktualnie nie ma żadnych promocji.</p>
            <a href='/betclic-clone/'>
                <button>Powrót</button>
            </a>
        </div>
    )
}

export default PromotionpageMain
