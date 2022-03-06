import { Injectable } from '@angular/core';
import {Specialization} from "./class.definitions";

export interface DragData {
  hasSource: boolean;
  groupId: number | undefined;
  positionId: number | undefined;
  what: Specialization | null;
}

export interface SpotAssignment {
  specialization: string;
  index: number;
}

export interface ReceivedItemEvent {
  source: number | undefined;
  position: number | undefined;
}


@Injectable({
  providedIn: 'root'
})
export class ClassService {

  constructor() { }
}
