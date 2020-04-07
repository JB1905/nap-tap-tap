import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Storage } from '@ionic/storage';
import { v4 } from 'uuid';

import { Nap } from '../../models/nap.model';

@Injectable({
  providedIn: 'root',
})
export class NapService {
  private _naps: BehaviorSubject<Array<Nap>> = new BehaviorSubject([]);

  public readonly naps: Observable<Array<Nap>> = this._naps.asObservable();

  constructor(private storage: Storage) {
    this.getNaps().then((naps) => {
      this._naps.next(naps);
    });
  }

  async addNap({ ...settings }: Omit<Nap, 'id'>) {
    const naps = await this.getNaps();

    const nap = {
      ...settings,
      id: v4(),
    };

    naps.push(nap);

    this.setNaps(naps);
  }

  async getNaps(): Promise<Array<Nap>> {
    const naps = await this.storage.get('naps');

    return naps || [];
  }

  async updateNap(id: string, settings: Omit<Nap, 'id'>) {
    const naps = await this.getNaps();

    this.setNaps(naps);
  }

  async deleteNap(id: string) {
    let naps = await this.getNaps();

    naps = naps.filter((nap) => nap.id !== id);

    this.setNaps(naps);
  }

  private setNaps(naps: Array<Nap>) {
    this.storage.set('naps', naps).then((naps) => {
      this._naps.next(naps);
    });
  }
}
