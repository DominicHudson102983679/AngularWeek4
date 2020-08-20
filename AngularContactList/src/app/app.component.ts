import { Component } from '@angular/core';
import { Contact } from "./contact/contact";
import { DomElementSchemaRegistry } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularContactList';

  contacts: Contact[] = [

  ];
}
