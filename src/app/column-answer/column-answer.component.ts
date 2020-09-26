import { Component, OnInit, ViewChildren, QueryList, ElementRef, ChangeDetectorRef, Input, EventEmitter, Output } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-column-answer',
  templateUrl: './column-answer.component.html',
  styleUrls: ['./column-answer.component.scss']
})
export class ColumnAnswerComponent implements OnInit {
  @ViewChildren('columninput') inputs: QueryList<ElementRef>;

  @Input() size: string;
  @Input() mode: "columns" | "normal" = null;
  @Output() value = new EventEmitter<string>();

  userInputs: string[];
  private inputchar: string;
  private userConcatInput: string = "";
  private re = /\d+/;

  constructor(private changeDetectorRef: ChangeDetectorRef,
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer) {
    console.log(`constructor this.size: ${this.size}`);

    iconRegistry.addSvgIcon(
      'delete-cross',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/delete_icon.svg'));
  }

  ngOnChanges(): void {
    //console.log(`this.size: ${this.size} type: ${typeof this.size}`)
    let size = parseInt(this.size)
    this.userInputs = new Array(size).fill("");
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    console.log(`plr: ${this.inputs.length}`)

    //the last element in the page will have focus
    /*setTimeout(() => {
      if (this.inputs.length > 0) {
        this.inputs.last.nativeElement.focus();
      }
    }, 0);
    */
  }

  modelChangeFn(change: string, idx: number) {
    console.log(`change "${change}" lenght: ${change.length} index: ${idx} curval: '${this.userInputs[idx]}'`)
    console.log(this.userInputs)

    let isClearCell = change.length == 0;

    this.changeDetectorRef.detectChanges();

    let newChange;
    if (!isClearCell) {
      let test = this.re.exec(this.inputchar)
      console.log(`test '${test}'`)
      newChange = test != null ? test[0] : "";
    } else {
      newChange = "";
    }

    console.log(`modif change' "${newChange}" lenght: ${newChange.length}`)

    if (newChange.length > 0 || isClearCell) {
      this.userInputs[idx] = newChange
    } else {
      //keep value
      let dico = this.re.exec(this.userInputs[idx])

      this.userInputs[idx] = dico != null ? dico[0] : ""
    }

    if (idx > 0) {
      if (newChange.length > 0 || isClearCell) {
        this.inputs.toArray()[idx - 1].nativeElement.focus()
      }
    } else {
      if (isClearCell) {
        let ar = this.inputs.toArray();
        ar[ar.length - 1].nativeElement.focus()
      }
    }

    this.userConcatInput = this.userInputs.join('');

    this.value.emit(this.userConcatInput);
  }

  modelChangeNormal(change: string): void {
    console.log(`change ${change} model val ${this.userConcatInput}`)

    this.userConcatInput = change;
    this.value.emit(this.userConcatInput);
  }


  check(event: KeyboardEvent): void {

    console.log(event)
    //console.log(this.userInputs)
    this.inputchar = event.key;
    console.log(`inputChar: "${this.inputchar}"`)
  }

  check2(event: KeyboardEvent, index: number): void {

    console.log(event)
    console.log(`inputChar2: "${this.inputchar}"`)

    switch (event.code) {
      case "ArrowLeft":
        if (index > 0) {
          this.inputs.toArray()[index - 1].nativeElement.focus()
        }
        break;
      case "ArrowRight":
        let ar = this.inputs.toArray();
        if (index < ar.length - 1) {
          ar[index + 1].nativeElement.focus()
        }
        break;
    }
  }

  trackByIdx(index: number, obj: any): any {
    return index;
  }

  clearInput() {
    this.userInputs.fill("");
    this.userConcatInput = "";

    if (this.inputs.last) {
      this.inputs.last.nativeElement.focus();
    }
    this.value.emit(this.userConcatInput);
  }

  testNg() {
    this.userInputs[0] = "%";
  }

  onDivFocus() {
    console.log(`On div focus`)
    if (this.inputs.length > 0) {
      this.inputs.last.nativeElement.focus();
    }
  }

  isEmpty() {
    return this.userConcatInput.length === 0;
  }
}
