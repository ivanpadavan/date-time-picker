import { InjectionToken } from '@angular/core';
export var USER_TEMPLATE = new InjectionToken('USER_TEMPLATE');
export var USER_TEMPLATE_PROVIDER = function (value) { return ({
    provide: USER_TEMPLATE,
    useValue: value,
}); };
