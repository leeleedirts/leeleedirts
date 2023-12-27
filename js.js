document.addEventListener("DOMContentLoaded", function () {
    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // Get all images in the gallery
    var images = document.querySelectorAll(".gallery img");

    // Get the modal image element
    var modalImage = document.getElementById("modalImage");

    // Function to display the modal with the clicked image
    function displayModal(imgSrc) {
        modal.style.display = "block";
        modalImage.src = imgSrc;
    }

    // Close the modal when the span (x) is clicked
    span.onclick = function() {
        modal.style.display = "none";
    };

    // Close the modal when the user clicks outside of it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };

    // Attach click event listeners to each image in the gallery
    images.forEach(function(img) {
        img.addEventListener("click", function() {
            var imgSrc = this.src;
            displayModal(imgSrc);
        });
    });
});
