import axios from 'axios';

import { env } from '@/@types/env';

export const api = () => {
  const defaultOptions = {
    baseURL: env.VITE_API_URL,
  };

  const instance = axios.create(defaultOptions);
  instance.defaults.headers.common['Content-Type'] = 'application/json';

  return instance;
};
