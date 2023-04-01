import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-locationdropdown',
  templateUrl: './locationdropdown.component.html',
  styleUrls: ['./locationdropdown.component.css']
})
export class LocationdropdownComponent {
  @Input() show!: boolean;
}
