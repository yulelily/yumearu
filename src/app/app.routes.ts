import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { LibComponent } from './lib/lib.component';
import { UsrComponent } from './usr/usr.component';
import { PostComponent } from './post/post.component';

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    title: "Otome Diary"
  },
  {
    path: "post/:title",
    component: PostComponent,
    title: "Otome Diary"
  },
  {
    path: "lib",
    component: LibComponent,
    title: "Lib"
  },
  {
    path: "usr",
    component: UsrComponent,
    title: "Usr"
  },
  {
    path: "**",
    component: ErrorComponent,
    title: "/dev/null"
  }
];
