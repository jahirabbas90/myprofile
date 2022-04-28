import { InfoField } from './infoField.model';
import { Injectable } from '@angular/core';

@Injectable()
export class AboutService {
  private works: InfoField[] = [
    new InfoField('Senior Mobile Application Developer', 'WebMaddy Web Studio', 'June 2020 - Present', 'https://www.catthttps://www.webmaddy.com/'),
    new InfoField('Senior Mobile Application Developer', 'Notional Systems', 'Aug 2018 - june 2020', 'https://www.notionalsystems.com/'),
    new InfoField('Junior Android Developer', 'Pixibit Solution', 'Jan 2018 -  Aug 2018', 'https://www.pixibitdesign.com/'),
    new InfoField('Junior Android Developer', 'Cattlefield Technology', 'June 2016 - Dec 2018', 'https://www.cattlefield.com/'),
    
  ];

  private education: InfoField[] = [
    new InfoField(
      'Computer Science Graduate',
      'Bengal Institute Of Technology & Management',
      'june 2007 - July 2011',
      'https://bitm.org.in/'
    ),
  ];

  private languages: InfoField[] = [
    new InfoField('Bengali', 'Bilingual or native competence', ' ', ' '),
    new InfoField('Hindi', 'Bilingual or native competence', ' ', ' '),
    new InfoField('English', 'Profesional competence', ' ', ' ')
  ];

  getEducation(): InfoField[] {
    return this.education;
  }

  getWorks(): InfoField[] {
    return this.works;
  }

  getLanguages(): InfoField[] {
    return this.languages;
  }
}
