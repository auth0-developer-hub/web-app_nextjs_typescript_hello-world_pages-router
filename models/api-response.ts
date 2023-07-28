import { AppError } from "./app-error";

export interface ApiResponse<T> {
  data: T | null;
  error: AppError | null;
  status: number;
}
