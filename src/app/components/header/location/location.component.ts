import { Component, Output, EventEmitter, Input } from '@angular/core';
import { faAngleDown, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent {
  faAngleDown = faAngleDown;
  faMagnifyingGlass = faMagnifyingGlass;

  @Input() rotate!: boolean
  @Output() btnClick = new EventEmitter();

  text = "India";

  onClick() {
    this.btnClick.emit()
  }
}
