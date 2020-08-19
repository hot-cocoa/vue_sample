import axios from 'axios';

const baseDomain = 'localhost:3000';
const baseURL = `${baseDomain}/api`;

export default axios.create({
  baseURL: baseURL
});