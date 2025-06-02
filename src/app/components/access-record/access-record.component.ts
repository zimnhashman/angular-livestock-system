import { Component } from '@angular/core';
import {LivestockService} from "../../services/livestock.service";


@Component({
  selector: 'app-access-record',
  templateUrl: './access-record.component.html',
  styleUrls: ['./access-record.component.css'],
  standalone: true,
})
export class AccessRecordComponent {
  rfid = '';
  encryptionKey = '';
  role = '';
  privateKey = '';
  result: any = null;
  error: any = null;

  constructor(private livestockService: LivestockService) {}

  accessRecord() {
    this.livestockService.accessAnimal(this.rfid, this.encryptionKey, this.role, this.privateKey)
        .subscribe({
          next: (res) => {
            this.result = res;
            this.error = null;
          },
          error: (err) => {
            this.error = err.error;
            this.result = null;
          }
        });
  }
}
