import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {
  public nameLower: string = 'fernando';
  public nameUpper: string = 'fernando';
  public fullName: string = 'fErNAndo hErRERA' ;
  public customDate: Date = new Date() ;

}
