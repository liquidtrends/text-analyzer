function analyzeText(){
  var showText=document.getElementById('output');
  var getText = document.getElementById('textInput');
  var split = getText.value.split(' ');
  var label = ('<span class="label label-success">Success</span>');

if (getText.value != "") {

  showText.innerHTML="You Wrote: " + getText.value;
  for (var i=0; i< split.length; i++) {
    $("table").append("<tr><td> " + split[i] + "</td><td>" + split[i].length + "</td><td>" + label + "</td></tr>");
  }
}
else if (getText.value == "") {
  showText.innerHTML="Please Add Text";
 }
}