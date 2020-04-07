import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import days from 'days';

import { SettingsComponent } from '../settings/settings.component';
import { AlarmService } from '../core/services/alarm/alarm.service';

import { Alarm } from '../core/models/alarm.model';

@Component({
  selector: 'app-alarms',
  templateUrl: 'alarms.page.html',
  styleUrls: ['alarms.page.scss'],
})
export class AlarmsPage implements OnInit {
  alarms: Alarm[] = [];
  editable = false;

  days = days.abbr;

  constructor(
    public modalController: ModalController,
    private alarmService: AlarmService
  ) {}

  ngOnInit() {
    this.alarmService.alarms.subscribe((alarms) => {
      this.alarms = alarms;
    });
  }

  async openModal(id: string) {
    if (this.editable) {
      setTimeout(() => {
        this.editable = false;
      }, 400);
    }

    const item = this.alarms.filter((alarm) => alarm.id === id);

    const modal = await this.modalController.create({
      component: SettingsComponent,
      componentProps: { ...item[0] },
    });

    await modal.present();
  }

  setEditable() {
    this.editable = !this.editable;
  }

  editAlarm(id: string) {
    if (this.editable) {
      this.openModal(id);
    }
  }

  updateAlarm(id: string) {
    let isActive: boolean;

    this.alarmService.alarms.subscribe((alarms) => {
      for (const alarm of alarms) {
        if (alarm.id === id) {
          isActive = alarm.active;
        }
      }
    });

    this.alarmService.updateAlarm(id, {
      active: !isActive,
    } as Omit<Alarm, 'id'>);
  }

  deleteAlarm(id: string) {
    this.alarmService.deleteAlarm(id);
  }
}
