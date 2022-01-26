import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../interfaces/user.interface';
import { USER_API } from '../../constants/user';
import { SearchUserService } from '../../services/search-user.service';

@Component({
  selector: 'guw-user',
  templateUrl: './user.component.html',
  styles: [
  ]
})
export class UserComponent implements OnInit {

  @Input() search: string = '';
  user: User | undefined;

  constructor(
    private searchUserService: SearchUserService
  ) { }

  async ngOnInit() {
    if (!this.search) {
      this.user = USER_API
    } else {
      this.user = await this.searchUserService.getUser(this.search);
    }
  }
}
