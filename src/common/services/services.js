
import axios from "axios";
import apiConfig from './apiConfig';

const apiURLs = apiConfig.setEnvironmentURLs();

//set request headers for API calls
const config = {
    mode: 'no-cors',
    headers: {
        'cache': 'no-cache'
    },
    withCredentials: false,
    credentials: 'same-origin',
};

axios.interceptors.request.use((config) => {

    return config;
}, (error) => {
    // Do something with request errors
    return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use((response) => {
    
}, (error) => {
    // Do something with response error
    

    return Promise.reject(error);
});

const axiosInstance = axios.create();

//get hostname based on params received from each component
let getHostName = () => {
    return apiURLs.root;
}

async function getUserCredential() {

    let result = await axiosInstance.get('./data.json');
    return result;
}



async function getAllUsers() {

    let result = await axiosInstance.get('./allUsers.json');
    return result;
}


export default {
    getUserCredential,
    getAllUsers
}