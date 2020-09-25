import { Component, OnInit, ViewChildren, QueryList, ElementRef, ChangeDetectorRef, Input, EventEmitter, Output } from '@angular/core';
import {MatIconRegistry} from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-column-answer',
  templateUrl: './column-answer.component.html',
  styleUrls: ['./column-answer.component.scss']
})
export class ColumnAnswerComponent implements OnInit {
  @ViewChildren('columninput') inputs: QueryList<ElementRef>;

  @Input() size: string; 
  @Output() value = new EventEmitter<string>();

  userInputs: string[];
  private inputchar: string;
  private userConcatInput: string = "";
  private re = /\d+/;

  constructor(private cdRef: ChangeDetectorRef, 
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

    this.userConcatInput = this.userInputs.join('');
    this.value.emit(this.userConcatInput);
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

  clearInput() {
    this.userInputs.fill("");
    this.userConcatInput = "";
    this.inputs.last.nativeElement.focus();
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
