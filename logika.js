let umur = 17;
let punyaKTP = false;
let punyaSIM = false;

let bolehNaikMotor = (umur = 17) && punyaSIM;

let statusRemaja= (umur >= 13) || punyaKTP;

console.log("Boleh naik motor: ", bolehNaikMotor)
console.log("Status remaja: ", statusRemaja)