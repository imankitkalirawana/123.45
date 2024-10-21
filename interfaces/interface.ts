export interface Base {
  _id: string;
  createdBy: string;
  updatedBy: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface User extends Base {
  email: string;
  phone: string;
  password: string;
  name: string;
  role: 'admin' | 'user';
}
