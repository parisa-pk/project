
  const form = document.querySelector('#form1')
  const username = document.querySelector('#fullname1');
  const nameInput = document.querySelector('#name')
  const password = document.querySelector('#password1');
  const repass = document.querySelector('#repass')
  const email = document.querySelector('#email');

  function Time() {
    window.location.href = "https://parisa-pk.netlify.app/project";
  
  }
  
form.addEventListener('submit' , function (evn2) {
  evn2.preventDefault();
  
  if(username.value === ''  ||  nameInput.value === ''  ||  password.value === ''  ||  repass.value === ''  ||  email.value === ''){
    iziToast.error({
      message: 'لطفا گزینه های خالی را پر کنید !!',
  });
  }
  else{iziToast.success({
    
    message: 'وارد حساب کاربری شدید.',
});
Time()
}




  const body = {
      name: nameInput.value ,
      username: username.value ,
      email:email.value ,
      password:password.value ,
      repass:repass.value ,
   }
  const res = fetch('https://jsonplaceholder.typicode.com/users' ,{
   method: 'POST' , 
   body: JSON.stringify(body) ,
   headers: {
       'Content-type': 'application/json;',
     },
   })
    res.then(function (result) {
         return result.json()
     })
     .then((function () {
         nameInput.value = '' ;
         username.value = '' ;
         email.value = '' ;
         password.value = '';
         repass.value = '';
     }));
});











