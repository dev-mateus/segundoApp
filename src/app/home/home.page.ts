import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  frase : string;
  resultado : string;

  constructor() {}

  escrever(){

    this.resultado = this.frase
  
  }

}
