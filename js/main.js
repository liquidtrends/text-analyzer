$(document).ready(function() 
    { 
        $("#mainTable").tablesorter(); 
    } 
); 

function analyzeText(){
  var showText=document.getElementById('output');
  var getText = document.getElementById('textInput');
  var split = getText.value.trim(' ').replace(/[^A-z\']+/g," ").split(' ');
  var label = ('<span class="label label-success">Success</span>');

if (getText.value != "") {

  showText.innerHTML="You Wrote: " + getText.value;
  for (var i=0; i< split.length; i++) {
    $("table").append("<tr><td> " + split[i].toLowerCase() + "</td><td>" + split[i].length + "</td><td>" + label + "</td></tr>");
  }
}
else if (getText.value == "") {
  showText.innerHTML="Please Add Text";
 }
}