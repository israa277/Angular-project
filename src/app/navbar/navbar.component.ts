import { Component, OnInit} from '@angular/core';
import * as $ from 'jquery'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css' ]
})
export class NavbarComponent implements OnInit {
  ngOnInit() {
     $(window).on('scroll',function() {
         let windowScroll = window.scrollY ;
         if (windowScroll>20) {
          $('.navbar').css('height' , '90')

         }else{
          $('.navbar').css('height' , '106')
         }
     });}
}
