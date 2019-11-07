import { Component } from '@angular/core';
import { ClimaService } from '../services/clima/clima.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  clima;
  constructor(private climaService:ClimaService) {}

  ngOnInit(){
    this.climaService.Temperatura().subscribe(
      res => {
        this.clima = res
        console.log(this.clima)
      }
    )
  }

}
