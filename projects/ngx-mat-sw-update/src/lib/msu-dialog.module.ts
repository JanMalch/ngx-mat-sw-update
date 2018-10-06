import {ModuleWithProviders, NgModule, Type} from '@angular/core';
import {MatButtonModule, MatCardModule, MatDialogModule, MatSnackBarModule} from '@angular/material';
import {NgxMatSwUpdateService} from './ngx-mat-sw-update.service';
import {EnDialogMatSwUpdate} from './implementations/dialog.en.service';
import {MSU_DIALOG_COMPONENT, MSU_DIALOG_IMAGE} from './tokens';
import {MsuBasicDialogComponent} from './components/msu-basic-dialog/msu-basic-dialog.component';
import {MsuImageDialogComponent} from './components/msu-image-dialog/msu-image-dialog.component';
import {MsuPaddedImageDialogComponent} from './components/msu-padded-image-dialog/msu-padded-image-dialog.component';

@NgModule({
  imports: [
    MatDialogModule,
    MatButtonModule,
    MatCardModule
  ],
  declarations: [MsuBasicDialogComponent, MsuImageDialogComponent, MsuPaddedImageDialogComponent],
  entryComponents: [MsuBasicDialogComponent, MsuImageDialogComponent, MsuPaddedImageDialogComponent],
  exports: [MsuBasicDialogComponent, MsuImageDialogComponent, MsuPaddedImageDialogComponent]
})
export class MsuDialogModule {

  static forRoot(useComponent: Type<any> = MsuBasicDialogComponent, imageUrl?: string): ModuleWithProviders {
    return {
      ngModule: MsuDialogModule,
      providers: [
        {
          provide: NgxMatSwUpdateService,
          useClass: EnDialogMatSwUpdate
        },
        {
          provide: MSU_DIALOG_COMPONENT,
          useValue: useComponent
        },
        {
          provide: MSU_DIALOG_IMAGE,
          useValue: imageUrl
        }
      ]
    };
  }
}
