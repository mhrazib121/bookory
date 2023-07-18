export interface IUser {
  email: string;
  password: string;
  name: {
    firstName: string;
    lastName: string;
  };
  id?: string;
}
