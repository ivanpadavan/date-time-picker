/**
 * date-time-picker-intl.service
 */

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class OwlDateTimeIntl {

    /**
     * Stream that emits whenever the labels here are changed. Use this to notify
     * components if the labels have changed after initialization.
     */
    readonly changes: Subject<void> = new Subject<void>();

    /** A label for the up second button (used by screen readers).  */
    upSecondLabel = 'Секундой позжк';

    /** A label for the down second button (used by screen readers).  */
    downSecondLabel = 'Секундой раньше';

    /** A label for the up minute button (used by screen readers).  */
    upMinuteLabel = 'Минутой позже';

    /** A label for the down minute button (used by screen readers).  */
    downMinuteLabel = 'Минутой раньше';

    /** A label for the up hour button (used by screen readers).  */
    upHourLabel = 'Часом позже';

    /** A label for the down hour button (used by screen readers).  */
    downHourLabel = 'Часом раньше';

    /** A label for the previous month button (used by screen readers). */
    prevMonthLabel = 'Пред. месяц';

    /** A label for the next month button (used by screen readers). */
    nextMonthLabel = 'След. месяц';

    /** A label for the previous year button (used by screen readers). */
    prevYearLabel = 'Пред. год';

    /** A label for the next year button (used by screen readers). */
    nextYearLabel = 'След. год';

    /** A label for the previous multi-year button (used by screen readers). */
    prevMultiYearLabel: string = 'Пред. 21 год';

    /** A label for the next multi-year button (used by screen readers). */
    nextMultiYearLabel: string = 'След 21 год';

    /** A label for the 'switch to month view' button (used by screen readers). */
    switchToMonthViewLabel = 'Вбрать день';

    /** A label for the 'switch to year view' button (used by screen readers). */
    switchToMultiYearViewLabel: string = 'Выбрать месяц и год';

    /** A label for the cancel button */
    cancelBtnLabel = 'Отмена';

    /** A label for the set button */
    setBtnLabel = 'Установить';

    /** A label for the range 'from' in picker info */
    rangeFromLabel = 'От';

    /** A label for the range 'to' in picker info */
    rangeToLabel = 'До';

    /** A label for the hour12 button (AM) */
    hour12AMLabel = 'AM';

    /** A label for the hour12 button (PM) */
    hour12PMLabel = 'PM';
}
