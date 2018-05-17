import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QrcodeProvider } from '../../providers/qrcode/qrcode';
import {Comment} from '../../classes/comment';
/**
 * Generated class for the AddcommentqrPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addcommentqr',
  templateUrl: 'addcommentqr.html',
})
export class AddcommentqrPage {

  id: any;
  description: string;
  title: string;
  comments: Array<any>;
  comment: Comment;

  nameComment: string;
  commentaire: string;
  public qrdata: string = null;
  constructor(public QrcodeProvider:QrcodeProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.comments = [];
    this.QrcodeProvider.get(this.navParams.get('idTag')).then( (doc) => {
      this.id = this.navParams.get('idTag');
      this.description = doc.data().description;
      this.title = doc.data().title;
      this.qrdata = this.id;
    });
    
    // this.qrcode = this.QrcodeProvider.encode(this.navParams.get('idTag'), this.barcodeScanner);
        
    this.QrcodeProvider.getComments(this.navParams.get('idTag')).then((collection) => {
      for (let doc of collection.docs) {
        this.comments.push(doc.data());
      }
    });

  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad AddcommentqrPage');
  }

  sendComment(name, comment){
    this.QrcodeProvider.setComment(name, comment, this.navParams.get('idTag'));
    this.nameComment = "";
    this.commentaire = "";
  }
}
