import { Component, OnInit } from '@angular/core';
import { SummaryPipe } from '../summary.pipe';
import { CamelcasePipe } from '../camelcase.pipe';
CamelcasePipe
@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  courseObj ={
    title: "Angular 8",
    rating : 4.998,
    students:40,
    price : 2000
  };

  public msg:string[] = ["summary", "of", "the", "page", "will", "be", "cooming", "soon"];

}
