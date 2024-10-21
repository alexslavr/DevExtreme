/* tslint:disable:max-line-length */


import {
    Component,
    NgModule,
    Host,
    SkipSelf,
    Input
} from '@angular/core';




import DataSource from 'devextreme/data/data_source';
import { MapLayerElement } from 'devextreme/viz/vector_map';
import { DataSourceOptions } from 'devextreme/data/data_source';
import { Store } from 'devextreme/data/store';

import {
    NestedOptionHost,
} from 'devextreme-angular/core';
import { CollectionNestedOption } from 'devextreme-angular/core';


@Component({
    selector: 'dxi-vector-map-layer',
    template: '',
    styles: [''],
    providers: [NestedOptionHost]
})
export class DxiVectorMapLayerComponent extends CollectionNestedOption {
    @Input()
    get borderColor(): string {
        return this._getOption('borderColor');
    }
    set borderColor(value: string) {
        this._setOption('borderColor', value);
    }

    @Input()
    get borderWidth(): number {
        return this._getOption('borderWidth');
    }
    set borderWidth(value: number) {
        this._setOption('borderWidth', value);
    }

    @Input()
    get color(): string {
        return this._getOption('color');
    }
    set color(value: string) {
        this._setOption('color', value);
    }

    @Input()
    get colorGroupingField(): string {
        return this._getOption('colorGroupingField');
    }
    set colorGroupingField(value: string) {
        this._setOption('colorGroupingField', value);
    }

    @Input()
    get colorGroups(): Array<number> {
        return this._getOption('colorGroups');
    }
    set colorGroups(value: Array<number>) {
        this._setOption('colorGroups', value);
    }

    @Input()
    get customize(): ((elements: Array<MapLayerElement>) => void) {
        return this._getOption('customize');
    }
    set customize(value: ((elements: Array<MapLayerElement>) => void)) {
        this._setOption('customize', value);
    }

    @Input()
    get dataField(): string {
        return this._getOption('dataField');
    }
    set dataField(value: string) {
        this._setOption('dataField', value);
    }

    @Input()
    get dataSource(): Array<any> | DataSource | DataSourceOptions | null | Record<string, any> | Store | string {
        return this._getOption('dataSource');
    }
    set dataSource(value: Array<any> | DataSource | DataSourceOptions | null | Record<string, any> | Store | string) {
        this._setOption('dataSource', value);
    }

    @Input()
    get elementType(): "bubble" | "dot" | "image" | "pie" {
        return this._getOption('elementType');
    }
    set elementType(value: "bubble" | "dot" | "image" | "pie") {
        this._setOption('elementType', value);
    }

    @Input()
    get hoveredBorderColor(): string {
        return this._getOption('hoveredBorderColor');
    }
    set hoveredBorderColor(value: string) {
        this._setOption('hoveredBorderColor', value);
    }

    @Input()
    get hoveredBorderWidth(): number {
        return this._getOption('hoveredBorderWidth');
    }
    set hoveredBorderWidth(value: number) {
        this._setOption('hoveredBorderWidth', value);
    }

    @Input()
    get hoveredColor(): string {
        return this._getOption('hoveredColor');
    }
    set hoveredColor(value: string) {
        this._setOption('hoveredColor', value);
    }

    @Input()
    get hoverEnabled(): boolean {
        return this._getOption('hoverEnabled');
    }
    set hoverEnabled(value: boolean) {
        this._setOption('hoverEnabled', value);
    }

    @Input()
    get label(): Record<string, any> {
        return this._getOption('label');
    }
    set label(value: Record<string, any>) {
        this._setOption('label', value);
    }

    @Input()
    get maxSize(): number {
        return this._getOption('maxSize');
    }
    set maxSize(value: number) {
        this._setOption('maxSize', value);
    }

    @Input()
    get minSize(): number {
        return this._getOption('minSize');
    }
    set minSize(value: number) {
        this._setOption('minSize', value);
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
    get palette(): Array<string> | "Bright" | "Harmony Light" | "Ocean" | "Pastel" | "Soft" | "Soft Pastel" | "Vintage" | "Violet" | "Carmine" | "Dark Moon" | "Dark Violet" | "Green Mist" | "Soft Blue" | "Material" | "Office" {
        return this._getOption('palette');
    }
    set palette(value: Array<string> | "Bright" | "Harmony Light" | "Ocean" | "Pastel" | "Soft" | "Soft Pastel" | "Vintage" | "Violet" | "Carmine" | "Dark Moon" | "Dark Violet" | "Green Mist" | "Soft Blue" | "Material" | "Office") {
        this._setOption('palette', value);
    }

    @Input()
    get paletteIndex(): number {
        return this._getOption('paletteIndex');
    }
    set paletteIndex(value: number) {
        this._setOption('paletteIndex', value);
    }

    @Input()
    get paletteSize(): number {
        return this._getOption('paletteSize');
    }
    set paletteSize(value: number) {
        this._setOption('paletteSize', value);
    }

    @Input()
    get selectedBorderColor(): string {
        return this._getOption('selectedBorderColor');
    }
    set selectedBorderColor(value: string) {
        this._setOption('selectedBorderColor', value);
    }

    @Input()
    get selectedBorderWidth(): number {
        return this._getOption('selectedBorderWidth');
    }
    set selectedBorderWidth(value: number) {
        this._setOption('selectedBorderWidth', value);
    }

    @Input()
    get selectedColor(): string {
        return this._getOption('selectedColor');
    }
    set selectedColor(value: string) {
        this._setOption('selectedColor', value);
    }

    @Input()
    get selectionMode(): "single" | "multiple" | "none" {
        return this._getOption('selectionMode');
    }
    set selectionMode(value: "single" | "multiple" | "none") {
        this._setOption('selectionMode', value);
    }

    @Input()
    get size(): number {
        return this._getOption('size');
    }
    set size(value: number) {
        this._setOption('size', value);
    }

    @Input()
    get sizeGroupingField(): string {
        return this._getOption('sizeGroupingField');
    }
    set sizeGroupingField(value: string) {
        this._setOption('sizeGroupingField', value);
    }

    @Input()
    get sizeGroups(): Array<number> {
        return this._getOption('sizeGroups');
    }
    set sizeGroups(value: Array<number>) {
        this._setOption('sizeGroups', value);
    }

    @Input()
    get type(): "area" | "line" | "marker" {
        return this._getOption('type');
    }
    set type(value: "area" | "line" | "marker") {
        this._setOption('type', value);
    }


    protected get _optionPath() {
        return 'layers';
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
    DxiVectorMapLayerComponent
  ],
  exports: [
    DxiVectorMapLayerComponent
  ],
})
export class DxiVectorMapLayerModule { }
