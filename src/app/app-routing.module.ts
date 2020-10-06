import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkoutPanelComponent } from './workout-panel/workout-panel.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProblemPanelComponent } from './problem-panel/problem-panel.component';
import { MainPageComponent } from './main-page/main-page.component';
import { TestFeaturesComponent } from './test-features/test-features.component';
import { DisplayTestComponent } from './test-features/display-test/display-test.component';
import { InputtestComponent } from './test-features/inputtest/inputtest.component';

const appRoutes: Routes = [
  { path: 'workout', component: WorkoutPanelComponent },
  { path: 'problems', component: ProblemPanelComponent },
  { path: 'test', component: TestFeaturesComponent },
  { path: 'test1', component: InputtestComponent },
  { path: 'test2', component: DisplayTestComponent },
  { path: '', component: MainPageComponent},
  { path: '**', component: PageNotFoundComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { enableTracing: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
