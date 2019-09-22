import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { SettingsComponent } from './settings.component';

@NgModule({
  imports: [CommonModule, IonicModule],
  entryComponents: [SettingsComponent],
  declarations: [SettingsComponent],
  exports: [SettingsComponent]
})
export class SettingsComponentModule {}
