import axios from 'axios';

const instance = axios.create({
    baseURL: "https://react-http-cec91.firebaseio.com/"
});



instance.interceptors.request.use(
    (request) => {
        // console.log(request);
        // Edit request config
        return request;
    },
    (error) => {
        // console.log(error);
        return Promise.reject(error);
    }
);

instance.interceptors.response.use(
    (response) => {
         console.log(response.data);
        // Edit request config
        // if(response.data !== null )
        return response;
    },
    (error) => {
        console.log(error);
        return Promise.reject(error);
    }
);




export default instance;