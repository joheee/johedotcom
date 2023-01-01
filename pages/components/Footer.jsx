import footer from '../../styles/Footer.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'

export const Footer=()=>{
    return  <div className={footer.footerContainer}>
                <div className={footer.footerComponentContainer}>
                    <Link href="">
                        <FontAwesomeIcon icon={faYoutube} size='lg' className={footer.navbarButton}/>
                    </Link>
                    <Link href="">
                        <FontAwesomeIcon icon={faInstagram} size='lg' className={footer.navbarButton}/>
                    </Link>
                    <Link href="">
                        <FontAwesomeIcon icon={faTwitter} size='lg' className={footer.navbarButton}/>
                    </Link>
                    <Link href="">
                        <FontAwesomeIcon icon={faLinkedin} size='lg' className={footer.navbarButton}/>
                    </Link>
                </div>
                <div className={footer.footerCopyrightText}>
                    Copyright ©2020 All rights reserved 
                </div>
            </div>
}