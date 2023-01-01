import Recentpost from '../../styles/Recentpostcard.module.scss'

export const RecentPostCard=()=>{
    return  <div className={Recentpost.recentPostCardContainer}>
                <div className={Recentpost.recentPostCardTitle}>
                    this is title sadfas dfsad 
                </div>

                <div className={Recentpost.recentPostCardDateContainer}>
                    <div className={Recentpost.recentPostCardDateItem}>
                        23 Jun 2022
                    </div>
                    <div className={Recentpost.recentPostCardDateItem}>
                        |
                    </div>
                    <div className={Recentpost.recentPostCardDateItem}>
                        code, design
                    </div>
                </div>

                <div className={Recentpost.recentPostCardDesc}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores alias quos, et id commodi at repudiandae veniam! Iste ad ullam, accusantium porro magnam id incidunt. Dolorem, cumque? Aliquid, nihil incidunt?
                </div>
            </div>
}