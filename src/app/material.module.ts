import {NgModule} from "@angular/core";
import { CommonModule } from '@angular/common';
import { MatIconModule} from '@angular/material/icon';
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule} from "@angular/material/button"
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatListModule} from "@angular/material/list"
import { MatToolbarModule} from "@angular/material/toolbar";
import { MatCardModule} from "@angular/material/card";
import {MatDialogModule} from '@angular/material/dialog';
import { MatTooltipModule } from "@angular/material/tooltip";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatRadioModule} from '@angular/material/radio';


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
  MatCardModule, 
  MatDialogModule,
  MatTooltipModule, 
  MatSnackBarModule, 
  MatRadioModule
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
  MatCardModule, 
  MatDialogModule, 
  MatTooltipModule,
  MatSnackBarModule,
  MatRadioModule
  ],
})
export class AppMaterialModule { }