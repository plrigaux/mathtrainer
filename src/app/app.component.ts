import { Component, OnInit } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';
import { ResetService} from './reset.service';
import { ConfigService } from './config.service'
import { MatCheckboxChange } from '@angular/material/checkbox';
import { Config, OrientationTypesKey, EquationOrientation, EquationOrientations} from './config';

const MQ_THEME: string = "MQ_THEME";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Trainer for Camellia';
  previoustheme: string = null;
  currentTheme: string = null;
  myname: string = "myname";
  realtimeValidation : boolean;

  equationOrientations : EquationOrientation[] = EquationOrientations;
  selectedEquationOrientation: OrientationTypesKey;

  public readonly themes = [
    { value: 'default-theme', label: "Default" },
    { value: 'dark-theme', label: "Dark" },
    { value: 'light-theme', label: "Light" },
    { value: 'deeppurple-amber', label: "Deep Purple & Amber" },
    { value: 'indigo-pink', label: "Indigo & Pink" },
    { value: 'pink-bluegrey', label: "Pink & Blue-grey" },
    { value: 'purple-green', label: "Purple & Green" },
  ]

  constructor(private resetService : ResetService, private configSrv : ConfigService) {
    let currentThemeStorage = localStorage.getItem(MQ_THEME);

    this.currentTheme = (currentThemeStorage == null) ? null : JSON.parse(currentThemeStorage);
    console.log(`MQ_THEME json ${currentThemeStorage}  val: ${this.currentTheme}`);
    this.setTheme();
  }

  ngOnInit(): void {
    this.configSrv.subscribe({
      next : cfg => {
        this.selectedEquationOrientation = cfg.orientation;
        this.realtimeValidation = cfg.realTimeValidation;
      }
    })
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
    //this.currentTheme = event.value
    this.setTheme();
  }

  realtimeValidationChange(event:MatCheckboxChange) {

  }

  menuEquationOrientationChange() {

  }

  reset() {
    console.log("RESET");
    this.resetService.obs.next();    
  }
}
