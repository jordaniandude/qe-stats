import axios from 'axios';

const serverUrl = 'https://qe-stats.herokuapp.com'

export const api = axios.create({
  baseURL: `${serverUrl}/api`,
  headers: {
    'Content-Type': 'application/json'
  }
});