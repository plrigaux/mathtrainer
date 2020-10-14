import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-test-palette',
  templateUrl: './test-palette.component.html',
  styleUrls: ['./test-palette.component.scss']
})
export class TestPaletteComponent implements OnInit {

  hues: string[] = ["red", "pink", "purple", "deep-purple", "indigo", "blue", "light-blue", "cyan", "teal",
    "green", "light-green", "lime", "yellow", "amber", "orange", "deep-orange", "brown", "grey", "blue-grey"];

  shades = ["50", "100", "200", "300", "400", "500",
    "600", "700", "800", "900", "A100", "A200", "A400", "A700"];


  constructor() { }

  ngOnInit(): void {
  }

}

