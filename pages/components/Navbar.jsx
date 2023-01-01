import navbar from '../../styles/Navbar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faBlog, faContactBook, faCode, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const NavbarMobile=({isMobile,setIsMobile})=>{
    return  <div className={navbar.navbarMobileContainer}>
                <div className={navbar.navbarMobileExitLogoContainer}>
                    <Link href='/' className={navbar.navbarButton} onClick={()=>setIsMobile(!isMobile)}>
                            <Image src="/favicon.ico" width={60} height={60} className={navbar.navbarLogoSetup} alt='johedotcom logo'/>
                    </Link>

                    <button className={` ${navbar.navbarMobileExitButton}`}>
                        <FontAwesomeIcon icon={faXmark} size='2x' onClick={()=>setIsMobile(!isMobile)}/>
                    </button>
                </div>

                <div className={navbar.navbarMobileOtherButtonContainer}>
                    <Link href='/work' className={navbar.navbarButton} onClick={()=>setIsMobile(!isMobile)}>
                            <FontAwesomeIcon className={navbar.navbarIconSetup} size='lg' icon={faCode}/>
                            work
                    </Link>
                    <Link href='/blog' className={navbar.navbarButton} onClick={()=>setIsMobile(!isMobile)}>
                        <FontAwesomeIcon className={navbar.navbarIconSetup} size='lg' icon={faBlog}/>
                        blog
                    </Link>
                    <Link href='/contact' className={navbar.navbarButton} onClick={()=>setIsMobile(!isMobile)}>
                        <FontAwesomeIcon className={navbar.navbarIconSetup} size='lg' icon={faContactBook}/>
                        contact
                    </Link>
                </div>
            </div>
}

export const Navbar=()=>{
    const [isMobile,setIsMobile] = useState(false)

    useEffect(()=>{
        if(isMobile === true) {
            document.querySelector("body").style.overflow = "hidden"
        } else {
            document.querySelector("body").style.overflow = "auto"
        }
    },[isMobile])

    return  isMobile === true ? <NavbarMobile isMobile={isMobile} setIsMobile={setIsMobile}/>
                :
                <div className={navbar.navbarContainer}>
                    <Link href='/'>
                        <div className={navbar.navbarButton}>
                            <Image src="/favicon.ico" width={60} height={60} className={navbar.navbarLogoSetup} alt='johedotcom logo'/>
                        </div>
                    </Link>
                    <div className={navbar.navbarInnerContainer}>
                            <Link href='/work' className={navbar.navbarButton}>
                                work
                            </Link>
                            <Link href='/blog' className={navbar.navbarButton}>
                                blog
                            </Link>
                            <Link href='/contact' className={navbar.navbarButton}>
                                contact
                            </Link>
                    </div>
                    <button className={`${navbar.navbarButton} ${navbar.navbarInnerContainerMobile}`} onClick={()=>setIsMobile(!isMobile)}>
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                </div>
}   