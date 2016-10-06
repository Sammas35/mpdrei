import {Component, OnInit} from '@angular/core';
import {UserdataService} from './userdata.service';

@Component({
    selector: 'mpdrei-app',
    template: '<h1>AngularJs 2 in electron</h1>',
    providers: [UserdataService]
})
export class AppComponent implements OnInit{
    constructor(private userdataService: UserdataService) {
    }

    ngOnInit():void{
        console.log('AppComponent ngOnInit')
        this.userdataService.getDirectories();
    }
}