import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { ButtonModule } from 'primeng/button';
import { TabViewModule } from 'primeng/tabview';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';
import { CheckboxModule } from 'primeng/checkbox';
import { CarouselModule } from 'primeng/carousel';
import { DataViewModule } from 'primeng/dataview';
import { ChartModule } from 'primeng/chart/';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { AccordionModule } from 'primeng/accordion';

const amodules = [
  FormsModule,
  ReactiveFormsModule,
];

const pmodules = [
  CalendarModule,
  DropdownModule,
  InputTextModule,
  ButtonModule,
  MultiSelectModule,
  TabViewModule,
  TableModule,
  DialogModule,
  ToastModule,
  CheckboxModule,
  CarouselModule,
  DataViewModule,
  ChartModule,
  ConfirmDialogModule,
  AccordionModule
];

@NgModule({
  imports: [amodules, ...pmodules],
  exports: [amodules, ...pmodules],
  providers: [
  ]
})
export class PrimeNgModule {
}
