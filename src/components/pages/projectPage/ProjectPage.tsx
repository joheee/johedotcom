import { ProjectCard } from './projectCard/ProjectCard'
import { useQuery } from '@apollo/client'
import { ALL_REPOSITORY } from '../../data/graphQuery/AllRepository'
import {Project} from '../../model/Model'
import './projectPage.scss'

export const ProjectPage = () => {
    
    const {loading,error,data} = useQuery(ALL_REPOSITORY)
    
    if(!loading){
        return (
            <div className="project-page-container" id="projectPage">
                <div className="project-page-title">
                    my project
                </div>
                <div className="project-page-card-container">
                    {data.user.repositories.nodes.map((item:Project,i:number) => (
                        <ProjectCard project={item} key={i}/>
                    ))}
                </div>
            </div>
        )
    } else {
        return (
            <div className=""></div>
        )
    }
}