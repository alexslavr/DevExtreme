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




import { Font } from 'devextreme/common/charts';

import {
    NestedOptionHost,
} from 'devextreme-angular/core';
import { NestedOption } from 'devextreme-angular/core';


@Component({
    selector: 'dxo-pie-chart-legend-title',
    template: '',
    styles: [''],
    providers: [NestedOptionHost]
})
export class DxoPieChartLegendTitleComponent extends NestedOption implements OnDestroy, OnInit  {
    @Input()
    get font(): Font {
        return this._getOption('font');
    }
    set font(value: Font) {
        this._setOption('font', value);
    }

    @Input()
    get horizontalAlignment(): "center" | "left" | "right" {
        return this._getOption('horizontalAlignment');
    }
    set horizontalAlignment(value: "center" | "left" | "right") {
        this._setOption('horizontalAlignment', value);
    }

    @Input()
    get margin(): Record<string, any> {
        return this._getOption('margin');
    }
    set margin(value: Record<string, any>) {
        this._setOption('margin', value);
    }

    @Input()
    get placeholderSize(): number {
        return this._getOption('placeholderSize');
    }
    set placeholderSize(value: number) {
        this._setOption('placeholderSize', value);
    }

    @Input()
    get subtitle(): Record<string, any> | string {
        return this._getOption('subtitle');
    }
    set subtitle(value: Record<string, any> | string) {
        this._setOption('subtitle', value);
    }

    @Input()
    get text(): string {
        return this._getOption('text');
    }
    set text(value: string) {
        this._setOption('text', value);
    }

    @Input()
    get verticalAlignment(): "bottom" | "top" {
        return this._getOption('verticalAlignment');
    }
    set verticalAlignment(value: "bottom" | "top") {
        this._setOption('verticalAlignment', value);
    }


    protected get _optionPath() {
        return 'title';
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
    DxoPieChartLegendTitleComponent
  ],
  exports: [
    DxoPieChartLegendTitleComponent
  ],
})
export class DxoPieChartLegendTitleModule { }
