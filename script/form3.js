
function f1(){
    w= document.getElementById('width').value;
    h= document.getElementById('height').value;
    x= document.getElementById('x').value;
    y= document.getElementById('y').value;
    color= document.getElementById('color').value;
    if(w<601 && h<601 && w>0 && h>0 ){
    document.getElementById('user').innerHTML+= "<div style='width:"+w+"px; height:"+h+"px;  position: absolute; left:"+x+"px; top:"+y+"px; background-Color:"+color+"; transition: 3s;' onClick='delet(this)'></div>";
    // document.getElementById('drow').style.transition= "3s";
    // document.getElementById('drow'+n).style.width = w + "px";
    // document.getElementById('drow'+n).style.height = h + "px";
    // document.getElementById('drow'+n).style.left = document.getElementById('x').value + "px";
    // document.getElementById('drow'+n).style.top = document.getElementById('y').value + "px";
    // document.getElementById('drow'+n).style.backgroundColor = document.getElementById('color').value;
    // document.getElementById('in').style.backgroundColor = document.getElementById('color').value;
    // document.getElementById('drow'+n).style.display = "flex";
  }
  else {
    alert("Big")
  }
}
function delet()
{
  document.getElementById('drow').style.display = "none";
}
