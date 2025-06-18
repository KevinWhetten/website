import {Routes} from '@angular/router';
import {AboutComponent} from './about/about.component';
import {EducationComponent} from './education/education.component';
import {MusicComponent} from './music/music.component';
import {ProjectsComponent} from './projects/projects.component';

export const routes: Routes = [
  {path: '', component: AboutComponent},
  {path: 'about', component: AboutComponent},
  {path: 'education', component: EducationComponent},
  {path: 'music', component: MusicComponent},
  {path: 'projects', component: ProjectsComponent},
];
