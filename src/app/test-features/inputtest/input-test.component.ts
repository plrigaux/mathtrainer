import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-test',
  templateUrl: './input-test.component.html',
  styleUrls: ['./input-test.component.scss']
})
export class InputTestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  onKeydown(event: KeyboardEvent) {
    console.log(event);

    let str = `c:${event.code} k:${event.key}  ${event.isComposing} ${event.ctrlKey} `
    this.lines.unshift(str);
  }

  lines : string[] = []
}
