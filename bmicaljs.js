var selectedRow = null
function onFormSubmit() {
  if (validate()) {
    computeAverage();

    var formData = readFormData();

    if (selectedRow == null) {
      insertNewRecord(formData);

    } else {
      updateRecord(formData);

    }
    document.getElementById("myform").reset();
    //  resetForm();
    basicTimeSetter();
  }
}

function computeAverage() {
  var weight = Number(document.getElementById("wei").value);
  var height1 = Number(document.getElementById("hei").value);
  var height = (height1 / 100);
  average = Number(weight / (height * height)).toFixed(2);

  document.getElementById("bmi").value = average;

  computeEquivalent(average);

}
function computeEquivalent(bmi) {
  var eq = "";
  if (bmi >= 30) {
    eq = "Obese";
    document.getElementById("dia").setAttribute("onclick", "checkObese();");
    document.getElementById("dia").style.cursor = "pointer";
  }
  else if (bmi >= 25 && bmi <= 29.9) {
    eq = "Overweight";
    document.getElementById("dia").setAttribute("onclick", "checkOverweight();");
    document.getElementById("dia").style.cursor = "pointer";
  }
  else if (bmi >= 18.5 && bmi <= 24.9) {
    eq = "Normal Weight";
    document.getElementById("dia").setAttribute("onclick", "checkNormal();");
    document.getElementById("dia").style.cursor = "pointer";
  }
  else if (bmi <= 18) {
    eq = "Under Weight";
    document.getElementById("dia").setAttribute("onclick", "checkUnder();");
    document.getElementById("dia").style.cursor = "pointer";
  }
  else {
    eq = "Error";
  }
  document.getElementById("dia").value = eq;


}


function readFormData() {
  var formData = {};

  formData["fullName"] = document.getElementById("fullName").value;
  formData["age"] = document.getElementById("age").value;
  formData["birthday"] = document.getElementById("birthda").value;
  formData["address"] = document.getElementById("add").value;
  formData["weight"] = document.getElementById("wei").value;
  formData["height"] = document.getElementById("hei").value;
  formData["bmi"] = document.getElementById("bmi").value;
  formData["diagnosis"] = document.getElementById("dia").value;
  formData["phone"] = document.getElementById("phon").value;
  formData["date"] = document.getElementById("dat").value;

  return formData;
}

// insetion of data in data table
function insertNewRecord(data) {
  var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
  var newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.fullName;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.age;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.birthday;
  cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.address;
  cell5 = newRow.insertCell(4);
  cell5.innerHTML = data.weight;
  cell6 = newRow.insertCell(5);
  cell6.innerHTML = data.height;
  cell7 = newRow.insertCell(6);
  cell7.innerHTML = data.bmi;
  cell8 = newRow.insertCell(7);
  cell8.innerHTML = data.diagnosis;
  cell9 = newRow.insertCell(8);
  cell9.innerHTML = data.phone;
  cell10 = newRow.insertCell(9);
  cell10.innerHTML = data.date;

  cell11 = newRow.insertCell(10);
  cell11.innerHTML = `<a onClick="onEdit(this)">Edit</a>
    <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
  basicTimeSetter();
  document.getElementById("fullName").value = "";
  document.getElementById("age").value = "";
  document.getElementById("birthda").value = "";
  document.getElementById("add").value = "";
  document.getElementById("wei").value = "";
  document.getElementById("hei").value = "";
  document.getElementById("bmi").value = "";
  document.getElementById("dia").value = "";
  document.getElementById("phon").value = "";
  document.getElementById('dia').removeAttribute('onclick');
  document.getElementById('dia').removeAttribute('style');


  selectedRow = null;
}

function onEdit(td) {
  selectedRow = td.parentElement.parentElement;
  document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;

  var seldata = document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
  alert("Welcome to Editing Mode \nIf done select Save to save your new entry");

  document.getElementById("age").value = selectedRow.cells[1].innerHTML;
  document.getElementById("birthda").value = selectedRow.cells[2].innerHTML;
  document.getElementById("add").value = selectedRow.cells[3].innerHTML;
  document.getElementById("wei").value = selectedRow.cells[4].innerHTML;
  document.getElementById("hei").value = selectedRow.cells[5].innerHTML;
  document.getElementById("bmi").value = selectedRow.cells[6].innerHTML;
  document.getElementById("dia").value = selectedRow.cells[7].innerHTML;
  document.getElementById("phon").value = selectedRow.cells[8].innerHTML;
  document.getElementById("dat").value = selectedRow.cells[9].innerHTML;
}

function updateRecord(formData) {
  selectedRow.cells[0].innerHTML = formData.fullName;
  selectedRow.cells[1].innerHTML = formData.age;
  selectedRow.cells[2].innerHTML = formData.birthday;
  selectedRow.cells[3].innerHTML = formData.address;
  selectedRow.cells[4].innerHTML = formData.weight;
  selectedRow.cells[5].innerHTML = formData.height;
  selectedRow.cells[6].innerHTML = formData.bmi;
  selectedRow.cells[7].innerHTML = formData.diagnosis;
  selectedRow.cells[8].innerHTML = formData.phone;
  selectedRow.cells[9].innerHTML = formData.date;

}

function onDelete(td) {
  if (confirm('Are you sure to delete this record ?')) {
    row = td.parentElement.parentElement;
    document.getElementById("employeeList").deleteRow(row.rowIndex);
    resetForm();
  }
}

function validate() {
  isValid = true;
  if (document.getElementById("fullName").value == "") {
    isValid = false;
    document.getElementById("fullNameValidationError").classList.remove("hide");
  } else {
    isValid = true;
    if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
      document.getElementById("fullNameValidationError").classList.add("hide");
  }
  //age
  if (document.getElementById("age").value == "") {
    isValid = false;
    document.getElementById("ageValidationError").classList.remove("hide");
  } else {
    isValid = true;
    if (!document.getElementById("ageValidationError").classList.contains("hide"))
      document.getElementById("ageValidationError").classList.add("hide");
  }
  //height
  if (document.getElementById("hei").value == "") {
    isValid = false;
    document.getElementById("heightValidationError").classList.remove("hide");
  } else {
    isValid = true;
    if (!document.getElementById("heightValidationError").classList.contains("hide"))
      document.getElementById("heightValidationError").classList.add("hide");
  }
  //weight
  if (document.getElementById("wei").value == "") {
    isValid = false;
    document.getElementById("weightValidationError").classList.remove("hide");
  } else {
    isValid = true;
    if (!document.getElementById("weightValidationError").classList.contains("hide"))
      document.getElementById("weightValidationError").classList.add("hide");
  }

  return isValid;
}
//load instructions
window.addEventListener('load',
  function() {
    alert("Welcome to Baranggay BMI List\nYou can enter child's info by Entering their details on the left pane\nOn the right pane. You can know the BMI Status of your child. His/her record will be added with the list\nTandaan! Health is Wealth!");
  }, false);

function basicTimeSetter() {
  const date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  document.getElementById("dat").value = `${day}-${month}-${year}`;
}
//onclick magic
function checkOverweight() {
  window.open("about.html#over");
}
function checkObese() {
  window.open("about.html#over");
}
function checkNormal() {
  window.open("about.html#maintain");
}
function checkUnder() {
  window.open("about.html#under");
}