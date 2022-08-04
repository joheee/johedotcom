import link from '../../data/Link'
import './popUpSosmed.scss'

export const PopUpSosmed = () => {
    return (
        <div className="pop-up-sosmed-container">
            <a href={link.instagramLink} className='fa-brands fa-instagram' target='_blank'></a>
            <a href={link.linkedinLink} className='fa-brands fa-linkedin' target='_blank'></a>
            <a href={link.youtubeLink} className='fa-brands fa-youtube' target='_blank'></a>
        </div>
    )
}