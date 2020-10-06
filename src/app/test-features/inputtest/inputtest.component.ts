import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inputtest',
  templateUrl: './inputtest.component.html',
  styleUrls: ['./inputtest.component.scss']
})
export class InputtestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.lines.push("test1")
    this.lines.push("test2")
  }

  onKeydown(event: KeyboardEvent) {
    console.log(event);

    let str = `${event.code} ${event.key}  ${event.isComposing} ${event.ctrlKey} `
    this.lines.unshift(str);
  }

  lines : string[] = []
}
