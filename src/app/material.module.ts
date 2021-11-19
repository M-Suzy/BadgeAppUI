import {NgModule} from "@angular/core";
import { CommonModule } from '@angular/common';
import { MatIconModule} from '@angular/material/icon';
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule} from "@angular/material/button"
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import {MatListModule} from "@angular/material/list"
import { MatToolbarModule} from "@angular/material/toolbar";
import { MatCardModule} from "@angular/material/card";


@NgModule({
  imports: [
  CommonModule,
  MatIconModule,
  MatInputModule,
  MatButtonModule,
  MatSidenavModule,
  MatTableModule,
  MatListModule,
  MatToolbarModule,
  MatCardModule
  ],
  exports: [
  CommonModule,
  MatIconModule,
  MatInputModule,
  MatButtonModule,
  MatSidenavModule,
  MatTableModule,
  MatListModule,
  MatToolbarModule,
  MatCardModule
  ],
})
export class AppMaterialModule { }