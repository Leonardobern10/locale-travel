import type { LoginUserData } from 'src/types/user/LoginUserData';
import type { RegisterUserData } from 'src/types/user/RegisterUserData';
import axios, { type AxiosResponse } from 'axios';
import { useAuthStore } from '@/store/useAuthStore';
import type { UserStoreType } from 'src/types/user/UserStoreType';

const url: string = 'http://localhost:3000/api/v1/users';

export const createUser = async (userData: RegisterUserData) => {
     console.log(userData);
     try {
          const response = await axios.post(`${url}`, userData);
          console.log(response);
     } catch (error: unknown) {
          if (axios.isAxiosError(error)) {
               console.error(error.message);
               console.log(error.response?.data.message); // Aqui você pode acessar com segurança
          } else {
               console.error('Erro inesperado', error);
          }
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
          if (axios.isAxiosError(error)) {
               console.error(error.message);
               console.log(error.response?.data.message); // Aqui você pode acessar com segurança
          } else {
               console.error('Erro inesperado', error);
          }
     }
};

export const logout = async () => {
     console.log('Iniciando logout <FRONT>');
     try {
          const response: AxiosResponse = await axios.post(
               `${url}/logout`,
               {},
               { withCredentials: true }
          );
          console.log(response);
     } catch (error: unknown) {
          if (axios.isAxiosError(error)) {
               console.error(error.message);
               console.log(error.response?.data.message); // Aqui você pode acessar com segurança
          } else {
               console.error('Erro inesperado', error);
          }
     }
};
