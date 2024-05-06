import {useEffect, useState} from 'react';
import {CarDetail, Characteristic, AvailableRate} from './CarList/00-index';
import {showCarList} from '../hooks/showCarList';
import Cars from '../database/CarsJson.json';

export const CarList = ({optionSelected, checkedFeatures}) => {
  const [cars, setCars] = useState([]);
  const [carsFiltered, setCarsFiltered] = useState(showCarList(Cars));
  
  useEffect(() => {
    setCars(showCarList(Cars));
  }, [])
  useEffect(() => {
    if(optionSelected == 'All') {
      setCars(showCarList(Cars));
    } else {
      setCars(showCarList(Cars).filter(car => car.group === optionSelected));
    }
  }, [optionSelected])
  useEffect(() => {
    if (checkedFeatures.length === 0) {
      setCarsFiltered(cars);
    } else {
        const newFilteredCars = cars.filter(car => {
        for (const key in car.features) {
          if (checkedFeatures.includes(car.features[key])) return true;
          if (checkedFeatures.includes('7') && car.features[key] >= 7) return true;
        }
        return false;
      })
      setCarsFiltered(newFilteredCars);
    }
  }, [checkedFeatures, cars])

  return (
    <div className='cars-container'>
      {
        carsFiltered.map((car, id) => {
          return (
            <div key={id} className='car-resume-container'>
              <CarDetail key={id} car={car} />
              <div className='characteristics-rates-container'>
                <div className='characteristics-resume'>
                  <p> CHARACTERISTICS </p>
                  <Characteristic car={car} />
                </div>
                <div className='rates-resume'>
                  <p> AVAILABLE RATES </p>
                  <AvailableRate car={car} />
                </div>
              </div>
            </div> 
          )
        })
      }
    </div>
  )
}