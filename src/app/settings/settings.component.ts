import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  time: string;
  repeat: number[] = [];
  label = '';
  sound: string;
  snooze = false;

  constructor(private modalController: ModalController) {}

  ngOnInit() {}

  async closeModal() {
    await this.modalController.dismiss();
  }

  setAlarm() {
    // const request = window.indexedDB.open('alarms');

    // console.log(this.label, this.snooze, this.time);

    if (this.label) {
      // request.onupgradeneeded = (event:any) => {
      // const db = event.target.result;
      // const objectStore = db.createObjectStore("alarms", { keyPath: "ssn" });
      // objectStore.createIndex("name", "name", { unique: false });
      // objectStore.createIndex("email", "email", { unique: true });
      // }
    }
  }
}
