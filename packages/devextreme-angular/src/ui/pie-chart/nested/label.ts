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




import * as LocalizationTypes from 'devextreme/localization';
import { Font } from 'devextreme/common/charts';

import {
    NestedOptionHost,
} from 'devextreme-angular/core';
import { NestedOption } from 'devextreme-angular/core';


@Component({
    selector: 'dxo-pie-chart-label',
    template: '',
    styles: [''],
    providers: [NestedOptionHost]
})
export class DxoPieChartLabelComponent extends NestedOption implements OnDestroy, OnInit  {
    @Input()
    get argumentFormat(): LocalizationTypes.Format {
        return this._getOption('argumentFormat');
    }
    set argumentFormat(value: LocalizationTypes.Format) {
        this._setOption('argumentFormat', value);
    }

    @Input()
    get backgroundColor(): string {
        return this._getOption('backgroundColor');
    }
    set backgroundColor(value: string) {
        this._setOption('backgroundColor', value);
    }

    @Input()
    get border(): Record<string, any> | { color: string, dashStyle: "dash" | "dot" | "longDash" | "solid", visible: boolean, width: number } {
        return this._getOption('border');
    }
    set border(value: Record<string, any> | { color: string, dashStyle: "dash" | "dot" | "longDash" | "solid", visible: boolean, width: number }) {
        this._setOption('border', value);
    }

    @Input()
    get connector(): Record<string, any> | { color: string, visible: boolean, width: number } {
        return this._getOption('connector');
    }
    set connector(value: Record<string, any> | { color: string, visible: boolean, width: number }) {
        this._setOption('connector', value);
    }

    @Input()
    get customizeText(): ((pointInfo: any) => string) {
        return this._getOption('customizeText');
    }
    set customizeText(value: ((pointInfo: any) => string)) {
        this._setOption('customizeText', value);
    }

    @Input()
    get displayFormat(): string {
        return this._getOption('displayFormat');
    }
    set displayFormat(value: string) {
        this._setOption('displayFormat', value);
    }

    @Input()
    get font(): Font {
        return this._getOption('font');
    }
    set font(value: Font) {
        this._setOption('font', value);
    }

    @Input()
    get format(): LocalizationTypes.Format {
        return this._getOption('format');
    }
    set format(value: LocalizationTypes.Format) {
        this._setOption('format', value);
    }

    @Input()
    get position(): "columns" | "inside" | "outside" {
        return this._getOption('position');
    }
    set position(value: "columns" | "inside" | "outside") {
        this._setOption('position', value);
    }

    @Input()
    get radialOffset(): number {
        return this._getOption('radialOffset');
    }
    set radialOffset(value: number) {
        this._setOption('radialOffset', value);
    }

    @Input()
    get rotationAngle(): number {
        return this._getOption('rotationAngle');
    }
    set rotationAngle(value: number) {
        this._setOption('rotationAngle', value);
    }

    @Input()
    get textOverflow(): "ellipsis" | "hide" | "none" {
        return this._getOption('textOverflow');
    }
    set textOverflow(value: "ellipsis" | "hide" | "none") {
        this._setOption('textOverflow', value);
    }

    @Input()
    get visible(): boolean {
        return this._getOption('visible');
    }
    set visible(value: boolean) {
        this._setOption('visible', value);
    }

    @Input()
    get wordWrap(): "normal" | "breakWord" | "none" {
        return this._getOption('wordWrap');
    }
    set wordWrap(value: "normal" | "breakWord" | "none") {
        this._setOption('wordWrap', value);
    }


    protected get _optionPath() {
        return 'label';
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
    DxoPieChartLabelComponent
  ],
  exports: [
    DxoPieChartLabelComponent
  ],
})
export class DxoPieChartLabelModule { }
