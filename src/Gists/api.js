import axios from 'axios';
import { GITHUB_USERS_API, GITHUB_API_URL } from '../Common/constants';

/**
 * Api method to do HTTP request to get the Gists data for User.
 */
export const getUserGistsAsync = (userName) => {
    const uri = `${GITHUB_USERS_API}/${userName}/gists`;
    return axios.get(uri);
};

/**
 * Api method to do HTTP request to get the Gist Content for Gist.
 */
export const getGistContentAsync = (gistId) => {
    const uri =`${GITHUB_API_URL}/gists/${gistId}`;
    return axios.get(uri);
};