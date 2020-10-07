import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {

  constructor() { }

  progress: number
  @Input() totalCount: number
  @Input() progressCount: number

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.totalCount !== 0) {
      this.progress = Math.round((this.progressCount / this.totalCount) * 100);
    }
  }
}