import { Component } from '@angular/core';
import { FirestoreService } from '../services/firestore/firestore.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  public posts = [];

  constructor(private firestoreService: FirestoreService) {}

  ngOnInit(){
    this.firestoreService.getPosts().subscribe((postsSnapshot) =>{
      this.posts = [];
      postsSnapshot.forEach((postData: any) =>{
        this.posts.push({
          id: postData.payload.doc.id,
          data: postData.payload.doc.data()
        });
      })
    });
    
}
  deletePost(id){
    this.firestoreService.deletePost(id);
  }
}
