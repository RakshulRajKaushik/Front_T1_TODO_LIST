function addNew() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("listInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("Cannot take empty");
  } else {
    document.getElementById("list").appendChild(li);
  }
  document.getElementById("listInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "cross";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < cross.length; i++) {
    cross[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

var listItems = document.getElementsByTagName("LI");
for (var i = 0; i < listItems.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "cross";
  span.appendChild(txt);
  listItems[i].appendChild(span);
}

var cross = document.getElementsByClassName("cross");
for (var i = 0; i < cross.length; i++) {
  cross[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

var list = document.querySelector('ul');
list.addEventListener('click', function(event) {
  if (event.target.tagName === 'LI') {
    event.target.classList.toggle('checked');
  }
});