
const activebtn = (params) => {
  if(username.classList.contains("pass") &&
email.classList.contains("pass") &&
psw.classList.contains("pass") &&
pswrepeat.classList.contains("pass")){
  registerbtn.removeAttribute("disabled");
}
else{
  registerbtn.setAttribute("disabled","");
}
}

username.addEventListener("keyup",(eo) => {

  if(username.value.length>=3)
  {
    username.classList.remove("error");
    username.classList.add("pass");
    note1.style.display="none";
    username.previousElementSibling.previousElementSibling.style.opacity="1";  
  }
else if(username.value.length==0){
  username.classList.remove("error");
  note1.style.display="none";
  username.classList.remove("pass");
  username.previousElementSibling.previousElementSibling.style.opacity="0";
}
else{
  username.classList.add("error");
  note1.style.display="block";
  username.classList.remove("pass");
  username.previousElementSibling.previousElementSibling.style.opacity="0";
}
activebtn();
})


const regEmail=
/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const regPassword=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*["!@#\$%\^&\*])(?=.{8,})/;

email.addEventListener("keyup",(eo) => {
  if(regEmail.test(email.value))
  {
    email.classList.add("pass");
    email.previousElementSibling.previousElementSibling.style.opacity="1";  
    note2.style.display="none";
    email.classList.remove("error");
  }
  else if(email.value.length==0){
    email.classList.remove("error");
    note2.style.display="none";
    email.classList.remove("pass");
    email.previousElementSibling.previousElementSibling.style.opacity="0";
  }
  else{
    email.classList.add("error");
    note2.style.display="block";
    email.classList.remove("pass");
    email.previousElementSibling.previousElementSibling.style.opacity="0";
  }
  
activebtn();
})

psw.addEventListener("keyup",(eo) => {
  if(regPassword.test(psw.value))
  {
    psw.classList.add("pass");
    psw.previousElementSibling.previousElementSibling.style.opacity="1";  
    note3.style.display="none";
    psw.classList.remove("error");
  }
  else if(psw.value.length==0){
    psw.classList.remove("error");
    note3.style.display="none";
    psw.classList.remove("pass");
    psw.previousElementSibling.previousElementSibling.style.opacity="0";
  }
  else{
    psw.classList.add("error");
    note3.style.display="block";
    psw.classList.remove("pass");
    psw.previousElementSibling.previousElementSibling.style.opacity="0";
  }
  
activebtn();
})

pswrepeat.addEventListener("keyup",(eo) => {
  if(pswrepeat.value==psw.value){
    pswrepeat.classList.add("pass");
    pswrepeat.previousElementSibling.previousElementSibling.style.opacity="1";  
    note4.style.display="none";
    pswrepeat.classList.remove("error");
  }
  else if(psw.value.length==0){
    pswrepeat.classList.remove("error");
    note4.style.display="none";
    pswrepeat.classList.remove("pass");
    pswrepeat.previousElementSibling.previousElementSibling.style.opacity="0";
  }
  else{
    pswrepeat.classList.add("error");
    note4.style.display="block";
    pswrepeat.classList.remove("pass");
    pswrepeat.previousElementSibling.previousElementSibling.style.opacity="0";
  }
  
activebtn();
})

createbtn.addEventListener("click",(eo) => {
  papaform.style.display="block";
  setTimeout(() => {
    formscale.style.transform="scale(1)"
  }, 50);
})

xmark.addEventListener("click",(eo) => {
  formscale.style.transform="scale(0)"
  
  setTimeout(() => {
    papaform.style.display="none";
  }, 1000);
})



