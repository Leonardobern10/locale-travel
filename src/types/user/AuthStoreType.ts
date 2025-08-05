import type { UserStoreType } from './UserStoreType';

export type AuthStoreType = {
     user: UserStoreType | null;
     isAuthenticated: boolean;
     login: (user: UserStoreType) => void;
     logout: () => void;
};
