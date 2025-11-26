import { User, UserRole } from './types';

const TOKEN_KEY = 'auth_token';
const USER_KEY = 'auth_user';

export const saveAuthData = (token: string, user: User) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(TOKEN_KEY, token);
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  }
};

export const getAuthData = (): { token: string | null; user: User | null } => {
  if (typeof window === 'undefined') {
    return { token: null, user: null };
  }
  
  const token = localStorage.getItem(TOKEN_KEY);
  const userStr = localStorage.getItem(USER_KEY);
  const user = userStr ? JSON.parse(userStr) : null;
  
  return { token, user };
};

export const clearAuthData = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
  }
};

export const hasRole = (userRole: UserRole | null | undefined, requiredRoles: UserRole[]): boolean => {
  if (!userRole) return false;
  return requiredRoles.includes(userRole);
};

export const canAccessDashboard = (role: UserRole | null | undefined): boolean => {
  return hasRole(role, ['manager']);
};

export const canViewProducts = (role: UserRole | null | undefined): boolean => {
  return hasRole(role, ['manager', 'storekeeper']);
};

export const canAddProducts = (role: UserRole | null | undefined): boolean => {
  return hasRole(role, ['manager', 'storekeeper']);
};
