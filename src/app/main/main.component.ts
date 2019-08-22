import { Component, OnInit } from '@angular/core';

import { TextService } from '../text.service';
import { savedText } from '../text';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  text: savedText[];
  constructor( private textService : TextService) { }
  
  getText():void{
    this.text = this.textService.getText();
  }

  ngOnInit() {
    this.getText();
  }

}
