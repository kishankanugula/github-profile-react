import axios from 'axios';
import { GITHUB_USERS_API, GITHUB_REPOS_API } from '../Common/constants';

/**
 * Api method to do HTTP request to get the Repositories data for User.
 */
export const getUserRepositoriesAsync = (userName) => {
  const uri = `${GITHUB_USERS_API}/${userName}/repos`;
  return axios.get(uri);
};

/**
 * Api method to do HTTP request to get the Commits for Repository.
 */
export const getRepositoryCommitsAsync = (userName, repositoryName, since) => {
  const uri =`${GITHUB_REPOS_API}/${userName}/${repositoryName}/commits`;
  return axios.get(since ? `${uri}?since=${since}` : uri);
};