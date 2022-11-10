import sad from '../assets/sad.png'
import { Link } from 'react-router-dom'
const Livepagemain = () => {
    return (
        <div className='livepage-main-container'>
            <img src={sad} alt='Sad image' />
            <h4>Nic tu nie ma!</h4>
            <p>Aktualnie brak zakładów na żywo.</p>
            <Link to='/betclic-clone'>
                <button>Powrót</button>
            </Link>
        </div>
    )
}

export default Livepagemain
