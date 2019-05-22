import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { FormsRoutingModule, routedComponents } from './forms-routing.module';
import { ButtonsModule } from './buttons/buttons.module';
import { ChartsModule } from '../charts/charts.module';
import { ECommerceModule } from '../e-commerce/e-commerce.module';

@NgModule({
  imports: [
    ThemeModule,
    FormsRoutingModule,
    ButtonsModule,
    ChartsModule,
    ECommerceModule
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class FormsModule { }
