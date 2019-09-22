import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { AlarmComponent } from './alarm.component';

@NgModule({
  imports: [CommonModule, IonicModule],
  entryComponents: [AlarmComponent],
  declarations: [AlarmComponent],
  exports: [AlarmComponent]
})
export class AlarmComponentModule {}
