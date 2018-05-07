import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  splash = true;
  tabSection : any;

  constructor(public navCtrl: NavController) {

    this.tabSection = document.querySelector('.tabbar')

  }
  

  ionViewDidLoad(){
    this.tabSection.style.display = 'none'
    setTimeout( () =>{ 
      this.splash = false;
      this.tabSection.style.display = 'flex'
     }, 5000 )
  }

}
