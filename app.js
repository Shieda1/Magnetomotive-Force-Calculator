// https://calculator.swiftutors.com/magnetomotive-force-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const magnetomotiveForceRadio = document.getElementById('magnetomotiveForceRadio');
const numberofTurnsintheCoilRadio = document.getElementById('numberofTurnsintheCoilRadio');
const currentRadio = document.getElementById('currentRadio');

let magnetomotiveForce;
let numberofTurnsintheCoil = v1;
let current = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

magnetomotiveForceRadio.addEventListener('click', function() {
  variable1.textContent = '(N) Number of Turns in the Coil (turns)';
  variable2.textContent = '(I) Current (amps)';
  numberofTurnsintheCoil = v1;
  current = v2;
  result.textContent = '';
});

numberofTurnsintheCoilRadio.addEventListener('click', function() {
  variable1.textContent = '(F) Magnetomotive Force (amps x turns)';
  variable2.textContent = '(I) Current (amps)';
  magnetomotiveForce = v1;
  current = v2;
  result.textContent = '';
});

currentRadio.addEventListener('click', function() {
  variable1.textContent = '(F) Magnetomotive Force (amps x turns)';
  variable2.textContent = '(N) Number of Turns in the Coil (turns)';
  magnetomotiveForce = v1;
  numberofTurnsintheCoil = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(magnetomotiveForceRadio.checked)
    result.textContent = `Magnetomotive Force = ${computeMagnetomotiveForce().toFixed(2)} amps x turns`;

  else if(numberofTurnsintheCoilRadio.checked)
    result.textContent = `Number of Turns in the Coil = ${computeNumberofTurnsintheCoil().toFixed(2)} turns`;

  else if(currentRadio.checked)
    result.textContent = `Current = ${computeCurrent().toFixed(2)} amps`;
})

// calculation

function computeMagnetomotiveForce() {
  return Number(numberofTurnsintheCoil.value) * Number(current.value);
}

function computeNumberofTurnsintheCoil() {
  return Number(magnetomotiveForce.value) / Number(current.value);
}

function computeCurrent() {
  return Number(magnetomotiveForce.value) / Number(numberofTurnsintheCoil.value);
}