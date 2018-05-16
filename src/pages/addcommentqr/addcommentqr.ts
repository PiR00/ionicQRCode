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
  comments: Array<Comment>;
  comment: Comment;
  constructor(public QrcodeProvider:QrcodeProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.comments = this.QrcodeProvider.list();
    // console.log(this.navParams.get('idTag'));
    this.QrcodeProvider.get(this.navParams.get('idTag')).then( (doc) => {
      console.log(doc.data());
      this.id = doc.data();
      this.description = doc.data().description;
      this.title = doc.data().title;
    });

    this.QrcodeProvider.getComments(this.navParams.get('idTag')).then((collection) => {
      for (let doc of collection.docs) {
        this.comment.content = doc.data().content;
        this.comment.user = doc.data().username;
        this.comments.push(this.comment);
      }  
    });

  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad AddcommentqrPage');
  }

}
