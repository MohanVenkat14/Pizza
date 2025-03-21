// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function () {
    const checkoutForm = document.getElementById("checkoutForm");

    // Function to handle form submission
    checkoutForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent page reload

        // Show success message
        alert("Order Placed Successfully!");

        // Redirect to home page after alert
        window.location.href = "index.html";
    });
});
