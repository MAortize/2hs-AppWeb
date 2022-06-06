import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-podcast',
  templateUrl: './podcast.component.html',
  styleUrls: ['./podcast.component.css']
})
export class PodcastComponent implements OnInit {

  reproducir() {
    const audio = new Audio('../../../assets/audio/Primer_episodio.mp3');
    audio.play();
}

  constructor() { }

  ngOnInit(): void {
  }

}
