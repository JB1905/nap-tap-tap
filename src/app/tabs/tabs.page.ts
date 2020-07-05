import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

import { NapService } from '../core/services/nap/nap.service';
import { AlarmService } from '../core/services/alarm/alarm.service';

import { Alarm } from '../core/models/alarm.model';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
})
export class TabsPage implements OnInit {
  visible = false;

  constructor(
    public alertController: AlertController,
    private alarmService: AlarmService,
    private napService: NapService
  ) {}

  ngOnInit() {
    setInterval(this.checkAlarm, 1000);
  }

  checkAlarm = () => {
    const now = new Date();

    this.alarmService.alarms.subscribe((alarms) => {
      for (const alarm of alarms) {
        console.log(`${now.getHours()}:${now.getMinutes()}` === alarm.time);

        if (
          !this.visible &&
          alarm.active &&
          `${now.getHours()}:${now.getMinutes()}` === alarm.time
        ) {
          this.presentAlert(alarm);
        }
      }
    });
  };

  async presentAlert(alarm: Alarm) {
    this.visible = true;

    const buttons = [
      {
        text: 'Stop',
        handler: () => {
          // this.alarmService.updateAlarm

          this.visible = false;
        },
      },
    ];

    if (alarm.snooze) {
      buttons.unshift({
        text: 'Nap',
        handler: () => {
          this.visible = false;
        },
      });
    }

    const alert = await this.alertController.create({
      header: alarm.label,
      buttons,
    });

    await alert.present();
  }
}
