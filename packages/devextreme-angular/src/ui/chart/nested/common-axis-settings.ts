/* tslint:disable:max-line-length */


import {
    Component,
    OnInit,
    OnDestroy,
    NgModule,
    Host,
    SkipSelf,
    Input
} from '@angular/core';





import {
    NestedOptionHost,
} from 'devextreme-angular/core';
import { NestedOption } from 'devextreme-angular/core';


@Component({
    selector: 'dxo-chart-common-axis-settings',
    template: '',
    styles: [''],
    providers: [NestedOptionHost]
})
export class DxoChartCommonAxisSettingsComponent extends NestedOption implements OnDestroy, OnInit  {
    @Input()
    get aggregatedPointsPosition(): "betweenTicks" | "crossTicks" {
        return this._getOption('aggregatedPointsPosition');
    }
    set aggregatedPointsPosition(value: "betweenTicks" | "crossTicks") {
        this._setOption('aggregatedPointsPosition', value);
    }

    @Input()
    get allowDecimals(): boolean {
        return this._getOption('allowDecimals');
    }
    set allowDecimals(value: boolean) {
        this._setOption('allowDecimals', value);
    }

    @Input()
    get breakStyle(): Record<string, any> {
        return this._getOption('breakStyle');
    }
    set breakStyle(value: Record<string, any>) {
        this._setOption('breakStyle', value);
    }

    @Input()
    get color(): string {
        return this._getOption('color');
    }
    set color(value: string) {
        this._setOption('color', value);
    }

    @Input()
    get constantLineStyle(): Record<string, any> {
        return this._getOption('constantLineStyle');
    }
    set constantLineStyle(value: Record<string, any>) {
        this._setOption('constantLineStyle', value);
    }

    @Input()
    get discreteAxisDivisionMode(): "betweenLabels" | "crossLabels" {
        return this._getOption('discreteAxisDivisionMode');
    }
    set discreteAxisDivisionMode(value: "betweenLabels" | "crossLabels") {
        this._setOption('discreteAxisDivisionMode', value);
    }

    @Input()
    get endOnTick(): boolean {
        return this._getOption('endOnTick');
    }
    set endOnTick(value: boolean) {
        this._setOption('endOnTick', value);
    }

    @Input()
    get grid(): Record<string, any> {
        return this._getOption('grid');
    }
    set grid(value: Record<string, any>) {
        this._setOption('grid', value);
    }

    @Input()
    get inverted(): boolean {
        return this._getOption('inverted');
    }
    set inverted(value: boolean) {
        this._setOption('inverted', value);
    }

    @Input()
    get label(): Record<string, any> {
        return this._getOption('label');
    }
    set label(value: Record<string, any>) {
        this._setOption('label', value);
    }

    @Input()
    get maxValueMargin(): number {
        return this._getOption('maxValueMargin');
    }
    set maxValueMargin(value: number) {
        this._setOption('maxValueMargin', value);
    }

    @Input()
    get minorGrid(): Record<string, any> {
        return this._getOption('minorGrid');
    }
    set minorGrid(value: Record<string, any>) {
        this._setOption('minorGrid', value);
    }

    @Input()
    get minorTick(): Record<string, any> {
        return this._getOption('minorTick');
    }
    set minorTick(value: Record<string, any>) {
        this._setOption('minorTick', value);
    }

    @Input()
    get minValueMargin(): number {
        return this._getOption('minValueMargin');
    }
    set minValueMargin(value: number) {
        this._setOption('minValueMargin', value);
    }

    @Input()
    get opacity(): number {
        return this._getOption('opacity');
    }
    set opacity(value: number) {
        this._setOption('opacity', value);
    }

    @Input()
    get placeholderSize(): number {
        return this._getOption('placeholderSize');
    }
    set placeholderSize(value: number) {
        this._setOption('placeholderSize', value);
    }

    @Input()
    get stripStyle(): Record<string, any> {
        return this._getOption('stripStyle');
    }
    set stripStyle(value: Record<string, any>) {
        this._setOption('stripStyle', value);
    }

    @Input()
    get tick(): Record<string, any> {
        return this._getOption('tick');
    }
    set tick(value: Record<string, any>) {
        this._setOption('tick', value);
    }

    @Input()
    get title(): Record<string, any> {
        return this._getOption('title');
    }
    set title(value: Record<string, any>) {
        this._setOption('title', value);
    }

    @Input()
    get valueMarginsEnabled(): boolean {
        return this._getOption('valueMarginsEnabled');
    }
    set valueMarginsEnabled(value: boolean) {
        this._setOption('valueMarginsEnabled', value);
    }

    @Input()
    get visible(): boolean {
        return this._getOption('visible');
    }
    set visible(value: boolean) {
        this._setOption('visible', value);
    }

    @Input()
    get width(): number {
        return this._getOption('width');
    }
    set width(value: number) {
        this._setOption('width', value);
    }


    protected get _optionPath() {
        return 'commonAxisSettings';
    }


    constructor(@SkipSelf() @Host() parentOptionHost: NestedOptionHost,
            @Host() optionHost: NestedOptionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }


    ngOnInit() {
        this._addRecreatedComponent();
    }

    ngOnDestroy() {
        this._addRemovedOption(this._getOptionPath());
    }


}

@NgModule({
  declarations: [
    DxoChartCommonAxisSettingsComponent
  ],
  exports: [
    DxoChartCommonAxisSettingsComponent
  ],
})
export class DxoChartCommonAxisSettingsModule { }
