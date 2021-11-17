
var addbtn = document.querySelector(".addbtn");
var removebtn = document.querySelector(".removebtn");
addbtn.addEventListener('click', function() {
  var textbar = document.getElementById("textbar");
  var ul = document.querySelector(".appendlist");
  var li = document.createElement("li");
  li.setAttribute('id', textbar.value);
  li.appendChild(document.createTextNode(textbar.value));
  ul.appendChild(li);
});


removebtn.addEventListener('click', function() {
    var textbar = document.getElementById("textbar");
    var ul = document.querySelector(".appendlist");
    var items = document.getElementById(textbar.value);
    ul.removeChild(items);
  })
  