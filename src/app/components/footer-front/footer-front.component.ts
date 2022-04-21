import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-footer-front',
    templateUrl: './footer-front.component.html',
    styleUrls: ['./footer-front.component.scss']
})
export class FooterFrontComponent implements OnInit {
    test : Date = new Date();

    constructor() { }

    ngOnInit() {}
}
