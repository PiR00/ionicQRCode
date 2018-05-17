import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { AddcommentqrPage } from '../addcommentqr/addcommentqr';

// import { Tag } from '../../classes/tag';
import { QrcodeProvider } from '../../providers/qrcode/qrcode';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  barcodeScanner: any;
  champ:string;
  tabTag:Array<any>;

  constructor(public navCtrl: NavController, private barcode: BarcodeScanner,public QrcodeProvider:QrcodeProvider, public navParams: NavParams) {
    this.barcodeScanner = barcode;
    this.champ = "8000500290767";
    this.tabTag =  [] ;


    QrcodeProvider.getAll().then( (collection) => {
      for(var doc of collection.docs) {
        var tag = doc.data();
        tag.firebaseId = doc.id;
        this.tabTag.push(tag);
      }
    });

  }

  scan(champ){

    if(champ){
      this.navCtrl.push(
        AddcommentqrPage,
        {
          idTag: champ
        });
    }else{
      this.barcodeScanner.scan().then(barcodeData => {
        // console.log('Barcode data', barcodeData);
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

}
