import { Component, OnInit, ViewChildren, QueryList, ElementRef, ChangeDetectorRef, Input, EventEmitter, Output, SimpleChanges } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { QuestionStatus } from '../services/math-question.service';
import { trigger, transition, state, animate, style, keyframes } from '@angular/animations';
import { ValidateCB } from '../math-question/math-question.component';

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
      state(QuestionStatus.ANSWERED, style({ backgroundColor: 'lightgray' })),
    ])
  ],
})
export class ColumnAnswerComponent implements OnInit {
  @ViewChildren('columninput') inputs: QueryList<ElementRef>;

  @Input() size: number;
  @Input() mode: ColumnAnswerMode = null;
  @Input() answerStatus: QuestionStatus;
  @Input() id: string = null;
  @Input() value: string = "";
  @Output() focusChange = new EventEmitter<FocusType>();
  @Output() existFocus = new EventEmitter<any>();
  @Input() valueChange: ValidateCB;
  private currentFocus = FocusType.BLUR;
  private last: number;


  columnAnswerMode = ColumnAnswerMode;
  userInputs: CAContent[] = null;
  private inputchar: string;
  private re = /\d+/;
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
        this.switchColumnFocus = this.switchSimpleFocusCB;
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
    let answerStatus = this.answerStatus
    let newStatus = this.valueChange(this.value, +this.id)


    let leaveCursorThere: boolean;
    switch (answerStatus) {
      case QuestionStatus.EMPTY:
      case QuestionStatus.FOCUS:
        leaveCursorThere = newStatus == QuestionStatus.WRONG || newStatus == QuestionStatus.RIGHT;
        break;
      case QuestionStatus.WRONG:
        leaveCursorThere = newStatus == QuestionStatus.RIGHT;
        break;
      case QuestionStatus.RIGHT:
        leaveCursorThere = false;
        break;
      case QuestionStatus.ANSWERED:
        leaveCursorThere = false;
        break;
    }

    if (leaveCursorThere === false) {
      if (newChange.length > 0) {
        this.switchColumnFocus(idx - 1, idx);
      } else {
        this.switchColumnFocus(idx, idx); // just for select
      }
    }
    console.log(leaveCursorThere);
  }

  private switchColumnFocus: SwitchFocusCB = null

  private switchSimpleFocusCB: SwitchFocusCB = (newCol: number, oldCol: number) => {
    this.inputs.first.nativeElement.focus();
  };

  private switchColumnFocusCB: SwitchFocusCB = (newCol: number, oldCol: number) => {
    if (newCol < 0 || newCol >= this.inputs.length) {
      return
    }

    let inputsArray = this.inputs.toArray();
    this.isSwitchColunm = oldCol != newCol;
    //ar[newCol].nativeElement.focus()
    setTimeout(() => {
      inputsArray[newCol].nativeElement.select();
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
    let val2 = this.valueChange(this.value, +this.id)
    console.log(val2);
  }

  onKeydown(event: KeyboardEvent, index: number): void {

    console.debug(this.log(event))
    console.debug(this.log(`inputChar2: "${this.inputchar}" code ${event.code} key ${event.key}`))

    switch (event.key) {
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
      case "Enter":
        this.exitWidget();
        break;
      default:
        this.inputchar = event.key;
    }
  }

  onKeydownSimple(event: KeyboardEvent): void {

    console.debug(this.log(event))
    console.debug(this.log(`inputChar2: "${this.inputchar}" code ${event.code} key ${event.key}`))

    switch (event.key) {
      case "Enter":
        this.exitWidget();
        break;
      default:
        this.inputchar = event.key;
    }
  }

  trackByIdx(index: number, obj: any): any {
    return index;
  }

  clearInput() {
    console.debug(this.log(`clearInput`));
    this.value = null;

    this.fill(this.value);

    if (this.inputs.last) {
      this.inputs.last.nativeElement.focus();
    }
    //this.valueChange.emit(this.value);
    let val2 = this.valueChange(this.value, +this.id)
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
        inFocus: FocusType.BLUR,
        placeholder: ""
      }
    }

    this.userInputs[this.last].placeholder = "?";
    this.addTabIndex();
  }

  isEmpty() {
    return this.value == null || this.value.length === 0;
  }

  onFocusColumns(e: FocusEvent, index: number) {
    console.debug(this.log(`onFocusColumns ${index}`))
    //console.debug(this.log(e));
    //console.debug(this.log(typeof (e)));
    //this.answerStatus = QuestionStatus.FOCUS;

    if (this.value && this.value.length > 0) {
      //console.warn("do select");
      (e.target as HTMLInputElement).select();
    }
    this.userInputs[index].inFocus = FocusType.FOCUS;
    this.setInFocus(FocusType.FOCUS);
    this.removeTabIndex();
  }

  onBlurColumns(e: any, index: number) {
    //console.trace()
    console.debug(this.log(`onBlurColumns ${index}`))
    //console.debug(this.log(e))
    //console.debug(this.log(typeof e))
    this.userInputs[index].inFocus = FocusType.BLUR;
    this.setInFocus(FocusType.BLUR);
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
    this.setInFocus(FocusType.FOCUS);
  }

  onBlurSimple(e: FocusEvent) {
    this.setInFocus(FocusType.BLUR);
  }

  private setInFocus(newFocus: FocusType) {
    /*
        let val = FocusType.BLUR
        if (this.mode == ColumnAnswerMode.COLUMNS) {
          this.userInputs.forEach(v => {
             if(v.inFocus == FocusType.FOCUS) {
                val = FocusType.FOCUS;
             }
          })
        }
    */
    console.debug(this.log(`newFocus ${newFocus} this.inFocus ${this.currentFocus}  this.isSwitchColunm ${this.isSwitchColunm}`))
    if (this.currentFocus !== newFocus) {
      if (this.isSwitchColunm == false) {
        this.focusChange.emit(newFocus);
      } else {
        this.isSwitchColunm = false;
      }
    }

    this.currentFocus = newFocus;
  }

  focus() {
    this.switchColumnFocus(this.last, this.last);
  }

  exitWidget() {
    this.existFocus.emit("nothing");
  }

  log(msg: any): any {

    if (typeof msg == "string") {
      return "CA" + this.id + " - " + msg;
    }
    return msg;
  }
}

export enum ColumnAnswerMode {
  COLUMNS = "COLUMNS",
  NORMAL = "NORMAL"
}

export enum FocusType {
  FOCUS = "FOCUS",
  BLUR = "BLUR"
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
  inFocus: FocusType;
  placeholder: string;
}

type SwitchFocusCB = (newCol: number, oldCol: number) => void;
type FillCB = (val: string) => void;
