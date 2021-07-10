/***********************************************************************************************
 * File : jsonPlaceholder
 * Desc : axios instance to retrive comments
 * Author: Hariharan Kailas
 * Date: 10-Jul-2021
 ***********************************************************************************************/
import axios from 'axios';
import { COMMENTS_API } from '../config/comments';

export const jsonplaceholder = axios.create({
    baseURL: COMMENTS_API
});
