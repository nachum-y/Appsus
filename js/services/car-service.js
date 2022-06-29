import { utilService } from './util-service.js';
import { storageService } from './async-storage-service.js';

const CARS_KEY = 'cars';
_createCars();

export const carService = {
    query,
    remove,
    save,
    getEmptyCar,
    get,
    getNextCarId
};

function query() {
    return storageService.query(CARS_KEY)
    // return utilService.loadFromStorage(CARS_KEY);
}

function remove(carId) {
    // return Promise.reject('Big Error Badd')
    return storageService.remove(CARS_KEY, carId)
}

function get(carId) {
    return storageService.get(CARS_KEY, carId)
}

function save(car) {
    if (car.id) return storageService.put(CARS_KEY, car)
    else return storageService.post(CARS_KEY, car)

    // car.id = utilService.makeId();
    // const cars = query();
    // cars.push(car);
    // utilService.saveToStorage(CARS_KEY, cars);
    // return car;
}
function getNextCarId(carId) {
    return storageService.query(CARS_KEY)
        .then(cars => {
            const idx = cars.findIndex(car => car.id === carId)
            return (idx < cars.length-1)? cars[idx + 1].id : cars[0].id
        })
}

function getEmptyCar() {
    return {
        id: '',
        vendor: '',
        maxSpeed: 0
    };
}

function _createCars() {
    let cars = utilService.loadFromStorage(CARS_KEY);
    if (!cars || !cars.length) {
        cars = [];
        cars.push(_createCar('Audu Mea', 300));
        cars.push(_createCar('Fiak Ibasa', 120));
        cars.push(_createCar('Subali Pesha', 100));
        cars.push(_createCar('Mitsu Bashi', 150));
        utilService.saveToStorage(CARS_KEY, cars);
    }
    return cars;
}

function _createCar(vendor, maxSpeed = 250) {
    const car = {
        id: utilService.makeId(),
        vendor,
        maxSpeed,
    };
    return car;
}



