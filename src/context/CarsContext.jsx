import { createContext, useEffect, useState } from 'react';
import carsData from '../data/cars.json';

// fetch('cars.json')
// .then((res) => {
//   return res.json();
// })
// .then((data) => console.log(data));

const initialState = {
  cars: [],
  setCars: () => {},
};

export const CarsContext = createContext(initialState);

export const CarsContextProvider = (props) => {
  const [state, setState] = useState(
    JSON.parse(localStorage.getItem('cars')) ||
      carsData.map((car) => {
        return {
          name: car.name,
          img: car.image,
          class: car.class,
          count: 0,
          desc: car.description,
          seats: car.seats,
          luggage: car.luggage,
        };
      })
  );

  return (
    <CarsContext.Provider value={{ cars: state, setCars: setState }}>{props.children}</CarsContext.Provider>
  );
};
