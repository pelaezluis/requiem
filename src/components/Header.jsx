import home_1 from '../assets/img/home_1.JPG'
import '../assets/css/Header.css'
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <header>
            <div className='h-nav'>
                <div className='h-button p-2'>
                    <Link href="#action1" className='header-text' onClick={() => alert('Hola Reyna :)')}>Inicio</Link>
                    <Link href="#action2" className='header-text kalopsia' onClick={() => alert('¿Así?')}>Kalopsia</Link>
                </div>
                {/* <img className="header-img" src={home_1} alt="home_1" /> */}
                <div className='h-requiem'>
                    <h1>REQUIEM DEL ESPIRITÚ</h1>
                </div>
            </div>
        </header>
    )
}