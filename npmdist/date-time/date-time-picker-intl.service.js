import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
var OwlDateTimeIntl = (function () {
    function OwlDateTimeIntl() {
        this.changes = new Subject();
        this.upSecondLabel = 'Секундой позжк';
        this.downSecondLabel = 'Секундой раньше';
        this.upMinuteLabel = 'Минутой позже';
        this.downMinuteLabel = 'Минутой раньше';
        this.upHourLabel = 'Часом позже';
        this.downHourLabel = 'Часом раньше';
        this.prevMonthLabel = 'Пред. месяц';
        this.nextMonthLabel = 'След. месяц';
        this.prevYearLabel = 'Пред. год';
        this.nextYearLabel = 'След. год';
        this.prevMultiYearLabel = 'Пред. 21 год';
        this.nextMultiYearLabel = 'След 21 год';
        this.switchToMonthViewLabel = 'Вбрать день';
        this.switchToMultiYearViewLabel = 'Выбрать месяц и год';
        this.cancelBtnLabel = 'Отмена';
        this.setBtnLabel = 'Установить';
        this.rangeFromLabel = 'От';
        this.rangeToLabel = 'До';
        this.hour12AMLabel = 'AM';
        this.hour12PMLabel = 'PM';
    }
    OwlDateTimeIntl.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] },
    ];
    OwlDateTimeIntl.ngInjectableDef = i0.defineInjectable({ factory: function OwlDateTimeIntl_Factory() { return new OwlDateTimeIntl(); }, token: OwlDateTimeIntl, providedIn: "root" });
    return OwlDateTimeIntl;
}());
export { OwlDateTimeIntl };
