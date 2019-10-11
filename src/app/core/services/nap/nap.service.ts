import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Storage } from '@ionic/storage';
import { v4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class NapService {
  private _naps: BehaviorSubject<any> = new BehaviorSubject([]);

  public readonly naps: Observable<any> = this._naps.asObservable();

  constructor(private storage: Storage) {
    this.getNaps().then(naps => {
      this._naps.next(naps);
    });
  }

  async addNap({ ...settings }) {
    const naps = await this.getNaps();

    const nap = {
      ...settings,
      id: v4()
    };

    naps.push(nap);

    this.setNaps(naps);
  }

  async getNaps(): Promise<any> {
    const naps = await this.storage.get('naps');

    return naps || [];
  }

  async updateNap(id: string) {
    const naps = await this.getNaps();

    this.setNaps(naps);
  }

  async deleteNap(id: string) {
    let naps = await this.getNaps();

    naps = naps.filter(nap => nap.id !== id);

    this.setNaps(naps);
  }

  private setNaps(naps: any) {
    this.storage.set('naps', naps).then(naps => {
      this._naps.next(naps);
    });
  }
}
