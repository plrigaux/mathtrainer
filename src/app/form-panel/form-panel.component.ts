import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl, UntypedFormArray, Validators } from '@angular/forms'

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

  displayedColumns: string[] = ['id', 'name', 'level'];

  
  user = new UntypedFormGroup({
    name: new UntypedFormControl('tata'),
    skills: new UntypedFormArray([

    ])
  });

  constructor() {
  
    this.dataSource.forEach(element => {
      this.skills.push(
        new UntypedFormGroup({
          name: new UntypedFormControl(element.name, Validators.required),
          level: new UntypedFormControl(element.level, [Validators.required, Validators.min(2)])
        })
      );
    });

  }

  ngOnInit(): void {
    console.log(this.user.get("name").value);
    console.log(this.user.get("skills").value);
    console.log(this.user.get("skills[0]")?.value);
    console.log(this.user.get("skills.0")?.value);
    console.log(this.user.get("skills[0].name")?.value);
    console.log(this.user.get("skills.0.name")?.value);


    const group0 : UntypedFormGroup = this.user.get("skills.0") as UntypedFormGroup
    console.log(group0.get("name")?.value);



  }

  get skills() {
    return this.user.get('skills') as UntypedFormArray;
  }

  pizza(i : number) : boolean {
    return this.skills.getError('required', ''+ i + '.level')
  }


}
