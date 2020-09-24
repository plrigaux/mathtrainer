import { Component, OnInit, ViewChildren, QueryList, ElementRef, ChangeDetectorRef, Input } from '@angular/core';


@Component({
  selector: 'app-column-answer',
  templateUrl: './column-answer.component.html',
  styleUrls: ['./column-answer.component.scss']
})
export class ColumnAnswerComponent implements OnInit {
  @ViewChildren('columninput') inputs: QueryList<ElementRef>;

  @Input() size: string
  userInputs: string[];
  inputchar: string;
  userConcatInput: string
  re = /\d+/

  constructor(private cdRef: ChangeDetectorRef) {
    console.log(`constructor this.size: ${this.size}`)
  }

  ngOnChanges(): void {
    console.log(this.userInputs)
    console.log(`this.size: ${this.size}`)

    this.userInputs = new Array(parseInt(this.size));
    console.log(this.userInputs)
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    console.log(`plr: ${this.inputs.length}`)

    //the last element in the page will have focus
    setTimeout(() => {
      this.inputs.last.nativeElement.focus();
    }, 0);
  }

  modelChangeFn(change: string, idx: number) {
    console.log("index: " + idx)
    console.log(`change "${change}" l: ${change.length}`)
    console.log(this.userInputs)

    this.cdRef.detectChanges();

    let test = this.re.exec(this.inputchar)
    console.log(`test '${test}'`)

    change = test != null ? test[0] : "";

    console.log(`change' "${change}" l: ${change.length}`)

    if (change.length > 0) {
      this.userInputs[idx] = change
    } else {
      //keep value
      let dico = this.re.exec(this.userInputs[idx])

      this.userInputs[idx] = dico != null ? dico[0] : ""
    }

    if (idx > 0 && change.length > 0) {
      this.inputs.toArray()[idx - 1].nativeElement.focus()
    }
  }

  check(event: KeyboardEvent): void {

    console.log(event)
    //console.log(this.userInputs)
    this.inputchar = event.key;
    console.log(`inputChar: "${this.inputchar}"`)
  }

  trackByIdx(index: number, obj: any): any {
    return index;
  }

  clear() {
    this.userInputs.fill("");
    this.inputs.last.nativeElement.focus();
  }

  testNg() {
    this.userInputs[0] = "%";
  }

}
