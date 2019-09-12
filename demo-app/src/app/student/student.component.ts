import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  

  constructor() { }

  ngOnInit() {
  }

  student = {
    name:"Pintu Gupta",
    roll:1

  }

  changeFunction() {
    console.log(" Event Emitted from Child")
  }
}
