import { Component, OnInit, Inject } from '@angular/core'
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material/dialog'
import {
  Config,
  EquationOrientation,
  EquationOrientations
} from '../services/config'
import { MATHProplemActions } from '../math-generator/mathProblemTypes'
import {
  UntypedFormControl,
  UntypedFormGroup,
  Validators
} from '@angular/forms'
import { ConfigDialogRangesComponent } from '../config-dialog-ranges/config-dialog-ranges.component'

@Component({
  selector: 'app-config-dialog',
  templateUrl: './config-dialog.component.html',
  styleUrls: ['./config-dialog.component.scss']
})
export class ConfigDialogComponent implements OnInit {
  mathProplemActions: any
  mathProplemActionsKeys: string[]
  config: Config
  equationOrientations: EquationOrientation[] = EquationOrientations
  configForm: UntypedFormGroup

  constructor (
    public dialogRef: MatDialogRef<ConfigDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Config,
    public dialog: MatDialog
  ) {
    this.mathProplemActions = MATHProplemActions
    this.mathProplemActionsKeys = Object.keys(MATHProplemActions)
    console.log('data')

    console.log(data)

    this.config = { ...data }

    this.configForm = new UntypedFormGroup({
      nbNumbers: new UntypedFormControl(this.config.nbNumbers, [
        Validators.required,
        Validators.min(2)
      ]),
      nbProblems: new UntypedFormControl(this.config.nbQuestions, [
        Validators.required,
        Validators.min(1)
      ]),
      realTimeValidation: new UntypedFormControl(
        this.config.realTimeValidation,
        []
      ),
      orientation: new UntypedFormControl(this.config.orientation, [])
    })
  }

  ngOnInit (): void {}

  cancel (): void {
    this.dialogRef.close()
  }

  apply (): void {
    Object.assign(this.config, this.configForm.value)

    console.log('result')
    console.log(this.config)
    console.log(JSON.stringify(this.config))
    console.log(JSON.stringify([1, 3, 4, 5]))
    console.log(
      JSON.stringify([{ name: 'asdf' }, { name: 'asdf' }, { name: 'asdf' }])
    )

    this.dialogRef.close(this.config)
  }

  setRanges (): void {
    const dialogRef = this.dialog.open(ConfigDialogRangesComponent, {
      width: '500px',
      data: this.config
    })

    //TODO check the subscription unsubscribe
    dialogRef.afterClosed().subscribe(results => {
      console.log('The dialog was closed')
      console.log(results)

      if (results) {
        this.config.generateRange = results
      }
    })
  }

  testpizza (val: any): boolean {
    console.log(val.errors)
    return true
  }
}
