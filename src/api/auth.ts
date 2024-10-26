import { axiosInstance } from "./axiosInstance";

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  access_token: string;
  refresh_token: string;
}

export interface ChangePasswordRequest {
  currentPassword: string;
  newPassword: string;
}

interface RefreshTokenRequest {
  refresh_token: string;
}

export function setAuthToken(token: string) {
  if (axiosInstance.defaults.headers) {
    axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
  }
}

export async function login(body: LoginRequest) {
  const { data } = await axiosInstance.post<LoginResponse>(
    "/login/default-auth",
    body
  );

  return data;
}

export async function refreshToken(body: RefreshTokenRequest) {
  const { data } = await axiosInstance.post<LoginResponse>(
    "login/refresh",
    body
  );

  return data;
}
