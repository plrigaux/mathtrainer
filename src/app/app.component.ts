import { Component, OnInit } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';
import { ResetService } from './reset.service';
import { ConfigService } from './config.service'
import { MatCheckboxChange } from '@angular/material/checkbox';
import { Config, OrientationTypesKey, EquationOrientation, EquationOrientations } from './config';
import { RouterOutlet, Router } from '@angular/router';

//const MQ_THEME: string = "MQ_THEME";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Trainer for Camellia';
  previoustheme: string = null;
  //currentTheme: string = null;
  myname: string = "myname";
  config: Config;
  equationOrientations: EquationOrientation[] = EquationOrientations;

  public readonly themes = [
    { value: 'default-theme', label: "Default" },
    { value: 'dark-theme', label: "Dark" },
    { value: 'light-theme', label: "Light" },
    { value: 'deeppurple-amber', label: "Deep Purple & Amber" },
    { value: 'indigo-pink', label: "Indigo & Pink" },
    { value: 'pink-bluegrey', label: "Pink & Blue-grey" },
    { value: 'purple-green', label: "Purple & Green" },
  ]

  constructor(private resetService: ResetService, private configSrv : ConfigService, private router: Router) {

  }

  ngOnInit(): void {
    this.configSrv.subscribe({
      next: cfgi => {
        this.config = cfgi.config;
        this.setTheme();
      }
    })
  }

  setTheme() {
    if (this.previoustheme == this.config.theme) {
      return;
    }

    document.body.classList.remove(this.previoustheme);
    document.body.classList.add(this.config.theme);
    this.previoustheme = this.config.theme;
  }

  menuThemeRadioChange(event: MatRadioChange) {
    console.log(event);
    //console.log(`currentTheme: ${this.currentTheme}`);
    //this.currentTheme = event.value
    this.configSrv.next(this.config, false);
    this.setTheme();
  }

  realTimeValidationChange(event: MatCheckboxChange) {
    this.configSrv.next(this.config, false);
  }

  menuEquationOrientationChange() {
    this.configSrv.next(this.config, false);
  }

  reset() {
    console.log("RESET");
    this.resetService.obs.next();
  }

  getAnimationData(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  goHome() : void {
    this.router.navigate(['/']);
  }
}
