import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'noSanitize'
})
export class NoSanitizePipe implements PipeTransform {
  constructor(private domSanitizer: DomSanitizer) { }
  transform(html: string,type?:string): any {
    // if(type=="html"){
    //   return this.domSanitizer.bypassSecurityTrustHtml(html);
    // }
    // if(type=="css"){
    //   return this.domSanitizer.bypassSecurityTrustStyle(html);
    // }
    return this.domSanitizer.bypassSecurityTrustHtml(html);
  }

}
