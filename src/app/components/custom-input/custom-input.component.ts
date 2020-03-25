import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss']
})
export class CustomInputComponent implements OnInit {

  @Input() item: any;
  @Input() searchInput: string;
  @Input() searchResults: Array<any>;

  @Output() searchKeyWord: EventEmitter<any> = new EventEmitter();
  @Output() showDefaultList: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  onSearch(e) {
    this.searchKeyWord.emit(e);
  }

  onShowDefaultList(e) {
    this.showDefaultList.emit(e);
  }
}
