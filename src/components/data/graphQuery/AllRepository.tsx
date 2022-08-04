import { gql } from '@apollo/client';

export const ALL_REPOSITORY = gql `
query { 
    user(login:"joheee"){
          repositories(first:50) {
              nodes{
          name
          createdAt
          description
          url
          homepageUrl
          languages(first:4){
            nodes{
              name
            }
          }
        }
      }
    }
  }
`