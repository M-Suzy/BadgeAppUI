import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AssignmentService {
  private readonly _httpOptions = {
    observe: 'response' as 'response',
  };

  constructor() { }
}
