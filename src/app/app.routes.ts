﻿import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutDemoComponent } from './about/about.demo';
import { AboutNestedDemoComponent } from './about/nested-about.demo';
import { ActionsheetDemoComponent } from './actionsheet/actionsheet.demo';
import { ActionsheetWithTrayDemoComponent } from './actionsheet/actionsheet-with-tray.demo';
import { AlertDemoComponent } from './alert/alert.demo';
import { ApplicationMenuLazyDemoComponent } from './application-menu/application-menu-lazy.demo';
import { AreaDemoComponent } from './area/area.demo';
import { AutocompleteDemoComponent } from './autocomplete/autocomplete.demo';
import { AutocompleteTemplatesDemoComponent } from './autocomplete/autocomplete-templates.demo';
import { BarDemoComponent } from './bar/bar.demo';
import { BarStackedDemoComponent } from './bar-stacked/bar-stacked.demo';
import { BarGroupedDemoComponent } from './bar-grouped/bar-grouped.demo';
import { BlockGridCustomContentDemoComponent } from './blockgrid/blockgrid-custom-content.demo';
import { BlockGridMixedSelectionDemoComponent } from './blockgrid/blockgrid-mixed-selection.demo';
import { BlockGridMultiSelectionDemoComponent } from './blockgrid/blockgrid-multi-selection.demo';
import { BlockGridSingleSelectionDemoComponent } from './blockgrid/blockgrid-single-selection.demo';
import { BlockGridPagingDemoComponent } from './blockgrid/blockgrid-paging.demo';
import { BreadcrumbDemoComponent } from './breadcrumb/breadcrumb.demo';
import { BreadcrumbChangeContentsDemoComponent } from './breadcrumb/breadcrumb-change-contents.demo';
import { BreadcrumbCssOnlyDemoComponent } from './breadcrumb/breadcrumb-css-only.demo';
import { BreadcrumbGauntletDemoComponent } from './breadcrumb/breadcrumb-gauntlet.demo';
import { BubbleDemoComponent } from './bubble/bubble.demo';
import { BulletDemoComponent } from './bullet/bullet.demo';
import { BusyIndicatorDemoComponent } from './busyindicator/form.demo';
import { BusyIndicatorDemoBodyComponent } from './busyindicator/body-sample.demo';
import { ButtonDemoComponent } from './button/button.demo';
import { ButtonBadgeDemoComponent } from './button/button-badge.demo';
import { ButtonsetDemoComponent } from './buttonset/buttonset.demo';
import { CalendarDemoComponent } from './calendar/calendar.demo';
import { CalendarLegendDemoComponent } from './calendar/calendar-legend.demo';
import { CalendarUpdatedDemoComponent } from './calendar/calendar-updated.demo';
import { CalendarRangeDemoComponent } from './calendar/calendar-range.demo';
import { CardsActionableDemoComponent } from './cards/cards-actionable.demo';
import { CardsDemoComponent } from './cards/cards.demo';
import { CardsExpandableDemoComponent } from './cards/cards-expandable.demo';
import { CardsMultiSelectDemoComponent } from './cards/cards-multi-select.demo';
import { CardsSingleSelectDemoComponent } from './cards/cards-single-select.demo';
import { ChartDemoComponent } from './chart/chart.demo';
import { CheckBoxDemoComponent } from './checkbox/checkbox.demo';
import { CirclepagerDemoComponent } from './circlepager/circlepager.demo';
import { CodeBlockDemoComponent } from './code-block/code-block.demo';
import { ColorPickerDemoComponent } from './colorpicker/colorpicker.demo';
import { ColumnDemoComponent } from './column/column.demo';
import { ColumnYAxisDemoComponent } from './column/column-yaxis-format.demo';
import { ColumnGroupedDemoComponent } from './column-grouped/column-grouped.demo';
import { ColumnGroupedXaxisTwolineDemoComponent } from './column-grouped/column-grouped-xaxis-twoline.demo';
import { ColumnStackedDemoComponent } from './column-stacked/column-stacked.demo';
import { CompletionChartDemoComponent } from './completion-chart/completion-chart.demo';
import { ContextMenuDemoComponent } from './context-menu/context-menu.demo';
import { ContextMenuLazyLoadDemoComponent } from './context-menu/context-menu-lazy-load.demo';
import { ContextMenuNestedDemoComponent } from './context-menu/context-menu-nested.demo';
import { ContextMenuSharedDemoComponent } from './context-menu/context-menu-shared.demo';
import { ContextMenuToggleDemoComponent } from './context-menu/context-menu-toggle.demo';
import { ContextualActionPanelDemoComponent } from './contextual-action-panel/contextual-action-panel.demo';
import { DataGridAngularEditorDemoComponent } from './datagrid/datagrid-angular-editor.demo';
import { DataGridAngularFormatterDemoComponent } from './datagrid/datagrid-angular-formatter.demo';
import { DataGridAngularCardFormatterDemoComponent } from './datagrid/datagrid-angular-card-formatter.demo';
import { DataGridBreadcrumbDemoComponent } from './datagrid/datagrid-breadcrumb.demo';
import { DataGridCodeBlockFormatterDemoComponent } from './datagrid/datagrid-code-block-formatter.demo';
import { DataGridCodeBlockEditorDemoComponent } from './datagrid/datagrid-code-block-editor.demo';
import { DataGridCustomFormatterDemoComponent } from './datagrid/datagrid-custom-formatter.demo';
import { DataGridCustomFormatterServiceDemoComponent } from './datagrid/datagrid-custom-formatter-service.demo';

import { DataGridLookupClickDemoComponent } from './datagrid/datagrid-lookup-click-function.demo';
import { DataGridLookupDialogDemoComponent } from './datagrid/datagrid-lookup-dialog.demo';

import { DataGridRowReorderDemoComponent } from './datagrid/datagrid-rowreorder.demo';
import { DataGridDirtyIndicationDemoComponent } from './datagrid/datagrid-dirty-indication.demo';
import { DataGridDynamicDemoComponent } from './datagrid/datagrid-dynamic.demo';
import { DataGridEditorsDemoComponent } from './datagrid/datagrid-editors.demo';
import { DataGridEmptyMessageDemoComponent } from './datagrid/datagrid-empty-message.demo';
import { DataGridExportWithoutDataGridDemoComponent } from './datagrid/datagrid-export-without-datagrid.demo';
import { DataGridFixedHeaderDemoComponent } from './datagrid/datagrid-fixedheader.demo';
import { DataGridGroupableDemoComponent } from './datagrid/datagrid-groupable.demo';
import { DataGridGroupedHeaderDemoComponent } from './datagrid/datagrid-grouped-header.demo';
import { DataGridMixedSelectionDemoComponent } from './datagrid/datagrid-mixed-selection.demo';
import { DataGridPagingIndeterminateDemoComponent } from './datagrid/datagrid-paging-indeterminate.demo';
import { DatagridStandalonePagerDemoComponent } from './datagrid/datagrid-standalone-pager.demo';
import { DataGridPagingServiceDemoComponent } from './datagrid/datagrid-paging-service.demo';
import { DatagridPopupMenuToolbarComponent } from './datagrid/datagrid-popupmenu-toolbar.demo';
import { DataGridSaveUserSettingsDemoComponent } from './datagrid/datagrid-save-user-settings.demo';
import { DataGridServiceDemoComponent } from './datagrid/datagrid-service.demo';
import { DataGridSettingsDemoComponent } from './datagrid/datagrid-settings.demo';
import { DataGridExpandableRowDemoComponent } from './datagrid/datagrid-expandable-row.demo';
import { DataGridStandardFormatterDemoComponent } from './datagrid/datagrid-standard-formatter.demo';
import { DataGridTabDemoComponent } from './datagrid/datagrid-tab.demo';
import { DataGridTestSettingsDemoComponent } from './datagrid/datagrid-test-settings.demo';
import { DataGridTreeGridDemoComponent } from './datagrid/datagrid-treegrid.demo';
import { DataGridTreeGridLazyDemoComponent } from './datagrid/datagrid-treegrid-lazy.demo';
import { DatagridTreegridDynamicfilteringDemoComponent } from './datagrid/datagrid-treegrid-dynamicfiltering.demo';
import { DatepickerDemoComponent } from './datepicker/datepicker.demo';
import { DonutDemoComponent } from './donut/donut.demo';
import { DragDemoComponent } from './drag/drag.demo';
import { DropdownAsyncBusyDemoComponent } from './dropdown/dropdown-async-busy.demo';
import { DropdownAsyncDemoComponent } from './dropdown/dropdown-async.demo';
import { DropdownDemoComponent } from './dropdown/dropdown.demo';
import { DropdownMultiselectDemoComponent } from './dropdown/dropdown-multiselect.demo';
import { DropdownMultiselectLandmarkDemoComponent } from './dropdown/dropdown-multiselect-landmark.demo';
import { DropdownReactiveDemoComponent } from './dropdown/dropdown-reactive.demo';
import { DropdownSimpleDemoComponent } from './dropdown/dropdown-simple.demo';
import { DropdownTypeaheadDemoComponent } from './dropdown/dropdown-typeahead.demo';
import { EditorDemoComponent } from './editor/editor.demo';
import { EmptyMessageDemoComponent } from './emptymessage/emptymessage.demo';
import { ErrorDemoComponent } from './error/error.demo';
import { ExpandableAreaDemoComponent } from './expandablearea/expandablearea.demo';
import { FieldFilterDemoComponent } from './field-filter/field-filter.demo';
import { FieldOptionsDemoComponent } from './field-options/field-options.demo';
import { FieldOptionsPopdownDemoComponent } from './field-options/field-options-popdown.demo';
import { FileUploadDemoComponent } from './fileupload/fileupload.demo';
import { FileUploadLMDemoComponent } from './fileupload/fileupload-lm.demo';
import { FileUploadAdvancedDemoComponent } from './fileupload-advanced/fileupload-advanced.demo';
import { FormReactiveFormDemoComponent } from './form/form-reactive-form.demo';
import { FormCompactDemoComponent } from './form-compact/form-compact.demo';
import { HeaderTabsDemoComponent } from './header/header-tabs.demo';
import { HeaderToggleButtonsDemoComponent } from './header/header-toggle-buttons.demo';
import { HeaderToolbarAndTabsDemoComponent } from './header/header-toolbar-and-tabs.demo';
import { HeaderToolbarDemoComponent } from './header/header-toolbar.demo';
import { HierarchyDemoComponent } from './hierarchy/hierarchy.demo';
import { HierarchyPagingDemoComponent } from './hierarchy/hierarchy-paging.demo';
import { HomePageDemoComponent } from './homepage/homepage.demo';
import { HomePageEditableDemoComponent } from './homepage/homepage-editable.demo';
import { HomePageScenarioADemoComponent } from './homepage/homepage-scenario-a.demo';
import { HomePageScenarioBDemoComponent } from './homepage/homepage-scenario-b.demo';
import { HomePageScenarioCDemoComponent } from './homepage/homepage-scenario-c.demo';
import { HyperlinkDemoComponent } from './hyperlink/hyperlink.demo';
import { IconDemoComponent } from './icon/icon.demo';
import { LabelDemoComponent } from './label/label.demo';
import { LineDemoComponent } from './line/line.demo';
import { ListViewDemoComponent } from './listview/listview.demo';
import { ListViewCustomContentDemoComponent } from './listview/listview.custom-content.demo';
import { LookupDemoComponent } from './lookup/lookup.demo';
import { LookupLandmarkDemoComponent } from './lookup/lookup-landmark.demo';
import { LookupValidationDemoComponent } from './lookup/lookup-validation.demo';
import { LookupDescDemoComponent } from './lookup/lookup-desc.demo';
import { MaskDemoComponent } from './mask/mask.demo';
import { MenuButtonDemoComponent } from './menu-button/menu-button.demo';
import { MessageDemoComponent } from './message/message.demo';
import { ModalDialogDemoComponent } from './modal-dialog/modal-dialog.demo';
import { MonthViewDemoComponent } from './monthview/monthview.demo';
import { MonthViewDemoInPageComponent } from './monthview/monthview-inpage.demo';
import { NotificationDemoComponent } from './notification/notification.demo';
import { NotificationBadgePlacementDemoComponent } from './notification-badge/notification-badge-placement.demo';
import { NotificationBadgeShowHideDemoComponent } from './notification-badge/notification-badge-show-hide.demo';
import { PagerStandaloneDemoComponent } from './pager/pager-standalone.demo';
import { PersonalizeColorApiDemoComponent } from './personalize/personalize-color-api.demo';
import { PieDemoComponent } from './pie/pie.demo';
import { PopDownDemoComponent } from './popdown/popdown.demo';
import { PopupMenuDemoComponent } from './popupmenu/popupmenu.demo';
import { ProgressDemoComponent } from './progress/progress.demo';
import { RadarDemoComponent } from './radar/radar.demo';
import { RadioButtonDemoComponent } from './radiobutton/radiobutton.demo';
import { RatingDemoComponent } from './rating/rating.demo';
import { SearchFieldDemoComponent } from './searchfield/searchfield.demo';
import { SearchFieldCategoryDemoComponent } from './searchfield/searchfield-category.demo';
import { SearchFieldClearDemoComponent } from './searchfield/searchfield-clear.demo';
import { SliderDemoComponent } from './slider/slider.demo';
import { SparklineDemoComponent } from './sparkline/sparkline.demo';
import { SplitterHorizontalDemoComponent } from './splitter/splitter-horizontal.demo';
import { SplitterVerticalDemoComponent } from './splitter/splitter-vertical.demo';
import { SpinboxDemoComponent } from './spinbox/spinbox.demo';
import { StepChartColorDemoComponent } from './stepchart/stepchart-color.demo';
import { StepChartDemoComponent } from './stepchart/stepchart.demo';
import { StepProcessBtnDisableDemoComponent } from './stepprocess/stepprocessbuttondisable.demo';
import { StepProcessDemoComponent } from './stepprocess/stepprocess.demo';
import { StepProcessDataDrivenDemoComponent } from './stepprocess/stepprocess-data-driven.demo';
import { StepProcessVetoableDemoComponent } from './stepprocess/stepprocessvetoable.demo';
import { SwapListDemoComponent } from './swaplist/swaplist.demo';
import { SwapListDynamicDemoComponent } from './swaplist/swaplist-dynamic.demo';
import { SwapListFullAccessDemoComponent } from './swaplist/swaplist-full-access.demo';
import { SwapListSearchDemoComponent } from './swaplist/swaplist-search.demo';
import { SwapListServiceDemoComponent } from './swaplist/swaplist-service.demo';
import { SwipeActionDemoComponent } from './swipe-action/swipe-action.demo';
import { TabsBasicDemoComponent } from './tabs/tabs-basic.demo';
import { TabsCountsDemoComponent } from './tabs/tabs-counts.demo';
import { TabsDataDrivenDemoComponent } from './tabs/tabs-datadriven.demo';
import { TabsDismissibleDemoComponent } from './tabs/tabs-dismissible.demo';
import { TabsDropdownDemoComponent } from './tabs/tabs-dropdown.demo';
import { TabsDynamicDemoComponent } from './tabs/tabs-dynamic.demo';
import { TabsResizeDemoComponent } from './tabs/tabs-resize.demo';
import { TabsModuleDemoComponent } from './tabs/tabs-module.demo';
import { TabsVerticalDemoComponent } from './tabs/tabs-vertical.demo';
import { TagDemoComponent } from './tag/tag.demo';
import { TestTabsBasicComponent } from './tabs/test-tabs-basic.demo';
import { TextareaDemoComponent } from './textarea/textarea.demo';
import { TimePickerDemoComponent } from './timepicker/timepicker.demo';
import { ToastDemoComponent } from './toast/toast.demo';
import { ToolbarAllIconsDemoComponent } from './toolbar/toolbar-all-icons.demo';
import { ToolbarBasicDemoComponent } from './toolbar/toolbar-basic.demo';
import { ToolbarDataDrivenDemoComponent } from './toolbar/toolbar-datadriven.demo';
import { ToolbarFlexBasicDemoComponent } from './toolbar-flex/toolbar-flex-basic.demo';
import { ToolbarFlexDatagridDemoComponent } from './toolbar-flex/toolbar-flex-datagrid.demo';
import { ToolbarFlexMoreActionsAjaxDemoComponent } from './toolbar-flex/toolbar-flex-more-actions-ajax.demo';
import { ToolbarFlexSearchfieldDemoComponent } from './toolbar-flex/toolbar-flex-searchfield.demo';
import { ToolbarMoreActionsAjaxDemoComponent } from './toolbar/toolbar-more-actions-ajax.demo';
import { ToolbarPresetMoreActionsDemoComponent } from './toolbar/toolbar-preset-more-actions.demo';
import { ToolbarRightAlignedDemoComponent } from './toolbar/toolbar-right-aligned.demo';
import { ToolbarStateComponent } from './toolbar/toolbar-state.component';
import { TooltipDemoComponent } from './tooltip/tooltip.demo';
import { TooltipNestedDemoComponent } from './tooltip/tooltip-nested.demo';
import { TrackDirtyDemoComponent } from './trackdirty/trackdirty.demo';
import { TreeContentDemoComponent } from './tree/tree-content.demo';
import { TreeDynamicDemoComponent } from './tree/tree-dynamic.demo';
import { TreeExpandTargetDemoComponent } from './tree/tree-expand-target.demo';
import { TreemapDemoComponent } from './treemap/treemap.demo';
import { TreeServiceDemoComponent } from './tree/tree-service.demo';
import { TreeSourceDemoComponent } from './tree/tree-source.demo';
import { ValidationFormDemoComponent } from './validation/validation-form.demo';
import { ValidationFormEventDemoComponent } from './validation/validation-form-event.demo';
import { ValidationFormGroupDemoComponent } from './validation/validation-form-group.demo';
import { ExpandableAreaFooterDemoComponent } from './expandablearea/expandablearea-footer.demo';
import { WizardDemoComponent } from './wizard/wizard.demo';
import { ApplicationMenuRoleSwitcherDemoComponent } from './application-menu/application-menu-roleswitcher.demo';
import { ApplicationMenuNotificationBadgeDemoComponent } from './application-menu/application-menu-notification-badge.demo';
import { ApplicationMenuTestPerfDemoComponent } from './application-menu/application-menu-test-performance.demo';
import { DataGridTreeGridCubeDemoComponent } from './datagrid/datagrid-treegrid-cube.demo';
import { WeekViewDemoComponent } from './week-view/week-view.demo';
import { DataGridExpandableRowNestedDemoComponent } from './datagrid/datagrid-expandable-row-nested.demo';
import { DataGridExpandableRowDynamicDemoComponent } from './datagrid/datagrid-expandable-row-dynamic.demo';
import { DataGridSummaryRowDemoComponent } from './datagrid/datagrid-summary-row.demo';
import { DropdownMultiselectAttributesDemoComponent } from './dropdown/dropdown-multiselect-attributes-demo';
import { DataGridVerticalScrollDemoComponent } from './datagrid/datagrid-vertical-scroll-to-end.demo';
import { LookupSourceDemoComponent } from './lookup/lookup-source.demo';
import { InputClearableDemoComponent } from './input/input-clearable.demo';
import { ListViewContextDemoComponent } from './listview/listview-context.demo';
import { HeaderDefaultContentDemoComponent } from './header/header-default-content.demo';
import { HomePageEditableFilledComponent } from './homepage/homepage-editable-filled.demo';
import { SearchFieldCategoryUpdateDemoComponent } from './searchfield/searchfield-category-update.demo';
import { ListBuilderDemoComponent } from './listbuilder/listbuilder.demo';
import { MonthViewLegendDemoComponent } from './monthview/monthview-legend.demo';

export const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' }, // default
  { path: 'about', component: AboutDemoComponent },
  { path: 'about-nested', component: AboutNestedDemoComponent },
  { path: 'accordion', loadChildren: () => import('./accordion/accordion-demo.module').then(m => m.AccordionDemoModule) },
  { path: 'actionsheet', component: ActionsheetDemoComponent },
  { path: 'actionsheet-with-tray', component: ActionsheetWithTrayDemoComponent },
  { path: 'alert', component: AlertDemoComponent },
  { path: 'application-lazy-menu', component: ApplicationMenuLazyDemoComponent },
  { path: 'application-menu-roleswitcher', component: ApplicationMenuRoleSwitcherDemoComponent },
  { path: 'application-menu-notification-badge', component: ApplicationMenuNotificationBadgeDemoComponent },
  { path: 'application-menu-test-performance', component: ApplicationMenuTestPerfDemoComponent },
  { path: 'area', component: AreaDemoComponent },
  { path: 'autocomplete', component: AutocompleteDemoComponent },
  { path: 'autocomplete-templates', component: AutocompleteTemplatesDemoComponent },
  { path: 'bar', component: BarDemoComponent },
  { path: 'bar-grouped', component: BarGroupedDemoComponent },
  { path: 'bar-stacked', component: BarStackedDemoComponent },
  { path: 'breadcrumb', component: BreadcrumbDemoComponent },
  { path: 'breadcrumb-change-contents', component: BreadcrumbChangeContentsDemoComponent },
  { path: 'breadcrumb-css-only', component: BreadcrumbCssOnlyDemoComponent },
  { path: 'breadcrumb-gauntlet', component: BreadcrumbGauntletDemoComponent },
  { path: 'blockgrid-custom-content', component: BlockGridCustomContentDemoComponent },
  { path: 'blockgrid-mixed-selection', component: BlockGridMixedSelectionDemoComponent },
  { path: 'blockgrid-multi-selection', component: BlockGridMultiSelectionDemoComponent },
  { path: 'blockgrid-single-selection', component: BlockGridSingleSelectionDemoComponent },
  { path: 'blockgrid-paging', component: BlockGridPagingDemoComponent },
  { path: 'bubble', component: BubbleDemoComponent },
  { path: 'bullet', component: BulletDemoComponent },
  { path: 'button', component: ButtonDemoComponent },
  { path: 'button-badge', component: ButtonBadgeDemoComponent },
  { path: 'buttonset', component: ButtonsetDemoComponent },
  { path: 'busyindicator', component: BusyIndicatorDemoComponent },
  { path: 'busyindicatorbody', component: BusyIndicatorDemoBodyComponent },
  { path: 'calendar-monthview', component: CalendarDemoComponent },
  { path: 'calendar-monthview-legend', component: CalendarLegendDemoComponent },
  { path: 'calendar-updated', component: CalendarUpdatedDemoComponent },
  { path: 'calendar-range', component: CalendarRangeDemoComponent },
  { path: 'cards-actionable', component: CardsActionableDemoComponent },
  { path: 'cards', component: CardsDemoComponent },
  { path: 'cards-expandable', component: CardsExpandableDemoComponent },
  { path: 'cards-multi-select', component: CardsMultiSelectDemoComponent },
  { path: 'cards-single-select', component: CardsSingleSelectDemoComponent },
  { path: 'chart', component: ChartDemoComponent },
  { path: 'checkbox', component: CheckBoxDemoComponent },
  { path: 'circlepager', component: CirclepagerDemoComponent },
  { path: 'code-block', component: CodeBlockDemoComponent },
  { path: 'colorpicker', component: ColorPickerDemoComponent },
  { path: 'column', component: ColumnDemoComponent },
  { path: 'column-yaxis-format', component: ColumnYAxisDemoComponent },
  { path: 'column-grouped', component: ColumnGroupedDemoComponent },
  { path: 'column-grouped-xaxis-twoline', component: ColumnGroupedXaxisTwolineDemoComponent },
  { path: 'column-stacked', component: ColumnStackedDemoComponent },
  { path: 'completion-chart', component: CompletionChartDemoComponent },
  { path: 'context-menu', component: ContextMenuDemoComponent },
  { path: 'context-menu-lazy-load', component: ContextMenuLazyLoadDemoComponent },
  { path: 'context-menu-nested', component: ContextMenuNestedDemoComponent },
  { path: 'context-menu-shared', component: ContextMenuSharedDemoComponent },
  { path: 'context-menu-toggle', component: ContextMenuToggleDemoComponent },
  { path: 'contextual-action-panel', component: ContextualActionPanelDemoComponent },
  { path: 'datagrid-breadcrumb', component: DataGridBreadcrumbDemoComponent },
  { path: 'datagrid-dirty-indication', component: DataGridDirtyIndicationDemoComponent },
  { path: 'datagrid-dynamic', component: DataGridDynamicDemoComponent },
  { path: 'datagrid-empty-message', component: DataGridEmptyMessageDemoComponent },
  { path: 'datagrid-editors', component: DataGridEditorsDemoComponent },
  { path: 'datagrid-editors', component: DataGridEditorsDemoComponent },
  { path: 'datagrid-export-without-datagrid', component: DataGridExportWithoutDataGridDemoComponent },
  { path: 'datagrid-fixedheader', component: DataGridFixedHeaderDemoComponent },
  { path: 'datagrid-groupedheader', component: DataGridGroupedHeaderDemoComponent },
  { path: 'datagrid-groupable', component: DataGridGroupableDemoComponent },
  { path: 'datagrid-mixed-selection', component: DataGridMixedSelectionDemoComponent },
  { path: 'datagrid-paging-indeterminate', component: DataGridPagingIndeterminateDemoComponent },
  { path: 'datagrid-paging-service', component: DataGridPagingServiceDemoComponent },
  { path: 'datagrid-popupmenu-toolbar', component: DatagridPopupMenuToolbarComponent },
  { path: 'datagrid-save-user-settings', component: DataGridSaveUserSettingsDemoComponent },
  { path: 'datagrid-test-settings', component: DataGridTestSettingsDemoComponent },
  { path: 'datagrid-service', component: DataGridServiceDemoComponent },
  { path: 'datagrid-settings', component: DataGridSettingsDemoComponent },
  { path: 'datagrid-expandable-row', component: DataGridExpandableRowDemoComponent },
  { path: 'datagrid-expandable-row-dynamic', component: DataGridExpandableRowDynamicDemoComponent },
  { path: 'datagrid-expandable-row-nested', component: DataGridExpandableRowNestedDemoComponent },
  { path: 'datagrid-summary-row', component: DataGridSummaryRowDemoComponent },
  { path: 'datagrid-standalone-pager', component: DatagridStandalonePagerDemoComponent },
  { path: 'datagrid-treegrid', component: DataGridTreeGridDemoComponent },
  { path: 'datagrid-treegrid-lazy', component: DataGridTreeGridLazyDemoComponent },
  { path: 'datagrid-treegrid-cube', component: DataGridTreeGridCubeDemoComponent },
  { path: 'datagrid-treegrid-dynamicfilter', component: DatagridTreegridDynamicfilteringDemoComponent },
  { path: 'datagrid-vertical-scroll', component: DataGridVerticalScrollDemoComponent },
  { path: 'datagrid-tab', component: DataGridTabDemoComponent },
  { path: 'datagrid-angular-editor', component: DataGridAngularEditorDemoComponent },
  { path: 'datagrid-angular-card-formatter', component: DataGridAngularCardFormatterDemoComponent },
  { path: 'datagrid-angular-formatter', component: DataGridAngularFormatterDemoComponent },
  { path: 'datagrid-code-block-formatter', component: DataGridCodeBlockFormatterDemoComponent },
  { path: 'datagrid-code-block-editor', component: DataGridCodeBlockEditorDemoComponent },
  { path: 'datagrid-custom-formatter', component: DataGridCustomFormatterDemoComponent },
  { path: 'datagrid-custom-formatter-service', component: DataGridCustomFormatterServiceDemoComponent },
  { path: 'datagrid-lookup-click-function', component: DataGridLookupClickDemoComponent },
  { path: 'datagrid-lookup-dialog', component: DataGridLookupDialogDemoComponent },
  { path: 'datagrid-rowreorder', component: DataGridRowReorderDemoComponent },
  { path: 'datagrid-standard-formatter', component: DataGridStandardFormatterDemoComponent },
  { path: 'datepicker', component: DatepickerDemoComponent },
  { path: 'donut', component: DonutDemoComponent },
  { path: 'drag', component: DragDemoComponent },
  { path: 'dropdown', component: DropdownDemoComponent },
  { path: 'dropdown-async-busy', component: DropdownAsyncBusyDemoComponent },
  { path: 'dropdown-async', component: DropdownAsyncDemoComponent },
  { path: 'dropdown-multi', component: DropdownMultiselectDemoComponent },
  { path: 'dropdown-multi-landmark', component: DropdownMultiselectLandmarkDemoComponent },
  { path: 'dropdown-multi-attributes', component: DropdownMultiselectAttributesDemoComponent },
  { path: 'dropdown-reactive', component: DropdownReactiveDemoComponent },
  { path: 'dropdown-simple', component: DropdownSimpleDemoComponent },
  { path: 'dropdown-typeahead', component: DropdownTypeaheadDemoComponent },
  { path: 'editor', component: EditorDemoComponent },
  { path: 'emptymessage', component: EmptyMessageDemoComponent },
  { path: 'error', component: ErrorDemoComponent },
  { path: 'form-reactive', component: FormReactiveFormDemoComponent },
  { path: 'expandablearea', component: ExpandableAreaDemoComponent },
  { path: 'expandablearea-footer', component: ExpandableAreaFooterDemoComponent },
  { path: 'field-filter', component: FieldFilterDemoComponent },
  { path: 'field-options', component: FieldOptionsDemoComponent },
  { path: 'field-options-popdown', component: FieldOptionsPopdownDemoComponent },
  { path: 'fileupload-advanced', component: FileUploadAdvancedDemoComponent },
  { path: 'fileupload-lm', component: FileUploadLMDemoComponent },
  { path: 'fileupload', component: FileUploadDemoComponent },
  { path: 'form-compact', component: FormCompactDemoComponent },
  { path: 'header-tabs', component: HeaderTabsDemoComponent },
  { path: 'header-toggle-buttons', component: HeaderToggleButtonsDemoComponent },
  { path: 'header-toolbar', component: HeaderToolbarDemoComponent },
  { path: 'header-toolbar-tabs', component: HeaderToolbarAndTabsDemoComponent },
  { path: 'header-searchfield', component: HeaderDefaultContentDemoComponent },
  { path: 'header-searchfield-flex', component: HeaderDefaultContentDemoComponent },
  { path: 'header-searchfield-category', component: HeaderDefaultContentDemoComponent },
  { path: 'hierarchy', component: HierarchyDemoComponent },
  { path: 'hierarchy-paging', component: HierarchyPagingDemoComponent },
  { path: 'homepage', component: HomePageDemoComponent },
  { path: 'homepage-editable', component: HomePageEditableDemoComponent },
  { path: 'homepage-editable-filled', component: HomePageEditableFilledComponent },
  { path: 'homepage-scenario-a', component: HomePageScenarioADemoComponent },
  { path: 'homepage-scenario-b', component: HomePageScenarioBDemoComponent },
  { path: 'homepage-scenario-c', component: HomePageScenarioCDemoComponent },
  { path: 'hyperlink', component: HyperlinkDemoComponent },
  { path: 'icon', component: IconDemoComponent },
  { path: 'input-clearable', component: InputClearableDemoComponent },
  { path: 'label', component: LabelDemoComponent },
  { path: 'line', component: LineDemoComponent },
  { path: 'listview', component: ListViewDemoComponent },
  { path: 'listview-custom', component: ListViewCustomContentDemoComponent },
  { path: 'listview-context', component: ListViewContextDemoComponent },
  { path: 'listbuilder', component: ListBuilderDemoComponent },
  { path: 'locale-pipe', loadChildren: () => import('./locale/locale-demo.module').then(m => m.LocaleDemoModule) },
  { path: 'lookup', component: LookupDemoComponent },
  { path: 'lookup-landmark', component: LookupLandmarkDemoComponent },
  { path: 'lookup-source', component: LookupSourceDemoComponent },
  { path: 'lookup-validation', component: LookupValidationDemoComponent },
  { path: 'lookup-desc', component: LookupDescDemoComponent },
  { path: 'mask', component: MaskDemoComponent },
  { path: 'menu-button', component: MenuButtonDemoComponent },
  { path: 'message', component: MessageDemoComponent },
  { path: 'modal-dialog', component: ModalDialogDemoComponent },
  { path: 'monthview', component: MonthViewDemoComponent },
  { path: 'monthview-inpage', component: MonthViewDemoInPageComponent },
  { path: 'monthview-legend', component: MonthViewLegendDemoComponent },
  { path: 'notification', component: NotificationDemoComponent },
  { path: 'notification-badge-placement', component: NotificationBadgePlacementDemoComponent },
  { path: 'notification-badge-show-hide', component: NotificationBadgeShowHideDemoComponent },
  { path: 'pager-standalone', component: PagerStandaloneDemoComponent },
  { path: 'personalize-color-api', component: PersonalizeColorApiDemoComponent },
  { path: 'pie', component: PieDemoComponent },
  { path: 'popdown', component: PopDownDemoComponent },
  { path: 'popupmenu', component: PopupMenuDemoComponent },
  { path: 'progress', component: ProgressDemoComponent },
  { path: 'radar', component: RadarDemoComponent },
  { path: 'radiobutton', component: RadioButtonDemoComponent },
  { path: 'rating', component: RatingDemoComponent },
  { path: 'searchfield', component: SearchFieldDemoComponent },
  { path: 'searchfield-category', component: SearchFieldCategoryDemoComponent },
  { path: 'searchfield-category-update', component: SearchFieldCategoryUpdateDemoComponent },
  { path: 'searchfield-clear', component: SearchFieldClearDemoComponent },
  { path: 'slider', component: SliderDemoComponent },
  { path: 'sparkline', component: SparklineDemoComponent },
  { path: 'splitter-horizontal', component: SplitterHorizontalDemoComponent },
  { path: 'splitter-vertical', component: SplitterVerticalDemoComponent },
  { path: 'step-chart-color', component: StepChartColorDemoComponent },
  { path: 'step-chart', component: StepChartDemoComponent },
  { path: 'step-process', component: StepProcessDemoComponent },
  { path: 'step-process-btn-disble', component: StepProcessBtnDisableDemoComponent },
  { path: 'step-data-driven', component: StepProcessDataDrivenDemoComponent },
  { path: 'step-process-vetoable', component: StepProcessVetoableDemoComponent },
  { path: 'swaplist', component: SwapListDemoComponent },
  { path: 'swaplist-dynamic', component: SwapListDynamicDemoComponent },
  { path: 'swaplist-full-access', component: SwapListFullAccessDemoComponent },
  { path: 'swaplist-search', component: SwapListSearchDemoComponent },
  { path: 'swaplist-service', component: SwapListServiceDemoComponent },
  { path: 'swipe-action', component: SwipeActionDemoComponent },
  { path: 'spinbox', component: SpinboxDemoComponent },
  { path: 'tabs-basic', component: TabsBasicDemoComponent },
  { path: 'tabs-counts', component: TabsCountsDemoComponent },
  { path: 'tabs-datadriven', component: TabsDataDrivenDemoComponent },
  { path: 'tabs-dismissible', component: TabsDismissibleDemoComponent },
  { path: 'tabs-dropdown', component: TabsDropdownDemoComponent },
  { path: 'tabs-dynamic', component: TabsDynamicDemoComponent },
  { path: 'tabs-resize', component: TabsResizeDemoComponent },
  { path: 'tabs-module', component: TabsModuleDemoComponent },
  { path: 'tabs-vertical', component: TabsVerticalDemoComponent },
  { path: 'tags', component: TagDemoComponent },
  { path: 'test-tabs-basic', component: TestTabsBasicComponent },
  { path: 'textarea', component: TextareaDemoComponent },
  { path: 'timepicker', component: TimePickerDemoComponent },
  { path: 'toast', component: ToastDemoComponent },
  { path: 'toolbar-all-icons', component: ToolbarAllIconsDemoComponent },
  { path: 'toolbar-more-actions-ajax', component: ToolbarMoreActionsAjaxDemoComponent },
  { path: 'toolbar-preset-more-actions', component: ToolbarPresetMoreActionsDemoComponent },
  { path: 'toolbar-basic', component: ToolbarBasicDemoComponent },
  { path: 'toolbar-datadriven', component: ToolbarDataDrivenDemoComponent },
  { path: 'toolbar-state', component: ToolbarStateComponent },
  { path: 'toolbar-right-aligned', component: ToolbarRightAlignedDemoComponent },
  { path: 'toolbar-flex-basic', component: ToolbarFlexBasicDemoComponent },
  { path: 'toolbar-flex-datagrid', component: ToolbarFlexDatagridDemoComponent },
  { path: 'toolbar-flex-more-actions-ajax', component: ToolbarFlexMoreActionsAjaxDemoComponent },
  { path: 'toolbar-flex-searchfield', component: ToolbarFlexSearchfieldDemoComponent },
  { path: 'tooltip', component: TooltipDemoComponent },
  { path: 'tooltip-nested', component: TooltipNestedDemoComponent },
  { path: 'trackdirty', component: TrackDirtyDemoComponent },
  { path: 'tree-content', component: TreeContentDemoComponent },
  { path: 'tree-dynamic', component: TreeDynamicDemoComponent },
  { path: 'tree-expand-target', component: TreeExpandTargetDemoComponent },
  { path: 'treemap', component: TreemapDemoComponent },
  { path: 'tree-service', component: TreeServiceDemoComponent },
  { path: 'tree-source', component: TreeSourceDemoComponent },
  { path: 'validation', component: ValidationFormDemoComponent },
  { path: 'validation-event', component: ValidationFormEventDemoComponent },
  { path: 'validation-group', component: ValidationFormGroupDemoComponent },
  { path: 'week-view', component: WeekViewDemoComponent },
  { path: 'wizard', component: WizardDemoComponent }
];

/**
 * To test the application using the hashing routing strategy, swap the two lines below.
 */
export const AppRoutingModule: ModuleWithProviders<RouterModule> = RouterModule.forRoot(routes, { useHash: false, relativeLinkResolution: 'legacy' });
