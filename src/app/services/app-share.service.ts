import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppShareService {
  public runClicked = new Subject<string>();
  public lanEnabled:Array<langType> = [{id:1,lang:"html"},{id:2,lang:"css"},{id:3,lang:"js"}]
  constructor() { }
}
export interface langType{
  id:number
  lang:string
}