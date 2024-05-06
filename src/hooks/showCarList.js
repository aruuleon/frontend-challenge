export function showCarList(cars) {
    const carList = [];
    Object.keys(cars).map(car => {
        Object.keys(cars[car]).map(companies => {
          Object.keys(cars[car][companies]).map(company => {
            const currentCar = cars[car][companies][company];
            const newCar = {
                image: currentCar.PictureURL,
                features: currentCar.Features2,
                group: currentCar.VehGroup,
                code: currentCar.Code,
                name: currentCar.Name,
                rates: currentCar.Rates
            }
            carList.push(newCar);
          })
        })
    })
    return carList;
}