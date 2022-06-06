import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  infoCards:any[] = [
    {
      img: '../../assets/icons/pac.jpg',
      title:'2 Of Amerikaz Most Wanted',
      subtitle: 'Pac y Snoop muestran sus joyas en los MTV Video Music Awards.',
      route: "wallpaper"
    },
    {
      img: '../../assets/icons/pac_1.jpg',
      title:'Duke Represent',
      subtitle: 'Tupac Shakur usando un jersey de los Duke Blue Devils de Carolina del Norte.',
      route: "sticker"
    },
    {
      img: '../../assets/icons/pac_2.jpg',
      title:'Pac & Latinos',
      subtitle: 'Tupac en la Premiere de "I Like It Like That" 13 de Octubre de 1994.',
      route: "gallery"
    },
    {
      img: '../../assets/icons/bob.jpg',
      title:'Marley For Ever',
      subtitle: 'Bob Marley se relaja con sus amigos frente a su casa en el 56 de Hope Road el 9 de julio de 1970 en Kingston, Jamaica.',
      route: "gif"
    },
    {
      img: '../../assets/icons/dre.jpg',
      title:'Just Hits',
      subtitle: 'Dr. Dre durante el 10º partido anual de béisbol Rock´n Jock de la MTV en Los Ángeles, California, Estados Unidos.',
      route: "wallpaper"
    },
    {
      img: '../../assets/icons/eminem.jpg',
      title:'Slim Shady',
      subtitle: 'Eminem al contrario de un "Rockstar", pone en alto una Coca-Cola dietetica.',
      route: "wallpaper"
    },
    {
      img: '../../assets/icons/eminem_1.jpg',
      title:'YouTube Music Awards 2013 - Backstage',
      subtitle: 'Eminem, Earl Sweatshirt, Taco Bennett y Tyler The Creator asisten a los YouTube Music Awards 2013 el 3 de noviembre de 2013 en Nueva York.',
      route: "wallpaper"
    },
    {
      img: '../../assets/icons/ice_cube.jpg',
      title:'Ice',
      subtitle: 'Ice Cube y Ice-T durante el MTV Rock n´Jock Baseball de 1998 en Los Ángeles, California, Estados Unidos',
      route: "wallpaper"
    },
    {
      img: '../../assets/icons/ex.jpg',
      title:'El Niño con más Flow',
      subtitle: 'Lil´ Bow Wow durante la 29ª edición de los American Music Awards',
      route: "wallpaper"
    },
    {
      img: '../../assets/icons/lil.jpg',
      title:'Lil Dogg',
      subtitle: 'Son pocas las veces que hemos podido disfrutar de una colaboración de estos dos grandes, aquí se les ve juntos en un evento de DIRECTV.',
      route: "wallpaper"
    },
    {
      img: '../../assets/icons/lil_1.jpg',
      title:'DGK',
      subtitle: 'Los comienzos de la iconica marca "Dirty Ghetto Kids" de la cual es dueño Lil Wayne.',
      route: "wallpaper"
    },
    {
      img: '../../assets/icons/nelly.jpg',
      title:'Nelly imponiendo moda',
      subtitle: 'Nelly y su particular estilo de usar durag con gorra.',
      route: "wallpaper"
    },

  ]


  constructor() { }

  ngOnInit(): void {
  }

}
