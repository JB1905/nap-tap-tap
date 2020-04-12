import { Component, OnInit } from '@angular/core';

import { NapService } from '../core/services/nap/nap.service';

@Component({
  selector: 'app-statistics',
  templateUrl: 'statistics.page.html',
  styleUrls: ['statistics.page.scss'],
})
export class StatisticsPage implements OnInit {
  naps = [];

  constructor(private napService: NapService) {}

  ngOnInit() {
    this.napService.naps.subscribe((naps) => {
      this.naps = naps;
    });
  }
}
