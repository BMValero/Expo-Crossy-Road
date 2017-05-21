import Expo from 'expo'
import React, {Component} from 'react';
import Generic from './Generic';

const cars = [
  'police_car',
  'blue_car',
  'blue_truck',
  'green_car',
  'orange_car',
  'purple_car',
  'red_truck',
  'taxi',
];

export default class Car extends Generic {

  setup = async () => {
    for (let index in cars) {
      let car = cars[index];
      const model = await this._download(car);
      this.models[`${index}`] = model;
    }

    return this.models;
  }
}