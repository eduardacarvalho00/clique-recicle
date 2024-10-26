export interface User {
  id: string;
  name: string;
  email: string;
  isRevoked: boolean;
  roles: string;
  creationDate: Date;
}

export interface AccountInfoProps {
  id: string;
  email: string;
  isAuthenticated: boolean;
}
