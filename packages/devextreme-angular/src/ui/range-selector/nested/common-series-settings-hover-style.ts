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
    selector: 'dxo-range-selector-common-series-settings-hover-style',
    template: '',
    styles: [''],
    providers: [NestedOptionHost]
})
export class DxoRangeSelectorCommonSeriesSettingsHoverStyleComponent extends NestedOption implements OnDestroy, OnInit  {
    @Input()
    get border(): Record<string, any> | { color: string, dashStyle: "dash" | "dot" | "longDash" | "solid", visible: boolean, width: number } {
        return this._getOption('border');
    }
    set border(value: Record<string, any> | { color: string, dashStyle: "dash" | "dot" | "longDash" | "solid", visible: boolean, width: number }) {
        this._setOption('border', value);
    }

    @Input()
    get color(): ChartsColor | string {
        return this._getOption('color');
    }
    set color(value: ChartsColor | string) {
        this._setOption('color', value);
    }

    @Input()
    get dashStyle(): "dash" | "dot" | "longDash" | "solid" {
        return this._getOption('dashStyle');
    }
    set dashStyle(value: "dash" | "dot" | "longDash" | "solid") {
        this._setOption('dashStyle', value);
    }

    @Input()
    get hatching(): Record<string, any> | { direction: "left" | "none" | "right", opacity: number, step: number, width: number } {
        return this._getOption('hatching');
    }
    set hatching(value: Record<string, any> | { direction: "left" | "none" | "right", opacity: number, step: number, width: number }) {
        this._setOption('hatching', value);
    }

    @Input()
    get highlight(): boolean {
        return this._getOption('highlight');
    }
    set highlight(value: boolean) {
        this._setOption('highlight', value);
    }

    @Input()
    get width(): number {
        return this._getOption('width');
    }
    set width(value: number) {
        this._setOption('width', value);
    }


    protected get _optionPath() {
        return 'hoverStyle';
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
    DxoRangeSelectorCommonSeriesSettingsHoverStyleComponent
  ],
  exports: [
    DxoRangeSelectorCommonSeriesSettingsHoverStyleComponent
  ],
})
export class DxoRangeSelectorCommonSeriesSettingsHoverStyleModule { }
