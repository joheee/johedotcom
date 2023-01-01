import blogPage from '../styles/BlogPage.module.scss'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { RecentPostCard } from './components/RecentPostCard'

export default function Blog() {
    return (
        <div>
            <Navbar/>
            
            <div className={blogPage.navbarHeight}></div>
            
            <div className={blogPage.blogPageTitle}>
                My Blog
            </div>
            <div className={blogPage.blogCardOuterContainer}>
                <RecentPostCard/>
                <RecentPostCard/>
                <RecentPostCard/>
                <RecentPostCard/>
            </div>
            <Footer/>
        </div>
    )
}