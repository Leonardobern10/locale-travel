import type { LoginUserData } from 'src/types/user/LoginUserData';
import type { RegisterUserData } from 'src/types/user/RegisterUserData';
import axios from 'axios';

const url: string = 'http://localhost:3000/api/v1';

export const createUser = async (userData: RegisterUserData) => {
     console.log(userData);
     try {
          const response = await axios.post(`${url}/users`, userData);
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
          const response = await axios.post(`${url}/users/login`, userData);
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
