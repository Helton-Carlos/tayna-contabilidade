export class UserEntity {
  id: string;
  name: string;
  email: string;
  role: 'ADMIN' | 'USER';
  createdAt: Date;
}
