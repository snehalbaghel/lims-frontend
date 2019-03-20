import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {DemoMaterialModule} from './material-module';
import { ItemFormComponent } from './item-form/item-form.component';
import { MatInputModule, MatButtonModule, MatSelectModule, MatRadioModule, MatCardModule, 
    MatGridListModule, MatMenuModule, MatIconModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LiDashboardComponent } from './li-dashboard/li-dashboard.component';
import { LayoutModule } from '@angular/cdk/layout';
import { NavigatorComponent } from './navigator/navigator.component';
import { SupportComponent } from './support/support.component';
// import {MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule, MatButtonModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ItemFormComponent,
    LiDashboardComponent,
    NavigatorComponent,
    SupportComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    DemoMaterialModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    LayoutModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
