import type { Trailer } from '@/entities/Trailer';
import axios, { type AxiosRequestConfig } from 'axios';

export interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: import.meta.env.VITE_RAWG_KEY,
  },
});

class ApiClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = async (config?: AxiosRequestConfig): Promise<FetchResponse<T>> => {
    return await axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((response) => response.data);
  };

  get = async (slug: string): Promise<T> => {
    return await axiosInstance
      .get<T>(`${this.endpoint}/${slug}`)
      .then((response) => response.data);
  };
}

export default ApiClient;
