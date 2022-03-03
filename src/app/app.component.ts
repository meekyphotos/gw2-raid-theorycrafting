import {Component, OnInit, ViewChild} from '@angular/core';
import {ClassPanelComponent} from "./class-panel/class-panel.component";

@Component({
             selector: 'app-root',
             templateUrl: './app.component.html',
             styleUrls: ['./app.component.css']
           })
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.group = [];
    this.group[0] = [null, null, null, null, null];
    this.group[1] = [null, null, null, null, null];
    this.group[2] = [null, null, null, null, null];
    this.group[3] = [null, null, null, null, null];
    this.group[4] = [null, null, null, null, null];
    this.group[5] = [null, null, null, null, null];
    this.group[6] = [null, null, null, null, null];
    this.group[7] = [null, null, null, null, null];
    this.group[8] = [null, null, null, null, null];
    this.group[9] = [null, null, null, null, null];
  }

  group: Array<Array<string | null>> = [];
  currentLink: string = '';
  @ViewChild('classPanel') classPanel: ClassPanelComponent | undefined = undefined;

  onClassPanelReady() {
    // load
  }

  generateLink() {

  }

  notifyClassPanel($event: Array<any>) {

  }
}
