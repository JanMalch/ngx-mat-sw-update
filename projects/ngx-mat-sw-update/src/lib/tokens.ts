import {InjectionToken, Type} from '@angular/core';
import {MatDialogConfig} from "@angular/material";

export const MSU_DIALOG_COMPONENT = new InjectionToken<Type<any>>("MSU_DIALOG_COMPONENT");
export const MSU_DIALOG_IMAGE = new InjectionToken<string>("MSU_DIALOG_IMAGE");
export const MSU_DIALOG_CONFIG = new InjectionToken<MatDialogConfig>("MSU_DIALOG_CONFIG");
