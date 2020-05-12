import Axios from 'axios';

const instance = Axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
});

// instance.defaults.headers.common["Authorization"] = "AUTH TOKEN FROM INSTANCE";
// instance.defaults.headers.post['Content-Type'] = 'application/json';


// Axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
// Axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
// Axios.defaults.headers.post['Content-Type'] = 'application/json';


instance.interceptors.request.use(
    (request) => {
        console.log(request)
        return request
    },
    (error) => {
        console.log(error)
        return Promise.reject(error)
    }
);

instance.interceptors.response.use(
    (response) => {
        console.log(response);
        // Edit request config
        return response;
    },
    (error) => {
        console.log(error);
        return Promise.reject(error);
    }
);

export default instance;