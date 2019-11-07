import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';@Injectable({
  providedIn: 'root'
})
export class FirestoreService {  constructor(
    private firestore: AngularFirestore
  ) {}  
  
  //Crea un nuevo post
  public createPost(data: {title: string, description: string}) {
    return this.firestore.collection('posts').add(data);
  }  //Obtiene un post
  public getPost(documentId: string) {
    return this.firestore.collection('posts').doc(documentId).snapshotChanges();
  }  //Obtiene todos los posts
  public getPosts() {
    return this.firestore.collection('posts').snapshotChanges();
  }  //Actualiza un post
  public updatePost(documentId: string, data: any) {
    return this.firestore.collection('posts').doc(documentId).set(data);
  }
  public deletePost(documentId: string){
    this.firestore.collection('posts').doc(documentId).delete();
  }
}