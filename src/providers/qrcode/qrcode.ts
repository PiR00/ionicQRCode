import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tag } from '../../classes/tag';
import {Comment} from '../../classes/comment';
import firebase from 'firebase';
import 'firebase/firestore';

import { Configuration } from '../../app/config';


/*
  Generated class for the QrcodeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class QrcodeProvider {
  listData: Array<Comment>;
  qrCode: Tag;
  constructor(/*public http: HttpClient*/) {
    firebase.initializeApp(Configuration.firebase);
  }

  list():Array<Comment> {
    return this.listData;
  }

  getAll() {
    const db = firebase.firestore();

    return db.collection("tag").get();
    /*for(let article of this.articles) {
      if(article.id == id) {
        return article;
      }
    }*/
  }

  get(id) {
    const db = firebase.firestore();

    db.collection('tag').doc(id).collection('comments');
    return db.collection("tag").doc(id).get();
    /*for(let article of this.articles) {
      if(article.id == id) {
        return article;
      }
    }*/
  }

  getComments(TagId) {
    const db = firebase.firestore();
    return db.collection('tag').doc(TagId).collection('comments').get();
    //return db.collection("comments").get();
  }

}
