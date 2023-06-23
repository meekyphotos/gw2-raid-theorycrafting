import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ClassPanelComponent} from './class-panel/class-panel.component';
import {RaidCompComponent} from './raid-comp/raid-comp.component';
import {SpotComponent} from './spot/spot.component';
import {GroupComponent} from './raid-comp/group/group.component';
import {BoonTableComponent} from './raid-comp/boon-table/boon-table.component';
import {GroupStatsComponent} from './raid-comp/group-stats/group-stats.component';
import {ControlMiscTableComponent} from './raid-comp/control-misc-table/control-misc-table.component';
import {NgxTippyModule} from 'ngx-tippy-wrapper';
import {SkillFactComponent} from './raid-comp/skill-fact/skill-fact.component';
import {EditableModule} from '@ngneat/edit-in-place';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
            declarations: [
              AppComponent,
              ClassPanelComponent,
              RaidCompComponent,
              SpotComponent,
              GroupComponent,
              BoonTableComponent,
              GroupStatsComponent,
              ControlMiscTableComponent,
              SkillFactComponent
            ],
            imports: [
              BrowserModule,
              NgxTippyModule,
              EditableModule,
              ReactiveFormsModule,
              FormsModule
            ],
            providers: [],
            bootstrap: [AppComponent]
          })
export class AppModule {
}
