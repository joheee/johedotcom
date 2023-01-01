import { FeaturedWork } from "./components/FeaturedWork";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import workPage from '../styles/WorkPage.module.scss'

export default function Work(){
    return  (
        <div>
            <Navbar/>
            
            <div className={workPage.navbarHeight}></div>
            
            <FeaturedWork title={`My Work`}/>
            <Footer/>
        </div>
    )
} 