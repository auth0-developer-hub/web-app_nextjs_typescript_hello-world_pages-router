import axios, {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
  isAxiosError,
} from "axios";
import { ApiResponse } from "../models/api-response";
import { AppError } from "../models/app-error";

export const callExternalApi = async <T>(options: {
  config: AxiosRequestConfig;
}): Promise<ApiResponse<T>> => {
  try {
    const response: AxiosResponse = await axios(options.config);
    const { data } = response;

    return {
      data,
      error: null,
      status: response.status,
    };
  } catch (error) {
    if (isAxiosError(error)) {
      const axiosError = error as AxiosError;

      const { response } = axiosError;

      const status = response && response.status ? response.status : 500;
      let message = "http request failed";

      if (response && response.statusText) {
        message = response.statusText;
      }

      if (axiosError.message) {
        message = axiosError.message;
      }

      if (response && response.data && (response.data as AppError).message) {
        message = (response.data as AppError).message;
      }

      return {
        data: null,
        error: {
          message,
        },
        status: status,
      };
    }

    return {
      data: null,
      error: {
        message: (error as Error).message,
      },
      status: 500,
    };
  }
};
