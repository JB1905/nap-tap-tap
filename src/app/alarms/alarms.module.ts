import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlarmsPage } from './alarms.page';
import { SettingsComponentModule } from '../settings/settings.module';

@NgModule({
  imports: [
    SettingsComponentModule,
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: AlarmsPage }]),
  ],
  declarations: [AlarmsPage],
})
export class AlarmsPageModule {}
