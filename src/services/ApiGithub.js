import apiGithub from "../libs/github";
export const fetchRepos = async () => {
  const { data } = await apiGithub.get("/users/midudev/repos");
  return data;
};
