import { Component } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';

const MQ_THEME : string = "MQ_THEME";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Trainer for Camellia';
  previoustheme: string = null;
  currentTheme: string = null;
  myname: string = "myname"

  public themes = [
    { value: 'default-theme', label: "Default" },
    { value: 'dark-theme', label: "Dark" },
    { value: 'light-theme', label: "Light" },
    { value: 'deeppurple-amber', label: "Deep Purple & Amber" },
    { value: 'indigo-pink', label: "Indigo & Pink" },
    { value: 'pink-bluegrey', label: "Pink & Blue-grey" },
    { value: 'purple-green', label: "Purple & Green" },
  ]

  constructor() { 
    let currentThemeStorage = localStorage.getItem(MQ_THEME);

    this.currentTheme = (currentThemeStorage == null)? null : JSON.parse(currentThemeStorage);
    console.log(`MQ_THEME json ${currentThemeStorage}  val: ${this.currentTheme}`);
    this.setTheme();
  }

  setTheme() {
    document.body.classList.remove(this.previoustheme);
    document.body.classList.add(this.currentTheme);
    this.previoustheme = this.currentTheme;
    localStorage.setItem(MQ_THEME, JSON.stringify(this.currentTheme));
  }

  menuThemeRadioChange(event: MatRadioChange) {
    console.log(event);
    //console.log(`currentTheme: ${this.currentTheme}`);
    this.currentTheme = event.value
    this.setTheme();
  }
}
