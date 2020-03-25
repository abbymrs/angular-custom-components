import { Component, OnInit, forwardRef, Input, Output, EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-custom-searchable-text',
  templateUrl: './custom-searchable-text.component.html',
  styleUrls: ['./custom-searchable-text.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomSearchableTextComponent),
      multi: true
    }
  ]
})
export class CustomSearchableTextComponent implements OnInit {
  searchInput: string;

  @Input() placeholder = 'key word';
  @Output() searchKeyWord: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onInputChange(e) {
    this.onChange(e);
    this.searchKeyWord.emit(e);
  }

  resetInputValue(value: string) {
    this.searchInput = value;
  }

  clearInput() {
    this.resetInputValue('');
    this.searchKeyWord.emit('');
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
