import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Storage } from '@ionic/storage';
import { v4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class AlarmService {
  private _alarms: BehaviorSubject<any> = new BehaviorSubject([]);

  public readonly alarms: Observable<any> = this._alarms.asObservable();

  constructor(private storage: Storage) {
    this.getAlarms().then(alarms => {
      this._alarms.next(alarms);
    });
  }

  async addAlarm({ ...settings }) {
    const alarms = await this.getAlarms();

    const alarm = {
      ...settings,
      id: v4()
    };

    alarms.push(alarm);

    this.setAlarms(alarms);
  }

  async getAlarms(): Promise<any> {
    const alarms = await this.storage.get('alarms');

    return alarms || [];
  }

  async updateAlarm(id: string) {
    const alarms = await this.getAlarms();

    this.setAlarms(alarms);
  }

  async deleteAlarm(id: string) {
    let alarms = await this.getAlarms();

    alarms = alarms.filter(alarm => alarm.id !== id);

    this.setAlarms(alarms);
  }

  private setAlarms(alarms: any) {
    // alarms.sort((prev, next) => {
    //   console.log(prev, next);

    //   const genreA = prev.time;
    //   const genreB = next.time;

    //   let comparison = 0;

    //   if (genreA & genreB) {
    //     comparison = 1;
    //   } else if (genreA & genreB) {
    //     comparison = -1;
    //   }

    //   return comparison;
    // });

    this.storage.set('alarms', alarms).then(alarms => {
      this._alarms.next(alarms);
    });
  }
}
