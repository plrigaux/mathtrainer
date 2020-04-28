import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Trainer for Camellia';

  constructor() { }

  private previoustheme: string = null;

  onSetTheme(theme) {
    document.body.classList.remove(this.previoustheme);
    document.body.classList.add(theme);
    this.previoustheme = theme;
  }
}
