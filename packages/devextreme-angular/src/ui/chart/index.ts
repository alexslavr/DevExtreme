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
    SimpleChanges,
    ContentChildren,
    QueryList
} from '@angular/core';


import { ExportFormat, HorizontalAlignment, Orientation, Position, SingleOrMultiple, VerticalAlignment, VerticalEdge } from 'devextreme/common';
import { AnimationEaseMode, ArgumentAxisHoverMode, AxisScaleType, ChartsAxisLabelOverlap, ChartsColor, ChartsDataType, ChartsLabelOverlap, DashStyle, DiscreteAxisDivisionMode, Font, LegendHoverMode, Palette, PaletteExtensionMode, RelativePosition, ScaleBreak, ScaleBreakLineStyle, TextOverflow, Theme, TimeInterval, VisualRange, VisualRangeUpdateMode, WordWrap } from 'devextreme/common/charts';
import { UserDefinedElement } from 'devextreme/core/element';
import { Store } from 'devextreme/data';
import DataSource, { Options as DataSourceOptions } from 'devextreme/data/data_source';
import { Format } from 'devextreme/localization';
import { AggregatedPointsPosition, ArgumentAxisClickEvent, ChartLabelDisplayMode, ChartTooltipLocation, ChartZoomAndPanMode, DisposingEvent, DoneEvent, DrawnEvent, dxChartAnnotationConfig, dxChartCommonAnnotationConfig, EventKeyModifier, ExportedEvent, ExportingEvent, FileSavingEvent, IncidentOccurredEvent, InitializedEvent, LegendClickEvent, OptionChangedEvent, PointClickEvent, PointHoverChangedEvent, PointSelectionChangedEvent, SeriesClickEvent, SeriesHoverChangedEvent, SeriesSelectionChangedEvent, TooltipHiddenEvent, TooltipShownEvent, ZoomEndEvent, ZoomStartEvent } from 'devextreme/viz/chart';
import { ChartSeries } from 'devextreme/viz/common';

import DxChart from 'devextreme/viz/chart';


import {
    DxComponent,
    DxTemplateHost,
    DxIntegrationModule,
    DxTemplateModule,
    NestedOptionHost,
    IterableDifferHelper,
    WatcherHelper
} from 'devextreme-angular/core';


import { DxoAdaptiveLayoutModule } from 'devextreme-angular/ui/nested';
import { DxoAnimationModule } from 'devextreme-angular/ui/nested';
import { DxiAnnotationModule } from 'devextreme-angular/ui/nested';
import { DxoBorderModule } from 'devextreme-angular/ui/nested';
import { DxoFontModule } from 'devextreme-angular/ui/nested';
import { DxoImageModule } from 'devextreme-angular/ui/nested';
import { DxoShadowModule } from 'devextreme-angular/ui/nested';
import { DxoArgumentAxisModule } from 'devextreme-angular/ui/nested';
import { DxoAggregationIntervalModule } from 'devextreme-angular/ui/nested';
import { DxiBreakModule } from 'devextreme-angular/ui/nested';
import { DxoBreakStyleModule } from 'devextreme-angular/ui/nested';
import { DxiConstantLineModule } from 'devextreme-angular/ui/nested';
import { DxoLabelModule } from 'devextreme-angular/ui/nested';
import { DxoConstantLineStyleModule } from 'devextreme-angular/ui/nested';
import { DxoGridModule } from 'devextreme-angular/ui/nested';
import { DxoFormatModule } from 'devextreme-angular/ui/nested';
import { DxoMinorGridModule } from 'devextreme-angular/ui/nested';
import { DxoMinorTickModule } from 'devextreme-angular/ui/nested';
import { DxoMinorTickIntervalModule } from 'devextreme-angular/ui/nested';
import { DxoMinVisualRangeLengthModule } from 'devextreme-angular/ui/nested';
import { DxiStripModule } from 'devextreme-angular/ui/nested';
import { DxoStripStyleModule } from 'devextreme-angular/ui/nested';
import { DxoTickModule } from 'devextreme-angular/ui/nested';
import { DxoTickIntervalModule } from 'devextreme-angular/ui/nested';
import { DxoTitleModule } from 'devextreme-angular/ui/nested';
import { DxoCommonAnnotationSettingsModule } from 'devextreme-angular/ui/nested';
import { DxoCommonAxisSettingsModule } from 'devextreme-angular/ui/nested';
import { DxoCommonPaneSettingsModule } from 'devextreme-angular/ui/nested';
import { DxoBackgroundColorModule } from 'devextreme-angular/ui/nested';
import { DxoCommonSeriesSettingsModule } from 'devextreme-angular/ui/nested';
import { DxoAggregationModule } from 'devextreme-angular/ui/nested';
import { DxoAreaModule } from 'devextreme-angular/ui/nested';
import { DxoHoverStyleModule } from 'devextreme-angular/ui/nested';
import { DxoHatchingModule } from 'devextreme-angular/ui/nested';
import { DxoConnectorModule } from 'devextreme-angular/ui/nested';
import { DxoPointModule } from 'devextreme-angular/ui/nested';
import { DxoHeightModule } from 'devextreme-angular/ui/nested';
import { DxoUrlModule } from 'devextreme-angular/ui/nested';
import { DxoWidthModule } from 'devextreme-angular/ui/nested';
import { DxoSelectionStyleModule } from 'devextreme-angular/ui/nested';
import { DxoReductionModule } from 'devextreme-angular/ui/nested';
import { DxoValueErrorBarModule } from 'devextreme-angular/ui/nested';
import { DxoBarModule } from 'devextreme-angular/ui/nested';
import { DxoBubbleModule } from 'devextreme-angular/ui/nested';
import { DxoCandlestickModule } from 'devextreme-angular/ui/nested';
import { DxoColorModule } from 'devextreme-angular/ui/nested';
import { DxoFullstackedareaModule } from 'devextreme-angular/ui/nested';
import { DxoFullstackedbarModule } from 'devextreme-angular/ui/nested';
import { DxoFullstackedlineModule } from 'devextreme-angular/ui/nested';
import { DxoFullstackedsplineModule } from 'devextreme-angular/ui/nested';
import { DxoFullstackedsplineareaModule } from 'devextreme-angular/ui/nested';
import { DxoArgumentFormatModule } from 'devextreme-angular/ui/nested';
import { DxoLineModule } from 'devextreme-angular/ui/nested';
import { DxoRangeareaModule } from 'devextreme-angular/ui/nested';
import { DxoRangebarModule } from 'devextreme-angular/ui/nested';
import { DxoScatterModule } from 'devextreme-angular/ui/nested';
import { DxoSplineModule } from 'devextreme-angular/ui/nested';
import { DxoSplineareaModule } from 'devextreme-angular/ui/nested';
import { DxoStackedareaModule } from 'devextreme-angular/ui/nested';
import { DxoStackedbarModule } from 'devextreme-angular/ui/nested';
import { DxoStackedlineModule } from 'devextreme-angular/ui/nested';
import { DxoStackedsplineModule } from 'devextreme-angular/ui/nested';
import { DxoStackedsplineareaModule } from 'devextreme-angular/ui/nested';
import { DxoStepareaModule } from 'devextreme-angular/ui/nested';
import { DxoSteplineModule } from 'devextreme-angular/ui/nested';
import { DxoStockModule } from 'devextreme-angular/ui/nested';
import { DxoCrosshairModule } from 'devextreme-angular/ui/nested';
import { DxoHorizontalLineModule } from 'devextreme-angular/ui/nested';
import { DxoVerticalLineModule } from 'devextreme-angular/ui/nested';
import { DxoDataPrepareSettingsModule } from 'devextreme-angular/ui/nested';
import { DxoExportModule } from 'devextreme-angular/ui/nested';
import { DxoLegendModule } from 'devextreme-angular/ui/nested';
import { DxoMarginModule } from 'devextreme-angular/ui/nested';
import { DxoSubtitleModule } from 'devextreme-angular/ui/nested';
import { DxoLoadingIndicatorModule } from 'devextreme-angular/ui/nested';
import { DxiPaneModule } from 'devextreme-angular/ui/nested';
import { DxoScrollBarModule } from 'devextreme-angular/ui/nested';
import { DxiSeriesModule } from 'devextreme-angular/ui/nested';
import { DxoSeriesTemplateModule } from 'devextreme-angular/ui/nested';
import { DxoSizeModule } from 'devextreme-angular/ui/nested';
import { DxoTooltipModule } from 'devextreme-angular/ui/nested';
import { DxiValueAxisModule } from 'devextreme-angular/ui/nested';
import { DxoZoomAndPanModule } from 'devextreme-angular/ui/nested';
import { DxoDragBoxStyleModule } from 'devextreme-angular/ui/nested';

import { DxoAdaptiveLayoutChartModule } from 'devextreme-angular/ui/chart/nested';
import { DxoAnimationChartModule } from 'devextreme-angular/ui/chart/nested';
import { DxiAnnotationChartModule } from 'devextreme-angular/ui/chart/nested';
import { DxoBorderChartModule } from 'devextreme-angular/ui/chart/nested';
import { DxoFontChartModule } from 'devextreme-angular/ui/chart/nested';
import { DxoImageChartModule } from 'devextreme-angular/ui/chart/nested';
import { DxoShadowChartModule } from 'devextreme-angular/ui/chart/nested';
import { DxoArgumentAxisChartModule } from 'devextreme-angular/ui/chart/nested';
import { DxoAggregationIntervalChartModule } from 'devextreme-angular/ui/chart/nested';
import { DxiBreakChartModule } from 'devextreme-angular/ui/chart/nested';
import { DxoBreakStyleChartModule } from 'devextreme-angular/ui/chart/nested';
import { DxiConstantLineChartModule } from 'devextreme-angular/ui/chart/nested';
import { DxoLabelChartModule } from 'devextreme-angular/ui/chart/nested';
import { DxoConstantLineStyleChartModule } from 'devextreme-angular/ui/chart/nested';
import { DxoGridChartModule } from 'devextreme-angular/ui/chart/nested';
import { DxoFormatChartModule } from 'devextreme-angular/ui/chart/nested';
import { DxoMinorGridChartModule } from 'devextreme-angular/ui/chart/nested';
import { DxoMinorTickChartModule } from 'devextreme-angular/ui/chart/nested';
import { DxoMinorTickIntervalChartModule } from 'devextreme-angular/ui/chart/nested';
import { DxoMinVisualRangeLengthChartModule } from 'devextreme-angular/ui/chart/nested';
import { DxiStripChartModule } from 'devextreme-angular/ui/chart/nested';
import { DxoStripStyleChartModule } from 'devextreme-angular/ui/chart/nested';
import { DxoTickChartModule } from 'devextreme-angular/ui/chart/nested';
import { DxoTickIntervalChartModule } from 'devextreme-angular/ui/chart/nested';
import { DxoTitleChartModule } from 'devextreme-angular/ui/chart/nested';
import { DxoCommonAnnotationSettingsChartModule } from 'devextreme-angular/ui/chart/nested';
import { DxoCommonAxisSettingsChartModule } from 'devextreme-angular/ui/chart/nested';
import { DxoCommonPaneSettingsChartModule } from 'devextreme-angular/ui/chart/nested';
import { DxoBackgroundColorChartModule } from 'devextreme-angular/ui/chart/nested';
import { DxoCommonSeriesSettingsChartModule } from 'devextreme-angular/ui/chart/nested';
import { DxoAggregationChartModule } from 'devextreme-angular/ui/chart/nested';
import { DxoAreaChartModule } from 'devextreme-angular/ui/chart/nested';
import { DxoHoverStyleChartModule } from 'devextreme-angular/ui/chart/nested';
import { DxoHatchingChartModule } from 'devextreme-angular/ui/chart/nested';
import { DxoConnectorChartModule } from 'devextreme-angular/ui/chart/nested';
import { DxoPointChartModule } from 'devextreme-angular/ui/chart/nested';
import { DxoHeightChartModule } from 'devextreme-angular/ui/chart/nested';
import { DxoUrlChartModule } from 'devextreme-angular/ui/chart/nested';
import { DxoWidthChartModule } from 'devextreme-angular/ui/chart/nested';
import { DxoSelectionStyleChartModule } from 'devextreme-angular/ui/chart/nested';
import { DxoReductionChartModule } from 'devextreme-angular/ui/chart/nested';
import { DxoValueErrorBarChartModule } from 'devextreme-angular/ui/chart/nested';
import { DxoBarChartModule } from 'devextreme-angular/ui/chart/nested';
import { DxoBubbleChartModule } from 'devextreme-angular/ui/chart/nested';
import { DxoCandlestickChartModule } from 'devextreme-angular/ui/chart/nested';
import { DxoColorChartModule } from 'devextreme-angular/ui/chart/nested';
import { DxoFullstackedareaChartModule } from 'devextreme-angular/ui/chart/nested';
import { DxoFullstackedbarChartModule } from 'devextreme-angular/ui/chart/nested';
import { DxoFullstackedlineChartModule } from 'devextreme-angular/ui/chart/nested';
import { DxoFullstackedsplineChartModule } from 'devextreme-angular/ui/chart/nested';
import { DxoFullstackedsplineareaChartModule } from 'devextreme-angular/ui/chart/nested';
import { DxoArgumentFormatChartModule } from 'devextreme-angular/ui/chart/nested';
import { DxoLineChartModule } from 'devextreme-angular/ui/chart/nested';
import { DxoRangeareaChartModule } from 'devextreme-angular/ui/chart/nested';
import { DxoRangebarChartModule } from 'devextreme-angular/ui/chart/nested';
import { DxoScatterChartModule } from 'devextreme-angular/ui/chart/nested';
import { DxoSplineChartModule } from 'devextreme-angular/ui/chart/nested';
import { DxoSplineareaChartModule } from 'devextreme-angular/ui/chart/nested';
import { DxoStackedareaChartModule } from 'devextreme-angular/ui/chart/nested';
import { DxoStackedbarChartModule } from 'devextreme-angular/ui/chart/nested';
import { DxoStackedlineChartModule } from 'devextreme-angular/ui/chart/nested';
import { DxoStackedsplineChartModule } from 'devextreme-angular/ui/chart/nested';
import { DxoStackedsplineareaChartModule } from 'devextreme-angular/ui/chart/nested';
import { DxoStepareaChartModule } from 'devextreme-angular/ui/chart/nested';
import { DxoSteplineChartModule } from 'devextreme-angular/ui/chart/nested';
import { DxoStockChartModule } from 'devextreme-angular/ui/chart/nested';
import { DxoCrosshairChartModule } from 'devextreme-angular/ui/chart/nested';
import { DxoHorizontalLineChartModule } from 'devextreme-angular/ui/chart/nested';
import { DxoVerticalLineChartModule } from 'devextreme-angular/ui/chart/nested';
import { DxoDataPrepareSettingsChartModule } from 'devextreme-angular/ui/chart/nested';
import { DxoExportChartModule } from 'devextreme-angular/ui/chart/nested';
import { DxoLegendChartModule } from 'devextreme-angular/ui/chart/nested';
import { DxoMarginChartModule } from 'devextreme-angular/ui/chart/nested';
import { DxoSubtitleChartModule } from 'devextreme-angular/ui/chart/nested';
import { DxoLoadingIndicatorChartModule } from 'devextreme-angular/ui/chart/nested';
import { DxiPaneChartModule } from 'devextreme-angular/ui/chart/nested';
import { DxoScrollBarChartModule } from 'devextreme-angular/ui/chart/nested';
import { DxiSeriesChartModule } from 'devextreme-angular/ui/chart/nested';
import { DxoSeriesTemplateChartModule } from 'devextreme-angular/ui/chart/nested';
import { DxoSizeChartModule } from 'devextreme-angular/ui/chart/nested';
import { DxoTooltipChartModule } from 'devextreme-angular/ui/chart/nested';
import { DxiValueAxisChartModule } from 'devextreme-angular/ui/chart/nested';
import { DxoZoomAndPanChartModule } from 'devextreme-angular/ui/chart/nested';
import { DxoDragBoxStyleChartModule } from 'devextreme-angular/ui/chart/nested';


import { DxiAnnotationComponent } from 'devextreme-angular/ui/nested';
import { DxiPaneComponent } from 'devextreme-angular/ui/nested';
import { DxiSeriesComponent } from 'devextreme-angular/ui/nested';
import { DxiValueAxisComponent } from 'devextreme-angular/ui/nested';

import { DxiAnnotationChartComponent } from 'devextreme-angular/ui/chart/nested';
import { DxiPaneChartComponent } from 'devextreme-angular/ui/chart/nested';
import { DxiSeriesChartComponent } from 'devextreme-angular/ui/chart/nested';
import { DxiValueAxisChartComponent } from 'devextreme-angular/ui/chart/nested';



/**
 * [descr:dxChart]

 */
@Component({
    selector: 'dx-chart',
    template: '',
    styles: [ ' :host {  display: block; }'],
    providers: [
        DxTemplateHost,
        WatcherHelper,
        NestedOptionHost,
        IterableDifferHelper
    ]
})
export class DxChartComponent extends DxComponent implements OnDestroy, OnChanges, DoCheck {
    instance: DxChart = null;

    /**
     * [descr:BaseChartOptions.adaptiveLayout]
    
     */
    @Input()
    get adaptiveLayout(): { height?: number, keepLabels?: boolean, width?: number } {
        return this._getOption('adaptiveLayout');
    }
    set adaptiveLayout(value: { height?: number, keepLabels?: boolean, width?: number }) {
        this._setOption('adaptiveLayout', value);
    }


    /**
     * [descr:dxChartOptions.adjustOnZoom]
    
     */
    @Input()
    get adjustOnZoom(): boolean {
        return this._getOption('adjustOnZoom');
    }
    set adjustOnZoom(value: boolean) {
        this._setOption('adjustOnZoom', value);
    }


    /**
     * [descr:BaseChartOptions.animation]
    
     */
    @Input()
    get animation(): boolean | { duration?: number, easing?: AnimationEaseMode, enabled?: boolean, maxPointCountSupported?: number } {
        return this._getOption('animation');
    }
    set animation(value: boolean | { duration?: number, easing?: AnimationEaseMode, enabled?: boolean, maxPointCountSupported?: number }) {
        this._setOption('animation', value);
    }


    /**
     * [descr:dxChartOptions.annotations]
    
     */
    @Input()
    get annotations(): Array<dxChartAnnotationConfig | any> {
        return this._getOption('annotations');
    }
    set annotations(value: Array<dxChartAnnotationConfig | any>) {
        this._setOption('annotations', value);
    }


    /**
     * [descr:dxChartOptions.argumentAxis]
    
     */
    @Input()
    get argumentAxis(): { aggregateByCategory?: boolean, aggregatedPointsPosition?: AggregatedPointsPosition, aggregationGroupWidth?: number | undefined, aggregationInterval?: TimeInterval | number | { days?: number, hours?: number, milliseconds?: number, minutes?: number, months?: number, quarters?: number, seconds?: number, weeks?: number, years?: number }, allowDecimals?: boolean | undefined, argumentType?: ChartsDataType | undefined, axisDivisionFactor?: number, breaks?: Array<ScaleBreak>, breakStyle?: { color?: string, line?: ScaleBreakLineStyle, width?: number }, categories?: Array<number | string | Date>, color?: string, constantLines?: Array<any | { color?: string, dashStyle?: DashStyle, displayBehindSeries?: boolean, extendAxis?: boolean, label?: { font?: Font, horizontalAlignment?: HorizontalAlignment, position?: RelativePosition, text?: string | undefined, verticalAlignment?: VerticalAlignment, visible?: boolean }, paddingLeftRight?: number, paddingTopBottom?: number, value?: Date | number | string | undefined, width?: number }>, constantLineStyle?: { color?: string, dashStyle?: DashStyle, label?: { font?: Font, horizontalAlignment?: HorizontalAlignment, position?: RelativePosition, verticalAlignment?: VerticalAlignment, visible?: boolean }, paddingLeftRight?: number, paddingTopBottom?: number, width?: number }, customPosition?: Date | number | string | undefined, customPositionAxis?: string | undefined, discreteAxisDivisionMode?: DiscreteAxisDivisionMode, endOnTick?: boolean, grid?: { color?: string, opacity?: number | undefined, visible?: boolean, width?: number }, holidays?: Array<Date | string | number>, hoverMode?: ArgumentAxisHoverMode, inverted?: boolean, label?: { alignment?: HorizontalAlignment | undefined, customizeHint?: Function, customizeText?: Function, displayMode?: ChartLabelDisplayMode, font?: Font, format?: Format | string | undefined, indentFromAxis?: number, overlappingBehavior?: ChartsAxisLabelOverlap, position?: RelativePosition | Position, rotationAngle?: number, staggeringSpacing?: number, template?: any | undefined, textOverflow?: TextOverflow, visible?: boolean, wordWrap?: WordWrap }, linearThreshold?: number | undefined, logarithmBase?: number, maxValueMargin?: number | undefined, minorGrid?: { color?: string, opacity?: number | undefined, visible?: boolean, width?: number }, minorTick?: { color?: string, length?: number, opacity?: number, shift?: number, visible?: boolean, width?: number }, minorTickCount?: number | undefined, minorTickInterval?: TimeInterval | number | { days?: number, hours?: number, milliseconds?: number, minutes?: number, months?: number, quarters?: number, seconds?: number, weeks?: number, years?: number }, minValueMargin?: number | undefined, minVisualRangeLength?: TimeInterval | number | undefined | { days?: number, hours?: number, milliseconds?: number, minutes?: number, months?: number, quarters?: number, seconds?: number, weeks?: number, years?: number }, offset?: number | undefined, opacity?: number | undefined, placeholderSize?: number, position?: Position, singleWorkdays?: Array<Date | string | number>, strips?: Array<any | { color?: string | undefined, endValue?: Date | number | string | undefined, label?: { font?: Font, horizontalAlignment?: HorizontalAlignment, text?: string | undefined, verticalAlignment?: VerticalAlignment }, paddingLeftRight?: number, paddingTopBottom?: number, startValue?: Date | number | string | undefined }>, stripStyle?: { label?: { font?: Font, horizontalAlignment?: HorizontalAlignment, verticalAlignment?: VerticalAlignment }, paddingLeftRight?: number, paddingTopBottom?: number }, tick?: { color?: string, length?: number, opacity?: number | undefined, shift?: number, visible?: boolean, width?: number }, tickInterval?: TimeInterval | number | { days?: number, hours?: number, milliseconds?: number, minutes?: number, months?: number, quarters?: number, seconds?: number, weeks?: number, years?: number }, title?: string | { alignment?: HorizontalAlignment, font?: Font, margin?: number, text?: string | undefined, textOverflow?: TextOverflow, wordWrap?: WordWrap }, type?: AxisScaleType | undefined, valueMarginsEnabled?: boolean, visible?: boolean, visualRange?: VisualRange | Array<number | string | Date>, visualRangeUpdateMode?: VisualRangeUpdateMode, wholeRange?: VisualRange | undefined | Array<number | string | Date>, width?: number, workdaysOnly?: boolean, workWeek?: Array<number> } {
        return this._getOption('argumentAxis');
    }
    set argumentAxis(value: { aggregateByCategory?: boolean, aggregatedPointsPosition?: AggregatedPointsPosition, aggregationGroupWidth?: number | undefined, aggregationInterval?: TimeInterval | number | { days?: number, hours?: number, milliseconds?: number, minutes?: number, months?: number, quarters?: number, seconds?: number, weeks?: number, years?: number }, allowDecimals?: boolean | undefined, argumentType?: ChartsDataType | undefined, axisDivisionFactor?: number, breaks?: Array<ScaleBreak>, breakStyle?: { color?: string, line?: ScaleBreakLineStyle, width?: number }, categories?: Array<number | string | Date>, color?: string, constantLines?: Array<any | { color?: string, dashStyle?: DashStyle, displayBehindSeries?: boolean, extendAxis?: boolean, label?: { font?: Font, horizontalAlignment?: HorizontalAlignment, position?: RelativePosition, text?: string | undefined, verticalAlignment?: VerticalAlignment, visible?: boolean }, paddingLeftRight?: number, paddingTopBottom?: number, value?: Date | number | string | undefined, width?: number }>, constantLineStyle?: { color?: string, dashStyle?: DashStyle, label?: { font?: Font, horizontalAlignment?: HorizontalAlignment, position?: RelativePosition, verticalAlignment?: VerticalAlignment, visible?: boolean }, paddingLeftRight?: number, paddingTopBottom?: number, width?: number }, customPosition?: Date | number | string | undefined, customPositionAxis?: string | undefined, discreteAxisDivisionMode?: DiscreteAxisDivisionMode, endOnTick?: boolean, grid?: { color?: string, opacity?: number | undefined, visible?: boolean, width?: number }, holidays?: Array<Date | string | number>, hoverMode?: ArgumentAxisHoverMode, inverted?: boolean, label?: { alignment?: HorizontalAlignment | undefined, customizeHint?: Function, customizeText?: Function, displayMode?: ChartLabelDisplayMode, font?: Font, format?: Format | string | undefined, indentFromAxis?: number, overlappingBehavior?: ChartsAxisLabelOverlap, position?: RelativePosition | Position, rotationAngle?: number, staggeringSpacing?: number, template?: any | undefined, textOverflow?: TextOverflow, visible?: boolean, wordWrap?: WordWrap }, linearThreshold?: number | undefined, logarithmBase?: number, maxValueMargin?: number | undefined, minorGrid?: { color?: string, opacity?: number | undefined, visible?: boolean, width?: number }, minorTick?: { color?: string, length?: number, opacity?: number, shift?: number, visible?: boolean, width?: number }, minorTickCount?: number | undefined, minorTickInterval?: TimeInterval | number | { days?: number, hours?: number, milliseconds?: number, minutes?: number, months?: number, quarters?: number, seconds?: number, weeks?: number, years?: number }, minValueMargin?: number | undefined, minVisualRangeLength?: TimeInterval | number | undefined | { days?: number, hours?: number, milliseconds?: number, minutes?: number, months?: number, quarters?: number, seconds?: number, weeks?: number, years?: number }, offset?: number | undefined, opacity?: number | undefined, placeholderSize?: number, position?: Position, singleWorkdays?: Array<Date | string | number>, strips?: Array<any | { color?: string | undefined, endValue?: Date | number | string | undefined, label?: { font?: Font, horizontalAlignment?: HorizontalAlignment, text?: string | undefined, verticalAlignment?: VerticalAlignment }, paddingLeftRight?: number, paddingTopBottom?: number, startValue?: Date | number | string | undefined }>, stripStyle?: { label?: { font?: Font, horizontalAlignment?: HorizontalAlignment, verticalAlignment?: VerticalAlignment }, paddingLeftRight?: number, paddingTopBottom?: number }, tick?: { color?: string, length?: number, opacity?: number | undefined, shift?: number, visible?: boolean, width?: number }, tickInterval?: TimeInterval | number | { days?: number, hours?: number, milliseconds?: number, minutes?: number, months?: number, quarters?: number, seconds?: number, weeks?: number, years?: number }, title?: string | { alignment?: HorizontalAlignment, font?: Font, margin?: number, text?: string | undefined, textOverflow?: TextOverflow, wordWrap?: WordWrap }, type?: AxisScaleType | undefined, valueMarginsEnabled?: boolean, visible?: boolean, visualRange?: VisualRange | Array<number | string | Date>, visualRangeUpdateMode?: VisualRangeUpdateMode, wholeRange?: VisualRange | undefined | Array<number | string | Date>, width?: number, workdaysOnly?: boolean, workWeek?: Array<number> }) {
        this._setOption('argumentAxis', value);
    }


    /**
     * [descr:dxChartOptions.autoHidePointMarkers]
    
     */
    @Input()
    get autoHidePointMarkers(): boolean {
        return this._getOption('autoHidePointMarkers');
    }
    set autoHidePointMarkers(value: boolean) {
        this._setOption('autoHidePointMarkers', value);
    }


    /**
     * [descr:dxChartOptions.barGroupPadding]
    
     */
    @Input()
    get barGroupPadding(): number {
        return this._getOption('barGroupPadding');
    }
    set barGroupPadding(value: number) {
        this._setOption('barGroupPadding', value);
    }


    /**
     * [descr:dxChartOptions.barGroupWidth]
    
     */
    @Input()
    get barGroupWidth(): number | undefined {
        return this._getOption('barGroupWidth');
    }
    set barGroupWidth(value: number | undefined) {
        this._setOption('barGroupWidth', value);
    }


    /**
     * [descr:dxChartOptions.commonAnnotationSettings]
    
     */
    @Input()
    get commonAnnotationSettings(): dxChartCommonAnnotationConfig {
        return this._getOption('commonAnnotationSettings');
    }
    set commonAnnotationSettings(value: dxChartCommonAnnotationConfig) {
        this._setOption('commonAnnotationSettings', value);
    }


    /**
     * [descr:dxChartOptions.commonAxisSettings]
    
     */
    @Input()
    get commonAxisSettings(): { aggregatedPointsPosition?: AggregatedPointsPosition, allowDecimals?: boolean | undefined, breakStyle?: { color?: string, line?: ScaleBreakLineStyle, width?: number }, color?: string, constantLineStyle?: { color?: string, dashStyle?: DashStyle, label?: { font?: Font, position?: RelativePosition, visible?: boolean }, paddingLeftRight?: number, paddingTopBottom?: number, width?: number }, discreteAxisDivisionMode?: DiscreteAxisDivisionMode, endOnTick?: boolean | undefined, grid?: { color?: string, opacity?: number | undefined, visible?: boolean, width?: number }, inverted?: boolean, label?: { alignment?: HorizontalAlignment | undefined, displayMode?: ChartLabelDisplayMode, font?: Font, indentFromAxis?: number, overlappingBehavior?: ChartsAxisLabelOverlap, position?: RelativePosition | Position, rotationAngle?: number, staggeringSpacing?: number, template?: any | undefined, textOverflow?: TextOverflow, visible?: boolean, wordWrap?: WordWrap }, maxValueMargin?: number | undefined, minorGrid?: { color?: string, opacity?: number | undefined, visible?: boolean, width?: number }, minorTick?: { color?: string, length?: number, opacity?: number, shift?: number, visible?: boolean, width?: number }, minValueMargin?: number | undefined, opacity?: number | undefined, placeholderSize?: number, stripStyle?: { label?: { font?: Font, horizontalAlignment?: HorizontalAlignment, verticalAlignment?: VerticalAlignment }, paddingLeftRight?: number, paddingTopBottom?: number }, tick?: { color?: string, length?: number, opacity?: number | undefined, shift?: number, visible?: boolean, width?: number }, title?: { alignment?: HorizontalAlignment, font?: Font, margin?: number, textOverflow?: TextOverflow, wordWrap?: WordWrap }, valueMarginsEnabled?: boolean, visible?: boolean, width?: number } {
        return this._getOption('commonAxisSettings');
    }
    set commonAxisSettings(value: { aggregatedPointsPosition?: AggregatedPointsPosition, allowDecimals?: boolean | undefined, breakStyle?: { color?: string, line?: ScaleBreakLineStyle, width?: number }, color?: string, constantLineStyle?: { color?: string, dashStyle?: DashStyle, label?: { font?: Font, position?: RelativePosition, visible?: boolean }, paddingLeftRight?: number, paddingTopBottom?: number, width?: number }, discreteAxisDivisionMode?: DiscreteAxisDivisionMode, endOnTick?: boolean | undefined, grid?: { color?: string, opacity?: number | undefined, visible?: boolean, width?: number }, inverted?: boolean, label?: { alignment?: HorizontalAlignment | undefined, displayMode?: ChartLabelDisplayMode, font?: Font, indentFromAxis?: number, overlappingBehavior?: ChartsAxisLabelOverlap, position?: RelativePosition | Position, rotationAngle?: number, staggeringSpacing?: number, template?: any | undefined, textOverflow?: TextOverflow, visible?: boolean, wordWrap?: WordWrap }, maxValueMargin?: number | undefined, minorGrid?: { color?: string, opacity?: number | undefined, visible?: boolean, width?: number }, minorTick?: { color?: string, length?: number, opacity?: number, shift?: number, visible?: boolean, width?: number }, minValueMargin?: number | undefined, opacity?: number | undefined, placeholderSize?: number, stripStyle?: { label?: { font?: Font, horizontalAlignment?: HorizontalAlignment, verticalAlignment?: VerticalAlignment }, paddingLeftRight?: number, paddingTopBottom?: number }, tick?: { color?: string, length?: number, opacity?: number | undefined, shift?: number, visible?: boolean, width?: number }, title?: { alignment?: HorizontalAlignment, font?: Font, margin?: number, textOverflow?: TextOverflow, wordWrap?: WordWrap }, valueMarginsEnabled?: boolean, visible?: boolean, width?: number }) {
        this._setOption('commonAxisSettings', value);
    }


    /**
     * [descr:dxChartOptions.commonPaneSettings]
    
     */
    @Input()
    get commonPaneSettings(): { backgroundColor?: ChartsColor | string, border?: { bottom?: boolean, color?: string, dashStyle?: DashStyle, left?: boolean, opacity?: number | undefined, right?: boolean, top?: boolean, visible?: boolean, width?: number } } {
        return this._getOption('commonPaneSettings');
    }
    set commonPaneSettings(value: { backgroundColor?: ChartsColor | string, border?: { bottom?: boolean, color?: string, dashStyle?: DashStyle, left?: boolean, opacity?: number | undefined, right?: boolean, top?: boolean, visible?: boolean, width?: number } }) {
        this._setOption('commonPaneSettings', value);
    }


    /**
     * [descr:dxChartOptions.commonSeriesSettings]
    
     */
    @Input()
    get commonSeriesSettings(): any {
        return this._getOption('commonSeriesSettings');
    }
    set commonSeriesSettings(value: any) {
        this._setOption('commonSeriesSettings', value);
    }


    /**
     * [descr:dxChartOptions.containerBackgroundColor]
    
     */
    @Input()
    get containerBackgroundColor(): string {
        return this._getOption('containerBackgroundColor');
    }
    set containerBackgroundColor(value: string) {
        this._setOption('containerBackgroundColor', value);
    }


    /**
     * [descr:dxChartOptions.crosshair]
    
     */
    @Input()
    get crosshair(): { color?: string, dashStyle?: DashStyle, enabled?: boolean, horizontalLine?: boolean | { color?: string, dashStyle?: DashStyle, label?: { backgroundColor?: string, customizeText?: Function, font?: Font, format?: Format | string | undefined, visible?: boolean }, opacity?: number | undefined, visible?: boolean, width?: number }, label?: { backgroundColor?: string, customizeText?: Function, font?: Font, format?: Format | string | undefined, visible?: boolean }, opacity?: number | undefined, verticalLine?: boolean | { color?: string, dashStyle?: DashStyle, label?: { backgroundColor?: string, customizeText?: Function, font?: Font, format?: Format | string | undefined, visible?: boolean }, opacity?: number | undefined, visible?: boolean, width?: number }, width?: number } {
        return this._getOption('crosshair');
    }
    set crosshair(value: { color?: string, dashStyle?: DashStyle, enabled?: boolean, horizontalLine?: boolean | { color?: string, dashStyle?: DashStyle, label?: { backgroundColor?: string, customizeText?: Function, font?: Font, format?: Format | string | undefined, visible?: boolean }, opacity?: number | undefined, visible?: boolean, width?: number }, label?: { backgroundColor?: string, customizeText?: Function, font?: Font, format?: Format | string | undefined, visible?: boolean }, opacity?: number | undefined, verticalLine?: boolean | { color?: string, dashStyle?: DashStyle, label?: { backgroundColor?: string, customizeText?: Function, font?: Font, format?: Format | string | undefined, visible?: boolean }, opacity?: number | undefined, visible?: boolean, width?: number }, width?: number }) {
        this._setOption('crosshair', value);
    }


    /**
     * [descr:dxChartOptions.customizeAnnotation]
    
     */
    @Input()
    get customizeAnnotation(): Function | undefined {
        return this._getOption('customizeAnnotation');
    }
    set customizeAnnotation(value: Function | undefined) {
        this._setOption('customizeAnnotation', value);
    }


    /**
     * [descr:BaseChartOptions.customizeLabel]
    
     */
    @Input()
    get customizeLabel(): Function {
        return this._getOption('customizeLabel');
    }
    set customizeLabel(value: Function) {
        this._setOption('customizeLabel', value);
    }


    /**
     * [descr:BaseChartOptions.customizePoint]
    
     */
    @Input()
    get customizePoint(): Function {
        return this._getOption('customizePoint');
    }
    set customizePoint(value: Function) {
        this._setOption('customizePoint', value);
    }


    /**
     * [descr:dxChartOptions.dataPrepareSettings]
    
     */
    @Input()
    get dataPrepareSettings(): { checkTypeForAllData?: boolean, convertToAxisDataType?: boolean, sortingMethod?: boolean | Function } {
        return this._getOption('dataPrepareSettings');
    }
    set dataPrepareSettings(value: { checkTypeForAllData?: boolean, convertToAxisDataType?: boolean, sortingMethod?: boolean | Function }) {
        this._setOption('dataPrepareSettings', value);
    }


    /**
     * [descr:BaseChartOptions.dataSource]
    
     */
    @Input()
    get dataSource(): Store | DataSource | DataSourceOptions | null | string | Array<any> {
        return this._getOption('dataSource');
    }
    set dataSource(value: Store | DataSource | DataSourceOptions | null | string | Array<any>) {
        this._setOption('dataSource', value);
    }


    /**
     * [descr:dxChartOptions.defaultPane]
    
     */
    @Input()
    get defaultPane(): string | undefined {
        return this._getOption('defaultPane');
    }
    set defaultPane(value: string | undefined) {
        this._setOption('defaultPane', value);
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
    get elementAttr(): any {
        return this._getOption('elementAttr');
    }
    set elementAttr(value: any) {
        this._setOption('elementAttr', value);
    }


    /**
     * [descr:BaseWidgetOptions.export]
    
     */
    @Input()
    get export(): { backgroundColor?: string, enabled?: boolean, fileName?: string, formats?: any | Array<ExportFormat>, margin?: number, printingEnabled?: boolean, svgToCanvas?: Function | undefined } {
        return this._getOption('export');
    }
    set export(value: { backgroundColor?: string, enabled?: boolean, fileName?: string, formats?: any | Array<ExportFormat>, margin?: number, printingEnabled?: boolean, svgToCanvas?: Function | undefined }) {
        this._setOption('export', value);
    }


    /**
     * [descr:dxChartOptions.legend]
    
     */
    @Input()
    get legend(): { backgroundColor?: string | undefined, border?: { color?: string, cornerRadius?: number, dashStyle?: DashStyle, opacity?: number | undefined, visible?: boolean, width?: number }, columnCount?: number, columnItemSpacing?: number, customizeHint?: Function, customizeItems?: Function, customizeText?: Function, font?: Font, horizontalAlignment?: HorizontalAlignment, hoverMode?: LegendHoverMode, itemsAlignment?: HorizontalAlignment | undefined, itemTextPosition?: Position | undefined, margin?: number | { bottom?: number, left?: number, right?: number, top?: number }, markerSize?: number, markerTemplate?: any | undefined, orientation?: Orientation | undefined, paddingLeftRight?: number, paddingTopBottom?: number, position?: RelativePosition, rowCount?: number, rowItemSpacing?: number, title?: string | { font?: Font, horizontalAlignment?: HorizontalAlignment | undefined, margin?: { bottom?: number, left?: number, right?: number, top?: number }, placeholderSize?: number | undefined, subtitle?: string | { font?: Font, offset?: number, text?: string }, text?: string, verticalAlignment?: VerticalEdge }, verticalAlignment?: VerticalEdge, visible?: boolean } {
        return this._getOption('legend');
    }
    set legend(value: { backgroundColor?: string | undefined, border?: { color?: string, cornerRadius?: number, dashStyle?: DashStyle, opacity?: number | undefined, visible?: boolean, width?: number }, columnCount?: number, columnItemSpacing?: number, customizeHint?: Function, customizeItems?: Function, customizeText?: Function, font?: Font, horizontalAlignment?: HorizontalAlignment, hoverMode?: LegendHoverMode, itemsAlignment?: HorizontalAlignment | undefined, itemTextPosition?: Position | undefined, margin?: number | { bottom?: number, left?: number, right?: number, top?: number }, markerSize?: number, markerTemplate?: any | undefined, orientation?: Orientation | undefined, paddingLeftRight?: number, paddingTopBottom?: number, position?: RelativePosition, rowCount?: number, rowItemSpacing?: number, title?: string | { font?: Font, horizontalAlignment?: HorizontalAlignment | undefined, margin?: { bottom?: number, left?: number, right?: number, top?: number }, placeholderSize?: number | undefined, subtitle?: string | { font?: Font, offset?: number, text?: string }, text?: string, verticalAlignment?: VerticalEdge }, verticalAlignment?: VerticalEdge, visible?: boolean }) {
        this._setOption('legend', value);
    }


    /**
     * [descr:BaseWidgetOptions.loadingIndicator]
    
     */
    @Input()
    get loadingIndicator(): { backgroundColor?: string, enabled?: boolean, font?: Font, show?: boolean, text?: string } {
        return this._getOption('loadingIndicator');
    }
    set loadingIndicator(value: { backgroundColor?: string, enabled?: boolean, font?: Font, show?: boolean, text?: string }) {
        this._setOption('loadingIndicator', value);
    }


    /**
     * [descr:BaseWidgetOptions.margin]
    
     */
    @Input()
    get margin(): { bottom?: number, left?: number, right?: number, top?: number } {
        return this._getOption('margin');
    }
    set margin(value: { bottom?: number, left?: number, right?: number, top?: number }) {
        this._setOption('margin', value);
    }


    /**
     * [descr:dxChartOptions.maxBubbleSize]
    
     */
    @Input()
    get maxBubbleSize(): number {
        return this._getOption('maxBubbleSize');
    }
    set maxBubbleSize(value: number) {
        this._setOption('maxBubbleSize', value);
    }


    /**
     * [descr:dxChartOptions.minBubbleSize]
    
     */
    @Input()
    get minBubbleSize(): number {
        return this._getOption('minBubbleSize');
    }
    set minBubbleSize(value: number) {
        this._setOption('minBubbleSize', value);
    }


    /**
     * [descr:dxChartOptions.negativesAsZeroes]
    
     */
    @Input()
    get negativesAsZeroes(): boolean {
        return this._getOption('negativesAsZeroes');
    }
    set negativesAsZeroes(value: boolean) {
        this._setOption('negativesAsZeroes', value);
    }


    /**
     * [descr:BaseChartOptions.palette]
    
     */
    @Input()
    get palette(): Palette | string | Array<string> {
        return this._getOption('palette');
    }
    set palette(value: Palette | string | Array<string>) {
        this._setOption('palette', value);
    }


    /**
     * [descr:BaseChartOptions.paletteExtensionMode]
    
     */
    @Input()
    get paletteExtensionMode(): PaletteExtensionMode {
        return this._getOption('paletteExtensionMode');
    }
    set paletteExtensionMode(value: PaletteExtensionMode) {
        this._setOption('paletteExtensionMode', value);
    }


    /**
     * [descr:dxChartOptions.panes]
    
     */
    @Input()
    get panes(): Array<any | { backgroundColor?: ChartsColor | string, border?: { bottom?: boolean, color?: string, dashStyle?: DashStyle, left?: boolean, opacity?: number | undefined, right?: boolean, top?: boolean, visible?: boolean, width?: number }, height?: number | string | undefined, name?: string | undefined }> {
        return this._getOption('panes');
    }
    set panes(value: Array<any | { backgroundColor?: ChartsColor | string, border?: { bottom?: boolean, color?: string, dashStyle?: DashStyle, left?: boolean, opacity?: number | undefined, right?: boolean, top?: boolean, visible?: boolean, width?: number }, height?: number | string | undefined, name?: string | undefined }>) {
        this._setOption('panes', value);
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
     * [descr:BaseChartOptions.pointSelectionMode]
    
     */
    @Input()
    get pointSelectionMode(): SingleOrMultiple {
        return this._getOption('pointSelectionMode');
    }
    set pointSelectionMode(value: SingleOrMultiple) {
        this._setOption('pointSelectionMode', value);
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
     * [descr:dxChartOptions.resizePanesOnZoom]
    
     */
    @Input()
    get resizePanesOnZoom(): boolean {
        return this._getOption('resizePanesOnZoom');
    }
    set resizePanesOnZoom(value: boolean) {
        this._setOption('resizePanesOnZoom', value);
    }


    /**
     * [descr:dxChartOptions.resolveLabelOverlapping]
    
     */
    @Input()
    get resolveLabelOverlapping(): ChartsLabelOverlap {
        return this._getOption('resolveLabelOverlapping');
    }
    set resolveLabelOverlapping(value: ChartsLabelOverlap) {
        this._setOption('resolveLabelOverlapping', value);
    }


    /**
     * [descr:dxChartOptions.rotated]
    
     */
    @Input()
    get rotated(): boolean {
        return this._getOption('rotated');
    }
    set rotated(value: boolean) {
        this._setOption('rotated', value);
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
     * [descr:dxChartOptions.scrollBar]
    
     */
    @Input()
    get scrollBar(): { color?: string, offset?: number, opacity?: number | undefined, position?: Position, visible?: boolean, width?: number } {
        return this._getOption('scrollBar');
    }
    set scrollBar(value: { color?: string, offset?: number, opacity?: number | undefined, position?: Position, visible?: boolean, width?: number }) {
        this._setOption('scrollBar', value);
    }


    /**
     * [descr:dxChartOptions.series]
    
     */
    @Input()
    get series(): ChartSeries | any | undefined | Array<ChartSeries | any> {
        return this._getOption('series');
    }
    set series(value: ChartSeries | any | undefined | Array<ChartSeries | any>) {
        this._setOption('series', value);
    }


    /**
     * [descr:dxChartOptions.seriesSelectionMode]
    
     */
    @Input()
    get seriesSelectionMode(): SingleOrMultiple {
        return this._getOption('seriesSelectionMode');
    }
    set seriesSelectionMode(value: SingleOrMultiple) {
        this._setOption('seriesSelectionMode', value);
    }


    /**
     * [descr:dxChartOptions.seriesTemplate]
    
     */
    @Input()
    get seriesTemplate(): { customizeSeries?: Function, nameField?: string } {
        return this._getOption('seriesTemplate');
    }
    set seriesTemplate(value: { customizeSeries?: Function, nameField?: string }) {
        this._setOption('seriesTemplate', value);
    }


    /**
     * [descr:BaseWidgetOptions.size]
    
     */
    @Input()
    get size(): { height?: number | undefined, width?: number | undefined } {
        return this._getOption('size');
    }
    set size(value: { height?: number | undefined, width?: number | undefined }) {
        this._setOption('size', value);
    }


    /**
     * [descr:dxChartOptions.stickyHovering]
    
     */
    @Input()
    get stickyHovering(): boolean {
        return this._getOption('stickyHovering');
    }
    set stickyHovering(value: boolean) {
        this._setOption('stickyHovering', value);
    }


    /**
     * [descr:dxChartOptions.synchronizeMultiAxes]
    
     */
    @Input()
    get synchronizeMultiAxes(): boolean {
        return this._getOption('synchronizeMultiAxes');
    }
    set synchronizeMultiAxes(value: boolean) {
        this._setOption('synchronizeMultiAxes', value);
    }


    /**
     * [descr:BaseWidgetOptions.theme]
    
     */
    @Input()
    get theme(): Theme {
        return this._getOption('theme');
    }
    set theme(value: Theme) {
        this._setOption('theme', value);
    }


    /**
     * [descr:BaseWidgetOptions.title]
    
     */
    @Input()
    get title(): string | { font?: Font, horizontalAlignment?: HorizontalAlignment, margin?: number | { bottom?: number, left?: number, right?: number, top?: number }, placeholderSize?: number | undefined, subtitle?: string | { font?: Font, offset?: number, text?: string, textOverflow?: TextOverflow, wordWrap?: WordWrap }, text?: string, textOverflow?: TextOverflow, verticalAlignment?: VerticalEdge, wordWrap?: WordWrap } {
        return this._getOption('title');
    }
    set title(value: string | { font?: Font, horizontalAlignment?: HorizontalAlignment, margin?: number | { bottom?: number, left?: number, right?: number, top?: number }, placeholderSize?: number | undefined, subtitle?: string | { font?: Font, offset?: number, text?: string, textOverflow?: TextOverflow, wordWrap?: WordWrap }, text?: string, textOverflow?: TextOverflow, verticalAlignment?: VerticalEdge, wordWrap?: WordWrap }) {
        this._setOption('title', value);
    }


    /**
     * [descr:dxChartOptions.tooltip]
    
     */
    @Input()
    get tooltip(): { argumentFormat?: Format | string | undefined, arrowLength?: number, border?: { color?: string, dashStyle?: DashStyle, opacity?: number | undefined, visible?: boolean, width?: number }, color?: string, container?: UserDefinedElement | string | undefined, contentTemplate?: any | undefined, cornerRadius?: number, customizeTooltip?: Function | undefined, enabled?: boolean, font?: Font, format?: Format | string | undefined, interactive?: boolean, location?: ChartTooltipLocation, opacity?: number | undefined, paddingLeftRight?: number, paddingTopBottom?: number, shadow?: { blur?: number, color?: string, offsetX?: number, offsetY?: number, opacity?: number }, shared?: boolean, zIndex?: number | undefined } {
        return this._getOption('tooltip');
    }
    set tooltip(value: { argumentFormat?: Format | string | undefined, arrowLength?: number, border?: { color?: string, dashStyle?: DashStyle, opacity?: number | undefined, visible?: boolean, width?: number }, color?: string, container?: UserDefinedElement | string | undefined, contentTemplate?: any | undefined, cornerRadius?: number, customizeTooltip?: Function | undefined, enabled?: boolean, font?: Font, format?: Format | string | undefined, interactive?: boolean, location?: ChartTooltipLocation, opacity?: number | undefined, paddingLeftRight?: number, paddingTopBottom?: number, shadow?: { blur?: number, color?: string, offsetX?: number, offsetY?: number, opacity?: number }, shared?: boolean, zIndex?: number | undefined }) {
        this._setOption('tooltip', value);
    }


    /**
     * [descr:dxChartOptions.valueAxis]
    
     */
    @Input()
    get valueAxis(): Array<any | { aggregatedPointsPosition?: AggregatedPointsPosition, allowDecimals?: boolean | undefined, autoBreaksEnabled?: boolean, axisDivisionFactor?: number, breaks?: Array<ScaleBreak>, breakStyle?: { color?: string, line?: ScaleBreakLineStyle, width?: number }, categories?: Array<number | string | Date>, color?: string, constantLines?: Array<any | { color?: string, dashStyle?: DashStyle, displayBehindSeries?: boolean, extendAxis?: boolean, label?: { font?: Font, horizontalAlignment?: HorizontalAlignment, position?: RelativePosition, text?: string | undefined, verticalAlignment?: VerticalAlignment, visible?: boolean }, paddingLeftRight?: number, paddingTopBottom?: number, value?: Date | number | string | undefined, width?: number }>, constantLineStyle?: { color?: string, dashStyle?: DashStyle, label?: { font?: Font, horizontalAlignment?: HorizontalAlignment, position?: RelativePosition, verticalAlignment?: VerticalAlignment, visible?: boolean }, paddingLeftRight?: number, paddingTopBottom?: number, width?: number }, customPosition?: Date | number | string | undefined, discreteAxisDivisionMode?: DiscreteAxisDivisionMode, endOnTick?: boolean | undefined, grid?: { color?: string, opacity?: number | undefined, visible?: boolean, width?: number }, inverted?: boolean, label?: { alignment?: HorizontalAlignment | undefined, customizeHint?: Function, customizeText?: Function, displayMode?: ChartLabelDisplayMode, font?: Font, format?: Format | string | undefined, indentFromAxis?: number, overlappingBehavior?: ChartsAxisLabelOverlap, position?: RelativePosition | Position, rotationAngle?: number, staggeringSpacing?: number, template?: any | undefined, textOverflow?: TextOverflow, visible?: boolean, wordWrap?: WordWrap }, linearThreshold?: number | undefined, logarithmBase?: number, maxAutoBreakCount?: number, maxValueMargin?: number | undefined, minorGrid?: { color?: string, opacity?: number | undefined, visible?: boolean, width?: number }, minorTick?: { color?: string, length?: number, opacity?: number, shift?: number, visible?: boolean, width?: number }, minorTickCount?: number | undefined, minorTickInterval?: TimeInterval | number | { days?: number, hours?: number, milliseconds?: number, minutes?: number, months?: number, quarters?: number, seconds?: number, weeks?: number, years?: number }, minValueMargin?: number | undefined, minVisualRangeLength?: TimeInterval | number | undefined | { days?: number, hours?: number, milliseconds?: number, minutes?: number, months?: number, quarters?: number, seconds?: number, weeks?: number, years?: number }, multipleAxesSpacing?: number, name?: string | undefined, offset?: number | undefined, opacity?: number | undefined, pane?: string | undefined, placeholderSize?: number, position?: Position, showZero?: boolean | undefined, strips?: Array<any | { color?: string | undefined, endValue?: Date | number | string | undefined, label?: { font?: Font, horizontalAlignment?: HorizontalAlignment, text?: string | undefined, verticalAlignment?: VerticalAlignment }, paddingLeftRight?: number, paddingTopBottom?: number, startValue?: Date | number | string | undefined }>, stripStyle?: { label?: { font?: Font, horizontalAlignment?: HorizontalAlignment, verticalAlignment?: VerticalAlignment }, paddingLeftRight?: number, paddingTopBottom?: number }, synchronizedValue?: number | undefined, tick?: { color?: string, length?: number, opacity?: number | undefined, shift?: number, visible?: boolean, width?: number }, tickInterval?: TimeInterval | number | { days?: number, hours?: number, milliseconds?: number, minutes?: number, months?: number, quarters?: number, seconds?: number, weeks?: number, years?: number }, title?: string | { alignment?: HorizontalAlignment, font?: Font, margin?: number, text?: string | undefined, textOverflow?: TextOverflow, wordWrap?: WordWrap }, type?: AxisScaleType | undefined, valueMarginsEnabled?: boolean, valueType?: ChartsDataType | undefined, visible?: boolean, visualRange?: VisualRange | Array<number | string | Date>, visualRangeUpdateMode?: VisualRangeUpdateMode, wholeRange?: VisualRange | undefined | Array<number | string | Date>, width?: number }> {
        return this._getOption('valueAxis');
    }
    set valueAxis(value: Array<any | { aggregatedPointsPosition?: AggregatedPointsPosition, allowDecimals?: boolean | undefined, autoBreaksEnabled?: boolean, axisDivisionFactor?: number, breaks?: Array<ScaleBreak>, breakStyle?: { color?: string, line?: ScaleBreakLineStyle, width?: number }, categories?: Array<number | string | Date>, color?: string, constantLines?: Array<any | { color?: string, dashStyle?: DashStyle, displayBehindSeries?: boolean, extendAxis?: boolean, label?: { font?: Font, horizontalAlignment?: HorizontalAlignment, position?: RelativePosition, text?: string | undefined, verticalAlignment?: VerticalAlignment, visible?: boolean }, paddingLeftRight?: number, paddingTopBottom?: number, value?: Date | number | string | undefined, width?: number }>, constantLineStyle?: { color?: string, dashStyle?: DashStyle, label?: { font?: Font, horizontalAlignment?: HorizontalAlignment, position?: RelativePosition, verticalAlignment?: VerticalAlignment, visible?: boolean }, paddingLeftRight?: number, paddingTopBottom?: number, width?: number }, customPosition?: Date | number | string | undefined, discreteAxisDivisionMode?: DiscreteAxisDivisionMode, endOnTick?: boolean | undefined, grid?: { color?: string, opacity?: number | undefined, visible?: boolean, width?: number }, inverted?: boolean, label?: { alignment?: HorizontalAlignment | undefined, customizeHint?: Function, customizeText?: Function, displayMode?: ChartLabelDisplayMode, font?: Font, format?: Format | string | undefined, indentFromAxis?: number, overlappingBehavior?: ChartsAxisLabelOverlap, position?: RelativePosition | Position, rotationAngle?: number, staggeringSpacing?: number, template?: any | undefined, textOverflow?: TextOverflow, visible?: boolean, wordWrap?: WordWrap }, linearThreshold?: number | undefined, logarithmBase?: number, maxAutoBreakCount?: number, maxValueMargin?: number | undefined, minorGrid?: { color?: string, opacity?: number | undefined, visible?: boolean, width?: number }, minorTick?: { color?: string, length?: number, opacity?: number, shift?: number, visible?: boolean, width?: number }, minorTickCount?: number | undefined, minorTickInterval?: TimeInterval | number | { days?: number, hours?: number, milliseconds?: number, minutes?: number, months?: number, quarters?: number, seconds?: number, weeks?: number, years?: number }, minValueMargin?: number | undefined, minVisualRangeLength?: TimeInterval | number | undefined | { days?: number, hours?: number, milliseconds?: number, minutes?: number, months?: number, quarters?: number, seconds?: number, weeks?: number, years?: number }, multipleAxesSpacing?: number, name?: string | undefined, offset?: number | undefined, opacity?: number | undefined, pane?: string | undefined, placeholderSize?: number, position?: Position, showZero?: boolean | undefined, strips?: Array<any | { color?: string | undefined, endValue?: Date | number | string | undefined, label?: { font?: Font, horizontalAlignment?: HorizontalAlignment, text?: string | undefined, verticalAlignment?: VerticalAlignment }, paddingLeftRight?: number, paddingTopBottom?: number, startValue?: Date | number | string | undefined }>, stripStyle?: { label?: { font?: Font, horizontalAlignment?: HorizontalAlignment, verticalAlignment?: VerticalAlignment }, paddingLeftRight?: number, paddingTopBottom?: number }, synchronizedValue?: number | undefined, tick?: { color?: string, length?: number, opacity?: number | undefined, shift?: number, visible?: boolean, width?: number }, tickInterval?: TimeInterval | number | { days?: number, hours?: number, milliseconds?: number, minutes?: number, months?: number, quarters?: number, seconds?: number, weeks?: number, years?: number }, title?: string | { alignment?: HorizontalAlignment, font?: Font, margin?: number, text?: string | undefined, textOverflow?: TextOverflow, wordWrap?: WordWrap }, type?: AxisScaleType | undefined, valueMarginsEnabled?: boolean, valueType?: ChartsDataType | undefined, visible?: boolean, visualRange?: VisualRange | Array<number | string | Date>, visualRangeUpdateMode?: VisualRangeUpdateMode, wholeRange?: VisualRange | undefined | Array<number | string | Date>, width?: number }>) {
        this._setOption('valueAxis', value);
    }


    /**
     * [descr:dxChartOptions.zoomAndPan]
    
     */
    @Input()
    get zoomAndPan(): { allowMouseWheel?: boolean, allowTouchGestures?: boolean, argumentAxis?: ChartZoomAndPanMode, dragBoxStyle?: { color?: string | undefined, opacity?: number | undefined }, dragToZoom?: boolean, panKey?: EventKeyModifier, valueAxis?: ChartZoomAndPanMode } {
        return this._getOption('zoomAndPan');
    }
    set zoomAndPan(value: { allowMouseWheel?: boolean, allowTouchGestures?: boolean, argumentAxis?: ChartZoomAndPanMode, dragBoxStyle?: { color?: string | undefined, opacity?: number | undefined }, dragToZoom?: boolean, panKey?: EventKeyModifier, valueAxis?: ChartZoomAndPanMode }) {
        this._setOption('zoomAndPan', value);
    }

    /**
    
     * [descr:dxChartOptions.onArgumentAxisClick]
    
    
     */
    @Output() onArgumentAxisClick: EventEmitter<ArgumentAxisClickEvent>;

    /**
    
     * [descr:dxChartOptions.onDisposing]
    
    
     */
    @Output() onDisposing: EventEmitter<DisposingEvent>;

    /**
    
     * [descr:dxChartOptions.onDone]
    
    
     */
    @Output() onDone: EventEmitter<DoneEvent>;

    /**
    
     * [descr:dxChartOptions.onDrawn]
    
    
     */
    @Output() onDrawn: EventEmitter<DrawnEvent>;

    /**
    
     * [descr:dxChartOptions.onExported]
    
    
     */
    @Output() onExported: EventEmitter<ExportedEvent>;

    /**
    
     * [descr:dxChartOptions.onExporting]
    
    
     */
    @Output() onExporting: EventEmitter<ExportingEvent>;

    /**
    
     * [descr:dxChartOptions.onFileSaving]
    
    
     */
    @Output() onFileSaving: EventEmitter<FileSavingEvent>;

    /**
    
     * [descr:dxChartOptions.onIncidentOccurred]
    
    
     */
    @Output() onIncidentOccurred: EventEmitter<IncidentOccurredEvent>;

    /**
    
     * [descr:dxChartOptions.onInitialized]
    
    
     */
    @Output() onInitialized: EventEmitter<InitializedEvent>;

    /**
    
     * [descr:dxChartOptions.onLegendClick]
    
    
     */
    @Output() onLegendClick: EventEmitter<LegendClickEvent>;

    /**
    
     * [descr:dxChartOptions.onOptionChanged]
    
    
     */
    @Output() onOptionChanged: EventEmitter<OptionChangedEvent>;

    /**
    
     * [descr:dxChartOptions.onPointClick]
    
    
     */
    @Output() onPointClick: EventEmitter<PointClickEvent>;

    /**
    
     * [descr:dxChartOptions.onPointHoverChanged]
    
    
     */
    @Output() onPointHoverChanged: EventEmitter<PointHoverChangedEvent>;

    /**
    
     * [descr:dxChartOptions.onPointSelectionChanged]
    
    
     */
    @Output() onPointSelectionChanged: EventEmitter<PointSelectionChangedEvent>;

    /**
    
     * [descr:dxChartOptions.onSeriesClick]
    
    
     */
    @Output() onSeriesClick: EventEmitter<SeriesClickEvent>;

    /**
    
     * [descr:dxChartOptions.onSeriesHoverChanged]
    
    
     */
    @Output() onSeriesHoverChanged: EventEmitter<SeriesHoverChangedEvent>;

    /**
    
     * [descr:dxChartOptions.onSeriesSelectionChanged]
    
    
     */
    @Output() onSeriesSelectionChanged: EventEmitter<SeriesSelectionChangedEvent>;

    /**
    
     * [descr:dxChartOptions.onTooltipHidden]
    
    
     */
    @Output() onTooltipHidden: EventEmitter<TooltipHiddenEvent>;

    /**
    
     * [descr:dxChartOptions.onTooltipShown]
    
    
     */
    @Output() onTooltipShown: EventEmitter<TooltipShownEvent>;

    /**
    
     * [descr:dxChartOptions.onZoomEnd]
    
    
     */
    @Output() onZoomEnd: EventEmitter<ZoomEndEvent>;

    /**
    
     * [descr:dxChartOptions.onZoomStart]
    
    
     */
    @Output() onZoomStart: EventEmitter<ZoomStartEvent>;

    /**
    
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
    
     */
    @Output() adaptiveLayoutChange: EventEmitter<{ height?: number, keepLabels?: boolean, width?: number }>;

    /**
    
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
    
     */
    @Output() adjustOnZoomChange: EventEmitter<boolean>;

    /**
    
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
    
     */
    @Output() animationChange: EventEmitter<boolean | { duration?: number, easing?: AnimationEaseMode, enabled?: boolean, maxPointCountSupported?: number }>;

    /**
    
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
    
     */
    @Output() annotationsChange: EventEmitter<Array<dxChartAnnotationConfig | any>>;

    /**
    
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
    
     */
    @Output() argumentAxisChange: EventEmitter<{ aggregateByCategory?: boolean, aggregatedPointsPosition?: AggregatedPointsPosition, aggregationGroupWidth?: number | undefined, aggregationInterval?: TimeInterval | number | { days?: number, hours?: number, milliseconds?: number, minutes?: number, months?: number, quarters?: number, seconds?: number, weeks?: number, years?: number }, allowDecimals?: boolean | undefined, argumentType?: ChartsDataType | undefined, axisDivisionFactor?: number, breaks?: Array<ScaleBreak>, breakStyle?: { color?: string, line?: ScaleBreakLineStyle, width?: number }, categories?: Array<number | string | Date>, color?: string, constantLines?: Array<any | { color?: string, dashStyle?: DashStyle, displayBehindSeries?: boolean, extendAxis?: boolean, label?: { font?: Font, horizontalAlignment?: HorizontalAlignment, position?: RelativePosition, text?: string | undefined, verticalAlignment?: VerticalAlignment, visible?: boolean }, paddingLeftRight?: number, paddingTopBottom?: number, value?: Date | number | string | undefined, width?: number }>, constantLineStyle?: { color?: string, dashStyle?: DashStyle, label?: { font?: Font, horizontalAlignment?: HorizontalAlignment, position?: RelativePosition, verticalAlignment?: VerticalAlignment, visible?: boolean }, paddingLeftRight?: number, paddingTopBottom?: number, width?: number }, customPosition?: Date | number | string | undefined, customPositionAxis?: string | undefined, discreteAxisDivisionMode?: DiscreteAxisDivisionMode, endOnTick?: boolean, grid?: { color?: string, opacity?: number | undefined, visible?: boolean, width?: number }, holidays?: Array<Date | string | number>, hoverMode?: ArgumentAxisHoverMode, inverted?: boolean, label?: { alignment?: HorizontalAlignment | undefined, customizeHint?: Function, customizeText?: Function, displayMode?: ChartLabelDisplayMode, font?: Font, format?: Format | string | undefined, indentFromAxis?: number, overlappingBehavior?: ChartsAxisLabelOverlap, position?: RelativePosition | Position, rotationAngle?: number, staggeringSpacing?: number, template?: any | undefined, textOverflow?: TextOverflow, visible?: boolean, wordWrap?: WordWrap }, linearThreshold?: number | undefined, logarithmBase?: number, maxValueMargin?: number | undefined, minorGrid?: { color?: string, opacity?: number | undefined, visible?: boolean, width?: number }, minorTick?: { color?: string, length?: number, opacity?: number, shift?: number, visible?: boolean, width?: number }, minorTickCount?: number | undefined, minorTickInterval?: TimeInterval | number | { days?: number, hours?: number, milliseconds?: number, minutes?: number, months?: number, quarters?: number, seconds?: number, weeks?: number, years?: number }, minValueMargin?: number | undefined, minVisualRangeLength?: TimeInterval | number | undefined | { days?: number, hours?: number, milliseconds?: number, minutes?: number, months?: number, quarters?: number, seconds?: number, weeks?: number, years?: number }, offset?: number | undefined, opacity?: number | undefined, placeholderSize?: number, position?: Position, singleWorkdays?: Array<Date | string | number>, strips?: Array<any | { color?: string | undefined, endValue?: Date | number | string | undefined, label?: { font?: Font, horizontalAlignment?: HorizontalAlignment, text?: string | undefined, verticalAlignment?: VerticalAlignment }, paddingLeftRight?: number, paddingTopBottom?: number, startValue?: Date | number | string | undefined }>, stripStyle?: { label?: { font?: Font, horizontalAlignment?: HorizontalAlignment, verticalAlignment?: VerticalAlignment }, paddingLeftRight?: number, paddingTopBottom?: number }, tick?: { color?: string, length?: number, opacity?: number | undefined, shift?: number, visible?: boolean, width?: number }, tickInterval?: TimeInterval | number | { days?: number, hours?: number, milliseconds?: number, minutes?: number, months?: number, quarters?: number, seconds?: number, weeks?: number, years?: number }, title?: string | { alignment?: HorizontalAlignment, font?: Font, margin?: number, text?: string | undefined, textOverflow?: TextOverflow, wordWrap?: WordWrap }, type?: AxisScaleType | undefined, valueMarginsEnabled?: boolean, visible?: boolean, visualRange?: VisualRange | Array<number | string | Date>, visualRangeUpdateMode?: VisualRangeUpdateMode, wholeRange?: VisualRange | undefined | Array<number | string | Date>, width?: number, workdaysOnly?: boolean, workWeek?: Array<number> }>;

    /**
    
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
    
     */
    @Output() autoHidePointMarkersChange: EventEmitter<boolean>;

    /**
    
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
    
     */
    @Output() barGroupPaddingChange: EventEmitter<number>;

    /**
    
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
    
     */
    @Output() barGroupWidthChange: EventEmitter<number | undefined>;

    /**
    
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
    
     */
    @Output() commonAnnotationSettingsChange: EventEmitter<dxChartCommonAnnotationConfig>;

    /**
    
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
    
     */
    @Output() commonAxisSettingsChange: EventEmitter<{ aggregatedPointsPosition?: AggregatedPointsPosition, allowDecimals?: boolean | undefined, breakStyle?: { color?: string, line?: ScaleBreakLineStyle, width?: number }, color?: string, constantLineStyle?: { color?: string, dashStyle?: DashStyle, label?: { font?: Font, position?: RelativePosition, visible?: boolean }, paddingLeftRight?: number, paddingTopBottom?: number, width?: number }, discreteAxisDivisionMode?: DiscreteAxisDivisionMode, endOnTick?: boolean | undefined, grid?: { color?: string, opacity?: number | undefined, visible?: boolean, width?: number }, inverted?: boolean, label?: { alignment?: HorizontalAlignment | undefined, displayMode?: ChartLabelDisplayMode, font?: Font, indentFromAxis?: number, overlappingBehavior?: ChartsAxisLabelOverlap, position?: RelativePosition | Position, rotationAngle?: number, staggeringSpacing?: number, template?: any | undefined, textOverflow?: TextOverflow, visible?: boolean, wordWrap?: WordWrap }, maxValueMargin?: number | undefined, minorGrid?: { color?: string, opacity?: number | undefined, visible?: boolean, width?: number }, minorTick?: { color?: string, length?: number, opacity?: number, shift?: number, visible?: boolean, width?: number }, minValueMargin?: number | undefined, opacity?: number | undefined, placeholderSize?: number, stripStyle?: { label?: { font?: Font, horizontalAlignment?: HorizontalAlignment, verticalAlignment?: VerticalAlignment }, paddingLeftRight?: number, paddingTopBottom?: number }, tick?: { color?: string, length?: number, opacity?: number | undefined, shift?: number, visible?: boolean, width?: number }, title?: { alignment?: HorizontalAlignment, font?: Font, margin?: number, textOverflow?: TextOverflow, wordWrap?: WordWrap }, valueMarginsEnabled?: boolean, visible?: boolean, width?: number }>;

    /**
    
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
    
     */
    @Output() commonPaneSettingsChange: EventEmitter<{ backgroundColor?: ChartsColor | string, border?: { bottom?: boolean, color?: string, dashStyle?: DashStyle, left?: boolean, opacity?: number | undefined, right?: boolean, top?: boolean, visible?: boolean, width?: number } }>;

    /**
    
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
    
     */
    @Output() commonSeriesSettingsChange: EventEmitter<any>;

    /**
    
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
    
     */
    @Output() containerBackgroundColorChange: EventEmitter<string>;

    /**
    
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
    
     */
    @Output() crosshairChange: EventEmitter<{ color?: string, dashStyle?: DashStyle, enabled?: boolean, horizontalLine?: boolean | { color?: string, dashStyle?: DashStyle, label?: { backgroundColor?: string, customizeText?: Function, font?: Font, format?: Format | string | undefined, visible?: boolean }, opacity?: number | undefined, visible?: boolean, width?: number }, label?: { backgroundColor?: string, customizeText?: Function, font?: Font, format?: Format | string | undefined, visible?: boolean }, opacity?: number | undefined, verticalLine?: boolean | { color?: string, dashStyle?: DashStyle, label?: { backgroundColor?: string, customizeText?: Function, font?: Font, format?: Format | string | undefined, visible?: boolean }, opacity?: number | undefined, visible?: boolean, width?: number }, width?: number }>;

    /**
    
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
    
     */
    @Output() customizeAnnotationChange: EventEmitter<Function | undefined>;

    /**
    
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
    
     */
    @Output() customizeLabelChange: EventEmitter<Function>;

    /**
    
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
    
     */
    @Output() customizePointChange: EventEmitter<Function>;

    /**
    
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
    
     */
    @Output() dataPrepareSettingsChange: EventEmitter<{ checkTypeForAllData?: boolean, convertToAxisDataType?: boolean, sortingMethod?: boolean | Function }>;

    /**
    
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
    
     */
    @Output() dataSourceChange: EventEmitter<Store | DataSource | DataSourceOptions | null | string | Array<any>>;

    /**
    
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
    
     */
    @Output() defaultPaneChange: EventEmitter<string | undefined>;

    /**
    
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
    
     */
    @Output() disabledChange: EventEmitter<boolean>;

    /**
    
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
    
     */
    @Output() elementAttrChange: EventEmitter<any>;

    /**
    
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
    
     */
    @Output() exportChange: EventEmitter<{ backgroundColor?: string, enabled?: boolean, fileName?: string, formats?: any | Array<ExportFormat>, margin?: number, printingEnabled?: boolean, svgToCanvas?: Function | undefined }>;

    /**
    
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
    
     */
    @Output() legendChange: EventEmitter<{ backgroundColor?: string | undefined, border?: { color?: string, cornerRadius?: number, dashStyle?: DashStyle, opacity?: number | undefined, visible?: boolean, width?: number }, columnCount?: number, columnItemSpacing?: number, customizeHint?: Function, customizeItems?: Function, customizeText?: Function, font?: Font, horizontalAlignment?: HorizontalAlignment, hoverMode?: LegendHoverMode, itemsAlignment?: HorizontalAlignment | undefined, itemTextPosition?: Position | undefined, margin?: number | { bottom?: number, left?: number, right?: number, top?: number }, markerSize?: number, markerTemplate?: any | undefined, orientation?: Orientation | undefined, paddingLeftRight?: number, paddingTopBottom?: number, position?: RelativePosition, rowCount?: number, rowItemSpacing?: number, title?: string | { font?: Font, horizontalAlignment?: HorizontalAlignment | undefined, margin?: { bottom?: number, left?: number, right?: number, top?: number }, placeholderSize?: number | undefined, subtitle?: string | { font?: Font, offset?: number, text?: string }, text?: string, verticalAlignment?: VerticalEdge }, verticalAlignment?: VerticalEdge, visible?: boolean }>;

    /**
    
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
    
     */
    @Output() loadingIndicatorChange: EventEmitter<{ backgroundColor?: string, enabled?: boolean, font?: Font, show?: boolean, text?: string }>;

    /**
    
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
    
     */
    @Output() marginChange: EventEmitter<{ bottom?: number, left?: number, right?: number, top?: number }>;

    /**
    
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
    
     */
    @Output() maxBubbleSizeChange: EventEmitter<number>;

    /**
    
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
    
     */
    @Output() minBubbleSizeChange: EventEmitter<number>;

    /**
    
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
    
     */
    @Output() negativesAsZeroesChange: EventEmitter<boolean>;

    /**
    
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
    
     */
    @Output() paletteChange: EventEmitter<Palette | string | Array<string>>;

    /**
    
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
    
     */
    @Output() paletteExtensionModeChange: EventEmitter<PaletteExtensionMode>;

    /**
    
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
    
     */
    @Output() panesChange: EventEmitter<Array<any | { backgroundColor?: ChartsColor | string, border?: { bottom?: boolean, color?: string, dashStyle?: DashStyle, left?: boolean, opacity?: number | undefined, right?: boolean, top?: boolean, visible?: boolean, width?: number }, height?: number | string | undefined, name?: string | undefined }>>;

    /**
    
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
    
     */
    @Output() pathModifiedChange: EventEmitter<boolean>;

    /**
    
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
    
     */
    @Output() pointSelectionModeChange: EventEmitter<SingleOrMultiple>;

    /**
    
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
    
     */
    @Output() redrawOnResizeChange: EventEmitter<boolean>;

    /**
    
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
    
     */
    @Output() resizePanesOnZoomChange: EventEmitter<boolean>;

    /**
    
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
    
     */
    @Output() resolveLabelOverlappingChange: EventEmitter<ChartsLabelOverlap>;

    /**
    
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
    
     */
    @Output() rotatedChange: EventEmitter<boolean>;

    /**
    
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
    
     */
    @Output() rtlEnabledChange: EventEmitter<boolean>;

    /**
    
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
    
     */
    @Output() scrollBarChange: EventEmitter<{ color?: string, offset?: number, opacity?: number | undefined, position?: Position, visible?: boolean, width?: number }>;

    /**
    
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
    
     */
    @Output() seriesChange: EventEmitter<ChartSeries | any | undefined | Array<ChartSeries | any>>;

    /**
    
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
    
     */
    @Output() seriesSelectionModeChange: EventEmitter<SingleOrMultiple>;

    /**
    
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
    
     */
    @Output() seriesTemplateChange: EventEmitter<{ customizeSeries?: Function, nameField?: string }>;

    /**
    
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
    
     */
    @Output() sizeChange: EventEmitter<{ height?: number | undefined, width?: number | undefined }>;

    /**
    
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
    
     */
    @Output() stickyHoveringChange: EventEmitter<boolean>;

    /**
    
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
    
     */
    @Output() synchronizeMultiAxesChange: EventEmitter<boolean>;

    /**
    
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
    
     */
    @Output() themeChange: EventEmitter<Theme>;

    /**
    
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
    
     */
    @Output() titleChange: EventEmitter<string | { font?: Font, horizontalAlignment?: HorizontalAlignment, margin?: number | { bottom?: number, left?: number, right?: number, top?: number }, placeholderSize?: number | undefined, subtitle?: string | { font?: Font, offset?: number, text?: string, textOverflow?: TextOverflow, wordWrap?: WordWrap }, text?: string, textOverflow?: TextOverflow, verticalAlignment?: VerticalEdge, wordWrap?: WordWrap }>;

    /**
    
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
    
     */
    @Output() tooltipChange: EventEmitter<{ argumentFormat?: Format | string | undefined, arrowLength?: number, border?: { color?: string, dashStyle?: DashStyle, opacity?: number | undefined, visible?: boolean, width?: number }, color?: string, container?: UserDefinedElement | string | undefined, contentTemplate?: any | undefined, cornerRadius?: number, customizeTooltip?: Function | undefined, enabled?: boolean, font?: Font, format?: Format | string | undefined, interactive?: boolean, location?: ChartTooltipLocation, opacity?: number | undefined, paddingLeftRight?: number, paddingTopBottom?: number, shadow?: { blur?: number, color?: string, offsetX?: number, offsetY?: number, opacity?: number }, shared?: boolean, zIndex?: number | undefined }>;

    /**
    
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
    
     */
    @Output() valueAxisChange: EventEmitter<Array<any | { aggregatedPointsPosition?: AggregatedPointsPosition, allowDecimals?: boolean | undefined, autoBreaksEnabled?: boolean, axisDivisionFactor?: number, breaks?: Array<ScaleBreak>, breakStyle?: { color?: string, line?: ScaleBreakLineStyle, width?: number }, categories?: Array<number | string | Date>, color?: string, constantLines?: Array<any | { color?: string, dashStyle?: DashStyle, displayBehindSeries?: boolean, extendAxis?: boolean, label?: { font?: Font, horizontalAlignment?: HorizontalAlignment, position?: RelativePosition, text?: string | undefined, verticalAlignment?: VerticalAlignment, visible?: boolean }, paddingLeftRight?: number, paddingTopBottom?: number, value?: Date | number | string | undefined, width?: number }>, constantLineStyle?: { color?: string, dashStyle?: DashStyle, label?: { font?: Font, horizontalAlignment?: HorizontalAlignment, position?: RelativePosition, verticalAlignment?: VerticalAlignment, visible?: boolean }, paddingLeftRight?: number, paddingTopBottom?: number, width?: number }, customPosition?: Date | number | string | undefined, discreteAxisDivisionMode?: DiscreteAxisDivisionMode, endOnTick?: boolean | undefined, grid?: { color?: string, opacity?: number | undefined, visible?: boolean, width?: number }, inverted?: boolean, label?: { alignment?: HorizontalAlignment | undefined, customizeHint?: Function, customizeText?: Function, displayMode?: ChartLabelDisplayMode, font?: Font, format?: Format | string | undefined, indentFromAxis?: number, overlappingBehavior?: ChartsAxisLabelOverlap, position?: RelativePosition | Position, rotationAngle?: number, staggeringSpacing?: number, template?: any | undefined, textOverflow?: TextOverflow, visible?: boolean, wordWrap?: WordWrap }, linearThreshold?: number | undefined, logarithmBase?: number, maxAutoBreakCount?: number, maxValueMargin?: number | undefined, minorGrid?: { color?: string, opacity?: number | undefined, visible?: boolean, width?: number }, minorTick?: { color?: string, length?: number, opacity?: number, shift?: number, visible?: boolean, width?: number }, minorTickCount?: number | undefined, minorTickInterval?: TimeInterval | number | { days?: number, hours?: number, milliseconds?: number, minutes?: number, months?: number, quarters?: number, seconds?: number, weeks?: number, years?: number }, minValueMargin?: number | undefined, minVisualRangeLength?: TimeInterval | number | undefined | { days?: number, hours?: number, milliseconds?: number, minutes?: number, months?: number, quarters?: number, seconds?: number, weeks?: number, years?: number }, multipleAxesSpacing?: number, name?: string | undefined, offset?: number | undefined, opacity?: number | undefined, pane?: string | undefined, placeholderSize?: number, position?: Position, showZero?: boolean | undefined, strips?: Array<any | { color?: string | undefined, endValue?: Date | number | string | undefined, label?: { font?: Font, horizontalAlignment?: HorizontalAlignment, text?: string | undefined, verticalAlignment?: VerticalAlignment }, paddingLeftRight?: number, paddingTopBottom?: number, startValue?: Date | number | string | undefined }>, stripStyle?: { label?: { font?: Font, horizontalAlignment?: HorizontalAlignment, verticalAlignment?: VerticalAlignment }, paddingLeftRight?: number, paddingTopBottom?: number }, synchronizedValue?: number | undefined, tick?: { color?: string, length?: number, opacity?: number | undefined, shift?: number, visible?: boolean, width?: number }, tickInterval?: TimeInterval | number | { days?: number, hours?: number, milliseconds?: number, minutes?: number, months?: number, quarters?: number, seconds?: number, weeks?: number, years?: number }, title?: string | { alignment?: HorizontalAlignment, font?: Font, margin?: number, text?: string | undefined, textOverflow?: TextOverflow, wordWrap?: WordWrap }, type?: AxisScaleType | undefined, valueMarginsEnabled?: boolean, valueType?: ChartsDataType | undefined, visible?: boolean, visualRange?: VisualRange | Array<number | string | Date>, visualRangeUpdateMode?: VisualRangeUpdateMode, wholeRange?: VisualRange | undefined | Array<number | string | Date>, width?: number }>>;

    /**
    
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
    
     */
    @Output() zoomAndPanChange: EventEmitter<{ allowMouseWheel?: boolean, allowTouchGestures?: boolean, argumentAxis?: ChartZoomAndPanMode, dragBoxStyle?: { color?: string | undefined, opacity?: number | undefined }, dragToZoom?: boolean, panKey?: EventKeyModifier, valueAxis?: ChartZoomAndPanMode }>;




    hasNewannotations: boolean = false;

    @ContentChildren(DxiAnnotationChartComponent)
    get annotationsNewChildren(): QueryList<DxiAnnotationChartComponent> {
        return this._getOption('annotations');
    }
    set annotationsNewChildren(value) {
        this.hasNewannotations = value.length > 0;
        this.setChildren('annotations', value);
    }

    hasNewpanes: boolean = false;

    @ContentChildren(DxiPaneChartComponent)
    get panesNewChildren(): QueryList<DxiPaneChartComponent> {
        return this._getOption('panes');
    }
    set panesNewChildren(value) {
        this.hasNewpanes = value.length > 0;
        this.setChildren('panes', value);
    }

    hasNewseries: boolean = false;

    @ContentChildren(DxiSeriesChartComponent)
    get seriesNewChildren(): QueryList<DxiSeriesChartComponent> {
        return this._getOption('series');
    }
    set seriesNewChildren(value) {
        this.hasNewseries = value.length > 0;
        this.setChildren('series', value);
    }

    hasNewvalueAxis: boolean = false;

    @ContentChildren(DxiValueAxisChartComponent)
    get valueAxisNewChildren(): QueryList<DxiValueAxisChartComponent> {
        return this._getOption('valueAxis');
    }
    set valueAxisNewChildren(value) {
        this.hasNewvalueAxis = value.length > 0;
        this.setChildren('valueAxis', value);
    }



    @ContentChildren(DxiAnnotationComponent)
    get annotationsChildren(): QueryList<DxiAnnotationComponent> {
        return this._getOption('annotations');
    }
    set annotationsChildren(value) {
        if (this.hasNewannotations) {
            if (value.length > 0) {
                console.log('Use only one type of nested items');
            }
        } else {
            this.setChildren('annotations', value);
        }
    }

    @ContentChildren(DxiPaneComponent)
    get panesChildren(): QueryList<DxiPaneComponent> {
        return this._getOption('panes');
    }
    set panesChildren(value) {
        if (this.hasNewpanes) {
            if (value.length > 0) {
                console.log('Use only one type of nested items');
            }
        } else {
            this.setChildren('panes', value);
        }
    }

    @ContentChildren(DxiSeriesComponent)
    get seriesChildren(): QueryList<DxiSeriesComponent> {
        return this._getOption('series');
    }
    set seriesChildren(value) {
        if (this.hasNewseries) {
            if (value.length > 0) {
                console.log('Use only one type of nested items');
            }
        } else {
            this.setChildren('series', value);
        }
    }

    @ContentChildren(DxiValueAxisComponent)
    get valueAxisChildren(): QueryList<DxiValueAxisComponent> {
        return this._getOption('valueAxis');
    }
    set valueAxisChildren(value) {
        if (this.hasNewvalueAxis) {
            if (value.length > 0) {
                console.log('Use only one type of nested items');
            }
        } else {
            this.setChildren('valueAxis', value);
        }
    }




    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost,
            private _watcherHelper: WatcherHelper,
            private _idh: IterableDifferHelper,
            optionHost: NestedOptionHost,
            transferState: TransferState,
            @Inject(PLATFORM_ID) platformId: any) {

        super(elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId);

        this._createEventEmitters([
            { subscribe: 'argumentAxisClick', emit: 'onArgumentAxisClick' },
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'done', emit: 'onDone' },
            { subscribe: 'drawn', emit: 'onDrawn' },
            { subscribe: 'exported', emit: 'onExported' },
            { subscribe: 'exporting', emit: 'onExporting' },
            { subscribe: 'fileSaving', emit: 'onFileSaving' },
            { subscribe: 'incidentOccurred', emit: 'onIncidentOccurred' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'legendClick', emit: 'onLegendClick' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'pointClick', emit: 'onPointClick' },
            { subscribe: 'pointHoverChanged', emit: 'onPointHoverChanged' },
            { subscribe: 'pointSelectionChanged', emit: 'onPointSelectionChanged' },
            { subscribe: 'seriesClick', emit: 'onSeriesClick' },
            { subscribe: 'seriesHoverChanged', emit: 'onSeriesHoverChanged' },
            { subscribe: 'seriesSelectionChanged', emit: 'onSeriesSelectionChanged' },
            { subscribe: 'tooltipHidden', emit: 'onTooltipHidden' },
            { subscribe: 'tooltipShown', emit: 'onTooltipShown' },
            { subscribe: 'zoomEnd', emit: 'onZoomEnd' },
            { subscribe: 'zoomStart', emit: 'onZoomStart' },
            { emit: 'adaptiveLayoutChange' },
            { emit: 'adjustOnZoomChange' },
            { emit: 'animationChange' },
            { emit: 'annotationsChange' },
            { emit: 'argumentAxisChange' },
            { emit: 'autoHidePointMarkersChange' },
            { emit: 'barGroupPaddingChange' },
            { emit: 'barGroupWidthChange' },
            { emit: 'commonAnnotationSettingsChange' },
            { emit: 'commonAxisSettingsChange' },
            { emit: 'commonPaneSettingsChange' },
            { emit: 'commonSeriesSettingsChange' },
            { emit: 'containerBackgroundColorChange' },
            { emit: 'crosshairChange' },
            { emit: 'customizeAnnotationChange' },
            { emit: 'customizeLabelChange' },
            { emit: 'customizePointChange' },
            { emit: 'dataPrepareSettingsChange' },
            { emit: 'dataSourceChange' },
            { emit: 'defaultPaneChange' },
            { emit: 'disabledChange' },
            { emit: 'elementAttrChange' },
            { emit: 'exportChange' },
            { emit: 'legendChange' },
            { emit: 'loadingIndicatorChange' },
            { emit: 'marginChange' },
            { emit: 'maxBubbleSizeChange' },
            { emit: 'minBubbleSizeChange' },
            { emit: 'negativesAsZeroesChange' },
            { emit: 'paletteChange' },
            { emit: 'paletteExtensionModeChange' },
            { emit: 'panesChange' },
            { emit: 'pathModifiedChange' },
            { emit: 'pointSelectionModeChange' },
            { emit: 'redrawOnResizeChange' },
            { emit: 'resizePanesOnZoomChange' },
            { emit: 'resolveLabelOverlappingChange' },
            { emit: 'rotatedChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'scrollBarChange' },
            { emit: 'seriesChange' },
            { emit: 'seriesSelectionModeChange' },
            { emit: 'seriesTemplateChange' },
            { emit: 'sizeChange' },
            { emit: 'stickyHoveringChange' },
            { emit: 'synchronizeMultiAxesChange' },
            { emit: 'themeChange' },
            { emit: 'titleChange' },
            { emit: 'tooltipChange' },
            { emit: 'valueAxisChange' },
            { emit: 'zoomAndPanChange' }
        ]);

        this._idh.setHost(this);
        optionHost.setHost(this);
    }

    protected _createInstance(element, options) {

        return new DxChart(element, options);
    }


    ngOnDestroy() {
        this._destroyWidget();
    }

    ngOnChanges(changes: SimpleChanges) {
        super.ngOnChanges(changes);
        this.setupChanges('annotations', changes);
        this.setupChanges('dataSource', changes);
        this.setupChanges('palette', changes);
        this.setupChanges('panes', changes);
        this.setupChanges('series', changes);
        this.setupChanges('valueAxis', changes);
    }

    setupChanges(prop: string, changes: SimpleChanges) {
        if (!(prop in this._optionsToUpdate)) {
            this._idh.setup(prop, changes);
        }
    }

    ngDoCheck() {
        this._idh.doCheck('annotations');
        this._idh.doCheck('dataSource');
        this._idh.doCheck('palette');
        this._idh.doCheck('panes');
        this._idh.doCheck('series');
        this._idh.doCheck('valueAxis');
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
    DxoAdaptiveLayoutModule,
    DxoAnimationModule,
    DxiAnnotationModule,
    DxoBorderModule,
    DxoFontModule,
    DxoImageModule,
    DxoShadowModule,
    DxoArgumentAxisModule,
    DxoAggregationIntervalModule,
    DxiBreakModule,
    DxoBreakStyleModule,
    DxiConstantLineModule,
    DxoLabelModule,
    DxoConstantLineStyleModule,
    DxoGridModule,
    DxoFormatModule,
    DxoMinorGridModule,
    DxoMinorTickModule,
    DxoMinorTickIntervalModule,
    DxoMinVisualRangeLengthModule,
    DxiStripModule,
    DxoStripStyleModule,
    DxoTickModule,
    DxoTickIntervalModule,
    DxoTitleModule,
    DxoCommonAnnotationSettingsModule,
    DxoCommonAxisSettingsModule,
    DxoCommonPaneSettingsModule,
    DxoBackgroundColorModule,
    DxoCommonSeriesSettingsModule,
    DxoAggregationModule,
    DxoAreaModule,
    DxoHoverStyleModule,
    DxoHatchingModule,
    DxoConnectorModule,
    DxoPointModule,
    DxoHeightModule,
    DxoUrlModule,
    DxoWidthModule,
    DxoSelectionStyleModule,
    DxoReductionModule,
    DxoValueErrorBarModule,
    DxoBarModule,
    DxoBubbleModule,
    DxoCandlestickModule,
    DxoColorModule,
    DxoFullstackedareaModule,
    DxoFullstackedbarModule,
    DxoFullstackedlineModule,
    DxoFullstackedsplineModule,
    DxoFullstackedsplineareaModule,
    DxoArgumentFormatModule,
    DxoLineModule,
    DxoRangeareaModule,
    DxoRangebarModule,
    DxoScatterModule,
    DxoSplineModule,
    DxoSplineareaModule,
    DxoStackedareaModule,
    DxoStackedbarModule,
    DxoStackedlineModule,
    DxoStackedsplineModule,
    DxoStackedsplineareaModule,
    DxoStepareaModule,
    DxoSteplineModule,
    DxoStockModule,
    DxoCrosshairModule,
    DxoHorizontalLineModule,
    DxoVerticalLineModule,
    DxoDataPrepareSettingsModule,
    DxoExportModule,
    DxoLegendModule,
    DxoMarginModule,
    DxoSubtitleModule,
    DxoLoadingIndicatorModule,
    DxiPaneModule,
    DxoScrollBarModule,
    DxiSeriesModule,
    DxoSeriesTemplateModule,
    DxoSizeModule,
    DxoTooltipModule,
    DxiValueAxisModule,
    DxoZoomAndPanModule,
    DxoDragBoxStyleModule,
    DxoAdaptiveLayoutChartModule,
    DxoAnimationChartModule,
    DxiAnnotationChartModule,
    DxoBorderChartModule,
    DxoFontChartModule,
    DxoImageChartModule,
    DxoShadowChartModule,
    DxoArgumentAxisChartModule,
    DxoAggregationIntervalChartModule,
    DxiBreakChartModule,
    DxoBreakStyleChartModule,
    DxiConstantLineChartModule,
    DxoLabelChartModule,
    DxoConstantLineStyleChartModule,
    DxoGridChartModule,
    DxoFormatChartModule,
    DxoMinorGridChartModule,
    DxoMinorTickChartModule,
    DxoMinorTickIntervalChartModule,
    DxoMinVisualRangeLengthChartModule,
    DxiStripChartModule,
    DxoStripStyleChartModule,
    DxoTickChartModule,
    DxoTickIntervalChartModule,
    DxoTitleChartModule,
    DxoCommonAnnotationSettingsChartModule,
    DxoCommonAxisSettingsChartModule,
    DxoCommonPaneSettingsChartModule,
    DxoBackgroundColorChartModule,
    DxoCommonSeriesSettingsChartModule,
    DxoAggregationChartModule,
    DxoAreaChartModule,
    DxoHoverStyleChartModule,
    DxoHatchingChartModule,
    DxoConnectorChartModule,
    DxoPointChartModule,
    DxoHeightChartModule,
    DxoUrlChartModule,
    DxoWidthChartModule,
    DxoSelectionStyleChartModule,
    DxoReductionChartModule,
    DxoValueErrorBarChartModule,
    DxoBarChartModule,
    DxoBubbleChartModule,
    DxoCandlestickChartModule,
    DxoColorChartModule,
    DxoFullstackedareaChartModule,
    DxoFullstackedbarChartModule,
    DxoFullstackedlineChartModule,
    DxoFullstackedsplineChartModule,
    DxoFullstackedsplineareaChartModule,
    DxoArgumentFormatChartModule,
    DxoLineChartModule,
    DxoRangeareaChartModule,
    DxoRangebarChartModule,
    DxoScatterChartModule,
    DxoSplineChartModule,
    DxoSplineareaChartModule,
    DxoStackedareaChartModule,
    DxoStackedbarChartModule,
    DxoStackedlineChartModule,
    DxoStackedsplineChartModule,
    DxoStackedsplineareaChartModule,
    DxoStepareaChartModule,
    DxoSteplineChartModule,
    DxoStockChartModule,
    DxoCrosshairChartModule,
    DxoHorizontalLineChartModule,
    DxoVerticalLineChartModule,
    DxoDataPrepareSettingsChartModule,
    DxoExportChartModule,
    DxoLegendChartModule,
    DxoMarginChartModule,
    DxoSubtitleChartModule,
    DxoLoadingIndicatorChartModule,
    DxiPaneChartModule,
    DxoScrollBarChartModule,
    DxiSeriesChartModule,
    DxoSeriesTemplateChartModule,
    DxoSizeChartModule,
    DxoTooltipChartModule,
    DxiValueAxisChartModule,
    DxoZoomAndPanChartModule,
    DxoDragBoxStyleChartModule,
    DxIntegrationModule,
    DxTemplateModule
  ],
  declarations: [
    DxChartComponent
  ],
  exports: [
    DxChartComponent,
    DxoAdaptiveLayoutModule,DxoAnimationModule,DxiAnnotationModule,DxoBorderModule,DxoFontModule,DxoImageModule,DxoShadowModule,DxoArgumentAxisModule,DxoAggregationIntervalModule,DxiBreakModule,DxoBreakStyleModule,DxiConstantLineModule,DxoLabelModule,DxoConstantLineStyleModule,DxoGridModule,DxoFormatModule,DxoMinorGridModule,DxoMinorTickModule,DxoMinorTickIntervalModule,DxoMinVisualRangeLengthModule,DxiStripModule,DxoStripStyleModule,DxoTickModule,DxoTickIntervalModule,DxoTitleModule,DxoCommonAnnotationSettingsModule,DxoCommonAxisSettingsModule,DxoCommonPaneSettingsModule,DxoBackgroundColorModule,DxoCommonSeriesSettingsModule,DxoAggregationModule,DxoAreaModule,DxoHoverStyleModule,DxoHatchingModule,DxoConnectorModule,DxoPointModule,DxoHeightModule,DxoUrlModule,DxoWidthModule,DxoSelectionStyleModule,DxoReductionModule,DxoValueErrorBarModule,DxoBarModule,DxoBubbleModule,DxoCandlestickModule,DxoColorModule,DxoFullstackedareaModule,DxoFullstackedbarModule,DxoFullstackedlineModule,DxoFullstackedsplineModule,DxoFullstackedsplineareaModule,DxoArgumentFormatModule,DxoLineModule,DxoRangeareaModule,DxoRangebarModule,DxoScatterModule,DxoSplineModule,DxoSplineareaModule,DxoStackedareaModule,DxoStackedbarModule,DxoStackedlineModule,DxoStackedsplineModule,DxoStackedsplineareaModule,DxoStepareaModule,DxoSteplineModule,DxoStockModule,DxoCrosshairModule,DxoHorizontalLineModule,DxoVerticalLineModule,DxoDataPrepareSettingsModule,DxoExportModule,DxoLegendModule,DxoMarginModule,DxoSubtitleModule,DxoLoadingIndicatorModule,DxiPaneModule,DxoScrollBarModule,DxiSeriesModule,DxoSeriesTemplateModule,DxoSizeModule,DxoTooltipModule,DxiValueAxisModule,DxoZoomAndPanModule,DxoDragBoxStyleModule,
    DxoAdaptiveLayoutChartModule,DxoAnimationChartModule,DxiAnnotationChartModule,DxoBorderChartModule,DxoFontChartModule,DxoImageChartModule,DxoShadowChartModule,DxoArgumentAxisChartModule,DxoAggregationIntervalChartModule,DxiBreakChartModule,DxoBreakStyleChartModule,DxiConstantLineChartModule,DxoLabelChartModule,DxoConstantLineStyleChartModule,DxoGridChartModule,DxoFormatChartModule,DxoMinorGridChartModule,DxoMinorTickChartModule,DxoMinorTickIntervalChartModule,DxoMinVisualRangeLengthChartModule,DxiStripChartModule,DxoStripStyleChartModule,DxoTickChartModule,DxoTickIntervalChartModule,DxoTitleChartModule,DxoCommonAnnotationSettingsChartModule,DxoCommonAxisSettingsChartModule,DxoCommonPaneSettingsChartModule,DxoBackgroundColorChartModule,DxoCommonSeriesSettingsChartModule,DxoAggregationChartModule,DxoAreaChartModule,DxoHoverStyleChartModule,DxoHatchingChartModule,DxoConnectorChartModule,DxoPointChartModule,DxoHeightChartModule,DxoUrlChartModule,DxoWidthChartModule,DxoSelectionStyleChartModule,DxoReductionChartModule,DxoValueErrorBarChartModule,DxoBarChartModule,DxoBubbleChartModule,DxoCandlestickChartModule,DxoColorChartModule,DxoFullstackedareaChartModule,DxoFullstackedbarChartModule,DxoFullstackedlineChartModule,DxoFullstackedsplineChartModule,DxoFullstackedsplineareaChartModule,DxoArgumentFormatChartModule,DxoLineChartModule,DxoRangeareaChartModule,DxoRangebarChartModule,DxoScatterChartModule,DxoSplineChartModule,DxoSplineareaChartModule,DxoStackedareaChartModule,DxoStackedbarChartModule,DxoStackedlineChartModule,DxoStackedsplineChartModule,DxoStackedsplineareaChartModule,DxoStepareaChartModule,DxoSteplineChartModule,DxoStockChartModule,DxoCrosshairChartModule,DxoHorizontalLineChartModule,DxoVerticalLineChartModule,DxoDataPrepareSettingsChartModule,DxoExportChartModule,DxoLegendChartModule,DxoMarginChartModule,DxoSubtitleChartModule,DxoLoadingIndicatorChartModule,DxiPaneChartModule,DxoScrollBarChartModule,DxiSeriesChartModule,DxoSeriesTemplateChartModule,DxoSizeChartModule,DxoTooltipChartModule,DxiValueAxisChartModule,DxoZoomAndPanChartModule,DxoDragBoxStyleChartModule,
    DxTemplateModule
  ]
})
export class DxChartModule { }

import type * as DxChartTypes from "devextreme/viz/chart_types";
export { DxChartTypes };


