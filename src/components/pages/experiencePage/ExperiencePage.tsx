import { ExperienceCard } from './experienceCard/ExperienceCard'
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import './experiencePage.scss'
import { useEffect, useState } from 'react';
import { Experience } from '../../model/Model';

export const ExperiencePage = () => {

    useEffect(() => {
        const client = new ApolloClient({
            uri: 'https://johedotcom-backend.herokuapp.com/query',
            cache: new InMemoryCache(),
          });
        client
        .query({
        query: gql`
            query{
            experiences{
                id
                title
                yearBegin
                yearEnd
                description
                pointList
            }
            }
        `
        })
        .then((result) => setData([...result.data.experiences].reverse()));
    },[])

    let [data,setData] : any = useState([])
    

    return (
        <div className="experience-page-container" id="experiencePage">
            <div className="experience-page-title">
                my experience
            </div>
            <div className="experience-page-card-container">
                    {
                        data.length === 0 ? null :
                        <div className="experience-page-card-inner-container">
                                {data.map((item: Experience) => (<ExperienceCard experience={item} key={item.id}/>))}
                        </div>
                    }
            </div>
        </div>
    )
}