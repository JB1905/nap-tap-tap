import { Component } from '@angular/core';
// import { AlertController } from '@ionic/angular';

// import { NapService } from '../core/services/nap/nap.service';
// import { AlarmService } from '../core/services/alarm/alarm.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  constructor(
    // public alertController: AlertController,
    // private alarmService: AlarmService,
    // private napService: NapService
  ) {
    // this.presentAle rt();
  }

  // async presentAlert() {
  //   const alert = await this.alertController.create({
  //     header: 'Alarm',
  //     // subHeader: 'Subtitle',
  //     // message: 'This is an alert message.',
  //     buttons: [
  //       { text: 'Nap', handler: () => {} },
  //       { text: 'Stop', handler: () => {} }
  //     ]
  //   });

  //   await alert.present();
  // }
}
