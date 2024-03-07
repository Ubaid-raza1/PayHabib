import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://7126-39-50-174-247.ngrok-free.app/api',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${YOUR_TOKEN}`
  }
});

export default instance;
