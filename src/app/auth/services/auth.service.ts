import { Roles } from './../../shared/models/user.interface';
import { RoleValidator } from './../helpers/roleValidator';
import { Injectable } from '@angular/core';
import{auth} from 'firebase/app';
import {User} from './../../shared/models/user.interface';
import {AngularFireAuth} from '@angular/fire/auth';
import {first, switchMap} from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import {AngularFirestore, AngularFirestoreDocument,} from '@angular/fire/firestore'

@Injectable({providedIn : 'root'})
export class AuthService extends RoleValidator {
public user$: Observable<User>;

  constructor(public afAuth: AngularFireAuth, private afs: AngularFirestore) { 
    super();
   this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        if(user){
         return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
       }
        return of(null);
      })
    );
  }



async login(email: string, password: string): Promise<User> {
  try {
    const { user } = await this.afAuth.signInWithEmailAndPassword(
      email,
      password,
      
    );
    //this.updateUserData(user);
    return user;
  } catch (error) {
    console.log(error);
    window.alert('Error de acceso: Nombre de usuario o contraseña incorrecta, revise su conexión a internet ');
  }
}




async register(email: string, password: string): Promise<User> {
  try {
    const { user } = await this.afAuth.createUserWithEmailAndPassword(
      email,
      password
    );
    this.updateUserData(user);
    this.updateId;
    return user;
  } catch (error) {
    console.log(error);
  }
}


async logout(): Promise<void> {
  try {
    await this.afAuth.signOut();
  } catch (error) {
    console.log(error);
  }
}

private updateUserData(user: User){ 
  //var idalumno = this.updateId;
  const userRef: AngularFirestoreDocument<User> = this.afs.doc(
    `users/${user.uid}`
     );


const data: User = {
  uid: user.uid,
  email: user.email,
  role: 'ADMIN',
  //idalumno: '04FB6D1A',
};
return userRef.set(data, { merge: true });
}

public updateId (idalumno: string){
  //console.log('Form→', this.registerForm.value);
  //const idalu = idalumno
  //console.log(idalumno)
}

}
