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




import { ChartsColor } from 'devextreme/common/charts';

import {
    NestedOptionHost,
} from 'devextreme-angular/core';
import { NestedOption } from 'devextreme-angular/core';


@Component({
    selector: 'dxo-linear-gauge-range-container',
    template: '',
    styles: [''],
    providers: [NestedOptionHost]
})
export class DxoLinearGaugeRangeContainerComponent extends NestedOption implements OnDestroy, OnInit  {
    @Input()
    get backgroundColor(): ChartsColor | string {
        return this._getOption('backgroundColor');
    }
    set backgroundColor(value: ChartsColor | string) {
        this._setOption('backgroundColor', value);
    }

    @Input()
    get horizontalOrientation(): "center" | "left" | "right" {
        return this._getOption('horizontalOrientation');
    }
    set horizontalOrientation(value: "center" | "left" | "right") {
        this._setOption('horizontalOrientation', value);
    }

    @Input()
    get offset(): number {
        return this._getOption('offset');
    }
    set offset(value: number) {
        this._setOption('offset', value);
    }

    @Input()
    get palette(): Array<string> | "Bright" | "Harmony Light" | "Ocean" | "Pastel" | "Soft" | "Soft Pastel" | "Vintage" | "Violet" | "Carmine" | "Dark Moon" | "Dark Violet" | "Green Mist" | "Soft Blue" | "Material" | "Office" {
        return this._getOption('palette');
    }
    set palette(value: Array<string> | "Bright" | "Harmony Light" | "Ocean" | "Pastel" | "Soft" | "Soft Pastel" | "Vintage" | "Violet" | "Carmine" | "Dark Moon" | "Dark Violet" | "Green Mist" | "Soft Blue" | "Material" | "Office") {
        this._setOption('palette', value);
    }

    @Input()
    get paletteExtensionMode(): "alternate" | "blend" | "extrapolate" {
        return this._getOption('paletteExtensionMode');
    }
    set paletteExtensionMode(value: "alternate" | "blend" | "extrapolate") {
        this._setOption('paletteExtensionMode', value);
    }

    @Input()
    get ranges(): Array<Record<string, any>> | { color: ChartsColor | string, endValue: number, startValue: number }[] {
        return this._getOption('ranges');
    }
    set ranges(value: Array<Record<string, any>> | { color: ChartsColor | string, endValue: number, startValue: number }[]) {
        this._setOption('ranges', value);
    }

    @Input()
    get verticalOrientation(): "bottom" | "center" | "top" {
        return this._getOption('verticalOrientation');
    }
    set verticalOrientation(value: "bottom" | "center" | "top") {
        this._setOption('verticalOrientation', value);
    }

    @Input()
    get width(): number | Record<string, any> | { end: number, start: number } {
        return this._getOption('width');
    }
    set width(value: number | Record<string, any> | { end: number, start: number }) {
        this._setOption('width', value);
    }


    protected get _optionPath() {
        return 'rangeContainer';
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
    DxoLinearGaugeRangeContainerComponent
  ],
  exports: [
    DxoLinearGaugeRangeContainerComponent
  ],
})
export class DxoLinearGaugeRangeContainerModule { }
