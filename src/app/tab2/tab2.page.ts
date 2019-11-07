import { Component } from '@angular/core';
import { FirestoreService } from '../services/firestore/firestore.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  title: string = ""
  description: string = ""
  
  constructor(private firestoreService: FirestoreService, public navCtrl: NavController) {}

  onSend(){
    const data = {
      title: this.title,
      description: this.description
    } 
    this.firestoreService.createPost(data).then(() =>{
      console.log("Publicacion hecha exitosamente!")
      this.navCtrl.navigateRoot('/home/tabs/tab3')
    })
  }
}
