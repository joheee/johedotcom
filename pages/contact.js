import {Navbar} from './components/Navbar'
import {Footer} from './components/Footer'
import contactPage from '../styles/ContactPage.module.scss'

export default function Contact (){
    return (
        <>
        <Navbar/>
        <div className={contactPage.contactPageParentContainer}>
            <div className={contactPage.navbarHeight}></div>

            <div className={contactPage.formContactContainer}>
                <div className={contactPage.formContactTitle}>
                    Contact Me
                </div>

                <div className={contactPage.ContactInput}>
                    first name
                    <input type="text"/>
                </div>
                <div className={contactPage.ContactInput}>
                    last name
                    <input type="text"/>
                </div>
                <div className={contactPage.ContactInput}>
                    email
                    <input type="text"/>
                </div>
                <div className={contactPage.ContactInput}>
                    phone number
                    <input type="text"/>
                </div>        

                <div className={contactPage.ContactInput}>
                    message
                    <textarea name="" id="" cols="30" rows="10">

                    </textarea>
                </div>   

                <button className={contactPage.resumeButton}>
                    send
                </button>
            </div>

        </div>
        <Footer/>
        </>
    )
}