document.getElementById('contact_form').addEventListener('submit', function(event) {
  var isValid = true;
  var errorMessages = '';
  // Get Values 
  var name = document.getElementById('name').value;
  var phone = document.getElementById('phone').value;
  var email = document.getElementById('email').value;
  var comment = document.getElementById('comment').value;

// Validate Name 
  if (name.length <5){
    errorMessages += 'Name must be 5 characters long.\n';
    isValid = false;
  }
  // Validate Phone (10 digits)
  var phonePattern = /^[0-9]{10}$/; 
  if (!phonePattern.test(phone)){
    errorMessages += 'Phone must be 10 digits.\n';
    isValid = false;
  }
  // Validate Email 
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)){
    errorMessages += 'Enter a valid email address.\n';
    isValid = false;
  }
  // Validate Comments 
  if (comment.length < 10){
    errorMessages += 'Comments must be at least 10 characters long.\n';
    isValid = false;
  }
  // if invalid 
  if (!isValid){
    alert (errorMessages);
    event.preventDefault();
  }
});
               
