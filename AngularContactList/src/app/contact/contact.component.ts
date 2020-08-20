import { Component, OnInit } from '@angular/core';
import { Contact } from "./contact";
import { DomElementSchemaRegistry } from '@angular/compiler';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contacts: Contact[];
  // name: string;
  name: "hahahah";

  constructor() { }

  ngOnInit(): void {
  }

}
