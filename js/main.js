"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const monetaryInput = document.querySelector("#money_amount");
  const taxInput = document.querySelector("#tax_amount");
  const calculateBtn = document.querySelector("#calculate");
  const resetBtn = document.querySelector("#reset");
  const taxResults = document.querySelector(".tax_results");
  const errorMsg = document.querySelectorAll(".error");
  const finalResults = document.querySelector(".final_results");
  console.log("script is fully loaded");

  calculateBtn.addEventListener("click", (e) => {
    e.preventDefault();
    handleCalculation();
  });

  resetBtn.addEventListener("click", (e) => {
    finalResults.textContent = "0.00";
    taxResults.textContent = "0.00";
  });

  function handleCalculation() {
    clearErrorMsgs();
    const monetaryValue = parseFloat(monetaryInput.value);
    const taxValue = parseFloat(taxInput.value);
    const taxRegex = /^\d+(\.\d{1,2})?$/;
    if (isNaN(monetaryValue)) {
      errorMsg[0].textContent = "This input is required";
    } else if (!taxRegex.test(monetaryValue)) {
      errorMsg[0].textContent = "Please enter a valid numeric value with up to two decimal places";
    }
    if (isNaN(taxValue)) {
      errorMsg[1].textContent = "This input is required";
    } else if (!taxRegex.test(taxValue)) {
      errorMsg[1].textContent = "Please enter a valid numeric value with up to two decimal places";
    }
    if (!isNaN(monetaryValue) && !isNaN(taxValue) && taxRegex.test(taxValue) && taxRegex.test(monetaryValue)) {
      const taskAmount = (monetaryValue * taxValue) / 100;
      taxResults.textContent = taskAmount.toFixed(2) + " kr";
      finalResults.textContent = (monetaryValue - taskAmount).toFixed(2) + " kr";
    }
  }

  function clearErrorMsgs() {
    errorMsg.forEach(function (e) {
      e.textContent = "";
    });
  }
});
