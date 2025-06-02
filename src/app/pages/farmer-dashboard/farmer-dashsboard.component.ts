import { Component } from '@angular/core';
import {LivestockService} from "../../services/livestock.service";
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
    selector: 'app-farmer-dashboard',
    templateUrl: './farmer-dashboard.component.html',
    standalone: true,
    imports: [
        FormsModule,
        NgIf
    ],
    styleUrls: ['./farmer-dashboard.component.css']
})
export class FarmerDashboardComponent {
    accessTime = '';
    accessLocation = '';
    accessRole = '';
    selectedFile: File | null = null;
    uploading = false;
    uploadProgress = 0;

    constructor(private livestockService: LivestockService) {}

    onFileSelected(event: any) {
        this.selectedFile = event.target.files[0];
    }

    uploadCSV(): void {
        if (!this.selectedFile) return;

        const formData = new FormData();
        formData.append('file', this.selectedFile);

        const accessControl = {
            time: this.accessTime,
            location: this.accessLocation,
            role: this.accessRole
        };

        formData.append('access_control', JSON.stringify(accessControl));  // ✅ send as extra field

        this.uploading = true;
        this.uploadProgress = 0;

        const interval = setInterval(() => {
            if (this.uploadProgress < 90) {
                this.uploadProgress += 10;
            }
        }, 150);

        this.livestockService.uploadCSV(formData).subscribe({
            next: (res) => {
                clearInterval(interval);
                this.uploadProgress = 100;
                this.uploading = false;
                alert(`${res.message}\nErrors: ${res.errors.length}`);
            },
            error: (err) => {
                clearInterval(interval);
                this.uploading = false;
                alert('Upload failed: ' + JSON.stringify(err.error));
            }
        });
    }

}
