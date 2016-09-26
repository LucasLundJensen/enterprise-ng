import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  CommonModule,
  APP_BASE_HREF
} from '@angular/common';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';

import { SohoComponentsModule } from '../soho-components.module';

import { ExpandableAreaDemoComponent } from './expandablearea/expandablearea.demo';
import { ButtonDemoComponent } from './button/button.demo';
import { BusyIndicatorDemoComponent } from './busyindicator/busyindicator.demo';
import { DatepickerDemoComponent } from './datepicker/datepicker.demo';
import { DropdownDemoComponent } from './dropdown/dropdown.demo';
import { DropdownMultiselectDemoComponent } from './dropdown/dropdown-multiselect.demo';
import { EditorDemoComponent } from './editor/editor.demo';
import { DropdownLMDemoComponent } from './dropdown/dropdown-lm.demo';
import { ToastDemoComponent } from './toast/toast.demo';
import { IconDemoComponent } from './icon/icon.demo';
import { ListviewDemoComponent } from './listview/listview.demo';
import { LookupDemoComponent } from './lookup/lookup.demo';
import { MaskDemoComponent } from './mask/mask.demo';
import { MenuButtonDemoComponent } from './menu-button/menu-button.demo';
import { SplitterVerticalDemoComponent } from './splitter/splitter-vertical.demo';
import { SplitterHorizontalDemoComponent } from './splitter/splitter-horizontal.demo';
import { TimepickerDemoComponent } from './timepicker/timepicker.demo';
import { TreeDynamicDemoComponent } from './tree/tree-dynamic.demo';
import { TreeServiceDemoComponent } from './tree/tree-service.demo';
import { TreeContentDemoComponent } from './tree/tree-content.demo';
import { DataGridDynamicDemoComponent } from './datagrid/datagrid-dynamic.demo';
import { DataGridServiceDemoComponent } from './datagrid/datagrid-service.demo';
import { DataGridContentDemoComponent } from './datagrid/datagrid-content.demo';
import { DataGridBreadcrumbDemoComponent } from './datagrid/datagrid-breadcrumb.demo';
import { DataGridTreeGridDemoComponent } from './datagrid/datagrid-treegrid.demo';
import { DataGridSettingsDemoComponent } from './datagrid/datagrid-settings.demo';
import { DataGridPagingServiceDemoComponent } from './datagrid/datagrid-paging-service.demo';
import { HeaderTabsDemoComponent } from './header/header-tabs.demo';
import { HeaderToolbarDemoComponent } from './header/header-toolbar.demo';
import { HeaderToolbarAndTabsDemoComponent } from './header/header-toolbar-and-tabs.demo';
import { TabsBasicDemoComponent } from './tabs/tabs-basic.demo';
import { TabsVerticalDemoComponent } from './tabs/tabs-vertical.demo';
import { TabsCountsDemoComponent } from './tabs/tabs-counts.demo';
import { TabsDismissibleDemoComponent } from './tabs/tabs-dismissible.demo';
import { TabsDropdownDemoComponent } from './tabs/tabs-dropdown.demo';
import { TabsDataDrivenDemoComponent } from './tabs/tabs-datadriven.demo';
import { TabsDynamicDemoComponent } from './tabs/tabs-dynamic.demo';
import { TextareaDemoComponent } from './textarea/textarea.demo';
import { ToolbarBasicDemoComponent } from './toolbar/toolbar-basic.demo';
import { ToolbarDataDrivenDemoComponent } from './toolbar/toolbar-datadriven.demo';
import { ToolbarAllIconsDemoComponent } from './toolbar/toolbar-all-icons.demo';

import { SohoMastheadDemoComponent } from './masthead/masthead.demo';
import { SohoApplicationMenuDemoComponent } from './application-menu/application-menu.demo';
import { SohoHeaderDynamicDemoComponent } from './header/header-dynamic.demo';
import { DataGridToolbarDemoComponent } from './datagrid/datagrid-toolbar.demo';

@NgModule({
  declarations: [
    AppComponent,
    ExpandableAreaDemoComponent,
    ButtonDemoComponent,
    BusyIndicatorDemoComponent,
    DatepickerDemoComponent,
    DropdownDemoComponent,
    DropdownMultiselectDemoComponent,
    DropdownLMDemoComponent,
    EditorDemoComponent,
    ToastDemoComponent,
    IconDemoComponent,
    ListviewDemoComponent,
    LookupDemoComponent,
    MaskDemoComponent,
    MenuButtonDemoComponent,
    SohoMastheadDemoComponent,
    SohoApplicationMenuDemoComponent,
    SohoHeaderDynamicDemoComponent,

    SplitterVerticalDemoComponent,
    SplitterHorizontalDemoComponent,
    TimepickerDemoComponent,
    TreeDynamicDemoComponent,
    TreeServiceDemoComponent,
    TreeContentDemoComponent,
    DataGridDynamicDemoComponent,
    DataGridServiceDemoComponent,
    DataGridContentDemoComponent,
    DataGridBreadcrumbDemoComponent,
    DataGridToolbarDemoComponent,
    DataGridTreeGridDemoComponent,
    DataGridSettingsDemoComponent,
    DataGridPagingServiceDemoComponent,
    HeaderTabsDemoComponent,
    HeaderToolbarDemoComponent,
    HeaderToolbarAndTabsDemoComponent,
    TabsBasicDemoComponent,
    TabsVerticalDemoComponent,
    TabsCountsDemoComponent,
    TabsDismissibleDemoComponent,
    TabsDropdownDemoComponent,
    TabsDataDrivenDemoComponent,
    TabsDynamicDemoComponent,
    TextareaDemoComponent,
    ToolbarBasicDemoComponent,
    ToolbarDataDrivenDemoComponent,
    ToolbarAllIconsDemoComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SohoComponentsModule,
    AppRoutingModule
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' }
  ],
  entryComponents: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
