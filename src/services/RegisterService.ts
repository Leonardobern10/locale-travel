import axios from 'axios';
import type { UserData } from 'src/types/UserData';
const url: string = 'http://localhost:3000/api/v1';

export const createUser = async (userData: UserData) => {
     console.log(userData);
     try {
          const response = await axios.post(`${url}/users`, userData);
          console.log(response);
     } catch (error: unknown) {
          if (axios.isAxiosError(error)) {
               // AxiosError tipado corretamente
               console.error(error.message);
               console.log(error.response?.data.message); // Aqui você pode acessar com segurança
          } else {
               console.error('Erro inesperado', error);
          }
     }
};
