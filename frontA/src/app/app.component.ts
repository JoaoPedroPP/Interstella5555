import { Component, Input } from '@angular/core';
import { VideosService } from './services/videos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Interestella5555';
  content = false;
  video_id: string;
  y: any;
  r: any;

  constructor(private x: VideosService) {  }

  nextVideoSequential(i) {
    if (i == this.x.links.length) {
      clearTimeout(this.y);
      return
    }
    this.y = setTimeout(() => {
      this.video_id = this.x.links[i].url
      this.nextVideoSequential(i+1)
    }, this.x.links[i].time*1000+2000);
  }

  nextVideoRandom (i) {
    if (i == this.y.randomLinks.length) {
      clearTimeout(this.y);
      return;
    }
    this.y = setTimeout(() => {
      this.video_id = this.r[i].url;
      this.nextVideoRandom(i+1);
    }, this.r[i].time*1000+2000);
  }

  selectContent (event) {
    if (event == 'sequential') {
      this.content = true;
      this.video_id = this.x.links[0].url
      this.nextVideoSequential(1)
    }
    else {
      this.x.randomize(this.x.links);
      this.r = this.x.randomLinks.slice();
      this.content = true
      this.video_id = this.r[0].url;
      this.nextVideoRandom(1)
    }
  }

  reset() {
    this.r = null;
    this.content = false;
  }
}
