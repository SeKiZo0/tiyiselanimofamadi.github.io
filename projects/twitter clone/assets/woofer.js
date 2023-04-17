const scriptURL = 'https://script.google.com/macros/s/AKfycbxNWy1pqxeGNy76-0F74oUY1J7Fnd5M01vxkVgofxnVet-EyEb8d5FyX7fw9hGkJokR3w/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response),
    window.alert('Your bark was submitted successfully'),
    iwoof.classList.remove("show_woof-container"))
    .catch(error => console.error('Error!', error.message))
});

//used to show the woof dialogue
function showWoof(){
  var iwoof = document.getElementById("iwoof");

  iwoof.classList.add("show_woof-container");
  
}

//this is used to show and display the data
let SHEET_ID = "1kTM4gch2jWBA8vxqlkKPPgwymWZsTecucfuCVwCsZqE";
let SHEET_TITLE = "barks";
let SHEET_RANGE = "A:B";

let FULL_URL = ("https://docs.google.com/spreadsheets/d/" + SHEET_ID + "/gviz/tq?sheet=" + SHEET_TITLE + "&range=" + SHEET_RANGE);

fetch(FULL_URL)
.then(res => res.text())
.then(rep => {
  let data = JSON.parse(rep.substr(47).slice(0,-2));
  console.log(data);
  //used to display the data
  var i, name, msg, div;
  mainCube = [];
for (i = 1; i < data.table.rows.length; ++i) {
  $("#woofs").append("<div id='" + i + "New' class='aWoof'></div>");
  name = data.table.rows[i].c[0].v;
  msg = data.table.rows[i].c[1].v;
  $("#" + i + "New").append("<h1>" + name  + "</h1>" + "<br/>" + "<p>" + msg + "</p>");
}
})