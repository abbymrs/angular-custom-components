import { Component, OnInit, forwardRef, Input, Output, EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-custom-searchable-dropdown',
  templateUrl: './custom-searchable-dropdown.component.html',
  styleUrls: ['./custom-searchable-dropdown.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomSearchableDropdownComponent),
      multi: true
    }
  ]
})
export class CustomSearchableDropdownComponent implements OnInit {

  searchInput: string;
  isShowDropdown = false;
  selectedOtion: string;

  @Input() searchResults: Array<any>;
  @Input() placeholder = 'Please input keyword here';

  @Output() searchKeyWord: EventEmitter<any> = new EventEmitter();
  @Output() showDefaultList: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onInputChange(e) {
    this.onChange(e);
    this.searchKeyWord.emit(e);
  }

  onShowDefaultList() {
    this.searchKeyWord.emit('');
    this.showDefaultList.emit(null);
    this.setInputValue('');
    this.isShowDropdown = true;
  }

  selectItem(item, e) {
    this.selectedOtion = item;
    this.isShowDropdown = false;
    this.setInputValue(item);
    this.searchKeyWord.emit(null);
    e.stopPropagation();
  }

  clearInput(e) {
    this.setInputValue('');
    this.searchKeyWord.emit(null);
    this.isShowDropdown = false;
    this.selectedOtion = '';
    e.stopPropagation();
  }

  onClickOutside(e) {
    this.isShowDropdown = false;
    this.setInputValue(this.selectedOtion);
  }

  setInputValue(value: string) {
    this.searchInput = value;
    this.onChange(value);
  }

  // overwrite
  onTouched: () => void = () => { };

  onChange: (_: any) => void = (_: any) => { };

  writeValue(value: any): void {
    if (value !== undefined) {
      this.searchInput = value;
    }
  }

  // /**
  //  * Registers a callback function that should be called when the control's value changes in the UI.
  //  * @param fn
  //  */
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  // /**
  //  * Registers a callback function that should be called when the control receives a blur event.
  //  * @param fn
  //  */
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
