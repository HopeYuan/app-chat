import { ref, firebaseAuth } from '../config/firebasecf'


 export function auth (email, pw) {
  return firebaseAuth().createUserWithEmailAndPassword(email, pw)
   
}

export function logout () {
  return firebaseAuth().signOut()
}

export function login (email, pw) {
  return firebaseAuth().signInWithEmailAndPassword(email, pw)
}

