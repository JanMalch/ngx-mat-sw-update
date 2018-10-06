import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ServiceWorkerModule, SwUpdate} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {
  MatSwUpdate,
  MsuDialogEn,
  MsuSnackBarEn,
  MsuBasicDialogComponent,
  MsuDialogModule,
  MsuImageDialogComponent,
  MsuPaddedImageDialogComponent,
  MsuSnackBarModule
} from 'ngx-mat-sw-update';
import {SwUpdateMock} from './sw-update.mock';
import {MAT_DIALOG_DEFAULT_OPTIONS, MAT_SNACK_BAR_DEFAULT_OPTIONS} from '@angular/material';
import {FormsModule} from '@angular/forms';

// --------- this only works with JIT (not production) and is just for demo purposes ---------
const yourImageUrl = localStorage.getItem('yourImageUrl') ||
  "https://images.unsplash.com/photo-1517694712202-14…69d9a7cae56b8d4d1&auto=format&fit=crop&w=580&q=80";
const dialogOptions = {
  'Basic': MsuBasicDialogComponent,
  'Image': MsuImageDialogComponent,
  'Padded': MsuPaddedImageDialogComponent
};
const yourDialogComponent = dialogOptions[localStorage.getItem('yourDialogComponent') || 'Basic'];
const yourStrategy = localStorage.getItem('yourStrategy') === 'Dialog' ? MsuDialogEn : MsuSnackBarEn;

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
    // MsuDialogModule.forRoot(MsuPaddedImageDialogComponent, 'https://firebase.google.com/images/homepage/grow_2x.png') // the actual way
    MsuDialogModule.forRoot(yourDialogComponent, yourImageUrl) // this is just for the demo
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
      useValue: {duration: 10_000}
    },
    {
      provide: MatSwUpdate,
      useClass: yourStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(matUpdates: MatSwUpdate) {
    matUpdates.ngOnInit();
  }

}
