import axios from 'axios';

const instance = axios.create({
    baseURL: "https://react-http-cec91.firebaseio.com/"
});

export default instance;