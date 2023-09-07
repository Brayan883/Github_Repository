import { useQuery } from "react-query";
import { fetchRepos } from "../services/apiGithub";

export const useReposGithub = () => {
  const githubquery = useQuery({
    queryKey: ["repos"],
    queryFn: fetchRepos,
    refetchOnWindowFocus: false,
  });

  return { githubquery };
};
