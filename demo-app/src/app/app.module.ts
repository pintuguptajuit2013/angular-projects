import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { UserService } from './user.service';
import { NavComponent } from './nav/nav.component';
import { PipeComponent } from './pipe/pipe.component';
import { SummaryPipe } from './summary.pipe';
import { CamelcasePipe } from './camelcase.pipe';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { FormsModule } from '@angular/forms';
import { StudentComponent } from './student/student.component';
import { SchoolComponent } from './school/school.component';


@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    NavComponent,
    PipeComponent,
    SummaryPipe,
    CamelcasePipe,
    EventbindingComponent,
    StudentComponent,
    SchoolComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
