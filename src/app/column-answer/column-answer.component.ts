import { Component, OnInit, ViewChildren, QueryList, ElementRef, ChangeDetectorRef, Input, EventEmitter, Output } from '@angular/core';
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

  @Input() size: number;
  @Input() mode: ColumnAnswerMode = null;
  @Input() answerStatus: QuestionStatus;
  @Input() value: string = "";
  @Output() valueChange = new EventEmitter<string>();


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

  ngOnChanges(): void {
    console.log(`ngOnChanges this.size: ${this.size} type: ${typeof this.size}`)
    //let size = parseInt(this.size)
    if (this.userInputs == null && this.mode == ColumnAnswerMode.COLUMNS) {
      this.userInputs = new Array(this.size)//.fill("");
      let i = this.userInputs.length - this.value.length;
      for (let v of this.value) {
        this.userInputs[i] = v;
        i++;
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

    this.value = this.userInputs.join('');

    this.valueChange.emit(this.value);
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

  isEmpty() {
    return this.value.length === 0;
  }

  onFocus(e: any, index: number) {
    console.log(e);
    console.log(typeof (e));
    setTimeout( () => {
      e.target.select();
    });
  }
}

export enum ColumnAnswerMode {
  COLUMNS = "COLUMNS",
  NORMAL = "NORMAL"
}