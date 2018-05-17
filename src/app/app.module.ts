import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { AddcommentqrPage } from '../pages/addcommentqr/addcommentqr';

import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { QRCodeModule } from 'angularx-qrcode';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { QrcodeProvider } from '../providers/qrcode/qrcode';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    AddcommentqrPage

  ],
  imports: [
    BrowserModule,
    QRCodeModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    AddcommentqrPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    QrcodeProvider
  ]
})
export class AppModule {}
