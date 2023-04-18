import { Component, EventEmitter, Output } from '@angular/core';
import { AppShareService } from 'src/app/services/app-share.service';

@Component({
  selector: 'app-js-editor',
  templateUrl: './js-editor.component.html',
  styleUrls: ['./js-editor.component.css']
})
export class JsEditorComponent {
  value:string = ``
  @Output() jsVal = new EventEmitter<string>();
  constructor(public appShareService:AppShareService){}
  
  renderScript(msg:string){
    if(msg === 'clicked'){
      this.jsVal.emit(this.value)
    }
  }
  ngOnInit(){
    this.appShareService.runClicked.subscribe((msg:string)=>{this.renderScript(msg)})
  }
}
