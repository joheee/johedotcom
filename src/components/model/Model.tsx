
export interface Project {
    createdAt?: string
    description?: string
    homepageUrl?: string
    languages?: ProjectLanguage
    name: string
    url: string
    __typename: string
}
interface ProjectLanguage {
    __typename: string
    nodes : Array<ProjectLanguageItem>
}
interface ProjectLanguageItem {
    __typename: string
    name: string
}

export interface Experience {
    id: string
    description: string
    pointList: Array<string>
    title: string
    yearBegin: string
    yearEnd: string 
}

export type ExperienceProp = {
    experience : Experience
}