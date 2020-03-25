import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';

import { AppComponent } from './app.component';
import { UserListComponent } from './layout/user-list/user-list.component';
import { CustomSearchableTextComponent } from './components/custom-searchable-text/custom-searchable-text.component';
import { CustomSearchableDropdownComponent } from './components/custom-searchable-dropdown/custom-searchable-dropdown.component';
import { CustomDropdownComponent } from './components/custom-dropdown/custom-dropdown.component';
import { ClickOutsideDirective } from './directives/click-outside.directive';
import { FilterGroupComponent } from './components/filter-group/filter-group.component';
import { CustomInputComponent } from './components/custom-input/custom-input.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    CustomSearchableTextComponent,
    CustomSearchableDropdownComponent,
    CustomDropdownComponent,
    ClickOutsideDirective,
    FilterGroupComponent,
    CustomInputComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    CheckboxModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
