import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClassPanelComponent } from './class-panel/class-panel.component';
import { RaidCompComponent } from './raid-comp/raid-comp.component';
import { SpotComponent } from './spot/spot.component';
import { GroupComponent } from './raid-comp/group/group.component';

@NgModule({
  declarations: [
    AppComponent,
    ClassPanelComponent,
    RaidCompComponent,
    SpotComponent,
    GroupComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
