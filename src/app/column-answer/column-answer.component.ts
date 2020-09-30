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
  @Input() readonly id: string = "";
  @Input() value: string = "";
  @Output() valueChange = new EventEmitter<string>();
  @Output() focusChange = new EventEmitter<boolean>();
  private inFocus = false;


  columnAnswerMode = ColumnAnswerMode;
  userInputs: CAContent[] = null;
  private inputchar: string;
  private re = /\d+/;
  private curColunmFocus: number = null;
  private isSwitchColunm: boolean = false;

  constructor(private changeDetectorRef: ChangeDetectorRef,
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer) {
    console.debug(this.log(`constructor this.size: ${this.size}`));

    iconRegistry.addSvgIcon(
      'delete-cross',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/delete_icon.svg'));
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.debug(this.log(`ngOnChanges this.size: ${this.size} type: ${typeof this.size}`))
    console.debug(this.log(changes))
    //let size = parseInt(this.size)

    if (this.mode == ColumnAnswerMode.COLUMNS) {
      if (this.userInputs == null) {
        this.userInputs = new Array(this.size)
      }

      if (changes['value']) {
        this.fill(this.value);
      }
    }
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    console.debug(this.log(`plr: ${this.inputs.length}`))
  }

  modelChangeFn(change: string, idx: number) {
    console.debug(this.log(`change "${change}" lenght: ${change ? change.length : 0} index: ${idx} curval: '${this.userInputs[idx].value}'`))
    console.debug(this.log(this.userInputs))

    let isClearCell = change.length == 0;

    this.changeDetectorRef.detectChanges();

    let newChange: string;
    if (!isClearCell) {
      let test = this.re.exec(this.inputchar)
      console.debug(this.log(`test '${test}'`))
      newChange = test != null ? test[0] : "";
    } else {
      newChange = "";
    }

    console.debug(this.log(`modif change' "${newChange}" lenght: ${newChange.length}`))

    if (newChange.length > 0 || isClearCell) {
      this.setUserInputs(newChange, idx);
    } else {
      //keep value
      let dico = this.re.exec(this.userInputs[idx].value)
      newChange = dico != null ? dico[0] : "";
      this.setUserInputs(newChange, idx);
    }

    if (idx > 0) {
      if (newChange.length > 0 || isClearCell) {
        this.switchColumnFocus(idx - 1);
      }
    } else {
      if (isClearCell) {
        this.switchColumnFocus(this.inputs.length - 1);
      }
    }

    let val = "";

    this.userInputs.forEach( v => {
      val += v.value
    });
    this.value = val;

    this.valueChange.emit(this.value);
  }

  private switchColumnFocus(newCol: number) {
    let ar = this.inputs.toArray();
    this.isSwitchColunm = true;
    ar[newCol].nativeElement.focus()
  }

  private setUserInputs(val: string, idx: number) {
    this.userInputs[idx].value = val;
    for (let i = idx + 1; i < this.userInputs.length; i++) {
      if (this.userInputs[i].value == null || this.userInputs[i].value == "") {
        this.userInputs[i].value = "0"
      }
    }
  }

  modelChangeNormal(change: string): void {
    console.debug(this.log(`change ${change} model val ${this.value}`))

    this.value = change;
    this.valueChange.emit(this.value);
  }


  check(event: KeyboardEvent): void {

    console.debug(this.log(event))
    //console.debug(this.log(this.userInputs))
    this.inputchar = event.key;
    console.debug(this.log(`inputChar: "${this.inputchar}"`))
  }

  check2(event: KeyboardEvent, index: number): void {

    console.debug(this.log(event))
    console.debug(this.log(`inputChar2: "${this.inputchar}"`))

    switch (event.code) {
      case "ArrowLeft":
        if (index > 0) {
          this.inputs.toArray()[index - 1].nativeElement.focus();
        }
        break;
      case "ArrowRight":
        if (index < this.inputs.length - 1) {
          this.inputs.toArray()[index + 1].nativeElement.focus();
        }
        break;
    }
  }

  trackByIdx(index: number, obj: any): any {
    return index;
  }

  clearInput() {
    if (this.userInputs) {
      this.fill("");
    }
    this.value = "";

    if (this.inputs.last) {
      this.inputs.last.nativeElement.focus();
    }
    this.valueChange.emit(this.value);
  }

  private fill(val: string) {
    if (!val) {
      val = ""
    }

    for (let i = this.userInputs.length - 1, j = val.length - 1; i >= 0; i--, j--) {
      this.userInputs[i] = {
        value: j >= 0 ? val[j] : "",
        tabindex: -1
      }
    }
    this.userInputs[this.userInputs.length - 1].tabindex = 0
  }

  onDivFocus() {
    console.debug(this.log(`On div focus`))
    /*if (this.inputs.length > 0) {
      this.inputs.last.nativeElement.focus();
    }*/
  }

  onDivBlur() {
    console.debug(this.log("on Div Blur"));
  }

  isEmpty() {
    return this.value == null || this.value.length === 0;
  }

  onFocusColumns(e: FocusEvent, index: number) {
    console.debug(this.log(`onFocusColumns ${index}`))
    //console.debug(this.log(e));
    //console.debug(this.log(typeof (e)));
    //this.answerStatus = QuestionStatus.FOCUS;
    this.curColunmFocus = index;
    if (this.value && this.value.length > 0) {
      (e.target as HTMLInputElement).select();
    }
    this.setInFocus(true);
  }

  onBlurColumns(e: any, index: number) {
    //console.trace()
    console.debug(this.log(`onBlurColumns ${index}`))
    //console.debug(this.log(e))
    //console.debug(this.log(typeof e))
    this.setInFocus(false);
  }

  onFocusSimple(e: FocusEvent) {
    this.setInFocus(true);
  }

  onBlurSimple(e: FocusEvent) {
    this.setInFocus(false);
  }

  private setInFocus(focus: boolean) {
    if (this.inFocus != focus) {
      if (!this.isSwitchColunm) {
        this.focusChange.emit(focus);
      }
      this.inFocus = focus;
    }

    if (focus && this.isSwitchColunm) {
      this.isSwitchColunm = false;
    }
  }

  focus() {
    this.onDivFocus();
  }

  log(msg: any): any {

    if (typeof msg == "string") {
      return "CA" + this.id + " " + msg;
    }
    return msg;
  }
}

export enum ColumnAnswerMode {
  COLUMNS = "COLUMNS",
  NORMAL = "NORMAL"
}

interface CAContent {
  value: string;
  tabindex: number;
}