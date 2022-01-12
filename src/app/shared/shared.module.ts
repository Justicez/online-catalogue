import { NgModule } from '@angular/core';

// modules
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LogInComponent } from './components/log-in/log-in.component';
import { HeaderComponent } from './components/header/header.component';

const modules = [
  CommonModule,
  FormsModule,
  HttpClientModule,
  ReactiveFormsModule,
  RouterModule,
];

const pipes = [
];

const components = [
  LogInComponent,
  HeaderComponent
];

@NgModule({
  declarations: [
    ...components,
    ...pipes,

  ],
  imports: [
    ...modules,
  ],
  exports: [
    ...modules,
    ...components,
    ...pipes
  ],
})
export class MySharedModule { }
