import axios from 'axios';

const baseDomain = 'localhost:3000';
const baseURL = `http://${baseDomain}`;

export default axios.create({
  baseURL: baseURL
});