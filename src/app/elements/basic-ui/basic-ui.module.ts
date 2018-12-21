import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicUiRoutingModule } from './basic-ui-routing.module';
import { ButtonComponent } from './button/button.component';
import { SelectComponent } from './select/select.component';
import { PannelComponent } from './pannel/pannel.component';

@NgModule({
  imports: [
    CommonModule,
    BasicUiRoutingModule
  ],
  declarations: [ButtonComponent, SelectComponent, PannelComponent]
})
export class BasicUiModule { }
