import {ModuleWithProviders, NgModule} from '@angular/core';
import {MatSnackBarModule} from '@angular/material';
import {MatSwUpdate} from './mat-sw-update';
import {MsuSnackBarEn} from './implementations';

@NgModule({
  imports: [
    MatSnackBarModule
  ]
})
export class MsuSnackBarModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: MsuSnackBarModule,
      providers: [
        {
          provide: MatSwUpdate,
          useClass: MsuSnackBarEn
        }
      ]
    };
  }
}
