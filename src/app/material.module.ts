import {NgModule} from "@angular/core";
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule} from "@angular/material/button"


@NgModule({
  imports: [
  CommonModule, 
  MatIconModule, 
  MatInputModule, 
  MatButtonModule
  ],
  exports: [
  CommonModule,
  MatIconModule,
  MatInputModule,
  MatButtonModule 
  ],
})
export class AppMaterialModule { }