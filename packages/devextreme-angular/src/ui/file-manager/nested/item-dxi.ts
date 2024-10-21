/* tslint:disable:max-line-length */


import {
    Component,
    NgModule,
    Host,
    SkipSelf,
    Input
} from '@angular/core';




import { dxFileManagerContextMenuItem } from 'devextreme/ui/file_manager';

import {
    NestedOptionHost,
} from 'devextreme-angular/core';
import { CollectionNestedOption } from 'devextreme-angular/core';


@Component({
    selector: 'dxi-file-manager-item',
    template: '',
    styles: [''],
    providers: [NestedOptionHost]
})
export class DxiFileManagerItemComponent extends CollectionNestedOption {
    @Input()
    get beginGroup(): boolean {
        return this._getOption('beginGroup');
    }
    set beginGroup(value: boolean) {
        this._setOption('beginGroup', value);
    }

    @Input()
    get closeMenuOnClick(): boolean {
        return this._getOption('closeMenuOnClick');
    }
    set closeMenuOnClick(value: boolean) {
        this._setOption('closeMenuOnClick', value);
    }

    @Input()
    get disabled(): boolean {
        return this._getOption('disabled');
    }
    set disabled(value: boolean) {
        this._setOption('disabled', value);
    }

    @Input()
    get icon(): string {
        return this._getOption('icon');
    }
    set icon(value: string) {
        this._setOption('icon', value);
    }

    @Input()
    get items(): Array<dxFileManagerContextMenuItem> {
        return this._getOption('items');
    }
    set items(value: Array<dxFileManagerContextMenuItem>) {
        this._setOption('items', value);
    }

    @Input()
    get name(): "create" | "upload" | "refresh" | "download" | "move" | "copy" | "rename" | "delete" | "showNavPane" | "switchView" | "clearSelection" | "separator" {
        return this._getOption('name');
    }
    set name(value: "create" | "upload" | "refresh" | "download" | "move" | "copy" | "rename" | "delete" | "showNavPane" | "switchView" | "clearSelection" | "separator") {
        this._setOption('name', value);
    }

    @Input()
    get selectable(): boolean {
        return this._getOption('selectable');
    }
    set selectable(value: boolean) {
        this._setOption('selectable', value);
    }

    @Input()
    get selected(): boolean {
        return this._getOption('selected');
    }
    set selected(value: boolean) {
        this._setOption('selected', value);
    }

    @Input()
    get text(): string {
        return this._getOption('text');
    }
    set text(value: string) {
        this._setOption('text', value);
    }

    @Input()
    get visible(): boolean {
        return this._getOption('visible');
    }
    set visible(value: boolean) {
        this._setOption('visible', value);
    }

    @Input()
    get cssClass(): string {
        return this._getOption('cssClass');
    }
    set cssClass(value: string) {
        this._setOption('cssClass', value);
    }

    @Input()
    get locateInMenu(): "always" | "auto" | "never" {
        return this._getOption('locateInMenu');
    }
    set locateInMenu(value: "always" | "auto" | "never") {
        this._setOption('locateInMenu', value);
    }

    @Input()
    get location(): "after" | "before" | "center" {
        return this._getOption('location');
    }
    set location(value: "after" | "before" | "center") {
        this._setOption('location', value);
    }

    @Input()
    get options(): any {
        return this._getOption('options');
    }
    set options(value: any) {
        this._setOption('options', value);
    }

    @Input()
    get showText(): "always" | "inMenu" {
        return this._getOption('showText');
    }
    set showText(value: "always" | "inMenu") {
        this._setOption('showText', value);
    }

    @Input()
    get widget(): "dxAutocomplete" | "dxButton" | "dxButtonGroup" | "dxCheckBox" | "dxDateBox" | "dxDropDownButton" | "dxMenu" | "dxSelectBox" | "dxSwitch" | "dxTabs" | "dxTextBox" {
        return this._getOption('widget');
    }
    set widget(value: "dxAutocomplete" | "dxButton" | "dxButtonGroup" | "dxCheckBox" | "dxDateBox" | "dxDropDownButton" | "dxMenu" | "dxSelectBox" | "dxSwitch" | "dxTabs" | "dxTextBox") {
        this._setOption('widget', value);
    }


    protected get _optionPath() {
        return 'items';
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
    DxiFileManagerItemComponent
  ],
  exports: [
    DxiFileManagerItemComponent
  ],
})
export class DxiFileManagerItemModule { }
