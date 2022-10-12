document.getElementById('contactForm').addEventListener('submit', submitForm );
function submitForm(e) {
  e.preventDefault();
  var name = getFromForm('name');
  var email = getFromForm('email');
  var message = getFromForm('message');
 
  var messagesRef = firebaseApp.database();
  console.log(messagesRef);
}

function getFromForm(id) {
  return document.getElementById(id).value;
}

