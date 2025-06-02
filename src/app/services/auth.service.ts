import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private encryptionKey: string = '';
    private userRole: string = ''; // ✅ Add this field

    // Encryption key handling
    setKey(key: string) {
        this.encryptionKey = key;
    }

    getKey(): string {
        return this.encryptionKey;
    }

    // ✅ Add these two methods for user role management
    setUserRole(role: string) {
        this.userRole = role;
    }

    getUserRole(): string {
        return this.userRole;
    }
}
