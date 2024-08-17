document.getElementById('registrationForm').addEventListener('submit', function(event) {
  event.preventDefault(); 
  var nameInput = document.getElementById('name');
  if (nameInput.value.trim() === '') {
      alert('Please enter your name.');
      nameInput.focus();
      return false;
  }

 
  alert('Form submitted successfully!');
});