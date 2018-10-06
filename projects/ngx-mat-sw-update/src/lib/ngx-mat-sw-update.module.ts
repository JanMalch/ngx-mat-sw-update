import {ModuleWithProviders, NgModule, Type} from '@angular/core';
// import {MsuBasicDialogComponent, MsuImageDialogComponent, MsuPaddedImageDialogComponent} from './components';
import {MatButtonModule, MatCardModule, MatDialogModule, MatSnackBarModule} from '@angular/material';
import {NgxMatSwUpdateService} from './ngx-mat-sw-update.service';

@NgModule({
  imports: [
    MatButtonModule,
    MatDialogModule,
    MatSnackBarModule,
    MatCardModule
  ]/*,
  declarations: [MsuBasicDialogComponent, MsuImageDialogComponent, MsuPaddedImageDialogComponent],
  exports: [MsuBasicDialogComponent, MsuImageDialogComponent, MsuPaddedImageDialogComponent],
  entryComponents: [MsuBasicDialogComponent, MsuImageDialogComponent, MsuPaddedImageDialogComponent]*/
})
export class NgxMatSwUpdateModule {

  /*constructor(private matUpdates: NgxMatSwUpdateService) {
    console.log('this.matUpdates:', this.matUpdates);
    this.matUpdates.ngOnInit();
  }

  static forRoot(useImplementation: Type<NgxMatSwUpdateService>): ModuleWithProviders {
    return {
      ngModule: NgxMatSwUpdateModule,
      providers: [{
        provide: NgxMatSwUpdateService,
        useValue: useImplementation
      }]
    };
  }*/
}
