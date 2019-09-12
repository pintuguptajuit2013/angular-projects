import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.css']
})
export class EventbindingComponent implements OnInit {
  title: "Data and Event Binding";
  imgUrl:"https://loremflickr.com/400/200";
  isActive :false;
  constructor() { }
  email:any = "pintug@nrifintech.com";
  email2:any = "abcd@gamil.com";
  ngOnInit() {
  }

  onSave($event:any){
    $event.stopPropegetting();
    console.log("Button was clikced"+$event);
  }

  onInputClicked(email:any){
    console.log(email);
  }

  onInputClicked2(email:any){
    console.log(email);
  }
}
