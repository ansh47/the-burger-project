import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://the-burger-project-b4483.firebaseio.com/'
});

export default instance;