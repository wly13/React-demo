window.onload=function () {
  var btn = document.getElementById('btn');
  var sum= document.getElementById('sum');

  btn.onclick=function () {
    sum.innerText=parseInt(sum.innerText)+1
  }
};