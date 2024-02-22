import { Link } from 'react-router-dom'
import '../assets/css/BlogCard.css'
export const BlogCard = ({ src, title = 'Titulo del blog', description = 'Descripción breve del blog', isNew = false }) => {
    return (
        <div className="bc">
            <div className='bc-container'>
                <div className="bc-img">
                    <img src={src} alt="" />
                    {
                        isNew && <p className='bc-is-new p-2'><strong>NUEVO</strong></p>
                    }
                </div>
                <div className="bc-text p-2">
                    <h4>{title}</h4>
                    <p>{description}</p>
                    <Link to={'/'} className="bc-read btn"><strong>Leer entrada</strong></Link>
                </div>
            </div>

        </div>
    )
}