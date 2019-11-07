import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {

  url = '';
  constructor(public http: HttpClient){
    this.url= 'http://api.openweathermap.org/data/2.5/weather?q=Monterrey&units=metric&APPID=fa4cf52b775afc5e4a6520d352ad989a'
  }

  Temperatura(){
    return this.http.get(this.url);
  }
}

