import { Component } from '@angular/core'

@Component({
    selector: 'app-header',
    standalone: true,   //Angular 19+ questo è già settato in auto
    templateUrl: './header.component.html',
    styleUrl: './header.component.css'
})
export class HeaderComponent {}