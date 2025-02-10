export enum Role {
  STUDENT = 'STUDENT',
  TEACHER = 'TEACHER',
}

export interface UserData {
  email: string;
  password: string;
  role: Role;
}
