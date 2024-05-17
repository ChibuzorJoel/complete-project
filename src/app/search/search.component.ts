import { Component, EventEmitter, Output, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchText: string = '';
@Output()
  searchTextChanged: EventEmitter<string>= new EventEmitter<string>()
 @ViewChild('searchInput') searchInputEl: ElementRef;
  onSearchTextChanged(){
    this.searchTextChanged.emit(this.searchText)
  }
  updateSearchText(){
   this.searchText= this.searchInputEl.nativeElement.value;
   this.searchTextChanged.emit(this.searchText);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
