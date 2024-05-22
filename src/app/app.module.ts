import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {ProjectsComponent} from './projects/projects.component';
import {ContactComponent} from './contact/contact.component';
import {NavbarComponent} from './res/navbar/navbar.component';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {
    MatCard,
    MatCardActions,
    MatCardContent, MatCardFooter,
    MatCardHeader, MatCardImage,
    MatCardSubtitle,
    MatCardTitle
} from "@angular/material/card";
import {DevCardComponent} from './res/dev-card/dev-card.component';
import {ProjectRowComponent} from './res/project-row/project-row.component';
import {MatDivider} from "@angular/material/divider";
import {MatProgressBar} from "@angular/material/progress-bar";
import {MatButton} from "@angular/material/button";
import {MatIconModule} from '@angular/material/icon';
import { MoreComponent } from './more/more.component';
import { PageComponent } from './page/page.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        ProjectsComponent,
        ContactComponent,
        NavbarComponent,
        DevCardComponent,
        ProjectRowComponent,
        MoreComponent,
        PageComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MatCardSubtitle,
        MatCardTitle,
        MatCard,
        MatCardHeader,
        MatCardContent,
        MatCardActions,
        MatDivider,
        MatCardFooter,
        MatProgressBar,
        MatButton,
        MatCardImage,
        MatIconModule,
        BrowserAnimationsModule
    ],
    providers: [
        provideAnimationsAsync()
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
