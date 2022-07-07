import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutComponent } from './components/layout/layout.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { BoxContainerComponent } from './components/box-container/box-container.component';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LayoutComponent,
    NavbarComponent,

    HeaderComponent,
    DropdownComponent,
    BoxContainerComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatIconModule,
    MatInputModule,

    MatCardModule,
    MatButtonModule,
    MatSelectModule,
    RouterModule.forChild([])
  ],
  exports: [LayoutComponent, HeaderComponent, DropdownComponent]
})
export class SharedModule {}
