document.getElementById("coverageForm").addEventListener("submit", function(event) {

    event.preventDefault();

    document.getElementById("coverageResult").innerHTML =
    "✅ Great news! Your fibre coverage request has been received. A OneSwitch SA consultant will contact you with available options.";

});
