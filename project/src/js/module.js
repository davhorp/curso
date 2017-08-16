function authentication() {
  var user = document.getElementById('txtName').value;
  var pass = document.getElementById('txtPass').value;
  if (user == 'david' && pass == 'pwdadmin') {
    localStorage.setItem('name', user);
    localStorage.setItem('money', 1000);
    document.getElementById('errorP').innerHTML = '';
    window.location.assign('src/view/inicio.html');
  } else {
    document.getElementById('errorP').innerHTML = 'Error';
  }

}
