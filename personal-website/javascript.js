//alert("This is an awesome website!")

const form = document.querySelector("#form")
const submitButton = document.querySelector("#submit")
const scriptURL = 'https://script.google.com/macros/s/1XTaVdkdAnzhAHoLOA-x0K4svtJOB9RUnp2OgudFCNoEE4Lo8muDKOgSO/exec'

form.addEventListener('submit', e => {
  submitButton.disabled = true
  e.preventDefault()
  let requestBody = new FormData(form)
  fetch(scriptURL, { method: 'POST', body: requestBody})
    .then(response => {
       alert('Success!', response)
       submitButton.disabled = false
      })
    .catch(error => {
    alert('Error!', error.message)
      submitButton.disabled = false

    }
    )
})

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  var myDropdown = document.getElementById("myDropdown");
  myDropdown.classList.toggle("show");
  var dropdown_caret = document.getElementById("dropdown_caret");
  dropdown_caret.classList.toggle("fa-caret-down");
  dropdown_caret.classList.toggle("fa-caret-up");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
    var dropdown_caret = document.getElementById("dropdown_caret");
    if (dropdown_caret.classList.contains("fa-caret-up")) {
      dropdown_caret.classList.remove("fa-caret-up");
      dropdown_caret.classList.add("fa-caret-down");
    }
  }
}