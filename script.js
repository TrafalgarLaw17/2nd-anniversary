// Get the modal
var modal = document.getElementById("myModal");

// Select the envelope wrapper correctly
var envelope = document.querySelector('.envelope-wrapper');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the envelope, trigger flap and open modal after 5s
envelope.onclick = function () {
  envelope.classList.toggle('flap'); // toggle envelope open/close

  setTimeout(function () {
    // Only show modal if envelope is open
    if (envelope.classList.contains('flap')) {
      modal.style.display = "block";
    }
  }, 5000);
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
