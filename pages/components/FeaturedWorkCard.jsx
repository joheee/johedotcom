import Image from 'next/image'
import FeatureCard from '../../styles/FeaturedWorkCard.module.scss'

export const FeaturedWorkCard=()=>{
    return  <div className={FeatureCard.featuredWorkCard}>
                <Image src='/web dev.webp' width='250' height='180' alt=''/>

                <div className={FeatureCard.featureWorkTextContainer}>
                    <div className={FeatureCard.featureWorkTextYearContainer}>
                        <div className={FeatureCard.featureWorkTextTitle}>
                            this is work title
                        </div>

                        <div className={FeatureCard.featureWorkTextYearTitleContainer}>
                            <div className={FeatureCard.featureWorkTextYearTitleItem}>
                                2022
                            </div>
                            <div className={FeatureCard.featureWorkTextYearTitleItem}>
                                code
                            </div>
                        </div>
                    </div>

                    <div className={FeatureCard.featureWorkTextDescription}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod placeat facere repudiandae nobis earum delectus provident itaque maiores quam? Laborum alias adipisci omnis tempore, totam nihil fugit neque quis pariatur?
                    </div>
                </div>
            </div>
}