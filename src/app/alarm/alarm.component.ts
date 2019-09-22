import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-alarm',
  templateUrl: './alarm.component.html',
  styleUrls: ['./alarm.component.scss']
})
export class AlarmComponent implements OnInit {
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
}
