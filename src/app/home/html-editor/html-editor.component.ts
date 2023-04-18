import { Component, ElementRef, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { NuMonacoEditorModel,NuMonacoEditorEvent } from '@ng-util/monaco-editor';
import { Observable, fromEvent } from 'rxjs';
import {
  debounceTime,
  map,
  distinctUntilChanged,
  filter,
  take,
  last
} from "rxjs/operators";
import { AppShareService } from '../../services/app-share.service';


@Component({
  selector: 'app-html-editor',
  templateUrl: './html-editor.component.html',
  styleUrls: ['./html-editor.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class HtmlEditorComponent {
  value:string = ``
  editorOptions = { theme: 'vs-dark', language: 'html' };
  @Output() htmlVal = new EventEmitter<string>();
  constructor(public appShareService:AppShareService){}
  
  renderScript(msg:string){
    if(msg === 'clicked'){
      this.htmlVal.emit(this.value)
    }
  }
  ngOnInit(){
    this.appShareService.runClicked.subscribe((msg:string)=>{this.renderScript(msg)})
  }
  detectEnter($event:any){
    if($event.code == "Enter"){
    //   let count = document.getElementsByClassName('number')?.length
    // let span= document.createElement('span')
    // span.setAttribute('class','number')
    // span.innerText = `${count+1}`
    // span.style.color="white"
    // span.style.padding = "1px 1px 1px 4px"
    // span.style.fontSize="12px"
    // span.style.lineHeight="10px"
    // span.style.marginBottom="4px"
    // document.getElementById('numbers')?.appendChild(span)
    const event = $event.target
    const textArea = document.querySelector('.numbers')
    const totalLines = event.value.split('\n').length
    console.log(totalLines)
    if(textArea){
      textArea.innerHTML = Array(totalLines+1).fill('<span></span>').join('')
    }

    }
  }
}
