import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { MatInputModule } from '@angular/material/input';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { CommonModule } from '@angular/common';
import { OperationComponent } from './operation/operation.component';
import { OperatorComponent } from './operator/operator.component';
import { JointComponent } from './joint/joint.component';
import { ScreenComponent } from './screen/screen.component';
import { ModelTuningComponent } from './model-tuning/model-tuning.component';
import { MySeriesComponent } from './my-series/my-series.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    OperationComponent,
    OperatorComponent,
    JointComponent,
    ScreenComponent,
    ModelTuningComponent,
    MySeriesComponent,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true
    }
  ],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    // MatFormFieldModule, 
    // MatInputModule
    MatInputModule,
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
