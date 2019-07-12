import { InjectionToken, TemplateRef } from '@angular/core';
export declare const USER_TEMPLATE: InjectionToken<TemplateRef<any>>;
export declare const USER_TEMPLATE_PROVIDER: (value: TemplateRef<any>) => {
    provide: InjectionToken<TemplateRef<any>>;
    useValue: TemplateRef<any>;
};
