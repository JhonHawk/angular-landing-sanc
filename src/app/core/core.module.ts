import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialItemsModule } from './material-items.module';



@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialItemsModule
  ],
  exports: [
    NavbarComponent,
    MaterialItemsModule
  ]
})
export class CoreModule { }
