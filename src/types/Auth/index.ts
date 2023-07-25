export interface IProfileResponse {
  data: {
    getProfile: {
      email: string;
      name: {
        firstName: string;
        lastName: string;
      };
      id: string;
    };
  };
  message: string;
  success: boolean;
  statusCode: number;
}
