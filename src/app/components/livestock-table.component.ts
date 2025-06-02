import { Component, OnInit } from '@angular/core';
import { LivestockService } from '../services/livestock.service';
import { LivestockRecord } from '../models/livestock-record.model';

@Component({
    selector: 'app-livestock-table',
    templateUrl: './livestock-table.component.html',
    styleUrls: ['./livestock-table.component.css'],
    standalone: true,
})
export class LivestockTableComponent implements OnInit {
    livestockRecords: LivestockRecord[] = [];

    constructor(private livestockService: LivestockService) {}

    ngOnInit(): void {
        this.fetchLivestockData();
    }

    fetchLivestockData(): void {
        this.livestockService.getLivestockRecords().subscribe(data => {
            this.livestockRecords = data;
        });
    }
}