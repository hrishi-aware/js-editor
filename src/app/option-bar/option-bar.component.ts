import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { AppShareService } from '../services/app-share.service';

@Component({
  selector: 'app-option-bar',
  templateUrl: './option-bar.component.html',
  styleUrls: ['./option-bar.component.css']
})
export class OptionBarComponent {

  public langObj:any = {
    html:{id:1,lang:"html"},css:{id:2,lang:"css"},js:{id:3,lang:"js"}
  }
  constructor(public appShareService:AppShareService){

  }
  ngOnInit(){
    
  }
  onChecked(event:Event){
    let val:any = event.target
    console.log(val)
    let checkBoxVal:string = <string>val.value
    if(!val.checked){
      if(this.appShareService.lanEnabled.length == 1) {
        alert("keep min one checked")
        val.checked = true
        return
      }
      this.appShareService.lanEnabled = this.appShareService.lanEnabled.filter((val,i)=>{
        return val.lang != checkBoxVal
      })
      this.appShareService.lanEnabled.sort((a:langType,b:langType)=>{return a.id-b.id})
      
    }
    else if(val.checked){
      this.appShareService.lanEnabled.push(this.langObj[checkBoxVal])
      this.appShareService.lanEnabled.sort((a:langType,b:langType)=>{return a.id-b.id}) 
    }
    
  }
  onClickRun(){
    this.appShareService.runClicked.next('clicked')
  }
}

export interface langType{
  id:number
  lang:string
}
