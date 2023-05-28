document.addEventListener("DOMContentLoaded", function() {
  const transferForm = document.getElementById("transferForm");
  const transferTypeSelect = document.getElementById("transferType");
  const domesticTransferOption = document.getElementById("domesticTransferOption");
  const internationalTransferOption = document.getElementById("internationalTransferOption");
  const anotherVitaAccountButton = document.getElementById("anotherVitaAccountButton");
  const anotherVitaCardButton = document.getElementById("anotherVitaCardButton");
  const transferOutsideVitaButton = document.getElementById("transferOutsideVitaButton");
  const anotherVitaAccountForm = document.getElementById("anotherVitaAccountForm");
  const anotherVitaCardForm = document.getElementById("anotherVitaCardForm");
  const transferOutsideVitaForm = document.getElementById("transferOutsideVitaForm");
  const showDetailsButton = document.getElementById("showDetailsButton");

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

  // Event listener for form submission
  transferForm.addEventListener("submit", function(event) {
    event.preventDefault();
    // Perform the transfer or any necessary actions here
  });

  // Event listener for "Show Details" button
  showDetailsButton.addEventListener("click", function(event) {
    event.preventDefault();
    showInternationalTransferFields();
  });

  // Function to reset the forms
  function resetForms() {
    anotherVitaAccountForm.style.display = "none";
    anotherVitaCardForm.style.display = "none";
    transferOutsideVitaForm.style.display = "none";
  }

  // Function to show international transfer fields
  function showInternationalTransferFields() {
    const showDetails = document.getElementById("ShowDetails");
    showDetails.style.display = "block";
  }
});
