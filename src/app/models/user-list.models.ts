declare module UserListModels {

  export interface User {
    id: string;
    firstName: string;
    lastName: string;
    weight: number;
    imc: number;
    healthStatus: string;
  }

  export interface Data {
    user: User[];
  }

  export interface timeStamp {
    timeStamp: number[];
    data: Data;
    message: string;
    status: string;
    statusCode: number;
  }

}

