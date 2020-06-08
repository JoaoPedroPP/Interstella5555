import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.css']
})
export class ChoiceComponent implements OnInit {

  @Output('videoType') videoType = new EventEmitter<String>();

  constructor() { }

  ngOnInit() {
  }

  sequential() {
    this.videoType.emit('sequential');
  }

  random() {
    this.videoType.emit('random');
  }

}
