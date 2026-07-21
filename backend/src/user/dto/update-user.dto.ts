export class UpdateUserDto {
  name?: string;
  email?: string;
  role?: 'ADMIN' | 'USER';
}
