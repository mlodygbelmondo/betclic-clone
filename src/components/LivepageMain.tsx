import React from 'react'
import sad from '../assets/sad.png'

const Livepagemain = () => {
    return (
        <div className='livepage-main-container'>
            <img src={sad} alt='Sad image' />
            <h4>Nic tu nie ma!</h4>
            <p>Aktualnie brak zakładów na żywo.</p>
            <a href='/betclic-clone/'>
                <button>Powrót</button>
            </a>
        </div>
    )
}

export default Livepagemain
