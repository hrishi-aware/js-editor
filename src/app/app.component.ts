import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NuMonacoEditorModel,NuMonacoEditorEvent } from '@ng-util/monaco-editor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'js-compiler';
  
}
