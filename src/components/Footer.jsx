import instagram from '../assets/img/instagram.png'
import '../assets/css/Footer.css'
export const Footer = () => {
    return (
        <div className="footer">
            <div className="f-social">
                <a href='https://www.instagram.com/reymileac/' target='blank'><img src={instagram} alt="" className="f-i-social" /></a>
                <p>Queen</p>
            </div>
            <p>Desarrollado por: Luis Peláez copyright 2024</p>
        </div>
    )
}