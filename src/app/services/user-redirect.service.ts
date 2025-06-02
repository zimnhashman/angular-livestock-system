import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class UserRedirectService {
    constructor(private router: Router, private authService: AuthService) {}

    redirectUser(): void {
        const role = this.authService.getUserRole();

        switch (role) {
            case 'Farmer':
                this.router.navigate(['/farmer-dashboard']);
                break;
            case 'Vet':
                this.router.navigate(['/vet-dashboard']);
                break;
            case 'Police':
                this.router.navigate(['/police-dashboard']);
                break;
            case 'Researcher':
                this.router.navigate(['/researcher-dashboard']);
                break;
            default:
                this.router.navigate(['/login']);
        }
    }

    logout(): void {
        this.authService.setUserRole('');
        this.router.navigate(['/login']);
    }
}
