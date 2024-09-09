import axios from "axios";
// import { StringsManager } from "../const";

const axiosInstance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
      api_key: 'ef9df88131a306628a8cc8bce809e095',
    },
  });

  axiosInstance.interceptors.response
export default axiosInstance;

