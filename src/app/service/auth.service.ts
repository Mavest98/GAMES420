import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import 'firebase/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth, private router: Router) {
    if (!firebase.apps.length) {
      console.log('Initializing Firebase');
      firebase.initializeApp(environment.firebase);
    } else {
      console.log('Firebase already initialized');
      firebase.app();
    }
  }

  async googleSignIn() {
    const provider = new firebase.auth.GoogleAuthProvider();
    try {
      console.log('Attempting to sign in with Google');
      const credential = await this.afAuth.signInWithPopup(provider);
      console.log('Signed in successfully:', credential);
      this.router.navigate(['/home']);
    } catch (error) {
      console.error('Error during Google sign-in:', error);
    }
  }

  async signOut() {
    try {
      console.log('Signing out');
      await this.afAuth.signOut();
      console.log('Signed out successfully');
      this.router.navigate(['/login']);
    } catch (error) {
      console.error('Error during sign out:', error);
    }
  }
}
