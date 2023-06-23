import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {defs, Specialization} from "../../class.definitions";

@Component({
             selector: 'app-group-stats',
             templateUrl: './group-stats.component.html',
             styleUrls: ['./group-stats.component.css']
           })
export class GroupStatsComponent implements OnInit, OnChanges {
  @Input() party: Array<Specialization | null> = [];
  @Input() index  = 0;
  damageSpecs: string[] = [];
  damageCount = 0;

  ccSpecs: string[] = [];
  ccCount = 0;

  supportSpecs: string[] = [];
  supportCount = 0;

  ngOnChanges(changes: SimpleChanges): void {
    this.updateDamage();
    this.updateSupport();
    this.updateCc();
  }

  private updateDamage() {
    let tmpDamageSpec = this.filterRole(this.party, 'damage');
    this.damageCount = tmpDamageSpec.length
    this.damageSpecs = [...new Set(tmpDamageSpec.map(it => it.name))]
  }

  private updateSupport() {
    let tmpSpec = this.filterRole(this.party, 'support');
    this.supportCount = tmpSpec.length
    this.supportSpecs = [...new Set(tmpSpec.map(it => it.name))]
  }

  private updateCc() {
    let tmpDamageSpec = this.filterRole(this.party, 'cc');
    this.ccCount = tmpDamageSpec.length
    this.ccSpecs = [...new Set(tmpDamageSpec.map(it => it.name))]
  }

  ngOnInit(): void {
    this.updateDamage();
    this.updateSupport();
    this.updateCc();
  }


  filterRole(party: Array<Specialization | null>, role: string): Specialization[] {
    // @ts-ignore
    return party.filter(it => it && it.role === role)
  }

}
