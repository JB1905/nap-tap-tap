import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
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
    // const request = window.indexedDB.open('alarms')
  }
}
