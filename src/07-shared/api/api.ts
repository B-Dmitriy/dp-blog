import axios from 'axios';
import { USER_LOCALSTORAGE_KEY } from '07-shared/constants/constants';

export const $api = axios.create({
    baseURL: __API__,
    headers: {
        authorization: localStorage.getItem(USER_LOCALSTORAGE_KEY) || '',
    },
});
