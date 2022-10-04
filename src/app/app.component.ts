import { Component, ViewChild } from '@angular/core';
import { TimezoneComponent } from './timezone/timezone.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('first') timezoneComponent1! : TimezoneComponent;
  @ViewChild('second') timezoneComponent2! : TimezoneComponent;

  title = 'Homework2 Simple';

  timezone1 = "Europe/Budapest";
  isTimezone1Current = false;
  
  timezone2 = "Australia/Lord_Howe";
  isTimezone2Current = true;

  setFirstTimezoneSettingsEnabled(isSecondSettingsEnabled : boolean){
    if(!isSecondSettingsEnabled) {
      this.timezoneComponent1.setSettingsEnabled();
    }
  }

  setSecondTimezoneSettingsEnabled(isFirstSettingsEnabled : boolean){
    if(!isFirstSettingsEnabled) {
      this.timezoneComponent2.setSettingsEnabled();
    }
  }
}
