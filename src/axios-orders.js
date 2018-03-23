import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://the-burger-builder-fba52.firebaseio.com/'
});

export default instance;
