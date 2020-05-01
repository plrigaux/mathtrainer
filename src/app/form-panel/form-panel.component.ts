import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms'

@Component({
  selector: 'app-form-panel',
  templateUrl: './form-panel.component.html',
  styleUrls: ['./form-panel.component.scss']
})
export class FormPanelComponent implements OnInit {

  dataSource = [
    { id: 1, name: "malik", level: 3242 },
    { id: 2, name: "moldav", level: 689 },
    { id: 4, name: "mortich", level: 1234 },
    { id: 2, name: "Hydrogen", level: 1234 },
    { id: 5, name: "mortich", level: 9994 },
    { id: 123, name: "Boron", level: 1797 },
  ];

  data = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  ];


  displayedColumns: string[] = ['id', 'name', 'level'];

  displayedColumns2: string[] = ['position', 'name', 'weight', 'symbol'];

  
  user = new FormGroup({
    name: new FormControl(''),
    skills: new FormArray([

    ])
  });

  constructor() {
  
    this.dataSource.forEach(element => {
      this.skills.push(
        new FormGroup({
          name: new FormControl(element.name, Validators.required),
          level: new FormControl(element.level, [Validators.required, Validators.min(2)])
        })
      );
    });

  }

  ngOnInit(): void {
  }

  get skills() {
    return this.user.get('skills') as FormArray;
  }

  pizza(i : number) : boolean {
    return this.skills.getError('required', ''+ i + '.level')
  }


}
