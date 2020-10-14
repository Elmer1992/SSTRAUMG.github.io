export type Roles = 'ENCARGADO'|'ALUMNO'|'ADMIN';

export interface User {
uid: string;
email: string;
password?: string;
role?: Roles;
idalumno?: any;

}
