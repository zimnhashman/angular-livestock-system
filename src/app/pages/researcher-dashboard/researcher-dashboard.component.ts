import { Component } from '@angular/core';
import { LivestockService } from '../../services/livestock.service';
import {FormsModule} from "@angular/forms";

@Component({
    selector: 'app-researcher-dashboard',
    templateUrl: './researcher-dashboard.component.html',
    styleUrls: ['./researcher-dashboard.component.css'],
    standalone: true,
    imports: [FormsModule],
})
export class ResearcherDashboardComponent {
    encryptionKey = '';
    researchData = [];
    accessGranted = false;

    constructor(private livestockService: LivestockService) {}

    requestAccess(): void {
        this.livestockService.getAuthorizedRecords(this.encryptionKey).subscribe({
            next: (data) => {
                this.accessGranted = true;
                this.researchData = data.map(record => ({
                    farmId: record.farmId,
                    cowTemp: record.health.cowTemp,
                    milkYield: record.health.milkYield,
                    envHumidity: record.environment.envHumidity
                }));
            },
            error: () => {
                this.accessGranted = false;
                alert("Invalid encryption key!");
            }
        });
    }
}