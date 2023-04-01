import { Component } from '@angular/core';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent {
  faAngleDown = faAngleDown; 
}
