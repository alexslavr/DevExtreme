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

import {
    NestedOptionHost,
} from 'devextreme-angular/core';
import { NestedOption } from 'devextreme-angular/core';


@Component({
    selector: 'dxo-slider-label',
    template: '',
    styles: [''],
    providers: [NestedOptionHost]
})
export class DxoSliderLabelComponent extends NestedOption implements OnDestroy, OnInit  {
    @Input()
    get format(): LocalizationTypes.Format {
        return this._getOption('format');
    }
    set format(value: LocalizationTypes.Format) {
        this._setOption('format', value);
    }

    @Input()
    get position(): "bottom" | "top" {
        return this._getOption('position');
    }
    set position(value: "bottom" | "top") {
        this._setOption('position', value);
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
    DxoSliderLabelComponent
  ],
  exports: [
    DxoSliderLabelComponent
  ],
})
export class DxoSliderLabelModule { }
