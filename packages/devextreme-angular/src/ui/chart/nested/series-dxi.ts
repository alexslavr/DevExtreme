/* tslint:disable:max-line-length */


import {
    Component,
    NgModule,
    Host,
    SkipSelf,
    Input
} from '@angular/core';




import { ChartsColor } from 'devextreme/common/charts';

import {
    NestedOptionHost,
} from 'devextreme-angular/core';
import { CollectionNestedOption } from 'devextreme-angular/core';


@Component({
    selector: 'dxi-chart-series',
    template: '',
    styles: [''],
    providers: [NestedOptionHost]
})
export class DxiChartSeriesComponent extends CollectionNestedOption {
    @Input()
    get aggregation(): Record<string, any> {
        return this._getOption('aggregation');
    }
    set aggregation(value: Record<string, any>) {
        this._setOption('aggregation', value);
    }

    @Input()
    get argumentField(): string {
        return this._getOption('argumentField');
    }
    set argumentField(value: string) {
        this._setOption('argumentField', value);
    }

    @Input()
    get axis(): string {
        return this._getOption('axis');
    }
    set axis(value: string) {
        this._setOption('axis', value);
    }

    @Input()
    get barOverlapGroup(): string {
        return this._getOption('barOverlapGroup');
    }
    set barOverlapGroup(value: string) {
        this._setOption('barOverlapGroup', value);
    }

    @Input()
    get barPadding(): number {
        return this._getOption('barPadding');
    }
    set barPadding(value: number) {
        this._setOption('barPadding', value);
    }

    @Input()
    get barWidth(): number {
        return this._getOption('barWidth');
    }
    set barWidth(value: number) {
        this._setOption('barWidth', value);
    }

    @Input()
    get border(): Record<string, any> {
        return this._getOption('border');
    }
    set border(value: Record<string, any>) {
        this._setOption('border', value);
    }

    @Input()
    get closeValueField(): string {
        return this._getOption('closeValueField');
    }
    set closeValueField(value: string) {
        this._setOption('closeValueField', value);
    }

    @Input()
    get color(): ChartsColor | string {
        return this._getOption('color');
    }
    set color(value: ChartsColor | string) {
        this._setOption('color', value);
    }

    @Input()
    get cornerRadius(): number {
        return this._getOption('cornerRadius');
    }
    set cornerRadius(value: number) {
        this._setOption('cornerRadius', value);
    }

    @Input()
    get dashStyle(): "dash" | "dot" | "longDash" | "solid" {
        return this._getOption('dashStyle');
    }
    set dashStyle(value: "dash" | "dot" | "longDash" | "solid") {
        this._setOption('dashStyle', value);
    }

    @Input()
    get highValueField(): string {
        return this._getOption('highValueField');
    }
    set highValueField(value: string) {
        this._setOption('highValueField', value);
    }

    @Input()
    get hoverMode(): "allArgumentPoints" | "allSeriesPoints" | "excludePoints" | "includePoints" | "nearestPoint" | "none" | "onlyPoint" {
        return this._getOption('hoverMode');
    }
    set hoverMode(value: "allArgumentPoints" | "allSeriesPoints" | "excludePoints" | "includePoints" | "nearestPoint" | "none" | "onlyPoint") {
        this._setOption('hoverMode', value);
    }

    @Input()
    get hoverStyle(): Record<string, any> {
        return this._getOption('hoverStyle');
    }
    set hoverStyle(value: Record<string, any>) {
        this._setOption('hoverStyle', value);
    }

    @Input()
    get ignoreEmptyPoints(): boolean {
        return this._getOption('ignoreEmptyPoints');
    }
    set ignoreEmptyPoints(value: boolean) {
        this._setOption('ignoreEmptyPoints', value);
    }

    @Input()
    get innerColor(): string {
        return this._getOption('innerColor');
    }
    set innerColor(value: string) {
        this._setOption('innerColor', value);
    }

    @Input()
    get label(): Record<string, any> {
        return this._getOption('label');
    }
    set label(value: Record<string, any>) {
        this._setOption('label', value);
    }

    @Input()
    get lowValueField(): string {
        return this._getOption('lowValueField');
    }
    set lowValueField(value: string) {
        this._setOption('lowValueField', value);
    }

    @Input()
    get maxLabelCount(): number {
        return this._getOption('maxLabelCount');
    }
    set maxLabelCount(value: number) {
        this._setOption('maxLabelCount', value);
    }

    @Input()
    get minBarSize(): number {
        return this._getOption('minBarSize');
    }
    set minBarSize(value: number) {
        this._setOption('minBarSize', value);
    }

    @Input()
    get name(): string {
        return this._getOption('name');
    }
    set name(value: string) {
        this._setOption('name', value);
    }

    @Input()
    get opacity(): number {
        return this._getOption('opacity');
    }
    set opacity(value: number) {
        this._setOption('opacity', value);
    }

    @Input()
    get openValueField(): string {
        return this._getOption('openValueField');
    }
    set openValueField(value: string) {
        this._setOption('openValueField', value);
    }

    @Input()
    get pane(): string {
        return this._getOption('pane');
    }
    set pane(value: string) {
        this._setOption('pane', value);
    }

    @Input()
    get point(): Record<string, any> {
        return this._getOption('point');
    }
    set point(value: Record<string, any>) {
        this._setOption('point', value);
    }

    @Input()
    get rangeValue1Field(): string {
        return this._getOption('rangeValue1Field');
    }
    set rangeValue1Field(value: string) {
        this._setOption('rangeValue1Field', value);
    }

    @Input()
    get rangeValue2Field(): string {
        return this._getOption('rangeValue2Field');
    }
    set rangeValue2Field(value: string) {
        this._setOption('rangeValue2Field', value);
    }

    @Input()
    get reduction(): Record<string, any> {
        return this._getOption('reduction');
    }
    set reduction(value: Record<string, any>) {
        this._setOption('reduction', value);
    }

    @Input()
    get selectionMode(): "allArgumentPoints" | "allSeriesPoints" | "excludePoints" | "includePoints" | "none" | "onlyPoint" {
        return this._getOption('selectionMode');
    }
    set selectionMode(value: "allArgumentPoints" | "allSeriesPoints" | "excludePoints" | "includePoints" | "none" | "onlyPoint") {
        this._setOption('selectionMode', value);
    }

    @Input()
    get selectionStyle(): Record<string, any> {
        return this._getOption('selectionStyle');
    }
    set selectionStyle(value: Record<string, any>) {
        this._setOption('selectionStyle', value);
    }

    @Input()
    get showInLegend(): boolean {
        return this._getOption('showInLegend');
    }
    set showInLegend(value: boolean) {
        this._setOption('showInLegend', value);
    }

    @Input()
    get sizeField(): string {
        return this._getOption('sizeField');
    }
    set sizeField(value: string) {
        this._setOption('sizeField', value);
    }

    @Input()
    get stack(): string {
        return this._getOption('stack');
    }
    set stack(value: string) {
        this._setOption('stack', value);
    }

    @Input()
    get tag(): any {
        return this._getOption('tag');
    }
    set tag(value: any) {
        this._setOption('tag', value);
    }

    @Input()
    get tagField(): string {
        return this._getOption('tagField');
    }
    set tagField(value: string) {
        this._setOption('tagField', value);
    }

    @Input()
    get type(): "area" | "bar" | "bubble" | "candlestick" | "fullstackedarea" | "fullstackedbar" | "fullstackedline" | "fullstackedspline" | "fullstackedsplinearea" | "line" | "rangearea" | "rangebar" | "scatter" | "spline" | "splinearea" | "stackedarea" | "stackedbar" | "stackedline" | "stackedspline" | "stackedsplinearea" | "steparea" | "stepline" | "stock" {
        return this._getOption('type');
    }
    set type(value: "area" | "bar" | "bubble" | "candlestick" | "fullstackedarea" | "fullstackedbar" | "fullstackedline" | "fullstackedspline" | "fullstackedsplinearea" | "line" | "rangearea" | "rangebar" | "scatter" | "spline" | "splinearea" | "stackedarea" | "stackedbar" | "stackedline" | "stackedspline" | "stackedsplinearea" | "steparea" | "stepline" | "stock") {
        this._setOption('type', value);
    }

    @Input()
    get valueErrorBar(): Record<string, any> {
        return this._getOption('valueErrorBar');
    }
    set valueErrorBar(value: Record<string, any>) {
        this._setOption('valueErrorBar', value);
    }

    @Input()
    get valueField(): string {
        return this._getOption('valueField');
    }
    set valueField(value: string) {
        this._setOption('valueField', value);
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
        return 'series';
    }


    constructor(@SkipSelf() @Host() parentOptionHost: NestedOptionHost,
            @Host() optionHost: NestedOptionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }



    ngOnDestroy() {
        this._deleteRemovedOptions(this._fullOptionPath());
    }

}

@NgModule({
  declarations: [
    DxiChartSeriesComponent
  ],
  exports: [
    DxiChartSeriesComponent
  ],
})
export class DxiChartSeriesModule { }
