import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchText: string = ""

  @ViewChild('seachInput') 
  searchInputEl: ElementRef

  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  updateSearchText() {
    this.searchText = this.searchInputEl.nativeElement.value
    this.searchTextChanged.emit(this.searchText);
  }
}
