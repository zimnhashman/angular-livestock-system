import { Component } from '@angular/core';
import { LivestockService } from '../../services/livestock.service';
import {FormsModule} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";

@Component({
    selector: 'app-police-dashboard',
    templateUrl: './police-dashboard.component.html',
    styleUrls: ['./police-dashboard.component.css'],
    standalone: true,
    imports: [FormsModule, NgIf, NgForOf],
})
export class PoliceDashboardComponent {
    encryptionKey = '';
    stolenLivestockRecords = [];
    accessGranted = false;

    constructor(private livestockService: LivestockService) {}

    requestAccess(): void {
        this.livestockService.getAuthorizedRecords(this.encryptionKey).subscribe({
            next: (data) => {
                this.accessGranted = true;
            },
            error: () => {
                this.accessGranted = false;
                alert("Invalid encryption key!");
            }
        });
    }
}