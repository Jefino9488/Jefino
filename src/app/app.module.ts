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
import {
    MatCard,
    MatCardActions,
    MatCardContent,
    MatCardHeader,
    MatCardSubtitle,
    MatCardTitle
} from "@angular/material/card";
import {DevCardComponent} from './res/dev-card/dev-card.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        ProjectsComponent,
        ContactComponent,
        NavbarComponent,
        DevCardComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MatCardSubtitle,
        MatCardTitle,
        MatCard,
        MatCardHeader,
        MatCardContent,
        MatCardActions
    ],
    providers: [
        provideAnimationsAsync()
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
