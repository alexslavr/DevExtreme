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
    selector: 'dxo-chart-axis-constant-line-style-label',
    template: '',
    styles: [''],
    providers: [NestedOptionHost]
})
export class DxoChartAxisConstantLineStyleLabelComponent extends NestedOption implements OnDestroy, OnInit  {
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
    get position(): "inside" | "outside" {
        return this._getOption('position');
    }
    set position(value: "inside" | "outside") {
        this._setOption('position', value);
    }

    @Input()
    get verticalAlignment(): "bottom" | "center" | "top" {
        return this._getOption('verticalAlignment');
    }
    set verticalAlignment(value: "bottom" | "center" | "top") {
        this._setOption('verticalAlignment', value);
    }

    @Input()
    get visible(): boolean {
        return this._getOption('visible');
    }
    set visible(value: boolean) {
        this._setOption('visible', value);
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
    DxoChartAxisConstantLineStyleLabelComponent
  ],
  exports: [
    DxoChartAxisConstantLineStyleLabelComponent
  ],
})
export class DxoChartAxisConstantLineStyleLabelModule { }
