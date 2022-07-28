import React, { createContext } from "react";
import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";

const FetchContext = createContext<{ axiosInstance: AxiosInstance } | null>(
  null
);
const { Provider } = FetchContext;

const FetchProvider: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const axiosInstance: AxiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
  });

  axiosInstance.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      config.headers = { Authorization: `Bearer ${""}` };
      return config;
    },
    (error: AxiosError) => {
      return Promise.reject(error);
    }
  );

  axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => {
      return response;
    },
    (error: AxiosError) => {
      return Promise.reject(error);
    }
  );

  return (
    <Provider
      value={{
        axiosInstance,
      }}
    >
      {children}
    </Provider>
  );
};

export { FetchContext, FetchProvider };
