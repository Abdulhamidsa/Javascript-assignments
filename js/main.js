"use strict";
///////////////////////////// TAX CALCULATION  ////////////////////////////
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
      error();
    } else if (!taxRegex.test(monetaryValue)) {
      errorMsg[0].textContent = "Please enter a valid numeric value with up to two decimal places";
    }
    if (isNaN(taxValue)) {
      errorMsg[1].textContent = "This input is required";
      error();
    } else if (!taxRegex.test(taxValue)) {
      errorMsg[1].textContent = "Please enter a valid numeric value with up to two decimal places";
    }
    if (!isNaN(monetaryValue) && !isNaN(taxValue) && taxRegex.test(taxValue) && taxRegex.test(monetaryValue)) {
      const taskAmount = (monetaryValue * taxValue) / 100;
      taxResults.textContent = taskAmount.toFixed(2) + " kr";
      finalResults.textContent = (monetaryValue - taskAmount).toFixed(2) + " kr";
      removeError();
    }
  }
  function error() {
    monetaryInput.style.border = "1px solid red";
    taxInput.style.border = "1px solid red";
    console.log("this is wrong");
  }
  function removeError() {
    monetaryInput.style.border = "";
    taxInput.style.border = "";
    console.log("this is wrong");
  }
  function clearErrorMsgs() {
    errorMsg.forEach(function (e) {
      e.textContent = "";
    });
  }
});
/////////////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", function () {
  const cdForm = document.querySelector(".cd_form");
  const cdList = document.getElementById("cdList");

  cdForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const author = e.target.elements.txtAuthor.value;
    const title = e.target.elements.txtTitle.value;
    const year = e.target.elements.txtYear.value;
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
                    <td>${author}</td>
                    <td>${title}</td>
                    <td>${year}</td>
                    <td><span class="material-symbols-outlined deleteButton">delete</span></td>
    `;
    newRow.querySelector(".deleteButton").addEventListener("click", function () {
      cdList.removeChild(newRow);
    });
    cdList.appendChild(newRow);
    e.target.elements.txtAuthor.value = "";
    e.target.elements.txtTitle.value = "";
    e.target.elements.txtYear.value = "";
  });
});
