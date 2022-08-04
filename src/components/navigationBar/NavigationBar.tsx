import { useState } from 'react'
import './navigationBar.scss'
import { PopUpSosmed } from './popUpSosmed/PopUpSosmed'

export const NavigationBar = () => {

    const [boolPopUpSosmed, setBoolPopUpSosmed] = useState(false)

    const handleScrollView = (text : string) => {
        const element = document.getElementById(text)
        element?.scrollIntoView({behavior:'smooth'})
    }

    return (
        <div className="navigation-bar-container">
            <div className="navigation-bar-left-component">
                <div className="hover-nav-bar" onClick={e => setBoolPopUpSosmed(!boolPopUpSosmed)}>
                    johedotcom
                </div>
                {
                    boolPopUpSosmed ?
                    <PopUpSosmed/> : null
                }
            </div>
            <div className="navigation-bar-right-component">
                <div onClick={e => handleScrollView('projectPage')} className='hover-nav-bar navigation-bar-right-component-item'>
                    projects
                </div> 
                <div onClick={e => handleScrollView('experiencePage')} className='hover-nav-bar navigation-bar-right-component-item'>
                    experience
                </div> 
            </div>
        </div>
    )
}