import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  username: string = ""
  password: string = ""

  constructor(public afAuth: AngularFireAuth, public navCtrl: NavController) {

   }
  ngOnInit() {
  }

  // asdasdas + @gmail.com
  async login(){
    const { username, password } = this
    try{
      const res = await this.afAuth.auth.signInWithEmailAndPassword(username + '@climajuarez.com', password)
      console.log(res)
      this.navCtrl.navigateRoot('/home/tabs/tab1')

    } catch(err){
      console.dir(err);
      if(err.code === "auth/user-not-found"){
        console.log("Usuario no encontrado.")
      }
    }
  }


}
