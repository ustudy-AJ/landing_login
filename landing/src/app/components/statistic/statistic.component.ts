import { NgFor } from '@angular/common';
import { Component } from '@angular/core';


interface Card {
  title: string;
  subtitle: string;
  link: string;
  icon: string;
  buttonText: string;
}

@Component({
  selector: 'app-statistic',
  imports: [NgFor],
  templateUrl: './statistic.component.html',
  styleUrl: './statistic.component.scss'
})
export default class StatisticComponent {
  cards: Card[] = [
      {
        title: 'VACANCY.ARGOS.UZ',
        subtitle:
          'Yagona portal – davlat organlari tomonidan taqdim etiladigan yagona nuqtasi',
        link: 'https://vacancy.argos.uz',
        icon: '/assets/argos-icon.svg',
        buttonText: 'Book on Viator',
      },
      {
        title: 'HRM.ARGOS.UZ',
        subtitle:
          'Yagona portal – davlat organlari tomonidan taqdim etiladigan yagona nuqtasi',
        link: 'https://hrm.argos.uz',
        icon: '/assets/argos-icon.svg',
        buttonText: 'Book on Viator',
      },
    ];
}
