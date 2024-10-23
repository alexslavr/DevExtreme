/* tslint:disable:max-line-length */


import {
    TransferState,
    Component,
    NgModule,
    ElementRef,
    NgZone,
    PLATFORM_ID,
    Inject,

    Input,
    Output,
    OnDestroy,
    EventEmitter,
    OnChanges,
    DoCheck,
    SimpleChanges
} from '@angular/core';


import * as LocalizationTypes from 'devextreme/localization';
import { Font, ChartsColor } from 'devextreme/common/charts';
import { DisposingEvent, DrawnEvent, ExportedEvent, ExportingEvent, FileSavingEvent, IncidentOccurredEvent, InitializedEvent, OptionChangedEvent, TooltipHiddenEvent, TooltipShownEvent } from 'devextreme/viz/linear_gauge';
import { GaugeIndicator } from 'devextreme/viz/gauges/base_gauge';

import DxLinearGauge from 'devextreme/viz/linear_gauge';


import {
    DxComponent,
    DxTemplateHost,
    DxIntegrationModule,
    DxTemplateModule,
    NestedOptionHost,
    IterableDifferHelper,
    WatcherHelper
} from 'devextreme-angular/core';

import { DxoAnimationModule } from 'devextreme-angular/ui/nested';
import { DxoExportModule } from 'devextreme-angular/ui/nested';
import { DxoGeometryModule } from 'devextreme-angular/ui/nested';
import { DxoLoadingIndicatorModule } from 'devextreme-angular/ui/nested';
import { DxoFontModule } from 'devextreme-angular/ui/nested';
import { DxoMarginModule } from 'devextreme-angular/ui/nested';
import { DxoRangeContainerModule } from 'devextreme-angular/ui/nested';
import { DxoBackgroundColorModule } from 'devextreme-angular/ui/nested';
import { DxiRangeModule } from 'devextreme-angular/ui/nested';
import { DxoColorModule } from 'devextreme-angular/ui/nested';
import { DxoWidthModule } from 'devextreme-angular/ui/nested';
import { DxoScaleModule } from 'devextreme-angular/ui/nested';
import { DxoLabelModule } from 'devextreme-angular/ui/nested';
import { DxoFormatModule } from 'devextreme-angular/ui/nested';
import { DxoMinorTickModule } from 'devextreme-angular/ui/nested';
import { DxoTickModule } from 'devextreme-angular/ui/nested';
import { DxoSizeModule } from 'devextreme-angular/ui/nested';
import { DxoSubvalueIndicatorModule } from 'devextreme-angular/ui/nested';
import { DxoTextModule } from 'devextreme-angular/ui/nested';
import { DxoTitleModule } from 'devextreme-angular/ui/nested';
import { DxoSubtitleModule } from 'devextreme-angular/ui/nested';
import { DxoTooltipModule } from 'devextreme-angular/ui/nested';
import { DxoBorderModule } from 'devextreme-angular/ui/nested';
import { DxoShadowModule } from 'devextreme-angular/ui/nested';
import { DxoValueIndicatorModule } from 'devextreme-angular/ui/nested';

import { DxoLinearGaugeAnimationModule } from 'devextreme-angular/ui/linear-gauge/nested';
import { DxoLinearGaugeBackgroundColorModule } from 'devextreme-angular/ui/linear-gauge/nested';
import { DxoLinearGaugeBorderModule } from 'devextreme-angular/ui/linear-gauge/nested';
import { DxoLinearGaugeColorModule } from 'devextreme-angular/ui/linear-gauge/nested';
import { DxoLinearGaugeExportModule } from 'devextreme-angular/ui/linear-gauge/nested';
import { DxoLinearGaugeFontModule } from 'devextreme-angular/ui/linear-gauge/nested';
import { DxoLinearGaugeFormatModule } from 'devextreme-angular/ui/linear-gauge/nested';
import { DxoLinearGaugeGeometryModule } from 'devextreme-angular/ui/linear-gauge/nested';
import { DxoLinearGaugeLabelModule } from 'devextreme-angular/ui/linear-gauge/nested';
import { DxoLinearGaugeLoadingIndicatorModule } from 'devextreme-angular/ui/linear-gauge/nested';
import { DxoLinearGaugeMarginModule } from 'devextreme-angular/ui/linear-gauge/nested';
import { DxoLinearGaugeMinorTickModule } from 'devextreme-angular/ui/linear-gauge/nested';
import { DxiLinearGaugeRangeModule } from 'devextreme-angular/ui/linear-gauge/nested';
import { DxoLinearGaugeRangeContainerModule } from 'devextreme-angular/ui/linear-gauge/nested';
import { DxoLinearGaugeScaleModule } from 'devextreme-angular/ui/linear-gauge/nested';
import { DxoLinearGaugeShadowModule } from 'devextreme-angular/ui/linear-gauge/nested';
import { DxoLinearGaugeSizeModule } from 'devextreme-angular/ui/linear-gauge/nested';
import { DxoLinearGaugeSubtitleModule } from 'devextreme-angular/ui/linear-gauge/nested';
import { DxoLinearGaugeSubvalueIndicatorModule } from 'devextreme-angular/ui/linear-gauge/nested';
import { DxoLinearGaugeTextModule } from 'devextreme-angular/ui/linear-gauge/nested';
import { DxoLinearGaugeTickModule } from 'devextreme-angular/ui/linear-gauge/nested';
import { DxoLinearGaugeTitleModule } from 'devextreme-angular/ui/linear-gauge/nested';
import { DxoLinearGaugeTooltipModule } from 'devextreme-angular/ui/linear-gauge/nested';
import { DxoLinearGaugeValueIndicatorModule } from 'devextreme-angular/ui/linear-gauge/nested';
import { DxoLinearGaugeWidthModule } from 'devextreme-angular/ui/linear-gauge/nested';




/**
 * [descr:dxLinearGauge]

 */
@Component({
    selector: 'dx-linear-gauge',
    template: '',
    styles: [ ' :host {  display: block; }'],
    providers: [
        DxTemplateHost,
        WatcherHelper,
        NestedOptionHost,
        IterableDifferHelper
    ]
})
export class DxLinearGaugeComponent extends DxComponent implements OnDestroy, OnChanges, DoCheck {
    instance: DxLinearGauge = null;

    /**
     * [descr:BaseGaugeOptions.animation]
    
     */
    @Input()
    get animation(): Record<string, any> | { duration?: number, easing?: "easeOutCubic" | "linear", enabled?: boolean } {
        return this._getOption('animation');
    }
    set animation(value: Record<string, any> | { duration?: number, easing?: "easeOutCubic" | "linear", enabled?: boolean }) {
        this._setOption('animation', value);
    }


    /**
     * [descr:BaseGaugeOptions.containerBackgroundColor]
    
     */
    @Input()
    get containerBackgroundColor(): string {
        return this._getOption('containerBackgroundColor');
    }
    set containerBackgroundColor(value: string) {
        this._setOption('containerBackgroundColor', value);
    }


    /**
     * [descr:BaseWidgetOptions.disabled]
    
     */
    @Input()
    get disabled(): boolean {
        return this._getOption('disabled');
    }
    set disabled(value: boolean) {
        this._setOption('disabled', value);
    }


    /**
     * [descr:DOMComponentOptions.elementAttr]
    
     */
    @Input()
    get elementAttr(): Record<string, any> {
        return this._getOption('elementAttr');
    }
    set elementAttr(value: Record<string, any>) {
        this._setOption('elementAttr', value);
    }


    /**
     * [descr:BaseWidgetOptions.export]
    
     */
    @Input()
    get export(): Record<string, any> | { backgroundColor?: string, enabled?: boolean, fileName?: string, formats?: Array<"GIF" | "JPEG" | "PDF" | "PNG" | "SVG">, margin?: number, printingEnabled?: boolean, svgToCanvas?: ((svg: any, canvas: any) => any) } {
        return this._getOption('export');
    }
    set export(value: Record<string, any> | { backgroundColor?: string, enabled?: boolean, fileName?: string, formats?: Array<"GIF" | "JPEG" | "PDF" | "PNG" | "SVG">, margin?: number, printingEnabled?: boolean, svgToCanvas?: ((svg: any, canvas: any) => any) }) {
        this._setOption('export', value);
    }


    /**
     * [descr:dxLinearGaugeOptions.geometry]
    
     */
    @Input()
    get geometry(): Record<string, any> | { orientation?: "horizontal" | "vertical" } {
        return this._getOption('geometry');
    }
    set geometry(value: Record<string, any> | { orientation?: "horizontal" | "vertical" }) {
        this._setOption('geometry', value);
    }


    /**
     * [descr:BaseGaugeOptions.loadingIndicator]
    
     */
    @Input()
    get loadingIndicator(): Record<string, any> | { backgroundColor?: string, font?: Font, show?: boolean, text?: string } {
        return this._getOption('loadingIndicator');
    }
    set loadingIndicator(value: Record<string, any> | { backgroundColor?: string, font?: Font, show?: boolean, text?: string }) {
        this._setOption('loadingIndicator', value);
    }


    /**
     * [descr:BaseWidgetOptions.margin]
    
     */
    @Input()
    get margin(): Record<string, any> | { bottom?: number, left?: number, right?: number, top?: number } {
        return this._getOption('margin');
    }
    set margin(value: Record<string, any> | { bottom?: number, left?: number, right?: number, top?: number }) {
        this._setOption('margin', value);
    }


    /**
     * [descr:BaseWidgetOptions.pathModified]
    
     */
    @Input()
    get pathModified(): boolean {
        return this._getOption('pathModified');
    }
    set pathModified(value: boolean) {
        this._setOption('pathModified', value);
    }


    /**
     * [descr:dxLinearGaugeOptions.rangeContainer]
    
     */
    @Input()
    get rangeContainer(): Record<string, any> | { backgroundColor?: ChartsColor | string, horizontalOrientation?: "center" | "left" | "right", offset?: number, palette?: Array<string> | "Bright" | "Harmony Light" | "Ocean" | "Pastel" | "Soft" | "Soft Pastel" | "Vintage" | "Violet" | "Carmine" | "Dark Moon" | "Dark Violet" | "Green Mist" | "Soft Blue" | "Material" | "Office", paletteExtensionMode?: "alternate" | "blend" | "extrapolate", ranges?: Array<Record<string, any>> | { color?: ChartsColor | string, endValue?: number, startValue?: number }[], verticalOrientation?: "bottom" | "center" | "top", width?: number | Record<string, any> | { end?: number, start?: number } } {
        return this._getOption('rangeContainer');
    }
    set rangeContainer(value: Record<string, any> | { backgroundColor?: ChartsColor | string, horizontalOrientation?: "center" | "left" | "right", offset?: number, palette?: Array<string> | "Bright" | "Harmony Light" | "Ocean" | "Pastel" | "Soft" | "Soft Pastel" | "Vintage" | "Violet" | "Carmine" | "Dark Moon" | "Dark Violet" | "Green Mist" | "Soft Blue" | "Material" | "Office", paletteExtensionMode?: "alternate" | "blend" | "extrapolate", ranges?: Array<Record<string, any>> | { color?: ChartsColor | string, endValue?: number, startValue?: number }[], verticalOrientation?: "bottom" | "center" | "top", width?: number | Record<string, any> | { end?: number, start?: number } }) {
        this._setOption('rangeContainer', value);
    }


    /**
     * [descr:BaseWidgetOptions.redrawOnResize]
    
     */
    @Input()
    get redrawOnResize(): boolean {
        return this._getOption('redrawOnResize');
    }
    set redrawOnResize(value: boolean) {
        this._setOption('redrawOnResize', value);
    }


    /**
     * [descr:BaseWidgetOptions.rtlEnabled]
    
     */
    @Input()
    get rtlEnabled(): boolean {
        return this._getOption('rtlEnabled');
    }
    set rtlEnabled(value: boolean) {
        this._setOption('rtlEnabled', value);
    }


    /**
     * [descr:dxLinearGaugeOptions.scale]
    
     */
    @Input()
    get scale(): Record<string, any> | { allowDecimals?: boolean, customMinorTicks?: Array<number>, customTicks?: Array<number>, endValue?: number, horizontalOrientation?: "center" | "left" | "right", label?: Record<string, any> | { customizeText?: ((scaleValue: { value: number, valueText: string }) => string), font?: Font, format?: LocalizationTypes.Format, indentFromTick?: number, overlappingBehavior?: "hide" | "none", useRangeColors?: boolean, visible?: boolean }, minorTick?: Record<string, any> | { color?: string, length?: number, opacity?: number, visible?: boolean, width?: number }, minorTickInterval?: number, scaleDivisionFactor?: number, startValue?: number, tick?: Record<string, any> | { color?: string, length?: number, opacity?: number, visible?: boolean, width?: number }, tickInterval?: number, verticalOrientation?: "bottom" | "center" | "top" } {
        return this._getOption('scale');
    }
    set scale(value: Record<string, any> | { allowDecimals?: boolean, customMinorTicks?: Array<number>, customTicks?: Array<number>, endValue?: number, horizontalOrientation?: "center" | "left" | "right", label?: Record<string, any> | { customizeText?: ((scaleValue: { value: number, valueText: string }) => string), font?: Font, format?: LocalizationTypes.Format, indentFromTick?: number, overlappingBehavior?: "hide" | "none", useRangeColors?: boolean, visible?: boolean }, minorTick?: Record<string, any> | { color?: string, length?: number, opacity?: number, visible?: boolean, width?: number }, minorTickInterval?: number, scaleDivisionFactor?: number, startValue?: number, tick?: Record<string, any> | { color?: string, length?: number, opacity?: number, visible?: boolean, width?: number }, tickInterval?: number, verticalOrientation?: "bottom" | "center" | "top" }) {
        this._setOption('scale', value);
    }


    /**
     * [descr:BaseWidgetOptions.size]
    
     */
    @Input()
    get size(): Record<string, any> | { height?: number, width?: number } {
        return this._getOption('size');
    }
    set size(value: Record<string, any> | { height?: number, width?: number }) {
        this._setOption('size', value);
    }


    /**
     * [descr:dxLinearGaugeOptions.subvalueIndicator]
    
     */
    @Input()
    get subvalueIndicator(): GaugeIndicator | { type?: "rectangle" | "circle" | "rhombus" | "rangeBar" | "triangleMarker" | "textCloud" } {
        return this._getOption('subvalueIndicator');
    }
    set subvalueIndicator(value: GaugeIndicator | { type?: "rectangle" | "circle" | "rhombus" | "rangeBar" | "triangleMarker" | "textCloud" }) {
        this._setOption('subvalueIndicator', value);
    }


    /**
     * [descr:BaseGaugeOptions.subvalues]
    
     */
    @Input()
    get subvalues(): Array<number> {
        return this._getOption('subvalues');
    }
    set subvalues(value: Array<number>) {
        this._setOption('subvalues', value);
    }


    /**
     * [descr:BaseWidgetOptions.theme]
    
     */
    @Input()
    get theme(): "generic.dark" | "generic.light" | "generic.contrast" | "generic.carmine" | "generic.darkmoon" | "generic.darkviolet" | "generic.greenmist" | "generic.softblue" | "material.blue.light" | "material.lime.light" | "material.orange.light" | "material.purple.light" | "material.teal.light" {
        return this._getOption('theme');
    }
    set theme(value: "generic.dark" | "generic.light" | "generic.contrast" | "generic.carmine" | "generic.darkmoon" | "generic.darkviolet" | "generic.greenmist" | "generic.softblue" | "material.blue.light" | "material.lime.light" | "material.orange.light" | "material.purple.light" | "material.teal.light") {
        this._setOption('theme', value);
    }


    /**
     * [descr:BaseWidgetOptions.title]
    
     */
    @Input()
    get title(): string | { font?: Font, horizontalAlignment?: "center" | "left" | "right", margin?: number | Record<string, any> | { bottom?: number, left?: number, right?: number, top?: number }, placeholderSize?: number, subtitle?: string | { font?: Font, offset?: number, text?: string, textOverflow?: "ellipsis" | "hide" | "none", wordWrap?: "normal" | "breakWord" | "none" }, text?: string, textOverflow?: "ellipsis" | "hide" | "none", verticalAlignment?: "bottom" | "top", wordWrap?: "normal" | "breakWord" | "none" } {
        return this._getOption('title');
    }
    set title(value: string | { font?: Font, horizontalAlignment?: "center" | "left" | "right", margin?: number | Record<string, any> | { bottom?: number, left?: number, right?: number, top?: number }, placeholderSize?: number, subtitle?: string | { font?: Font, offset?: number, text?: string, textOverflow?: "ellipsis" | "hide" | "none", wordWrap?: "normal" | "breakWord" | "none" }, text?: string, textOverflow?: "ellipsis" | "hide" | "none", verticalAlignment?: "bottom" | "top", wordWrap?: "normal" | "breakWord" | "none" }) {
        this._setOption('title', value);
    }


    /**
     * [descr:BaseGaugeOptions.tooltip]
    
     */
    @Input()
    get tooltip(): Record<string, any> | { arrowLength?: number, border?: Record<string, any> | { color?: string, dashStyle?: "dash" | "dot" | "longDash" | "solid", opacity?: number, visible?: boolean, width?: number }, color?: string, container?: any | string, contentTemplate?: any, cornerRadius?: number, customizeTooltip?: ((scaleValue: { value: number, valueText: string }) => Record<string, any>), enabled?: boolean, font?: Font, format?: LocalizationTypes.Format, interactive?: boolean, opacity?: number, paddingLeftRight?: number, paddingTopBottom?: number, shadow?: Record<string, any> | { blur?: number, color?: string, offsetX?: number, offsetY?: number, opacity?: number }, zIndex?: number } {
        return this._getOption('tooltip');
    }
    set tooltip(value: Record<string, any> | { arrowLength?: number, border?: Record<string, any> | { color?: string, dashStyle?: "dash" | "dot" | "longDash" | "solid", opacity?: number, visible?: boolean, width?: number }, color?: string, container?: any | string, contentTemplate?: any, cornerRadius?: number, customizeTooltip?: ((scaleValue: { value: number, valueText: string }) => Record<string, any>), enabled?: boolean, font?: Font, format?: LocalizationTypes.Format, interactive?: boolean, opacity?: number, paddingLeftRight?: number, paddingTopBottom?: number, shadow?: Record<string, any> | { blur?: number, color?: string, offsetX?: number, offsetY?: number, opacity?: number }, zIndex?: number }) {
        this._setOption('tooltip', value);
    }


    /**
     * [descr:BaseGaugeOptions.value]
    
     */
    @Input()
    get value(): number {
        return this._getOption('value');
    }
    set value(value: number) {
        this._setOption('value', value);
    }


    /**
     * [descr:dxLinearGaugeOptions.valueIndicator]
    
     */
    @Input()
    get valueIndicator(): GaugeIndicator | { type?: "rectangle" | "circle" | "rhombus" | "rangeBar" | "triangleMarker" | "textCloud" } {
        return this._getOption('valueIndicator');
    }
    set valueIndicator(value: GaugeIndicator | { type?: "rectangle" | "circle" | "rhombus" | "rangeBar" | "triangleMarker" | "textCloud" }) {
        this._setOption('valueIndicator', value);
    }

    /**
    
     * [descr:dxLinearGaugeOptions.onDisposing]
    
    
     */
    @Output() onDisposing: EventEmitter<DisposingEvent>;

    /**
    
     * [descr:dxLinearGaugeOptions.onDrawn]
    
    
     */
    @Output() onDrawn: EventEmitter<DrawnEvent>;

    /**
    
     * [descr:dxLinearGaugeOptions.onExported]
    
    
     */
    @Output() onExported: EventEmitter<ExportedEvent>;

    /**
    
     * [descr:dxLinearGaugeOptions.onExporting]
    
    
     */
    @Output() onExporting: EventEmitter<ExportingEvent>;

    /**
    
     * [descr:dxLinearGaugeOptions.onFileSaving]
    
    
     */
    @Output() onFileSaving: EventEmitter<FileSavingEvent>;

    /**
    
     * [descr:dxLinearGaugeOptions.onIncidentOccurred]
    
    
     */
    @Output() onIncidentOccurred: EventEmitter<IncidentOccurredEvent>;

    /**
    
     * [descr:dxLinearGaugeOptions.onInitialized]
    
    
     */
    @Output() onInitialized: EventEmitter<InitializedEvent>;

    /**
    
     * [descr:dxLinearGaugeOptions.onOptionChanged]
    
    
     */
    @Output() onOptionChanged: EventEmitter<OptionChangedEvent>;

    /**
    
     * [descr:dxLinearGaugeOptions.onTooltipHidden]
    
    
     */
    @Output() onTooltipHidden: EventEmitter<TooltipHiddenEvent>;

    /**
    
     * [descr:dxLinearGaugeOptions.onTooltipShown]
    
    
     */
    @Output() onTooltipShown: EventEmitter<TooltipShownEvent>;

    /**
    
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
    
     */
    @Output() animationChange: EventEmitter<Record<string, any> | { duration?: number, easing?: "easeOutCubic" | "linear", enabled?: boolean }>;

    /**
    
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
    
     */
    @Output() containerBackgroundColorChange: EventEmitter<string>;

    /**
    
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
    
     */
    @Output() disabledChange: EventEmitter<boolean>;

    /**
    
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
    
     */
    @Output() elementAttrChange: EventEmitter<Record<string, any>>;

    /**
    
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
    
     */
    @Output() exportChange: EventEmitter<Record<string, any> | { backgroundColor?: string, enabled?: boolean, fileName?: string, formats?: Array<"GIF" | "JPEG" | "PDF" | "PNG" | "SVG">, margin?: number, printingEnabled?: boolean, svgToCanvas?: ((svg: any, canvas: any) => any) }>;

    /**
    
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
    
     */
    @Output() geometryChange: EventEmitter<Record<string, any> | { orientation?: "horizontal" | "vertical" }>;

    /**
    
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
    
     */
    @Output() loadingIndicatorChange: EventEmitter<Record<string, any> | { backgroundColor?: string, font?: Font, show?: boolean, text?: string }>;

    /**
    
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
    
     */
    @Output() marginChange: EventEmitter<Record<string, any> | { bottom?: number, left?: number, right?: number, top?: number }>;

    /**
    
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
    
     */
    @Output() pathModifiedChange: EventEmitter<boolean>;

    /**
    
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
    
     */
    @Output() rangeContainerChange: EventEmitter<Record<string, any> | { backgroundColor?: ChartsColor | string, horizontalOrientation?: "center" | "left" | "right", offset?: number, palette?: Array<string> | "Bright" | "Harmony Light" | "Ocean" | "Pastel" | "Soft" | "Soft Pastel" | "Vintage" | "Violet" | "Carmine" | "Dark Moon" | "Dark Violet" | "Green Mist" | "Soft Blue" | "Material" | "Office", paletteExtensionMode?: "alternate" | "blend" | "extrapolate", ranges?: Array<Record<string, any>> | { color?: ChartsColor | string, endValue?: number, startValue?: number }[], verticalOrientation?: "bottom" | "center" | "top", width?: number | Record<string, any> | { end?: number, start?: number } }>;

    /**
    
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
    
     */
    @Output() redrawOnResizeChange: EventEmitter<boolean>;

    /**
    
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
    
     */
    @Output() rtlEnabledChange: EventEmitter<boolean>;

    /**
    
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
    
     */
    @Output() scaleChange: EventEmitter<Record<string, any> | { allowDecimals?: boolean, customMinorTicks?: Array<number>, customTicks?: Array<number>, endValue?: number, horizontalOrientation?: "center" | "left" | "right", label?: Record<string, any> | { customizeText?: ((scaleValue: { value: number, valueText: string }) => string), font?: Font, format?: LocalizationTypes.Format, indentFromTick?: number, overlappingBehavior?: "hide" | "none", useRangeColors?: boolean, visible?: boolean }, minorTick?: Record<string, any> | { color?: string, length?: number, opacity?: number, visible?: boolean, width?: number }, minorTickInterval?: number, scaleDivisionFactor?: number, startValue?: number, tick?: Record<string, any> | { color?: string, length?: number, opacity?: number, visible?: boolean, width?: number }, tickInterval?: number, verticalOrientation?: "bottom" | "center" | "top" }>;

    /**
    
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
    
     */
    @Output() sizeChange: EventEmitter<Record<string, any> | { height?: number, width?: number }>;

    /**
    
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
    
     */
    @Output() subvalueIndicatorChange: EventEmitter<GaugeIndicator | { type?: "rectangle" | "circle" | "rhombus" | "rangeBar" | "triangleMarker" | "textCloud" }>;

    /**
    
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
    
     */
    @Output() subvaluesChange: EventEmitter<Array<number>>;

    /**
    
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
    
     */
    @Output() themeChange: EventEmitter<"generic.dark" | "generic.light" | "generic.contrast" | "generic.carmine" | "generic.darkmoon" | "generic.darkviolet" | "generic.greenmist" | "generic.softblue" | "material.blue.light" | "material.lime.light" | "material.orange.light" | "material.purple.light" | "material.teal.light">;

    /**
    
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
    
     */
    @Output() titleChange: EventEmitter<string | { font?: Font, horizontalAlignment?: "center" | "left" | "right", margin?: number | Record<string, any> | { bottom?: number, left?: number, right?: number, top?: number }, placeholderSize?: number, subtitle?: string | { font?: Font, offset?: number, text?: string, textOverflow?: "ellipsis" | "hide" | "none", wordWrap?: "normal" | "breakWord" | "none" }, text?: string, textOverflow?: "ellipsis" | "hide" | "none", verticalAlignment?: "bottom" | "top", wordWrap?: "normal" | "breakWord" | "none" }>;

    /**
    
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
    
     */
    @Output() tooltipChange: EventEmitter<Record<string, any> | { arrowLength?: number, border?: Record<string, any> | { color?: string, dashStyle?: "dash" | "dot" | "longDash" | "solid", opacity?: number, visible?: boolean, width?: number }, color?: string, container?: any | string, contentTemplate?: any, cornerRadius?: number, customizeTooltip?: ((scaleValue: { value: number, valueText: string }) => Record<string, any>), enabled?: boolean, font?: Font, format?: LocalizationTypes.Format, interactive?: boolean, opacity?: number, paddingLeftRight?: number, paddingTopBottom?: number, shadow?: Record<string, any> | { blur?: number, color?: string, offsetX?: number, offsetY?: number, opacity?: number }, zIndex?: number }>;

    /**
    
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
    
     */
    @Output() valueChange: EventEmitter<number>;

    /**
    
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
    
     */
    @Output() valueIndicatorChange: EventEmitter<GaugeIndicator | { type?: "rectangle" | "circle" | "rhombus" | "rangeBar" | "triangleMarker" | "textCloud" }>;








    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost,
            private _watcherHelper: WatcherHelper,
            private _idh: IterableDifferHelper,
            optionHost: NestedOptionHost,
            transferState: TransferState,
            @Inject(PLATFORM_ID) platformId: any) {

        super(elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId);

        this._createEventEmitters([
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'drawn', emit: 'onDrawn' },
            { subscribe: 'exported', emit: 'onExported' },
            { subscribe: 'exporting', emit: 'onExporting' },
            { subscribe: 'fileSaving', emit: 'onFileSaving' },
            { subscribe: 'incidentOccurred', emit: 'onIncidentOccurred' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'tooltipHidden', emit: 'onTooltipHidden' },
            { subscribe: 'tooltipShown', emit: 'onTooltipShown' },
            { emit: 'animationChange' },
            { emit: 'containerBackgroundColorChange' },
            { emit: 'disabledChange' },
            { emit: 'elementAttrChange' },
            { emit: 'exportChange' },
            { emit: 'geometryChange' },
            { emit: 'loadingIndicatorChange' },
            { emit: 'marginChange' },
            { emit: 'pathModifiedChange' },
            { emit: 'rangeContainerChange' },
            { emit: 'redrawOnResizeChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'scaleChange' },
            { emit: 'sizeChange' },
            { emit: 'subvalueIndicatorChange' },
            { emit: 'subvaluesChange' },
            { emit: 'themeChange' },
            { emit: 'titleChange' },
            { emit: 'tooltipChange' },
            { emit: 'valueChange' },
            { emit: 'valueIndicatorChange' }
        ]);

        this._idh.setHost(this);
        optionHost.setHost(this);
    }

    protected _createInstance(element, options) {

        return new DxLinearGauge(element, options);
    }


    ngOnDestroy() {
        this._destroyWidget();
    }

    ngOnChanges(changes: SimpleChanges) {
        super.ngOnChanges(changes);
        this.setupChanges('subvalues', changes);
    }

    setupChanges(prop: string, changes: SimpleChanges) {
        if (!(prop in this._optionsToUpdate)) {
            this._idh.setup(prop, changes);
        }
    }

    ngDoCheck() {
        this._idh.doCheck('subvalues');
        this._watcherHelper.checkWatchers();
        super.ngDoCheck();
        super.clearChangedOptions();
    }

    _setOption(name: string, value: any) {
        let isSetup = this._idh.setupSingle(name, value);
        let isChanged = this._idh.getChanges(name, value) !== null;

        if (isSetup || isChanged) {
            super._setOption(name, value);
        }
    }
}

@NgModule({
  imports: [
    DxoAnimationModule,
    DxoExportModule,
    DxoGeometryModule,
    DxoLoadingIndicatorModule,
    DxoFontModule,
    DxoMarginModule,
    DxoRangeContainerModule,
    DxoBackgroundColorModule,
    DxiRangeModule,
    DxoColorModule,
    DxoWidthModule,
    DxoScaleModule,
    DxoLabelModule,
    DxoFormatModule,
    DxoMinorTickModule,
    DxoTickModule,
    DxoSizeModule,
    DxoSubvalueIndicatorModule,
    DxoTextModule,
    DxoTitleModule,
    DxoSubtitleModule,
    DxoTooltipModule,
    DxoBorderModule,
    DxoShadowModule,
    DxoValueIndicatorModule,
    DxoLinearGaugeAnimationModule,
    DxoLinearGaugeBackgroundColorModule,
    DxoLinearGaugeBorderModule,
    DxoLinearGaugeColorModule,
    DxoLinearGaugeExportModule,
    DxoLinearGaugeFontModule,
    DxoLinearGaugeFormatModule,
    DxoLinearGaugeGeometryModule,
    DxoLinearGaugeLabelModule,
    DxoLinearGaugeLoadingIndicatorModule,
    DxoLinearGaugeMarginModule,
    DxoLinearGaugeMinorTickModule,
    DxiLinearGaugeRangeModule,
    DxoLinearGaugeRangeContainerModule,
    DxoLinearGaugeScaleModule,
    DxoLinearGaugeShadowModule,
    DxoLinearGaugeSizeModule,
    DxoLinearGaugeSubtitleModule,
    DxoLinearGaugeSubvalueIndicatorModule,
    DxoLinearGaugeTextModule,
    DxoLinearGaugeTickModule,
    DxoLinearGaugeTitleModule,
    DxoLinearGaugeTooltipModule,
    DxoLinearGaugeValueIndicatorModule,
    DxoLinearGaugeWidthModule,
    DxIntegrationModule,
    DxTemplateModule
  ],
  declarations: [
    DxLinearGaugeComponent
  ],
  exports: [
    DxLinearGaugeComponent,
    DxoAnimationModule,
    DxoExportModule,
    DxoGeometryModule,
    DxoLoadingIndicatorModule,
    DxoFontModule,
    DxoMarginModule,
    DxoRangeContainerModule,
    DxoBackgroundColorModule,
    DxiRangeModule,
    DxoColorModule,
    DxoWidthModule,
    DxoScaleModule,
    DxoLabelModule,
    DxoFormatModule,
    DxoMinorTickModule,
    DxoTickModule,
    DxoSizeModule,
    DxoSubvalueIndicatorModule,
    DxoTextModule,
    DxoTitleModule,
    DxoSubtitleModule,
    DxoTooltipModule,
    DxoBorderModule,
    DxoShadowModule,
    DxoValueIndicatorModule,
    DxoLinearGaugeAnimationModule,
    DxoLinearGaugeBackgroundColorModule,
    DxoLinearGaugeBorderModule,
    DxoLinearGaugeColorModule,
    DxoLinearGaugeExportModule,
    DxoLinearGaugeFontModule,
    DxoLinearGaugeFormatModule,
    DxoLinearGaugeGeometryModule,
    DxoLinearGaugeLabelModule,
    DxoLinearGaugeLoadingIndicatorModule,
    DxoLinearGaugeMarginModule,
    DxoLinearGaugeMinorTickModule,
    DxiLinearGaugeRangeModule,
    DxoLinearGaugeRangeContainerModule,
    DxoLinearGaugeScaleModule,
    DxoLinearGaugeShadowModule,
    DxoLinearGaugeSizeModule,
    DxoLinearGaugeSubtitleModule,
    DxoLinearGaugeSubvalueIndicatorModule,
    DxoLinearGaugeTextModule,
    DxoLinearGaugeTickModule,
    DxoLinearGaugeTitleModule,
    DxoLinearGaugeTooltipModule,
    DxoLinearGaugeValueIndicatorModule,
    DxoLinearGaugeWidthModule,
    DxTemplateModule
  ]
})
export class DxLinearGaugeModule { }

import type * as DxLinearGaugeTypes from "devextreme/viz/linear_gauge_types";
export { DxLinearGaugeTypes };


