import { NgModule, ɵɵsanitizeStyle } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OptionBarComponent } from './option-bar/option-bar.component';
import { NoSanitizePipe } from './no-sanitize.pipe';
import { EditorComponent } from './home/editor/editor.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OptionBarComponent,
    NoSanitizePipe,
    EditorComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
   
  ],
  providers: [
   NoSanitizePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
