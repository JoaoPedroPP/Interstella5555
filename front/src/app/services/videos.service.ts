import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VideosService {

  // url example: https://youtu.be/L93-7vRfxNs
  public links = [
    { name: 'One More Time', url: 'https://www.youtube.com/embed/FGBhQbmPwH8?autoplay=1', time: 321 },
    { name: 'Aerodynamic', url: 'https://www.youtube.com/embed/L93-7vRfxNs?autoplay=1', time: 212 },
    { name: 'Digital Love', url: 'https://www.youtube.com/embed/FxzBvqY5PP0?autoplay=1', time: 265 },
    { name: 'Harder, Better, Faster, Stronger', url: 'https://www.youtube.com/embed/gAjR4_CbPpQ?autoplay=1', time: 222 },
    { name: 'Crescendolls', url: 'https://www.youtube.com/embed/6S3ISlvlEbs?autoplay=1', time: 234 },
    { name: 'Nightvision', url: 'https://www.youtube.com/embed/xBTqRd09y3E?autoplay=1', time: 111 },
    { name: 'Superheroes', url: 'https://www.youtube.com/embed/bRt5z880CFY?autoplay=1', time: 234 },
    { name: 'High Life', url: 'https://www.youtube.com/embed/HoQN7K6HdRw?autoplay=1', time: 196 },
    { name: 'Something About Us', url: 'https://www.youtube.com/embed/sOS9aOIXPEk?autoplay=1', time: 228 },
    { name: 'Voyager', url: 'https://www.youtube.com/embed/CqZgd6-xQl8?autoplay=1', time: 225 },
    { name: 'Veridis Quo', url: 'https://www.youtube.com/embed/HhZaHf8RP6g?autoplay=1', time: 406 },
    { name: 'Short Circuit', url: 'https://www.youtube.com/embed/1-yzqgwTVi8?autoplay=1', time: 196 },
    { name: 'Face To Face', url: 'https://www.youtube.com/embed/dKJfJMMsqX4?autoplay=1', time: 238 },
    { name: 'Too Long', url: 'https://www.youtube.com/embed/Z6_ZNW1DACE?autoplay=1', time: 600 }
  ];

  public randomLinks = []

  constructor() { }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  randomize (arr) {
    if (arr.length == 0) return;
    const index = this.getRandomInt(0, arr.length);
    this.randomLinks.push(arr[index]);
    arr.splice(index, 1)
    this.randomize(arr)
  }
}