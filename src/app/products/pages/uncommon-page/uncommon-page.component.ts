import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {
  public name: string = "Fernando";
  public gender: 'male' | 'female' = "male";
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  }

  chageClient() {
    this.name = ' Melisa';
    this.gender = 'female';
  }

  // i18Plural

  public clients: string[] = ['Maria', 'pedro', 'Fernadno']
  public clientsMap = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos 2 clientes esperando',
    'other': 'tenemos # clientes esperando',
  }

  delete() {
    this.clients.shift();
  }


  //json
  public person = {
    name: 'Andres',
    surname: 'Aristizabal;',
    age: 34
  }

  //Async

  public myObservableTimer = interval(2000)
}
