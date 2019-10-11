import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import days from 'days';

import { SettingsComponent } from '../settings/settings.component';
import { AlarmService } from '../core/services/alarm/alarm.service';

@Component({
  selector: 'app-alarms',
  templateUrl: 'alarms.page.html',
  styleUrls: ['alarms.page.scss']
})
export class AlarmsPage implements OnInit {
  list = [];
  editable = false;

  days = days.abbr;

  constructor(
    public modalController: ModalController,
    private alarmService: AlarmService
  ) {}

  ngOnInit() {
    this.alarmService.alarms.subscribe(alarms => {
      this.list = alarms;
    });
  }

  async openModal(id: string) {
    if (this.editable) {
      setTimeout(() => {
        this.editable = false;
      }, 400);
    }

    const item = this.list.filter(item => item.id === id);

    const modal = await this.modalController.create({
      component: SettingsComponent,
      componentProps: { ...item[0] }
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
    this.alarmService.updateAlarm(id, {});
  }

  deleteAlarm(id: string) {
    this.alarmService.deleteAlarm(id);
  }
}
