import { Component, OnInit } from '@angular/core';
import menu from 'assets/menuoptions.json';

@Component({
  selector: 'bytes',
  templateUrl: './bytes.component.html',
  styleUrls: ['./bytes.component.scss']
})
export class BytesComponent implements OnInit {
  bytes = menu.bytes;

  constructor() { }

  ngOnInit() {
  }

}
