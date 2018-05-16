import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { AddcommentqrPage } from '../addcommentqr/addcommentqr';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  barcodeScanner: any;

  constructor(public navCtrl: NavController, private barcode: BarcodeScanner) {
    this.barcodeScanner = barcode;
  }

  scan(){
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
      this.navCtrl.push(
        AddcommentqrPage,
        {
          idTag: barcodeData.text
        });
     }).catch(err => {
         console.log('Error', err);
     });
  }

}
