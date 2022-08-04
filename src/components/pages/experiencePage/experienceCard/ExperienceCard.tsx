import { Experience, ExperienceProp } from '../../../model/Model'
import './experienceCard.scss'


export const ExperienceCard = ({experience} : ExperienceProp) => {

    return (
        <div className="experience-card-item">
            <div className="experience-card-item-title">
                {experience.title}
            </div>
            <div className="experience-card-item-year">
                {experience.yearBegin} - {experience.yearEnd}
            </div>
            <div className="experience-card-item-desc">
                {experience.description}
            </div>
            <div className="experience-card-item-point-list">
                {experience.pointList.map((item:string, i:number) => (
                    <li key={i}>{item}</li>
                ))}
            </div>
            <div className="experience-card-item-border"></div>
        </div>
    )
}