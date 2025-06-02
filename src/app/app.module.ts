import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { FarmerDashboardComponent } from './pages/farmer-dashboard/farmer-dashsboard.component';

import { PoliceDashboardComponent } from './pages/police-dashboard/police-dashboard.component';
import { ResearcherDashboardComponent } from './pages/researcher-dashboard/researcher-dashboard.component';
import {VetDashboardComponent} from "./pages/vet-dashboard/vet-dashboard.component";
import { AccessRecordComponent } from './components/access-record/access-record.component';

@NgModule({

    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule,
        AppComponent,
        LoginComponent,
        FarmerDashboardComponent,
        VetDashboardComponent,
        PoliceDashboardComponent,
        ResearcherDashboardComponent
    ],
    bootstrap: [AppComponent],
    declarations: [
      AccessRecordComponent
    ]
})
export class AppModule {}
