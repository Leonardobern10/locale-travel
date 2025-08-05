import type { LoginUserData } from 'src/types/user/LoginUserData';
import type { RegisterUserData } from 'src/types/user/RegisterUserData';
import axios, { type AxiosResponse } from 'axios';
import { useAuthStore } from '@/store/useAuthStore';
import type { UserStoreType } from 'src/types/user/UserStoreType';

const url: string = 'http://localhost:3000/api/v1/users';

const axiosErrorLaunch = (axiosError: unknown) => {
     if (axios.isAxiosError(axiosError)) {
          console.error(axiosError.message);
          console.log(axiosError.response?.data.message); // Aqui você pode acessar com segurança
     } else {
          console.error('Erro inesperado', axiosError);
     }
};

export const createUser = async (userData: RegisterUserData) => {
     console.log(userData);
     try {
          const response = await axios.post(`${url}`, userData);
          console.log(response);
     } catch (error: unknown) {
          axiosErrorLaunch(error);
     } finally {
          console.log('Criação de usuário finalizada');
     }
};

export const login = async (userData: LoginUserData) => {
     try {
          const response = await axios.post(`${url}/login`, userData, {
               withCredentials: true
          });
          const clientResponse: UserStoreType = response.data.client;
          console.log(clientResponse);
          useAuthStore.getState().login(clientResponse);
     } catch (error: unknown) {
          axiosErrorLaunch(error);
     } finally {
          console.log('Login finalizado.');
     }
};

export const logout = async () => {
     try {
          const response: AxiosResponse = await axios.post(
               `${url}/logout`,
               {},
               { withCredentials: true }
          );
          console.log(response);
     } catch (error: unknown) {
          axiosErrorLaunch(error);
     } finally {
          console.log('Logout finalizado');
     }
};
