[![npm version](https://badge.fury.io/js/ngx-mat-sw-update.svg)](https://badge.fury.io/js/ngx-mat-sw-update) 

# ngx-mat-sw-update
  
`ngx-mat-sw-update` is a small Angular library that helps you to quickly setup a notification for the user,  
when there's a new update for your website available. Please read more on Service Workers [here](https://angular.io/guide/service-worker-intro).  

> [Mocked Demo](https://janmalch.github.io/ngx-mat-sw-update)  

## Installation  
  
```  
ng add @angular/pwa  
npm install ngx-mat-sw-update  
```  
  
Currently `ngx-mat-sw-update` offers two ready to use notification variants (use one of them or [implement your own](#change-behaviour)):  
  
```typescript  
@NgModule({  
  imports: [  
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),  
    MsuSnackBarModule.forRoot(), // show a SnackBar as notification    
    MsuDialogModule.forRoot() // show a Dialog as notification 
  ]
})  
export class AppModule {  
  constructor(matUpdates: MatSwUpdate) {  
    matUpdates.ngOnInit();  
  }  
}  
```  
  
  
## Usage  
  
### `MsuDialogModule`  
  
The `MsuDialogModule.forRoot` method takes 2 parameters:  
  
* `dialogComponent: Type<any> = MsuBasicDialogComponent` → the component to show in the dialog.   
Defaults to a simple text message. You can put your own custom component here.  
* `imageUrl?: string` → `ngx-mat-sw-update` brings two custom components which include images. You can simply change the image with this parameter.  
  
>You can test out all included variations on [janmalch.github.io/ngx-mat-sw-update](https://janmalch.github.io/ngx-mat-sw-update).  
  
### Change behaviour  
  
`ngx-mat-sw-update` aims to be quickly ready to use but also offer the possibility to adjust to your needs.  
  
To achieve this the library has an **abstract** `MatSwUpdate` at its core. It offers a simple API to change individual parts of the update process.  
The flow is as follows:  
  
| Step | Action | `abstract` |  
|--|--|--|  
| `ngOnInit(): void` | Initialize the update process. You have to call this manually! |   
| `doShow(data: UpdateAvailableEvent): boolean`| Determines if a notification should be displayed | :heavy_check_mark:  
| `showNotification(data: UpdateAvailableEvent): Observable<boolean>`| Shows the notification and returns an observable that indicates if the user confirmed the update | :heavy_check_mark:  
| `onAction(response: boolean): void`| Receives the response from above and acts upon it. |  :heavy_check_mark:  
| `activateUpdate(): Observable<void>`| Activates the update |  
| `reloadPage(force?: boolean): void`| Reloads the page via `document.location.reload(force);`  
  
With the separate `doShow` method you can decide, based on the update data, if you want to show a notification (for example if it's a crucial update). 
If you always want to show the notification just `return true`.  

To show different messages based on the update data, you have to write a custom implementation of `MsuSnackBar` or `MsuDialog`.
See [i18n](#i18n) and the [appData section](https://angular.io/guide/service-worker-config#appdata) on the angular.io page.

The `onAction` implementation most likely looks like this in most cases:

```typescript
onAction(response: boolean): void {  
  if (response) {  
    this.activateUpdate().subscribe(() => this.reloadPage());  
  }  
}
```

### Using custom implementations

If you implemented a custom service you don't have to import the modules mentioned above.
Change your core module to this:

```typescript  
@NgModule({  
  imports: [  
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    MatSnackBarModule // you have to import the necessary material modules yourself
  ],
  providers: [
    {
      provide: MatSwUpdate,
      useClass: MsuCustomSnackBar
    }
  ]
})  
export class AppModule {  
  constructor(matUpdates: MatSwUpdate) { // this can stay the same 
    matUpdates.ngOnInit();  
  }  
}  
```

To use a custom service with the existing dialogs simply import the `MsuDialogModule` module and add the provider like above.
You can now use the existing MsuDialogComponents

### i18n and custom messages

As there are many different ways to realize i18n in your app I decided not to enforce any particular way so that you don't end up with multiple strategies.
Currently only an english version exists: `MsuSnackBarEn` and `MsuDialogEn`. 

To use custom translations and messages, you have to create your own subclass of `MsuSnackBar`, `MsuDialog` or `MatSwUpdate`.
Both `MsuSnackBar` and `MsuDialog` have an abstract method to change the text.

#### `MsuSnackBar`
`getTranslation(data: UpdateAvailableEvent, locale: string): { description: string, reloadBtn: string }` 
→ return an object with the snackbar text and the text for the reload button

The method receives the current `LOCALE_ID` and the update data, to change the messages individually.

#### `MsuDialog`
`getDialogInput(data: UpdateAvailableEvent, locale: string): DialogInput` 
→ return an object with the title, message, reload button and cancel button label

The method receives the current `LOCALE_ID` and the update data, to change the messages individually.

## Class Overview

Here's an overview over all contained classes and at what point which methods are implemented.
:heavy_check_mark: = method is implemented
:x: = method is `abstract`

|| `MatSwUpdate` | `MsuDialog` | `MsuDialogEn` | `MsuSnackBar` | `MsuSnackBarEn` |
|--|--|--|--|--|--|
|`abstract class`  | :heavy_check_mark: | :heavy_check_mark: | :x:| :heavy_check_mark: |:x:|
|`ngOnInit(): void`|:heavy_check_mark:|*inherited* |*inherited* |*inherited* |*inherited* |
|`doShow(data: UpdateAvailableEvent): boolean`|:x:|:x:|:heavy_check_mark:|:x:|:heavy_check_mark:|
|`showNotification(data: UpdateAvailableEvent): Observable<boolean>`|:x:|:heavy_check_mark:|*inherited*|:heavy_check_mark:|*inherited*|
|`onAction(response: boolean): void`|:x:|:heavy_check_mark:|*inherited*|:heavy_check_mark:|*inherited*|
|`activateUpdate(): Observable<void>`|:heavy_check_mark:|*inherited* |*inherited* |*inherited* |*inherited* |
|`reloadPage(force?: boolean): void`|:heavy_check_mark:|*inherited* |*inherited* |*inherited* |*inherited* |
|`getDialogInput(data: UpdateAvailableEvent, locale: string): DialogInput`||:x: |:heavy_check_mark: |||
|`getTranslation(data: UpdateAvailableEvent, locale: string): { description: string, reloadBtn: string }`||||:x: |:heavy_check_mark: |
