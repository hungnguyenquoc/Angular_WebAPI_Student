import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

import { AppComponent } from './app.component';

// Import containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';

const APP_CONTAINERS = [
  DefaultLayoutComponent
];

import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@coreui/angular';

// Import routing module
import { AppRoutingModule } from './app.routing';

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { StudentComponent } from './views/student/student.component';
import { TeacherComponent } from './views/teacher/teacher.component';
import { ContactComponent } from './views/contact/contact.component';
import { CatalogComponent } from './views/catalog/catalog.component';


import { AcademicYearComponent } from './views/academic-year/academic-year.component';
import { TempComponent } from './views/temp/temp.component';
// ngx-bootstrap
import { ModalModule } from 'ngx-bootstrap/modal';
import { MajorComponent } from './views/major/major.component';
import { DocumentStudentComponent } from './views/document-student/document-student.component';
import { IntakesComponent } from './views/intakes/intakes.component';
import { IntakesListComponent } from './views/intakes/intakes-list/intakes-list.component';
import { IntakeComponent } from './views/intakes/intake/intake.component';
import { IntakeChangeComponent } from './views/intakes/intake-change/intake-change.component';
import { CategoriesComponent } from './views/categories/categories.component';
import { CategoryComponent } from './views/categories/category/category.component';
import { CategoryListComponent } from './views/categories/category-list/category-list.component';
import { CategoryChangedComponent } from './views/categories/category-changed/category-changed.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { CatalogsComponent } from './views/catalogs/catalogs.component';
import { NgComponent } from './ng/ng.component';
import { CatalogListComponent } from './views/catalogs/catalog-list/catalog-list.component';
import { YearComponent } from './views/years/year/year.component';
import { YearListComponent } from './views/years/year-list/year-list.component';
import { YearChangeComponent } from './views/years/year-change/year-change.component';
import { YearsComponent } from './views/years/years.component';
import { SemestersComponent } from './views/semesters/semesters.component';
import { SemesterListComponent } from './views/semesters/semester-list/semester-list.component';
import { SemesterChangeComponent } from './views/semesters/semester-change/semester-change.component';
import { SemesterComponent } from './views/semesters/semester/semester.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    NgbModule.forRoot(),
    ModalModule.forRoot(),
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 1000,
      positionClass: 'toast-bottom-right'
    })
  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    P404Component,
    P500Component,
    LoginComponent,
    RegisterComponent,
    StudentComponent,
    TeacherComponent,
    ContactComponent,
    CatalogComponent,


    AcademicYearComponent,
    TempComponent,
    MajorComponent,
    DocumentStudentComponent,
    IntakesComponent,
    IntakesListComponent,
    IntakeComponent,
    IntakeChangeComponent,
    CategoriesComponent,
    CategoryComponent,
    CategoryListComponent,
    CategoryChangedComponent,
    CatalogsComponent,
    NgComponent,
    CatalogListComponent,
    YearComponent,
    YearListComponent,
    YearChangeComponent,
    YearsComponent,
    SemestersComponent,
    SemesterListComponent,
    SemesterChangeComponent,
    SemesterComponent
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

