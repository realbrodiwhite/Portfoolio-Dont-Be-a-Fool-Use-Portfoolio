import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@portfoolio/client/core/auth.guard';

import { PersonalFinanceToolsPageComponent } from './personal-finance-tools-page.component';
import { products } from './products';

const routes: Routes = [
  {
    canActivate: [AuthGuard],
    component: PersonalFinanceToolsPageComponent,
    path: '',
    title: $localize`Personal Finance Tools`
  },
  ...products
    .filter(({ key }) => {
      return key !== 'portfoolio';
    })
    .map(({ alias, component, key, name }) => {
      return {
        canActivate: [AuthGuard],
        path: $localize`open-source-alternative-to` + `-${alias ?? key}`,
        loadComponent: () =>
          import(`./products/${key}-page.component`).then(() => component),
        title: $localize`Open Source Alternative to ${name}`
      };
    })
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonalFinanceToolsPageRoutingModule {}
