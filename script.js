let count = 1;

document.getElementById("submit").onclick = function () {
  var table = document.getElementById("show");
  var row = table.insertRow(-1);
  var srNo = row.insertCell(0);
  var firstName = row.insertCell(1);
  var lastName = row.insertCell(2);
  var address = row.insertCell(3);
  var pinCOde = row.insertCell(4);
  var gender = row.insertCell(5);
  var choiceOfFood = row.insertCell(6);
  var state = row.insertCell(7);
  var country = row.insertCell(8);
  var checkboxes = document.getElementsByName("food");
  var selected = [];
  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      selected.push(checkboxes[i].value);
    }
  }

  srNo.innerHTML = count;
  firstName.innerHTML = document.getElementById("first-name").value;
  lastName.innerHTML = document.getElementById("last-name").value;
  address.innerHTML = document.getElementById("address").value;
  pinCOde.innerHTML = document.getElementById("pincode").value;
  gender.innerHTML = document.querySelector(
    'input[name="gridRadios"]:checked'
  ).value;
  choiceOfFood.innerHTML = selected;
  state.innerHTML = document.getElementById("state").value;
  country.innerHTML = document.getElementById("country").value;

  const inputs = document.querySelectorAll(
    ".fname, .lname,.address, .pincode, .state, .country"
  );

  inputs.forEach((input) => {
    input.value = "";
  });

  document.querySelector('input[name="gridRadios"]:checked').checked = false;

  const clearCheckbox = document.querySelectorAll('input[name="food"]:checked');

  clearCheckbox.forEach((checks) => {
    checks.checked = false;
  });
  
  count++;
  return false;
};
