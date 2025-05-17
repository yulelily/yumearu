import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { LibComponent } from './lib/lib.component';
import { UsrComponent } from './usr/usr.component';
import { MyVowToMyLiegeComponent } from './posts/my-vow-to-my-liege/my-vow-to-my-liege.component';

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    title: "~/aru/Otome_Diary"
  },
  {
    path: "post/my-vow-to-my-liege",
    component: MyVowToMyLiegeComponent,
    title: "~/aru/my_vow_to_my_liege"
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
