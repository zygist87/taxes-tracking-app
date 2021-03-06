console.log("Projekto pradzia");

let listObj = [];
let editIndex = -1; //this is for "edit" button
let electricityToInput = document.getElementById("electricityTo");
let gasToInput = document.getElementById("gasTo");
let gasFixedInput = document.getElementById("gasFixed");
let waterToInput = document.getElementById("waterTo");
let waterFixedInput = document.getElementById("waterFixed");
let otherFixedInput = document.getElementById("otherFixed");
let heatingFixedInput = document.getElementById("heatingFixed");
let internetFixedInput = document.getElementById("internetFixed");
let saveBtn = document.getElementById("saveBtn");
let refreshBtn = document.getElementById("refreshBtn");
let electricityRate = document.getElementById("electricityRate");
let gasRate = document.getElementById("gasRate");
let waterRate = document.getElementById("waterRate");


  function afterReload() {
    let fromLocal = JSON.parse(localStorage.getItem("listObj"));
    let electricityToFromLastObject = fromLocal[fromLocal.length - 1].electricityTo;
    console.log(electricityToFromLastObject);
    document.getElementById("electricityFrom").value = electricityToFromLastObject;
    //gas
    let gasToFromLastObject = fromLocal[fromLocal.length - 1].gasTo;
    console.log(gasToFromLastObject);
    document.getElementById("gasFrom").value = gasToFromLastObject;
    //water
    let waterToFromLastObject = fromLocal[fromLocal.length - 1].waterTo;
    console.log(waterToFromLastObject);
    document.getElementById("waterFrom").value = waterToFromLastObject;
  };


  function ratesFromLocalStorage() {
    //electricityRate
    let fromLocal = JSON.parse(localStorage.getItem("listObj"));
    let electricityRateFromLastObject = fromLocal[fromLocal.length - 1].electricityRate;
    document.getElementById("electricityRate").value = electricityRateFromLastObject;
    //gasRate
    let gasRateFromLastObject = fromLocal[fromLocal.length - 1].gasRate;
    document.getElementById("gasRate").value = gasRateFromLastObject;
    //gasFixedRate
    let gasFixedFromLastObject = fromLocal[fromLocal.length - 1].gasFixed;
    document.getElementById("gasFixed").value = gasFixedFromLastObject;
    // //waterRate
    let waterRateFromLastObject = fromLocal[fromLocal.length - 1].waterRate;
    document.getElementById("waterRate").value = waterRateFromLastObject;
    //waterFixedRate
    let waterFixedFromLastObject = fromLocal[fromLocal.length - 1].waterFixed;
    document.getElementById("waterFixed").value = waterFixedFromLastObject;
    //otherFixedRate
    let otherFixedFromLastObject = fromLocal[fromLocal.length - 1].otherFixed;
    document.getElementById("otherFixed").value = otherFixedFromLastObject;
    //heatingFixedRate
    let heatingFixedFromLastObject = fromLocal[fromLocal.length - 1].heatingFixed;
    document.getElementById("heatingFixed").value = heatingFixedFromLastObject;
    //internetFixedRate
    let internetFixedFromLastObject = fromLocal[fromLocal.length - 1].internetFixed;
    document.getElementById("internetFixed").value = internetFixedFromLastObject;
  };



  function doesItHasValue(x) {
    if (typeof x !== "number") {
      return 0;
    }
      return x;
    };

    let showMoreindex = -1;
    function printObj() {
      let outputs = document.getElementById("outputs");
      outputs.innerHTML="";

      listObj.forEach(function(val, trata) {
    let liElement = document.createElement('li');
    let forDate = document.createElement('span');
    let forTotalPay = document.createElement('span');
    // Creating and appending delete button
    let forDelete = document.createElement("span");
    let deleteBtn = document.createElement("button");
    let textOnTheButton = document.createTextNode("Delete");
    deleteBtn.appendChild(textOnTheButton);
    forDelete.appendChild(deleteBtn);
    // event listener for delete button
    deleteBtn.addEventListener("click", event => {
      console.log("paspaudziau delete", trata);
      listObj.splice(trata, 1);
      printObj();
      localStorage.setItem('listObj', JSON.stringify(listObj));
    });



    // Creating and appending more button
    let forEdit = document.createElement("span");
    let moreBtn = document.createElement("button");
    let textOnTheEdit = document.createTextNode(showMoreindex !== trata? "Show More" : "Show Less");
    moreBtn.appendChild(textOnTheEdit);
    forDelete.appendChild(moreBtn);

    moreBtn.addEventListener("click", event => {

      console.log("paspaudziau more", val, trata);
        if (showMoreindex != -1) {
          console.log("nesutampa su -1");
          showMoreindex = -1;
          console.log("turetu pasikeisti index");
        } else {
          console.log("sutampa su -1");
          showMoreindex = trata;
        };
        printObj();

    });


    // appending everything to liElement
    forDate.textContent = val.date;
    forTotalPay.textContent = val.totalPay;
    liElement.appendChild(forDate);
    liElement.appendChild(forTotalPay);
    liElement.appendChild(forDelete);

    outputs.appendChild(liElement);

    if (showMoreindex === trata) {
      let fromLocal = JSON.parse(localStorage.getItem("listObj"));
      console.log("show more");
      let forMoreOfEverything = document.createElement("div");
      forMoreOfEverything.id = "more";

      let electricityFrom = fromLocal[trata].electricityFrom;
      let electricityTo = fromLocal[trata].electricityTo;
      let electricityDifference = fromLocal[trata].electricityDifference;
      let electricityRate = fromLocal[trata].electricityRate;
      let electricityResult = fromLocal[trata].electricityResult;
      let moreElectricity = document.createElement("p");
      //moreElectricity.id = "more";
      moreElectricity.className = "more";
      moreElectricity.textContent="Electricity From: " + electricityFrom + " Electricity To: " + electricityTo + " Electricity Difference: " + electricityDifference + " Electricity Rate: " + electricityRate + "€ " + " Electricity Total Pay: " + electricityResult + "€ ";
      forMoreOfEverything.appendChild(moreElectricity);
      liElement.appendChild(forMoreOfEverything);

      let gasFrom = fromLocal[trata].gasFrom;
      let gasTo = fromLocal[trata].gasTo;
      let gasDifference = fromLocal[trata].gasDifference;
      let gasRate = fromLocal[trata].gasRate;
      let gasResult = fromLocal[trata].gasResult;
      let moreGas = document.createElement("p");
      moreGas.className = "more";
      moreGas.id = "more";
      moreGas.textContent="Gas From: " + gasFrom + " Gas To: " + gasTo + " Gas Difference: " + gasDifference + " Gas Rate: " + gasRate + "€ " + " Gas Total Pay: " + gasResult + "€ ";
      forMoreOfEverything.appendChild(moreGas);
      liElement.appendChild(forMoreOfEverything);

      let gasFixedResult = fromLocal[trata].gasFixedResult;
      let moreGasFixed = document.createElement("p");
      moreGasFixed.className = "more";
      moreGasFixed.textContent="Gas Fixed Part: " + gasResult + "€ ";
      forMoreOfEverything.appendChild(moreGasFixed);
      liElement.appendChild(forMoreOfEverything);

      let waterFrom = fromLocal[trata].waterFrom;
      let waterTo = fromLocal[trata].waterTo;
      let waterDifference = fromLocal[trata].waterDifference;
      let waterRate = fromLocal[trata].waterRate;
      let waterResult = fromLocal[trata].waterResult;
      let moreWater = document.createElement("p");
      moreWater.className = "more";
      moreWater.textContent="Water From: " + waterFrom + " Water To: " + waterTo + " Water Difference: " + waterDifference + " Water Rate: " + waterRate + "€ " + " Water Total Pay: " + waterResult + "€ ";
      forMoreOfEverything.appendChild(moreWater);
      liElement.appendChild(forMoreOfEverything);

      let waterFixed = fromLocal[trata].waterFixed;
      let moreWaterFixed = document.createElement("p");
      moreWaterFixed.className = "more";
      moreWaterFixed.textContent="Water Fixed Part: " + waterFixed + "€ ";
      forMoreOfEverything.appendChild(moreWaterFixed);
      liElement.appendChild(forMoreOfEverything);

      let otherFixed = fromLocal[trata].otherFixed;
      let moreOther = document.createElement("p");
      moreOther.className = "more";
      moreOther.textContent="Other Fixed Part: " + otherFixed + "€ ";
      liElement.appendChild(moreOther);

      let heatingFixed = fromLocal[trata].heatingFixed;
      let moreHeating = document.createElement("p");
      moreHeating.className = "more";
      moreHeating.textContent="Heating Fixed Part: " + heatingFixed + "€ ";
      liElement.appendChild(moreHeating);

      let internetFixed = fromLocal[trata].internetFixed;
      let moreInternet = document.createElement("p");
      moreInternet.className = "more";
      moreInternet.textContent="Internet Fixed Part: " + internetFixed + "€ ";
      liElement.appendChild(moreInternet);

      let totalPay = fromLocal[trata].totalPay;
      let moreTotal = document.createElement("p");
      moreTotal.className = "more";
      let moreTotalH5 = document.createElement("h6");
      moreTotal.appendChild(moreTotalH5);
      moreTotalH5.textContent="Total Pay: " + totalPay + "€ ";
      liElement.appendChild(moreTotal);
    }
  });
};





window.addEventListener('load', event => {

  let fromLocalStorage = localStorage.getItem('listObj');
  if (fromLocalStorage) {
    listObj = JSON.parse(fromLocalStorage);
    printObj();
  }
  ratesFromLocalStorage();
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



  //everything for gas fixed
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


  afterReload();
});





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


  let dateOfSaveFull = new Date(); //.toString();
  let dateOfSave = dateOfSaveFull.getFullYear() + "-" + (dateOfSaveFull.getMonth() + 1) + "-" + dateOfSaveFull.getDate() + " " + dateOfSaveFull.getHours() + ":" + dateOfSaveFull.getMinutes() + ":" + dateOfSaveFull.getSeconds();
  //everything for showing final result below in the page
  listObj.push({
    date : dateOfSave,
    totalPay: "€ " + totalPay,
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
    isSelected: true,
  });
  printObj();

  localStorage.setItem('listObj', JSON.stringify(listObj));


});






electricityToInput.addEventListener("input", event => {
  document.getElementById('electricityResult').textContent = "";
  //everything for electricity
  let electricityFrom = parseFloat(document.getElementById("electricityFrom").value || 0);
  let electricityTo = parseFloat(document.getElementById("electricityTo").value || 0);
  let electricityRate = document.getElementById("electricityRate").value;
  let electricityDifference = electricityTo - electricityFrom;
  document.getElementById("electricityDifference").value = electricityDifference;
  let electricityResult = (electricityDifference * electricityRate).toFixed(2);
  let electricityOutput = document.getElementById("electricityResult");
  let electricitySpan = document.createElement("span");
  electricitySpan.textContent = "€ " + electricityResult;
  electricityOutput.appendChild(electricitySpan);
});

//-------
electricityRate.addEventListener("input", event => {
  document.getElementById("electricityResult").textContent = "";
  let electricityFrom = parseFloat(document.getElementById("electricityFrom").value || 0);
  let electricityTo = parseFloat(document.getElementById("electricityTo").value || 0);
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
  let gasFrom = parseFloat(document.getElementById("gasFrom").value || 0);
  let gasTo = parseFloat(document.getElementById("gasTo").value || 0);
  let gasRate = document.getElementById("gasRate").value;
  let gasDifference = gasTo - gasFrom;
  document.getElementById("gasDifference").value = gasDifference;
  let gasResult = (gasDifference * gasRate).toFixed(2);
  let gasOutput = document.getElementById("gasResult");
  let gasSpan = document.createElement("span");
  gasSpan.textContent = "€ " + gasResult;
  gasOutput.appendChild(gasSpan);
});

gasRate.addEventListener("input", event => {
  document.getElementById('gasResult').textContent = "";
  //everything for gas
  let gasFrom = parseFloat(document.getElementById("gasFrom").value || 0);
  let gasTo = parseFloat(document.getElementById("gasTo").value || 0);
  let gasRate = document.getElementById("gasRate").value;
  let gasDifference = gasTo - gasFrom;
  document.getElementById("gasDifference").value = gasDifference;
  let gasResult = (gasDifference * gasRate).toFixed(2);
  let gasOutput = document.getElementById("gasResult");
  let gasSpan = document.createElement("span");
  gasSpan.textContent = "€ " + gasResult;
  gasOutput.appendChild(gasSpan);
});

gasFixedInput.addEventListener("input", event => {
  document.getElementById('gasFixedResult').textContent = "";
  //everything for gas fixed
  let gasFixed = document.getElementById("gasFixed").value;
  let gasFixedResult = (gasFixed * 1).toFixed(2);
  let gasFixedOutput = document.getElementById("gasFixedResult");
  let gasFixedSpan = document.createElement("span");
  gasFixedSpan.textContent = "€ " + gasFixedResult;
  gasFixedOutput.appendChild(gasFixedSpan);
});


waterToInput.addEventListener("input", event => {
  document.getElementById("waterResult").textContent = "";
  //everything for cold water
  let waterFrom = parseFloat(document.getElementById("waterFrom").value || 0);
  let waterTo = parseFloat(document.getElementById("waterTo").value || 0);
  let waterRate = document.getElementById("waterRate").value;
  let waterDifference = waterTo - waterFrom;
  document.getElementById("waterDifference").value = waterDifference;
  let waterResult = (waterDifference * waterRate).toFixed(2);
  let waterOutput = document.getElementById("waterResult");
  let waterSpan = document.createElement("span");
  waterSpan.textContent = "€ " + waterResult;
  waterOutput.appendChild(waterSpan);
});

waterRate.addEventListener("input", event => {
  document.getElementById("waterResult").textContent = "";
  //everything for cold water
  let waterFrom = parseFloat(document.getElementById("waterFrom").value || 0);
  let waterTo = parseFloat(document.getElementById("waterTo").value || 0);
  let waterRate = document.getElementById("waterRate").value;
  let waterDifference = waterTo - waterFrom;
  document.getElementById("waterDifference").value = waterDifference;
  let waterResult = (waterDifference * waterRate).toFixed(2);
  let waterOutput = document.getElementById("waterResult");
  let waterSpan = document.createElement("span");
  waterSpan.textContent = "€ " + waterResult;
  waterOutput.appendChild(waterSpan);
});



waterFixedInput.addEventListener("input", event => {
  document.getElementById('waterFixedResult').textContent = "";
//everything for water fixed
let waterFixed = document.getElementById("waterFixed").value;
let waterFixedResult = (waterFixed * 1).toFixed(2);
let waterFixedOutput = document.getElementById("waterFixedResult");
let waterFixedSpan = document.createElement("span");
waterFixedSpan.textContent = "€ " + waterFixedResult;
waterFixedOutput.appendChild(waterFixedSpan);
});

otherFixedInput.addEventListener("input", event => {
  document.getElementById('otherFixedResult').textContent = "";
//everything for water fixed
let otherFixed = document.getElementById("otherFixed").value;
let otherFixedResult = (otherFixed * 1).toFixed(2);
let otherFixedOutput = document.getElementById("otherFixedResult");
let otherFixedSpan = document.createElement("span");
otherFixedSpan.textContent = "€ " + otherFixedResult;
otherFixedOutput.appendChild(otherFixedSpan);
});

heatingFixedInput.addEventListener("input", event => {
  document.getElementById('heatingFixedResult').textContent = "";
//everything for heating fixed
let heatingFixed = document.getElementById("heatingFixed").value;
let heatingFixedResult = (heatingFixed * 1).toFixed(2);
let heatingFixedOutput = document.getElementById("heatingFixedResult");
let heatingFixedSpan = document.createElement("span");
heatingFixedSpan.textContent = "€ " + heatingFixedResult;
heatingFixedOutput.appendChild(heatingFixedSpan);
});

internetFixedInput.addEventListener("input", event => {
  document.getElementById('internetFixedResult').textContent = "";
//everything for internet fixed
let internetFixed = document.getElementById("internetFixed").value;
let internetFixedResult = (internetFixed * 1).toFixed(2);
let internetFixedOutput = document.getElementById("internetFixedResult");
let internetFixedSpan = document.createElement("span");
internetFixedSpan.textContent = "€ " + internetFixedResult;
internetFixedOutput.appendChild(internetFixedSpan);
});

console.log("The end --------------");
