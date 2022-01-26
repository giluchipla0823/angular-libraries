import { NgModule } from '@angular/core';
import { UserComponent } from './components/user/user.component';
import { SearchUserComponent } from './components/search-user/search-user.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const COMPONENTS = [
  UserComponent,
  SearchUserComponent
];

@NgModule({
  declarations: COMPONENTS,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: COMPONENTS
})
export class GithubUserWidgetModule { }
