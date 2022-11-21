import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MathQuestionComponent } from './math-question/math-question.component';
import { ProblemPanelComponent } from './problem-panel/problem-panel.component';
import { ProblemPanelComponentDialog } from './problem-panel/problem-panel.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfigDialogOpenerComponent } from './config-dialog-opener/config-dialog-opener.component';
import { ConfigDialogComponent } from './config-dialog/config-dialog.component';
import { ConfigService } from './services/config.service';

import { A11yModule } from '@angular/cdk/a11y';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PortalModule } from '@angular/cdk/portal';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';
import { MatAutocompleteModule as MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule as MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule as MatCardModule } from '@angular/material/card';
import { MatCheckboxModule as MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule as MatChipsModule } from '@angular/material/chips';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule as MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule as MatInputModule } from '@angular/material/input';
import { MatListModule as MatListModule } from '@angular/material/list';
import { MatMenuModule as MatMenuModule } from '@angular/material/menu';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatPaginatorModule as MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule as MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule as MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule as MatRadioModule } from '@angular/material/radio';
import { MatSelectModule as MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule as MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule as MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule as MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule as MatTableModule } from '@angular/material/table';
import { MatTabsModule as MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule as MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';
import { ConfigDialogRangesComponent } from './config-dialog-ranges/config-dialog-ranges.component';
import { FormPanelComponent } from './form-panel/form-panel.component';
import { WorkoutPanelComponent } from './workout-panel/workout-panel.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ArrayFilterPipe } from './array-filter.pipe';
import { TestFeaturesComponent } from './test-features/test-features.component';
import { ColumnAnswerComponent } from './column-answer/column-answer.component';
import { DisplayTestComponent } from './test-features/display-test/display-test.component';
import { InputTestComponent } from './test-features/inputtest/input-test.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { MainTabsSeriesComponent } from './main-page/main-tabs-series/main-tabs-series.component';
import { MultiplicationTableComponent } from './multiplication-table/multiplication-table.component';
import { TestPaletteComponent } from './test-features/test-palette/test-palette.component';
import { MainTabsProgramsComponent } from './main-page/main-tabs-programs/main-tabs-programs.component';
import { MainButtonsComponent } from './main-page/main-buttons/main-buttons.component';

@NgModule({
  declarations: [
    AppComponent,
    MathQuestionComponent,
    ProblemPanelComponent,
    ConfigDialogOpenerComponent,
    ConfigDialogComponent,
    ConfigDialogRangesComponent,
    FormPanelComponent,
    WorkoutPanelComponent,
    PageNotFoundComponent,
    MainPageComponent,
    ArrayFilterPipe,
    TestFeaturesComponent,
    ColumnAnswerComponent,
    DisplayTestComponent,
    InputTestComponent,
    ProgressBarComponent,
    MainTabsSeriesComponent,
    MultiplicationTableComponent,
    TestPaletteComponent,
    MainTabsProgramsComponent,
    ProblemPanelComponentDialog,
    MainButtonsComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    A11yModule,
    ClipboardModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    PortalModule,
    ScrollingModule,
  ],
  providers: [ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
