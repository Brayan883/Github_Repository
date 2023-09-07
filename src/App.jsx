import "./App.css";
import ListOfUsers from "./componets/ListOfUsers";
import { useReposGithub } from "./hooks/useRepos";
function App() {
  const { githubquery } = useReposGithub();
  return (
    <>
      {githubquery.data?.length > 0 && <ListOfUsers list={githubquery.data} />}

      {githubquery.isLoading && <p>Loading...</p>}

      {githubquery.isError && <p>Ha habido un error</p>}

      {!githubquery.isLoading &&
       !githubquery.isError &&
       githubquery.data?.length === 0 && <p>No hay repositorios </p>
      }
    </>
  );
}

export default App;
