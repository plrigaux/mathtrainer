import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  constructor(private router: Router) {

  }

  ngOnInit(): void {
  }

  goToProblems() {
    this.router.navigate(['/problems']);
  }

  goToWorkout() {
    this.router.navigate(['/workout']);
  }
}
