import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { User } from '../../interfaces/user.interface';
import { USER_API } from '../../constants/user';
import { SearchUserService } from '../../services/search-user.service';

@Component({
  selector: 'guw-user',
  templateUrl: './user.component.html',
  styles: [
  ]
})
export class UserComponent implements OnInit, OnChanges {

  @Input() search: string = '';
  user: User | undefined;

  constructor(
    private searchUserService: SearchUserService
  ) { }

  async ngOnInit() {
    /* if (!this.search) {
      this.user = USER_API
    } else {
      this.user = await this.searchUserService.getUser(this.search);

      console.log({ user: this.user, search: this.search });
    } */
  }

  async ngOnChanges(changes: SimpleChanges) {
      /* console.log('ngOnChanges'); */

      if (!this.search) {
        this.user = USER_API
      } else {
        this.user = await this.searchUserService.getUser(this.search);
  
        console.log({ user: this.user, search: this.search });
      }
  }

}
