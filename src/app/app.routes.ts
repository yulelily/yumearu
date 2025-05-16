import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { LibComponent } from './lib/lib.component';
import { UsrComponent } from './usr/usr.component';

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    title: "Yumearu ~Otome Blog~"
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
    title: "404 Error"
  }
];
