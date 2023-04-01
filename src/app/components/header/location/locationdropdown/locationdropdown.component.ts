import { Component } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-locationdropdown',
  templateUrl: './locationdropdown.component.html',
  styleUrls: ['./locationdropdown.component.css']
})
export class LocationdropdownComponent {
  showDropDown!: boolean;
  subscription!: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe((value) => (this.showDropDown = value));
  }

}
