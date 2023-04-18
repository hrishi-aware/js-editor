import { NgModule, ɵɵsanitizeStyle } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NuMonacoEditorModule } from '@ng-util/monaco-editor';
import { HtmlEditorComponent } from './home/html-editor/html-editor.component';
import { HomeComponent } from './home/home.component';
import { OptionBarComponent } from './option-bar/option-bar.component';
import { CssEditorComponent } from './home/css-editor/css-editor.component';
import { NoSanitizePipe } from './no-sanitize.pipe';
import { JsEditorComponent } from './home/js-editor/js-editor.component';
@NgModule({
  declarations: [
    AppComponent,
    HtmlEditorComponent,
    HomeComponent,
    OptionBarComponent,
    CssEditorComponent,
    NoSanitizePipe,
    JsEditorComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NuMonacoEditorModule.forRoot(),
   
  ],
  providers: [
   NoSanitizePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
