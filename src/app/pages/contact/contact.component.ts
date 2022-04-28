import { Component } from '@angular/core';
import { Contact } from './contact.model';

@Component({
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contacts = [
    new Contact('/jahirabbas', 'https://www.linkedin.com/in/jahirabbas-mollick-60237b59', 'linkedin', 'linkedin'),
    new Contact('jhrbbsmollick730@gmail.com', 'mailto:jhrbbsmollick730@gmail.com', 'email', 'envelope'),
    new Contact('/jahirabbas90', 'https://github.com/jahirabbas90', 'github', 'github'),
    new Contact('@jahir_abbas', 'https://twitter.com/jahirabbas', 'twitter', 'twitter'),
  ];
}
