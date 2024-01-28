document.getElementById("sebt").onclick = function() {
    var erts1 = document.getElementById("ert1").value
    var erts2 = document.getElementById("ert2").value
    var erts3 = document.getElementById("ert3").value
    var erts4 = document.getElementById("ert4").value
    var erts5 = document.getElementById("ert5").value


  let lang = 0
 if(erts1 = "html") {
  lang ++;
 }

 if(erts2 = "css") {
   lang ++;
 } 

 if(erts3 = "javascript") {
  lang ++;
 }

 if(erts4 = "php") {
  lang ++;
 }

 if(erts5 = "mysql") {
  lang ++;
 }


 if(lang >= 5) {
  alert("5/5 excellent")
 } else if(lang <= 3) {
  alert(lang + "/5 study more")
 }   
  }