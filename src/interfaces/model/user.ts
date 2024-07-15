interface IUserModel {
  id?: number | string | null;
  name: string;
  username: string;
  password: string;
}

interface ICreateUserPayload extends IUserModel {
  key: string;
  role: string;
}

export type {
  IUserModel,
  ICreateUserPayload
};
