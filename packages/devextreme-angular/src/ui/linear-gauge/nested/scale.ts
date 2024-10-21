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
    selector: 'dxo-linear-gauge-scale',
    template: '',
    styles: [''],
    providers: [NestedOptionHost]
})
export class DxoLinearGaugeScaleComponent extends NestedOption implements OnDestroy, OnInit  {
    @Input()
    get allowDecimals(): boolean {
        return this._getOption('allowDecimals');
    }
    set allowDecimals(value: boolean) {
        this._setOption('allowDecimals', value);
    }

    @Input()
    get customMinorTicks(): Array<number> {
        return this._getOption('customMinorTicks');
    }
    set customMinorTicks(value: Array<number>) {
        this._setOption('customMinorTicks', value);
    }

    @Input()
    get customTicks(): Array<number> {
        return this._getOption('customTicks');
    }
    set customTicks(value: Array<number>) {
        this._setOption('customTicks', value);
    }

    @Input()
    get endValue(): number {
        return this._getOption('endValue');
    }
    set endValue(value: number) {
        this._setOption('endValue', value);
    }

    @Input()
    get horizontalOrientation(): "center" | "left" | "right" {
        return this._getOption('horizontalOrientation');
    }
    set horizontalOrientation(value: "center" | "left" | "right") {
        this._setOption('horizontalOrientation', value);
    }

    @Input()
    get label(): Record<string, any> {
        return this._getOption('label');
    }
    set label(value: Record<string, any>) {
        this._setOption('label', value);
    }

    @Input()
    get minorTick(): Record<string, any> {
        return this._getOption('minorTick');
    }
    set minorTick(value: Record<string, any>) {
        this._setOption('minorTick', value);
    }

    @Input()
    get minorTickInterval(): number {
        return this._getOption('minorTickInterval');
    }
    set minorTickInterval(value: number) {
        this._setOption('minorTickInterval', value);
    }

    @Input()
    get scaleDivisionFactor(): number {
        return this._getOption('scaleDivisionFactor');
    }
    set scaleDivisionFactor(value: number) {
        this._setOption('scaleDivisionFactor', value);
    }

    @Input()
    get startValue(): number {
        return this._getOption('startValue');
    }
    set startValue(value: number) {
        this._setOption('startValue', value);
    }

    @Input()
    get tick(): Record<string, any> {
        return this._getOption('tick');
    }
    set tick(value: Record<string, any>) {
        this._setOption('tick', value);
    }

    @Input()
    get tickInterval(): number {
        return this._getOption('tickInterval');
    }
    set tickInterval(value: number) {
        this._setOption('tickInterval', value);
    }

    @Input()
    get verticalOrientation(): "bottom" | "center" | "top" {
        return this._getOption('verticalOrientation');
    }
    set verticalOrientation(value: "bottom" | "center" | "top") {
        this._setOption('verticalOrientation', value);
    }


    protected get _optionPath() {
        return 'scale';
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
    DxoLinearGaugeScaleComponent
  ],
  exports: [
    DxoLinearGaugeScaleComponent
  ],
})
export class DxoLinearGaugeScaleModule { }
