document.addEventListener("DOMContentLoaded", function() {
  const transferForm = document.getElementById("transferForm");
  const transferTypeSelect = document.getElementById("transferType");
  const domesticTransferOption = document.getElementById("domesticTransferOption");
  const internationalTransferOption = document.getElementById("internationalTransferOption");
  const anotherVitaAccountButton = document.getElementById("anotherVitaAccountButton");
  const anotherVitaCardButton = document.getElementById("anotherVitaCardButton");
  const transferOutsideVitaButton = document.getElementById("transferOutsideVitaButton");
  const showDetailsButton = document.getElementById("showDetailsButton");
  const anotherVitaAccountForm = document.getElementById("anotherVitaAccountForm");
  const anotherVitaCardForm = document.getElementById("anotherVitaCardForm");
  const transferOutsideVitaForm = document.getElementById("transferOutsideVitaForm");
  const ShowDetailsForm = document.getElementById("ShowDetailsForm");
  const transferButton = document.getElementById("transferButton");
  

  // Event listener for transfer type selection
  transferTypeSelect.addEventListener("change", function() {
    const selectedOption = this.value;
    domesticTransferOption.style.display = selectedOption === "domestic" ? "block" : "none";
    internationalTransferOption.style.display = selectedOption === "international" ? "block" : "none";
    resetForms(); // Reset the forms when transfer type changes
  });

  // Event listener for "Another Vita Account" button
  anotherVitaAccountButton.addEventListener("click", function(event) {
    event.preventDefault();
    resetForms();
    if (transferTypeSelect.value === "domestic") {
      anotherVitaAccountForm.style.display = "block";
    }
  });

  // Event listener for "Another Vita Card" button
  anotherVitaCardButton.addEventListener("click", function(event) {
    event.preventDefault();
    resetForms();
    if (transferTypeSelect.value === "domestic") {
      anotherVitaCardForm.style.display = "block";
    }
  });

  // Event listener for "Transfer Outside Vita" button
  transferOutsideVitaButton.addEventListener("click", function(event) {
    event.preventDefault();
    resetForms();
    if (transferTypeSelect.value === "domestic") {
      transferOutsideVitaForm.style.display = "block";
    }
  });

  // Event listener for "Transfer Outside Vita" button
  showDetailsButton.addEventListener("click", function(event) {
    event.preventDefault();
    resetForms();
    if (transferTypeSelect.value === "international") {
      ShowDetailsForm.style.display = "block";
    }
  });

  // Event listener for form submission
  transferForm.addEventListener("submit", function(event) {
    event.preventDefault();
    // Perform the transfer or any necessary actions here
    // if (validateForm()) {
    //   // Perform the transfer or any necessary actions here
    //   console.log("Form submitted successfully");
    // }

    if (validateForm()) {
      redirectToTransactionStatus();
    }
  
  });
  function validateForm() {
    const formFields = transferForm.elements;
    let isValid = true;
  
    for (let i = 0; i < formFields.length; i++) {
      const field = formFields[i];
      if (field.required) {
        if (field.value.trim() === "" || (field.type === 'number' && isNaN(field.value))) {
          isValid = false;
          field.classList.add("error"); // Add a CSS class to highlight the field as an error
        } else {
          field.classList.remove("error"); // Remove the error class if the field is filled
        }
      }
    }
  
    return isValid;
  }
  
  // function validateForm() {
  //   const amountInputs = document.querySelectorAll("input[name='amount']");
  //   let isValid = true;
  
  //   // Check if each amount field contains only numbers
  //   amountInputs.forEach(function(input) {
  //     if (!/^\d+$/.test(input.value)) {
  //       isValid = false;
  //       input.classList.add("error");
  //     } else {
  //       input.classList.remove("error");
  //     }
  //   });
  
  //   return isValid;
  // }
  // transferButton.addEventListener("click", function(event){
  //   event.preventDefault();
  //   window.location.href = "transactionStatus.html";


  // });

  function redirectToTransactionStatus() {
    window.location.href = "transactionStatus.html";
  }
  transferButton.addEventListener("click", redirectToTransactionStatus);

  // function omar(){
  //   alert("bahy");
  // }
  // Event listener for "Show Details" button
  // showDetailsButton.addEventListener("click", function(event) {
  //   event.preventDefault();
  //   showInternationalTransferFields();
  // });

  // Function to reset the forms
  function resetForms() {
    anotherVitaAccountForm.style.display = "none";
    anotherVitaCardForm.style.display = "none";
    transferOutsideVitaForm.style.display = "none";
    ShowDetailsForm.style.display = "none";
  }

  // Function to show international transfer fields
  function showInternationalTransferFields() {
    const showDetails = document.getElementById("ShowDetails");
    showDetails.style.display = "block";
  }


  function validateDate() {
    var selectedDate = new Date(document.getElementById("transactionDate").value);
    var currentDate = new Date();
  
    if (selectedDate.getTime() !== currentDate.getTime()) {
      alert("Please select today's date.");
      // Clear the input field if an invalid date is chosen
      document.getElementById("transactionDate").value = "";
    }
  }
  
  // Set the max attribute of the input element to today's date
  var currentDate = new Date().toISOString().split("T")[0];
  document.getElementById("transactionDate").setAttribute("max", currentDate);
  
  
});