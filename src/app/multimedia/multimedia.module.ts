import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MultimediaRoutingModule } from './multimedia-routing.module';
import { MultimediaComponent } from './multimedia.component';
import { RouterModule } from '@angular/router';
import { WallpaperComponent } from './wallpaper/wallpaper.component';
import { StickerComponent } from './sticker/sticker.component';
import { GifComponent } from './gif/gif.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PodcastComponent } from './podcast/podcast.component';


@NgModule({
  declarations: [
    MultimediaComponent,
    WallpaperComponent,
    StickerComponent,
    GifComponent,
    GalleryComponent,
    PodcastComponent
  ],
  imports: [
    CommonModule,
    MultimediaRoutingModule,
    RouterModule
  ]
})
export class MultimediaModule { }
