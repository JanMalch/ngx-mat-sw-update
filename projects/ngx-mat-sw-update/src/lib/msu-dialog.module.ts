import {ModuleWithProviders, NgModule, Type} from '@angular/core';
import {MatButtonModule, MatCardModule, MatDialogModule} from '@angular/material';
import {MatSwUpdate} from './mat-sw-update';
import {MsuDialogEn} from './implementations';
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
          provide: MatSwUpdate,
          useExisting: MsuDialogEn
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
