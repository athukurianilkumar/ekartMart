import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  standalone: false,
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})


export class FilterComponent {
  @Input()
  all: number = 0;
  @Input()
  inStock: number = 0;
  @Input()
  outOfStock: number = 0;



  @Output()
  selectedFilterRadioBtnChanged : EventEmitter<string> = new EventEmitter<string>();

  selectedFilterRadioButton: string = 'all';

  onselectedFilterRadioBtnChanged() {
      this.selectedFilterRadioBtnChanged.emit(this.selectedFilterRadioButton)
  }

}