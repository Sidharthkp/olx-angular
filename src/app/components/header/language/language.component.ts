import { Component } from '@angular/core';
import { faAngleDown, faBell } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent {
  faAngleDown = faAngleDown;
  faBell = faBell;

  text = "English";
}
