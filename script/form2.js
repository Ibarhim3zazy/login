function funn() {
  n= document.getElementById('n').value;
  a= document.getElementById('a').value;
  l= document.getElementById('l').value;
  if(n.length>2 && n.length<21 && a<101 && a>17 && l<5 && l>0){
    document.getElementById('r').innerHTML += '<tr><td>'+n+'</td><td>'+a+'</td><td>'+l+'</td><td><input type="button" name="" value="Delete" onclick="funndel()"></td></tr>';
  }
  n="";
  a="";
  l="";
  document.getElementById('n').focus();
}
function funndel(){

}
