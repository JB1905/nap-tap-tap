import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { SettingsComponent } from '../settings/settings.component';

@Component({
  selector: 'app-alarms',
  templateUrl: 'alarms.page.html',
  styleUrls: ['alarms.page.scss']
})
export class AlarmsPage {
  list = [];

  constructor(public modalController: ModalController) {}

  async openModal() {
    const modal = await this.modalController.create({
      component: SettingsComponent
    });

    await modal.present();
  }
}
