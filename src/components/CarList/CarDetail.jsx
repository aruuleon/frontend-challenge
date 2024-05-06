import {Button} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

export const CarDetail = ({car}) => {
  return (
    <div className='car-detail-container'>
      <img src={car.image} alt={car.name} />
      <div className='resume-car'>
        <p> {car.features.category} </p>
        <p> GROUP {car.group} ({car.code}) </p>
        <p> {car.name} </p>
      </div>
      <Button 
        variant="contained" 
        disableElevation 
        className='button-car' 
        style={{position: 'relative', right: '80px'}}
        sx={{
          backgroundColor: "#d51a33",
          '&:hover': {
            backgroundColor: '#2b2b2b',
          },
        }}
      > 
        <CheckIcon sx={{fontSize: 14, marginRight: 1}} className='button-book-now' /> Book now! 
      </Button>
    </div>
  )
}