import { Component } from '@angular/core';
import { fruits } from './fruits-list';

@Component({
  selector: 'ngx-list',
  templateUrl: 'list.component.html',
  styleUrls: ['list.component.scss'],
})
export class ListComponent {

exhibiton_Details : {name:String, place:String, date:String}[]=[
  {
    name:'Alex Katz Paints Ada, 1957-2005 ',
    place: 'The Jewish Museum, New York, NY',
    date: 'October 27, 2006 - March 18, 2007'
  },
  {
    name:'Alex Katz Cut Outs: 1950s - 1980s ',
    place: "Gavin Brown's Enterprise, 291 Grand St, New York, NY ",
    date: 'November 5, 2017 - December 17, 2017'
  },
  {
    name:'Alex Katz: Cut Outs',
    place: 'Paul Kasmin Gallery, 515 West 27th St, New York, NY ',
    date: 'March 8, 2018 - April 12, 2018'
  },
  {
    name:'Alex Katz: Portraits & Late Summer Flowers',
    place: 'Meyerovich Gallery, San Francisco',
    date: 'August 1, 2013 - November 15, 2013'
  },
  {
    name:'Alex Katz: Quick Light ',
    place: 'Serpentine Gallery, London',
    date: 'June 2, 2016 - September 11, 2016'
  },
  {
    name:'Alex Katz: Grass and Trees  ',
    place: 'Richard Gray Gallery, Chicago, Illinois ',
    date: 'April 12, 2018 - June 2, 2018'
  }
]




  // fruits = fruits;

  // users: { name: string, title: string }[] = [
  //   { name: 'Carla Espinosa', title: 'Nurse' },
  //   { name: 'Bob Kelso', title: 'Doctor of Medicine' },
  //   { name: 'Janitor', title: 'Janitor' },
  //   { name: 'Perry Cox', title: 'Doctor of Medicine' },
  //   { name: 'Ben Sullivan', title: 'Carpenter and photographer' },
  // ];
}
