import {Component} from '@angular/core';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.css'
})
export class NavbarComponent {
    menuWidth: string = '0';
    toggleMenu() {
        this.menuWidth = this.menuWidth === '0' ? '100%' : '0';
    }
}
