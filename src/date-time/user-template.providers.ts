import { InjectionToken, TemplateRef } from '@angular/core';

/** Injection token that determines the scroll handling while the dtPicker is open. */
export const USER_TEMPLATE =
    new InjectionToken<TemplateRef<any>>('USER_TEMPLATE');
/** @docs-private */
export const USER_TEMPLATE_PROVIDER = (value: TemplateRef<any>) => ({
    provide: USER_TEMPLATE,
    useValue: value,
});
