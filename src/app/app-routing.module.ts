import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {HomeComponent} from './home/home.component';
import {ProjectsComponent} from './projects/projects.component';
import {MoreComponent} from "./more/more.component";
import {PageComponent} from "./page/page.component";

const routes: Routes = [
    {path: '', redirectTo: "/home", pathMatch: 'full'},
    {path: '', component: HomeComponent, data: {animation: 'Home'}},
    {path: 'home', component: HomeComponent, data: {animation: 'Home'}},
    {path: 'about', component: AboutComponent, data: {animation: 'About'}},
    {path: 'projects', component: ProjectsComponent, data: {animation: 'Projects'}},
    {path: 'contact', component: ContactComponent, data: {animation: 'Contact'}},
    {path: 'more', component: MoreComponent, data: {animation: 'More'}},
    {path: 'page', component: PageComponent, data: {animation: 'Page'}}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
