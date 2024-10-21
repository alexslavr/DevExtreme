/* tslint:disable:max-line-length */


import {
    Component,
    NgModule,
    Host,
    ElementRef,
    Renderer2,
    Inject,
    AfterViewInit,
    SkipSelf,
    Input
} from '@angular/core';

import { DOCUMENT } from '@angular/common';


import { template } from 'devextreme/core/templates/template';
import { AppointmentTemplateData, AppointmentTooltipTemplateData, dxSchedulerScrolling } from 'devextreme/ui/scheduler';

import {
    NestedOptionHost,
    extractTemplate,
    DxTemplateDirective,
    IDxTemplateHost,
    DxTemplateHost
} from 'devextreme-angular/core';
import { CollectionNestedOption } from 'devextreme-angular/core';


@Component({
    selector: 'dxi-scheduler-view',
    template: '<ng-content></ng-content>',
    styles: [':host { display: block; }'],
    providers: [NestedOptionHost, DxTemplateHost]
})
export class DxiSchedulerViewComponent extends CollectionNestedOption implements AfterViewInit,
    IDxTemplateHost {
    @Input()
    get agendaDuration(): number {
        return this._getOption('agendaDuration');
    }
    set agendaDuration(value: number) {
        this._setOption('agendaDuration', value);
    }

    @Input()
    get allDayPanelMode(): "all" | "allDay" | "hidden" {
        return this._getOption('allDayPanelMode');
    }
    set allDayPanelMode(value: "all" | "allDay" | "hidden") {
        this._setOption('allDayPanelMode', value);
    }

    @Input()
    get appointmentCollectorTemplate(): ((data: { appointmentCount: number, isCompact: boolean }, collectorElement: any) => string | any) | template {
        return this._getOption('appointmentCollectorTemplate');
    }
    set appointmentCollectorTemplate(value: ((data: { appointmentCount: number, isCompact: boolean }, collectorElement: any) => string | any) | template) {
        this._setOption('appointmentCollectorTemplate', value);
    }

    @Input()
    get appointmentTemplate(): ((model: AppointmentTemplateData | { appointmentData: Record<string, any>, targetedAppointmentData: Record<string, any> }, itemIndex: number, contentElement: any) => string | any) | template {
        return this._getOption('appointmentTemplate');
    }
    set appointmentTemplate(value: ((model: AppointmentTemplateData | { appointmentData: Record<string, any>, targetedAppointmentData: Record<string, any> }, itemIndex: number, contentElement: any) => string | any) | template) {
        this._setOption('appointmentTemplate', value);
    }

    @Input()
    get appointmentTooltipTemplate(): ((model: AppointmentTooltipTemplateData | { appointmentData: Record<string, any>, targetedAppointmentData: Record<string, any> }, itemIndex: number, contentElement: any) => string | any) | template {
        return this._getOption('appointmentTooltipTemplate');
    }
    set appointmentTooltipTemplate(value: ((model: AppointmentTooltipTemplateData | { appointmentData: Record<string, any>, targetedAppointmentData: Record<string, any> }, itemIndex: number, contentElement: any) => string | any) | template) {
        this._setOption('appointmentTooltipTemplate', value);
    }

    @Input()
    get cellDuration(): number {
        return this._getOption('cellDuration');
    }
    set cellDuration(value: number) {
        this._setOption('cellDuration', value);
    }

    @Input()
    get dataCellTemplate(): ((itemData: any, itemIndex: number, itemElement: any) => string | any) | template {
        return this._getOption('dataCellTemplate');
    }
    set dataCellTemplate(value: ((itemData: any, itemIndex: number, itemElement: any) => string | any) | template) {
        this._setOption('dataCellTemplate', value);
    }

    @Input()
    get dateCellTemplate(): ((itemData: any, itemIndex: number, itemElement: any) => string | any) | template {
        return this._getOption('dateCellTemplate');
    }
    set dateCellTemplate(value: ((itemData: any, itemIndex: number, itemElement: any) => string | any) | template) {
        this._setOption('dateCellTemplate', value);
    }

    @Input()
    get dropDownAppointmentTemplate(): ((itemData: any, itemIndex: number, contentElement: any) => string | any) | template {
        return this._getOption('dropDownAppointmentTemplate');
    }
    set dropDownAppointmentTemplate(value: ((itemData: any, itemIndex: number, contentElement: any) => string | any) | template) {
        this._setOption('dropDownAppointmentTemplate', value);
    }

    @Input()
    get endDayHour(): number {
        return this._getOption('endDayHour');
    }
    set endDayHour(value: number) {
        this._setOption('endDayHour', value);
    }

    @Input()
    get firstDayOfWeek(): 0 | 1 | 2 | 3 | 4 | 5 | 6 {
        return this._getOption('firstDayOfWeek');
    }
    set firstDayOfWeek(value: 0 | 1 | 2 | 3 | 4 | 5 | 6) {
        this._setOption('firstDayOfWeek', value);
    }

    @Input()
    get groupByDate(): boolean {
        return this._getOption('groupByDate');
    }
    set groupByDate(value: boolean) {
        this._setOption('groupByDate', value);
    }

    @Input()
    get groupOrientation(): "horizontal" | "vertical" {
        return this._getOption('groupOrientation');
    }
    set groupOrientation(value: "horizontal" | "vertical") {
        this._setOption('groupOrientation', value);
    }

    @Input()
    get groups(): Array<string> {
        return this._getOption('groups');
    }
    set groups(value: Array<string>) {
        this._setOption('groups', value);
    }

    @Input()
    get intervalCount(): number {
        return this._getOption('intervalCount');
    }
    set intervalCount(value: number) {
        this._setOption('intervalCount', value);
    }

    @Input()
    get maxAppointmentsPerCell(): number | "auto" | "unlimited" {
        return this._getOption('maxAppointmentsPerCell');
    }
    set maxAppointmentsPerCell(value: number | "auto" | "unlimited") {
        this._setOption('maxAppointmentsPerCell', value);
    }

    @Input()
    get name(): string {
        return this._getOption('name');
    }
    set name(value: string) {
        this._setOption('name', value);
    }

    @Input()
    get offset(): number {
        return this._getOption('offset');
    }
    set offset(value: number) {
        this._setOption('offset', value);
    }

    @Input()
    get resourceCellTemplate(): ((itemData: any, itemIndex: number, itemElement: any) => string | any) | template {
        return this._getOption('resourceCellTemplate');
    }
    set resourceCellTemplate(value: ((itemData: any, itemIndex: number, itemElement: any) => string | any) | template) {
        this._setOption('resourceCellTemplate', value);
    }

    @Input()
    get scrolling(): dxSchedulerScrolling {
        return this._getOption('scrolling');
    }
    set scrolling(value: dxSchedulerScrolling) {
        this._setOption('scrolling', value);
    }

    @Input()
    get startDate(): Date | number | string {
        return this._getOption('startDate');
    }
    set startDate(value: Date | number | string) {
        this._setOption('startDate', value);
    }

    @Input()
    get startDayHour(): number {
        return this._getOption('startDayHour');
    }
    set startDayHour(value: number) {
        this._setOption('startDayHour', value);
    }

    @Input()
    get timeCellTemplate(): ((itemData: any, itemIndex: number, itemElement: any) => string | any) | template {
        return this._getOption('timeCellTemplate');
    }
    set timeCellTemplate(value: ((itemData: any, itemIndex: number, itemElement: any) => string | any) | template) {
        this._setOption('timeCellTemplate', value);
    }

    @Input()
    get type(): "agenda" | "day" | "month" | "timelineDay" | "timelineMonth" | "timelineWeek" | "timelineWorkWeek" | "week" | "workWeek" {
        return this._getOption('type');
    }
    set type(value: "agenda" | "day" | "month" | "timelineDay" | "timelineMonth" | "timelineWeek" | "timelineWorkWeek" | "week" | "workWeek") {
        this._setOption('type', value);
    }


    protected get _optionPath() {
        return 'views';
    }


    constructor(@SkipSelf() @Host() parentOptionHost: NestedOptionHost,
            @Host() optionHost: NestedOptionHost,
            private renderer: Renderer2,
            @Inject(DOCUMENT) private document: any,
            @Host() templateHost: DxTemplateHost,
            private element: ElementRef) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
        templateHost.setHost(this);
    }

    setTemplate(template: DxTemplateDirective) {
        this.template = template;
    }
    ngAfterViewInit() {
        extractTemplate(this, this.element, this.renderer, this.document);
    }



    ngOnDestroy() {
        this._deleteRemovedOptions(this._fullOptionPath());
    }

}

@NgModule({
  declarations: [
    DxiSchedulerViewComponent
  ],
  exports: [
    DxiSchedulerViewComponent
  ],
})
export class DxiSchedulerViewModule { }
