import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-dropdown',
  templateUrl: './custom-dropdown.component.html',
  styleUrls: ['./custom-dropdown.component.scss']
})
export class CustomDropdownComponent implements OnInit {
  @Input() dropdownData: Array<any> = [];
  @Input() isShowDropdown = false;

  @Output() selectOptions: EventEmitter<any> = new EventEmitter();

  selectedItems: Array<any>;

  constructor() { }

  ngOnInit(): void {
  }

  showDropdownData() {
    this.isShowDropdown = true;
  }

  onSelectedValueChange(e) {
    this.selectOptions.emit(this.selectedItems);
  }

  onClickOutside(e) {
    this.isShowDropdown = false;
  }
}
