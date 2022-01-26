import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'guw-search-user',
  templateUrl: './search-user.component.html',
  styles: [
  ]
})
export class SearchUserComponent implements OnInit {

  searchText: FormControl = new FormControl('');
  searching: boolean = false;

  constructor() { }

  ngOnInit(): void {

  }

  search(key: any) {
    console.log({ key });

    this.searching = false;

    if (key.keyCode === 13) {
      this.searching = true;

      console.log('search', { search: this.searchText.value });
    }
  }

}
