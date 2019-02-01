

var div = document.querySelector(".mydiv");
function hjh(){
  var span = document.createElement('span');
  span.className = "New-Element";
  var name = document.getElementById("mytext");
  var name2 = name.value;
//alert(typeof name2);
  span.innerHTML = name2;
  div.appendChild(span) 
}


