import type { UserStoreType } from 'src/types/user/UserStoreType';
import type { AuthStoreType } from 'src/types/user/AuthStoreType';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useAuthStore = create<AuthStoreType>()(
     persist(
          (set) => ({
               user: null,
               isAuthenticated: false,
               login: (user: UserStoreType) => {
                    set({ user, isAuthenticated: true });
                    console.log('Autenticado!');
               },
               logout: () => {
                    set({ user: null, isAuthenticated: false });
                    console.log('Não autenticado!');
               }
          }),
          {
               name: 'auth-storage'
          }
     )
);
