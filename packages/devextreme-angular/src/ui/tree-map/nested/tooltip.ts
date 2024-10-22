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
import { dxTreeMapNode } from 'devextreme/viz/tree_map';
import { Font } from 'devextreme/common/charts';

import {
    NestedOptionHost,
} from 'devextreme-angular/core';
import { NestedOption } from 'devextreme-angular/core';


@Component({
    selector: 'dxo-tree-map-tooltip',
    template: '',
    styles: [''],
    providers: [NestedOptionHost]
})
export class DxoTreeMapTooltipComponent extends NestedOption implements OnDestroy, OnInit  {
    @Input()
    get arrowLength(): number {
        return this._getOption('arrowLength');
    }
    set arrowLength(value: number) {
        this._setOption('arrowLength', value);
    }

    @Input()
    get border(): Record<string, any> | { color: string, dashStyle: "dash" | "dot" | "longDash" | "solid", opacity: number, visible: boolean, width: number } {
        return this._getOption('border');
    }
    set border(value: Record<string, any> | { color: string, dashStyle: "dash" | "dot" | "longDash" | "solid", opacity: number, visible: boolean, width: number }) {
        this._setOption('border', value);
    }

    @Input()
    get color(): string {
        return this._getOption('color');
    }
    set color(value: string) {
        this._setOption('color', value);
    }

    @Input()
    get container(): any | string {
        return this._getOption('container');
    }
    set container(value: any | string) {
        this._setOption('container', value);
    }

    @Input()
    get contentTemplate(): any {
        return this._getOption('contentTemplate');
    }
    set contentTemplate(value: any) {
        this._setOption('contentTemplate', value);
    }

    @Input()
    get cornerRadius(): number {
        return this._getOption('cornerRadius');
    }
    set cornerRadius(value: number) {
        this._setOption('cornerRadius', value);
    }

    @Input()
    get customizeTooltip(): ((info: { node: dxTreeMapNode, value: number, valueText: string }) => Record<string, any>) {
        return this._getOption('customizeTooltip');
    }
    set customizeTooltip(value: ((info: { node: dxTreeMapNode, value: number, valueText: string }) => Record<string, any>)) {
        this._setOption('customizeTooltip', value);
    }

    @Input()
    get enabled(): boolean {
        return this._getOption('enabled');
    }
    set enabled(value: boolean) {
        this._setOption('enabled', value);
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
    get opacity(): number {
        return this._getOption('opacity');
    }
    set opacity(value: number) {
        this._setOption('opacity', value);
    }

    @Input()
    get paddingLeftRight(): number {
        return this._getOption('paddingLeftRight');
    }
    set paddingLeftRight(value: number) {
        this._setOption('paddingLeftRight', value);
    }

    @Input()
    get paddingTopBottom(): number {
        return this._getOption('paddingTopBottom');
    }
    set paddingTopBottom(value: number) {
        this._setOption('paddingTopBottom', value);
    }

    @Input()
    get shadow(): Record<string, any> | { blur: number, color: string, offsetX: number, offsetY: number, opacity: number } {
        return this._getOption('shadow');
    }
    set shadow(value: Record<string, any> | { blur: number, color: string, offsetX: number, offsetY: number, opacity: number }) {
        this._setOption('shadow', value);
    }

    @Input()
    get zIndex(): number {
        return this._getOption('zIndex');
    }
    set zIndex(value: number) {
        this._setOption('zIndex', value);
    }


    protected get _optionPath() {
        return 'tooltip';
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
    DxoTreeMapTooltipComponent
  ],
  exports: [
    DxoTreeMapTooltipComponent
  ],
})
export class DxoTreeMapTooltipModule { }
