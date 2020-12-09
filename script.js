function openForm() {
  document.getElementById('Form').style.display = 'block';
}
openForm.innerHTML;
function addForm() {
  document.getElementById('picForm').style.display = 'block';
}
addForm.innerHTML;
function closeForm() {
  document.getElementById('Form').style.display = 'none';
}
closeForm.innerHTML;
function myFunction() {
  // eslint-disable-next-line no-alert
  alert('Added in your Shopping Chart');
}
myFunction.innerHTML;

function goBack() {
  window.history.back();
}
goBack.innerHTML;

window.onload = function() {
  document.getElementById('ifYes').style.display = 'none';
};

function yesNoCheck() {
  if (document.getElementById('yesCheck').checked) {
    document.getElementById('ifYes').style.display = 'block';
  } else document.getElementById('ifYes').style.display = 'none';
}
yesNoCheck().innerHTML;
