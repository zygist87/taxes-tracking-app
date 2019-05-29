console.log("Projekto pradzia");

let shortList = [];

// let editIndex = -1; //this is for "edit" button
// //inputs
let electricityToInput = document.getElementById("electricityTo");
let gasToInput = document.getElementById("gasTo");
let waterToInput = document.getElementById("waterTo");
//buttons
let saveBtn = document.getElementById("saveBtn");


function doesItHasValue(x) {
  if (typeof x !== "number") {
    return 0;
  }
  return x;
};

function countElectricity() {

}

window.addEventListener('load', event => {
  var fromLocalStorage = JSON.parse(localStorage.getItem('shortList'));
  //everything for electricity
  let electricityFrom = parseFloat(document.getElementById("electricityFrom").value || 0);
  let electricityTo = parseFloat(document.getElementById("electricityTo").value || 0);
  let electricityRate = document.getElementById("electricityRate").value;
  let electricityDifference = electricityTo - electricityFrom;
  document.getElementById("electricityDifference").value = electricityDifference;
  let electricityResult = electricityDifference * electricityRate;
  electricityResult = doesItHasValue(electricityResult);
  let electricityOutput = document.getElementById("electricityResult");
  let electricitySpan = document.createElement("span");
  electricitySpan.textContent = "€ " + electricityResult;
  electricityOutput.appendChild(electricitySpan);


  //everything for gas
  let gasFrom = parseFloat(document.getElementById("gasFrom").value || 0);
  let gasTo = parseFloat(document.getElementById("gasTo").value || 0);
  let gasRate = document.getElementById("gasRate").value;
  let gasDifference = gasTo - gasFrom;
  document.getElementById("gasDifference").value = gasDifference;
  let gasResult = gasDifference * gasRate;
  gasResult = doesItHasValue(gasResult);
  let gasOutput = document.getElementById("gasResult");
  let gasSpan = document.createElement("span");
  gasSpan.textContent = "€ " + gasResult;
  gasOutput.appendChild(gasSpan);



  //everything for gas fixed padaryti
  let gasFixed = parseFloat(document.getElementById("gasFixed").value || 0);
  let gasFixedResult = document.getElementById("gasFixedResult");
  let gasFixedSpan = document.createElement("span");
  gasFixedSpan.textContent = "€ " + gasFixed;
  gasFixedResult.appendChild(gasFixedSpan);



  //everything for cold water
  let waterFrom = parseFloat(document.getElementById("waterFrom").value || 0);
  let waterTo = parseFloat(document.getElementById("waterTo").value || 0);
  let waterRate = document.getElementById("waterRate").value;
  let waterDifference = waterTo - waterFrom;
  document.getElementById("waterDifference").value = waterDifference;
  let waterResult = waterDifference * waterRate;
  waterResult = doesItHasValue(waterResult);
  let waterOutput = document.getElementById("waterResult");
  let waterSpan = document.createElement("span");
  waterSpan.textContent = "€ " + waterResult;
  waterOutput.appendChild(waterSpan);



  //everything for cold water fixed padaryti
  let waterFixed = parseFloat(document.getElementById("waterFixed").value || 0);
  let waterFixedResult = document.getElementById("waterFixedResult");
  let waterFixedSpan = document.createElement("span");
  waterFixedSpan.textContent = "€ " + waterFixed;
  waterFixedResult.appendChild(waterFixedSpan);



  //everything for other services
  let otherFixed = parseFloat(document.getElementById("otherFixed").value || 0);
  let otherFixedResult = document.getElementById("otherFixedResult");
  let otherFixedSpan = document.createElement("span");
  otherFixedSpan.textContent = "€ " + otherFixed;
  otherFixedResult.appendChild(otherFixedSpan);



  //everything for heating
  let heatingFixed = parseFloat(document.getElementById("heatingFixed").value || 0);
  let heatingFixedResult = document.getElementById("heatingFixedResult");
  let heatingFixedSpan = document.createElement("span");
  heatingFixedSpan.textContent = "€ " + heatingFixed;
  heatingFixedResult.appendChild(heatingFixedSpan);



  //everything for internet
  let internetFixed = parseFloat(document.getElementById("internetFixed").value || 0);
  let internetFixedResult = document.getElementById("internetFixedResult");
  let internetFixedSpan = document.createElement("span");
  internetFixedSpan.textContent = "€ " + internetFixed;
  internetFixedResult.appendChild(internetFixedSpan);

  //everything for total pay
  let totalPayResult = document.getElementById("totalPayResult");
  let totalPaySpan = document.createElement("h3");
  let totalPay = (electricityResult + gasResult + gasFixed + waterResult + waterFixed + otherFixed + heatingFixed + internetFixed).toFixed(2);
  totalPaySpan.textContent = "€ " + totalPay;
  totalPayResult.appendChild(totalPaySpan);
});

// function clearTotalPay() {
//
// }



saveBnt.addEventListener("click", event => {
  //si viena eilute leidzia priskirti tuscia reiksme paspaudus save mygtuka
  document.getElementById('totalPayResult').textContent = "";
  //everything for electricity
  let electricityFrom = parseFloat(document.getElementById("electricityFrom").value || 0);
  let electricityTo = parseFloat(document.getElementById("electricityTo").value || 0);
  let electricityRate = document.getElementById("electricityRate").value;
  let electricityDifference = electricityTo - electricityFrom;
  document.getElementById("electricityDifference").value = electricityDifference;
  let electricityResult = electricityDifference * electricityRate;
  let electricityOutput = document.getElementById("electricityResult");



  //everything for gas
  let gasFrom = parseFloat(document.getElementById("gasFrom").value || 0);
  let gasTo = parseFloat(document.getElementById("gasTo").value || 0);
  let gasRate = document.getElementById("gasRate").value;
  let gasDifference = gasTo - gasFrom;
  let gasResult = gasDifference * gasRate;
  let gasOutput = document.getElementById("gasResult");



  //everything for gas fixed padaryti
  let gasFixed = parseFloat(document.getElementById("gasFixed").value || 0);
  let gasFixedResult = document.getElementById("gasFixedResult");



  //everything for cold water
  let waterFrom = parseFloat(document.getElementById("waterFrom").value || 0);
  let waterTo = parseFloat(document.getElementById("waterTo").value || 0);
  let waterRate = document.getElementById("waterRate").value;
  let waterDifference = waterTo - waterFrom;
  let waterResult = waterDifference * waterRate;
  let waterOutput = document.getElementById("waterResult");



  //everything for cold water fixed padaryti
  let waterFixed = parseFloat(document.getElementById("waterFixed").value || 0);
  let waterFixedResult = document.getElementById("waterFixedResult");



  //everything for other services
  let otherFixed = parseFloat(document.getElementById("otherFixed").value || 0);
  let otherFixedResult = document.getElementById("otherFixedResult");



  //everything for heating
  let heatingFixed = parseFloat(document.getElementById("heatingFixed").value || 0);
  let heatingFixedResult = document.getElementById("heatingFixedResult");



  //everything for internet
  let internetFixed = parseFloat(document.getElementById("internetFixed").value || 0);
  let internetFixedResult = document.getElementById("internetFixedResult");



  //everything for total pay
  let totalPayResult = document.getElementById("totalPayResult");
  let totalPaySpan = document.createElement("h3");
  let totalPay = (electricityResult + gasResult + gasFixed + waterResult + waterFixed + otherFixed + heatingFixed + internetFixed).toFixed(2);
  totalPaySpan.textContent = "€ " + totalPay;
  totalPayResult.appendChild(totalPaySpan);



  //everything for showing final result below in the page
  let outputs = document.getElementById("outputs");
  let liElement = document.createElement("li");
  let spanElement = document.createElement("span");
  spanElement.textContent = `${new Date()} ---- ${totalPay}` + " €";
  let deleteBtn = document.createElement("button");
  let deleteBtnText = document.createTextNode("More");
  deleteBtn.appendChild(deleteBtnText);
  liElement.appendChild(spanElement).appendChild(deleteBtn);
  outputs.appendChild(liElement);


  let shortList = {
    electricityFrom : electricityFrom,
    electricityTo : electricityTo,
    electricityDifference : electricityDifference,
    electricityRate : electricityRate,
    electricityResult : electricityResult,

    gasFrom : gasFrom,
    gasTo : gasTo,
    gasDifference : gasDifference,
    gasRate : gasRate,
    gasResult : gasResult,

    gasFixed : gasFixed,

    waterFrom : waterFrom,
    waterTo : waterTo,
    waterDifference : waterDifference,
    waterRate : waterRate,
    waterResult : waterResult,

    waterFixed : waterFixed,

    otherFixed : otherFixed,

    heatingFixed : heatingFixed,

    internetFixed : internetFixed,

    totalPay : totalPay,
    date : new Date(),
  };
  localStorage.setItem('shortList', JSON.stringify(shortList));
});






electricityToInput.addEventListener("input", event => {
  document.getElementById('electricityResult').textContent = "";
  //everything for electricity
  let electricityFrom = parseFloat(document.getElementById("electricityFrom").value);
  let electricityTo = parseFloat(document.getElementById("electricityTo").value);
  let electricityRate = document.getElementById("electricityRate").value;
  let electricityDifference = electricityTo - electricityFrom;
  document.getElementById("electricityDifference").value = electricityDifference;
  let electricityResult = (electricityDifference * electricityRate).toFixed(2);
  let electricityOutput = document.getElementById("electricityResult");
  let electricitySpan = document.createElement("span");
  electricitySpan.textContent = "€ " + electricityResult;
  electricityOutput.appendChild(electricitySpan);
});


gasToInput.addEventListener("input", event => {
  document.getElementById('gasResult').textContent = "";
  //everything for gas
  let gasFrom = parseFloat(document.getElementById("gasFrom").value);
  let gasTo = parseFloat(document.getElementById("gasTo").value);
  let gasRate = document.getElementById("gasRate").value;
  let gasDifference = gasTo - gasFrom;
  document.getElementById("gasDifference").value = gasDifference;
  let gasResult = (gasDifference * gasRate).toFixed(2);
  let gasOutput = document.getElementById("gasResult");
  let gasSpan = document.createElement("span");
  gasSpan.textContent = "€ " + gasResult;
  gasOutput.appendChild(gasSpan);
});


waterToInput.addEventListener("input", event => {
  document.getElementById("waterResult").textContent = "";
  //everything for cold water
  let waterFrom = parseFloat(document.getElementById("waterFrom").value);
  let waterTo = parseFloat(document.getElementById("waterTo").value);
  let waterRate = document.getElementById("waterRate").value;
  let waterDifference = waterTo - waterFrom;
  document.getElementById("waterDifference").value = waterDifference;
  let waterResult = (waterDifference * waterRate).toFixed(2);
  let waterOutput = document.getElementById("waterResult");
  let waterSpan = document.createElement("span");
  waterSpan.textContent = "€ " + waterResult;
  waterOutput.appendChild(waterSpan);
});














console.log("The end --------------");
