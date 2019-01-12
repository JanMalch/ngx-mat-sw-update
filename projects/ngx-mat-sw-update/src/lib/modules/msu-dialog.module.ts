import {ModuleWithProviders, NgModule, Type} from '@angular/core';
import {MatButtonModule, MatCardModule, MatDialogModule} from '@angular/material';
import {MSU_DIALOG_COMPONENT, MSU_DIALOG_IMAGE} from '../tokens';
import {MsuBasicDialogComponent} from '../components/msu-basic-dialog/msu-basic-dialog.component';
import {MsuImageDialogComponent} from '../components/msu-image-dialog/msu-image-dialog.component';
import {MsuPaddedImageDialogComponent} from '../components/msu-padded-image-dialog/msu-padded-image-dialog.component';

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

  // tslint:disable:max-line-length
  /**
   * Static method to configure the MsuDialogModule for module import.
   * You can choose which component to use for the dialog notification. It defaults to MsuBasicDialogComponent. You can also put your own custom component here.
   * The module includes the following ready-to-use components: MsuBasicDialogComponent, MsuImageDialogComponent, MsuPaddedImageDialogComponent
   * The latter two require the second parameter `imageUrl` to be set.
   * Please note that you still have to provide a service separately.
   * @param useComponent The component to show in the dialog
   * @param imageUrl The image URL used in certain components
   */
  static forRoot(useComponent: Type<any> = MsuBasicDialogComponent, imageUrl?: string): ModuleWithProviders {
    return {
      ngModule: MsuDialogModule,
      providers: [
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
