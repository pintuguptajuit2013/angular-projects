import { Component, OnInit,Input, Output ,EventEmitter} from '@angular/core';


@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css']
})
export class SchoolComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() message ="Msg From School";

  @Output() childChange = new EventEmitter();
 

  onClick(){
    this.childChange.emit();
  }
}
