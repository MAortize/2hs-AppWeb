import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multimedia',
  templateUrl: './multimedia.component.html',
  styleUrls: ['./multimedia.component.css']
})
export class MultimediaComponent implements OnInit {

  infoCards:any[] = [
    {
      img: '../../assets/icons/wallpaper.png',
      title:'WALLPAPERS',
      route: "wallpaper"
    },
    {
      img: '../../assets/icons/sticker.png',
      title:'STICKERS',
      route: "sticker"
    },
    {
      img: '../../assets/icons/gallery.png',
      title:'FOTOS INÉDITAS',
      route: "gallery"
    },
    {
      img: '../../assets/icons/gif.png',
      title:'GIF',
      route: "gif"
    },
    {
      img: '../../assets/icons/2hspodcast.png',
      title:'PODCAST',
      route: "podcast"
    },
    
  ] 

  constructor() { }

  ngOnInit(): void {
  }

}
