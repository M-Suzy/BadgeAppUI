import {NgModule} from "@angular/core";
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import { MatInputModule } from "@angular/material/input";


@NgModule({
  imports: [
  CommonModule, 
  MatIconModule, 
  MatInputModule
  ],
  exports: [
  CommonModule,
  MatIconModule,
  MatInputModule, 
   ],
})
export class AppMaterialModule { }