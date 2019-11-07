import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  username: string = ""
  password: string = ""
  cpassword: string = ""
  constructor(public afAuth: AngularFireAuth) { }

  ngOnInit() {
  }


  async register(){
    const { username, password, cpassword } = this
    console.log(password + " " + cpassword)
    if(password !== cpassword){
      return console.error("Contraseñas no coinciden")
    }
    try{
      const res = await this.afAuth.auth.createUserWithEmailAndPassword(username + "@climajuarez.com", password)
      console.log(res)
    }catch(error){
      console.dir(error)
    }

  }
}
