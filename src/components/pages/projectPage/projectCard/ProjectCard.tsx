import './projectCard.scss'

type projectProps = {
    project: any
}


const ProjectCardLang = (prop: any) => {
    return(
        <div className="project-card-item-language-item">
            {prop.text.name}
        </div>
    )
}

export const ProjectCard = ({project} : projectProps) => {
    return (
        <div className="project-card-item">
            <div className="project-card-item-title">
                {project.name}
            </div>
            <div className="project-card-item-date">
                {new Date(project.createdAt).toLocaleDateString('pt-PT')}
            </div>
            <a href={`${project.url}`} className="set-not-fill hover-nav-bar" target='_blank' rel="noreferrer">
                <div className="project-card-item-github">
                    <div className="project-card-item-github-icon fa-brands fa-github"></div>
                    <div className="project-card-item-github-link">{project.name} repository</div>
                </div>
            </a>
            <br />
            {
                project.homepageUrl === null ? null :
                <a href={project.homepageUrl!.indexOf("https://") !== 0 ? `https://${project.homepageUrl}` : `${project.homepageUrl}`} className="set-not-fill hover-nav-bar" target='_blank' rel="noreferrer">
                    <div className="project-card-item-host">
                        <div className="project-card-item-host-icon fa-solid fa-globe"></div>
                        <div className="project-card-item-host-link">{project.name} hosting</div>
                    </div>
                </a>
            }

            <div className="project-card-item-language-container">
                {project.languages.nodes.length !== 0 ?
                    project.languages.nodes.map((lang:any,i:any)  => (
                        <ProjectCardLang key={i} text={lang}/>
                    )) : null
                }
            </div>

        </div>
    )
}