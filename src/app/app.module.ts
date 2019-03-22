import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { GooglePlus } from '@ionic-native/google-plus';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { InicioPage } from '../pages/inicio/inicio';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import firebase from 'firebase';
import { UsuarioProvider } from '../providers/usuario/usuario';

export const firebaseConfig = {
  apiKey: "AIzaSyAxkW4tssew6m5ybGBxY5tsAKS6fvBkQ1s",
  authDomain: "fir-e6c08.firebaseapp.com",
  databaseURL: "https://fir-e6c08.firebaseio.com",
  projectId: "fir-e6c08",
  storageBucket: "fir-e6c08.appspot.com",
  messagingSenderId: "1032833418605"
};

firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [ 
    MyApp,
    HomePage,
    LoginPage,
    InicioPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    InicioPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GooglePlus,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UsuarioProvider
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {}
