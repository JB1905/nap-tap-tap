import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'alarms',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../alarms/alarms.module').then((m) => m.AlarmsPageModule),
          },
        ],
      },
      {
        path: 'statistics',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../statistics/statistics.module').then(
                (m) => m.StatisticsPageModule
              ),
          },
        ],
      },
      {
        path: '',
        redirectTo: '/alarms',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/alarms',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
