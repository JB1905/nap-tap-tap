import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { NativeRingtones } from '@ionic-native/native-ringtones/ngx';
import days from 'days';

import { Alarm } from '../core/models/alarm.model';

import { AlarmService } from '../core/services/alarm/alarm.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  time: string;
  repeat: number[] = [];
  label = 'Alarm';
  sound: string;
  snooze = true;
  active = true;
  id: string;

  days = days;
  ringtonesList = [];

  constructor(
    private modalController: ModalController,
    public alertController: AlertController,
    private alarmService: AlarmService,
    private ringtones: NativeRingtones
  ) {}

  ngOnInit() {
    this.ringtones.getRingtone().then((ringtones) => {
      this.ringtonesList = ringtones;
    });
  }

  async closeModal() {
    await this.modalController.dismiss();
  }

  deleteAlarm() {
    this.alarmService.deleteAlarm(this.id).then(() => {
      this.closeModal();
    });
  }

  setAlarm() {
    if (this.label && this.time) {
      if (this.id) {
        const alarm: Omit<Alarm, 'id'> = {
          time: this.time,
          repeat: this.repeat,
          label: this.label,
          sound: this.sound,
          snooze: this.snooze,
          active: this.active,
        };

        this.alarmService.updateAlarm(this.id, alarm).then(() => {
          this.closeModal();
        });
      } else {
        const time = new Date(this.time);

        const alarm: Omit<Alarm, 'id'> = {
          label: this.label,
          repeat: this.repeat,
          time: `${time.getHours() < 10 ? '0' : ''}${time.getHours()}:${
            time.getMinutes() < 10 ? '0' : ''
          }${time.getMinutes()}`,
          sound: this.sound,
          snooze: this.snooze,
          active: this.active,
        };

        this.alarmService.addAlarm(alarm).then(() => {
          this.closeModal();
        });
      }
    }
  }
}
