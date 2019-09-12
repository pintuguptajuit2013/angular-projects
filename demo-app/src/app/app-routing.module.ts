import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { AppComponent } from './app.component';
import { PipeComponent } from './pipe/pipe.component';
import { NavComponent } from './nav/nav.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';



const routes: Routes = [{ path : "",component:AppComponent},
{ path : "demo",component:DemoComponent},
{ path : "nav",component:NavComponent},
{path : "pipe",component:PipeComponent},
{path : "event",component:EventbindingComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
