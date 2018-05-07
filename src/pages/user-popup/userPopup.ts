import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';

@Component({
    template: `
      <ion-list>
        <ion-list-header>Ionic</ion-list-header>
        <button ion-item (click)="close()">Learn Ionic</button>
        <button ion-item (click)="close()">Documentation</button>
        <button ion-item (click)="close()">Showcase</button>
        <button ion-item (click)="close()">GitHub Repo</button>
      </ion-list>
    `
  })
  class PopoverPage {
    constructor(public viewCtrl: ViewController) {}
  
    close() {
      this.viewCtrl.dismiss();
    }
  }