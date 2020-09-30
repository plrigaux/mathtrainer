import { Component, OnInit, ViewChildren, QueryList, ElementRef, ChangeDetectorRef, Input, EventEmitter, Output, SimpleChanges } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { QuestionStatus } from '../math-question.service';
import { trigger, transition, state, animate, style, keyframes } from '@angular/animations';

@Component({
  selector: 'app-column-answer',
  templateUrl: './column-answer.component.html',
  styleUrls: ['./column-answer.component.scss'],
  animations: [
    trigger('answerStatus', [
      state(QuestionStatus.RIGHT, style({ backgroundColor: 'limegreen' })),
      state(QuestionStatus.WRONG, style({ backgroundColor: 'red' })),
      state(QuestionStatus.EMPTY, style({ backgroundColor: 'white' })),
      state(QuestionStatus.FOCUS, style({ backgroundColor: 'lightyellow' })),
    ])
  ],
})
export class ColumnAnswerComponent implements OnInit {
  @ViewChildren('columninput') inputs: QueryList<ElementRef>;

  @Input() readonly size: number;
  @Input() readonly mode: ColumnAnswerMode = null;
  @Input() readonly answerStatus: QuestionStatus;
  @Input() value: string = "";
  @Output() valueChange = new EventEmitter<string>();
  @Output() focusChange = new EventEmitter<boolean>();
  private inFocus = false;


  columnAnswerMode = ColumnAnswerMode;
  userInputs: string[] = null;
  private inputchar: string;
  private re = /\d+/;

  constructor(private changeDetectorRef: ChangeDetectorRef,
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer) {
    console.log(`constructor this.size: ${this.size}`);

    iconRegistry.addSvgIcon(
      'delete-cross',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/delete_icon.svg'));
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(`ngOnChanges this.size: ${this.size} type: ${typeof this.size}`)
    console.log(changes)
    //let size = parseInt(this.size)

    if (this.mode == ColumnAnswerMode.COLUMNS) {
      if (this.userInputs == null) {
        this.userInputs = new Array(this.size)
      }

      if (changes['value']) {
        if (!this.value || this.value == "") {
          this.userInputs.fill("");
        } else {
          for (let i = this.userInputs.length - 1, j = this.value.length - 1; i >= 0; i--, j--) {
            if (j >= 0) {
              this.userInputs[i] = this.value[j]
            } else {
              this.userInputs[i] = ""
            }
          }
        }
      }
    }
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    console.log(`plr: ${this.inputs.length}`)
  }

  modelChangeFn(change: string, idx: number) {
    console.log(`change "${change}" lenght: ${change.length} index: ${idx} curval: '${this.userInputs[idx]}'`)
    console.log(this.userInputs)

    let isClearCell = change.length == 0;

    this.changeDetectorRef.detectChanges();

    let newChange: string;
    if (!isClearCell) {
      let test = this.re.exec(this.inputchar)
      console.log(`test '${test}'`)
      newChange = test != null ? test[0] : "";
    } else {
      newChange = "";
    }

    console.log(`modif change' "${newChange}" lenght: ${newChange.length}`)

    if (newChange.length > 0 || isClearCell) {
      this.setUserInputs(newChange, idx);
    } else {
      //keep value
      let dico = this.re.exec(this.userInputs[idx])
      newChange = dico != null ? dico[0] : "";
      this.setUserInputs(newChange, idx);
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

    this.value = this.userInputs.join('');

    this.valueChange.emit(this.value);
  }

  private setUserInputs(val: string, idx: number) {
    this.userInputs[idx] = val;
    for (let i = idx + 1; i < this.userInputs.length; i++) {
      if (this.userInputs[i] == null || this.userInputs[i] == "") {
        this.userInputs[i] = "0"
      }
    }
  }

  modelChangeNormal(change: string): void {
    console.log(`change ${change} model val ${this.value}`)

    this.value = change;
    this.valueChange.emit(this.value);
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
          this.inputs.toArray()[index - 1].nativeElement.focus();
        }
        break;
      case "ArrowRight":
        let ar = this.inputs.toArray();
        if (index < ar.length - 1) {
          ar[index + 1].nativeElement.focus();
          /*  setTimeout( () => {
              ar[index + 1].nativeElement.select();
            });
           */
        }
        break;
    }
  }

  trackByIdx(index: number, obj: any): any {
    return index;
  }

  clearInput() {
    if (this.userInputs) {
      this.userInputs.fill("");
    }
    this.value = "";

    if (this.inputs.last) {
      this.inputs.last.nativeElement.focus();
    }
    this.valueChange.emit(this.value);
  }

  onDivFocus() {
    console.log(`On div focus`)
    if (this.inputs.length > 0) {
      this.inputs.last.nativeElement.focus();
    }
  }

  onDivBlur() {
    console.log("on Div Blur");
  }

  isEmpty() {
    return this.value == null || this.value.length === 0;
  }

  onFocusColumns(e: FocusEvent, index: number) {
    console.log(`onFocusColumns ${index}`)
    //console.log(e);
    //console.log(typeof (e));
    //this.answerStatus = QuestionStatus.FOCUS;
    setTimeout(() => {
      if (this.value && this.value.length > 0)
        (e.target as any).select();
    });
    this.focusChange.emit(true);
  }

  onBlurColumns(e: any, index: number) {
    console.log(`onBlurColumns ${index}`)
    //console.log(e)
    //console.log(typeof e)
    this.focusChange.emit(false);
  }

  onFocusSimple(e: FocusEvent) {
    this.focusChange.emit(true);
  }

  onBlurSimple(e: FocusEvent) {
    this.focusChange.emit(false);
  }

  focus() {
    this.onDivFocus();
  }
}

export enum ColumnAnswerMode {
  COLUMNS = "COLUMNS",
  NORMAL = "NORMAL"
}