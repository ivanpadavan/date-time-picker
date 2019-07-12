import { AfterContentInit, AfterViewChecked, ChangeDetectorRef, ElementRef, EventEmitter, NgZone, OnDestroy, OnInit } from '@angular/core';
import { OwlDateTimeIntl } from './date-time-picker-intl.service';
import { DateTimeAdapter } from './adapter/date-time-adapter.class';
import { OwlDateTimeFormats } from './adapter/date-time-format.class';
import { SelectMode } from './date-time.class';
export declare class OwlCalendarComponent<T> implements OnInit, AfterContentInit, AfterViewChecked, OnDestroy {
    private elmRef;
    private pickerIntl;
    private ngZone;
    private cdRef;
    private dateTimeAdapter;
    private dateTimeFormats;
    dateFilter: Function;
    firstDayOfWeek: number;
    private _minDate;
    minDate: T | null;
    private _maxDate;
    maxDate: T | null;
    private _pickerMoment;
    pickerMoment: T;
    selectMode: SelectMode;
    private _selected;
    selected: T | null;
    private _selecteds;
    selecteds: T[];
    startView: 'month' | 'year' | 'multi-years';
    hideOtherMonths: boolean;
    pickerMomentChange: EventEmitter<T>;
    selectedChange: EventEmitter<T>;
    userSelection: EventEmitter<void>;
    readonly yearSelected: EventEmitter<T>;
    readonly monthSelected: EventEmitter<T>;
    readonly periodButtonText: string;
    readonly periodButtonLabel: string;
    readonly prevButtonLabel: string;
    readonly nextButtonLabel: string;
    private _currentView;
    currentView: 'month' | 'year' | 'multi-years';
    readonly isInSingleMode: boolean;
    readonly isInRangeMode: boolean;
    readonly showControlArrows: boolean;
    readonly isMonthView: boolean;
    readonly isYearView: boolean;
    dateFilterForViews: (date: T) => boolean;
    readonly owlDTCalendarClass: boolean;
    private intlChangesSub;
    private moveFocusOnNextTick;
    constructor(elmRef: ElementRef, pickerIntl: OwlDateTimeIntl, ngZone: NgZone, cdRef: ChangeDetectorRef, dateTimeAdapter: DateTimeAdapter<T>, dateTimeFormats: OwlDateTimeFormats);
    ngOnInit(): void;
    ngAfterContentInit(): void;
    ngAfterViewChecked(): void;
    ngOnDestroy(): void;
    toggleBetweenMonthAndYearViews(): void;
    toggleBetweenYearAndMultiYearViews(): void;
    previousClicked(): void;
    nextClicked(): void;
    dateSelected(date: T): void;
    goToDateInView(date: T, view: 'month' | 'year' | 'multi-years'): void;
    handlePickerMomentChange(date: T): void;
    userSelected(): void;
    prevButtonEnabled(): boolean;
    nextButtonEnabled(): boolean;
    focusActiveCell(): void;
    selectYearInMultiYearView(normalizedYear: T): void;
    selectMonthInYearView(normalizedMonth: T): void;
    private isSameView;
    private getValidDate;
}
