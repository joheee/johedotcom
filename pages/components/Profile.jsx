import Index from '../../styles/Profile.module.scss'
import Image from 'next/image'

export const Profile=()=>{
    return  <div className={Index.homeContainer}>
            
                <div className={Index.homeInnerContainer}>
                
                    <div className={Index.homeInnerProfileContainer}>

                        <div className={Index.homeNameWebContainer}>
                        <div className={Index.homeProfileBoldText}>Hi, I am Johe,</div>
                        <div className={Index.homeProfileBoldText}>Web Developer</div>
                        </div>

                        <div className={Index.homeProfileDescription}>
                        A Computer Engineering student who is passionate about website development, learning new stuff, jokes, and talking to strangers
                        </div>

                        <button className={Index.resumeButton}>
                        download resume
                        </button>

                    </div>

                    <Image src="/joo.jpg" alt="johe with da kick" width="243" height="243" className={Index.homeSelfImageContainer}/>
                </div>
            
            </div>
}