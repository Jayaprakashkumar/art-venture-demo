import { Injectable } from '@angular/core';
import { of as observableOf,  Observable } from 'rxjs';
import { ProfitBarAnimationChartData } from '../data/profit-bar-animation-chart';

@Injectable()
export class ProfitBarAnimationChartService extends ProfitBarAnimationChartData {

  private data: any;

  constructor() {
    super();
    this.data = {
      firstLine: this.getDataForFirstLine(),
      secondLine: this.getDataForSecondLine(),
      thirdLine: this.getDataForFirstLine(),
      fourthLine: this.getDataForFourthLine()
    };
  }

  hammer_text:{auctionYr:any, hammerprice:any, lowEstPric:any, highEstPric:any}[]=[
      {
        "auctionYr": 1984,
        "hammerprice": 43000,
        "lowEstPric": 34700,
        "highEstPric": 44000
      },
      {
        "auctionYr": 1985,
        "hammerprice": 101500,
        "lowEstPric": 71000,
        "highEstPric": 96500
      },
      {
        "auctionYr": 1986,
        "hammerprice": 113500,
        "lowEstPric": 61500,
        "highEstPric": 84000
      },
      {
        "auctionYr": 1987,
        "hammerprice": 38500,
        "lowEstPric": 58000,
        "highEstPric": 71000
      },
      {
        "auctionYr": 1988,
        "hammerprice": 158500,
        "lowEstPric": 122000,
        "highEstPric": 154000
      },
      {
        "auctionYr": 1989,
        "hammerprice": 187700,
        "lowEstPric": 156000,
        "highEstPric": 209000
      },
      {
        "auctionYr": 1990,
        "hammerprice": 382000,
        "lowEstPric": 300000,
        "highEstPric": 420000
      },
      {
        "auctionYr": 1991,
        "hammerprice": 165000,
        "lowEstPric": 153000,
        "highEstPric": 197000
      },
      {
        "auctionYr": 1992,
        "hammerprice": 98500,
        "lowEstPric": 107000,
        "highEstPric": 141000
      },
      {
        "auctionYr": 1993,
        "hammerprice": 224000,
        "lowEstPric": 244000,
        "highEstPric": 321000
      },
      {
        "auctionYr": 1994,
        "hammerprice": 231750,
        "lowEstPric": 205000,
        "highEstPric": 256000
      },
      {
        "auctionYr": 1995,
        "hammerprice": 26200,
        "lowEstPric": 28000,
        "highEstPric": 38000
      },
      {
        "auctionYr": 1996,
        "hammerprice": 47000,
        "lowEstPric": 28000,
        "highEstPric": 39000
      },
      {
        "auctionYr": 1997,
        "hammerprice": 133110,
        "lowEstPric": 136959,
        "highEstPric": 198448
      },
      {
        "auctionYr": 1998,
        "hammerprice": 222332,
        "lowEstPric": 191485,
        "highEstPric": 276146
      },
      {
        "auctionYr": 1999,
        "hammerprice": 177800,
        "lowEstPric": 135000,
        "highEstPric": 183000
      },
      {
        "auctionYr": 2000,
        "hammerprice": 135000,
        "lowEstPric": 135000,
        "highEstPric": 180000
      },
      {
        "auctionYr": 2001,
        "hammerprice": 929500,
        "lowEstPric": 998000,
        "highEstPric": 1425000
      },
      {
        "auctionYr": 2002,
        "hammerprice": 601578,
        "lowEstPric": 712177,
        "highEstPric": 1020298
      },
      {
        "auctionYr": 2003,
        "hammerprice": 954339,
        "lowEstPric": 874683,
        "highEstPric": 1218695
      },
      {
        "auctionYr": 2004,
        "hammerprice": 367385,
        "lowEstPric": 416995,
        "highEstPric": 570715
      },
      {
        "auctionYr": 2005,
        "hammerprice": 1791839,
        "lowEstPric": 1334260,
        "highEstPric": 1956074
      },
      {
        "auctionYr": 2006,
        "hammerprice": 1718711,
        "lowEstPric": 1110753,
        "highEstPric": 1591035
      },
      {
        "auctionYr": 2007,
        "hammerprice": 2110087,
        "lowEstPric": 1086970,
        "highEstPric": 1518729
      },
      {
        "auctionYr": 2008,
        "hammerprice": 759514,
        "lowEstPric": 2090198,
        "highEstPric": 2980459
      },
      {
        "auctionYr": 2009,
        "hammerprice": 1338699,
        "lowEstPric": 1183890,
        "highEstPric": 1667587
      },
      {
        "auctionYr": 2010,
        "hammerprice": 1281973,
        "lowEstPric": 1635665,
        "highEstPric": 2312193
      },
      {
        "auctionYr": 2011,
        "hammerprice": 1341508,
        "lowEstPric": 1608840,
        "highEstPric": 2231295
      },
      {
        "auctionYr": 2012,
        "hammerprice": 1885913,
        "lowEstPric": 1740395,
        "highEstPric": 2519186
      },
      {
        "auctionYr": 2013,
        "hammerprice": 1969203,
        "lowEstPric": 2684285,
        "highEstPric": 3572624
      },
      {
        "auctionYr": 2014,
        "hammerprice": 3055634,
        "lowEstPric": 2631037,
        "highEstPric": 3867951
      },
      {
        "auctionYr": 2015,
        "hammerprice": 2652828,
        "lowEstPric": 2631663,
        "highEstPric": 3784482
      },
      {
        "auctionYr": 2016,
        "hammerprice": 2615784,
        "lowEstPric": 2566482,
        "highEstPric": 3778472
      },
      {
        "auctionYr": 2017,
        "hammerprice": 3599270,
        "lowEstPric": 2718451,
        "highEstPric": 3840742
      },
      {
        "auctionYr": 2018,
        "hammerprice": 7277422,
        "lowEstPric": 6659047,
        "highEstPric": 9765831
      }
     ]

  getDataForFirstLine(): any[] {
    return this.hammer_text.map( val =>{
      return val.hammerprice
    });
  }
  
  getDataForSecondLine(): any[] {
    return this.hammer_text.map( val =>{
      return val.lowEstPric
    })
  };

  getDataForThirdLine(): any[] {
    return this.hammer_text.map( val =>{
      return val.highEstPric
    })
  }
  
  getDataForFourthLine(): any[] {
    return this.hammer_text.map( val =>{
      return val.auctionYr
    })
  }

  createEmptyArray(nPoints: any) {
    return Array.from(Array(nPoints));
  }

  getChartData(): Observable<{ firstLine: any[]; secondLine: any[]; thirdLine: any[]; fourthLine: any[] }> {
    return observableOf(this.data);
  }
}
