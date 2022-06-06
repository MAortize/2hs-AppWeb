import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wallpaper',
  templateUrl: './wallpaper.component.html',
  styleUrls: ['./wallpaper.component.css']
})
export class WallpaperComponent implements OnInit {

  infoCards:any[] = [
    {
      img: '../../assets/icons/1.png',
      title:'TUPAC',
      route: "wallpaper"
    },
    {
      img: '../../assets/icons/2.png',
      title:'EMINEM',
      route: "sticker"
    },
    {
      img: '../../assets/icons/3.png',
      title:'MIKE',
      route: "gallery"
    },
    {
      img: '../../assets/icons/4.png',
      title:'50 CENT',
      route: "gif"
    },
    {
      img: '../../assets/icons/5.png',
      title:'PHARREL WILLIAMS',
      route: "wallpaper"
    },

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
