
function funn(){
  name= document.getElementById('n').value;
  phone= document.getElementById('p').value;
  age= document.getElementById('a').value;
  Tname= /^[A-Z][a-z]{2,18}([ ][A-Z][a-z]{2,18}){2}$/;
  Tphone= /^[0][1][0-2]|[5][0-9]{8}$/;
  Tage= /^[1-9]|[1-9][0-9]$/;
  if(name.length>3 &&
      isNaN(name)==true &&
      Tname.test(name)== true){
        document.getElementById('n').style.border = "solid #3c3 2px";
        document.getElementById('nn').innerHTML= ""
      }
      else {
        document.getElementById('n').style.border = "solid #c33 2px";
        document.getElementById('nn').innerHTML= "<br><div style='height: auto; padding: 10px; width: 150px; background-Color: #f03; text-align: center;'>Wrong name</div>";
      }
  if(phone.length==11 &&
      isNaN(phone)==false &&
      Tphone.test(phone)== true){
        document.getElementById('p').style.border = "solid #3c3 2px";
        document.getElementById('pp').innerHTML= ""
      }
      else {
        document.getElementById('p').style.border = "solid #c33 2px";
        document.getElementById('pp').innerHTML= "<br><div style='height: auto; padding: 10px; width: 150px; background-Color: #f03; text-align: center;'>Wrong phone</div>";
      }
  if(age<100 &&
      isNaN(age)==false &&
      Tage.test(age)== true){
      document.getElementById('a').style.border = "solid #3c3 2px";
      document.getElementById('aa').innerHTML= ""
      }
      else {
        document.getElementById('a').style.border = "solid #c33 2px";
        document.getElementById('aa').innerHTML= "<br><div style='height: auto; padding: 10px; width: 150px; background-Color: #f03; text-align: center;'>Wrong age</div>";
      }
}
function funn1(){
  name= document.getElementById('n').value;
  Tname= /^[A-Z][a-z]{2,18}([ ][A-Z][a-z]{2,18}){2}$/;
  if(name.length>3 &&
      isNaN(name)==true &&
      Tname.test(name)== true){
        document.getElementById('n').style.border = "solid #3c3 2px";
        document.getElementById('nn').innerHTML= ""
      }
      else {
        document.getElementById('n').style.border = "solid #c33 2px";
        document.getElementById('nn').innerHTML= "<br><div style='height: auto; padding: 10px; width: 150px; background-Color: #f03; text-align: center;'>Wrong name</div>";
      }

}
function funn2(){
  phone= document.getElementById('p').value;
  Tphone= /^[0][1][0-2]|[5][0-9]{8}$/;

  if(phone.length==11 &&
      isNaN(phone)==false &&
      Tphone.test(phone)== true){
        document.getElementById('p').style.border = "solid #3c3 2px";
        document.getElementById('pp').innerHTML= ""
      }
      else {
        document.getElementById('p').style.border = "solid #c33 2px";
        document.getElementById('pp').innerHTML= "<br><div style='height: auto; padding: 10px; width: 150px; background-Color: #f03; text-align: center;'>Wrong phone</div>";
      }

}
function funn3(){
  age= document.getElementById('a').value;
  Tage= /^[1-9]|[1-9][0-9]$/;
  if(age<100 &&
      isNaN(age)==false &&
      Tage.test(age)== true){
      document.getElementById('a').style.border = "solid #3c3 2px";
      document.getElementById('aa').innerHTML= ""
      }
      else {
        document.getElementById('a').style.border = "solid #c33 2px";
        document.getElementById('aa').innerHTML= "<br><div style='height: auto; padding: 10px; width: 150px; background-Color: #f03; text-align: center;'>Wrong age</div>";
      }
}
