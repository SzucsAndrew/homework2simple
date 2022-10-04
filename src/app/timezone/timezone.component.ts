import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-timezone',
  templateUrl: './timezone.component.html',
  styleUrls: ['./timezone.component.css']
})
export class TimezoneComponent implements OnInit {
  @Input() currentTimezone! : string;
  @Input() isCurrentTimezone! : boolean;
  @Output() activityChange = new EventEmitter<boolean>();

  isDisabled = false;
  currentDatetime! : string;

  ngOnInit(): void {
    this.updateTime();
    this.isDisabled = this.isCurrentTimezone;
  }

  updateTime() {
    this.currentDatetime = this.getTime();
  }

  getTime() : string{
    return new Date().toLocaleString('hu-HU', {timeZone: this.currentTimezone});
  }

  setSettingsEnabled()
  {
    this.isDisabled = false;
    this.activityChange.emit(true);
  }

  setSettingsDisabled(){
    this.isDisabled = true;
    this.activityChange.emit(false);
  }
}
