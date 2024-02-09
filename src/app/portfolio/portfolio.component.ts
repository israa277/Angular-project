import { Component } from '@angular/core';
import { UrlTree } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
image:string[] = ['./assets/image/poert1.png','./assets/image/port2.png','./assets/image/port3.png','./assets/image/poert1.png','./assets/image/port2.png','./assets/image/port3.png']
isvalied! :boolean;
cureentSRc!:any;
clickImage(event:any){
   this.cureentSRc = event.target.dataset.src
   this.isvalied = true
}
clickX(){
  this.isvalied=false
}
}
