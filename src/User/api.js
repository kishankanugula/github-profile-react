import axios from 'axios';
import { GITHUB_USERS_API } from '../Common/constants';

/**
 * Api method to do HTTP request to get the user profile data.
 */
export const getUserProfileAsync = (userName) => {
    const uri = `${GITHUB_USERS_API}/${userName}`;
    return axios.get(uri);
};