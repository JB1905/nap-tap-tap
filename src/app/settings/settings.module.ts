import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SettingsComponent } from './settings.component';

@NgModule({
  imports: [CommonModule, IonicModule, FormsModule],
  entryComponents: [SettingsComponent],
  declarations: [SettingsComponent],
  exports: [SettingsComponent]
})
export class SettingsComponentModule {}
