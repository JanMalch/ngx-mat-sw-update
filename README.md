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
  
Currently `ngx-mat-sw-update` offers two ready to use notification variants (use one of them):  
  
```typescript  
@NgModule({  
  imports: [  
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),  
    MsuSnackBarModule.forRoot(), // show a SnackBar as notification    
    MsuDialogModule.forRoot(yourDialogComponent, yourImageUrl) // show a Dialog as notification 
  ]
})  
export class AppModule {  
  constructor(matUpdates: NgxMatSwUpdateService) {  
    matUpdates.ngOnInit();  
  }  
}  
```  
  
  
## Usage  
  
### `MsuDialogModule`  
  
The `MsuDialogModule.forRoot` method takes 2 parameters:  
  
* `dialogComponent: Type<any> = MsuBasicDialogComponent` → the component to show in the dialog.   
Defaults to a simple text message. You can put your own custom DialogComponent here.  
* `imageUrl?: string` → `ngx-mat-sw-update` brings two custom components which include images. You can simply change the image with this parameter.  
  
>You can test out all included variations on [janmalch.github.io/ngx-mat-sw-update](https://janmalch.github.io/ngx-mat-sw-update).  
  
### Change behaviour  
  
`ngx-mat-sw-update` aims to be quickly ready to use but also offer the possibility to adjust to your needs.  
  
To achieve this the library has an **abstract** `NgxMatSwUpdateService` at its core. It offers a simple API to change individual parts of the update process.  
The flow is as follows:  
  
| Step | Action | `abstract` |  
|--|--|--|  
| `ngOnInit(): void` | Initialize the update process. You have to call this manually! |   
| `doShow(data: UpdateAvailableEvent): boolean`| Determines if a notification should be displayed | :heavy_check_mark:  
| `showNotification(data: UpdateAvailableEvent): Observable<boolean>`| Shows the notification and returns an observable that indicates if the user confirmed the update | :heavy_check_mark:  
| `onAction(response: boolean): void`| Receives the response from above and acts upon it. |  :heavy_check_mark:  
|`activateUpdate(): Observable<void>`| Activates the update |  
| `reloadPage(force?: boolean): void`| Reloads the page via `document.location.reload(force);`  
  
With the separate `doShow`method you can decide, based on the UpdateData, if you want to show a notification (for example if it's a crucial update). If you always want to show the notification just `return true`.  

The `onAction` implementation most likely looks like this in most cases:

```typescript
onAction(response: boolean): void {  
  if (response) {  
    this.activateUpdate().subscribe(() => this.reloadPage());  
  }  
}
```

### i18n

As there are many different ways to realize i18n in your app I decided not to enforce any paticular way so that you don't end up with multiple strategies.

Both **abstract** classes `SnackBarMatSwUpdate`and `DialogMatSwUpdate` have an abstract method to change the text.

#### `SnackBarMatSwUpdate`
`getTranslation(locale: string): { description: string, reloadBtn: string }` → return an object with the snackbar text and the text for the reloadBtn. The method receives the current `LOCALE_ID`

#### `DialogMatSwUpdate`
`getDialogInput(locale: string): DialogInput` → return an object with the title, message, reload button and cancel button label. The method receives the current `LOCALE_ID`
