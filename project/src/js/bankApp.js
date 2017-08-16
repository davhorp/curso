var f = new Date();
document.getElementById('userDataSession').innerHTML = 'Bienvenido usuario: '
+ localStorage.getItem('name')
+ ' acceso: ' + f.getDate() + '/' + (f.getMonth() + 1) + '/' + f.getFullYear();
/*funcion para salir de tu sesion*/
function logout() {
  localStorage.removeItem('name');
  window.location.assign('../../home.html');
}

function getAmount() {
  document.getElementById('pSaldoUser').innerHTML =
  '$ ' + localStorage.getItem('money');
}

function validateData() {
  var accountNumber = document.getElementById('txtAccountNumberDestinity').value;
  var account = document.getElementById('txtAccount').value;
  if (accountNumber.length < 18) {
    document.getElementById('pMHeader').innerHTML = 'Error';
    document.getElementById('pMAccountNumber').innerHTML = 'El numero de cuenta no contiene 18'
    + 'posiciones';
    document.getElementById('pMAccount').innerHTML = account.length == 0 ? 'El campo Monto no'
    + 'puede ir nulo' :
    'El monto a depositar es de: $' + account;
    document.getElementById('pMFolio').value = '';
    document.getElementById('btnPTransfer').innerHTML = 'Cancelar';
    var button = document.getElementById('btnSuccessOrErrorTransferConfirm');
    button.className = 'btn-danger';
  } else {
    document.getElementById('pMHeader').innerHTML = 'Aviso';
    document.getElementById('pMAccount').innerHTML = 'La cantidad de $' + account;
    document.getElementById('pMAccountNumber').innerHTML = 'Transferencia a la siguente cuenta: '
        + accountNumber;
    var ft = Math.floor((Math.random() * 10000000000) + 1).toString();
    document.getElementById('pMFolio').innerHTML = 'El folio de la transacción es FT' + ft;
    document.getElementById('btnPTransfer').innerHTML = 'Aceptar';
    var button = document.getElementById('btnSuccessOrErrorTransferConfirm');
    button.className = 'btn-success';
    button.onclick = function () {
      commitTransfer(account);
    };
    document.getElementById('txtAccountNumberDestinity').value = '';
    document.getElementById('txtAccount').value = '';
    document.getElementById('pMFolio').value = '';
  }
}

function commitTransfer(account) {
  var totalAmount = parseFloat(localStorage.getItem('money'));
  var amountTotal = totalAmount - parseFloat(account);
  localStorage.setItem('money', amountTotal);
}

function deleteSession() {

}
