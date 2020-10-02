import { Component, OnInit, ViewChildren, QueryList, ElementRef, ChangeDetectorRef, Input, EventEmitter, Output, SimpleChanges } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { QuestionStatus } from '../services/math-question.service';
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
  @Input() readonly id: number = null;
  @Input() value: string = "";
  //@Output() valueChange = new EventEmitter<string>();
  @Output() focusChange = new EventEmitter<boolean>();
  @Input() valueChange: (newValue: string, index: number) => boolean;
  private inFocus = false;
  private last: number;


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


    if (changes['mode']) {
      if (this.mode == ColumnAnswerMode.COLUMNS) {
        if (this.userInputs == null) {
          this.userInputs = new Array(this.size)
          this.last = this.userInputs.length - 1;
        }
        this.switchColumnFocus = this.switchColumnFocusCB;
        this.fill = this.fillColumn;
        this.fill(this.value);
      } else {
        this.userInputs = null;
        this.last = -1;
        this.switchColumnFocus = this.switchColumnFocusCBEmpty;
        this.fill = this.fillSimple;
      }
    }

    if (changes['value'] && this.mode == ColumnAnswerMode.COLUMNS) {
      this.fill(this.value);
    }

    if (changes['size'] && this.mode == ColumnAnswerMode.COLUMNS) {
      this.userInputs = new Array(this.size)
      this.last = this.userInputs.length - 1;
      this.fill(this.value);
    }
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    console.debug(this.log(`plr: ${this.inputs.length}`))
  }

  modelChangeFn(change: string, idx: number) {
    console.debug(this.log(`change "${change}" lenght: ${change != null ? change.length : 0} index: ${idx} curval: '${this.userInputs[idx].value}'`))
    console.debug(this.log(this.userInputs))

    let isClearCell = change == null || change.length == 0;

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

    let val = "";
    this.userInputs.forEach(v => {
      val += v.value
    });
    this.value = val;

    //this.valueChange.emit(this.value);
    let leaveCursorThere = this.valueChange(this.value, this.id)
    if (!leaveCursorThere) {
      if (newChange.length > 0) {
        this.switchColumnFocus(idx - 1, idx);
      } else {
        this.switchColumnFocus(idx, idx); // just for select
      }
    }
    console.log(leaveCursorThere);
  }

  private switchColumnFocus: SwitchFocusCB = null

  private switchColumnFocusCBEmpty: SwitchFocusCB = (newCol: number, oldCol: number) => { };

  private switchColumnFocusCB: SwitchFocusCB = (newCol: number, oldCol: number) => {
    if (newCol < 0 || newCol >= this.inputs.length) {
      return
    }

    let ar = this.inputs.toArray();
    this.isSwitchColunm = oldCol != newCol;
    //ar[newCol].nativeElement.focus()
    setTimeout(() => {
      ar[newCol].nativeElement.select();
    }, 0);
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
    //this.valueChange.emit(this.value);
    let val2 = this.valueChange(this.value, this.id)
    console.log(val2);
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
        this.switchColumnFocus(index - 1, index);
        break;
      case "ArrowRight":
        this.switchColumnFocus(index + 1, index);
        break;
      case "Backspace":
        console.log("Backspace")
        break;
      case "Delete":
        console.log("Delete")
        break;
    }
  }

  trackByIdx(index: number, obj: any): any {
    return index;
  }

  clearInput() {

    this.value = null;

    this.fill(this.value);

    if (this.inputs.last) {
      this.inputs.last.nativeElement.focus();
    }
    //this.valueChange.emit(this.value);
    let val2 = this.valueChange(this.value, this.id)
    console.log(val2);
  }

  private fill: FillCB = null
  private fillSimple: FillCB = () => { }
  private fillColumn: FillCB = (val: string) => {
    if (val == null) {
      val = ""
    }

    for (let i = this.last, j = val.length - 1; i >= 0; i--, j--) {
      this.userInputs[i] = {
        value: j >= 0 ? val[j] : "",
        tabindex: -1,
        inFocus: false,
        placeholder: ""
      }
    }

    this.userInputs[this.last].placeholder = "?";
    this.addTabIndex();
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
      //console.warn("do select");
      (e.target as HTMLInputElement).select();
    }
    this.userInputs[index].inFocus = true;
    this.setInFocus(true);
    this.removeTabIndex();
  }

  onBlurColumns(e: any, index: number) {
    //console.trace()
    console.debug(this.log(`onBlurColumns ${index}`))
    //console.debug(this.log(e))
    //console.debug(this.log(typeof e))
    this.userInputs[index].inFocus = false;
    this.setInFocus(false);
    this.addTabIndex();
  }

  private addTabIndex() {
    this.setlastTabIndex(0);
  }

  private removeTabIndex() {
    this.setlastTabIndex(-1);
  }

  private setlastTabIndex(indexValue: number) {
    this.userInputs[this.last].tabindex = indexValue;
  }

  onFocusSimple(e: FocusEvent) {
    this.setInFocus(true);
  }

  onBlurSimple(e: FocusEvent) {
    this.setInFocus(false);
  }

  private setInFocus(focus: boolean) {

    let val = false
    if (this.mode == ColumnAnswerMode.COLUMNS) {
      this.userInputs.forEach(v => {
        return val = val || v.inFocus;
      })
    }

    console.info(`val: ${val} focus ${focus} this.inFocus ${this.inFocus}  this.isSwitchColunm ${this.isSwitchColunm}`)
    if (this.inFocus != focus) {
      if (!this.isSwitchColunm) {
        this.focusChange.emit(focus);
      }
    }
    this.inFocus = focus;
  }

  focus() {
    this.switchColumnFocus(this.last, this.last);
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

export interface ANSWER_MODE {
  code: ColumnAnswerMode;
  label: string;
};

export const ANSWER_MODES: ANSWER_MODE[] = [
  { code: ColumnAnswerMode.NORMAL, label: "Normal" },
  { code: ColumnAnswerMode.COLUMNS, label: "Column" }
];

interface CAContent {
  value: string;
  tabindex: number;
  inFocus: boolean;
  placeholder: string;
}

type SwitchFocusCB = (newCol: number, oldCol: number) => void;
type FillCB = (val: string) => void