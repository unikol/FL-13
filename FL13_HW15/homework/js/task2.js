/* Your code goes here */
let message, messageForCar;

function generateDriveMethod(vehicleType){
    if (vehicleType === 'car') {
        message = messageForCar;
    }
    return function drive(){

        console.log(message)

    }
}
