import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showDropDown: boolean = false;
  private subject = new Subject<any>();

  constructor() { }

  toggleAddTask(): void {
    this.showDropDown = !this.showDropDown;
    this.subject.next(this.showDropDown);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
