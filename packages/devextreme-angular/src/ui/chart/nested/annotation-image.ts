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
    selector: 'dxo-chart-annotation-image',
    template: '',
    styles: [''],
    providers: [NestedOptionHost]
})
export class DxoChartAnnotationImageComponent extends NestedOption implements OnDestroy, OnInit  {
    @Input()
    get height(): number {
        return this._getOption('height');
    }
    set height(value: number) {
        this._setOption('height', value);
    }

    @Input()
    get url(): string {
        return this._getOption('url');
    }
    set url(value: string) {
        this._setOption('url', value);
    }

    @Input()
    get width(): number {
        return this._getOption('width');
    }
    set width(value: number) {
        this._setOption('width', value);
    }


    protected get _optionPath() {
        return 'image';
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
    DxoChartAnnotationImageComponent
  ],
  exports: [
    DxoChartAnnotationImageComponent
  ],
})
export class DxoChartAnnotationImageModule { }
