import { Component, HostListener, Input, ViewChild } from '@angular/core';
import { ElementRef, EventEmitter, Output, ViewEncapsulation,Renderer2} from '@angular/core';
import { AppShareService } from 'src/app/services/app-share.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class EditorComponent {
  value:string = ``
  @Input() langType:string =""
  @Output() htmlVal = new EventEmitter<string>();

  constructor(public appShareService:AppShareService,
    public renderer:Renderer2){
      
    }

  scrollBoth($event:any){
    let ele:any
    switch(this.langType){
      case "html":ele = document.querySelector('#htmlnums')
                  break;
      case "css":ele = document.querySelector('#cssnums')
                break;
      case "js":ele = document.querySelector('#jsnums')
                break;
    }
    ele.scrollTop=$event.target.scrollTop
    ele.scrollLeft=$event.target.scrollLeft
  }
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
    
    const event = $event.target
    const textArea = document.querySelector(`.${this.langType}-numbers`)
    const totalLines = event.value.split('\n').length
    if(textArea){
      textArea.innerHTML = Array(totalLines+1).fill('<span></span>').join('')
    }

    }
  }
  
}
