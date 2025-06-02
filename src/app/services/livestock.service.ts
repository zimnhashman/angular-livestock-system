import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LivestockRecord } from '../models/livestock-record.model';

@Injectable({
    providedIn: 'root',
})
export class LivestockService {
    private apiUrl = 'http://127.0.0.1:5000';

    constructor(private http: HttpClient) {}

    getLivestockRecords(): Observable<LivestockRecord[]> {
        return this.http.get<LivestockRecord[]>(`${this.apiUrl}/animal`);
    }

    getAuthorizedRecords(encryptionKey: string): Observable<LivestockRecord[]> {
        return this.http.post<LivestockRecord[]>(`${this.apiUrl}/animal/auth`, { key: encryptionKey });
    }


    registerAnimal(data: any): Observable<any> {
        return this.http.post(`${this.apiUrl}/animal`, data);
    }

    uploadCSV(formData: FormData): Observable<any> {
        return this.http.post(`${this.apiUrl}/upload-csv`, formData);
    }


    accessAnimal(rfid: string, key: string, role: string, privateKey: string) {
        const body = { key, role, private_key: privateKey };
        return this.http.post<any>(`${this.apiUrl}/animal/${rfid}`, body);
    }


}