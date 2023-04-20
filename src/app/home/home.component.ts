import { Component, Inject, SecurityContext } from '@angular/core';
import { NoSanitizePipe } from '../no-sanitize.pipe';
import { AppShareService } from '../services/app-share.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  html:string=``
  css:string=``
  js:string=``
  srcDoc = `
  <html>
  <head>
  <style>${this.css}</style>
 </head>
  <body>${this.html}
 
  <script>${this.js}</script>
  </body>
  
  </html>`

  constructor(public AppShareService:AppShareService
    ){}

  ngOnInit(){
    
  }
  receiveValues($event:string,lang:string){
    switch(lang){
      case "html":this.html=$event
                  break;
      case "css":this.css=$event
                break;
      case "js":this.js=$event
                break;
    }
    this.srcDoc = 
    `
    <html>
    <head>
    <style>${this.css}</style>
   </head>
    <body>${this.html}
   
    <script>${this.js}</script>
    </body>
    
    </html>`
  }
  
}
