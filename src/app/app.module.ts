import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ServiceWorkerModule, SwUpdate} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {
  MatSwUpdate,
  MsuDialogEn,
  MsuDialogModule,
  MsuDirectiveModule,
  MsuPaddedImageDialogComponent,
  SwUpdateMock
} from 'ngx-mat-sw-update';
import {MAT_DIALOG_DEFAULT_OPTIONS, MAT_SNACK_BAR_DEFAULT_OPTIONS} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    MsuDirectiveModule,
    MsuDialogModule.forRoot(MsuPaddedImageDialogComponent,
      'https://firebase.google.com/images/homepage/grow_2x.png',
      { disableClose: true }
    )
  ],
  providers: [
    {
      provide: SwUpdate,
      useClass: SwUpdateMock
    },
    {
      provide: MAT_DIALOG_DEFAULT_OPTIONS,
      useValue: {disableClose: true, width: "580px", maxWidth: "90vw", hasBackdrop: true}
    },
    {
      provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
      useValue: {duration: 10_000}
    },
    {
      provide: MatSwUpdate,
      useClass: MsuDialogEn
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
