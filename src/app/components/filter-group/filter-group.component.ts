import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter-group',
  templateUrl: './filter-group.component.html',
  styleUrls: ['./filter-group.component.scss']
})
export class FilterGroupComponent implements OnInit {

  @Input() dropdownData: Array<any>;
  @Input() searchResults: Array<any>;
  @Input() searchInput: string;

  @Output() selectOptions: EventEmitter<any> = new EventEmitter();
  @Output() searchKeyWord: EventEmitter<any> = new EventEmitter();
  @Output() showDefaultList: EventEmitter<any> = new EventEmitter();

  selectedData: Array<any>;

  constructor() { }

  ngOnInit(): void {
  }

  onSearch(event) {
    this.searchKeyWord.emit(event);
  }

  onSelectOptions(e) {
    this.selectedData = e;
    this.selectOptions.emit(e);
  }

  onShowDefaultList(e) {
    this.showDefaultList.emit(e);
  }

}
