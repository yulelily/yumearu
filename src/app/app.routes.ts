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
    title: "~/aru/Otome_Diary"
  },
  {
    path: "post/:title",
    component: PostComponent,
    title: "~/aru/Otome_Diary"
  },
  {
    path: "lib",
    component: LibComponent,
    title: "/lib"
  },
  {
    path: "usr",
    component: UsrComponent,
    title: "/usr"
  },
  {
    path: "**",
    component: ErrorComponent,
    title: "/dev/null"
  }
];
