import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleGuard } from './guards/role.guard';
import { LoginComponent } from './components/login/login.component';
import { FarmerDashboardComponent } from './pages/farmer-dashboard/farmer-dashsboard.component';
import { PoliceDashboardComponent } from './pages/police-dashboard/police-dashboard.component';
import { ResearcherDashboardComponent } from './pages/researcher-dashboard/researcher-dashboard.component';
import {VetDashboardComponent} from "./pages/vet-dashboard/vet-dashboard.component";
import {AccessRecordComponent} from "./components/access-record/access-record.component";


const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'access', component: AccessRecordComponent },
    { path: 'farmer-dashboard', component: FarmerDashboardComponent, canActivate: [RoleGuard] },
    { path: 'vet-dashboard', component: VetDashboardComponent, canActivate: [RoleGuard] },
    { path: 'police-dashboard', component: PoliceDashboardComponent, canActivate: [RoleGuard] },
    { path: 'researcher-dashboard', component: ResearcherDashboardComponent, canActivate: [RoleGuard] }
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
