import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ServiceWorkerModule, SwUpdate} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {
  EnDialogMatSwUpdate,
  EnSnackBarMatSwUpdate,
  MsuBasicDialogComponent,
  MsuDialogModule,
  MsuImageDialogComponent,
  MsuPaddedImageDialogComponent,
  MsuSnackBarModule,
  NgxMatSwUpdateService
} from 'ngx-mat-sw-update';
import {SwUpdateMock} from './sw-update.mock';
import {MAT_DIALOG_DEFAULT_OPTIONS, MAT_SNACK_BAR_DEFAULT_OPTIONS} from '@angular/material';
import {FormsModule} from '@angular/forms';

const yourImageUrl = localStorage.getItem('yourImageUrl') || 'https://www.lynxeds.com/sites/default/files/ermine_mustela_erminea.jpg';
const dialogOptions = {
  'Basic': MsuBasicDialogComponent,
  'Image': MsuImageDialogComponent,
  'Padded': MsuPaddedImageDialogComponent
};
const yourDialogComponent = dialogOptions[localStorage.getItem('yourDialogComponent') || 'Basic'];
const yourStrategy = localStorage.getItem('yourStrategy') === 'Dialog' ? EnDialogMatSwUpdate : EnSnackBarMatSwUpdate;

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    MsuSnackBarModule.forRoot(),
    // MsuDialogModule.forRoot(MsuPaddedImageDialogComponent, 'https://firebase.google.com/images/homepage/grow_2x.png')
    MsuDialogModule.forRoot(yourDialogComponent, yourImageUrl)
  ],
  providers: [
    {
      provide: SwUpdate,
      useClass: SwUpdateMock
    },
    {
      provide: MAT_DIALOG_DEFAULT_OPTIONS,
      useValue: {disableClose: true, maxWidth: 580, hasBackdrop: true}
    },
    {
      provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
      useValue: {duration: 15000}
    },
    {
      provide: NgxMatSwUpdateService,
      useClass: yourStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(matUpdates: NgxMatSwUpdateService) {
    matUpdates.ngOnInit();
  }

}
