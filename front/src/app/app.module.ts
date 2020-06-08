import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChoiceComponent } from './components/choice/choice.component';
import { VideoComponent } from './components/video/video.component';
import { SanitizerurlPipe } from './pipes/sanitizerurl.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ChoiceComponent,
    VideoComponent,
    SanitizerurlPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
