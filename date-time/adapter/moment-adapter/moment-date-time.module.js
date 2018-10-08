import { NgModule } from '@angular/core';
import { MomentDateTimeAdapter, OWL_MOMENT_DATE_TIME_ADAPTER_OPTIONS } from './moment-date-time-adapter.class';
import { OWL_MOMENT_DATE_TIME_FORMATS } from './moment-date-time-format.class';
import { DateTimeAdapter, OWL_DATE_TIME_LOCALE } from '../date-time-adapter.class';
import { OWL_DATE_TIME_FORMATS } from '../date-time-format.class';
var MomentDateTimeModule = (function () {
    function MomentDateTimeModule() {
    }
    MomentDateTimeModule.decorators = [
        { type: NgModule, args: [{
                    providers: [
                        {
                            provide: DateTimeAdapter,
                            useClass: MomentDateTimeAdapter,
                            deps: [OWL_DATE_TIME_LOCALE, OWL_MOMENT_DATE_TIME_ADAPTER_OPTIONS]
                        },
                    ],
                },] },
    ];
    return MomentDateTimeModule;
}());
export { MomentDateTimeModule };
var ɵ0 = OWL_MOMENT_DATE_TIME_FORMATS;
var OwlMomentDateTimeModule = (function () {
    function OwlMomentDateTimeModule() {
    }
    OwlMomentDateTimeModule.decorators = [
        { type: NgModule, args: [{
                    imports: [MomentDateTimeModule],
                    providers: [{ provide: OWL_DATE_TIME_FORMATS, useValue: ɵ0 }],
                },] },
    ];
    return OwlMomentDateTimeModule;
}());
export { OwlMomentDateTimeModule };
export { ɵ0 };
