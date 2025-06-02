import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { FarmerDashboardComponent } from './pages/farmer-dashboard/farmer-dashsboard.component';
import { VetDashboardComponent } from './pages/vet-dashboard/vet-dashboard.component';
import { PoliceDashboardComponent } from './pages/police-dashboard/police-dashboard.component';
import { ResearcherDashboardComponent } from './pages/researcher-dashboard/researcher-dashboard.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'farmer', component: FarmerDashboardComponent },
    { path: 'vet', component: VetDashboardComponent },
    { path: 'police', component: PoliceDashboardComponent },
    { path: 'researcher', component: ResearcherDashboardComponent }
];
