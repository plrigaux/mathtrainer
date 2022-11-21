import { Component, OnInit, LOCALE_ID, Inject } from '@angular/core';
import { MatRadioChange as MatRadioChange } from '@angular/material/radio';
import { ConfigService, ConfigServiceInfo } from './services/config.service'
import { MatCheckboxChange as MatCheckboxChange } from '@angular/material/checkbox';
import { Config, EquationOrientation, EquationOrientations } from './services/config';
import { RouterOutlet, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  previoustheme: string = null;
  //currentTheme: string = null;
  myname: string = "myname";
  config: Config;
  equationOrientations: EquationOrientation[] = EquationOrientations;
  private myEventSubscriptions: Subscription[] = [];

  public readonly themes = [
    { value: 'default-theme', label: "Default" },
    { value: 'dark-theme', label: "Dark" },
    { value: 'light-theme', label: "Light" },
    { value: 'deeppurple-amber', label: "Deep Purple & Amber" },
    { value: 'indigo-pink', label: "Indigo & Pink" },
    { value: 'pink-bluegrey', label: "Pink & Blue-grey" },
    { value: 'purple-green', label: "Purple & Green" },
    { value: 'candy', label: "Pumpkin" },
  ]

  readonly localesList = [
    { code: 'en-US', label: 'English' },
    { code: 'fr', label: 'Français' }
  ]

  localeLabel : string;

  constructor(private configSrv: ConfigService, private router: Router,  @Inject(LOCALE_ID) public locale: string) {
 
    this.localeLabel = this.localesList.find(loc => loc.code == this.locale).label
  }

  ngOnInit(): void {
    this.myEventSubscriptions.push(this.configSrv.subscribe({
      next: (cfgi : ConfigServiceInfo) => {
        this.config = cfgi.config;
        this.setTheme();
      }
    }));
  }

  ngOnDestroy(): void {
    this.myEventSubscriptions.forEach(subscription => subscription.unsubscribe());
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

  getAnimationData(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  goHome(): void {
    this.router.navigate(['/']);
  }

  goMultiplicationTable(): void {
    this.router.navigate(['/multiplicationtable']);
  }

  goAdditionTable(): void {
    this.router.navigate(['/additiontable']);
  }
}
