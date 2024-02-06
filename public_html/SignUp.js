function showForm(userType) {
      document.getElementById('designer-form').style.display = userType === 'designer' ? 'block' : 'none';
      document.getElementById('client-form').style.display = userType === 'client' ? 'block' : 'none';
}


  function submitdForm() {
  //userType.preventDefault();
  
  // Redirect to the designer's homepage
  window.location.assign("Designer.html");
}

function submitcForm() {
 // userType.preventDefault();
  
  // Redirect to the client's homepage
   window.location.assign("client.html");
}
  
