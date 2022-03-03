import { Injectable } from '@angular/core';

export interface DragData {
  hasSource: boolean;
  groupId: number | undefined;
  positionId: number | undefined;
  what: string | null;
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
