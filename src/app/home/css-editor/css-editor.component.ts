import { Component, EventEmitter, Output } from '@angular/core';
import { AppShareService } from 'src/app/services/app-share.service';

@Component({
  selector: 'app-css-editor',
  templateUrl: './css-editor.component.html',
  styleUrls: ['./css-editor.component.css']
})
export class CssEditorComponent {
  value:string = ``
  editorOptions = { theme: 'vs-dark', language: 'html' };
  @Output() cssVal = new EventEmitter<string>();
  constructor(public appShareService:AppShareService){}
  
  renderScript(msg:string){
    if(msg === 'clicked'){
      this.cssVal.emit(this.value)
    }
  }
  ngOnInit(){
    this.appShareService.runClicked.subscribe((msg:string)=>{this.renderScript(msg)})
  }
}
