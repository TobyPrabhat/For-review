function passwordcheck(){
  const inputVal1 = document.getElementById("input1").value;
  const inputVal2 = document.getElementById("input2").value;
  if(inputVal1!=inputVal2){
    document.getElementById("showerror").innerText = "Password Not Matching";
  }
  else if(inputVal1==inputVal2 && inputVal2.length<8){
    document.getElementById("showerror").innerText = "Password should at least contain 8 characters";
  }
  else if(inputVal1==inputVal2 && inputVal2.length>=8){
    if(allLetter(inputVal2)==true){
    document.getElementById("showerror").innerText = "Please add some other charaters than alphabets";
    }
    else{
      document.getElementById("section1").style.display = "none";
      document.getElementById("section2").style.display = "block";
    }
  }
}

function allLetter(inputtxt)
  {
   var letters = /^[a-zA-Z]+$/;
   if(inputtxt.match(letters))
     {
      return true;
     }
   else
     {
     return false;
     }
  }

// prabhattodi
