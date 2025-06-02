import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    standalone: true,
    imports: [FormsModule, CommonModule]
})
export class LoginComponent {
    encryptionKey = '';
    role = '';

    constructor(private router: Router, private authService: AuthService) {}

    get requiresKey(): boolean {
        return this.role !== 'farmer';
    }

    login() {
        const trimmedKey = this.encryptionKey.trim();

        if (this.requiresKey && (!trimmedKey || this.role === '')) {
            alert('Encryption key is required for this role!');
            return;
        }

        this.authService.setKey(trimmedKey);
        this.authService.setUserRole(this.role);

        switch (this.role) {
            case 'farmer':
                this.router.navigate(['/farmer']);
                break;
            case 'vet':
                this.router.navigate(['/vet']);
                break;
            case 'police':
                this.router.navigate(['/police']);
                break;
            case 'researcher':
                this.router.navigate(['/researcher']);
                break;
            default:
                alert('Please select a valid role');
        }
    }

}
