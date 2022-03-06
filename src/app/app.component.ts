import {Component, OnInit, ViewChild} from '@angular/core';
import {ClassPanelComponent} from "./class-panel/class-panel.component";
import {defs, Specialization} from "./class.definitions";

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
  }

  group: Array<Array<Specialization | null>> = [];
  currentLink: string = '';
  @ViewChild('classPanel') classPanel: ClassPanelComponent | undefined = undefined;

  onClassPanelReady() {
    const href = window.location.search.substring(1);
    if (href) {
      this.readLink(href);
    }
  }

  generateLink() {
    let codes = this.group.map(party => {
      return party.filter(elem => elem).map(elem => elem?.code || 0);
    });
    let s = JSON.stringify(codes);
    location.href = this.baseLink() + btoa(s)
  }

  private baseLink() {
    return window.location.protocol + '//' + window.location.hostname + (location.port ? ':' + location.port : '') + '?';
  }

  private readLink(href: string) {
    try {
      const parse = JSON.parse(atob(href)) as Array<Array<number | null>>;
      const withNulls = parse.map(it => {
        while(it.length < 5) {
          it.push(null)
        }
        return it
      })
      this.group = withNulls.map(party => party.map(elem => {
        if (elem != null) {
          let specialization = this.lookupClass(elem);
          return specialization || null;
        } else {
          return null;
        }
      }))
      this.currentLink = window.location.href
    } catch (e) {
    }

  }

  private lookupClass(elem: number): Specialization | undefined {
    return Object.values(defs).find(item => item.code == elem)
  }
}
