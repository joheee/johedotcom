import feature from '../../styles/FeaturedWork.module.scss'
import { FeaturedWorkCard } from './FeaturedWorkCard'

export const FeaturedWork=({title})=>{
    return  <div className={feature.featuredWorkContainer}>
                <div className={feature.featureWorkTitle}>
                    {title}
                </div>
                
                <div className={feature.featureWorkCardContainer}>
                    <FeaturedWorkCard/>
                    <FeaturedWorkCard/>
                    <FeaturedWorkCard/>
                    <FeaturedWorkCard/>
                    <FeaturedWorkCard/>
                    <FeaturedWorkCard/>
                    <FeaturedWorkCard/>
                    <FeaturedWorkCard/>
                    <FeaturedWorkCard/>
                </div>
            </div>
}