import { Header } from "../components/Header";
import { BlogCard } from "../components/BlogCard";
import '../assets/css/Home.css'
import { Footer } from "../components/Footer";
// import home_1 from '../assets/img/home_1.JPG'

export function Home({ blogs }) {

    return (
        <div className="home">
            <Header />
            {/* <div className="home-text-img">
                <img className="home-img" src={home_1} alt="home_1" />
            </div> */}
            <div className={`${blogs.length > 0 ? 'home-blogs' : 'home-no-blogs'}  p-4`}>
                {blogs.length > 0 ? (
                    blogs.map((blog, idx) => {
                        return (
                            <BlogCard key={idx} src={blog.src} isNew={blog.isNew} />
                        )
                    }) 
                ) : <p className="empty-blog">No hay entradas publicadas</p>
                    
                }
            </div>
            <Footer />
        </div>
    )
}