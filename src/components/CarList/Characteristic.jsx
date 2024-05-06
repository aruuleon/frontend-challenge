import Characteristics from '../../database/Characteristics.json';

export const Characteristic = ({car}) => {
  return (
    <div className="characteristics-container">
      {Characteristics.map((item, index) => {
        const key = item.description.replace(/ (\w)/g, (match, letter) => letter.toUpperCase());
        return (
          <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
            <img src={item.image} alt={item.description} />
            <span> {car.features[key]} {item.description}  </span>
          </div>
        );
      })}
    </div>
  )
}