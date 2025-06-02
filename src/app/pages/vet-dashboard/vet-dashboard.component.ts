import { Component } from '@angular/core';
import { LivestockService } from '../../services/livestock.service';
import {FormsModule} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";

@Component({
    selector: 'app-vet-dashboard',
    templateUrl: './vet-dashboard.component.html',
    styleUrls: ['./vet-dashboard.component.css'],
    standalone: true,
    imports: [
        FormsModule,
        NgIf,
        NgForOf
    ]
})
export class VetDashboardComponent {
    encryptionKey = '';
    authorizedRecords: any[] = [];
    accessGranted = false;

    constructor(private livestockService: LivestockService) {}

    requestAccess(): void {
        this.livestockService.getAuthorizedRecords(this.encryptionKey).subscribe({
            next: (data) => {
                this.accessGranted = true;
                this.authorizedRecords = data;
            },
            error: () => {
                this.accessGranted = false;
                alert('Invalid encryption key!');
            }
        });
    }
}