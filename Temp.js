var choice = parseInt(process.argv[2]);
var degrees = parseInt(process.argv[3]);
function degC(degreesF) {
    return (degreesF - 32) * 5 / 9;
}

function degF(degreesC) {
    return (degreesC * 9 / 5) + 32;
}

switch (choice) {
    case 1: if (32 <= degrees && degrees <= 212) {
        console.log(degrees + " degF = " + degC(degrees) + " degC");
    }
    else {
        console.log("Incorrect value");
    }
        break;

    case 2: if (0 <= degrees && degrees <= 100) {
        console.log(degrees + " degC = " + degF(degrees) + " degF");
    }
    else {
        console.log("Incorrect value");
    }
        break;

    default:
        console.log("Entered wrong choice")
        break;
}