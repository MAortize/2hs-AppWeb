import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { GifComponent } from './gif/gif.component';
import { MultimediaComponent } from './multimedia.component';
import { PodcastComponent } from './podcast/podcast.component';
import { StickerComponent } from './sticker/sticker.component';
import { WallpaperComponent } from './wallpaper/wallpaper.component';

const routes: Routes = [
  { path: '', component: MultimediaComponent },
  { path: 'wallpaper', component: WallpaperComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'sticker', component: StickerComponent },
  { path: 'gif', component: GifComponent },
  { path: 'podcast', component: PodcastComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MultimediaRoutingModule { }
