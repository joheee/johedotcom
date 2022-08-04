import { ExperiencePage } from "./components/pages/experiencePage/ExperiencePage";
import { OpeningPage } from "./components/pages/openingPage/OpeningPage";
import { ProjectPage } from "./components/pages/projectPage/ProjectPage";
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink, gql } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import {GITHUB_ACCESS_TOKEN} from './components/data/GithubInfo'

function App() {
  const httpLink = createHttpLink({
    uri: 'https://api.github.com/graphql',
  })
  const httpUser = createHttpLink({
    uri: 'https://api.github.com/graphql/user/23',
  })
  const httpProduct = createHttpLink({
    uri: 'https://api.github.com/graphql',
  })
  const authLink = setContext((_,{headers}) => {
    return{
      headers: {
        ...headers, 
        authorization: `Bearer ${GITHUB_ACCESS_TOKEN}`
      }
    }
  })
  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
  })

  return (
    <div>
      <ApolloProvider client={client}>
        <OpeningPage/>
        <ProjectPage/>
        <ExperiencePage/>
      </ApolloProvider>
    </div>
  );
}

export default App;