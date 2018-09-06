import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { Camera } from '@ionic-native/camera';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NewsPage } from '../pages/news/news';
import { NewsServiceProvider } from '../providers/news-service/news-service';

import { HttpModule } from '@angular/http';
import { TodosPage } from '../pages/todos/todos';
import { CameraPage } from '../pages/camera/camera';
import { QrcodePage } from '../pages/qrcode/qrcode';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { ProfilePage } from '../pages/profile/profile';
import { LoginPage } from '../pages/login/login';
import { HttpClientModule } from '@angular/common/http';
import { RegisterPage } from '../pages/register/register';
import { YoutubePage } from '../pages/youtube/youtube';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NewsPage,
    TodosPage,
    CameraPage,
    QrcodePage,
    ProfilePage,
    LoginPage,
    RegisterPage,
    YoutubePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    NgxQRCodeModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    NewsPage,
    TodosPage,
    CameraPage,
    QrcodePage,
    ProfilePage,
    LoginPage,
    RegisterPage,
    YoutubePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    BarcodeScanner,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    NewsServiceProvider
  ]
})
export class AppModule { }
