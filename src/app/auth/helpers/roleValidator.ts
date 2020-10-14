//import { User } from './../../shared/models/user.interface';

import { User } from 'src/app/shared/models/user.interface';

export class RoleValidator{
   

        isAlumno(user: User): boolean {
          return user.role === 'ALUMNO';
        }
      
        isEncargado(user: User): boolean {
          return user.role === 'ENCARGADO';
        }
      
        isAdmin(user: User): boolean {
          return user.role === 'ADMIN';
        }
      
}