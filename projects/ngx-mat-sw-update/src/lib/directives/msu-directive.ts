import {Directive, OnDestroy, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import {MatSwUpdate} from "../services/mat-sw-update";
import {Observable} from "rxjs";
import {UpdateAvailableEvent} from "@angular/service-worker/src/low_level";

export interface MsuDirectiveContext {
  $implicit: Observable<UpdateAvailableEvent>;
  controller: {
    runOnAction: (response?: boolean) => void;
    forceNotification: () => void;
    checkForUpdate: () => void;
  };
}

@Directive({
  selector: '[mat-sw-update]' // tslint:disable-line:directive-selector
})
export class MsuDirective implements OnInit, OnDestroy {

  constructor(private vcr: ViewContainerRef,
              private tmpl: TemplateRef<MsuDirectiveContext>,
              private msuService: MatSwUpdate) {
  }

  ngOnInit() {
    this.createView();
  }

  private createView() {
    this.vcr.createEmbeddedView<MsuDirectiveContext>(this.tmpl, {
      $implicit: this.msuService.availableUpdate$,
      controller: {
       forceNotification: () => { this.msuService.forceNotification(); },
       runOnAction: (response: boolean = true) => { this.msuService.onAction(response, this.msuService.availableUpdate); },
       checkForUpdate: () => { this.msuService.checkForUpdate(); }
      }
    });
  }

  ngOnDestroy() {
    this.vcr.clear();
  }
}
