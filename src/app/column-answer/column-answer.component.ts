import { Component, OnInit, ViewChildren, QueryList, ElementRef } from '@angular/core';


@Component({
  selector: 'app-column-answer',
  templateUrl: './column-answer.component.html',
  styleUrls: ['./column-answer.component.scss']
})
export class ColumnAnswerComponent implements OnInit {
  @ViewChildren('columninput') inputs: QueryList<ElementRef>;


  userInputs: string[] = ["", "", "", ""];

  userConcatInput: string

  test = 1

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    console.log(`plr: ${this.inputs.length}`)
    this.inputs.last.nativeElement.focus();
  }

  modelChangeFn(change, idx: number) {
    console.log("idx" + idx)
    console.log(change)
    console.log(this.userInputs)

    this.userInputs[idx] = change;
    console.log(this.userInputs)

    if (idx > 0) {
      this.inputs.toArray()[idx - 1].nativeElement.focus()
    }
  }

  check(event: KeyboardEvent): void {

    //console.log(inputIndex)
    //console.log(this.userInputs)
    this.test++;
  }

  trackByIdx(index: number, obj: any): any {
    return index;
  }

  clear() {
    this.userInputs.fill("");
    this.inputs.last.nativeElement.focus();
  }
}
