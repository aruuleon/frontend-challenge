import {useState, useEffect} from 'react';
import {RateInclusion} from './00-index';
import {Button, Radio} from '@mui/material';

export const AvailableRate = ( {car} ) => {
  const InformationCar = Object.entries(car.rates);
  const [selectedValue, setSelectedValue] = useState(InformationCar[0][0]);
  const [selectedRateCar, setSelectedRateCar] = useState(InformationCar[0]);
  const [open, setOpen] = useState(false);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  }
  const handleOpen = (car) => {
    setSelectedRateCar(car);
    setOpen(true);
  }
  const handleClose = () => {
    setOpen(false);
  }
  useEffect(() => {
    setSelectedValue(InformationCar[0][0]);
    setSelectedRateCar(InformationCar[0]);
  }, [car])
  
  return (
    <>
        {
          InformationCar.map((rate, id) => {
            return (
              <div key={id} className='available-rates-container'>
                <div>
                <Radio
                  checked={selectedValue === rate[0]}
                  onChange={handleChange}
                  value={rate[0]}
                  name="radio-buttons"
                  sx={{'&.Mui-checked': {color: '#d51a33'}}}
                />
                  <span style={{fontFamily: 'Rubik Medium', color: '#484848'}}> 
                    {rate[0]} - {rate[1].RateData.name} 
                  </span>
                </div>
                <div>
                  <Button 
                    variant="text" 
                    disableElevation 
                    className='button-rates' 
                    style={{ color: "#d51a33", textTransform: 'none', fontFamily: 'Rubik Medium', margin: '0 5px', fontSize: '12px'}}
                    onClick={() => handleOpen(rate)}
                  > Rate Inclusions </Button>
                  <RateInclusion open={open} handleClose={handleClose} rate={selectedRateCar} />
                </div>
                <div className='usd-price-container'>
                  <span className='usd-container'> USD </span>
                  <span className='price-container'> {rate[1].EstimatedTotalAmount.toFixed(2)} </span> 
                </div>
              </div>
            )
          })
        }
    </>
  )
}