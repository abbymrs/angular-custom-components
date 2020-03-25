import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  searchInput = '';
  searchResults: Array<any> = [];
  defaultList = [
    {
      type: 'text',
      label: 'angular',
      placeholder: 'angular'
    },
    {
      type: 'dropdown',
      label: 'react',
      placeholder: 'react'
    },
    {
      type: 'dropdown',
      label: 'vue',
      placeholder: 'vue'
    },
    {
      type: 'text',
      label: 'backbone',
      placeholder: 'backbone'
    },
    {
      type: 'text',
      label: 'knockout',
      placeholder: 'knockout'
    },
  ];
  dropdownData = this.defaultList;

  constructor() { }

  ngOnInit(): void {
  }

  onSearch(event) {
    this.searchResults.length = 0;

    if (event) {
      this.defaultList.forEach((item) => {
        if (item.label.indexOf(event) > -1) {
          this.searchResults.push(item);
        }
      });
    } else if (event === '') {
      this.searchResults = [...this.defaultList];
    }
  }

  onSelectOptions(e) {
    console.log(e);
  }

  onShowDefaultList(e) {
    this.searchResults = this.defaultList;
  }
}
