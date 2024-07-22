/* tslint:disable:max-line-length */


import {
    Component,
    OnInit,
    OnDestroy,
    NgModule,
    Host,
    SkipSelf,
    Input,
    ContentChildren,
    forwardRef,
    QueryList
} from '@angular/core';




import { dxGanttToolbarItem, GanttPredefinedToolbarItem } from 'devextreme/ui/gantt';

import {
    NestedOptionHost,
} from 'devextreme-angular/core';
import { NestedOption } from 'devextreme-angular/core';
import { DxiItemGanttComponent } from './item-dxi';


@Component({
    selector: 'dxo-toolbar-gantt',
    template: '',
    styles: [''],
    providers: [NestedOptionHost]
})
export class DxoToolbarGanttComponent extends NestedOption implements OnDestroy, OnInit  {
    @Input()
    get items(): Array<dxGanttToolbarItem | GanttPredefinedToolbarItem> {
        return this._getOption('items');
    }
    set items(value: Array<dxGanttToolbarItem | GanttPredefinedToolbarItem>) {
        this._setOption('items', value);
    }


    protected get _optionPath() {
        return 'toolbar';
    }


    @ContentChildren(forwardRef(() => DxiItemGanttComponent))
    get itemsChildren(): QueryList<DxiItemGanttComponent> {
        return this._getOption('items');
    }
    set itemsChildren(value) {
        this.setChildren('items', value);
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
    DxoToolbarGanttComponent
  ],
  exports: [
    DxoToolbarGanttComponent
  ],
})
export class DxoToolbarGanttModule { }
