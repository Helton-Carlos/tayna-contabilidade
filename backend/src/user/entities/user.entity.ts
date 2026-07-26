export class UserEntity {
  id: string;
  name: string;
  email: string;
  password: string;
  role: 'ADMIN' | 'USER';
  createdAt: Date;
}
