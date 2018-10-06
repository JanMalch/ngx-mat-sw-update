import {ModuleWithProviders, NgModule} from '@angular/core';
import {MatSnackBarModule} from '@angular/material';
import {NgxMatSwUpdateService} from './ngx-mat-sw-update.service';
import {EnSnackBarMatSwUpdate} from './implementations';

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
          provide: NgxMatSwUpdateService,
          useClass: EnSnackBarMatSwUpdate
        }
      ]
    };
  }
}
