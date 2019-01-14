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
   
>You can test out all included variations on [janmalch.github.io/ngx-mat-sw-update](https://janmalch.github.io/ngx-mat-sw-update).  

#### English SnackBar notification & check once on startup

```typescript  
@NgModule({  
  imports: [  
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),  
    MatSnackBarModule
  ], 
  providers: [
    { provide: MatSwUpdate, useClass: MsuSnackBarEn }
  ]
})  
export class AppModule {  
  constructor(matUpdates: MatSwUpdate) {  
    matUpdates.checkForUpdate();  
  }  
}  
```  

#### English Dialog notification & check in interval

```typescript  
@NgModule({  
  imports: [  
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),  
    MsuDialogModule.forRoot(MsuPaddedImageDialogComponent,
      'https://firebase.google.com/images/homepage/grow_2x.png',
      { disableClose: true }
    )
  ], 
  providers: [
    { provide: MatSwUpdate, useClass: MsuDialogEn }
  ]
})  
export class AppModule {  
  constructor(matUpdates: MatSwUpdate) {  
    interval(15 * 60 * 1000).subscribe(() => matUpdates.checkForUpdate());  
  }  
}  
``` 

>Please consult the [docs](https://angular.io/guide/service-worker-communication#checking-for-updates), when to check for updates.

## `mat-sw-update` directive

```typescript  
imports: [  
  ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),  
  MsuDirectiveModule,
  // ...
``` 

You can use the `mat-sw-update` directive, to easily show update information in your templates.

Usage:

```html
<ng-container *mat-sw-update="let available$; let ctrl = controller">
  <button (click)="ctrl.checkForUpdate()">Check for Update</button>
  <button (click)="ctrl.forceNotification()">
    {{ !!(available$ | async) ? 'Update available' : 'No update available' }}
  </button>
</ng-container>
``` 

`ctrl.forceNotification` will only show the notification, if an update is available.

The directive provides the following context:

```typescript
interface MsuDirectiveContext {
  $implicit: Observable<UpdateAvailableEvent>; // emits the update event when an update is available. Won't emit if no update is available.
  controller: {
    runOnAction: (response?: boolean) => void;
    forceNotification: () => void;
    checkForUpdate: () => void;
  };
}
```

If you call `runOnAction` without arguments it defaults to `true`.

## Change behaviour  
  
`ngx-mat-sw-update` aims to be quickly ready to use but also offer the possibility to adjust to your needs.  
  
To achieve this the library has an **abstract** `MatSwUpdate` at its core. It offers a simple API to change individual parts of the update process.  
The flow is as follows:  
  
| Step | Action | `abstract` |
|--|--|--|
| `checkForUpdate(): void` | Checks for updates and the following steps will start, if an update is available. ||
| `doShow(data: UpdateAvailableEvent): boolean`| Determines if a notification should be displayed | :heavy_check_mark: |
| `showNotification(data: UpdateAvailableEvent): Observable<boolean>`| Shows the notification and returns an observable that indicates if the user confirmed the update | :heavy_check_mark: | 
| `onAction(response: boolean, data: UpdateAvailableEvent): void`| Receives the response from above and acts upon it. Defaults to activating the update and reloading the page afterwards. || 
| `activateUpdate(): Observable<void>`| Activates the update ||
| `reloadPage(force?: boolean): void`| Reloads the page via `document.location.reload(force);`||
  
With the separate `doShow` method you can decide, based on the update data, if you want to show a notification (for example if it's a crucial update). 
If you always want to show the notification just `return true`.  

To show different messages based on the update data, you have to write a custom implementation of `MsuSnackBar` or `MsuDialog`.
See [i18n](#i18n) and the [appData section](https://angular.io/guide/service-worker-config#appdata) on the angular.io page.

### Using custom implementations

To use a custom implementation simply provide it in your core module, like above.

```typescript  
@NgModule({  
  imports: [  
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    MatSnackBarModule
  ],
  providers: [
    {
      provide: MatSwUpdate,
      useClass: MyCustomMsu
    }
  ]
})  
export class AppModule {  
  constructor(matUpdates: MatSwUpdate) { // this can stay the same 
    matUpdates.checkForUpdate();  
  }  
}  
```

You have to inject certain dependencies in the base class. Example for `MsuSnackBar`:

```typescript
export class MyCustomMsu extends MsuSnackBar {
  constructor(updates: SwUpdate,
              snackBar: MatSnackBar) {
    super(updates, snackBar);
  }
  // ...
```

## Test notification

Usually you can't properly test Service Worker updates with `ng serve` or `ng serve --prod`. 
To check if your notification looks fine, you can provide the included `SwUpdateMock` class for `SwUpdate`.
Every time you call `checkForUpdate` on `MatSwUpdate` an update will be found, thus triggering the flow.
This will also work in dev mode!

```typescript
providers: [
  { provide: SwUpdate, useClass: SwUpdateMock },
  // ...
]
```

## i18n

As there are many different ways to realize i18n in your app, the library does not to enforce any particular way so that you don't end up with multiple strategies.
Currently only an english version exists: `MsuSnackBarEn` and `MsuDialogEn`. 

To use custom translations and messages, you have to create your own subclass of `MsuSnackBar`, `MsuDialog` or `MatSwUpdate`.
Both `MsuSnackBar` and `MsuDialog` have an abstract method to change the text.

#### `MsuSnackBar`
`getTranslation(data: UpdateAvailableEvent): { description: string, reloadBtn: string }` 
→ return an object with the snackbar text and the text for the reload button

#### `MsuDialog`
`getDialogInput(data: UpdateAvailableEvent): DialogInput` 
→ return an object with the title, message, reload button and cancel button label

## Class Overview

Here's an overview over all contained classes and at what point which methods are implemented.

:heavy_check_mark: = method is implemented

:x: = method is `abstract`
| `MatSwUpdate` | `MsuDialog` | `MsuDialogEn` | `MsuSnackBar` | `MsuSnackBarEn` |
|--|--|--|--|--|--|
|`abstract class`  | :heavy_check_mark: | :heavy_check_mark: | :x:| :heavy_check_mark: |:x:|
|`ngOnInit(): void`|:heavy_check_mark:|*inherited* |*inherited* |*inherited* |*inherited* |
|`doShow(data: UpdateAvailableEvent): boolean`|:x:|:x:|:heavy_check_mark:|:x:|:heavy_check_mark:|
|`showNotification(data: UpdateAvailableEvent): Observable<boolean>`|:x:|:heavy_check_mark:|*inherited*|:heavy_check_mark:|*inherited*|
|`onAction(response: boolean, data: UpdateAvailableEvent): void`|:heavy_check_mark:|*inherited*|*inherited*|:heavy_check_mark:|*inherited*|
|`activateUpdate(): Observable<void>`|:heavy_check_mark:|*inherited* |*inherited* |*inherited* |*inherited* |
|`reloadPage(force?: boolean): void`|:heavy_check_mark:|*inherited* |*inherited* |*inherited* |*inherited* |
|`getDialogInput(data: UpdateAvailableEvent, locale: string): DialogInput`||:x: |:heavy_check_mark: |||
|`getTranslation(data: UpdateAvailableEvent, locale: string): { description: string, reloadBtn: string }`||||:x: |:heavy_check_mark: |
